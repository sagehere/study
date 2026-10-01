/* GENERATED from math/course-packages/*.json by pack-course-packages.cjs. Do not edit manually. */
'use strict';
globalThis.CoursePackageData={
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
      "description": "把商位、乘减落和余数约束连成可检查的长除法流程。"
    },
    "objectives": {
      "place": "O-U1-VERTICAL-01",
      "cycle": "O-U1-VERTICAL-02",
      "remainder": "O-U1-VERTICAL-03",
      "transfer": "O-U1-VERTICAL-04"
    },
    "misconceptions": {
      "place": "M-U1-VERTICAL-01",
      "bringDown": "M-U1-VERTICAL-02",
      "remainder": "M-U1-VERTICAL-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "8-9",
      "sourceNote": "教材以156÷12说明先把1百5十看作15个十，商1写在十位；并总结“除到被除数的哪一位，商就写在那一位上面”“每次除后的余数都比除数小”，再安排593÷28、680÷17及729÷27等竖式练习。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U1-VERTICAL-01",
        "hints": [
          "",
          "先看当前实际除到被除数的哪一位。",
          "15表示15个十。",
          "15个十÷12，每份先得到1个十。",
          "所以商1写在十位。"
        ],
        "view": {
          "title": "商的第一位为什么写在十位",
          "prompt": "156÷12，先用15个十除以12，商1。这个1应该写在哪一位上？",
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
            "dividend": 156,
            "divisor": 12,
            "quotient": "1_",
            "current": 15,
            "product": 12,
            "remainder": 3,
            "bringDown": 6,
            "highlight": "current",
            "label": "156除以12，先用15个十除以12，商1写十位"
          }
        },
        "transitions": [
          {
            "when": "tens",
            "to": "bringDown",
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
          },
          {
            "when": "hundreds",
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
          "15来自百位和十位组成的15个十。",
          "除法分的是“十”这个单位。",
          "得到1份十。",
          "因此商位必须在十位。"
        ],
        "view": {
          "title": "只修“商位跟着当前被除数”",
          "prompt": "如果当前拿15个“十”去除，商得到的1表示什么？",
          "choices": [
            [
              "oneTen",
              "1个十"
            ],
            [
              "one",
              "1个一"
            ]
          ]
        },
        "transitions": [
          {
            "when": "oneTen",
            "to": "bringDown",
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
      "bringDown": {
        "objectiveId": "O-U1-VERTICAL-02",
        "hints": [
          "",
          "检查被除数还有没有没处理的数位。",
          "个位6还没有参与。",
          "把6落到当前余数3后面。",
          "组成36，再继续36÷12。"
        ],
        "view": {
          "title": "减完以后为什么还不能停",
          "prompt": "15－12=3。156还有个位6没有处理，下一步应该做什么？",
          "choices": [
            [
              "bring",
              "把个位6落下来，组成36继续除"
            ],
            [
              "stop",
              "把3当最终余数直接停"
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
            "bringDown": 6,
            "highlight": "bringDown",
            "label": "156除以12，减后余3，再落下个位6组成36"
          }
        },
        "transitions": [
          {
            "when": "bring",
            "to": "remainderCheck",
            "effects": [
              {
                "type": "markObjective",
                "stage": "guided_success"
              }
            ]
          },
          {
            "when": "stop",
            "to": "repairBring",
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
      "repairBring": {
        "objectiveId": "O-U1-VERTICAL-02",
        "hints": [
          "",
          "竖式要从高位依次处理到个位。",
          "还有一位没处理就不能结束。",
          "3个十加上落下来的6个一，得到36个一。",
          "继续36÷12。"
        ],
        "view": {
          "title": "余数只有在最后一位处理完后才可能是最终余数",
          "prompt": "3后面还有被除数的个位6，应该怎样处理？",
          "choices": [
            [
              "bring",
              "落下6组成36"
            ],
            [
              "ignore",
              "忽略6"
            ]
          ]
        },
        "transitions": [
          {
            "when": "bring",
            "to": "remainderCheck",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U1-VERTICAL-02"
              },
              {
                "type": "scheduleReview",
                "reason": "division-bring-down"
              }
            ]
          }
        ]
      },
      "remainderCheck": {
        "objectiveId": "O-U1-VERTICAL-03",
        "hints": [
          "",
          "余数表示还没有分掉的数量。",
          "如果余数≥除数，还能再分出至少1份。",
          "17≥12。",
          "所以商偏小，余数不能保留。"
        ],
        "view": {
          "title": "余数为什么必须小于除数",
          "prompt": "某一步算完得到余数17，而除数是12。这个余数可以保留吗？",
          "choices": [
            [
              "no",
              "不可以，说明商还可以再大"
            ],
            [
              "yes",
              "可以，只要不是0就行"
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
          "余数是“再也分不出一整份”的剩余。",
          "若余数达到除数，就还能继续分。",
          "所以余数必须小于除数。",
          "0≤r<除数。"
        ],
        "view": {
          "title": "只修“余数约束”",
          "prompt": "余数与除数必须满足什么关系？",
          "choices": [
            [
              "lt",
              "0≤余数＜除数"
            ],
            [
              "any",
              "余数可以大于除数"
            ]
          ]
        },
        "transitions": [
          {
            "when": "lt",
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
          "把前面三条证据合在一起。",
          "先确定开始除的数位。",
          "每一位都经历商、乘、减、落。",
          "每一步都检查余数<除数。"
        ],
        "view": {
          "title": "把竖式流程说完整",
          "prompt": "哪一句最符合教材总结？",
          "choices": [
            [
              "rule",
              "先判断从哪一位开始除；除到哪一位商写哪一位；每步商、乘、减、落，并检查余数小于除数"
            ],
            [
              "placeOnly",
              "只要最后答案对，商位和中间余数不重要"
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
                  "rule": "long-division-cycle"
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
          "先看72÷27。",
          "商2写十位，2×27=54，余18。",
          "落下9得189，再商7。",
          "27×7=189，所以商27。"
        ],
        "view": {
          "title": "换一道新竖式独立完成",
          "prompt": "729÷27的商是多少？",
          "choices": [
            [
              "27",
              "27"
            ],
            [
              "23",
              "23"
            ],
            [
              "37",
              "37"
            ]
          ],
          "renderer": "longDivision",
          "rendererArgs": {
            "dividend": 729,
            "divisor": 27,
            "quotient": "27",
            "current": 189,
            "product": 189,
            "remainder": 0,
            "highlight": "none",
            "label": "729除以27的长除法结构"
          }
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
        "objectiveId": "O-U1-VERTICAL-04",
        "hints": [
          "",
          "64÷32先商2在十位。",
          "2×32=64，余0，落下5。",
          "5<32，个位商0。",
          "所以商20，余5。"
        ],
        "view": {
          "title": "迁移到有余数的竖式",
          "prompt": "645÷32的结果是哪一个？",
          "choices": [
            [
              "20r5",
              "20……5"
            ],
            [
              "21r5",
              "21……5"
            ],
            [
              "20r25",
              "20……25"
            ]
          ]
        },
        "transitions": [
          {
            "when": "20r5",
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
          "title": "竖式已经变成可检查的程序",
          "prompt": "商位由当前处理的数位决定；每一步都商、乘、减、落；结束前检查余数小于除数，并可用“除数×商＋余数=被除数”验算。",
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
      "badge": "程序顺序正式课",
      "title": "小括号与中括号",
      "description": "把括号看成改变先后关系的结构：先小括号，再中括号，括号内仍遵守运算顺序。"
    },
    "objectives": {
      "inner": "O-U4-BRACKET-01",
      "nested": "O-U4-BRACKET-02",
      "order": "O-U4-BRACKET-03",
      "transfer": "O-U4-BRACKET-04"
    },
    "misconceptions": {
      "ignore": "M-U4-BRACKET-01",
      "outerFirst": "M-U4-BRACKET-02",
      "insideLeft": "M-U4-BRACKET-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "procedural",
      "sourcePages": "60-62",
      "sourceNote": "教材以(600－126×4)÷48说明括号中的量先算，且括号内仍先乘除后加减；再明确既有小括号又有中括号时先算小括号，再算中括号，最后算括号外，并安排58×(20－78÷13)、42×[169－(78+35)]等练习。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U4-BRACKET-01",
        "hints": [
          "",
          "先确定最外层有没有括号。",
          "括号里面要先完成。",
          "但括号内部仍遵守乘除先于加减。",
          "所以先算126×4。"
        ],
        "view": {
          "title": "有括号不等于“从左往右”",
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
            "to": "nested",
            "effects": [
              {
                "type": "markObjective",
                "stage": "diagnostic_success"
              }
            ]
          },
          {
            "when": "sub",
            "to": "repairInside",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U4-BRACKET-03",
                "confidence": "high"
              }
            ]
          },
          {
            "when": "div",
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
      "repairInside": {
        "objectiveId": "O-U4-BRACKET-01",
        "hints": [
          "",
          "括号表示这部分先整体完成。",
          "不代表括号内部改成纯左到右。",
          "126×4是乘法。",
          "乘法先于600－。"
        ],
        "view": {
          "title": "括号里面也有自己的运算顺序",
          "prompt": "在600－126×4这个括号内部，应该先算哪类运算？",
          "choices": [
            [
              "mul",
              "乘法"
            ],
            [
              "sub",
              "减法"
            ]
          ]
        },
        "transitions": [
          {
            "when": "mul",
            "to": "nested",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-BRACKET-03"
              },
              {
                "type": "scheduleReview",
                "reason": "order-inside-parentheses"
              }
            ]
          }
        ]
      },
      "repairIgnore": {
        "objectiveId": "O-U4-BRACKET-01",
        "hints": [
          "",
          "括号把一部分变成一个整体。",
          "外面的运算要等这个整体有值。",
          "先求括号内结果。",
          "再用结果÷48。"
        ],
        "view": {
          "title": "只修“不能越过括号先算外面”",
          "prompt": "整个式子最后的÷48能不能先算？",
          "choices": [
            [
              "no",
              "不能，要先完成括号"
            ],
            [
              "yes",
              "能，除法优先"
            ]
          ]
        },
        "transitions": [
          {
            "when": "no",
            "to": "nested",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U4-BRACKET-01"
              },
              {
                "type": "scheduleReview",
                "reason": "parentheses-before-outside"
              }
            ]
          }
        ]
      },
      "nested": {
        "objectiveId": "O-U4-BRACKET-02",
        "hints": [
          "",
          "找最里面的括号。",
          "(81－56)在中括号内部。",
          "先把小括号算成25。",
          "再算中括号里的25×3，最后525÷。"
        ],
        "view": {
          "title": "小括号和中括号谁先",
          "prompt": "525÷[(81－56)×3]，第一步是哪一个？",
          "choices": [
            [
              "small",
              "81－56"
            ],
            [
              "times",
              "先×3"
            ],
            [
              "divide",
              "525÷"
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
            "when": "times",
            "to": "repairNested",
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
      "repairNested": {
        "objectiveId": "O-U4-BRACKET-02",
        "hints": [
          "",
          "看结构的包含关系。",
          "小括号在中括号内部。",
          "先得到最里面部分的值。",
          "再一层层向外。"
        ],
        "view": {
          "title": "嵌套括号要从内向外",
          "prompt": "同时有( )和[ ]时，教材规定怎样算？",
          "choices": [
            [
              "inside",
              "先小括号，再中括号，最后括号外"
            ],
            [
              "outer",
              "先中括号，再小括号"
            ]
          ]
        },
        "transitions": [
          {
            "when": "inside",
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
        "objectiveId": "O-U4-BRACKET-03",
        "hints": [
          "",
          "括号决定层级。",
          "运算规则决定每层内部的先后。",
          "两套规则同时存在。",
          "从内到外，每层内部再遵守乘除先于加减。"
        ],
        "view": {
          "title": "把括号规则说完整",
          "prompt": "哪一句最准确？",
          "choices": [
            [
              "rule",
              "先小括号，再中括号，最后括号外；每个括号内部仍按正常运算顺序"
            ],
            [
              "simple",
              "只要看见括号，就把里面从左往右算"
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
                  "rule": "nested-bracket-order"
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
          "先处理括号。",
          "括号内先78÷13=6。",
          "20－6=14。",
          "58×14=812。"
        ],
        "view": {
          "title": "换一道教材式表达式独立算",
          "prompt": "58×(20－78÷13)的结果是多少？",
          "choices": [
            [
              "812",
              "812"
            ],
            [
              "2088",
              "2088"
            ],
            [
              "638",
              "638"
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
          }
        ]
      },
      "transfer": {
        "objectiveId": "O-U4-BRACKET-04",
        "hints": [
          "",
          "先最里面的小括号。",
          "78+35=113。",
          "中括号169－113=56。",
          "42×56=2352。"
        ],
        "view": {
          "title": "迁移到中括号嵌套",
          "prompt": "42×[169－(78＋35)]的结果是多少？",
          "choices": [
            [
              "2352",
              "2352"
            ],
            [
              "4704",
              "4704"
            ],
            [
              "3612",
              "3612"
            ]
          ]
        },
        "transitions": [
          {
            "when": "2352",
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
          "title": "括号不再是装饰符号",
          "prompt": "先看括号层级，再看每层内部的运算顺序：小括号→中括号→括号外；任何一层里仍遵守同级从左到右、乘除先于加减。",
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
      "badge": "数级表征正式课",
      "title": "读数、写数与零",
      "description": "先按四位一级组织大数，再用级末零与级内零规则读写。"
    },
    "objectives": {
      "group": "O-U5-READ-01",
      "zero": "O-U5-READ-02",
      "read": "O-U5-READ-03",
      "write": "O-U5-READ-04"
    },
    "misconceptions": {
      "ungrouped": "M-U5-READ-01",
      "readAllZero": "M-U5-READ-02",
      "skipBridgeZero": "M-U5-READ-03"
    },
    "meta": {
      "authoringStatus": "ready",
      "knowledgeType": "concept-representation",
      "sourcePages": "71-76",
      "sourceNote": "教材从右边起每四个数位分一级，使用万级/个级及亿级位值表；明确“每级末尾不管有几个0都不读，其他数位有一个0或连续几个0都只读一个零”，并用52395239、6004000、300800007等数组织读写和比较活动。"
    },
    "steps": {
      "diagnose": {
        "objectiveId": "O-U5-READ-01",
        "hints": [
          "",
          "我国整数数位按“级”组织。",
          "从右边个位开始数。",
          "每四个数位一级。",
          "5239属于个级，前面的5239属于万级。"
        ],
        "view": {
          "title": "先分级，再读数",
          "prompt": "52395239应该先怎样分组？",
          "choices": [
            [
              "groups",
              "5239｜5239（万级｜个级）"
            ],
            [
              "three",
              "52｜395｜239"
            ],
            [
              "none",
              "不分级直接逐位读"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "52395239",
            "label": "52395239按万级和个级每四位分组"
          }
        },
        "transitions": [
          {
            "when": "groups",
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
          },
          {
            "when": "none",
            "to": "repairGroup",
            "lane": "repair",
            "effects": [
              {
                "type": "markMisconception",
                "id": "M-U5-READ-01",
                "confidence": "medium"
              }
            ]
          }
        ]
      },
      "repairGroup": {
        "objectiveId": "O-U5-READ-01",
        "hints": [
          "",
          "看教材整数数位顺序表。",
          "个、十、百、千组成个级。",
          "再往左四位组成万级。",
          "所以从右向左每四位一级。"
        ],
        "view": {
          "title": "只修“四位一级”",
          "prompt": "从个位起，每多少个数位分一级？",
          "choices": [
            [
              "four",
              "4位"
            ],
            [
              "three",
              "3位"
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
          "先分别读万级和个级。",
          "每级末尾的0不读。",
          "万级600读“六百万”。",
          "个级4000读“四千”，合起来“六百万四千”。"
        ],
        "view": {
          "title": "级末尾的零为什么不读",
          "prompt": "6004000按级写成600｜4000。正确读法是哪一个？",
          "choices": [
            [
              "correct",
              "六百万四千"
            ],
            [
              "all",
              "六百零零万四千"
            ],
            [
              "bridge",
              "六百万零四千"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "6004000",
            "label": "6004000按万级和个级分组，观察每级末尾的零"
          }
        },
        "transitions": [
          {
            "when": "correct",
            "to": "crossZero",
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
          "区分“级末尾”和“级内”。",
          "级末尾的0只是占位。",
          "教材明确说级末尾几个0都不读。",
          "所以不要逐位念零。"
        ],
        "view": {
          "title": "零不是看见一个就读一个",
          "prompt": "教材对“每级末尾的0”怎么规定？",
          "choices": [
            [
              "silent",
              "不管有几个都不读"
            ],
            [
              "all",
              "每个0都读"
            ]
          ]
        },
        "transitions": [
          {
            "when": "silent",
            "to": "crossZero",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-READ-02"
              },
              {
                "type": "scheduleReview",
                "reason": "group-ending-zero"
              }
            ]
          }
        ]
      },
      "crossZero": {
        "objectiveId": "O-U5-READ-02",
        "hints": [
          "",
          "先分成3｜0080｜0007。",
          "每一级按个级读法处理，再加“亿”“万”。",
          "级内缺位造成的一个或连续多个0只读一个“零”。",
          "所以读“三亿零八十万零七”。"
        ],
        "view": {
          "title": "级内连续零只读一个",
          "prompt": "300800007正确读法是哪一个？",
          "choices": [
            [
              "correct",
              "三亿零八十万零七"
            ],
            [
              "skip",
              "三亿八十万七"
            ],
            [
              "many",
              "三亿零零八十万零零零七"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "300800007",
            "label": "300800007按亿级万级个级分组，观察跨级缺位零"
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
            "when": "skip",
            "to": "repairBridge",
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
      "repairBridge": {
        "objectiveId": "O-U5-READ-02",
        "hints": [
          "",
          "这些0不全在每级末尾。",
          "它们出现在本级有效数字之前。",
          "连续多个0也只读一个零。",
          "因此需要“三亿零八十万零七”。"
        ],
        "view": {
          "title": "只修“跨级缺位不能直接跳过”",
          "prompt": "3｜0080｜0007中，万级开头和个级开头缺位时应该怎样读？",
          "choices": [
            [
              "oneZero",
              "需要用一个“零”连接缺位"
            ],
            [
              "skip",
              "全部跳过"
            ]
          ]
        },
        "transitions": [
          {
            "when": "oneZero",
            "to": "formalize",
            "effects": [
              {
                "type": "resolveMisconception",
                "id": "M-U5-READ-03"
              },
              {
                "type": "scheduleReview",
                "reason": "internal-zero-reading"
              }
            ]
          }
        ]
      },
      "formalize": {
        "objectiveId": "O-U5-READ-03",
        "hints": [
          "",
          "先结构，再语音。",
          "四位一级决定哪里添“万”“亿”。",
          "零规则在每一级内部处理。",
          "最后按从高到低的级连接。"
        ],
        "view": {
          "title": "把大数读法整理成步骤",
          "prompt": "哪套流程最可靠？",
          "choices": [
            [
              "rule",
              "从右四位一级→从最高级读→每级按个级读法→添万/亿→级末0不读，其他连续0只读一个"
            ],
            [
              "digit",
              "从最高位开始逐位念数字和0"
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
          "分成2｜0060｜0000。",
          "亿级读二亿。",
          "万级0060读零六十万。",
          "个级全0不读，所以二亿零六十万。"
        ],
        "view": {
          "title": "换一个跨级零的新数独立读",
          "prompt": "200600000正确读法是哪一个？",
          "choices": [
            [
              "correct",
              "二亿零六十万"
            ],
            [
              "skip",
              "二亿六十万"
            ],
            [
              "many",
              "二亿零零六十万"
            ]
          ],
          "renderer": "placeValueGroups",
          "rendererArgs": {
            "value": "200600000",
            "label": "200600000按亿级万级个级分组"
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
          "先按亿级、万级、个级分别填。",
          "六亿→6｜____｜____。",
          "四十二万→0042放在万级；五千→5000放在个级。",
          "合起来6｜0042｜5000=600425000。"
        ],
        "view": {
          "title": "迁移到“听读法写数”",
          "prompt": "“六亿零四十二万五千”写成数字是哪一个？",
          "choices": [
            [
              "600425000",
              "600425000"
            ],
            [
              "604205000",
              "604205000"
            ],
            [
              "600420500",
              "600420500"
            ]
          ]
        },
        "transitions": [
          {
            "when": "600425000",
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
          "title": "大数读写已经有“骨架”了",
          "prompt": "先四位一级，再按级读写；级末尾的0不读，级内一个或连续多个0只读一个。写数时也按亿级、万级、个级逐级补足四位。",
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
  }
};
