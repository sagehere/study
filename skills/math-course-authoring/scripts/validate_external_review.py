#!/usr/bin/env python3
import argparse, hashlib, json, re, sys
from pathlib import Path

ROLES={'math-education-expert','frontline-teacher','curriculum-researcher','teaching-researcher','other'}
MODES={'written-review','interview','lesson-observation','classroom-trial','workshop','other'}
CATEGORIES={'source-accuracy','concept-sequence','misconception','hint-scaffold','language','representation','evidence','transfer','classroom-feasibility','accessibility','engagement','other'}
SEVERITIES={'suggestion','minor','major','critical'}
DISPOSITIONS={'pending','accepted','partially-accepted','rejected','deferred'}
CHECKS={'package-validation','pedagogy-audit','state-machine','browser-e2e','skill-eval','manual-review'}

def canonical_hash(pkg):
    raw=json.dumps(pkg,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode('utf-8')
    return hashlib.sha256(raw).hexdigest()

def validate(pkg,r):
    e=[]
    def err(x):e.append(x)
    required=['reviewSchemaVersion','reviewId','reviewRound','flowId','reviewedFlowVersion','reviewedPackageSha256','reviewer','context','overall','findings','closure']
    for k in required:
        if k not in r:err('missing '+k)
    if r.get('reviewSchemaVersion')!='0.1.0':err('reviewSchemaVersion must be 0.1.0')
    if r.get('flowId')!=pkg.get('flowId'):err('flowId must match package')
    if not isinstance(r.get('reviewRound'),int) or isinstance(r.get('reviewRound'),bool) or r.get('reviewRound',0)<1:err('reviewRound must be positive integer')
    if not re.match(r'^ER-[A-Z0-9-]+-R[1-9][0-9]*$',str(r.get('reviewId',''))):err('invalid reviewId')
    if not re.match(r'^\d+\.\d+\.\d+$',str(r.get('reviewedFlowVersion',''))):err('invalid reviewedFlowVersion')
    if not re.match(r'^[a-f0-9]{64}$',str(r.get('reviewedPackageSha256',''))):err('invalid reviewedPackageSha256')
    rv=r.get('reviewer') or {}
    if rv.get('role') not in ROLES:err('invalid reviewer.role')
    if (r.get('context') or {}).get('mode') not in MODES:err('invalid context.mode')
    ov=r.get('overall') or {}
    if ov.get('status') not in {'draft','submitted','triaged'}:err('invalid overall.status')
    if not isinstance(ov.get('summary'),str):err('overall.summary must be string')
    findings=r.get('findings')
    if not isinstance(findings,list):err('findings must be array');findings=[]
    ids=set();accepted=False;pending=False
    steps=set((pkg.get('steps') or {}).keys());objectives=set((pkg.get('objectives') or {}).values());mis=set((pkg.get('misconceptions') or {}).values())
    current_snapshot=(r.get('reviewedPackageSha256')==canonical_hash(pkg) and r.get('reviewedFlowVersion')==pkg.get('flowVersion'))
    for i,f in enumerate(findings):
        if not isinstance(f,dict):err(f'findings[{i}] must be object');continue
        fid=f.get('findingId')
        if not re.match(r'^F[1-9][0-9]*$',str(fid or '')):err(f'findings[{i}].findingId invalid')
        if fid in ids:err(f'duplicate findingId {fid}')
        ids.add(fid)
        if f.get('category') not in CATEGORIES:err(f'findings[{i}].category invalid')
        if f.get('severity') not in SEVERITIES:err(f'findings[{i}].severity invalid')
        if not isinstance(f.get('observation'),str) or not f.get('observation','').strip():err(f'findings[{i}].observation required')
        if not isinstance(f.get('recommendation'),str):err(f'findings[{i}].recommendation must be string')
        target=f.get('target') or {}
        if current_snapshot:
            if target.get('stepId') and target['stepId'] not in steps:err(f'findings[{i}] unknown stepId {target["stepId"]}')
            if target.get('objectiveId') and target['objectiveId'] not in objectives:err(f'findings[{i}] unknown objectiveId {target["objectiveId"]}')
            if target.get('misconceptionId') and target['misconceptionId'] not in mis:err(f'findings[{i}] unknown misconceptionId {target["misconceptionId"]}')
        disp=f.get('disposition') or {};ds=disp.get('status')
        if ds not in DISPOSITIONS:err(f'findings[{i}].disposition.status invalid')
        if not isinstance(disp.get('rationale'),str):err(f'findings[{i}].disposition.rationale must be string')
        accepted|=ds in {'accepted','partially-accepted'};pending|=ds=='pending'
        impact=f.get('impact') or {}
        if impact.get('flowVersionPolicy') not in {'undecided','preserve','bump'}:err(f'findings[{i}].impact.flowVersionPolicy invalid')
        if impact.get('sessionPolicy') not in {'undecided','preserve','restart','migrate'}:err(f'findings[{i}].impact.sessionPolicy invalid')
        checks=impact.get('requiredChecks')
        if not isinstance(checks,list) or any(x not in CHECKS for x in checks):err(f'findings[{i}].impact.requiredChecks invalid')
    cl=r.get('closure') or {};status=cl.get('status')
    if status not in {'open','closed'}:err('closure.status invalid')
    reval=cl.get('internalRevalidation') or {}
    for k in ['packageValidation','pedagogyAudit','stateMachine','browserE2E']:
        if not isinstance(reval.get(k),bool):err('closure.internalRevalidation.'+k+' must be boolean')
    if status=='closed':
        if pending:err('closed review cannot contain pending disposition')
        if accepted:
            if not re.match(r'^\d+\.\d+\.\d+$',str(cl.get('resolvedFlowVersion') or '')):err('accepted closed review requires resolvedFlowVersion')
            if not re.match(r'^[a-f0-9]{64}$',str(cl.get('resolvedPackageSha256') or '')):err('accepted closed review requires resolvedPackageSha256')
        if not all(reval.get(k) is True for k in ['packageValidation','pedagogyAudit','stateMachine','browserE2E']):err('closed review requires all internal revalidation gates true')
    return e,current_snapshot

def main():
    ap=argparse.ArgumentParser();ap.add_argument('package');ap.add_argument('review');ap.add_argument('--require-current',action='store_true');ap.add_argument('--require-closed-current',action='store_true');args=ap.parse_args()
    pkg=json.loads(Path(args.package).read_text());r=json.loads(Path(args.review).read_text())
    errors,current=validate(pkg,r)
    h=canonical_hash(pkg);cl=r.get('closure') or {};resolved=(cl.get('resolvedPackageSha256')==h and cl.get('resolvedFlowVersion')==pkg.get('flowVersion'))
    covers=current or (cl.get('status')=='closed' and resolved and all((cl.get('internalRevalidation') or {}).values()))
    if args.require_current and not covers:errors.append('review does not cover current package version/hash')
    if args.require_closed_current and not (cl.get('status')=='closed' and covers):errors.append('review is not closed against current package')
    if errors:
        print(f'EXTERNAL REVIEW VALIDATION FAILED ({len(errors)})',file=sys.stderr)
        for x in errors:print('- '+x,file=sys.stderr)
        raise SystemExit(1)
    state='current' if covers else 'historical/stale-relative-to-current'
    print(f'EXTERNAL REVIEW VALID: {r["reviewId"]} status={cl.get("status")} coverage={state}')

if __name__=='__main__':main()
