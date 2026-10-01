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
  }
};
