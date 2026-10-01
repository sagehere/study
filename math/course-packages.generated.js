/* GENERATED from math/course-packages/*.json by pack-course-packages.cjs. Do not edit manually. */
'use strict';
globalThis.CoursePackageData={
  "u1.chain.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u1.chain.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u1",
    "nodeId": "chain",
    "initialStep": "diagnose",
    "labels": {
      "badge": "多步数量链正式课",
      "title": "连除与条件整理",
      "description": "先找中间量，再把总量逐层分到每一份。"
    },
    "objectives": {
      "structure": "O-U1-CHAIN-01",
      "middle": "O-U1-CHAIN-02",
      "order": "O-U1-CHAIN-03",
      "transfer": "O-U1-CHAIN-04"
    },
    "misconceptions": {
      "skip": "M-U1-CHAIN-01",
      "wrongOrder": "M-U1-CHAIN-02"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "quantity-relation",
      "sourcePages": "10-12",
      "sourceNote": "教材以2个书架、每架4层、共224本为主例，要求整理条件、先求有关联中间量，再列综合算式；练习继续覆盖900本分6年级每级3班、150片药每天3次每次2片等连除结构。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U1-CHAIN-01",
        "hints": [
          "",
          "目标是“每层”。",
          "总量224要平均分到所有层。",
          "先知道总共有几层。",
          "2×4=8层。"
        ],
        "view": {
          "title": "先找“总共有多少份”",
          "prompt": "2个书架，每个4层，共224本。平均每层多少本？哪一个中间量最有帮助？",
          "choices": [
            [
              "layers",
              "一共有2×4=8层"
            ],
            [
              "books",
              "先算224×4"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "每架层数",
            "quantity": "书架数",
            "total": "总层数",
            "unitValue": "4层",
            "quantityValue": "2架",
            "totalValue": "8层"
          }
        },
        "transitions": [
          {
            "when": "layers",
            "to": "middle",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "books",
            "to": "repairSkip",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-CHAIN-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairSkip": {
        "objectiveId": "O-U1-CHAIN-01",
        "hints": [
          "",
          "每一层是一份。",
          "2架，每架4层。",
          "总份数=2×4。",
          "所以是8份。"
        ],
        "view": {
          "title": "不能跳过份数结构",
          "prompt": "224本最终要平均分成多少份？",
          "choices": [
            [
              "8",
              "8份"
            ],
            [
              "4",
              "4份"
            ]
          ]
        },
        "transitions": [
          {
            "when": "8",
            "to": "middle",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-CHAIN-01"
              },
              {
                "type": "scheduleReview",
                "reason": "chain-total-parts"
              }
            ]
          }
        ]
      },
      "middle": {
        "objectiveId": "O-U1-CHAIN-02",
        "hints": [
          "",
          "总量÷总份数。",
          "224÷8。",
          "得到28。",
          "所以每层28本。"
        ],
        "view": {
          "title": "中间量一旦明确，第二步就清楚了",
          "prompt": "已知一共8层、224本，每层多少本？",
          "choices": [
            [
              "28",
              "28本"
            ],
            [
              "1792",
              "1792本"
            ]
          ]
        },
        "transitions": [
          {
            "when": "28",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U1-CHAIN-03",
        "hints": [
          "",
          "连除不是机械格式。",
          "每次除法都在消掉一层“份数”。",
          "先解释中间量，步骤才可靠。",
          "综合算式只是把已理解的关系压缩。"
        ],
        "view": {
          "title": "把两步关系写成可复用方法",
          "prompt": "哪种方法最可靠？",
          "choices": [
            [
              "rule",
              "先求总份数，再用总量÷总份数；或按层级连续除，但每一步都要说清除掉的是什么"
            ],
            [
              "blind",
              "看到两个条件就连续除，不用解释"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "multi-step-division-chain"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U1-CHAIN-03",
        "hints": [
          "",
          "先求总班数。",
          "6×3=18班。",
          "900÷18。",
          "得到50本。"
        ],
        "view": {
          "title": "教材式独立题",
          "prompt": "900本图书平均分给6个年级，每个年级3个班。平均每班多少本？",
          "choices": [
            [
              "50",
              "50本"
            ],
            [
              "450",
              "450本"
            ],
            [
              "18",
              "18本"
            ]
          ]
        },
        "transitions": [
          {
            "when": "50",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U1-CHAIN-04",
        "hints": [
          "",
          "先求每天吃多少片。",
          "3×2=6片/天。",
          "150÷6。",
          "得到25天。"
        ],
        "view": {
          "title": "迁移到另一种连除情境",
          "prompt": "150片药，每天吃3次，每次2片，可以吃多少天？",
          "choices": [
            [
              "25",
              "25天"
            ],
            [
              "100",
              "100天"
            ],
            [
              "6",
              "6天"
            ]
          ]
        },
        "transitions": [
          {
            "when": "25",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U1-CHAIN-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你会把多层条件拆成中间量了",
          "prompt": "连除题的关键不是“除两次”，而是看总量被哪几层份数逐步分开，并给每个中间量起清楚的名字。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u1.invariant.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u1.invariant.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u1",
    "nodeId": "invariant",
    "initialStep": "diagnose",
    "labels": {
      "badge": "关系规律正式课",
      "title": "商不变规律",
      "description": "从成组算式比较中发现：被除数和除数同时乘或除以同一个非零数，商不变。"
    },
    "objectives": {
      "notice": "O-U1-INVARIANT-01",
      "sameFactor": "O-U1-INVARIANT-02",
      "nonzero": "O-U1-INVARIANT-03",
      "transfer": "O-U1-INVARIANT-04"
    },
    "misconceptions": {
      "oneSide": "M-U1-INVARIANT-01",
      "differentFactor": "M-U1-INVARIANT-02",
      "zeroFactor": "M-U1-INVARIANT-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "13-15",
      "sourceNote": "教材第15页探索表以270÷30=9为基准，列出540÷60、810÷90、54÷6、27÷3，引导发现被除数和除数同时乘或除以同一个非零数，商保持不变。本ready流程仅覆盖教材直接支持的商不变规律，不把“有余数时余数如何还原”的项目扩展结论冒充教材原结论。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U1-INVARIANT-01",
        "hints": [
          "",
          "不要只看被除数。",
          "被除数和除数都同时变了。",
          "540÷60可以同时÷2还原成270÷30。",
          "所以商仍是9。"
        ],
        "view": {
          "title": "先看一组算式里“什么没变”",
          "prompt": "270÷30=9。把被除数和除数都乘2，得到540÷60。商是多少？",
          "choices": [
            [
              "9",
              "9"
            ],
            [
              "18",
              "18"
            ],
            [
              "4.5",
              "4.5"
            ]
          ]
        },
        "transitions": [
          {
            "when": "9",
            "to": "sameFactor",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "18",
            "to": "repairOneSide",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-INVARIANT-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairOneSide": {
        "objectiveId": "O-U1-INVARIANT-01",
        "hints": [
          "",
          "比较270→540。",
          "再比较30→60。",
          "两边都乘了同一个2。",
          "比例关系没有变，所以商不变。"
        ],
        "view": {
          "title": "为什么不能只把商也乘2",
          "prompt": "540÷60里，被除数和除数相对270÷30发生了什么？",
          "choices": [
            [
              "both",
              "都乘2"
            ],
            [
              "dividend",
              "只有被除数乘2"
            ]
          ]
        },
        "transitions": [
          {
            "when": "both",
            "to": "sameFactor",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-INVARIANT-01"
              },
              {
                "type": "scheduleReview",
                "reason": "quotient-invariant-both-sides"
              }
            ]
          }
        ]
      },
      "sameFactor": {
        "objectiveId": "O-U1-INVARIANT-02",
        "hints": [
          "",
          "比较两个数分别乘了几倍。",
          "270→810是×3。",
          "30→90也是×3。",
          "只有同乘同一个倍数才能保证商不变。"
        ],
        "view": {
          "title": "关键不是“都变”，而是“同倍数变”",
          "prompt": "270÷30=9。下面哪一个一定仍等于9？",
          "choices": [
            [
              "same",
              "810÷90"
            ],
            [
              "different",
              "810÷60"
            ],
            [
              "one",
              "540÷30"
            ]
          ]
        },
        "transitions": [
          {
            "when": "same",
            "to": "dividePattern",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "different",
            "to": "repairDifferent",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-INVARIANT-02",
                "confidence": "high"
              }
            ]
          },
          {
            "when": "one",
            "to": "repairDifferent",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-INVARIANT-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairDifferent": {
        "objectiveId": "O-U1-INVARIANT-02",
        "hints": [
          "",
          "270→810是×3。",
          "30→60是×2。",
          "倍数不同，原比例变了。",
          "所以不能套商不变规律。"
        ],
        "view": {
          "title": "“都变了”还不够",
          "prompt": "810÷60里，270和30分别变成了几倍？",
          "choices": [
            [
              "diff",
              "被除数×3，除数×2，不是同一个倍数"
            ],
            [
              "same",
              "都是×3"
            ]
          ]
        },
        "transitions": [
          {
            "when": "diff",
            "to": "dividePattern",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-INVARIANT-02"
              },
              {
                "type": "scheduleReview",
                "reason": "same-factor-requirement"
              }
            ]
          }
        ]
      },
      "dividePattern": {
        "objectiveId": "O-U1-INVARIANT-02",
        "hints": [
          "",
          "270→54。",
          "30→6。",
          "两者都同时÷5。",
          "所以商仍为9。"
        ],
        "view": {
          "title": "同时除也可以保持商",
          "prompt": "270÷30=9。54÷6为什么也等于9？",
          "choices": [
            [
              "divide",
              "被除数和除数同时÷5"
            ],
            [
              "subtract",
              "两个数都减216"
            ]
          ]
        },
        "transitions": [
          {
            "when": "divide",
            "to": "nonzero",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "nonzero": {
        "objectiveId": "O-U1-INVARIANT-03",
        "hints": [
          "",
          "先检查除法是否合法。",
          "除数不能是0。",
          "同时乘0会把除数变成0。",
          "所以规律中的共同乘数/除数必须非零。"
        ],
        "view": {
          "title": "为什么规则里必须写“非零”",
          "prompt": "把270和30都乘0，会得到0÷0。这个算式能作为“商不变”的例子吗？",
          "choices": [
            [
              "no",
              "不能，除数不能是0"
            ],
            [
              "yes",
              "能，商还是9"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "yes",
            "to": "repairZero",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-INVARIANT-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairZero": {
        "objectiveId": "O-U1-INVARIANT-03",
        "hints": [
          "",
          "这不是大小问题。",
          "除法有定义条件。",
          "除数必须不为0。",
          "所以共同变化的因数不能取0。"
        ],
        "view": {
          "title": "只修“非零条件”",
          "prompt": "为什么不能用0作共同乘数？",
          "choices": [
            [
              "divisor",
              "会把除数变成0，除法失去意义"
            ],
            [
              "small",
              "因为0太小"
            ]
          ]
        },
        "transitions": [
          {
            "when": "divisor",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-INVARIANT-03"
              },
              {
                "type": "scheduleReview",
                "reason": "nonzero-invariant-factor"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U1-INVARIANT-03",
        "hints": [
          "",
          "同时、同一个、非零，三个条件都重要。",
          "只变一边不行。",
          "两个倍数不同也不行。",
          "完整条件：同时乘或除以同一个非零数。"
        ],
        "view": {
          "title": "现在再说完整规律",
          "prompt": "哪一句最准确？",
          "choices": [
            [
              "rule",
              "被除数和除数同时乘或除以同一个非零数，商不变"
            ],
            [
              "one",
              "只要被除数变化，商就不变"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "quotient-invariant"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U1-INVARIANT-02",
        "hints": [
          "",
          "720→72是÷10。",
          "80→8也是÷10。",
          "共同除数10非零。",
          "所以商相同，都是9。"
        ],
        "view": {
          "title": "换一道新题独立判断",
          "prompt": "720÷80与72÷8的商是否相同？",
          "choices": [
            [
              "same",
              "相同，都是9"
            ],
            [
              "different",
              "不同"
            ]
          ]
        },
        "transitions": [
          {
            "when": "same",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U1-INVARIANT-04",
        "hints": [
          "",
          "先做等值变形。",
          "3600÷5=720。",
          "45÷5=9。",
          "720÷9=80。"
        ],
        "view": {
          "title": "用规律简化一个较难除法",
          "prompt": "3600÷45可以把被除数和除数同时÷5，变成720÷9。结果是多少？",
          "choices": [
            [
              "80",
              "80"
            ],
            [
              "400",
              "400"
            ],
            [
              "8",
              "8"
            ]
          ]
        },
        "transitions": [
          {
            "when": "80",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U1-INVARIANT-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你会判断什么时候商真的不变了",
          "prompt": "商不变不是“两个数都动了就行”，而是被除数和除数必须同时按同一个非零倍数变化。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u1.trial.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u1.trial.v2",
    "flowVersion": "0.4.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u1",
    "nodeId": "trial",
    "initialStep": "diagnose",
    "labels": {
      "badge": "教学试点",
      "title": "试商与调商 V2",
      "description": "答对还要说得通；典型错误只修当前概念，不整段重学。"
    },
    "objectives": {
      "estimate": "O-U1-TRIAL-01",
      "product": "O-U1-TRIAL-02",
      "remainder": "O-U1-TRIAL-03",
      "verify": "O-U1-TRIAL-04",
      "explain": "O-U1-TRIAL-05"
    },
    "misconceptions": {
      "remainder": "M-U1-TRIAL-02",
      "verifyApprox": "M-U1-TRIAL-03",
      "luckyGuess": "M-U1-TRIAL-04"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U1-TRIAL-03",
        "hints": [
          "",
          "只比较余数和除数，不急着算完整答案。",
          "余数如果达到除数，说明至少还能组成一整组。",
          "这里余数28，除数也是28；把它们放在一起比较。",
          "196－28×6＝28，而28÷28＝1，所以还可以再分一组。"
        ],
        "view": {
          "title": "先判断，再解释",
          "prompt": "196÷28，把28看成30先试商6。28×6＝168，196－168＝28。余下的28还能再分成一整组吗？",
          "choices": [
            [
              "can",
              "能"
            ],
            [
              "cannot",
              "不能"
            ]
          ],
          "renderer": "ratioBar",
          "rendererArgs": [
            196,
            168,
            28,
            "196中已分168，余28，与一组28比较"
          ]
        },
        "transitions": [
          {
            "when": "can",
            "to": "reasonRemainder",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "cannot",
            "to": "repairRemainder",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-TRIAL-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "reasonRemainder": {
        "objectiveId": "O-U1-TRIAL-05",
        "hints": [
          "",
          "想一想“余数必须小于除数”是什么意思。",
          "如果余数和除数相等，余数还没有小于除数。",
          "28个正好就是一整组28个。",
          "所以“能”不是猜的：因为余数28达到除数28，还能再组成一整组。"
        ],
        "view": {
          "title": "你为什么判断“还能分”？",
          "prompt": "选出真正能说明理由的一项。",
          "choices": [
            [
              "becauseEnough",
              "因为余数28已经达到除数28，还能组成一整组"
            ],
            [
              "becauseNear",
              "因为28接近30"
            ],
            [
              "becauseEven",
              "因为196是偶数"
            ]
          ],
          "renderer": "ratioBar",
          "rendererArgs": [
            196,
            168,
            28,
            "余数28与一组28等量"
          ]
        },
        "transitions": [
          {
            "when": "becauseEnough",
            "to": "contrast",
            "lane": "fast",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              },
              {
                "type": "emit",
                "event": "EXPLANATION_PASS",
                "result": {
                  "independent": true
                }
              }
            ]
          },
          {
            "when": "*",
            "to": "repairRemainder",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-TRIAL-04",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairRemainder": {
        "objectiveId": "O-U1-TRIAL-03",
        "hints": [
          "",
          "只比较28和28。",
          "余数至少达到除数时还能组成一组。",
          "把余下的28看成一盒完整的28。",
          "28÷28＝1，余下28正好还能分1组。"
        ],
        "view": {
          "title": "只修一个概念：余数约束",
          "prompt": "每组需要28，余下也是28。这个余数够不够再组成一整组？",
          "choices": [
            [
              "enough",
              "够"
            ],
            [
              "not",
              "不够"
            ]
          ],
          "renderer": "ratioBar",
          "rendererArgs": [
            196,
            168,
            28,
            "余数28等于一整组28"
          ]
        },
        "transitions": [
          {
            "when": "enough",
            "to": "repairAdjust"
          }
        ]
      },
      "repairAdjust": {
        "objectiveId": "O-U1-TRIAL-03",
        "hints": [
          "",
          "还能多分一组时，商应该朝哪个方向变化？",
          "多分一组意味着商增加1。",
          "当前试商6，再多1组就是7。",
          "6＋1＝7，所以应把商调大。"
        ],
        "view": {
          "title": "你来决定怎么调商",
          "prompt": "既然还能再分一组，当前试商6应该怎样调整？",
          "choices": [
            [
              "up",
              "调大"
            ],
            [
              "down",
              "调小"
            ],
            [
              "same",
              "不变"
            ]
          ]
        },
        "transitions": [
          {
            "when": "up",
            "to": "freshRemainder",
            "effects": [
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U1-TRIAL-02"
                }
              },
              {
                "type": "resolveMisconception",
                "id": "M-U1-TRIAL-02"
              },
              {
                "type": "resolveMisconception",
                "id": "M-U1-TRIAL-04",
                "confidence": "medium"
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              },
              {
                "type": "scheduleReview",
                "reason": "misconception_repair"
              },
              {
                "type": "assignVariant"
              }
            ]
          }
        ]
      },
      "freshRemainder": {
        "objectiveId": "O-U1-TRIAL-03",
        "hints": [
          "",
          "先看“余数”和“除数”的大小关系。",
          "只要余数不小于除数，就还可以再分一组。",
          "把图中的黄色余量和一整组宽度对比。",
          "余数达到或超过除数，所以当前试商仍偏小。"
        ],
        "variants": [
          {
            "id": "rv-172-28",
            "a": 172,
            "b": 28,
            "q": 5,
            "p": 140,
            "r": 32,
            "answer": "can"
          },
          {
            "id": "rv-252-36",
            "a": 252,
            "b": 36,
            "q": 6,
            "p": 216,
            "r": 36,
            "answer": "can"
          },
          {
            "id": "rv-329-47",
            "a": 329,
            "b": 47,
            "q": 6,
            "p": 282,
            "r": 47,
            "answer": "can"
          }
        ],
        "view": {
          "title": "换一道新题确认，不背答案",
          "promptTemplate": "{{variant.a}}÷{{variant.b}}先试商{{variant.q}}。{{variant.b}}×{{variant.q}}＝{{variant.p}}，余数{{variant.r}}。还能再分一组吗？",
          "choices": [
            [
              "can",
              "能"
            ],
            [
              "cannot",
              "不能"
            ]
          ],
          "renderer": "ratioBar",
          "rendererArgs": [
            "{{variant.a}}",
            "{{variant.p}}",
            "{{variant.b}}",
            "{{variant.a}}中已分{{variant.p}}，余{{variant.r}}，与一组{{variant.b}}比较"
          ]
        },
        "transitions": [
          {
            "when": "variantAnswer",
            "to": "contrast",
            "lane": "standard",
            "effects": [
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "fresh_variant": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              },
              {
                "type": "clearVariant"
              }
            ]
          }
        ]
      },
      "contrast": {
        "objectiveId": "O-U1-TRIAL-04",
        "hints": [
          "",
          "30只是为了让试商更方便，题目里的除数没有变。",
          "真正检验答案，要用原题中的数。",
          "原题是196÷28，所以乘回去应使用28。",
          "近似数负责“估”，原除数负责“验”。"
        ],
        "view": {
          "title": "试商和验证不是同一个数",
          "prompt": "把28看成30只是为了试商。真正验证196÷28的商时，应该用哪个除数乘回去？",
          "choices": [
            [
              "28",
              "原除数28"
            ],
            [
              "30",
              "近似数30"
            ]
          ]
        },
        "transitions": [
          {
            "when": "28",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "30",
            "to": "repairVerify",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-TRIAL-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairVerify": {
        "objectiveId": "O-U1-TRIAL-04",
        "hints": [
          "",
          "哪个数来自原题，哪个数只是临时近似？",
          "28来自原题，30只是帮助试商。",
          "用28乘回去检验。",
          "28×7＝196，所以验证阶段必须使用28。"
        ],
        "view": {
          "title": "回到原题",
          "prompt": "原题是196÷28；30只是近似。验证商时该使用？",
          "choices": [
            [
              "28",
              "原除数28"
            ],
            [
              "30",
              "近似数30"
            ]
          ]
        },
        "transitions": [
          {
            "when": "28",
            "to": "formalize",
            "lane": "standard",
            "effects": [
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U1-TRIAL-03"
                }
              },
              {
                "type": "resolveMisconception",
                "id": "M-U1-TRIAL-03"
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U1-TRIAL-05",
        "hints": [
          "",
          "把“估”和“验”分开想。",
          "试商可以借助接近的整十数，但验证要回到原除数。",
          "再加上两条调商条件：乘积过大→调小；余数还能成组→调大。",
          "完整规律：近似数帮助试商；原除数负责验证；乘积过大调小，余数不小于除数调大。"
        ],
        "view": {
          "title": "现在才把规律说完整",
          "prompt": "哪一句最准确地总结刚才的发现？",
          "choices": [
            [
              "rule",
              "近似数帮助试商；原除数负责验证；乘积过大调小，余数不小于除数调大"
            ],
            [
              "near",
              "只要把除数看成整十数，最后也一直用整十数"
            ],
            [
              "guess",
              "试商主要靠猜，多试几次就行"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "estimate-with-near-ten;verify-with-original;adjust-by-product-and-remainder"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U1-TRIAL-02",
        "hints": [
          "",
          "先看38×7和228谁大。",
          "乘积超过被除数，说明分得太多。",
          "38×7＝266＞228。",
          "乘积过大，所以商7偏大，应调小。"
        ],
        "view": {
          "title": "撤掉支架，独立判断",
          "prompt": "228÷38试商7，38×7＝266。下一步应该？",
          "choices": [
            [
              "down",
              "把商调小"
            ],
            [
              "up",
              "把商调大"
            ],
            [
              "same",
              "商不变"
            ]
          ],
          "renderer": "compareBars",
          "rendererArgs": [
            228,
            266,
            "比较被除数228与乘积266"
          ]
        },
        "transitions": [
          {
            "when": "down",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U1-TRIAL-01",
        "hints": [
          "",
          "先看49×7和356，再看余数。",
          "49×7＝343，没有超过356。",
          "356－343＝13，且13＜49。",
          "乘积不过大、余数又小于除数，所以试商7合适。"
        ],
        "view": {
          "title": "迁移：换除数、换被除数",
          "prompt": "356÷49，把49看成50后试商7。49×7＝343，余数13。这个试商怎样？",
          "choices": [
            [
              "fit",
              "合适"
            ],
            [
              "up",
              "偏小，要调大"
            ],
            [
              "down",
              "偏大，要调小"
            ]
          ],
          "renderer": "ratioBar",
          "rendererArgs": [
            356,
            343,
            49,
            "356中已分343，余13，小于一组49"
          ]
        },
        "transitions": [
          {
            "when": "fit",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              },
              {
                "type": "markObjective",
                "objectiveId": "O-U1-TRIAL-04",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U1-TRIAL-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "reviewOnH4": false,
        "view": {
          "title": "你已经完成“试商—验证—调商”闭环",
          "prompt": "试商可以借助近似数降低估算难度，但判断商是否合适必须回到原除数：乘积超过被除数就调小；余数不小于除数就调大。",
          "choices": []
        },
        "transitions": []
      }
    }
  },
  "u1.vertical.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u1.vertical.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u1",
    "nodeId": "vertical",
    "initialStep": "diagnose",
    "labels": {
      "badge": "程序竖式正式课",
      "title": "竖式与余数",
      "description": "从“商写在哪一位”和“余数必须小于除数”理解两位数除法竖式。"
    },
    "objectives": {
      "place": "O-U1-VERTICAL-01",
      "cycle": "O-U1-VERTICAL-02",
      "remainder": "O-U1-VERTICAL-03",
      "transfer": "O-U1-VERTICAL-04"
    },
    "misconceptions": {
      "place": "M-U1-VERTICAL-01",
      "skip": "M-U1-VERTICAL-02",
      "remainder": "M-U1-VERTICAL-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "8-9",
      "sourceNote": "教材用156÷12说明两位数除法竖式，追问“1为什么写在商的十位上”，并总结：先除前两位，不够商1时再看前三位；除到哪一位，商写在那一位上；每次除后的余数都比除数小。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U1-VERTICAL-01",
        "hints": [
          "",
          "先看当前参与除法的是被除数的哪一位。",
          "15对应的是156里的百位和十位，当前商定位在十位。",
          "除到被除数的哪一位，商就写在那一位上面。",
          "所以1写在商的十位。"
        ],
        "view": {
          "title": "商的第一位为什么写在十位",
          "prompt": "156÷12，先用前两位15÷12商1。这个1应该写在商的哪一位？",
          "choices": [
            [
              "tens",
              "十位"
            ],
            [
              "ones",
              "个位"
            ]
          ],
          "renderer": "longDivision",
          "rendererArgs": {
            "dividend": 156,
            "divisor": 12,
            "quotient": "1_",
            "current": 15,
            "label": "156除以12，当前用15除以12，商1写在十位"
          }
        },
        "transitions": [
          {
            "when": "tens",
            "to": "subtract",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "ones",
            "to": "repairPlace",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-VERTICAL-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairPlace": {
        "objectiveId": "O-U1-VERTICAL-01",
        "hints": [
          "",
          "商的位置不是由数字大小决定。",
          "看被除数当前除到哪一位。",
          "当前是十位。",
          "所以商1写在十位上面。"
        ],
        "view": {
          "title": "只修“商的位置”",
          "prompt": "为什么不能把这个1写在个位？",
          "choices": [
            [
              "current",
              "因为当前除到十位，商要和当前数位对齐"
            ],
            [
              "small",
              "因为1比较小"
            ]
          ]
        },
        "transitions": [
          {
            "when": "current",
            "to": "subtract",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-VERTICAL-01"
              },
              {
                "type": "scheduleReview",
                "reason": "quotient-place-value"
              }
            ]
          }
        ]
      },
      "subtract": {
        "objectiveId": "O-U1-VERTICAL-02",
        "hints": [
          "",
          "竖式每一位都形成一个完整循环。",
          "先用商乘除数。",
          "再从当前被除数里减去这个积。",
          "得到余数后，才能落下下一位。"
        ],
        "view": {
          "title": "每一步都要“商—乘—减—落”",
          "prompt": "15÷12商1后，下一步最合理是什么？",
          "choices": [
            [
              "multiply",
              "用1×12，再从15里减去12"
            ],
            [
              "bring",
              "直接把6落下来，不做乘减"
            ],
            [
              "next",
              "马上写下一个商"
            ]
          ],
          "renderer": "longDivision",
          "rendererArgs": {
            "dividend": 156,
            "divisor": 12,
            "quotient": "1_",
            "current": 15,
            "product": 12,
            "remainder": 3,
            "highlight": "remainder",
            "label": "156除以12第一步：15减12余3"
          }
        },
        "transitions": [
          {
            "when": "multiply",
            "to": "bringDown",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "bring",
            "to": "repairCycle",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-VERTICAL-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairCycle": {
        "objectiveId": "O-U1-VERTICAL-02",
        "hints": [
          "",
          "“落”不是独立动作。",
          "它要和上一轮的余数组成新的当前被除数。",
          "先得到15－12=3。",
          "再落6，得到36。"
        ],
        "view": {
          "title": "为什么不能直接“落”下一位",
          "prompt": "如果不先算15－12，能知道下一步要把6和哪个余数组成新数吗？",
          "choices": [
            [
              "no",
              "不能，必须先得到余数"
            ],
            [
              "yes",
              "能，直接把6当成新被除数"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "bringDown",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-VERTICAL-02"
              },
              {
                "type": "scheduleReview",
                "reason": "long-division-cycle"
              }
            ]
          }
        ]
      },
      "bringDown": {
        "objectiveId": "O-U1-VERTICAL-02",
        "hints": [
          "",
          "找最大的整商，使乘积不超过36。",
          "12×3=36。",
          "12×4=48太大。",
          "所以商3。"
        ],
        "view": {
          "title": "落下下一位，继续同样循环",
          "prompt": "余3，落下6得到36。36÷12应该商几？",
          "choices": [
            [
              "3",
              "3"
            ],
            [
              "2",
              "2"
            ],
            [
              "4",
              "4"
            ]
          ],
          "renderer": "longDivision",
          "rendererArgs": {
            "dividend": 156,
            "divisor": 12,
            "quotient": "13",
            "current": 36,
            "product": 36,
            "remainder": 0,
            "highlight": "product",
            "label": "落下6后得到36，36除以12商3"
          }
        },
        "transitions": [
          {
            "when": "3",
            "to": "remainderRule",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "remainderRule": {
        "objectiveId": "O-U1-VERTICAL-03",
        "hints": [
          "",
          "余数表示当前还没分完的量。",
          "如果余数≥除数，还能再分一整份。",
          "那说明当前商偏小。",
          "所以每步余数都必须小于除数。"
        ],
        "view": {
          "title": "余数为什么必须小于除数",
          "prompt": "如果某一步除完后余数是15，而除数是12，这一步能结束吗？",
          "choices": [
            [
              "no",
              "不能，还能再商1"
            ],
            [
              "yes",
              "能，余数可以大于除数"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "yes",
            "to": "repairRemainder",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U1-VERTICAL-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairRemainder": {
        "objectiveId": "O-U1-VERTICAL-03",
        "hints": [
          "",
          "比较15和12。",
          "15里至少还有1个12。",
          "所以不能把15当最终余数。",
          "应继续调整商，直到余数<12。"
        ],
        "view": {
          "title": "只修余数约束",
          "prompt": "余数15、除数12时，至少还能再分出几份12？",
          "choices": [
            [
              "1",
              "1份"
            ],
            [
              "0",
              "0份"
            ]
          ]
        },
        "transitions": [
          {
            "when": "1",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-VERTICAL-03"
              },
              {
                "type": "scheduleReview",
                "reason": "remainder-less-than-divisor"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U1-VERTICAL-02",
        "hints": [
          "",
          "位置、步骤、余数三个条件缺一不可。",
          "位置由当前数位决定。",
          "步骤按商—乘—减—落循环。",
          "余数每一步都必须小于除数。"
        ],
        "view": {
          "title": "现在总结竖式规则",
          "prompt": "哪组规则最完整？",
          "choices": [
            [
              "rule",
              "除到哪一位商写哪一位；每步商、乘、减、落；余数始终小于除数"
            ],
            [
              "place",
              "商都写个位；最后余数小于除数即可"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "long-division-place-cycle-remainder"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U1-VERTICAL-02",
        "hints": [
          "",
          "先看59÷28。",
          "59够商1，所以不用看到593才开始。",
          "当前除到十位。",
          "所以商的最高位在十位。"
        ],
        "view": {
          "title": "换一道教材题独立判断",
          "prompt": "593÷28，商的最高位应该写在哪一位？",
          "choices": [
            [
              "tens",
              "十位"
            ],
            [
              "ones",
              "个位"
            ],
            [
              "hundreds",
              "百位"
            ]
          ],
          "renderer": "longDivision",
          "rendererArgs": {
            "dividend": 593,
            "divisor": 28,
            "quotient": "2_",
            "current": 59,
            "product": 56,
            "remainder": 3,
            "bringDown": 3,
            "label": "593除以28的第一轮竖式位置"
          }
        },
        "transitions": [
          {
            "when": "tens",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U1-VERTICAL-04",
        "hints": [
          "",
          "除法可以用乘法验算。",
          "除数×商应回到被除数（无余数时）。",
          "27×27。",
          "等于729，所以商正确。"
        ],
        "view": {
          "title": "迁移到验算关系",
          "prompt": "729÷27=27。用哪条关系最直接验算？",
          "choices": [
            [
              "check",
              "27×27=729"
            ],
            [
              "add",
              "27+27=54"
            ],
            [
              "sub",
              "729－27=702"
            ]
          ]
        },
        "transitions": [
          {
            "when": "check",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U1-VERTICAL-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "竖式不再只是“照格式写”",
          "prompt": "你已经能用数位解释商的位置，用商—乘—减—落解释每一步，并用“余数<除数”和乘法验算检查结果。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u2.change.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u2.change.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u2",
    "nodeId": "change",
    "initialStep": "diagnose",
    "labels": {
      "badge": "变化规律正式课",
      "title": "周长与面积的变化",
      "description": "固定面积看周长，固定周长看面积；通过多个长方形比较发现“越接近正方形越优”。"
    },
    "objectives": {
      "distinguish": "O-U2-CHANGE-01",
      "fixedArea": "O-U2-CHANGE-02",
      "fixedPerimeter": "O-U2-CHANGE-03",
      "transfer": "O-U2-CHANGE-04"
    },
    "misconceptions": {
      "confuse": "M-U2-CHANGE-01",
      "biggerSide": "M-U2-CHANGE-02",
      "singleExample": "M-U2-CHANGE-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "42-43",
      "sourceNote": "教材“周长与面积的变化”通过6个单位正方形拼图、36个单位正方形拼成长方形/正方形、固定周长16/24厘米画图比较，明确面积相等时周长不一定相等、周长相等时面积不一定相等，并发现长宽越接近周长越短/面积越大。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U2-CHANGE-01",
        "hints": [
          "",
          "小正方形总数没有变。",
          "每个面积1平方厘米。",
          "所以总面积固定为6平方厘米。",
          "外边界形状变化，周长可能改变。"
        ],
        "view": {
          "title": "先分清现在固定的是谁",
          "prompt": "用6个边长1厘米的小正方形拼不同图形。无论怎样拼，哪一个量一定不变？",
          "choices": [
            [
              "area",
              "面积都是6平方厘米"
            ],
            [
              "perimeter",
              "周长都一样"
            ],
            [
              "both",
              "面积和周长都一样"
            ]
          ]
        },
        "transitions": [
          {
            "when": "area",
            "to": "fixedArea",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "both",
            "to": "repairConfuse",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-CHANGE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairConfuse": {
        "objectiveId": "O-U2-CHANGE-01",
        "hints": [
          "",
          "面积都等于6。",
          "1×6周长14。",
          "2×3周长10。",
          "所以同面积可以有不同周长。"
        ],
        "view": {
          "title": "面积相同，不代表周长相同",
          "prompt": "同样6个小正方形，排成1×6和2×3两个长方形，周长会一样吗？",
          "choices": [
            [
              "no",
              "不一样"
            ],
            [
              "yes",
              "一样"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "fixedArea",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-CHANGE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "area-perimeter-not-coupled"
              }
            ]
          }
        ]
      },
      "fixedArea": {
        "objectiveId": "O-U2-CHANGE-02",
        "hints": [
          "",
          "面积都固定为36。",
          "比较长宽差距。",
          "6和6最接近。",
          "教材实验发现越接近正方形，周长越短。"
        ],
        "view": {
          "title": "面积固定时，长宽越接近，周长怎样",
          "prompt": "面积都是36平方厘米。下面哪一个长方形周长最短？",
          "choices": [
            [
              "square",
              "6×6"
            ],
            [
              "long",
              "36×1"
            ],
            [
              "mid",
              "12×3"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 6,
            "h": 6,
            "mode": "both",
            "label": "面积36平方厘米的6乘6正方形，长宽最接近"
          }
        },
        "transitions": [
          {
            "when": "square",
            "to": "fixedPerimeter",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "long",
            "to": "repairBiggerSide",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-CHANGE-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairBiggerSide": {
        "objectiveId": "O-U2-CHANGE-02",
        "hints": [
          "",
          "算或比较外边界。",
          "36×1周长74。",
          "6×6周长24。",
          "长宽越接近，周长越短。"
        ],
        "view": {
          "title": "不是“最长边越长越好”",
          "prompt": "同面积下，36×1和6×6谁的周长更短？",
          "choices": [
            [
              "square",
              "6×6"
            ],
            [
              "long",
              "36×1"
            ]
          ]
        },
        "transitions": [
          {
            "when": "square",
            "to": "fixedPerimeter",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-CHANGE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "fixed-area-shape-efficiency"
              }
            ]
          }
        ]
      },
      "fixedPerimeter": {
        "objectiveId": "O-U2-CHANGE-03",
        "hints": [
          "",
          "周长16，所以长+宽=8。",
          "比较1×7、2×6、3×5、4×4。",
          "乘积在4×4时最大。",
          "长宽越接近，面积越大。"
        ],
        "view": {
          "title": "周长固定时，长宽越接近，面积怎样",
          "prompt": "周长都是16厘米。下面哪个长方形面积最大？",
          "choices": [
            [
              "square",
              "4×4"
            ],
            [
              "thin",
              "1×7"
            ],
            [
              "mid",
              "3×5"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 4,
            "h": 4,
            "mode": "both",
            "label": "周长16厘米的4乘4正方形，面积最大"
          }
        },
        "transitions": [
          {
            "when": "square",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "thin",
            "to": "repairSingle",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-CHANGE-03",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairSingle": {
        "objectiveId": "O-U2-CHANGE-03",
        "hints": [
          "",
          "周长条件相同。",
          "直接比较面积。",
          "3×5=15，1×7=7。",
          "更接近时面积更大。"
        ],
        "view": {
          "title": "不要只看一组，要比较整组",
          "prompt": "周长16时，3×5和1×7哪个面积更大？",
          "choices": [
            [
              "mid",
              "3×5"
            ],
            [
              "thin",
              "1×7"
            ]
          ]
        },
        "transitions": [
          {
            "when": "mid",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-CHANGE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "compare-multiple-fixed-perimeter-cases"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U2-CHANGE-03",
        "hints": [
          "",
          "先看固定条件。",
          "固定面积比较周长。",
          "固定周长比较面积。",
          "两个结论方向不同，但都指向长宽更接近。"
        ],
        "view": {
          "title": "把两个实验的规律分开说",
          "prompt": "哪组总结正确？",
          "choices": [
            [
              "rule",
              "同面积时长宽越接近周长越短；同周长时长宽越接近面积越大"
            ],
            [
              "mix",
              "面积越大周长一定越大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "rectangle-balance-under-fixed-constraint"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U2-CHANGE-02",
        "hints": [
          "",
          "面积固定。",
          "比较长宽接近程度。",
          "4和6最接近。",
          "所以4×6周长最短。"
        ],
        "view": {
          "title": "换一个固定面积的新比较",
          "prompt": "面积都是24平方厘米，哪一个长方形周长最短？",
          "choices": [
            [
              "fourSix",
              "4×6"
            ],
            [
              "threeEight",
              "3×8"
            ],
            [
              "twoTwelve",
              "2×12"
            ]
          ]
        },
        "transitions": [
          {
            "when": "fourSix",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U2-CHANGE-04",
        "hints": [
          "",
          "周长20，所以长+宽=10。",
          "比较乘积。",
          "5×5=25最大。",
          "长宽最接近时面积最大。"
        ],
        "view": {
          "title": "迁移到固定周长",
          "prompt": "长方形周长20厘米，下面哪组长宽面积最大？",
          "choices": [
            [
              "fiveFive",
              "5和5"
            ],
            [
              "fourSix",
              "4和6"
            ],
            [
              "twoEight",
              "2和8"
            ]
          ]
        },
        "transitions": [
          {
            "when": "fiveFive",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U2-CHANGE-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你会先看“固定条件”，再比较变化了",
          "prompt": "周长和面积是不同量：同面积时形状越接近正方形周长越短；同周长时越接近正方形面积越大。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u2.cut.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u2.cut.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u2",
    "nodeId": "cut",
    "initialStep": "diagnose",
    "labels": {
      "badge": "边界表征正式课",
      "title": "拼剪与靠墙围栏",
      "description": "先描最终外边界，再决定哪些边计入周长或围栏；内部接缝和贴墙边不计。"
    },
    "objectives": {
      "boundary": "O-U2-CUT-01",
      "cut": "O-U2-CUT-02",
      "wall": "O-U2-CUT-03",
      "transfer": "O-U2-CUT-04"
    },
    "misconceptions": {
      "allEdges": "M-U2-CUT-01",
      "cutAlways": "M-U2-CUT-02",
      "wall": "M-U2-CUT-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "25-26,33,40-41",
      "sourceNote": "教材第25页直接比较剪去正方形后面积和周长变化，第26/33页用拼接图形要求识别最终周长，第26页花圃与第40页鸡圈明确出现一面/两面靠墙的围栏情境。共同认知动作是先辨认最终外边界，再决定哪些线段计入。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U2-CUT-01",
        "hints": [
          "",
          "周长只沿最终图形外面走一圈。",
          "公共边被两个图形夹在中间。",
          "它不再属于最终外边界。",
          "所以不计入周长。"
        ],
        "view": {
          "title": "先别急着加长度，先问“这条边还在外面吗”",
          "prompt": "两个长方形拼成一个大长方形后，中间贴在一起的公共边要不要算大长方形周长？",
          "choices": [
            [
              "no",
              "不算，它变成内部接缝"
            ],
            [
              "yes",
              "要算，因为它原来是边"
            ]
          ],
          "renderer": "boundaryTrace",
          "rendererArgs": {
            "label": "拼接后的边界角色",
            "segments": [
              {
                "name": "外侧上边",
                "counted": true
              },
              {
                "name": "内部公共接缝",
                "counted": false
              },
              {
                "name": "外侧下边",
                "counted": true
              }
            ]
          }
        },
        "transitions": [
          {
            "when": "no",
            "to": "cornerCut",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "yes",
            "to": "repairBoundary",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-CUT-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairBoundary": {
        "objectiveId": "O-U2-CUT-01",
        "hints": [
          "",
          "周长描述的是最终图形。",
          "拼接后有些原边会进入内部。",
          "内部接缝不沿外圈出现。",
          "所以要看最终外边界，而不是历史身份。"
        ],
        "view": {
          "title": "原来是边，不代表最后仍是外边界",
          "prompt": "判断一条线段是否计入周长，最关键看什么？",
          "choices": [
            [
              "outside",
              "它是否属于最终图形的外边界"
            ],
            [
              "original",
              "它原来是不是某个小图形的边"
            ]
          ]
        },
        "transitions": [
          {
            "when": "outside",
            "to": "cornerCut",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-CUT-01"
              },
              {
                "type": "scheduleReview",
                "reason": "final-outer-boundary"
              }
            ]
          }
        ]
      },
      "cornerCut": {
        "objectiveId": "O-U2-CUT-02",
        "hints": [
          "",
          "不要只看到“新增切口”。",
          "先数被剪掉的原外边界长度。",
          "再数新露出的切口边界长度。",
          "两边都共4厘米，所以周长不变。"
        ],
        "view": {
          "title": "剪去一块，周长不一定变长",
          "prompt": "从长方形一个角剪去边长2厘米的正方形：原来外边界少了两段各2厘米，同时新露出两段各2厘米。周长怎样变？",
          "choices": [
            [
              "same",
              "不变"
            ],
            [
              "longer",
              "一定变长4厘米"
            ],
            [
              "shorter",
              "变短4厘米"
            ]
          ],
          "renderer": "boundaryTrace",
          "rendererArgs": {
            "label": "角上剪去正方形后的边界替换",
            "segments": [
              {
                "name": "被剪去的原上边2cm",
                "counted": false
              },
              {
                "name": "被剪去的原侧边2cm",
                "counted": false
              },
              {
                "name": "新切口横边2cm",
                "counted": true
              },
              {
                "name": "新切口竖边2cm",
                "counted": true
              }
            ]
          }
        },
        "transitions": [
          {
            "when": "same",
            "to": "notch",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "longer",
            "to": "repairCut",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-CUT-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairCut": {
        "objectiveId": "O-U2-CUT-02",
        "hints": [
          "",
          "周长只由边界长度决定。",
          "剪切会同时删除一些旧外边界、增加一些新外边界。",
          "比较这两部分长度。",
          "不能用“面积变小”直接推出“周长变小/变大”。"
        ],
        "view": {
          "title": "“剪了”不是周长变化的充分理由",
          "prompt": "判断剪切后的周长变化，应该比较哪两类长度？",
          "choices": [
            [
              "replace",
              "失去的原外边界和新增的切口外边界"
            ],
            [
              "area",
              "只看面积减少多少"
            ]
          ]
        },
        "transitions": [
          {
            "when": "replace",
            "to": "notch",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-CUT-02"
              },
              {
                "type": "scheduleReview",
                "reason": "cut-boundary-replacement"
              }
            ]
          }
        ]
      },
      "notch": {
        "objectiveId": "O-U2-CUT-02",
        "hints": [
          "",
          "先算被替换的旧边。",
          "少掉2厘米。",
          "新增3×2=6厘米。",
          "净增加6－2=4厘米。"
        ],
        "view": {
          "title": "从边中间挖一个凹口会发生什么",
          "prompt": "从一条直边中间向内剪去一个边长2厘米的正方形凹口：原来少1段2厘米，新增凹口3段共6厘米。周长怎样变？",
          "choices": [
            [
              "plus4",
              "增加4厘米"
            ],
            [
              "same",
              "不变"
            ],
            [
              "minus4",
              "减少4厘米"
            ]
          ]
        },
        "transitions": [
          {
            "when": "plus4",
            "to": "wall",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "wall": {
        "objectiveId": "O-U2-CUT-03",
        "hints": [
          "",
          "先标出哪一边靠墙。",
          "靠墙的12米不需要围。",
          "只加另一条12米和两条8米。",
          "12+8+8=28米。"
        ],
        "view": {
          "title": "靠墙时，墙本身不是要买的围栏",
          "prompt": "长12米、宽8米的长方形花圃，一条12米的长边靠墙。需要围另外三边，围栏长多少米？",
          "choices": [
            [
              "28",
              "28米"
            ],
            [
              "40",
              "40米"
            ],
            [
              "32",
              "32米"
            ]
          ],
          "renderer": "boundaryTrace",
          "rendererArgs": {
            "label": "一面靠墙花圃的围栏边界",
            "segments": [
              {
                "name": "靠墙长边12m",
                "counted": false
              },
              {
                "name": "另一长边12m",
                "counted": true
              },
              {
                "name": "左侧8m",
                "counted": true
              },
              {
                "name": "右侧8m",
                "counted": true
              }
            ]
          }
        },
        "transitions": [
          {
            "when": "28",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "40",
            "to": "repairWall",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-CUT-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairWall": {
        "objectiveId": "O-U2-CUT-03",
        "hints": [
          "",
          "题目问的是“需要多少围栏材料”。",
          "墙已经封住这一边。",
          "这条边仍是几何边界，但不是需要购买的围栏。",
          "所以从材料长度中排除。"
        ],
        "view": {
          "title": "“图形周长”和“需要围栏长度”不是同一问法",
          "prompt": "靠墙的一边为什么不计围栏？",
          "choices": [
            [
              "wall",
              "因为墙已经承担边界作用，不需要再用材料围"
            ],
            [
              "short",
              "因为这条边比较短"
            ]
          ]
        },
        "transitions": [
          {
            "when": "wall",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-CUT-03"
              },
              {
                "type": "scheduleReview",
                "reason": "wall-excluded-from-fence"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U2-CUT-01",
        "hints": [
          "",
          "不同题型共享同一认知动作。",
          "先问“最终要沿哪里走/围哪里”。",
          "内部接缝不算最终外圈；墙边不算材料；剪切要比较替换前后边界。",
          "最后再计算长度。"
        ],
        "view": {
          "title": "把三类题统一成一个方法",
          "prompt": "哪套方法最可靠？",
          "choices": [
            [
              "rule",
              "先描最终外边界/材料边界，再把内部接缝、被替换旧边和靠墙不需材料的边排除"
            ],
            [
              "all",
              "把图上看见的所有线段都相加"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "trace-final-boundary"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U2-CUT-03",
        "hints": [
          "",
          "两条相邻边靠墙。",
          "需要围的是与它们相对的另外两边。",
          "一条10米、一条6米。",
          "共16米。"
        ],
        "view": {
          "title": "换一个两面靠墙的新情境",
          "prompt": "一个长10米、宽6米的长方形鸡圈，两条相邻边分别靠两面墙。只围另外两边，需要多少米网？",
          "choices": [
            [
              "16",
              "16米"
            ],
            [
              "32",
              "32米"
            ],
            [
              "26",
              "26米"
            ]
          ],
          "renderer": "boundaryTrace",
          "rendererArgs": {
            "label": "两面靠墙鸡圈的材料边界",
            "segments": [
              {
                "name": "靠墙长边10m",
                "counted": false
              },
              {
                "name": "靠墙短边6m",
                "counted": false
              },
              {
                "name": "需围长边10m",
                "counted": true
              },
              {
                "name": "需围短边6m",
                "counted": true
              }
            ]
          }
        },
        "transitions": [
          {
            "when": "16",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U2-CUT-04",
        "hints": [
          "",
          "两个正方形单独周长总和24。",
          "拼接后公共边长3厘米，在两图中各算一次。",
          "这两段都变成内部接缝，共减6。",
          "24－6=18厘米。"
        ],
        "view": {
          "title": "迁移：拼接时去掉内部接缝",
          "prompt": "两个边长3厘米的正方形并排拼成长方形，拼成后的周长是多少？",
          "choices": [
            [
              "18",
              "18厘米"
            ],
            [
              "24",
              "24厘米"
            ],
            [
              "12",
              "12厘米"
            ]
          ]
        },
        "transitions": [
          {
            "when": "18",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U2-CUT-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你会先追踪边界，再算长度了",
          "prompt": "剪、拼、靠墙看起来不同，其实都先回答同一个问题：哪些线段属于最终要计算的外边界或材料边界？",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u2.formula.v2": {
    "schemaVersion": "0.2",
    "flowId": "u2.formula.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u2",
    "nodeId": "formula",
    "initialStep": "derivePerimeter",
    "steps": {
      "derivePerimeter": {
        "objectiveId": "O-U2-FORMULA-01",
        "hints": [
          "",
          "沿四条边依次相加。",
          "长方形有两条长、两条宽。",
          "5＋3＋5＋3可以整理。",
          "周长=(长+宽)×2。"
        ],
        "transitions": [
          {
            "when": "sum",
            "to": "compressPerimeter",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "area",
            "to": "repairFormula",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-FORMULA-01",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "公式先别背：从四条边长出来",
          "prompt": "长5厘米、宽3厘米的长方形，沿边界走一圈。哪个算式最直接体现“四条边”？",
          "choices": [
            [
              "sum",
              "5＋3＋5＋3"
            ],
            [
              "area",
              "5×3"
            ],
            [
              "half",
              "5＋3"
            ]
          ],
          "renderer": "sideSum",
          "rendererArgs": [
            5,
            3
          ]
        }
      },
      "repairFormula": {
        "objectiveId": "O-U2-FORMULA-01",
        "hints": [
          "",
          "5×3是在数几行几列。",
          "周长必须把四条边都包含进去。",
          "两条长+两条宽。",
          "5＋3＋5＋3才描述边界一圈。"
        ],
        "transitions": [
          {
            "when": "sum",
            "to": "compressPerimeter",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-FORMULA-01"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U2-FORMULA-01"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "formula_swap"
              }
            ]
          }
        ],
        "view": {
          "title": "区分“沿边”和“铺格”",
          "prompt": "现在只沿红色边界走一圈，应该使用哪种关系？",
          "choices": [
            [
              "sum",
              "把四条边加起来"
            ],
            [
              "multiply",
              "长×宽"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 5,
            "h": 3,
            "mode": "both"
          }
        }
      },
      "compressPerimeter": {
        "objectiveId": "O-U2-FORMULA-01",
        "hints": [
          "",
          "把相同的两条长、两条宽配对。",
          "5＋3＋5＋3=(5＋3)×2。",
          "括号里是一条长加一条宽，也叫半周长。",
          "长方形周长=(长+宽)×2。"
        ],
        "view": {
          "title": "把四边相加压缩成公式",
          "prompt": "5＋3＋5＋3可以等价写成？",
          "choices": [
            [
              "p",
              "(5＋3)×2"
            ],
            [
              "a",
              "5×3"
            ],
            [
              "wrong",
              "5＋3×2"
            ]
          ]
        },
        "transitions": [
          {
            "when": "p",
            "to": "deriveArea",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "deriveArea": {
        "objectiveId": "O-U2-FORMULA-02",
        "hints": [
          "",
          "面积看铺满内部需要多少单位方格。",
          "每行5格，共3行。",
          "相同加数5连续出现3次，可写成5×3。",
          "长方形面积=长×宽。"
        ],
        "transitions": [
          {
            "when": "a",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "p",
            "to": "repairArea",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-FORMULA-01",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "面积公式也从方格长出来",
          "prompt": "内部每行5个1平方厘米方格，一共3行。面积怎样算？",
          "choices": [
            [
              "a",
              "5×3"
            ],
            [
              "p",
              "(5＋3)×2"
            ],
            [
              "edge",
              "5＋3＋5＋3"
            ]
          ],
          "visuals": [
            {
              "renderer": "tileRows",
              "args": [
                5,
                3
              ]
            },
            {
              "renderer": "rect",
              "args": {
                "w": 5,
                "h": 3,
                "mode": "area"
              }
            }
          ]
        }
      },
      "repairArea": {
        "objectiveId": "O-U2-FORMULA-02",
        "hints": [
          "",
          "现在数的是内部小方格。",
          "每行格数×行数。",
          "5格一行，有3行。",
          "5×3=15平方厘米。"
        ],
        "transitions": [
          {
            "when": "a",
            "to": "formalize",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-FORMULA-01"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U2-FORMULA-01"
                }
              }
            ]
          }
        ],
        "view": {
          "title": "只看“铺满”这件事",
          "prompt": "蓝色内部有3行，每行5格。应使用？",
          "choices": [
            [
              "a",
              "5×3"
            ],
            [
              "p",
              "(5＋3)×2"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 5,
            "h": 3,
            "mode": "area"
          }
        }
      },
      "formalize": {
        "objectiveId": "O-U2-MEANING-03",
        "hints": [
          "",
          "一个公式处理边界，一个公式处理平面。",
          "周长=(长+宽)×2；面积=长×宽。",
          "别忘了对应单位：厘米 vs 平方厘米。",
          "公式、测量对象、单位三者要配套。"
        ],
        "view": {
          "title": "把对象、公式、单位配成一套",
          "prompt": "哪一项全部匹配？",
          "choices": [
            [
              "rule",
              "周长=(长+宽)×2，用长度单位；面积=长×宽，用面积单位"
            ],
            [
              "swap",
              "周长=长×宽；面积=(长+宽)×2"
            ],
            [
              "unit",
              "两个公式最后都用厘米"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "transfer",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "rect-perimeter-area"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "unit",
            "to": "repairUnit",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-FORMULA-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairUnit": {
        "objectiveId": "O-U2-MEANING-03",
        "hints": [
          "",
          "看单位是不是在描述长度还是平面。",
          "厘米是长度单位；平方厘米是面积单位。",
          "面积公式的结果不是一条线的长度。",
          "15平方厘米才是5×3长方形的面积单位。"
        ],
        "view": {
          "title": "公式对了，单位也要对",
          "prompt": "5厘米×3厘米的长方形，面积15后面应写？",
          "choices": [
            [
              "sq",
              "平方厘米"
            ],
            [
              "cm",
              "厘米"
            ]
          ]
        },
        "transitions": [
          {
            "when": "sq",
            "to": "transfer",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-FORMULA-02"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U2-FORMULA-02"
                }
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U2-FORMULA-03",
        "hints": [
          "",
          "先判断题目问边界还是覆盖面积。",
          "围墙长度看周长；种草面积看面积。",
          "长8宽4：周长24，面积32。",
          "同一个长方形可以同时有周长和面积，但解决的是不同问题。"
        ],
        "transitions": [
          {
            "when": "correct",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ],
        "view": {
          "title": "同一个图形，两种真实需求",
          "prompt": "长8米、宽4米的长方形院子：围一圈围栏要多少米？铺满草坪要多少平方米？",
          "choices": [
            [
              "correct",
              "24米；32平方米"
            ],
            [
              "swap",
              "32米；24平方米"
            ],
            [
              "same",
              "24米；24平方米"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 8,
            "h": 4,
            "mode": "both"
          }
        }
      },
      "complete": {
        "objectiveId": "O-U2-FORMULA-03",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "reviewOnH4": false,
        "view": {
          "title": "公式不再是孤立口诀",
          "prompt": "先看任务发生在“边”还是“面”，再选择公式和单位。",
          "choices": []
        },
        "transitions": []
      }
    },
    "packageVersion": "0.1.0",
    "labels": {
      "badge": "概念教学试点",
      "description": "先区分测量对象，再形成公式；错误只修当前概念。",
      "title": "周长与面积 · 公式"
    },
    "objectives": {
      "explain": "O-U2-MEANING-03",
      "formulaP": "O-U2-FORMULA-01",
      "formulaA": "O-U2-FORMULA-02",
      "transfer": "O-U2-FORMULA-03"
    },
    "misconceptions": {
      "formulaSwap": "M-U2-FORMULA-01",
      "unit": "M-U2-FORMULA-02"
    }
  },
  "u2.meaning.v2": {
    "schemaVersion": "0.2",
    "flowId": "u2.meaning.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u2",
    "nodeId": "meaning",
    "initialStep": "diagnoseFence",
    "steps": {
      "diagnoseFence": {
        "objectiveId": "O-U2-MEANING-01",
        "hints": [
          "",
          "先问：测的是边，还是里面的一整块？",
          "“围着花坛走一圈”只经过边界。",
          "边界一周的长度叫周长。",
          "所以围栏、跑一圈、框边通常对应周长。"
        ],
        "transitions": [
          {
            "when": "perimeter",
            "to": "diagnoseGrass",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "area",
            "to": "repairBoundary",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-MEANING-01",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "先分清：量的是“边”还是“面”？",
          "prompt": "给一个长5米、宽3米的花坛装一圈围栏。我们要测量什么？",
          "choices": [
            [
              "perimeter",
              "边界一圈的长度"
            ],
            [
              "area",
              "里面平面的大小"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 5,
            "h": 3,
            "mode": "perimeter",
            "label": "长方形花坛边界"
          }
        }
      },
      "repairBoundary": {
        "objectiveId": "O-U2-MEANING-01",
        "hints": [
          "",
          "手指沿红线走一圈。",
          "围栏只安装在四周，不铺在里面。",
          "四条边首尾相接形成一周。",
          "这里测的是边界长度，所以是周长。"
        ],
        "transitions": [
          {
            "when": "perimeter",
            "to": "diagnoseGrass",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-MEANING-01"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U2-MEANING-01"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "concept_repair"
              }
            ]
          }
        ],
        "view": {
          "title": "只修“边界”这个概念",
          "prompt": "围栏只装在花坛四周。红线表示围栏经过的位置，它描述的是？",
          "choices": [
            [
              "perimeter",
              "边界长度"
            ],
            [
              "area",
              "平面大小"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 5,
            "h": 3,
            "mode": "perimeter"
          }
        }
      },
      "diagnoseGrass": {
        "objectiveId": "O-U2-MEANING-01",
        "hints": [
          "",
          "这次不是围边，而是要把里面全部覆盖。",
          "覆盖多少地面关注的是“面”。",
          "面积描述平面有多大。",
          "铺草坪、铺地砖、刷墙面通常对应面积。"
        ],
        "transitions": [
          {
            "when": "area",
            "to": "contrastSameNumber",
            "effects": [
              {
                "type": "markObjective",
                "objectiveId": "O-U2-MEANING-02",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "perimeter",
            "to": "repairSurface",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-MEANING-02",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "换一个任务：铺满里面",
          "prompt": "如果要给这个5米×3米的花坛全部铺草坪，我们要测量什么？",
          "choices": [
            [
              "area",
              "里面平面的大小"
            ],
            [
              "perimeter",
              "边界一圈的长度"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 5,
            "h": 3,
            "mode": "area",
            "label": "长方形花坛内部平面"
          }
        }
      },
      "repairSurface": {
        "objectiveId": "O-U2-MEANING-01",
        "hints": [
          "",
          "想象把小方砖铺满整个内部。",
          "铺满需要覆盖的是二维平面。",
          "数单位方格是在测面积。",
          "所以铺草坪对应面积，不是周长。"
        ],
        "transitions": [
          {
            "when": "area",
            "to": "contrastSameNumber",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-MEANING-02"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U2-MEANING-02"
                }
              }
            ]
          }
        ],
        "view": {
          "title": "只修“平面”这个概念",
          "prompt": "蓝色小方格铺满整个内部。这个数量描述的是？",
          "choices": [
            [
              "area",
              "面积"
            ],
            [
              "perimeter",
              "周长"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 5,
            "h": 3,
            "mode": "area"
          }
        }
      },
      "contrastSameNumber": {
        "objectiveId": "O-U2-MEANING-03",
        "hints": [
          "",
          "不要只看数字16，要看它在量什么。",
          "一个是长度单位，一个是面积单位。",
          "4×4正方形：周长16厘米，面积16平方厘米。",
          "数字一样不代表数学量一样；单位和意义决定它们是什么。"
        ],
        "transitions": [
          {
            "when": "different",
            "to": "formalize",
            "effects": [
              {
                "type": "emit",
                "event": "EXPLANATION_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "objectiveId": "O-U2-MEANING-03",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "same",
            "to": "repairCompare",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-MEANING-03",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "数字一样，意义也一样吗？",
          "prompt": "边长4厘米的正方形：周长是16厘米，面积是16平方厘米。下面哪句话正确？",
          "choices": [
            [
              "different",
              "数字相同，但表示不同的量，不能说周长等于面积"
            ],
            [
              "same",
              "都是16，所以周长等于面积"
            ]
          ],
          "renderer": "rect",
          "rendererArgs": {
            "w": 4,
            "h": 4,
            "mode": "both",
            "label": "边长4的正方形同时显示边界和内部"
          }
        }
      },
      "repairCompare": {
        "objectiveId": "O-U2-MEANING-03",
        "hints": [
          "",
          "给两个16分别带上单位再读。",
          "16厘米是长度；16平方厘米是面积。",
          "单位不同说明量的种类不同。",
          "数值碰巧相等，不代表周长和面积是同一个量。"
        ],
        "view": {
          "title": "给数字带上“身份”",
          "prompt": "16厘米和16平方厘米最关键的区别是什么？",
          "choices": [
            [
              "unit",
              "单位不同，表示的数学量不同"
            ],
            [
              "number",
              "数字都是16，所以完全相同"
            ]
          ]
        },
        "transitions": [
          {
            "when": "unit",
            "to": "formalize",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-MEANING-03"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U2-MEANING-03"
                }
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U2-MEANING-03",
        "hints": [
          "",
          "分别抓住“边界”和“平面”两个关键词。",
          "周长：边界一周的长度；面积：平面的大小。",
          "长度常用厘米、米；面积常用平方厘米、平方米。",
          "完整规律要同时包含测量对象和单位类型。"
        ],
        "view": {
          "title": "现在把概念说完整",
          "prompt": "哪一句最准确？",
          "choices": [
            [
              "rule",
              "周长量边界一周的长度；面积量平面的大小；它们使用不同类型的单位"
            ],
            [
              "swap",
              "周长量里面，面积量外边"
            ],
            [
              "number",
              "只要数值相同，就可以互相比较大小"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "transfer",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "boundary-vs-surface"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U2-MEANING-01",
        "hints": [
          "",
          "先问工人实际要处理的是哪里。",
          "贴踢脚线沿房间四周；铺地板覆盖整个地面。",
          "沿边→周长；铺面→面积。",
          "两个任务分别对应周长和面积。"
        ],
        "view": {
          "title": "迁移到真实任务",
          "prompt": "装修房间时，“买踢脚线”和“买地板”分别主要需要哪个量？",
          "choices": [
            [
              "pa",
              "踢脚线看周长；地板看面积"
            ],
            [
              "ap",
              "踢脚线看面积；地板看周长"
            ],
            [
              "pp",
              "两个都只看周长"
            ]
          ]
        },
        "transitions": [
          {
            "when": "pa",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U2-MEANING-01",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "reviewOnH4": false,
        "view": {
          "title": "边和面已经分清了",
          "prompt": "以后先问“任务发生在边界，还是覆盖整个平面”，再决定用周长还是面积。",
          "choices": []
        },
        "transitions": []
      }
    },
    "packageVersion": "0.1.0",
    "labels": {
      "badge": "概念教学试点",
      "description": "先区分测量对象，再形成公式；错误只修当前概念。",
      "title": "周长与面积 · 意义"
    },
    "objectives": {
      "meaning": "O-U2-MEANING-01",
      "representation": "O-U2-MEANING-02",
      "explain": "O-U2-MEANING-03"
    },
    "misconceptions": {
      "boundary": "M-U2-MEANING-01",
      "surface": "M-U2-MEANING-02",
      "compareNumber": "M-U2-MEANING-03"
    }
  },
  "u2.units.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u2.units.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u2",
    "nodeId": "units",
    "initialStep": "diagnose",
    "labels": {
      "badge": "概念表征正式课",
      "title": "面积单位与换算",
      "description": "先看单位正方形，再从10×10铺排理解面积单位进率100。"
    },
    "objectives": {
      "unit": "O-U2-UNITS-01",
      "square": "O-U2-UNITS-02",
      "convert": "O-U2-UNITS-03",
      "transfer": "O-U2-UNITS-04"
    },
    "misconceptions": {
      "lengthRate": "M-U2-UNITS-01",
      "linear": "M-U2-UNITS-02",
      "direction": "M-U2-UNITS-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "28,34-36",
      "sourceNote": "教材先用不同大小单位正方形测量面积，强调统一面积单位；再从1分米=10厘米、1平方分米由10×10个1平方厘米组成，推得1平方分米=100平方厘米，并进一步推1平方米与平方分米关系。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U2-UNITS-01",
        "hints": [
          "",
          "先问：被测图形有没有变。",
          "变的是单位正方形的大小。",
          "单位越小，需要的格数越多。",
          "面积没变，数值差异来自面积单位不同。"
        ],
        "view": {
          "title": "同一面积，为什么量出的数会不同",
          "prompt": "同一个长方形，用较大的正方形量得8格，用较小的正方形量得32格。为什么结果不同？",
          "choices": [
            [
              "unit",
              "因为面积单位大小不同"
            ],
            [
              "area",
              "因为长方形面积变了"
            ]
          ]
        },
        "transitions": [
          {
            "when": "unit",
            "to": "squareRelation",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "area",
            "to": "repairUnit",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-UNITS-03",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairUnit": {
        "objectiveId": "O-U2-UNITS-01",
        "hints": [
          "",
          "同一面积可以被不同大小方格覆盖。",
          "数值要能直接比较，单位必须相同。",
          "教材明确提出“要用统一的面积单位”。",
          "所以先统一单位，再比较数值。"
        ],
        "view": {
          "title": "面积没变，变的是“每1格多大”",
          "prompt": "要公平比较面积，最重要先统一什么？",
          "choices": [
            [
              "unit",
              "面积单位"
            ],
            [
              "shape",
              "图形颜色"
            ]
          ]
        },
        "transitions": [
          {
            "when": "unit",
            "to": "squareRelation",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-UNITS-03"
              },
              {
                "type": "scheduleReview",
                "reason": "area-unit-meaning"
              }
            ]
          }
        ]
      },
      "squareRelation": {
        "objectiveId": "O-U2-UNITS-02",
        "hints": [
          "",
          "面积是二维覆盖。",
          "一边能排10个，另一边也能排10个。",
          "总格数=10×10。",
          "所以1 dm²=100 cm²。"
        ],
        "view": {
          "title": "为什么不是10，而是100",
          "prompt": "1分米=10厘米。边长1分米的正方形里，能铺多少个1平方厘米的小正方形？",
          "choices": [
            [
              "100",
              "100个"
            ],
            [
              "10",
              "10个"
            ],
            [
              "20",
              "20个"
            ]
          ],
          "renderer": "tileRows",
          "rendererArgs": {
            "rows": 10,
            "cols": 10,
            "label": "1平方分米 = 10×10 个1平方厘米"
          }
        },
        "transitions": [
          {
            "when": "100",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "10",
            "to": "repairLinear",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U2-UNITS-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairLinear": {
        "objectiveId": "O-U2-UNITS-02",
        "hints": [
          "",
          "平方单位来自正方形。",
          "边长从1 dm变成10 cm。",
          "长、宽两个方向都各有10。",
          "所以方格数量是10×10=100。"
        ],
        "view": {
          "title": "只修“把长度进率直接搬到面积”",
          "prompt": "为什么1 dm²不是10 cm²？",
          "choices": [
            [
              "two",
              "因为面积有两个方向，10×10=100"
            ],
            [
              "same",
              "因为面积单位和长度单位进率总相同"
            ]
          ]
        },
        "transitions": [
          {
            "when": "two",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U2-UNITS-02"
              },
              {
                "type": "resolveMisconception",
                "id": "M-U2-UNITS-01"
              },
              {
                "type": "scheduleReview",
                "reason": "square-unit-two-dimensions"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U2-UNITS-03",
        "hints": [
          "",
          "回到10×10铺排。",
          "面积单位换算反映的是两个方向同时缩放。",
          "1 dm²=100 cm²。",
          "同理1 m²=100 dm²。"
        ],
        "view": {
          "title": "现在再形成换算规则",
          "prompt": "哪一句正确？",
          "choices": [
            [
              "rule",
              "相邻长度单位进率是10时，对应面积单位进率是100"
            ],
            [
              "ten",
              "面积单位也只乘10"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "square-scale"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U2-UNITS-03",
        "hints": [
          "",
          "平方米到平方分米是相邻面积单位。",
          "每1平方米=100平方分米。",
          "9×100。",
          "结果900平方分米。"
        ],
        "view": {
          "title": "换一道教材换算题独立做",
          "prompt": "9平方米等于多少平方分米？",
          "choices": [
            [
              "900",
              "900平方分米"
            ],
            [
              "90",
              "90平方分米"
            ],
            [
              "9",
              "9平方分米"
            ]
          ]
        },
        "transitions": [
          {
            "when": "900",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U2-UNITS-04",
        "hints": [
          "",
          "这次从小单位换成大单位。",
          "100平方厘米=1平方分米。",
          "700里有7个100。",
          "所以700 cm²=7 dm²。"
        ],
        "view": {
          "title": "迁移到逆向换算",
          "prompt": "700平方厘米等于多少平方分米？",
          "choices": [
            [
              "7",
              "7平方分米"
            ],
            [
              "70",
              "70平方分米"
            ],
            [
              "70000",
              "70000平方分米"
            ]
          ]
        },
        "transitions": [
          {
            "when": "7",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U2-UNITS-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你已经把面积单位和二维结构连起来了",
          "prompt": "面积单位的进率不是背出来的：边长缩放10倍，覆盖格数在两个方向同时变化，所以面积缩放100倍。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u3.inverse.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u3.inverse.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u3",
    "nodeId": "inverse",
    "initialStep": "diagnose",
    "labels": {
      "badge": "数量关系正式课",
      "title": "乘除法意义与互逆",
      "description": "从乘法意义出发，把同一数量关系改写成两个反求除法。"
    },
    "objectives": {
      "meaning": "O-U3-INVERSE-01",
      "inverse": "O-U3-INVERSE-02",
      "unknown": "O-U3-INVERSE-03",
      "transfer": "O-U3-INVERSE-04"
    },
    "misconceptions": {
      "add": "M-U3-INVERSE-01",
      "divideRole": "M-U3-INVERSE-02",
      "multiplyBack": "M-U3-INVERSE-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "quantity-relation",
      "sourcePages": "45-47",
      "sourceNote": "教材由3组、每组4人得到4×3=12，明确“乘数×乘数=积”；再把原问题改成12÷3=4和12÷4=3，明确除法是乘法的逆运算，并用416÷□=16、□÷34=25要求利用乘除关系反求。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U3-INVERSE-01",
        "hints": [
          "",
          "题目说“3组，每组4人”。",
          "这是3个4相加。",
          "求几个相同加数的和，用乘法。",
          "4×3=12。"
        ],
        "view": {
          "title": "先抓住乘法表示的关系",
          "prompt": "3组同学，每组4人，一共有多少人？哪一个算式直接表示这个关系？",
          "choices": [
            [
              "mul",
              "4×3=12"
            ],
            [
              "add",
              "4+3=7"
            ],
            [
              "div",
              "12÷3=4"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "每组人数",
            "quantity": "组数",
            "total": "总人数",
            "unitValue": "4人",
            "quantityValue": "3组",
            "totalValue": "12人"
          }
        },
        "transitions": [
          {
            "when": "mul",
            "to": "inversePair",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "add",
            "to": "repairMeaning",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-INVERSE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairMeaning": {
        "objectiveId": "O-U3-INVERSE-01",
        "hints": [
          "",
          "3个4不是4和3相加。",
          "它是4+4+4。",
          "乘法就是求几个相同加数和的简便运算。",
          "所以用4×3。"
        ],
        "view": {
          "title": "先修“相同加数的和”",
          "prompt": "“3个4相加”最简便用什么运算？",
          "choices": [
            [
              "mul",
              "乘法"
            ],
            [
              "add",
              "只允许写4+3"
            ]
          ]
        },
        "transitions": [
          {
            "when": "mul",
            "to": "inversePair",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-INVERSE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "multiplication-meaning"
              }
            ]
          }
        ]
      },
      "inversePair": {
        "objectiveId": "O-U3-INVERSE-02",
        "hints": [
          "",
          "原关系是4×3=12。",
          "现在知道积12和一个乘数3。",
          "求另一个乘数。",
          "12÷3=4。"
        ],
        "view": {
          "title": "把同一关系改成“反求”",
          "prompt": "已知一共有12人、平均分成3组，每组多少人？",
          "choices": [
            [
              "4",
              "12÷3=4"
            ],
            [
              "36",
              "12×3=36"
            ],
            [
              "9",
              "12-3=9"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "每组人数",
            "quantity": "组数",
            "total": "总人数",
            "unitValue": "?人",
            "quantityValue": "3组",
            "totalValue": "12人"
          }
        },
        "transitions": [
          {
            "when": "4",
            "to": "otherInverse",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "36",
            "to": "repairRole",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-INVERSE-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairRole": {
        "objectiveId": "O-U3-INVERSE-02",
        "hints": [
          "",
          "把乘法关系写成□×3=12。",
          "问的是□。",
          "用积÷已知乘数。",
          "12÷3=4。"
        ],
        "view": {
          "title": "只修“知道积和一个乘数怎么办”",
          "prompt": "已知积12和乘数3，求另一个乘数，应该用什么？",
          "choices": [
            [
              "divide",
              "12÷3"
            ],
            [
              "multiply",
              "12×3"
            ]
          ]
        },
        "transitions": [
          {
            "when": "divide",
            "to": "otherInverse",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-INVERSE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "inverse-operation-role"
              }
            ]
          }
        ]
      },
      "otherInverse": {
        "objectiveId": "O-U3-INVERSE-02",
        "hints": [
          "",
          "还是4×3=12这条关系。",
          "现在知道积12和另一个乘数4。",
          "12÷4。",
          "得到3组。"
        ],
        "view": {
          "title": "同一个积还能反求另一个量",
          "prompt": "12人，每组4人，可以分成几组？",
          "choices": [
            [
              "3",
              "12÷4=3"
            ],
            [
              "48",
              "12×4=48"
            ]
          ]
        },
        "transitions": [
          {
            "when": "3",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U3-INVERSE-03",
        "hints": [
          "",
          "除法是乘法的逆运算。",
          "知道积和一个乘数。",
          "求另一个乘数用除法。",
          "c÷a=b，c÷b=a。"
        ],
        "view": {
          "title": "现在再总结互逆关系",
          "prompt": "根据a×b=c，哪组反求关系正确？",
          "choices": [
            [
              "rule",
              "c÷a=b，c÷b=a"
            ],
            [
              "mul",
              "c×a=b，c×b=a"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "multiply-divide-inverse"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U3-INVERSE-03",
        "hints": [
          "",
          "把除法式看成乘法关系。",
          "16×□=416。",
          "□=416÷16。",
          "结果26。"
        ],
        "view": {
          "title": "教材反求：未知除数",
          "prompt": "416÷□=16，□是多少？",
          "choices": [
            [
              "26",
              "26"
            ],
            [
              "6656",
              "6656"
            ],
            [
              "400",
              "400"
            ]
          ]
        },
        "transitions": [
          {
            "when": "26",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "6656",
            "to": "repairBack",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-INVERSE-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairBack": {
        "objectiveId": "O-U3-INVERSE-03",
        "hints": [
          "",
          "除法中的商×除数=被除数。",
          "商是16，被除数416。",
          "所以16×□=416。",
          "再用416÷16求□。"
        ],
        "view": {
          "title": "反求不是把两个已知数随便相乘",
          "prompt": "416÷□=16 可以改写成哪条乘法关系？",
          "choices": [
            [
              "relation",
              "16×□=416"
            ],
            [
              "wrong",
              "416×16=□"
            ]
          ]
        },
        "transitions": [
          {
            "when": "relation",
            "to": "freshIndependent",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-INVERSE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "division-back-to-multiplication"
              }
            ]
          }
        ]
      },
      "freshIndependent": {
        "objectiveId": "O-U3-INVERSE-03",
        "hints": [
          "",
          "这次未知的是被除数。",
          "除数×商=被除数。",
          "34×25。",
          "得到850。"
        ],
        "view": {
          "title": "换一道新题确认",
          "prompt": "□÷34=25，□是多少？",
          "choices": [
            [
              "850",
              "850"
            ],
            [
              "59",
              "59"
            ],
            [
              "1360",
              "1360"
            ]
          ]
        },
        "transitions": [
          {
            "when": "850",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true,
                  "fresh": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U3-INVERSE-04",
        "hints": [
          "",
          "12是“2倍后的总量”。",
          "拍球人数×2=12。",
          "求原来的1份。",
          "12÷2=6人。"
        ],
        "view": {
          "title": "迁移到实际数量关系",
          "prompt": "跳绳有12人，是拍球人数的2倍。拍球有多少人？",
          "choices": [
            [
              "6",
              "6人"
            ],
            [
              "24",
              "24人"
            ],
            [
              "14",
              "14人"
            ]
          ]
        },
        "transitions": [
          {
            "when": "6",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U3-INVERSE-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "乘除互逆已经连起来了",
          "prompt": "先写清乘法关系，再根据未知的是哪个量选择除法或乘法反求；互逆关系比“见到未知就猜运算”更可靠。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u3.one.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u3.one.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u3",
    "nodeId": "one",
    "initialStep": "diagnose",
    "labels": {
      "badge": "归一归总正式课",
      "title": "归一与归总",
      "description": "先找不变量，再决定是先求每1份还是先求总量。"
    },
    "objectives": {
      "invariant": "O-U3-ONE-01",
      "unit": "O-U3-ONE-02",
      "total": "O-U3-ONE-03",
      "transfer": "O-U3-ONE-04"
    },
    "misconceptions": {
      "direct": "M-U3-ONE-01",
      "wrongInvariant": "M-U3-ONE-02"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "quantity-relation",
      "sourcePages": "54-56",
      "sourceNote": "教材用3本18元、5本求总价建立“单价不变→先求单价”；练习还用每间4盆可放24间、改为每间6盆，先求总盆数再重新分，形成归一与归总两类结构。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U3-ONE-01",
        "hints": [
          "",
          "买的本数变了。",
          "总价也会跟着变。",
          "同一种笔记本，每本价格不变。",
          "所以不变量是单价。"
        ],
        "view": {
          "title": "先圈出不变的量",
          "prompt": "3本笔记本18元，买5本要多少钱？什么量保持不变？",
          "choices": [
            [
              "price",
              "每本单价"
            ],
            [
              "total",
              "总价18元"
            ],
            [
              "count",
              "本数3本"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "单价",
            "quantity": "数量",
            "total": "总价",
            "unitValue": "?元/本",
            "quantityValue": "3本",
            "totalValue": "18元"
          }
        },
        "transitions": [
          {
            "when": "price",
            "to": "unit",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "total",
            "to": "repairInvariant",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-ONE-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairInvariant": {
        "objectiveId": "O-U3-ONE-01",
        "hints": [
          "",
          "数量改变。",
          "总价随数量改变。",
          "同一种商品的每本单价保持不变。",
          "因此先求单价。"
        ],
        "view": {
          "title": "先修“到底什么没变”",
          "prompt": "从买3本变成买5本，哪一个量仍可直接沿用？",
          "choices": [
            [
              "price",
              "每本价格"
            ],
            [
              "total",
              "总价18元"
            ]
          ]
        },
        "transitions": [
          {
            "when": "price",
            "to": "unit",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-ONE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "unit-rate-invariant"
              }
            ]
          }
        ]
      },
      "unit": {
        "objectiveId": "O-U3-ONE-02",
        "hints": [
          "",
          "总价÷数量。",
          "18÷3。",
          "得到6元/本。",
          "这就是每1份量。"
        ],
        "view": {
          "title": "归一：先求每1份",
          "prompt": "18元买3本，每本多少钱？",
          "choices": [
            [
              "6",
              "6元"
            ],
            [
              "54",
              "54元"
            ]
          ]
        },
        "transitions": [
          {
            "when": "6",
            "to": "newTotal",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "newTotal": {
        "objectiveId": "O-U3-ONE-02",
        "hints": [
          "",
          "单价×新数量。",
          "6×5。",
          "得到30。",
          "所以5本30元。"
        ],
        "view": {
          "title": "再用每1份量求新总量",
          "prompt": "每本6元，5本多少钱？",
          "choices": [
            [
              "30",
              "30元"
            ],
            [
              "11",
              "11元"
            ]
          ]
        },
        "transitions": [
          {
            "when": "30",
            "to": "aggregate",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "aggregate": {
        "objectiveId": "O-U3-ONE-03",
        "hints": [
          "",
          "这次不变的不是“每间盆数”。",
          "总花盆数量不变。",
          "先还原总量。",
          "4×24=96盆。"
        ],
        "view": {
          "title": "归总：有时先求固定总量",
          "prompt": "每间教室放4盆花，可以放24间。若改成每间6盆，先求什么最合理？",
          "choices": [
            [
              "flowers",
              "先求总盆数4×24=96盆"
            ],
            [
              "rooms",
              "直接24÷6"
            ]
          ]
        },
        "transitions": [
          {
            "when": "flowers",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "rooms",
            "to": "repairDirect",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-ONE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairDirect": {
        "objectiveId": "O-U3-ONE-03",
        "hints": [
          "",
          "单位先对齐。",
          "24的单位是“间”。",
          "6的单位是“盆/间”。",
          "先求96盆，再用96÷6。"
        ],
        "view": {
          "title": "不能把旧“间数”直接除以新盆数",
          "prompt": "24表示什么？能直接和6盆/间相除吗？",
          "choices": [
            [
              "no",
              "不能，24是间数，不是总盆数"
            ],
            [
              "yes",
              "能"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-ONE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "aggregate-before-redistribute"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U3-ONE-03",
        "hints": [
          "",
          "算法由不变量决定。",
          "单价/速度等单位量不变时先求每1份。",
          "总盆数/总路程等总量不变时先求总量。",
          "不是固定“先除后乘”。"
        ],
        "view": {
          "title": "归一和归总其实都先找不变量",
          "prompt": "哪句最准确？",
          "choices": [
            [
              "rule",
              "先找不变量：单位量不变就先归一；总量不变就先归总，再按新条件计算"
            ],
            [
              "always",
              "所有题都先除再乘"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "unitize-or-aggregate-by-invariant"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U3-ONE-02",
        "hints": [
          "",
          "先求固定总路程。",
          "85×8=680千米。",
          "680÷10。",
          "得到68千米/时。"
        ],
        "view": {
          "title": "换一道归一题独立做",
          "prompt": "汽车85千米/时行8小时到达。总路程不变，返程用10小时，返程速度是多少？",
          "choices": [
            [
              "68",
              "68千米/时"
            ],
            [
              "850",
              "850千米/时"
            ],
            [
              "10",
              "10千米/时"
            ]
          ]
        },
        "transitions": [
          {
            "when": "68",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U3-ONE-04",
        "hints": [
          "",
          "先归一到每1小时。",
          "12÷2=6厘米/时。",
          "120÷6。",
          "得到20小时。"
        ],
        "view": {
          "title": "迁移：从观测间隔归一",
          "prompt": "水库每2小时下降12厘米，按同样速度，下降120厘米需要多少小时？",
          "choices": [
            [
              "20",
              "20小时"
            ],
            [
              "10",
              "10小时"
            ],
            [
              "240",
              "240小时"
            ]
          ]
        },
        "transitions": [
          {
            "when": "20",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U3-ONE-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你已经会先找不变量再选路径",
          "prompt": "归一与归总不是两套死公式：先判断什么量不变，再决定先求每1份还是先还原总量。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u3.price.v2": {
    "schemaVersion": "0.2",
    "flowId": "u3.price.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u3",
    "nodeId": "price",
    "initialStep": "diagnoseMeaning",
    "steps": {
      "diagnoseMeaning": {
        "objectiveId": "O-U3-PRICE-01",
        "hints": [
          "",
          "先解释“每本8元”里的“每本”。",
          "它描述的是1本对应的价格。",
          "单价是“每1件”的价格，不是买了几件。",
          "“每本8元”表示1本练习本8元。"
        ],
        "transitions": [
          {
            "when": "unit",
            "to": "deriveTotal",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "*",
            "to": "repairMeaning",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-PRICE-01",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "先把“单价”说清楚",
          "prompt": "“练习本每本8元”中的8元表示什么？",
          "choices": [
            [
              "unit",
              "1本练习本的价格"
            ],
            [
              "total",
              "买完所有练习本的总钱数"
            ],
            [
              "quantity",
              "一共买8本"
            ]
          ],
          "renderer": "items",
          "rendererArgs": {
            "price": 8,
            "count": 4,
            "label": "练习本"
          }
        }
      },
      "repairMeaning": {
        "objectiveId": "O-U3-PRICE-01",
        "hints": [
          "",
          "只看一件商品上的价格标签。",
          "每件都标8元，说明8元属于“一件”。",
          "买几件是数量；所有钱合起来才是总价。",
          "单价=每1件物品的价格。"
        ],
        "transitions": [
          {
            "when": "unit",
            "to": "deriveTotal",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-PRICE-01"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U3-PRICE-01"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "unit_price_meaning"
              }
            ]
          }
        ],
        "view": {
          "title": "只修“每1件”的意思",
          "prompt": "图中每一本都标着8元。8元应该归到哪个量？",
          "choices": [
            [
              "unit",
              "单价"
            ],
            [
              "quantity",
              "数量"
            ],
            [
              "total",
              "总价"
            ]
          ],
          "renderer": "items",
          "rendererArgs": {
            "price": 8,
            "count": 4,
            "label": "练习本"
          }
        }
      },
      "deriveTotal": {
        "objectiveId": "O-U3-PRICE-02",
        "hints": [
          "",
          "把“8元”重复7次想一想。",
          "相同单价重复7份，用乘法。",
          "8+8+8+8+8+8+8=8×7。",
          "单价×数量=总价，所以8×7=56元。"
        ],
        "transitions": [
          {
            "when": "mul",
            "to": "unknownUnit",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "add",
            "to": "repairMultiply",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-PRICE-02",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "总价不是背公式，是相同单价重复累加",
          "prompt": "每本8元，买7本。怎样表示总价最合适？",
          "choices": [
            [
              "mul",
              "8×7"
            ],
            [
              "add",
              "8＋7"
            ],
            [
              "div",
              "8÷7"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unitValue": "8元/本",
            "quantityValue": "7本",
            "totalValue": "?"
          }
        }
      },
      "repairMultiply": {
        "objectiveId": "O-U3-PRICE-02",
        "hints": [
          "",
          "8和7不是同一种量，不能直接相加。",
          "真正重复出现的是“8元”这一个单价。",
          "7本意味着有7个8元。",
          "所以用8×7，而不是8+7。"
        ],
        "transitions": [
          {
            "when": "mul",
            "to": "unknownUnit",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-PRICE-02"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U3-PRICE-02"
                }
              }
            ]
          }
        ],
        "view": {
          "title": "为什么不是8＋7？",
          "prompt": "图里有7个相同的8元。哪个算式与图对应？",
          "choices": [
            [
              "mul",
              "8×7"
            ],
            [
              "add",
              "8＋7"
            ]
          ],
          "renderer": "items",
          "rendererArgs": {
            "price": 8,
            "count": 7,
            "label": "练习本"
          }
        }
      },
      "unknownUnit": {
        "objectiveId": "O-U3-PRICE-03",
        "hints": [
          "",
          "现在总价和数量已知，缺的是“每1本多少元”。",
          "把总价平均分给每一本。",
          "56元对应7本，所以56÷7。",
          "总价÷数量=单价。"
        ],
        "transitions": [
          {
            "when": "divide",
            "to": "unknownQuantity",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "multiply",
            "to": "repairInverse",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-PRICE-03",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "同一个关系，换成求单价",
          "prompt": "7本练习本共56元，每本多少元？",
          "choices": [
            [
              "divide",
              "56÷7"
            ],
            [
              "multiply",
              "56×7"
            ],
            [
              "other",
              "7÷56"
            ]
          ],
          "renderer": "equalParts",
          "rendererArgs": {
            "total": 56,
            "count": 7,
            "label": "本"
          }
        }
      },
      "repairInverse": {
        "objectiveId": "O-U3-PRICE-03",
        "hints": [
          "",
          "问的是“每一本”，要把总价分成若干相同份。",
          "56元平均对应7本。",
          "平均分用除法。",
          "56÷7=8元/本。"
        ],
        "transitions": [
          {
            "when": "divide",
            "to": "unknownQuantity",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-PRICE-03"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U3-PRICE-03"
                }
              }
            ]
          }
        ],
        "view": {
          "title": "总价要“分回”每一件",
          "prompt": "56元是7本合起来的钱。求1本，应怎样做？",
          "choices": [
            [
              "divide",
              "56÷7"
            ],
            [
              "multiply",
              "56×7"
            ]
          ],
          "renderer": "equalParts",
          "rendererArgs": {
            "total": 56,
            "count": 7,
            "label": "本"
          }
        }
      },
      "unknownQuantity": {
        "objectiveId": "O-U3-PRICE-04",
        "hints": [
          "",
          "现在已知每本6元和总价42元。",
          "问“有几份6元”组成42元。",
          "42÷6就是6元能取几份。",
          "总价÷单价=数量，所以42÷6=7本。"
        ],
        "transitions": [
          {
            "when": "q",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ],
        "view": {
          "title": "再换一次：求数量",
          "prompt": "每本6元，一共付42元。买了多少本？",
          "choices": [
            [
              "q",
              "42÷6"
            ],
            [
              "m",
              "42×6"
            ],
            [
              "a",
              "42＋6"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unitValue": "6元/本",
            "quantityValue": "?",
            "totalValue": "42元"
          }
        }
      },
      "formalize": {
        "objectiveId": "O-U3-PRICE-01",
        "hints": [
          "",
          "三种题其实是同一组数量关系。",
          "已知单价和数量求总价用乘法。",
          "已知总价和其中一个量，反求另一个量用除法。",
          "单价×数量=总价；总价÷数量=单价；总价÷单价=数量。"
        ],
        "transitions": [
          {
            "when": "rule",
            "to": "composite",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "unit-price-quantity-total"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ],
        "view": {
          "title": "三种问法，其实是一张关系图",
          "prompt": "哪组关系全部正确？",
          "choices": [
            [
              "rule",
              "单价×数量=总价；总价÷数量=单价；总价÷单价=数量"
            ],
            [
              "wrong",
              "单价+数量=总价；总价×数量=单价"
            ],
            [
              "mix",
              "单价×总价=数量"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unitValue": "单价",
            "quantityValue": "数量",
            "totalValue": "总价"
          }
        }
      },
      "composite": {
        "objectiveId": "O-U3-PRICE-05",
        "hints": [
          "",
          "总价776元里包含两种商品的钱。",
          "先求12盆芦荟用了多少元。",
          "12×28=336元，剩下776-336=440元。",
          "440元对应20盆吊兰，所以440÷20=22元/盆。"
        ],
        "transitions": [
          {
            "when": "correct",
            "to": "transfer",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "skip",
            "to": "repairComposite",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-PRICE-04",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "复合情境：先分离已知部分，再反求单价",
          "prompt": "共花776元。12盆芦荟每盆28元，剩下的钱买20盆吊兰。吊兰每盆多少元？",
          "choices": [
            [
              "correct",
              "先算12×28，再用(776－336)÷20"
            ],
            [
              "skip",
              "直接776÷20"
            ],
            [
              "add",
              "776＋336再÷20"
            ]
          ],
          "renderer": "budget",
          "rendererArgs": {
            "total": 776,
            "known": 336,
            "knownLabel": "12盆芦荟",
            "unknownCount": 20
          }
        }
      },
      "repairComposite": {
        "objectiveId": "O-U3-PRICE-05",
        "hints": [
          "",
          "776元不是全都用来买吊兰。",
          "先把芦荟的钱从总价里拿出去。",
          "12×28=336元。",
          "剩440元买20盆吊兰，440÷20=22元/盆。"
        ],
        "transitions": [
          {
            "when": "subtract",
            "to": "transfer",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-PRICE-04"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U3-PRICE-04"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "composite_price_model"
              }
            ]
          }
        ],
        "view": {
          "title": "先问：776元全部属于吊兰吗？",
          "prompt": "总价776元中，有336元已经属于芦荟。求吊兰单价前第一步应做什么？",
          "choices": [
            [
              "subtract",
              "776－336"
            ],
            [
              "divide",
              "776÷20"
            ],
            [
              "multiply",
              "776×20"
            ]
          ],
          "renderer": "budget",
          "rendererArgs": {
            "total": 776,
            "known": 336,
            "knownLabel": "芦荟",
            "unknownCount": 20
          }
        }
      },
      "transfer": {
        "objectiveId": "O-U3-PRICE-05",
        "hints": [
          "",
          "先找“每个”的单位率，再看盒数和每盒个数。",
          "7盒×6个=42个球。",
          "84元对应42个球。",
          "84÷42=2元/个。"
        ],
        "transitions": [
          {
            "when": "correct",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ],
        "view": {
          "title": "迁移：单位从“盒”换成“个”",
          "prompt": "7盒乒乓球，每盒6个，共84元。每个球多少元？",
          "choices": [
            [
              "correct",
              "先算7×6=42个，再算84÷42"
            ],
            [
              "box",
              "84÷7，只求每盒价格"
            ],
            [
              "wrong",
              "84÷6"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "每个球单价",
            "quantity": "总个数",
            "total": "总价",
            "unitValue": "?",
            "quantityValue": "7×6",
            "totalValue": "84元"
          }
        }
      },
      "complete": {
        "objectiveId": "O-U3-PRICE-05",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "reviewOnH4": false,
        "view": {
          "title": "数量关系已经不是死公式",
          "prompt": "先确定每1份是什么，再辨认单价、数量、总价；复合题先拆出属于当前关系的总价，再使用乘除互逆。",
          "choices": []
        },
        "transitions": []
      }
    },
    "packageVersion": "0.1.0",
    "labels": {
      "badge": "数量关系试点",
      "title": "单价 · 数量 · 总价",
      "description": "先理解“每1份”，再切换未知量；复合题先拆关系。"
    },
    "objectives": {
      "meaning": "O-U3-PRICE-01",
      "total": "O-U3-PRICE-02",
      "unit": "O-U3-PRICE-03",
      "quantity": "O-U3-PRICE-04",
      "composite": "O-U3-PRICE-05"
    },
    "misconceptions": {
      "unitMeaning": "M-U3-PRICE-01",
      "addInsteadMultiply": "M-U3-PRICE-02",
      "inverseRole": "M-U3-PRICE-03",
      "skipSubtotal": "M-U3-PRICE-04"
    }
  },
  "u3.speed.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u3.speed.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u3",
    "nodeId": "speed",
    "initialStep": "diagnose",
    "labels": {
      "badge": "数量关系正式课",
      "title": "速度、时间、路程",
      "description": "先比较同时间/同路程，再形成单位时间路程与三量关系。"
    },
    "objectives": {
      "compare": "O-U3-SPEED-01",
      "meaning": "O-U3-SPEED-02",
      "relation": "O-U3-SPEED-03",
      "inverse": "O-U3-SPEED-04",
      "transfer": "O-U3-SPEED-05"
    },
    "misconceptions": {
      "distanceOnly": "M-U3-SPEED-01",
      "timeOnly": "M-U3-SPEED-02",
      "unitRate": "M-U3-SPEED-03",
      "inverse": "M-U3-SPEED-04"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "quantity-relation",
      "sourcePages": "50-51",
      "sourceNote": "教材先比较4分钟280米与4分钟240米，再比较240米用时4分与3分；时间和路程都不同则转为平均每分钟路程，并定义速度。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U3-SPEED-01",
        "hints": [
          "",
          "先看两人的时间是否相同。",
          "同样都是4分钟，可以直接比较路程。",
          "280米比240米多。",
          "同时间内走得更远的人更快。"
        ],
        "view": {
          "title": "先看能不能直接比较",
          "prompt": "小明4分钟走280米，小红4分钟走240米。谁走得快？",
          "choices": [
            [
              "ming",
              "小明"
            ],
            [
              "red",
              "小红"
            ],
            [
              "cannot",
              "不能比较"
            ]
          ]
        },
        "transitions": [
          {
            "when": "ming",
            "to": "sameDistance",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "red",
            "to": "repairDistance",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-SPEED-01",
                "confidence": "high"
              }
            ]
          },
          {
            "when": "cannot",
            "to": "repairDistance",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-SPEED-01",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairDistance": {
        "objectiveId": "O-U3-SPEED-01",
        "hints": [
          "",
          "固定住相同的量。",
          "时间已经相同。",
          "只需要看4分钟内各走了多远。",
          "同时间：路程更长者更快。"
        ],
        "view": {
          "title": "只修“同时间怎么比”",
          "prompt": "两个人都走4分钟。这时比较什么最直接？",
          "choices": [
            [
              "distance",
              "比较路程"
            ],
            [
              "time",
              "比较时间"
            ]
          ]
        },
        "transitions": [
          {
            "when": "distance",
            "to": "sameDistance",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-SPEED-01"
              },
              {
                "type": "scheduleReview",
                "reason": "same-time-comparison"
              }
            ]
          }
        ]
      },
      "sameDistance": {
        "objectiveId": "O-U3-SPEED-01",
        "hints": [
          "",
          "这次路程相同。",
          "同样240米，比较谁用时更少。",
          "3分钟比4分钟少。",
          "同路程：用时更少者更快。"
        ],
        "view": {
          "title": "换一种公平比较",
          "prompt": "小红4分钟走240米，小刚3分钟也走240米。谁走得快？",
          "choices": [
            [
              "gang",
              "小刚"
            ],
            [
              "red",
              "小红"
            ],
            [
              "distance",
              "路程一样所以一样快"
            ]
          ]
        },
        "transitions": [
          {
            "when": "gang",
            "to": "unitRate",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "distance",
            "to": "repairTime",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-SPEED-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairTime": {
        "objectiveId": "O-U3-SPEED-01",
        "hints": [
          "",
          "固定住路程。",
          "路程已经一样。",
          "比较完成同样路程用了多久。",
          "同路程：时间越少，速度越快。"
        ],
        "view": {
          "title": "只修“同路程怎么比”",
          "prompt": "都走240米时，判断快慢应该比较什么？",
          "choices": [
            [
              "time",
              "比较时间"
            ],
            [
              "distance",
              "比较路程"
            ]
          ]
        },
        "transitions": [
          {
            "when": "time",
            "to": "unitRate",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-SPEED-02"
              },
              {
                "type": "scheduleReview",
                "reason": "same-distance-comparison"
              }
            ]
          }
        ]
      },
      "unitRate": {
        "objectiveId": "O-U3-SPEED-02",
        "hints": [
          "",
          "需要把比较标准统一。",
          "可以把两个人都换算成“1分钟”。",
          "280÷4=70，240÷3=80。",
          "单位时间行驶的路程叫速度。"
        ],
        "view": {
          "title": "时间、路程都不同怎么办",
          "prompt": "小明4分钟280米，小刚3分钟240米。怎样公平比较？",
          "choices": [
            [
              "perMinute",
              "分别求每分钟走多少米"
            ],
            [
              "distance",
              "只比280和240"
            ],
            [
              "time",
              "只比4和3"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "速度",
            "quantity": "时间",
            "total": "路程",
            "unitValue": "? 米/分",
            "quantityValue": "? 分",
            "totalValue": "? 米"
          }
        },
        "transitions": [
          {
            "when": "perMinute",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "distance",
            "to": "repairUnitRate",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-SPEED-03",
                "confidence": "high"
              }
            ]
          },
          {
            "when": "time",
            "to": "repairUnitRate",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-SPEED-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairUnitRate": {
        "objectiveId": "O-U3-SPEED-02",
        "hints": [
          "",
          "问：两个人比较路程时，时间条件一样吗？",
          "时间不同，原路程不能直接说明快慢。",
          "都除以各自时间，得到每1分钟路程。",
          "70米/分与80米/分才是同一标准。"
        ],
        "view": {
          "title": "统一到“每1分钟”",
          "prompt": "为什么不能只比较280米和240米？",
          "choices": [
            [
              "differentTime",
              "因为所用时间不同"
            ],
            [
              "moreDistance",
              "因为280更大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "differentTime",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-SPEED-03"
              },
              {
                "type": "scheduleReview",
                "reason": "unit-rate-meaning"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U3-SPEED-03",
        "hints": [
          "",
          "速度表示单位时间的路程。",
          "求每1份通常用除法。",
          "路程÷时间=速度。",
          "由此可得路程=速度×时间，时间=路程÷速度。"
        ],
        "view": {
          "title": "现在再形成三量关系",
          "prompt": "哪组关系与教材定义一致？",
          "choices": [
            [
              "rule",
              "速度=路程÷时间；路程=速度×时间"
            ],
            [
              "swap",
              "速度=路程×时间"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "速度",
            "quantity": "时间",
            "total": "路程",
            "unitValue": "70米/分",
            "quantityValue": "8分",
            "totalValue": "560米"
          }
        },
        "transitions": [
          {
            "when": "rule",
            "to": "inverse",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "relation": "distance-speed-time"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "inverse": {
        "objectiveId": "O-U3-SPEED-04",
        "hints": [
          "",
          "已知路程和速度。",
          "时间=路程÷速度。",
          "840÷70。",
          "840÷70=12分钟。"
        ],
        "view": {
          "title": "换一个未知量",
          "prompt": "晓棠家到学校840米，速度70米/分，需要多少分钟？",
          "choices": [
            [
              "12",
              "12分钟"
            ],
            [
              "58800",
              "58800分钟"
            ],
            [
              "10",
              "10分钟"
            ]
          ]
        },
        "transitions": [
          {
            "when": "12",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "58800",
            "to": "repairInverse",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U3-SPEED-04",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairInverse": {
        "objectiveId": "O-U3-SPEED-04",
        "hints": [
          "",
          "70米/分表示每1分钟70米。",
          "840米里包含多少个70米？",
          "用总路程÷每分钟路程。",
          "840÷70=12。"
        ],
        "view": {
          "title": "只修未知量角色",
          "prompt": "为什么这里不是840×70？",
          "choices": [
            [
              "divide",
              "要算“有几个70米”，所以用除法"
            ],
            [
              "multiply",
              "速度总要乘"
            ]
          ]
        },
        "transitions": [
          {
            "when": "divide",
            "to": "freshInverse",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U3-SPEED-04"
              },
              {
                "type": "scheduleReview",
                "reason": "inverse-relation"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U3-SPEED-05",
        "hints": [
          "",
          "先认清速度单位是米/秒。",
          "5秒就是5个340米。",
          "路程=速度×时间。",
          "340×5=1700米。"
        ],
        "view": {
          "title": "迁移到新单位",
          "prompt": "声音速度340米/秒，5秒传播多少米？",
          "choices": [
            [
              "1700",
              "1700米"
            ],
            [
              "68",
              "68米"
            ]
          ]
        },
        "transitions": [
          {
            "when": "1700",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U3-SPEED-05",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "速度关系已经连起来了",
          "prompt": "你已经能在同时间、同路程和不同条件下公平比较，并能在速度、时间、路程之间切换未知量。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      },
      "freshInverse": {
        "objectiveId": "O-U3-SPEED-04",
        "hints": [
          "",
          "先认清已知的是路程和速度。",
          "时间=路程÷速度。",
          "560÷80。",
          "560÷80=7分钟。"
        ],
        "view": {
          "title": "换一道新题确认反求时间",
          "prompt": "一段路程560米，速度80米/分，需要多少分钟？",
          "choices": [
            [
              "7",
              "7分钟"
            ],
            [
              "44800",
              "44800分钟"
            ],
            [
              "8",
              "8分钟"
            ]
          ]
        },
        "transitions": [
          {
            "when": "7",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true,
                  "fresh": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      }
    }
  },
  "u4.bracket.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u4.bracket.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u4",
    "nodeId": "bracket",
    "initialStep": "diagnose",
    "labels": {
      "badge": "运算顺序正式课",
      "title": "小括号与中括号",
      "description": "把括号看成“先形成一个整体”，再按从内到外的层级计算。"
    },
    "objectives": {
      "paren": "O-U4-BRACKET-01",
      "nested": "O-U4-BRACKET-02",
      "compare": "O-U4-BRACKET-03",
      "transfer": "O-U4-BRACKET-04"
    },
    "misconceptions": {
      "ignore": "M-U4-BRACKET-01",
      "outerFirst": "M-U4-BRACKET-02",
      "leftRight": "M-U4-BRACKET-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "60-62",
      "sourceNote": "教材用(600－126×4)÷48建立小括号优先，再明确“既有小括号又有中括号，先算小括号里面，再算中括号里面”；练习通过有无括号、括号位置不同的式子比较结果。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U4-BRACKET-01",
        "hints": [
          "",
          "先看括号里面。",
          "括号里面仍然遵循乘除先于加减。",
          "所以先126×4。",
          "得到504，再做600－504。"
        ],
        "view": {
          "title": "括号是在改变“先算谁”",
          "prompt": "(600－126×4)÷48，第一步应该算什么？",
          "choices": [
            [
              "mul",
              "126×4"
            ],
            [
              "sub",
              "600－126"
            ],
            [
              "div",
              "先÷48"
            ]
          ]
        },
        "transitions": [
          {
            "when": "mul",
            "to": "smallParen",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "sub",
            "to": "repairIgnore",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-BRACKET-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairIgnore": {
        "objectiveId": "O-U4-BRACKET-01",
        "hints": [
          "",
          "括号不是说“从左到右”。",
          "它只是把括号内作为先处理的整体。",
          "整体内部仍遵守乘除先于加减。",
          "所以126×4先算。"
        ],
        "view": {
          "title": "括号优先，但括号里也有顺序",
          "prompt": "为什么不能先算600－126？",
          "choices": [
            [
              "inside",
              "因为括号内126×4要先于减法"
            ],
            [
              "left",
              "因为从右边开始算"
            ]
          ]
        },
        "transitions": [
          {
            "when": "inside",
            "to": "smallParen",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-BRACKET-01"
              },
              {
                "type": "scheduleReview",
                "reason": "parentheses-priority"
              }
            ]
          }
        ]
      },
      "smallParen": {
        "objectiveId": "O-U4-BRACKET-01",
        "hints": [
          "",
          "126×4=504。",
          "600－504=96。",
          "96÷48。",
          "结果2。"
        ],
        "view": {
          "title": "先把小括号算成一个数",
          "prompt": "(600－126×4)÷48 的结果是多少？",
          "choices": [
            [
              "2",
              "2"
            ],
            [
              "8",
              "8"
            ],
            [
              "22",
              "22"
            ]
          ]
        },
        "transitions": [
          {
            "when": "2",
            "to": "nested",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "nested": {
        "objectiveId": "O-U4-BRACKET-02",
        "hints": [
          "",
          "看括号层级。",
          "小括号在中括号里面。",
          "必须先得到最里面的整体。",
          "先81－56=25。"
        ],
        "view": {
          "title": "有小括号和中括号时，从里向外",
          "prompt": "525÷[(81－56)×3]，第一步应该算什么？",
          "choices": [
            [
              "small",
              "81－56"
            ],
            [
              "multiply",
              "先×3"
            ],
            [
              "divide",
              "先525÷"
            ]
          ]
        },
        "transitions": [
          {
            "when": "small",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "multiply",
            "to": "repairOuter",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-BRACKET-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairOuter": {
        "objectiveId": "O-U4-BRACKET-02",
        "hints": [
          "",
          "×3左边不是一个现成数字。",
          "它是小括号(81－56)。",
          "先算25。",
          "再25×3=75，最后525÷75。"
        ],
        "view": {
          "title": "为什么不能先处理中括号外层",
          "prompt": "中括号里的×3依赖哪个尚未算出的值？",
          "choices": [
            [
              "small",
              "依赖(81－56)的结果"
            ],
            [
              "none",
              "不依赖任何值"
            ]
          ]
        },
        "transitions": [
          {
            "when": "small",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-BRACKET-02"
              },
              {
                "type": "scheduleReview",
                "reason": "nested-bracket-order"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U4-BRACKET-02",
        "hints": [
          "",
          "括号决定优先层级。",
          "小括号在更里面。",
          "中括号包着小括号。",
          "从内向外，同时每层内部仍按运算顺序。"
        ],
        "view": {
          "title": "现在总结括号层级规则",
          "prompt": "哪句最准确？",
          "choices": [
            [
              "rule",
              "先算小括号，再算中括号；括号内部仍遵循原有运算顺序"
            ],
            [
              "left",
              "有括号也只从左到右"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "inner-to-outer-brackets"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U4-BRACKET-03",
        "hints": [
          "",
          "先小括号。",
          "括号内78÷13=6。",
          "20－6=14。",
          "58×14=812。"
        ],
        "view": {
          "title": "换一道教材题独立算",
          "prompt": "58×(20－78÷13) 的结果是多少？",
          "choices": [
            [
              "812",
              "812"
            ],
            [
              "84",
              "84"
            ],
            [
              "696",
              "696"
            ]
          ]
        },
        "transitions": [
          {
            "when": "812",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "84",
            "to": "repairLeftRight",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-BRACKET-03",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairLeftRight": {
        "objectiveId": "O-U4-BRACKET-03",
        "hints": [
          "",
          "括号只确定“这一块先算”。",
          "块里面仍有运算等级。",
          "除法先于减法。",
          "所以先78÷13。"
        ],
        "view": {
          "title": "括号内也不能机械从左到右",
          "prompt": "20－78÷13里哪一步先算？",
          "choices": [
            [
              "div",
              "78÷13"
            ],
            [
              "sub",
              "20－78"
            ]
          ]
        },
        "transitions": [
          {
            "when": "div",
            "to": "freshIndependent",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-BRACKET-03"
              },
              {
                "type": "scheduleReview",
                "reason": "inside-bracket-precedence"
              }
            ]
          }
        ]
      },
      "freshIndependent": {
        "objectiveId": "O-U4-BRACKET-03",
        "hints": [
          "",
          "先括号32－17。",
          "得到15。",
          "48×15=720。",
          "720÷30=24。"
        ],
        "view": {
          "title": "换一道新题确认",
          "prompt": "48×(32－17)÷30 的结果是多少？",
          "choices": [
            [
              "24",
              "24"
            ],
            [
              "720",
              "720"
            ],
            [
              "49",
              "49"
            ]
          ]
        },
        "transitions": [
          {
            "when": "24",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true,
                  "fresh": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U4-BRACKET-04",
        "hints": [
          "",
          "分别按各自顺序算。",
          "第一个：180+12=192。",
          "第二个：括号内3+12=15，540÷15=36。",
          "192>36。"
        ],
        "view": {
          "title": "迁移：括号位置改变结果",
          "prompt": "比较540÷3＋6×2与540÷(3＋6×2)，哪一个更大？",
          "choices": [
            [
              "first",
              "第一个更大"
            ],
            [
              "second",
              "第二个更大"
            ],
            [
              "same",
              "一样大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "first",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U4-BRACKET-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "括号现在表示的是“运算层级”",
          "prompt": "先识别最里面的括号，再在该层内部按正常运算顺序计算；括号位置一变，参与运算的整体就会变。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u4.model.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u4.model.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u4",
    "nodeId": "model",
    "initialStep": "diagnose",
    "labels": {
      "badge": "数量建模正式课",
      "title": "数量关系到综合算式",
      "description": "先把文字条件变成中间量关系，再把多步关系压缩成综合算式。"
    },
    "objectives": {
      "target": "O-U4-MODEL-01",
      "middle": "O-U4-MODEL-02",
      "transfer": "O-U4-MODEL-04",
      "compose": "O-U4-MODEL-03"
    },
    "misconceptions": {
      "operateWords": "M-U4-MODEL-01",
      "skipMiddle": "M-U4-MODEL-02"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "quantity-relation",
      "sourcePages": "58,60-63",
      "sourceNote": "教材第58页用书法18人、绘画为2倍、合唱比两组总人数少6人展示关系图并列综合算式；第60页用600元买4架126元飞机模型、剩余钱买48元舰船模型，先求中间量再组成带括号综合算式。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U4-MODEL-01",
        "hints": [
          "",
          "题目最后一句问谁。",
          "绘画组只是中间量。",
          "最终问题是合唱组。",
          "先锁定目标，再倒推需要哪些中间量。"
        ],
        "view": {
          "title": "先问“最终要找谁”",
          "prompt": "书法组18人，绘画组人数是书法组2倍，合唱组比书法组和绘画组总人数少6人。最终要找什么？",
          "choices": [
            [
              "choir",
              "合唱组人数"
            ],
            [
              "art",
              "绘画组人数"
            ],
            [
              "total",
              "三组合计"
            ]
          ]
        },
        "transitions": [
          {
            "when": "choir",
            "to": "middleArt",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "art",
            "to": "repairTarget",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-MODEL-01",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairTarget": {
        "objectiveId": "O-U4-MODEL-01",
        "hints": [
          "",
          "“比……少6人”的主语是合唱组。",
          "书法+绘画的总人数是比较基准。",
          "所以最终要从这个基准减6。",
          "目标仍是合唱组。"
        ],
        "view": {
          "title": "不要被最近出现的数字带走",
          "prompt": "“合唱组比书法组和绘画组的总人数少6人”是在求谁？",
          "choices": [
            [
              "choir",
              "合唱组"
            ],
            [
              "art",
              "绘画组"
            ]
          ]
        },
        "transitions": [
          {
            "when": "choir",
            "to": "middleArt",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-MODEL-01"
              },
              {
                "type": "scheduleReview",
                "reason": "model-lock-target"
              }
            ]
          }
        ]
      },
      "middleArt": {
        "objectiveId": "O-U4-MODEL-02",
        "hints": [
          "",
          "绘画是书法的2倍。",
          "18×2。",
          "得到36。",
          "这是后面求两组总人数需要的中间量。"
        ],
        "view": {
          "title": "先求不可缺的中间量",
          "prompt": "绘画组人数是多少？",
          "choices": [
            [
              "36",
              "36人"
            ],
            [
              "20",
              "20人"
            ],
            [
              "9",
              "9人"
            ]
          ],
          "renderer": "relation",
          "rendererArgs": {
            "unit": "书法组",
            "quantity": "倍数",
            "total": "绘画组",
            "unitValue": "18人",
            "quantityValue": "2倍",
            "totalValue": "36人"
          }
        },
        "transitions": [
          {
            "when": "36",
            "to": "middleTotal",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "middleTotal": {
        "objectiveId": "O-U4-MODEL-02",
        "hints": [
          "",
          "18+36。",
          "得到54。",
          "合唱组比这个总数少6。",
          "下一步54－6。"
        ],
        "view": {
          "title": "第二个中间量连接到最终目标",
          "prompt": "书法组和绘画组共多少人？",
          "choices": [
            [
              "54",
              "54人"
            ],
            [
              "48",
              "48人"
            ]
          ]
        },
        "transitions": [
          {
            "when": "54",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U4-MODEL-03",
        "hints": [
          "",
          "先看依赖顺序。",
          "先18×2求绘画组。",
          "再与18相加。",
          "最后减6，所以18＋18×2－6。"
        ],
        "view": {
          "title": "综合算式是关系图的压缩，不是猜出来的",
          "prompt": "哪一个综合算式正确？",
          "choices": [
            [
              "expr",
              "18＋18×2－6"
            ],
            [
              "wrong",
              "18×(2－6)"
            ]
          ]
        },
        "transitions": [
          {
            "when": "expr",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "derive-expression-from-dependency-chain"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U4-MODEL-03",
        "hints": [
          "",
          "先求4架飞机花多少钱。",
          "126×4=504。",
          "再求剩余600－504=96。",
          "最后96÷48=2。"
        ],
        "view": {
          "title": "换一个带“剩余”的教材模型",
          "prompt": "600元买4架126元飞机模型，剩下的钱买48元/艘的舰船。可以买几艘？",
          "choices": [
            [
              "2",
              "2艘"
            ],
            [
              "10",
              "10艘"
            ],
            [
              "96",
              "96艘"
            ]
          ]
        },
        "transitions": [
          {
            "when": "2",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "10",
            "to": "repairMiddle",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-MODEL-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairMiddle": {
        "objectiveId": "O-U4-MODEL-03",
        "hints": [
          "",
          "舰船数量=剩余钱÷单价。",
          "所以“剩余钱”是必要中间量。",
          "先600－126×4。",
          "再除以48。"
        ],
        "view": {
          "title": "“剩余”必须先变成一个明确中间量",
          "prompt": "买舰船前，必须先知道什么？",
          "choices": [
            [
              "remain",
              "剩下多少钱"
            ],
            [
              "planes",
              "飞机有几架"
            ]
          ]
        },
        "transitions": [
          {
            "when": "remain",
            "to": "freshIndependent",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-MODEL-02"
              },
              {
                "type": "scheduleReview",
                "reason": "model-explicit-middle"
              }
            ]
          }
        ]
      },
      "freshIndependent": {
        "objectiveId": "O-U4-MODEL-03",
        "hints": [
          "",
          "先求第一种花费。",
          "3×80=240。",
          "剩260。",
          "260÷65=4。"
        ],
        "view": {
          "title": "换一道新题确认建模",
          "prompt": "有500元，先买3件80元物品，剩下的钱按65元/件买另一种物品，最多买几件？",
          "choices": [
            [
              "4",
              "4件"
            ],
            [
              "5",
              "5件"
            ],
            [
              "8",
              "8件"
            ]
          ]
        },
        "transitions": [
          {
            "when": "4",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true,
                  "fresh": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U4-MODEL-04",
        "hints": [
          "",
          "先求乙24×3。",
          "再求甲乙总数。",
          "丙比总数多5。",
          "所以24＋24×3＋5。"
        ],
        "view": {
          "title": "迁移：从文字直接判断依赖链",
          "prompt": "“甲有24个，乙是甲的3倍，丙比甲乙总数多5个。”求丙，正确结构是哪一个？",
          "choices": [
            [
              "correct",
              "24＋24×3＋5"
            ],
            [
              "wrong",
              "24×(3＋5)"
            ]
          ]
        },
        "transitions": [
          {
            "when": "correct",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U4-MODEL-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你会从文字生成“依赖链”了",
          "prompt": "综合算式不是关键词拼接，而是把目标、中间量和依赖顺序压缩成一条可计算表达式。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u4.order.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u4.order.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u4",
    "nodeId": "order",
    "initialStep": "diagnose",
    "labels": {
      "badge": "运算顺序正式课",
      "title": "同级与两级运算",
      "description": "先判断运算是否同级，再决定从左往右还是先乘除后加减。"
    },
    "objectives": {
      "classify": "O-U4-ORDER-01",
      "sameLevel": "O-U4-ORDER-02",
      "twoLevel": "O-U4-ORDER-03",
      "transfer": "O-U4-ORDER-04"
    },
    "misconceptions": {
      "multiplyAlways": "M-U4-ORDER-01",
      "addAlways": "M-U4-ORDER-02",
      "leftAll": "M-U4-ORDER-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "59",
      "sourceNote": "教材第59页明确：无括号算式中有乘除和加减时先乘除后加减；同级运算按从左往右顺序。教材改错题还直接暴露“乘除同级并非先乘后除”的典型误区。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U4-ORDER-01",
        "hints": [
          "",
          "先看有没有括号。",
          "没有括号时，先分运算级别。",
          "乘除高于加减。",
          "所以先处理240÷6和2×17。"
        ],
        "view": {
          "title": "先判断是不是同一级",
          "prompt": "240÷6－2×17 里，哪类运算要先处理？",
          "choices": [
            [
              "muldiv",
              "乘除"
            ],
            [
              "left",
              "最左边的运算，不分级"
            ],
            [
              "sub",
              "减法"
            ]
          ]
        },
        "transitions": [
          {
            "when": "muldiv",
            "to": "sameLevel",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "left",
            "to": "repairLeftAll",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-ORDER-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairLeftAll": {
        "objectiveId": "O-U4-ORDER-01",
        "hints": [
          "",
          "从左往右只适用于同级运算。",
          "乘除和加减属于两级。",
          "两级时先乘除。",
          "之后再处理加减。"
        ],
        "view": {
          "title": "不是所有算式都机械从左往右",
          "prompt": "无括号、同时出现乘除和加减时，应该先做哪一类？",
          "choices": [
            [
              "muldiv",
              "乘除"
            ],
            [
              "left",
              "最左边"
            ]
          ]
        },
        "transitions": [
          {
            "when": "muldiv",
            "to": "sameLevel",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-ORDER-03"
              },
              {
                "type": "scheduleReview",
                "reason": "two-level-precedence"
              }
            ]
          }
        ]
      },
      "sameLevel": {
        "objectiveId": "O-U4-ORDER-02",
        "hints": [
          "",
          "乘法和除法同级。",
          "同级按从左往右。",
          "80÷2在前。",
          "所以先算80÷2。"
        ],
        "view": {
          "title": "乘和除同级，没有“先乘后除”",
          "prompt": "80÷2×5 的第一步应该是什么？",
          "choices": [
            [
              "divide",
              "80÷2"
            ],
            [
              "multiply",
              "2×5"
            ]
          ]
        },
        "transitions": [
          {
            "when": "divide",
            "to": "addSubLevel",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "multiply",
            "to": "repairMultiply",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-ORDER-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairMultiply": {
        "objectiveId": "O-U4-ORDER-02",
        "hints": [
          "",
          "乘除同级。",
          "看位置，不看名称。",
          "左边45÷5先出现。",
          "所以先除。"
        ],
        "view": {
          "title": "只修“先乘后除”的错规则",
          "prompt": "45÷5×3 应该先算哪一步？",
          "choices": [
            [
              "divide",
              "45÷5"
            ],
            [
              "multiply",
              "5×3"
            ]
          ]
        },
        "transitions": [
          {
            "when": "divide",
            "to": "addSubLevel",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-ORDER-01"
              },
              {
                "type": "scheduleReview",
                "reason": "multiply-divide-same-level"
              }
            ]
          }
        ]
      },
      "addSubLevel": {
        "objectiveId": "O-U4-ORDER-02",
        "hints": [
          "",
          "加法和减法同级。",
          "没有“先加后减”。",
          "同级从左往右。",
          "所以先30－8。"
        ],
        "view": {
          "title": "加和减同样是同级",
          "prompt": "30－8＋5 的第一步应该是什么？",
          "choices": [
            [
              "subtract",
              "30－8"
            ],
            [
              "add",
              "8＋5"
            ]
          ]
        },
        "transitions": [
          {
            "when": "subtract",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "add",
            "to": "repairAdd",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-ORDER-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairAdd": {
        "objectiveId": "O-U4-ORDER-02",
        "hints": [
          "",
          "这和数的大小无关。",
          "规则看运算级别和位置。",
          "加减同级。",
          "所以从左向右。"
        ],
        "view": {
          "title": "也没有“先加后减”",
          "prompt": "50－12＋7 为什么不能先算12＋7？",
          "choices": [
            [
              "level",
              "加减同级，要从左往右"
            ],
            [
              "bigger",
              "因为50比较大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "level",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-ORDER-02"
              },
              {
                "type": "scheduleReview",
                "reason": "add-subtract-same-level"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U4-ORDER-03",
        "hints": [
          "",
          "先判断级别。",
          "同级才从左往右。",
          "两级时先完成乘除。",
          "不能把四种运算硬排成固定“乘除加减”顺序。"
        ],
        "view": {
          "title": "现在总结无括号运算顺序",
          "prompt": "哪一句最准确？",
          "choices": [
            [
              "rule",
              "无括号：同级从左往右；有乘除和加减两级时先乘除后加减"
            ],
            [
              "wrong",
              "永远先乘，再除，再加，再减"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "same-level-left-to-right-two-level-precedence"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U4-ORDER-03",
        "hints": [
          "",
          "先除法。",
          "84÷7=12。",
          "再按加减同级从左往右：28+12－13。",
          "结果27。"
        ],
        "view": {
          "title": "换一道新题独立做",
          "prompt": "28＋84÷7－13 的结果是多少？",
          "choices": [
            [
              "27",
              "27"
            ],
            [
              "3",
              "3"
            ],
            [
              "83",
              "83"
            ]
          ]
        },
        "transitions": [
          {
            "when": "27",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U4-ORDER-04",
        "hints": [
          "",
          "全是乘除，同一级。",
          "从左往右。",
          "96÷4=24，24×3=72。",
          "72÷6=12。"
        ],
        "view": {
          "title": "迁移：同级规则换一种组合",
          "prompt": "96÷4×3÷6 的结果是多少？",
          "choices": [
            [
              "12",
              "12"
            ],
            [
              "2",
              "2"
            ],
            [
              "72",
              "72"
            ]
          ]
        },
        "transitions": [
          {
            "when": "12",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U4-ORDER-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你会先分级，再决定顺序了",
          "prompt": "无括号算式先判断运算级别：同级从左往右；两级先乘除后加减。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u4.reverse.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u4.reverse.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u4",
    "nodeId": "reverse",
    "initialStep": "diagnose",
    "labels": {
      "badge": "程序改错正式课",
      "title": "改错与逆向检查",
      "description": "先定位第一处错误，再修正后续；用逆运算或代回检查。"
    },
    "objectives": {
      "order": "O-U4-REVERSE-01",
      "firstError": "O-U4-REVERSE-02",
      "repair": "O-U4-REVERSE-03",
      "transfer": "O-U4-REVERSE-04"
    },
    "misconceptions": {
      "leftToRight": "M-U4-REVERSE-01",
      "fixLast": "M-U4-REVERSE-02",
      "trustWrong": "M-U4-REVERSE-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "59,62-63",
      "sourceNote": "教材59页要求先说运算顺序并把错误计算改正；62-63页继续用括号/混合运算和实际问题检验运算顺序与数量关系。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U4-REVERSE-01",
        "hints": [
          "",
          "没有括号。",
          "乘除先于加减。",
          "乘除同级从左到右。",
          "所以第一步是200÷5。"
        ],
        "view": {
          "title": "先找第一步，不急着算到底",
          "prompt": "算式440－200÷5×8，第一步应该算什么？",
          "choices": [
            [
              "divide",
              "200÷5"
            ],
            [
              "subtract",
              "440－200"
            ],
            [
              "multiply",
              "5×8"
            ]
          ]
        },
        "transitions": [
          {
            "when": "divide",
            "to": "firstError",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "subtract",
            "to": "repairOrder",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-REVERSE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairOrder": {
        "objectiveId": "O-U4-REVERSE-01",
        "hints": [
          "",
          "先辨运算级别。",
          "乘法和除法同级。",
          "它们比加减优先。",
          "同级再从左到右。"
        ],
        "view": {
          "title": "只修运算顺序",
          "prompt": "没有括号且有乘除、加减时，哪类先算？",
          "choices": [
            [
              "muldiv",
              "乘除先算"
            ],
            [
              "left",
              "从最左边开始不管符号"
            ]
          ]
        },
        "transitions": [
          {
            "when": "muldiv",
            "to": "firstError",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-REVERSE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "mixed-operation-order"
              }
            ]
          }
        ]
      },
      "firstError": {
        "objectiveId": "O-U4-REVERSE-02",
        "hints": [
          "",
          "逐步和正确规则对照。",
          "200÷5应该先得到40。",
          "然后40×8=320。",
          "第一处错误一旦出现，后面的数都不能继续信。"
        ],
        "view": {
          "title": "教材找错：第一处错在哪里",
          "prompt": "错误过程：440－200÷5×8 → 440－200÷40 → 440－5 → 435。第一处错误是哪一步？",
          "choices": [
            [
              "first",
              "把200÷5×8错误合成200÷40"
            ],
            [
              "last",
              "最后440－5"
            ],
            [
              "answer",
              "只看答案435"
            ]
          ]
        },
        "transitions": [
          {
            "when": "first",
            "to": "repairFlow",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "last",
            "to": "repairFirstError",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-REVERSE-02",
                "confidence": "high"
              }
            ]
          },
          {
            "when": "answer",
            "to": "repairFirstError",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-REVERSE-02",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairFirstError": {
        "objectiveId": "O-U4-REVERSE-02",
        "hints": [
          "",
          "后续步骤依赖前一步结果。",
          "输入错了，后面的计算对象也变了。",
          "应从第一个错误点重新生成后续结果。",
          "正确应为200÷5=40，40×8=320，440－320=120。"
        ],
        "view": {
          "title": "为什么不能只改最后一步",
          "prompt": "如果第二行已经错了，后面的435还能当作有效中间结果吗？",
          "choices": [
            [
              "no",
              "不能，必须从第一处错误重新算"
            ],
            [
              "yes",
              "能，只改最后答案"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "repairFlow",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-REVERSE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "first-error-repair"
              }
            ]
          }
        ]
      },
      "repairFlow": {
        "objectiveId": "O-U4-REVERSE-03",
        "hints": [
          "",
          "先200÷5。",
          "40×8=320。",
          "最后440－320。",
          "结果120。"
        ],
        "view": {
          "title": "修正以后要重新走后续",
          "prompt": "正确结果是多少？",
          "choices": [
            [
              "120",
              "120"
            ],
            [
              "435",
              "435"
            ],
            [
              "55",
              "55"
            ]
          ]
        },
        "transitions": [
          {
            "when": "120",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "435",
            "to": "repairTrust",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-REVERSE-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairTrust": {
        "objectiveId": "O-U4-REVERSE-03",
        "hints": [
          "",
          "错误结果可以帮助定位误区。",
          "但不能作为新题目的正确条件。",
          "修正首错后，后续全部重新计算。",
          "证据链要从正确步骤重新建立。"
        ],
        "view": {
          "title": "错误结果只能当线索",
          "prompt": "435来自错误链条，应该怎样处理？",
          "choices": [
            [
              "discard",
              "保留它作为错误线索，但重新从首错处计算"
            ],
            [
              "reuse",
              "把435当正确条件继续推"
            ]
          ]
        },
        "transitions": [
          {
            "when": "discard",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-REVERSE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "do-not-trust-wrong-result"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U4-REVERSE-03",
        "hints": [
          "",
          "改错不是猜答案。",
          "先定位最早违背规则的步骤。",
          "修复后后续结果全部重算。",
          "最后用另一条关系检查。"
        ],
        "view": {
          "title": "形成改错流程",
          "prompt": "哪套流程最可靠？",
          "choices": [
            [
              "rule",
              "先判运算顺序→逐步找首错→从首错处重算→用逆运算/代回检查"
            ],
            [
              "last",
              "只对照最终答案，不同就改最后一步"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "first-error-then-recompute"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U4-REVERSE-04",
        "hints": [
          "",
          "先分别写第一步。",
          "无括号：120÷6=20，再×5=100。",
          "有括号：6×5=30，再120÷30=4。",
          "250>154，所以第一个更大。"
        ],
        "view": {
          "title": "迁移：括号改变顺序",
          "prompt": "比较150＋120÷6×5与150＋120÷(6×5)。哪一个更大？",
          "choices": [
            [
              "first",
              "第一个更大"
            ],
            [
              "second",
              "第二个更大"
            ],
            [
              "same",
              "一样大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "first",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U4-REVERSE-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你已经会“从首错修复”",
          "prompt": "先判断规则，再定位第一处错误；错误结果只保留为诊断线索，修正后要重建后续计算并检查。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      },
      "independent": {
        "objectiveId": "O-U4-REVERSE-03",
        "hints": [
          "",
          "先判乘法和加减的先后。",
          "20×5=100。",
          "110－100=10，再加25。",
          "正确结果35；这是新题，不能沿用前题中间数。"
        ],
        "view": {
          "title": "换一道教材找错题，独立完成",
          "prompt": "110－20×5＋25 的正确结果是多少？",
          "choices": [
            [
              "35",
              "35"
            ],
            [
              "2700",
              "2700"
            ],
            [
              "115",
              "115"
            ]
          ]
        },
        "transitions": [
          {
            "when": "35",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      }
    }
  },
  "u5.code.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u5.code.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u5",
    "nodeId": "code",
    "initialStep": "diagnose",
    "labels": {
      "badge": "信息编码正式课",
      "title": "数字编码",
      "description": "编码里的数字按字段承载信息；先按规则分段，再解释每段含义，不把编码当数量大小。"
    },
    "objectives": {
      "meaning": "O-U5-CODE-01",
      "segment": "O-U5-CODE-02",
      "fixedWidth": "O-U5-CODE-03",
      "transfer": "O-U5-CODE-04"
    },
    "misconceptions": {
      "magnitude": "M-U5-CODE-01",
      "segment": "M-U5-CODE-02",
      "leadingZero": "M-U5-CODE-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "82-85",
      "sourceNote": "教材数字编码专题明确身份证字段承载地址、出生日期、顺序、校验等信息，并给出学号方案：202603321表示2026年入学、三班、32号、男生；末位1男2女。教材强调设计编码要表达年级/班级、性别、入学年份等信息。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U5-CODE-01",
        "hints": [
          "",
          "先看教材给出的编码规则。",
          "同一个数字在不同字段含义不同。",
          "末位是性别字段。",
          "规则规定1表示男生，2表示女生。"
        ],
        "view": {
          "title": "编码里的数字首先是“信息”，不是“大小”",
          "prompt": "学号202603321按教材规则表示2026年入学、三班、32号、男生。末位的1表示什么？",
          "choices": [
            [
              "male",
              "男生"
            ],
            [
              "one",
              "数量1"
            ],
            [
              "rank",
              "第1名"
            ]
          ],
          "renderer": "codeSegments",
          "rendererArgs": {
            "label": "教材学号编码",
            "segments": [
              {
                "value": "2026",
                "label": "入学年份"
              },
              {
                "value": "03",
                "label": "班级"
              },
              {
                "value": "32",
                "label": "顺序号"
              },
              {
                "value": "1",
                "label": "性别"
              }
            ],
            "rawValue": "202603321"
          }
        },
        "transitions": [
          {
            "when": "male",
            "to": "segment",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "one",
            "to": "repairMeaning",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-CODE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairMeaning": {
        "objectiveId": "O-U5-CODE-01",
        "hints": [
          "",
          "编码不是一个整体数量。",
          "要先分字段。",
          "字段含义来自约定规则。",
          "同样的1放在别的字段可能代表完全不同的信息。"
        ],
        "view": {
          "title": "编码不是拿来做数量运算",
          "prompt": "为什么末位1不能解释成“有1个学生”？",
          "choices": [
            [
              "field",
              "因为它处在性别字段，含义由编码规则规定"
            ],
            [
              "small",
              "因为1太小"
            ]
          ]
        },
        "transitions": [
          {
            "when": "field",
            "to": "segment",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-CODE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "code-fields-carry-meaning"
              }
            ]
          }
        ]
      },
      "segment": {
        "objectiveId": "O-U5-CODE-02",
        "hints": [
          "",
          "根据字段规则，而不是随意切。",
          "入学年份4位。",
          "班级2位、顺序号2位、性别1位。",
          "所以2026｜03｜32｜1。"
        ],
        "view": {
          "title": "先分段，才能解释",
          "prompt": "202603321最合理的分段是哪一个？",
          "choices": [
            [
              "correct",
              "2026｜03｜32｜1"
            ],
            [
              "digits",
              "2｜0｜2｜6｜0｜3｜3｜2｜1"
            ],
            [
              "wrong",
              "202｜60｜33｜21"
            ]
          ],
          "renderer": "codeSegments",
          "rendererArgs": {
            "label": "按字段规则分段",
            "segments": [
              {
                "value": "2026",
                "label": "入学年份"
              },
              {
                "value": "03",
                "label": "班级"
              },
              {
                "value": "32",
                "label": "顺序号"
              },
              {
                "value": "1",
                "label": "性别"
              }
            ],
            "rawValue": "202603321"
          }
        },
        "transitions": [
          {
            "when": "correct",
            "to": "fixedWidth",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "wrong",
            "to": "repairSegment",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-CODE-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairSegment": {
        "objectiveId": "O-U5-CODE-02",
        "hints": [
          "",
          "看例子202603321。",
          "三班写成03。",
          "这说明班级字段占2位。",
          "固定字段长度有利于稳定解析。"
        ],
        "view": {
          "title": "分段由规则决定，不由“看起来顺眼”决定",
          "prompt": "教材方案里班级字段固定占几位？",
          "choices": [
            [
              "two",
              "2位"
            ],
            [
              "one",
              "1位"
            ],
            [
              "three",
              "3位"
            ]
          ]
        },
        "transitions": [
          {
            "when": "two",
            "to": "fixedWidth",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-CODE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "code-segment-rules"
              }
            ]
          }
        ]
      },
      "fixedWidth": {
        "objectiveId": "O-U5-CODE-03",
        "hints": [
          "",
          "03和3表示同一个班级号。",
          "前面的0不增加数量。",
          "它在维持字段宽度。",
          "固定宽度让机器和人都能稳定找到字段边界。"
        ],
        "view": {
          "title": "为什么“三班”写03而不是3",
          "prompt": "把三班编码为03，最重要的作用是什么？",
          "choices": [
            [
              "width",
              "保持字段长度固定，避免和后面的顺序号混在一起"
            ],
            [
              "bigger",
              "让数字变大"
            ],
            [
              "pretty",
              "只是看起来整齐"
            ]
          ]
        },
        "transitions": [
          {
            "when": "width",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "bigger",
            "to": "repairZero",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-CODE-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairZero": {
        "objectiveId": "O-U5-CODE-03",
        "hints": [
          "",
          "教材还问“为什么2月用02表示”。",
          "这类0常用于固定格式。",
          "它不代表数量变大。",
          "它帮助字段保持统一长度。"
        ],
        "view": {
          "title": "这里的0是格式信息",
          "prompt": "03中的0最准确的作用是什么？",
          "choices": [
            [
              "padding",
              "占位，保证班级字段始终两位"
            ],
            [
              "ten",
              "表示十个班"
            ]
          ]
        },
        "transitions": [
          {
            "when": "padding",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-CODE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "leading-zero-fixed-width"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U5-CODE-03",
        "hints": [
          "",
          "编码先有规则，再有数字串。",
          "字段位置决定语义。",
          "同一数字在不同字段可有不同含义。",
          "固定宽度和前导0用于可靠解析。"
        ],
        "view": {
          "title": "把编码方法总结成可迁移规则",
          "prompt": "哪组步骤最可靠？",
          "choices": [
            [
              "rule",
              "先知道编码规则→按字段分段→解释每段含义→必要时用前导0保持固定宽度"
            ],
            [
              "number",
              "把整串数字当成一个大数比较大小"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "segment-code-by-schema"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U5-CODE-02",
        "hints": [
          "",
          "按4｜2｜2｜1分段。",
          "2027｜04｜30｜2。",
          "末位2表示女生。",
          "所以是2027年入学、四班、30号、女生。"
        ],
        "view": {
          "title": "教材原题：独立解码",
          "prompt": "按同样规则，202704302表示哪一位学生？",
          "choices": [
            [
              "correct",
              "2027年入学、四班、30号、女生"
            ],
            [
              "male",
              "2027年入学、四班、30号、男生"
            ],
            [
              "class",
              "2027年入学、43班、02号"
            ]
          ],
          "renderer": "codeSegments",
          "rendererArgs": {
            "label": "独立解码",
            "segments": [
              {
                "value": "2027",
                "label": "入学年份"
              },
              {
                "value": "04",
                "label": "班级"
              },
              {
                "value": "30",
                "label": "顺序号"
              },
              {
                "value": "2",
                "label": "性别"
              }
            ],
            "rawValue": "202704302"
          }
        },
        "transitions": [
          {
            "when": "correct",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U5-CODE-04",
        "hints": [
          "",
          "年份4位：2028。",
          "班级2位：05。",
          "顺序号2位：07。",
          "男生末位1，所以2028｜05｜07｜1。"
        ],
        "view": {
          "title": "反过来设计一条编码",
          "prompt": "按同样规则，为“2028年入学、五班、7号、男生”编码，哪一个正确？",
          "choices": [
            [
              "correct",
              "202805071"
            ],
            [
              "short",
              "2028571"
            ],
            [
              "female",
              "202805072"
            ]
          ],
          "renderer": "codeSegments",
          "rendererArgs": {
            "label": "按规则设计编码",
            "segments": [
              {
                "value": "2028",
                "label": "入学年份"
              },
              {
                "value": "05",
                "label": "班级"
              },
              {
                "value": "07",
                "label": "顺序号"
              },
              {
                "value": "1",
                "label": "性别"
              }
            ],
            "rawValue": "202805071"
          }
        },
        "transitions": [
          {
            "when": "correct",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U5-CODE-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你已经会“先规则、再字段、后解释”",
          "prompt": "数字编码不是把数字拼得越大越好，而是让每个字段按规则稳定表达信息，并能被准确解码。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u5.compare.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u5.compare.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u5",
    "nodeId": "compare",
    "initialStep": "diagnose",
    "labels": {
      "badge": "概念表征正式课",
      "title": "比较与改写",
      "description": "先比较数的大小，再区分“等值改写”和“近似表示”的符号语义。"
    },
    "objectives": {
      "compare": "O-U5-COMPARE-01",
      "rewrite": "O-U5-COMPARE-02",
      "approx": "O-U5-COMPARE-03",
      "transfer": "O-U5-COMPARE-04"
    },
    "misconceptions": {
      "digit": "M-U5-COMPARE-01",
      "symbol": "M-U5-COMPARE-02",
      "rewriteApprox": "M-U5-COMPARE-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "78-79,84-88",
      "sourceNote": "教材79页要求大数比较；78页要求整万/整亿数改写成以万或亿为单位；84-88页复习明确区分把多位数改写成万/亿单位与用万/亿作单位写近似数，并使用约等号表示近似。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U5-COMPARE-01",
        "hints": [
          "",
          "先数位数。",
          "九位数一定大于八位数。",
          "151900000是九位数，99500000是八位数。",
          "所以前者更大。"
        ],
        "view": {
          "title": "大数比较先看哪里",
          "prompt": "151900000和99500000，哪个更大？",
          "choices": [
            [
              "first",
              "151900000更大"
            ],
            [
              "second",
              "99500000更大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "first",
            "to": "sameDigits",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "second",
            "to": "repairDigits",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-COMPARE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairDigits": {
        "objectiveId": "O-U5-COMPARE-01",
        "hints": [
          "",
          "正整数位数越多通常数量级越大。",
          "先判断是否同位数。",
          "不同位数可直接比较。",
          "位数相同才从最高位逐位比。"
        ],
        "view": {
          "title": "位数不同，不必逐位纠缠",
          "prompt": "比较正整数大小，位数不同时先看什么？",
          "choices": [
            [
              "digits",
              "位数"
            ],
            [
              "last",
              "个位"
            ]
          ]
        },
        "transitions": [
          {
            "when": "digits",
            "to": "sameDigits",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-COMPARE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "compare-digit-count"
              }
            ]
          }
        ]
      },
      "sameDigits": {
        "objectiveId": "O-U5-COMPARE-01",
        "hints": [
          "",
          "两数位数相同。",
          "从最高位开始。",
          "前两位相同，到千位比较2和3。",
          "3更大，所以783400更大。"
        ],
        "view": {
          "title": "同位数再逐位比",
          "prompt": "782600和783400，哪个更大？",
          "choices": [
            [
              "second",
              "783400更大"
            ],
            [
              "first",
              "782600更大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "second",
            "to": "rewrite",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "rewrite": {
        "objectiveId": "O-U5-COMPARE-02",
        "hints": [
          "",
          "7500000正好包含750个万。",
          "没有舍去任何尾数。",
          "数的大小没有改变。",
          "所以用等号：7500000=750万。"
        ],
        "view": {
          "title": "改写不是近似",
          "prompt": "7500000改写成以“万”为单位的数，正确的是哪一个？",
          "choices": [
            [
              "equal",
              "7500000=750万"
            ],
            [
              "approx",
              "7500000≈750万"
            ]
          ]
        },
        "transitions": [
          {
            "when": "equal",
            "to": "approx",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "approx",
            "to": "repairSymbol",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-COMPARE-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairSymbol": {
        "objectiveId": "O-U5-COMPARE-02",
        "hints": [
          "",
          "问有没有舍去信息。",
          "精确改写没有改变大小。",
          "等值关系用“=”。",
          "近似才用“≈”。"
        ],
        "view": {
          "title": "只修“＝和≈”",
          "prompt": "如果只是换一种单位写法、数值完全相等，用什么符号？",
          "choices": [
            [
              "eq",
              "="
            ],
            [
              "approx",
              "≈"
            ]
          ]
        },
        "transitions": [
          {
            "when": "eq",
            "to": "approx",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-COMPARE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "rewrite-equality-symbol"
              }
            ]
          }
        ]
      },
      "approx": {
        "objectiveId": "O-U5-COMPARE-03",
        "hints": [
          "",
          "这里明确“省略尾数”。",
          "省略后大小通常不再完全相等。",
          "近似关系用约等号。",
          "所以写≈，不是=。"
        ],
        "view": {
          "title": "近似数才用约等号",
          "prompt": "21893095省略“万”后面的尾数，写成以“万”为单位的近似数，哪种符号正确？",
          "choices": [
            [
              "approx",
              "21893095≈2189万"
            ],
            [
              "equal",
              "21893095=2189万"
            ]
          ]
        },
        "transitions": [
          {
            "when": "approx",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "equal",
            "to": "repairApprox",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-COMPARE-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairApprox": {
        "objectiveId": "O-U5-COMPARE-03",
        "hints": [
          "",
          "把原数和2189万换回完整数比较。",
          "2189万=21890000。",
          "它和21893095不完全相等。",
          "所以只能用≈。"
        ],
        "view": {
          "title": "改写和近似不是一回事",
          "prompt": "“省略万后面的尾数”会不会丢掉原数的一部分信息？",
          "choices": [
            [
              "yes",
              "会，所以是近似"
            ],
            [
              "no",
              "不会，仍完全相等"
            ]
          ]
        },
        "transitions": [
          {
            "when": "yes",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-COMPARE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "rewrite-vs-approx"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U5-COMPARE-03",
        "hints": [
          "",
          "三个动作解决三种不同问题。",
          "比较问谁大谁小。",
          "改写保持大小不变。",
          "近似允许舍去部分信息。"
        ],
        "view": {
          "title": "把三条规则分开",
          "prompt": "哪组总结正确？",
          "choices": [
            [
              "rule",
              "比较：先位数再逐位；精确改写用=；近似表示用≈"
            ],
            [
              "mix",
              "改写和近似都用≈"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "compare-rewrite-approx"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U5-COMPARE-02",
        "hints": [
          "",
          "1亿=100000000。",
          "28亿=2800000000。",
          "两个数完全相等。",
          "所以用=。"
        ],
        "view": {
          "title": "换一道教材式混合判断",
          "prompt": "2800000000与28亿的关系应该写什么？",
          "choices": [
            [
              "eq",
              "="
            ],
            [
              "gt",
              ">"
            ],
            [
              "approx",
              "≈"
            ]
          ]
        },
        "transitions": [
          {
            "when": "eq",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U5-COMPARE-04",
        "hints": [
          "",
          "先统一写法。",
          "56万=560000。",
          "560000>559950。",
          "所以56万更大。"
        ],
        "view": {
          "title": "迁移：比较中混入单位改写",
          "prompt": "56万和559950，哪个更大？",
          "choices": [
            [
              "first",
              "56万更大"
            ],
            [
              "second",
              "559950更大"
            ],
            [
              "same",
              "一样大"
            ]
          ]
        },
        "transitions": [
          {
            "when": "first",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U5-COMPARE-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "比较、改写、近似已经分清了",
          "prompt": "先统一单位和数量级，再比较；精确改写保持数值不变用“=”，舍去尾数得到近似数用“≈”。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u5.place.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u5.place.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u5",
    "nodeId": "place",
    "initialStep": "diagnose",
    "labels": {
      "badge": "数位结构正式课",
      "title": "数位、数级与十进制",
      "description": "同一个数字因数位不同表示不同数量；相邻计数单位满十进一，每四位组成一级。"
    },
    "objectives": {
      "position": "O-U5-PLACE-01",
      "unit": "O-U5-PLACE-02",
      "group": "O-U5-PLACE-03",
      "transfer": "O-U5-PLACE-04"
    },
    "misconceptions": {
      "digitEqualsValue": "M-U5-PLACE-01",
      "groupThree": "M-U5-PLACE-02",
      "rateHundred": "M-U5-PLACE-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "69-71,77-78",
      "sourceNote": "教材用10000建立万位，再扩展万、十万、百万、千万；明确从右起每四个数位一级，并在十进制计数法中说明每相邻两个计数单位进率都是10。教材还强调数字写在不同数位上表示不同数量。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U5-PLACE-01",
        "hints": [
          "",
          "先确定3所在的数位。",
          "305000里3在十万位。",
          "十万位上的3表示3个十万。",
          "数字本身相同，数位决定它代表多少。"
        ],
        "view": {
          "title": "同一个数字，位置一变，数量就变",
          "prompt": "数305000里，数字3表示什么？",
          "choices": [
            [
              "hundredThousand",
              "3个十万"
            ],
            [
              "three",
              "就是3"
            ],
            [
              "million",
              "3个百万"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "305000",
            "label": "305000按四位一级分组，数字3位于十万位"
          }
        },
        "transitions": [
          {
            "when": "hundredThousand",
            "to": "unitRate",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "three",
            "to": "repairPosition",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-PLACE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairPosition": {
        "objectiveId": "O-U5-PLACE-01",
        "hints": [
          "",
          "数字符号没有变。",
          "但所在计数单位变了。",
          "个位5是5个一，万位5是5个万。",
          "所以数量不同。"
        ],
        "view": {
          "title": "数字和它表示的数量不是一回事",
          "prompt": "数字5放在个位和万位，表示的数量一样吗？",
          "choices": [
            [
              "different",
              "不一样，数位不同"
            ],
            [
              "same",
              "一样，都是5"
            ]
          ]
        },
        "transitions": [
          {
            "when": "different",
            "to": "unitRate",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-PLACE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "digit-position-value"
              }
            ]
          }
        ]
      },
      "unitRate": {
        "objectiveId": "O-U5-PLACE-02",
        "hints": [
          "",
          "相邻计数单位满十进一。",
          "10个一万组成1个十万。",
          "不是跨两级进100。",
          "所以是1十万。"
        ],
        "view": {
          "title": "相邻计数单位为什么叫“十进制”",
          "prompt": "10个一万等于多少？",
          "choices": [
            [
              "tenThousand",
              "10万"
            ],
            [
              "hundredThousand",
              "1十万"
            ],
            [
              "million",
              "1百万"
            ]
          ]
        },
        "transitions": [
          {
            "when": "hundredThousand",
            "to": "groups",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "million",
            "to": "repairRate",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-PLACE-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairRate": {
        "objectiveId": "O-U5-PLACE-02",
        "hints": [
          "",
          "看“相邻”二字。",
          "每向左一位，计数单位扩大10倍。",
          "万→十万只移动一位。",
          "所以进率10。"
        ],
        "view": {
          "title": "相邻单位只跨一位",
          "prompt": "从万到十万，进率是多少？",
          "choices": [
            [
              "10",
              "10"
            ],
            [
              "100",
              "100"
            ]
          ]
        },
        "transitions": [
          {
            "when": "10",
            "to": "groups",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-PLACE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "decimal-adjacent-unit-rate"
              }
            ]
          }
        ]
      },
      "groups": {
        "objectiveId": "O-U5-PLACE-03",
        "hints": [
          "",
          "个级包含个、十、百、千。",
          "正好四位。",
          "万级也有万、十万、百万、千万四位。",
          "所以每四位一级。"
        ],
        "view": {
          "title": "数级是为了组织大数结构",
          "prompt": "按照我国计数习惯，从右边起每几个数位是一级？",
          "choices": [
            [
              "four",
              "4个"
            ],
            [
              "three",
              "3个"
            ],
            [
              "five",
              "5个"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "123456789",
            "label": "123456789按四位一级分为亿级、万级、个级"
          }
        },
        "transitions": [
          {
            "when": "four",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "three",
            "to": "repairGroup",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-PLACE-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairGroup": {
        "objectiveId": "O-U5-PLACE-03",
        "hints": [
          "",
          "列出个级。",
          "个位、十位、百位、千位。",
          "一共4位。",
          "因此从右起四位一级。"
        ],
        "view": {
          "title": "不要把“三位一节”习惯带进来",
          "prompt": "个级一共有几个数位？",
          "choices": [
            [
              "four",
              "4个"
            ],
            [
              "three",
              "3个"
            ]
          ]
        },
        "transitions": [
          {
            "when": "four",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-PLACE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "four-digits-per-group"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U5-PLACE-03",
        "hints": [
          "",
          "四个概念要分清。",
          "数字是符号。",
          "数位决定它对应哪个计数单位。",
          "相邻单位十进制，每四位组成数级。"
        ],
        "view": {
          "title": "把数位、计数单位和数级连起来",
          "prompt": "哪句最准确？",
          "choices": [
            [
              "rule",
              "数字所在位置叫数位；对应的个、十、百、千、万等是计数单位；相邻单位进率10；每四位一级"
            ],
            [
              "wrong",
              "每个数字自己决定大小，位置不重要"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "place-unit-group-decimal"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U5-PLACE-01",
        "hints": [
          "",
          "从右边数位。",
          "47050000中7在百万位。",
          "百万位上的7表示7个百万。",
          "不要只看数字7本身。"
        ],
        "view": {
          "title": "换一个大数独立判断",
          "prompt": "47050000里的7表示什么？",
          "choices": [
            [
              "sevenMillion",
              "7个百万"
            ],
            [
              "sevenHundredThousand",
              "7个十万"
            ],
            [
              "sevenTenMillion",
              "7个千万"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "47050000",
            "label": "47050000按四位一级分组，数字7位于百万位"
          }
        },
        "transitions": [
          {
            "when": "sevenMillion",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U5-PLACE-04",
        "hints": [
          "",
          "亿和千万是相邻计数单位。",
          "相邻单位进率10。",
          "1亿=10千万。",
          "所以有10个千万。"
        ],
        "view": {
          "title": "迁移到相邻单位关系",
          "prompt": "1亿里面有多少个千万？",
          "choices": [
            [
              "10",
              "10个"
            ],
            [
              "100",
              "100个"
            ],
            [
              "4",
              "4个"
            ]
          ]
        },
        "transitions": [
          {
            "when": "10",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U5-PLACE-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你已经把数字、位置和数量连起来了",
          "prompt": "大数结构靠数位组织：同一数字因位置不同表示不同数量；相邻计数单位十进一；从右起每四位组成一级。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u5.read.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u5.read.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u5",
    "nodeId": "read",
    "initialStep": "diagnose",
    "labels": {
      "badge": "数位表征正式课",
      "title": "读数、写数与零",
      "description": "先按“四位一级”分级，再判断每一级里的零是否需要读出。"
    },
    "objectives": {
      "group": "O-U5-READ-01",
      "zero": "O-U5-READ-02",
      "write": "O-U5-READ-03",
      "transfer": "O-U5-READ-04"
    },
    "misconceptions": {
      "digitByDigit": "M-U5-READ-01",
      "allZeros": "M-U5-READ-02",
      "omitZero": "M-U5-READ-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "71-75,86-88",
      "sourceNote": "教材明确“从右边起，每四个数位是一级”；读数时每级末尾不管有几个0都不读，其他数位有一个0或连续几个0只读一个零；复习继续要求按数级理解、读写并处理零。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U5-READ-01",
        "hints": [
          "",
          "从右边开始。",
          "每四位是一级。",
          "右边四位5239是个级。",
          "左边四位5239是万级。"
        ],
        "view": {
          "title": "先分级，再读数",
          "prompt": "52395239 按我国计数习惯应该怎样分级？",
          "choices": [
            [
              "group",
              "5239｜5239"
            ],
            [
              "three",
              "52｜395｜239"
            ],
            [
              "single",
              "每一位都单独读"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "52395239",
            "label": "52395239按四位一级分成万级5239和个级5239"
          }
        },
        "transitions": [
          {
            "when": "group",
            "to": "zeroRule",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "three",
            "to": "repairGroup",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-READ-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairGroup": {
        "objectiveId": "O-U5-READ-01",
        "hints": [
          "",
          "看整数数位顺序表。",
          "个级有个、十、百、千四位。",
          "万级也有四位。",
          "所以每四位一级。"
        ],
        "view": {
          "title": "不是三位一节，而是四位一级",
          "prompt": "从右边起，一个数级包含几个数位？",
          "choices": [
            [
              "four",
              "4个"
            ],
            [
              "three",
              "3个"
            ]
          ]
        },
        "transitions": [
          {
            "when": "four",
            "to": "zeroRule",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-READ-01"
              },
              {
                "type": "scheduleReview",
                "reason": "four-digits-per-group"
              }
            ]
          }
        ]
      },
      "zeroRule": {
        "objectiveId": "O-U5-READ-02",
        "hints": [
          "",
          "先分成600｜4000。",
          "万级读600，添“万”。",
          "个级4000读四千，级末尾的0不读。",
          "所以六百万四千。"
        ],
        "view": {
          "title": "零不是“见一个读一个”",
          "prompt": "6004000 应该怎样读？",
          "choices": [
            [
              "correct",
              "六百万四千"
            ],
            [
              "all",
              "六百万零零四千零零零"
            ],
            [
              "one",
              "六百零四万"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "6004000",
            "label": "6004000按万级和个级分组，级末尾的零不读"
          }
        },
        "transitions": [
          {
            "when": "correct",
            "to": "middleZero",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "all",
            "to": "repairZero",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-READ-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairZero": {
        "objectiveId": "O-U5-READ-02",
        "hints": [
          "",
          "这些0都在该级末尾。",
          "教材规则：每级末尾不管有几个0，都不读。",
          "4000读四千。",
          "因此6004000读六百万四千。"
        ],
        "view": {
          "title": "级末尾的0为什么不读",
          "prompt": "4000读“四千”时，末尾三个0怎样处理？",
          "choices": [
            [
              "silent",
              "都不读"
            ],
            [
              "zero",
              "都读零"
            ]
          ]
        },
        "transitions": [
          {
            "when": "silent",
            "to": "middleZero",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-READ-02"
              },
              {
                "type": "scheduleReview",
                "reason": "group-trailing-zero-reading"
              }
            ]
          }
        ]
      },
      "middleZero": {
        "objectiveId": "O-U5-READ-02",
        "hints": [
          "",
          "分成3080｜0007。",
          "万级3080读三千零八十万。",
          "个级前面连续有0直到7，需要读一个零。",
          "所以三千零八十万零七。"
        ],
        "view": {
          "title": "中间的连续零只读一个",
          "prompt": "30800007 读作哪一个？",
          "choices": [
            [
              "correct",
              "三千零八十万零七"
            ],
            [
              "none",
              "三千八十万七"
            ],
            [
              "many",
              "三千零零八十万零零零七"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "30800007",
            "label": "30800007按万级3080和个级0007分组，中间连续零只读一个"
          }
        },
        "transitions": [
          {
            "when": "correct",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "none",
            "to": "repairOmit",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-READ-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairOmit": {
        "objectiveId": "O-U5-READ-02",
        "hints": [
          "",
          "读数要保留位值结构。",
          "个级是0007。",
          "从万级过渡到个位7时，中间缺位需要一个“零”。",
          "连续几个0只读一个零。"
        ],
        "view": {
          "title": "为什么这里不能完全不读零",
          "prompt": "如果不读零，“三千八十万七”会让7听起来落在哪个数位附近？",
          "choices": [
            [
              "wrong",
              "会丢失中间数位信息"
            ],
            [
              "fine",
              "完全没有影响"
            ]
          ]
        },
        "transitions": [
          {
            "when": "wrong",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-READ-03"
              },
              {
                "type": "scheduleReview",
                "reason": "middle-zero-reading"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U5-READ-03",
        "hints": [
          "",
          "先结构后语言。",
          "分级决定“万、亿”等级名称。",
          "每级内部按四位处理。",
          "最后按零的规则连接各级。"
        ],
        "view": {
          "title": "现在总结读写步骤",
          "prompt": "哪组步骤最可靠？",
          "choices": [
            [
              "rule",
              "先四位一级分级；每级按个级读法；级末尾0不读，级中连续0只读一个；再添万/亿"
            ],
            [
              "digit",
              "从最高位把每个数字逐个念出来"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "four-digit-groups-zero-reading"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U5-READ-03",
        "hints": [
          "",
          "分成400｜3000｜0000。",
          "亿级400读四百亿。",
          "万级3000读三千万。",
          "个级全是0且在末级，不再读。"
        ],
        "view": {
          "title": "换一道教材式读数独立做",
          "prompt": "40030000000 应该读作哪一个？",
          "choices": [
            [
              "correct",
              "四百亿三千万"
            ],
            [
              "zero",
              "四百亿零三千万"
            ],
            [
              "four",
              "四百亿三百万"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "40030000000",
            "label": "40030000000按亿级、万级、个级分组"
          }
        },
        "transitions": [
          {
            "when": "correct",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U5-READ-04",
        "hints": [
          "",
          "先按“万”分成两级。",
          "万级是六千零四，即6004。",
          "个级是二千，即2000。",
          "合起来6004｜2000=60042000。"
        ],
        "view": {
          "title": "迁移到写数",
          "prompt": "“六千零四万二千”写成数字是哪一个？",
          "choices": [
            [
              "correct",
              "60042000"
            ],
            [
              "wrong",
              "6042000"
            ],
            [
              "zero",
              "600402000"
            ]
          ]
        },
        "transitions": [
          {
            "when": "correct",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U5-READ-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你已经会“先分级，再处理零”",
          "prompt": "大数读写不是逐位念数字：先四位一级分组，再按每级的位值读写，最后用零的规则连接各级。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u5.round.v2": {
    "schemaVersion": "0.2",
    "flowId": "u5.round.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u5",
    "nodeId": "round",
    "initialStep": "locate",
    "steps": {
      "locate": {
        "objectiveId": "O-U5-ROUND-01",
        "hints": [
          "",
          "先别背“四舍五入”，先看它在两个整万之间的位置。",
          "794900在790000和800000之间。",
          "比较到两端的距离。",
          "794900离790000是4900，离800000是5100，所以更近790000。"
        ],
        "transitions": [
          {
            "when": "left",
            "to": "boundary",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "right",
            "to": "repairNearest",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-ROUND-01",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "先找位置，不急着背口诀",
          "prompt": "794900在79万和80万之间。它离哪一个整万更近？",
          "choices": [
            [
              "left",
              "79万"
            ],
            [
              "right",
              "80万"
            ],
            [
              "same",
              "一样近"
            ]
          ],
          "visuals": [
            {
              "renderer": "numberLine",
              "args": {
                "min": 790000,
                "max": 800000,
                "point": 794900,
                "boundaries": [
                  790000,
                  795000,
                  800000
                ],
                "labels": [
                  "79万",
                  "795000",
                  "80万"
                ]
              }
            },
            {
              "renderer": "nearest",
              "args": {
                "left": 790000,
                "right": 800000,
                "point": 794900
              }
            }
          ]
        }
      },
      "repairNearest": {
        "objectiveId": "O-U5-ROUND-01",
        "hints": [
          "",
          "不要只盯着千位上的9。",
          "794900到790000只差4900。",
          "到800000还差5100。",
          "4900<5100，所以它更接近79万。"
        ],
        "transitions": [
          {
            "when": "left",
            "to": "boundary",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-ROUND-01"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U5-ROUND-01"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "rounding_nearest"
              }
            ]
          }
        ],
        "view": {
          "title": "只修“离谁更近”",
          "prompt": "比较4900和5100，794900更接近哪一端？",
          "choices": [
            [
              "left",
              "790000"
            ],
            [
              "right",
              "800000"
            ]
          ],
          "renderer": "nearest",
          "rendererArgs": {
            "left": 790000,
            "right": 800000,
            "point": 794900
          }
        }
      },
      "boundary": {
        "objectiveId": "O-U5-ROUND-02",
        "hints": [
          "",
          "现在把点移动到两个整万正中间。",
          "790000和800000的中点是795000。",
          "四舍五入时，中点本身进入较大的那一段。",
          "因此794999还约79万，但795000开始约80万。"
        ],
        "transitions": [
          {
            "when": "split",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "both79",
            "to": "repairBoundary",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-ROUND-02",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "真正关键的是分界点",
          "prompt": "794999和795000四舍五入到万位，分别应该约成？",
          "choices": [
            [
              "split",
              "79万；80万"
            ],
            [
              "both79",
              "79万；79万"
            ],
            [
              "both80",
              "80万；80万"
            ]
          ],
          "renderer": "numberLine",
          "rendererArgs": {
            "min": 790000,
            "max": 800000,
            "point": 795000,
            "boundaries": [
              790000,
              795000,
              800000
            ],
            "labels": [
              "79万",
              "分界795000",
              "80万"
            ]
          }
        }
      },
      "repairBoundary": {
        "objectiveId": "O-U5-ROUND-02",
        "hints": [
          "",
          "分界点795000不是留在左边。",
          "它到790000和800000距离相同。",
          "四舍五入规定“5入”，中点归到较大整万。",
          "所以795000约80万；794999仍在左侧。"
        ],
        "transitions": [
          {
            "when": "right",
            "to": "formalize",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-ROUND-02"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U5-ROUND-02"
                }
              }
            ]
          }
        ],
        "view": {
          "title": "分界点本身归哪边？",
          "prompt": "795000恰好在正中间。按四舍五入，它应该归到？",
          "choices": [
            [
              "right",
              "80万"
            ],
            [
              "left",
              "79万"
            ]
          ],
          "renderer": "numberLine",
          "rendererArgs": {
            "min": 790000,
            "max": 800000,
            "point": 795000,
            "boundaries": [
              795000
            ],
            "labels": [
              "正中间"
            ]
          }
        }
      },
      "formalize": {
        "objectiveId": "O-U5-ROUND-03",
        "hints": [
          "",
          "现在再把数轴规律压缩成数位规则。",
          "保留万位时，看千位。",
          "千位0～4更靠近当前万；5～9进入下一万。",
          "保留万位看千位：小于5舍去，等于或大于5进一。"
        ],
        "view": {
          "title": "现在才总结“四舍五入”",
          "prompt": "保留到万位时，哪一句最准确？",
          "choices": [
            [
              "rule",
              "看千位：0～4舍去，5～9向万位进1"
            ],
            [
              "wrong",
              "只要后面出现9就一定进1"
            ],
            [
              "unit",
              "看百位决定万位"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "unitCheck",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "round-to-ten-thousand"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "unitCheck": {
        "objectiveId": "O-U5-ROUND-03",
        "hints": [
          "",
          "注意“823万”代表8230000，不是823600。",
          "原数只有六位，约到万位后应是“几十万”量级。",
          "823600÷10000约82.36。",
          "所以823600≈82万，而不是823万。"
        ],
        "view": {
          "title": "规则会了，还要检查数量级",
          "prompt": "823600四舍五入到万位，下面哪个结果合理？",
          "choices": [
            [
              "82",
              "82万"
            ],
            [
              "823",
              "823万"
            ],
            [
              "8",
              "8万"
            ]
          ]
        },
        "transitions": [
          {
            "when": "82",
            "to": "reverse",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "823",
            "to": "repairUnit",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-ROUND-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairUnit": {
        "objectiveId": "O-U5-ROUND-03",
        "hints": [
          "",
          "先估一估原数有多少个万。",
          "823600大约是82个万多一点。",
          "823万等于8230000，明显比原数大十倍。",
          "因此答案应是82万。"
        ],
        "view": {
          "title": "先看数量级，再看尾数",
          "prompt": "823600大约有多少个“万”？",
          "choices": [
            [
              "82",
              "约82个万"
            ],
            [
              "823",
              "约823个万"
            ]
          ]
        },
        "transitions": [
          {
            "when": "82",
            "to": "reverse",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-ROUND-03"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U5-ROUND-03"
                }
              }
            ]
          }
        ]
      },
      "reverse": {
        "objectiveId": "O-U5-ROUND-04",
        "hints": [
          "",
          "从“约79万”向左右各找半个万。",
          "左分界是785000，右分界是795000。",
          "左边界包含，因为785000会五入到79万。",
          "右边界不包含，因为795000会五入到80万。"
        ],
        "transitions": [
          {
            "when": "interval",
            "to": "transfer",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "closed",
            "to": "repairReverse",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-ROUND-04",
                "confidence": "high"
              }
            ]
          }
        ],
        "view": {
          "title": "反过来：哪些数会约成79万？",
          "prompt": "四舍五入到万位得到79万的整数范围是哪一个？",
          "choices": [
            [
              "interval",
              "785000≤n<795000"
            ],
            [
              "closed",
              "785000≤n≤795000"
            ],
            [
              "wide",
              "790000≤n<800000"
            ]
          ],
          "renderer": "interval",
          "rendererArgs": {
            "low": 785000,
            "high": 795000,
            "target": "79万"
          }
        }
      },
      "repairReverse": {
        "objectiveId": "O-U5-ROUND-04",
        "hints": [
          "",
          "检查右端点795000自己会约成多少。",
          "795000已经约80万。",
          "所以右端点不能包含。",
          "正确区间是785000≤n<795000。"
        ],
        "transitions": [
          {
            "when": "no",
            "to": "transfer",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-ROUND-04"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U5-ROUND-04"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "reverse_rounding_interval"
              }
            ]
          }
        ],
        "view": {
          "title": "只检查两个边界点",
          "prompt": "795000会四舍五入成79万吗？",
          "choices": [
            [
              "no",
              "不会，它约80万"
            ],
            [
              "yes",
              "会，它仍约79万"
            ]
          ],
          "renderer": "interval",
          "rendererArgs": {
            "low": 785000,
            "high": 795000,
            "target": "79万"
          }
        }
      },
      "transfer": {
        "objectiveId": "O-U5-ROUND-04",
        "hints": [
          "",
          "用同样方法围绕8万找左右分界。",
          "8万左右各半个万：75000和85000。",
          "左端75000包含，右端85000不包含。",
          "所以75000≤n<85000；整数最大84999。"
        ],
        "transitions": [
          {
            "when": "correct",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ],
        "view": {
          "title": "迁移：反推“约8万”的完整整数范围",
          "prompt": "五位整数四舍五入到万位是8万。最小和最大分别是多少？",
          "choices": [
            [
              "correct",
              "75000和84999"
            ],
            [
              "wrong",
              "75000和85000"
            ],
            [
              "narrow",
              "80000和84999"
            ]
          ],
          "renderer": "interval",
          "rendererArgs": {
            "low": 75000,
            "high": 85000,
            "target": "8万"
          }
        }
      },
      "complete": {
        "objectiveId": "O-U5-ROUND-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "reviewOnH4": false,
        "view": {
          "title": "从口诀走到了“边界”",
          "prompt": "四舍五入不是只看某一位的机械口诀：它等价于在数轴上找最近的整万；中点是分界，左端包含、右端不包含还能反推出完整取值范围。",
          "choices": []
        },
        "transitions": []
      }
    },
    "packageVersion": "0.1.0",
    "labels": {
      "badge": "边界概念试点",
      "title": "四舍五入 · 数轴与分界",
      "description": "先看位置和距离，再抽象口诀；最后反推完整区间。"
    },
    "objectives": {
      "nearest": "O-U5-ROUND-01",
      "boundary": "O-U5-ROUND-02",
      "rule": "O-U5-ROUND-03",
      "reverse": "O-U5-ROUND-04"
    },
    "misconceptions": {
      "digitOnly": "M-U5-ROUND-01",
      "boundaryInclusive": "M-U5-ROUND-02",
      "wrongUnit": "M-U5-ROUND-03",
      "reverseInterval": "M-U5-ROUND-04"
    }
  },
  "u6.calculator.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u6.calculator.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u6",
    "nodeId": "calculator",
    "initialStep": "diagnose",
    "labels": {
      "badge": "工具使用正式课",
      "title": "计算器与输入检查",
      "description": "先理解算式和运算顺序，再输入计算器；结果要用估算、分步或逆运算检查。"
    },
    "objectives": {
      "plan": "O-U6-CALC-01",
      "input": "O-U6-CALC-02",
      "correct": "O-U6-CALC-03",
      "verify": "O-U6-CALC-04"
    },
    "misconceptions": {
      "blindInput": "M-U6-CALC-01",
      "ignoreBracket": "M-U6-CALC-02",
      "trustDisplay": "M-U6-CALC-03",
      "clearAll": "M-U6-CALC-04"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "98-99",
      "sourceNote": "教材以11800－(2099×3＋1929×2＋1549)展示计算器适用于步数多、数较大的计算，并强调有括号要先算括号内或使用带括号输入；第99页介绍CE改错键，练习同时要求“用合适的方法计算”，说明计算器不是代替审题和合理性判断。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U6-CALC-01",
        "hints": [
          "",
          "先看运算结构。",
          "外层是11800减去一个“总支出”。",
          "括号内必须先形成一个整体。",
          "所以先算括号内，再做减法。"
        ],
        "view": {
          "title": "按键前先读懂算式",
          "prompt": "11800－(2099×3＋1929×2＋1549)，如果计算器不能直接识别括号，最可靠的做法是什么？",
          "choices": [
            [
              "inside",
              "先算括号里的总支出，再用11800减去它"
            ],
            [
              "left",
              "从左到右把所有数字和符号依次按进去"
            ],
            [
              "guess",
              "先估一个结果再随便按"
            ]
          ]
        },
        "transitions": [
          {
            "when": "inside",
            "to": "bracket",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "left",
            "to": "repairBlind",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-CALC-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairBlind": {
        "objectiveId": "O-U6-CALC-01",
        "hints": [
          "",
          "问题不在按键数量。",
          "关键是输入必须代表原算式。",
          "括号改变计算整体。",
          "所以先理解关系，再输入。"
        ],
        "view": {
          "title": "计算器不会替你审题",
          "prompt": "为什么不能把题目从左到右机械输入？",
          "choices": [
            [
              "order",
              "因为必须遵守原算式的运算顺序和括号结构"
            ],
            [
              "keys",
              "因为按键太多"
            ]
          ]
        },
        "transitions": [
          {
            "when": "order",
            "to": "bracket",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-CALC-01"
              },
              {
                "type": "scheduleReview",
                "reason": "calculator-plan-before-input"
              }
            ]
          }
        ]
      },
      "bracket": {
        "objectiveId": "O-U6-CALC-02",
        "hints": [
          "",
          "括号先形成整体。",
          "41600和640先相加。",
          "得到42240。",
          "再用42240÷128。"
        ],
        "view": {
          "title": "有括号时先确定计算层级",
          "prompt": "(41600＋640)÷128，如果设备不能输入括号，第一步应算什么？",
          "choices": [
            [
              "inside",
              "41600＋640"
            ],
            [
              "divide",
              "640÷128"
            ],
            [
              "left",
              "41600÷128"
            ]
          ]
        },
        "transitions": [
          {
            "when": "inside",
            "to": "ce",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "divide",
            "to": "repairBracket",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-CALC-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairBracket": {
        "objectiveId": "O-U6-CALC-02",
        "hints": [
          "",
          "括号把这两个数绑成一个整体。",
          "整体还没算出前，不能先除128。",
          "先42240。",
          "再除128。"
        ],
        "view": {
          "title": "只修括号层级",
          "prompt": "括号里的41600＋640在整个算式里是什么？",
          "choices": [
            [
              "whole",
              "一个要先求出的整体"
            ],
            [
              "separate",
              "两个可分别和128运算的数"
            ]
          ]
        },
        "transitions": [
          {
            "when": "whole",
            "to": "ce",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-CALC-02"
              },
              {
                "type": "scheduleReview",
                "reason": "calculator-bracket-order"
              }
            ]
          }
        ]
      },
      "ce": {
        "objectiveId": "O-U6-CALC-03",
        "hints": [
          "",
          "教材专门介绍CE是为了纠正当前输入。",
          "前面的123＋不必丢掉。",
          "清掉455。",
          "改输456即可。"
        ],
        "view": {
          "title": "输错一位时不必全部重来",
          "prompt": "计算123＋456时，不小心把456按成455，教材介绍的CE键最适合做什么？",
          "choices": [
            [
              "fix",
              "清除刚输错的当前数字，再输入456"
            ],
            [
              "all",
              "把整个计算器全部复位，从123重新开始"
            ]
          ]
        },
        "transitions": [
          {
            "when": "fix",
            "to": "verify",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "all",
            "to": "repairClear",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-CALC-04",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairClear": {
        "objectiveId": "O-U6-CALC-03",
        "hints": [
          "",
          "定位错误发生在哪里。",
          "前面123＋是正确的。",
          "只清除当前错误输入。",
          "再输入456。"
        ],
        "view": {
          "title": "错误也要“局部修复”",
          "prompt": "已经正确输入123＋，错的是455。最少要重做哪一部分？",
          "choices": [
            [
              "current",
              "只重输当前的456"
            ],
            [
              "all",
              "全部从头"
            ]
          ]
        },
        "transitions": [
          {
            "when": "current",
            "to": "verify",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-CALC-04"
              },
              {
                "type": "scheduleReview",
                "reason": "calculator-correct-current-entry"
              }
            ]
          }
        ]
      },
      "verify": {
        "objectiveId": "O-U6-CALC-04",
        "hints": [
          "",
          "估算能发现输错位数或运算符。",
          "3928接近4000。",
          "4000×50约20万。",
          "196400在合理范围，而且小于20万。"
        ],
        "view": {
          "title": "屏幕有答案，也要问“合理吗”",
          "prompt": "3928元/台，买50台，预算20万元。计算器显示196400元。最好的下一步是什么？",
          "choices": [
            [
              "check",
              "用约4000×50≈200000检查数量级，判断结果合理且预算够"
            ],
            [
              "trust",
              "看到屏幕就直接相信"
            ],
            [
              "recalc",
              "不看题意再按一遍相同按键"
            ]
          ]
        },
        "transitions": [
          {
            "when": "check",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "trust",
            "to": "repairTrust",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-CALC-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairTrust": {
        "objectiveId": "O-U6-CALC-04",
        "hints": [
          "",
          "计算器只按输入计算。",
          "输入错一位，它也会认真算错。",
          "估算先给出数量级预期。",
          "结果偏离很多时就该检查输入。"
        ],
        "view": {
          "title": "计算器结果不是“自动正确”",
          "prompt": "如果把3928误输成39280，屏幕也会正常给出数字。什么办法最容易发现？",
          "choices": [
            [
              "estimate",
              "先估算数量级再对照结果"
            ],
            [
              "display",
              "只看屏幕有没有小数点"
            ]
          ]
        },
        "transitions": [
          {
            "when": "estimate",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-CALC-03"
              },
              {
                "type": "scheduleReview",
                "reason": "calculator-estimate-check"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U6-CALC-04",
        "hints": [
          "",
          "工具使用也需要数学判断。",
          "先定结构。",
          "再输入和纠错。",
          "最后检查结果是否符合题意和数量级。"
        ],
        "view": {
          "title": "把计算器使用变成可检查流程",
          "prompt": "哪套流程最可靠？",
          "choices": [
            [
              "rule",
              "先审题和定顺序→正确输入→局部纠错→用估算/分步/逆运算检查"
            ],
            [
              "keys",
              "记住按键越多越熟练"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "calculator-plan-input-correct-verify"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U6-CALC-02",
        "hints": [
          "",
          "先449－289。",
          "得到160。",
          "再25120÷160。",
          "得到157。"
        ],
        "view": {
          "title": "换一道教材式算式",
          "prompt": "25120÷(449－289)，如果分步输入，括号内结果和最终结果分别是多少？",
          "choices": [
            [
              "correct",
              "160；157"
            ],
            [
              "wrong",
              "160；40"
            ],
            [
              "other",
              "25120；160"
            ]
          ]
        },
        "transitions": [
          {
            "when": "correct",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U6-CALC-04",
        "hints": [
          "",
          "教材还要求“用合适的方法计算”。",
          "20×50很容易凑整。",
          "先得1000。",
          "1000×17=17000，比机械按键更清楚。"
        ],
        "view": {
          "title": "迁移：什么时候反而不该依赖计算器",
          "prompt": "20×50×17，哪种方法更合适？",
          "choices": [
            [
              "mental",
              "先20×50=1000，再×17=17000，口算/简算更直接"
            ],
            [
              "calculator",
              "任何题都必须用计算器"
            ]
          ]
        },
        "transitions": [
          {
            "when": "mental",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U6-CALC-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你在使用工具，而不是被工具牵着走",
          "prompt": "计算器擅长繁杂计算，但运算结构、输入正确性和结果合理性仍要由你判断。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u6.estimate.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u6.estimate.v2",
    "flowVersion": "0.2.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u6",
    "nodeId": "estimate",
    "initialStep": "diagnose",
    "labels": {
      "badge": "估算判断正式课",
      "title": "估算与情境判断",
      "description": "先判断估计方向能否保证结论，再决定是否需要精算。"
    },
    "objectives": {
      "direction": "O-U6-ESTIMATE-01",
      "bound": "O-U6-ESTIMATE-02",
      "boundary": "O-U6-ESTIMATE-03",
      "verify": "O-U6-ESTIMATE-04",
      "transfer": "O-U6-ESTIMATE-05"
    },
    "misconceptions": {
      "nearest": "M-U6-ESTIMATE-01",
      "wrongDirection": "M-U6-ESTIMATE-02",
      "estimateAsExact": "M-U6-ESTIMATE-03",
      "unit": "M-U6-ESTIMATE-04"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "boundary-concept",
      "sourcePages": "96,99,102",
      "sourceNote": "教材96页第7题（6300字，115字/分，45分钟）、99页第5题（50台计算器，3928元/台，20万元预算）、102页第2(3)题（800米，58米/分，12分钟）均要求用估算或合适方法作情境判断。本课程用“估计界/阈值”作为这些教材情境的数学归纳表达，不声称这是教材原术语。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U6-ESTIMATE-01",
        "hints": [
          "",
          "先问：你要证明“够”，还是只想得到一个接近值？",
          "证明“够”时，需要一个不会低估总价的界。",
          "3928<4000，所以50×3928<50×4000。",
          "50×4000=200000，上界都不超预算，实际总价一定更低。"
        ],
        "view": {
          "title": "教材99页：先选“能保证结论”的估法",
          "prompt": "学校买50台计算器，每台3928元，预算20万元。若要快速确认“预算够”，哪种估法最有力？",
          "choices": [
            [
              "up",
              "把3928往大估成4000"
            ],
            [
              "down",
              "把3928往小估成3900"
            ],
            [
              "nearest",
              "只要四舍五入到最近整百即可"
            ]
          ]
        },
        "transitions": [
          {
            "when": "up",
            "to": "budgetBound",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "down",
            "to": "repairDirection",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-ESTIMATE-02",
                "confidence": "high"
              }
            ]
          },
          {
            "when": "nearest",
            "to": "repairDirection",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-ESTIMATE-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairDirection": {
        "objectiveId": "O-U6-ESTIMATE-01",
        "hints": [
          "",
          "比较“估计总价”和“实际总价”谁更大。",
          "3900<3928。",
          "50×3900低于真实总价。",
          "偏小估计即使低于预算，也不能保证真实总价低于预算。"
        ],
        "view": {
          "title": "估算方向要跟结论配套",
          "prompt": "为什么把3928估成3900不能直接证明20万元一定够？",
          "choices": [
            [
              "lower",
              "3900得到的是偏小的总价，真实总价可能更高"
            ],
            [
              "close",
              "因为3900离3928不够近"
            ]
          ]
        },
        "transitions": [
          {
            "when": "lower",
            "to": "budgetBound",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-ESTIMATE-02"
              },
              {
                "type": "resolveMisconception",
                "id": "M-U6-ESTIMATE-01"
              },
              {
                "type": "scheduleReview",
                "reason": "estimate-direction-for-proof"
              }
            ]
          }
        ]
      },
      "budgetBound": {
        "objectiveId": "O-U6-ESTIMATE-02",
        "hints": [
          "",
          "4000是把实际单价往大估。",
          "所以200000是实际总价的上界。",
          "真实总价不会超过这个上界。",
          "上界≤预算，所以实际总价一定≤预算。"
        ],
        "view": {
          "title": "教材99页：上界都够，所以一定够",
          "prompt": "50×4000=200000元，而实际单价3928<4000。可以据此确认预算够吗？",
          "choices": [
            [
              "yes",
              "可以确认够"
            ],
            [
              "no",
              "不能确认，必须精算"
            ]
          ],
          "renderer": "thresholdBound",
          "rendererArgs": {
            "estimate": 200000,
            "threshold": 200000,
            "relation": "≤",
            "estimateLabel": "总价上界",
            "thresholdLabel": "预算",
            "unit": "元",
            "conclusion": "一定够"
          }
        },
        "transitions": [
          {
            "when": "yes",
            "to": "capacityBound",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "no",
            "to": "repairBound",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-ESTIMATE-03",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairBound": {
        "objectiveId": "O-U6-ESTIMATE-02",
        "hints": [
          "",
          "真实单价是3928，不是4000。",
          "200000来自50×4000。",
          "它的作用是给真实总价设一个不会被超过的上限。",
          "证明“够”不要求这个数就是准确账单。"
        ],
        "view": {
          "title": "界不是准确值，但可以证明结论",
          "prompt": "200000元是不是50台计算器的准确总价？",
          "choices": [
            [
              "upper",
              "不是，是往大估得到的上界"
            ],
            [
              "exact",
              "是准确总价"
            ]
          ]
        },
        "transitions": [
          {
            "when": "upper",
            "to": "capacityBound",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-ESTIMATE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "bound-vs-exact"
              }
            ]
          }
        ]
      },
      "capacityBound": {
        "objectiveId": "O-U6-ESTIMATE-02",
        "hints": [
          "",
          "这次比较的是“最多能完成多少”和“任务目标”。",
          "把速度、时间都往大估，得到完成量的上界。",
          "120×50=6000。",
          "连上界6000都小于6300，真实完成量只会更小，所以一定不能录完。"
        ],
        "view": {
          "title": "教材96页：连“往大估的能力”都不够",
          "prompt": "一份稿件有6300字，每分钟录入115字，45分钟能录完吗？若把115往大估成120、45往大估成50，最多估成6000字。能否直接判断？",
          "choices": [
            [
              "cannot",
              "不能录完"
            ],
            [
              "unknown",
              "仍不能确定"
            ],
            [
              "can",
              "能录完"
            ]
          ],
          "renderer": "thresholdBound",
          "rendererArgs": {
            "estimate": 6000,
            "threshold": 6300,
            "relation": "<",
            "estimateLabel": "完成量上界",
            "thresholdLabel": "稿件字数",
            "unit": "字",
            "conclusion": "一定录不完"
          }
        },
        "transitions": [
          {
            "when": "cannot",
            "to": "walkBound",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "unknown",
            "to": "repairCapacity",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-ESTIMATE-02",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairCapacity": {
        "objectiveId": "O-U6-ESTIMATE-02",
        "hints": [
          "",
          "115估成120，45估成50，两个都变大。",
          "乘积也会变大。",
          "所以6000不会小于真实可完成量。",
          "连这个更大的数都不到6300，实际更不可能达到。"
        ],
        "view": {
          "title": "同样是上界，但比较对象变了",
          "prompt": "6000是“45分钟实际能录入字数”的哪一种界？",
          "choices": [
            [
              "upper",
              "上界"
            ],
            [
              "lower",
              "下界"
            ]
          ]
        },
        "transitions": [
          {
            "when": "upper",
            "to": "walkBound",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-ESTIMATE-02"
              },
              {
                "type": "scheduleReview",
                "reason": "capacity-upper-bound"
              }
            ]
          }
        ]
      },
      "walkBound": {
        "objectiveId": "O-U6-ESTIMATE-03",
        "hints": [
          "",
          "60比58大。",
          "所以720是12分钟路程的上界。",
          "真实路程<720。",
          "720<800，因此真实路程更不可能达到800。"
        ],
        "view": {
          "title": "教材102页：再次用界判断",
          "prompt": "到图书馆800米，速度58米/分，12分钟能走到吗？把58往大估成60，60×12=720。能直接判断吗？",
          "choices": [
            [
              "cannot",
              "能判断：不能走到"
            ],
            [
              "unknown",
              "不能判断"
            ],
            [
              "can",
              "能判断：可以走到"
            ]
          ],
          "renderer": "thresholdBound",
          "rendererArgs": {
            "estimate": 720,
            "threshold": 800,
            "relation": "<",
            "estimateLabel": "12分钟路程上界",
            "thresholdLabel": "到校路程",
            "unit": "米",
            "conclusion": "一定走不到"
          }
        },
        "transitions": [
          {
            "when": "cannot",
            "to": "formalize",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "unknown",
            "to": "repairWalk",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-ESTIMATE-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairWalk": {
        "objectiveId": "O-U6-ESTIMATE-03",
        "hints": [
          "",
          "上界表示真实值不会超过它。",
          "真实路程≤大约720。",
          "而720<800。",
          "所以真实路程不可能达到800。"
        ],
        "view": {
          "title": "临界判断看“能否推出”，不是看接不接近",
          "prompt": "如果路程上界720都小于800，真实路程可能达到800吗？",
          "choices": [
            [
              "no",
              "不可能"
            ],
            [
              "yes",
              "可能"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-ESTIMATE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "threshold-proof"
              },
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true,
                  "afterRepair": true
                }
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U6-ESTIMATE-04",
        "hints": [
          "",
          "把前三道教材题放在一起看。",
          "关键不是“近似得多准”，而是估计值与真实值的大小方向。",
          "能保证真实值仍在阈值同一侧，就能直接判断。",
          "如果估计不能保证结论，就必须换更精细的估计或精算。"
        ],
        "view": {
          "title": "现在才把“有方向的估算”说成规则",
          "prompt": "哪一句最准确？",
          "choices": [
            [
              "rule",
              "估算要看方向：若构造出的界已经足以跨过/不跨过阈值，就能直接判断；否则再精算"
            ],
            [
              "nearest",
              "所有情境都只需四舍五入到最近整十或整百"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "boundaryCase",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "directional-bound-threshold"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "boundaryCase": {
        "objectiveId": "O-U6-ESTIMATE-04",
        "hints": [
          "",
          "160<165。",
          "所以4960低于真实需求。",
          "偏小的需求低于库存，不能推出真实需求也低于库存。",
          "精算165×31=5115>5000，所以实际不够。"
        ],
        "view": {
          "title": "边界附近：估计不能保证时就精算",
          "prompt": "每天吃165千克，5000千克食物要吃31天。把165往小估成160，160×31=4960<5000。能据此确认“够”吗？",
          "choices": [
            [
              "exact",
              "不能；这个方向不能保证，应该精算"
            ],
            [
              "enough",
              "能，4960<5000所以够"
            ]
          ],
          "renderer": "thresholdBound",
          "rendererArgs": {
            "estimate": 4960,
            "threshold": 5000,
            "relation": "<",
            "estimateLabel": "需求下界",
            "thresholdLabel": "库存",
            "unit": "千克",
            "conclusion": "仅凭此不能判“够”"
          }
        },
        "transitions": [
          {
            "when": "exact",
            "to": "transfer",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "enough",
            "to": "repairBoundary",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-ESTIMATE-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairBoundary": {
        "objectiveId": "O-U6-ESTIMATE-04",
        "hints": [
          "",
          "每天165被估成160。",
          "31天不变。",
          "因此160×31小于165×31。",
          "下界低于库存不够证明“够”，要精算。"
        ],
        "view": {
          "title": "为什么4960不能当结论",
          "prompt": "4960与真实31天需求是什么关系？",
          "choices": [
            [
              "lower",
              "4960是偏小的下界，真实需求更大"
            ],
            [
              "exact",
              "4960就是准确需求"
            ]
          ]
        },
        "transitions": [
          {
            "when": "lower",
            "to": "transfer",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-ESTIMATE-03"
              },
              {
                "type": "scheduleReview",
                "reason": "inconclusive-bound-needs-exact"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U6-ESTIMATE-05",
        "hints": [
          "",
          "两个正数量都往大估。",
          "50×200是实际总价的上界。",
          "上界刚好等于预算。",
          "实际总价≤上界=预算，所以一定够。"
        ],
        "view": {
          "title": "迁移：换成新的预算阈值",
          "prompt": "学校买48件每件198元的物品，预算10000元。把48往大估成50、198往大估成200，得到10000元。可以确认预算够吗？",
          "choices": [
            [
              "yes",
              "可以确认够"
            ],
            [
              "no",
              "不能确认"
            ]
          ],
          "renderer": "thresholdBound",
          "rendererArgs": {
            "estimate": 10000,
            "threshold": 10000,
            "relation": "≤",
            "estimateLabel": "总价上界",
            "thresholdLabel": "预算",
            "unit": "元",
            "conclusion": "一定够"
          }
        },
        "transitions": [
          {
            "when": "yes",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U6-ESTIMATE-05",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你会用“界”判断，而不是只求一个大约数",
          "prompt": "估算可以用来证明结论：先看估计方向与真实值的大小关系，再看这个界与阈值的位置；若推不出结论，就切换更精细估计或精算。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  },
  "u6.multiply.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u6.multiply.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u6",
    "nodeId": "multiply",
    "initialStep": "diagnose",
    "labels": {
      "badge": "程序理解试点",
      "title": "三位数乘两位数",
      "description": "先解释两位数的位值和两个部分积，再形成竖式规则；错误只修位值或对齐问题。"
    },
    "objectives": {
      "decompose": "O-U6-MULTIPLY-01",
      "partialProducts": "O-U6-MULTIPLY-02",
      "verify": "O-U6-MULTIPLY-03",
      "transfer": "O-U6-MULTIPLY-04"
    },
    "misconceptions": {
      "tensAsOnes": "M-U6-MULTIPLY-01",
      "misalignTens": "M-U6-MULTIPLY-02",
      "zeroHandling": "M-U6-MULTIPLY-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "95-97",
      "sourceNote": "教材先用128×16说明16=10+6及竖式各部分积意义，再练习90×120与找错。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U6-MULTIPLY-01",
        "hints": [
          "",
          "先看16里十位上的1表示多少。",
          "16不是1+6，而是10+6。",
          "把16拆成10和6，再分别与128相乘。",
          "128×16=128×10+128×6。"
        ],
        "view": {
          "title": "先解释16，不急着列竖式",
          "prompt": "月星小区有16幢楼，每幢128户。哪一个分解真正表示128×16？",
          "choices": [
            [
              "decompose",
              "128×10＋128×6"
            ],
            [
              "ones",
              "128×1＋128×6"
            ],
            [
              "add",
              "128＋16"
            ]
          ]
        },
        "transitions": [
          {
            "when": "decompose",
            "to": "guidedPartial",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "ones",
            "to": "repairPlaceValue",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-MULTIPLY-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairPlaceValue": {
        "objectiveId": "O-U6-MULTIPLY-01",
        "hints": [
          "",
          "把16写成十位和个位。",
          "十位上的1表示1个十，也就是10。",
          "所以16=10+6。",
          "128×16应拆成128×10和128×6。"
        ],
        "view": {
          "title": "只修一个点：十位1不是1",
          "prompt": "16的十位上是1。这个1在这里实际表示多少？",
          "choices": [
            [
              "ten",
              "10"
            ],
            [
              "one",
              "1"
            ],
            [
              "sixteen",
              "16"
            ]
          ]
        },
        "transitions": [
          {
            "when": "ten",
            "to": "guidedPartial",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-MULTIPLY-01"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U6-MULTIPLY-01"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "tens_place_value"
              }
            ]
          }
        ]
      },
      "guidedPartial": {
        "objectiveId": "O-U6-MULTIPLY-02",
        "hints": [
          "",
          "竖式第一行部分积来自个位6。",
          "第二行来自十位1，但这个1表示10。",
          "128×6=768；128×10=1280。",
          "第二个部分积表示10幢楼共1280户，因此要从十位对齐。"
        ],
        "view": {
          "title": "竖式里的两行部分积分别是谁？",
          "prompt": "计算128×16时，第二行部分积应该表示什么？",
          "choices": [
            [
              "tens",
              "128×10＝1280，表示10幢楼的户数"
            ],
            [
              "one",
              "128×1＝128，表示1幢楼的户数"
            ],
            [
              "six",
              "128×6＝768，表示6幢楼的户数"
            ]
          ],
          "renderer": "partialProducts",
          "rendererArgs": {
            "a": 128,
            "b": 16,
            "onesProduct": 768,
            "tensProduct": 1280,
            "total": 2048,
            "highlight": "tens"
          }
        },
        "transitions": [
          {
            "when": "tens",
            "to": "alignCheck",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "one",
            "to": "repairAlign",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-MULTIPLY-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairAlign": {
        "objectiveId": "O-U6-MULTIPLY-02",
        "hints": [
          "",
          "先问这一行是乘个位还是乘十位。",
          "第二行来自十位1，也就是10。",
          "128×10的个位必定是0。",
          "所以1280在竖式中要体现十位价值，不能把128直接与个位对齐。"
        ],
        "view": {
          "title": "为什么第二行要错开一位？",
          "prompt": "如果第二行写的是128×10，它的个位应该是什么？",
          "choices": [
            [
              "zero",
              "0，因此部分积要体现十位对齐"
            ],
            [
              "eight",
              "8，因此和第一行完全对齐"
            ]
          ],
          "renderer": "partialProducts",
          "rendererArgs": {
            "a": 128,
            "b": 16,
            "onesProduct": 768,
            "tensProduct": 1280,
            "total": 2048,
            "highlight": "alignment"
          }
        },
        "transitions": [
          {
            "when": "zero",
            "to": "alignCheck",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-MULTIPLY-02"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U6-MULTIPLY-02"
                }
              }
            ]
          }
        ]
      },
      "alignCheck": {
        "objectiveId": "O-U6-MULTIPLY-03",
        "hints": [
          "",
          "教材找错题要先看每一行部分积来自哪一位。",
          "121×63中，乘6实际上是乘60。",
          "121×60=7260，不是726。",
          "如果把726按个位部分积那样对齐，最后得到1089，会小一个数量级。"
        ],
        "view": {
          "title": "找错：算对数字，不等于位置也对",
          "prompt": "121×63的竖式里，如果第二行把726直接和第一行363的个位对齐，主要错在哪里？",
          "choices": [
            [
              "place",
              "把十位6当成了6，没有体现×60的位值"
            ],
            [
              "three",
              "121×3算错了"
            ],
            [
              "add",
              "两个部分积不能相加"
            ]
          ]
        },
        "transitions": [
          {
            "when": "place",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U6-MULTIPLY-03",
        "hints": [
          "",
          "把前面三件事合起来：先乘哪一位、那一位表示多少、部分积放在哪里。",
          "个位数乘出的部分积从个位对齐。",
          "十位数实际表示几十，乘出的部分积要体现十位价值。",
          "三位数乘两位数：分别乘个位和十位；十位部分积按十位对齐；最后把部分积相加。"
        ],
        "view": {
          "title": "现在才把竖式规则说完整",
          "prompt": "哪一句最准确地概括三位数乘两位数的竖式？",
          "choices": [
            [
              "rule",
              "分别乘个位和十位；十位部分积体现几十并按十位对齐；最后相加"
            ],
            [
              "digits",
              "只要每行数字算对，写在哪一位都一样"
            ],
            [
              "one",
              "十位上的1永远按1来乘"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "partial-products-by-place-value"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U6-MULTIPLY-02",
        "hints": [
          "",
          "把65拆成60和5。",
          "324×5=1620。",
          "324×60=19440。",
          "1620+19440=21060。"
        ],
        "view": {
          "title": "撤掉解释支架，独立完成一次",
          "prompt": "324×65的正确积是多少？",
          "choices": [
            [
              "21060",
              "21060"
            ],
            [
              "3564",
              "3564"
            ],
            [
              "19441620",
              "把两个部分积直接拼接"
            ]
          ],
          "renderer": "partialProducts",
          "rendererArgs": {
            "a": 324,
            "b": 65,
            "onesProduct": 1620,
            "tensProduct": 19440,
            "total": 21060,
            "highlight": "none"
          }
        },
        "transitions": [
          {
            "when": "21060",
            "to": "zeroCase",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "zeroCase": {
        "objectiveId": "O-U6-MULTIPLY-03",
        "hints": [
          "",
          "先去掉末尾0，看90和120各带来几个10。",
          "90=9×10，120=12×10。",
          "9×12=108，同时还有10×10=100。",
          "所以90×120=108×100=10800，末尾有两个0。"
        ],
        "view": {
          "title": "教材的特殊情况：乘数末尾有0",
          "prompt": "90×120为什么可以先算9×12，再在积的末尾添两个0？",
          "choices": [
            [
              "hundred",
              "因为90=9×10、120=12×10，还要乘10×10=100"
            ],
            [
              "habit",
              "因为乘法题末尾有几个0就随便添几个0"
            ],
            [
              "onezero",
              "只需补一个0"
            ]
          ]
        },
        "transitions": [
          {
            "when": "hundred",
            "to": "transfer",
            "effects": [
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          },
          {
            "when": "habit",
            "to": "repairZero",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-MULTIPLY-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairZero": {
        "objectiveId": "O-U6-MULTIPLY-03",
        "hints": [
          "",
          "把每个末尾0都改写成一个×10。",
          "90=9×10。",
          "120=12×10。",
          "两个×10合起来是×100，所以108要乘100得到10800。"
        ],
        "view": {
          "title": "0不是装饰，它表示10的因子",
          "prompt": "90×120里一共包含几个“×10”的因子？",
          "choices": [
            [
              "two",
              "2个"
            ],
            [
              "one",
              "1个"
            ],
            [
              "zero",
              "0个"
            ]
          ]
        },
        "transitions": [
          {
            "when": "two",
            "to": "transfer",
            "lane": "standard",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-MULTIPLY-03"
              },
              {
                "type": "emit",
                "event": "REPAIR_SUCCESS",
                "result": {
                  "misconception_id": "M-U6-MULTIPLY-03"
                }
              },
              {
                "type": "scheduleReview",
                "reason": "trailing_zero_place_value"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U6-MULTIPLY-04",
        "hints": [
          "",
          "把25拆成20和5。",
          "226×5=1130。",
          "226×20=4520。",
          "1130+4520=5650元。"
        ],
        "view": {
          "title": "迁移到新情境：不再提示竖式行数",
          "prompt": "学校更换226支节能灯管，每支25元。一共需要多少元？",
          "choices": [
            [
              "5650",
              "5650元"
            ],
            [
              "5876",
              "5876元"
            ],
            [
              "1130",
              "1130元"
            ]
          ]
        },
        "transitions": [
          {
            "when": "5650",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U6-MULTIPLY-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "reviewOnH4": false,
        "view": {
          "title": "你已经把竖式和位值连起来了",
          "prompt": "三位数乘两位数不是记两行位置：每一行部分积都来自一个数位。个位表示几个一，十位表示几个十；部分积必须按它的位值对齐，最后再合并。末尾0同样来自10的因子。",
          "choices": []
        },
        "transitions": []
      }
    }
  },
  "u6.pattern.v2": {
    "packageVersion": "0.1.0",
    "schemaVersion": "0.2",
    "flowId": "u6.pattern.v2",
    "flowVersion": "0.1.0",
    "courseId": "sujiao-math-2026",
    "unitId": "u6",
    "nodeId": "pattern",
    "initialStep": "diagnose",
    "labels": {
      "badge": "规律解释正式课",
      "title": "规律探索与解释",
      "description": "先从多组结果发现规律，再用面积拆分重组解释，并用新例验证，不把巧合当规律。"
    },
    "objectives": {
      "notice": "O-U6-PATTERN-01",
      "front": "O-U6-PATTERN-02",
      "explain": "O-U6-PATTERN-03",
      "transfer": "O-U6-PATTERN-04"
    },
    "misconceptions": {
      "append25": "M-U6-PATTERN-01",
      "overgeneralize": "M-U6-PATTERN-02",
      "patternOnly": "M-U6-PATTERN-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "100-101",
      "sourceNote": "教材先用计算器计算15×15、25×25、35×35，发现积末两位都是25，前部等于十位上的数乘比它大1的数；随后要求用25×25面积图拆分重组解释规律，并继续猜算45×45、55×55、65×65及44×46、54×56、64×66等相邻对称乘积。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U6-PATTERN-01",
        "hints": [
          "",
          "先只观察结果。",
          "225、625、1225。",
          "末两位都一样。",
          "都是25。"
        ],
        "view": {
          "title": "先从多组结果找“稳定不变”",
          "prompt": "15×15=225，25×25=625，35×35=1225。最明显的共同点是什么？",
          "choices": [
            [
              "25",
              "积的末两位都是25"
            ],
            [
              "double",
              "积都是原数的2倍"
            ],
            [
              "same",
              "三个积完全相同"
            ]
          ]
        },
        "transitions": [
          {
            "when": "25",
            "to": "front",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          }
        ]
      },
      "front": {
        "objectiveId": "O-U6-PATTERN-02",
        "hints": [
          "",
          "把前部和十位数配对。",
          "2=1×2。",
          "6=2×3，12=3×4。",
          "也就是n×(n+1)。"
        ],
        "view": {
          "title": "前面的数也有规律",
          "prompt": "15²前面是2，25²前面是6，35²前面是12。若原数十位分别是1、2、3，前面的2、6、12最像什么？",
          "choices": [
            [
              "next",
              "1×2，2×3，3×4"
            ],
            [
              "square",
              "1²，2²，3²"
            ],
            [
              "plus",
              "1+1，2+2，3+3"
            ]
          ]
        },
        "transitions": [
          {
            "when": "next",
            "to": "ruleGuess",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "ruleGuess": {
        "objectiveId": "O-U6-PATTERN-02",
        "hints": [
          "",
          "十位数是4。",
          "前部=4×5=20。",
          "末两位25。",
          "所以2025。"
        ],
        "view": {
          "title": "先提出规律，再去解释",
          "prompt": "按刚才规律，45×45应该是多少？",
          "choices": [
            [
              "2025",
              "2025"
            ],
            [
              "1625",
              "1625"
            ],
            [
              "4025",
              "4025"
            ]
          ]
        },
        "transitions": [
          {
            "when": "2025",
            "to": "explain",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "4025",
            "to": "repairAppend",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-PATTERN-01",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairAppend": {
        "objectiveId": "O-U6-PATTERN-02",
        "hints": [
          "",
          "末两位25只是规律的一半。",
          "前部不是原十位照抄。",
          "3要乘它后面的4。",
          "所以得到12。"
        ],
        "view": {
          "title": "不能只“前面照抄，再添25”",
          "prompt": "35×35=1225时，前面的12来自什么？",
          "choices": [
            [
              "next",
              "3×4"
            ],
            [
              "copy",
              "把35前面的3直接写过去"
            ]
          ]
        },
        "transitions": [
          {
            "when": "next",
            "to": "explain",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-PATTERN-01"
              },
              {
                "type": "scheduleReview",
                "reason": "ending-five-square-front-rule"
              }
            ]
          }
        ]
      },
      "explain": {
        "objectiveId": "O-U6-PATTERN-03",
        "hints": [
          "",
          "25×25是(20+5)×(20+5)。",
          "有20×20、两个20×5和5×5。",
          "把一个20×5条带搬到另一个方向。",
          "两个“5”把20延长成30，于是20×30，再加25。"
        ],
        "view": {
          "title": "为什么会这样：把25×25拆开重组",
          "prompt": "把25看成20＋5。面积拆分重组后，可变成20×30＋25。20×30里的30从哪里来？",
          "choices": [
            [
              "move",
              "20和原来的两个5合成30"
            ],
            [
              "magic",
              "只是结果碰巧等于30"
            ],
            [
              "double",
              "20翻倍得到40再减10"
            ]
          ],
          "renderer": "areaDecomposition",
          "rendererArgs": {
            "base": 20,
            "tail": 5,
            "label": "25乘25拆分为20乘30加5乘5的面积重组"
          }
        },
        "transitions": [
          {
            "when": "move",
            "to": "generalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "magic",
            "to": "repairExplain",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-PATTERN-03",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairExplain": {
        "objectiveId": "O-U6-PATTERN-03",
        "hints": [
          "",
          "观察只能提出猜想。",
          "解释说明结构为什么必然成立。",
          "新例还能继续验证。",
          "规律不是“看起来像”就够了。"
        ],
        "view": {
          "title": "规律要能说“为什么”",
          "prompt": "如果只记“前部乘下一个数，末尾25”，你能保证不是前三题巧合吗？",
          "choices": [
            [
              "need",
              "不能，需要用面积或运算关系解释并用新例验证"
            ],
            [
              "enough",
              "能，看三题就一定成立"
            ]
          ]
        },
        "transitions": [
          {
            "when": "need",
            "to": "generalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-PATTERN-03"
              },
              {
                "type": "scheduleReview",
                "reason": "pattern-needs-explanation"
              }
            ]
          }
        ]
      },
      "generalize": {
        "objectiveId": "O-U6-PATTERN-03",
        "hints": [
          "",
          "十位是5。",
          "前部=5×6=30。",
          "末两位25。",
          "得到3025。"
        ],
        "view": {
          "title": "把解释推广到个位是5的数",
          "prompt": "55×55按规律是多少？",
          "choices": [
            [
              "3025",
              "3025"
            ],
            [
              "2525",
              "2525"
            ],
            [
              "5525",
              "5525"
            ]
          ],
          "renderer": "areaDecomposition",
          "rendererArgs": {
            "base": 50,
            "tail": 5,
            "label": "55乘55拆分为50乘60加5乘5的面积重组"
          }
        },
        "transitions": [
          {
            "when": "3025",
            "to": "boundary",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "boundary": {
        "objectiveId": "O-U6-PATTERN-03",
        "hints": [
          "",
          "检查规律从哪些例子得到。",
          "15、25、35、45、55都以5结尾。",
          "面积解释也用了“+5”。",
          "所以不能直接推广到54²。"
        ],
        "view": {
          "title": "规律有适用范围",
          "prompt": "“前部n×(n+1)，末两位25”能直接用于54×54吗？",
          "choices": [
            [
              "no",
              "不能，它要求个位是5"
            ],
            [
              "yes",
              "能，所有两位数平方都这样"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "formalize",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "yes",
            "to": "repairOver",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U6-PATTERN-02",
                "confidence": "high"
              }
            ]
          }
        ]
      },
      "repairOver": {
        "objectiveId": "O-U6-PATTERN-03",
        "hints": [
          "",
          "规律不是无条件口诀。",
          "结构依赖原数写成10n+5。",
          "所以个位必须是5。",
          "超出范围要重新分析。"
        ],
        "view": {
          "title": "规律必须带适用条件",
          "prompt": "下面哪类数能直接使用这个规律？",
          "choices": [
            [
              "ending5",
              "个位是5的整数平方"
            ],
            [
              "all",
              "所有两位数平方"
            ]
          ]
        },
        "transitions": [
          {
            "when": "ending5",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U6-PATTERN-02"
              },
              {
                "type": "scheduleReview",
                "reason": "pattern-domain-boundary"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U6-PATTERN-03",
        "hints": [
          "",
          "先观察。",
          "再解释为什么。",
          "然后用新例验证。",
          "最后说清规律边界。"
        ],
        "view": {
          "title": "把“发现—解释—验证”说完整",
          "prompt": "哪种学习规律的方法最可靠？",
          "choices": [
            [
              "rule",
              "多例计算→提出猜想→用图形/运算解释→换新例验证→说明适用范围"
            ],
            [
              "memorize",
              "发现三题相像就直接背口诀"
            ]
          ]
        },
        "transitions": [
          {
            "when": "rule",
            "to": "independent",
            "effects": [
              {
                "type": "setFlag",
                "key": "formalized",
                "value": true
              },
              {
                "type": "emit",
                "event": "FORMALIZATION_UNLOCKED",
                "result": {
                  "rule": "pattern-observe-explain-verify-boundary"
                }
              },
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          }
        ]
      },
      "independent": {
        "objectiveId": "O-U6-PATTERN-02",
        "hints": [
          "",
          "十位数6。",
          "前部6×7=42。",
          "末两位25。",
          "得到4225。"
        ],
        "view": {
          "title": "换一个新例独立验证",
          "prompt": "65×65等于多少？",
          "choices": [
            [
              "4225",
              "4225"
            ],
            [
              "3625",
              "3625"
            ],
            [
              "6525",
              "6525"
            ]
          ]
        },
        "transitions": [
          {
            "when": "4225",
            "to": "transfer",
            "effects": [
              {
                "type": "emit",
                "event": "INDEPENDENT_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "independent_success"
              }
            ]
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U6-PATTERN-04",
        "hints": [
          "",
          "一边少1，另一边多1。",
          "围绕45对称。",
          "(45－1)(45＋1)=45²－1²。",
          "所以比45²少1。"
        ],
        "view": {
          "title": "迁移：相邻对称乘积也能用同一图解释",
          "prompt": "44×46可以看成(45－1)×(45＋1)。它比45×45少多少？",
          "choices": [
            [
              "1",
              "少1"
            ],
            [
              "2",
              "少2"
            ],
            [
              "45",
              "少45"
            ]
          ]
        },
        "transitions": [
          {
            "when": "1",
            "to": "complete",
            "effects": [
              {
                "type": "emit",
                "event": "TRANSFER_PASS",
                "result": {
                  "independent": true
                }
              },
              {
                "type": "markObjective",
                "stage": "transfer_success"
              }
            ]
          }
        ]
      },
      "complete": {
        "objectiveId": "O-U6-PATTERN-04",
        "hints": [
          "",
          "",
          "",
          "",
          ""
        ],
        "view": {
          "title": "你已经从“看见规律”走到了“解释规律”",
          "prompt": "可靠的规律不是记住几组答案，而是能说明结构为什么成立、能用新例验证，还知道什么时候不能套用。",
          "choices": []
        },
        "transitions": [],
        "reviewOnH4": false
      }
    }
  }
};
