function(_, E, e) {
    "use strict";

    function o(_, E, e) {
        return E in _ ? Object.defineProperty(_, E, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _[E] = e, _
    }
    e.r(E), e.d(E, {
        _private: function() {
            return D
        }
    });
    var t, I, a, r, R, A, T, n, N, i, c, O, L = e("40746")._private.Themes,
        D = {
            Shadows: {
                SHADOW_BORDER: (o(t = {}, L.DARK, {
                    boxShadow: "0 0 0 1px hsl(0 0% 100% / 0.08)",
                    filter: "drop-shadow(0 0 1px hsl(0 0% 100% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#ffffff",
                        shadowOpacity: .08,
                        shadowRadius: 1,
                        elevation: 0,
                        shadowColorAndroid: "#ffffff"
                    }
                }), o(t, L.LIGHT, {
                    boxShadow: "0 0 0 1px hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 0 1px hsl(0 0% 0% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .08,
                        shadowRadius: 1,
                        elevation: 0,
                        shadowColorAndroid: "#000000"
                    }
                }), o(t, L.MIDNIGHT, {
                    boxShadow: "0 0 0 1px hsl(0 0% 100% / 0.08)",
                    filter: "drop-shadow(0 0 1px hsl(0 0% 100% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#ffffff",
                        shadowOpacity: .08,
                        shadowRadius: 1,
                        elevation: 0,
                        shadowColorAndroid: "#ffffff"
                    }
                }), o(t, L.DARKER, {
                    boxShadow: "0 0 0 1px hsl(0 0% 100% / 0.08)",
                    filter: "drop-shadow(0 0 1px hsl(0 0% 100% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#ffffff",
                        shadowOpacity: .08,
                        shadowRadius: 1,
                        elevation: 0,
                        shadowColorAndroid: "#ffffff"
                    }
                }), t),
                SHADOW_BUTTON_OVERLAY: (o(I = {}, L.DARK, {
                    boxShadow: "0 12px 24px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 12px 24px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 24,
                        elevation: 20,
                        shadowColorAndroid: "#000000"
                    }
                }), o(I, L.LIGHT, {
                    boxShadow: "0 12px 24px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 12px 24px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 24,
                        elevation: 20,
                        shadowColorAndroid: "#000000"
                    }
                }), o(I, L.MIDNIGHT, {
                    boxShadow: "0 12px 24px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 12px 24px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 24,
                        elevation: 20,
                        shadowColorAndroid: "#000000"
                    }
                }), o(I, L.DARKER, {
                    boxShadow: "0 12px 24px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 12px 24px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 24,
                        elevation: 20,
                        shadowColorAndroid: "#000000"
                    }
                }), I),
                SHADOW_HIGH: (o(a = {}, L.DARK, {
                    boxShadow: "0 12px 24px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 12px 24px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 24,
                        elevation: 20,
                        shadowColorAndroid: "#000000"
                    }
                }), o(a, L.LIGHT, {
                    boxShadow: "0 12px 36px 0 hsl(0 0% 0% / 0.12)",
                    filter: "drop-shadow(0 12px 36px hsl(0 0% 0% / 0.12))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .12,
                        shadowRadius: 36,
                        elevation: 20,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(a, L.MIDNIGHT, {
                    boxShadow: "0 12px 24px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 12px 24px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 24,
                        elevation: 20,
                        shadowColorAndroid: "#000000"
                    }
                }), o(a, L.DARKER, {
                    boxShadow: "0 12px 24px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 12px 24px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 24,
                        elevation: 20,
                        shadowColorAndroid: "#000000"
                    }
                }), a),
                SHADOW_LEDGE: (o(r = {}, L.DARK, {
                    boxShadow: "0 2px 0 0 hsl(0 0% 0% / 0.05), 0 1.5px 0 0 hsl(0 0% 0% / 0.05), 0 1px 0 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 1.5px 0 hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 0,
                        elevation: 2,
                        shadowColorAndroid: "#000000"
                    }
                }), o(r, L.LIGHT, {
                    boxShadow: "0 2px 0 0 hsl(0 0% 0% / 0.025), 0 1.5px 0 0 hsl(0 0% 0% / 0.025), 0 1px 0 0 hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 1.5px 0 hsl(0 0% 0% / 0.12))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .12,
                        shadowRadius: 0,
                        elevation: 2,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(r, L.MIDNIGHT, {
                    boxShadow: "0 2px 0 0 hsl(0 0% 0% / 0.05), 0 1.5px 0 0 hsl(0 0% 0% / 0.05), 0 1px 0 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 1.5px 0 hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 0,
                        elevation: 2,
                        shadowColorAndroid: "#000000"
                    }
                }), o(r, L.DARKER, {
                    boxShadow: "0 2px 0 0 hsl(0 0% 0% / 0.05), 0 1.5px 0 0 hsl(0 0% 0% / 0.05), 0 1px 0 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 1.5px 0 hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 0,
                        elevation: 2,
                        shadowColorAndroid: "#000000"
                    }
                }), r),
                SHADOW_LOW: (o(R = {}, L.DARK, {
                    boxShadow: "0 1px 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 1px 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), o(R, L.LIGHT, {
                    boxShadow: "0 1px 4px 0 hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 1px 4px hsl(0 0% 0% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .08,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(R, L.MIDNIGHT, {
                    boxShadow: "0 1px 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 1px 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), o(R, L.DARKER, {
                    boxShadow: "0 1px 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 1px 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), R),
                SHADOW_LOW_ACTIVE: (o(A = {}, L.DARK, {
                    boxShadow: "0 0 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 0 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 1,
                        shadowColorAndroid: "#000000"
                    }
                }), o(A, L.LIGHT, {
                    boxShadow: "0 0 4px 0 hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 0 4px hsl(0 0% 0% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .08,
                        shadowRadius: 4,
                        elevation: 1,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(A, L.MIDNIGHT, {
                    boxShadow: "0 0 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 0 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 1,
                        shadowColorAndroid: "#000000"
                    }
                }), o(A, L.DARKER, {
                    boxShadow: "0 0 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 0 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 1,
                        shadowColorAndroid: "#000000"
                    }
                }), A),
                SHADOW_LOW_HOVER: (o(T = {}, L.DARK, {
                    boxShadow: "0 4px 10px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 4px 10px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 10,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), o(T, L.LIGHT, {
                    boxShadow: "0 4px 8px 0 hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 4px 8px hsl(0 0% 0% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .08,
                        shadowRadius: 8,
                        elevation: 3,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(T, L.MIDNIGHT, {
                    boxShadow: "0 4px 10px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 4px 10px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 10,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), o(T, L.DARKER, {
                    boxShadow: "0 4px 10px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 4px 10px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 10,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), T),
                SHADOW_MEDIUM: (o(n = {}, L.DARK, {
                    boxShadow: "0 4px 8px 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 4px 8px hsl(0 0% 0% / 0.16))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .16,
                        shadowRadius: 8,
                        elevation: 5,
                        shadowColorAndroid: "#000000"
                    }
                }), o(n, L.LIGHT, {
                    boxShadow: "0 4px 8px 0 hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 4px 8px hsl(0 0% 0% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .08,
                        shadowRadius: 8,
                        elevation: 5,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(n, L.MIDNIGHT, {
                    boxShadow: "0 4px 8px 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 4px 8px hsl(0 0% 0% / 0.16))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .16,
                        shadowRadius: 8,
                        elevation: 5,
                        shadowColorAndroid: "#000000"
                    }
                }), o(n, L.DARKER, {
                    boxShadow: "0 4px 8px 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 4px 8px hsl(0 0% 0% / 0.16))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .16,
                        shadowRadius: 8,
                        elevation: 5,
                        shadowColorAndroid: "#000000"
                    }
                }), n),
                SHADOW_MOBILE_NAVIGATOR_X: (o(N = {}, L.DARK, {
                    boxShadow: "0 0 10px 0 hsl(0 0% 0% / 0.22)",
                    filter: "drop-shadow(0 0 10px hsl(0 0% 0% / 0.22))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .22,
                        shadowRadius: 10,
                        elevation: 0,
                        shadowColorAndroid: "#000000"
                    }
                }), o(N, L.LIGHT, {
                    boxShadow: "0 0 9px 0 hsl(0 0% 0% / 0.13)",
                    filter: "drop-shadow(0 0 9px hsl(0 0% 0% / 0.13))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .13,
                        shadowRadius: 9,
                        elevation: 0,
                        shadowColorAndroid: "#000000"
                    }
                }), o(N, L.MIDNIGHT, {
                    boxShadow: "0 0 10px 0 hsl(0 0% 0% / 0.22)",
                    filter: "drop-shadow(0 0 10px hsl(0 0% 0% / 0.22))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .22,
                        shadowRadius: 10,
                        elevation: 0,
                        shadowColorAndroid: "#000000"
                    }
                }), o(N, L.DARKER, {
                    boxShadow: "0 0 10px 0 hsl(0 0% 0% / 0.22)",
                    filter: "drop-shadow(0 0 10px hsl(0 0% 0% / 0.22))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: 0
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .22,
                        shadowRadius: 10,
                        elevation: 0,
                        shadowColorAndroid: "#000000"
                    }
                }), N),
                SHADOW_TOP_HIGH: (o(i = {}, L.DARK, {
                    boxShadow: "0 -12px 32px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 -12px 32px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 32,
                        elevation: 18,
                        shadowColorAndroid: "#000000"
                    }
                }), o(i, L.LIGHT, {
                    boxShadow: "0 -12px 36px 0 hsl(0 0% 0% / 0.12)",
                    filter: "drop-shadow(0 -12px 36px hsl(0 0% 0% / 0.12))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .12,
                        shadowRadius: 36,
                        elevation: 18,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(i, L.MIDNIGHT, {
                    boxShadow: "0 -12px 32px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 -12px 32px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 32,
                        elevation: 18,
                        shadowColorAndroid: "#000000"
                    }
                }), o(i, L.DARKER, {
                    boxShadow: "0 -12px 32px 0 hsl(0 0% 0% / 0.24)",
                    filter: "drop-shadow(0 -12px 32px hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -12
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 32,
                        elevation: 18,
                        shadowColorAndroid: "#000000"
                    }
                }), i),
                SHADOW_TOP_LEDGE: (o(c = {}, L.DARK, {
                    boxShadow: "0 -2px 0 0 hsl(0 0% 0% / 0.05), 0 -1.5px 0 0 hsl(0 0% 0% / 0.05), 0 -1px 0 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 -1.5px 0 hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 0,
                        elevation: 1,
                        shadowColorAndroid: "#000000"
                    }
                }), o(c, L.LIGHT, {
                    boxShadow: "0 -2px 0 0 hsl(0 0% 0% / 0.025), 0 -1.5px 0 0 hsl(0 0% 0% / 0.025), 0 -1px 0 0 hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 -1.5px 0 hsl(0 0% 0% / 0.12))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .12,
                        shadowRadius: 0,
                        elevation: 1,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(c, L.MIDNIGHT, {
                    boxShadow: "0 -2px 0 0 hsl(0 0% 0% / 0.05), 0 -1.5px 0 0 hsl(0 0% 0% / 0.05), 0 -1px 0 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 -1.5px 0 hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 0,
                        elevation: 1,
                        shadowColorAndroid: "#000000"
                    }
                }), o(c, L.DARKER, {
                    boxShadow: "0 -2px 0 0 hsl(0 0% 0% / 0.05), 0 -1.5px 0 0 hsl(0 0% 0% / 0.05), 0 -1px 0 0 hsl(0 0% 0% / 0.16)",
                    filter: "drop-shadow(0 -1.5px 0 hsl(0 0% 0% / 0.24))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1.5
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .24,
                        shadowRadius: 0,
                        elevation: 1,
                        shadowColorAndroid: "#000000"
                    }
                }), c),
                SHADOW_TOP_LOW: (o(O = {}, L.DARK, {
                    boxShadow: "0 -1px 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 -1px 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), o(O, L.LIGHT, {
                    boxShadow: "0 -1px 4px 0 hsl(0 0% 0% / 0.08)",
                    filter: "drop-shadow(0 -1px 4px hsl(0 0% 0% / 0.08))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .08,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#a5abb3"
                    }
                }), o(O, L.MIDNIGHT, {
                    boxShadow: "0 -1px 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 -1px 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), o(O, L.DARKER, {
                    boxShadow: "0 -1px 4px 0 hsl(0 0% 0% / 0.14)",
                    filter: "drop-shadow(0 -1px 4px hsl(0 0% 0% / 0.14))",
                    nativeStyles: {
                        shadowOffset: {
                            width: 0,
                            height: -1
                        },
                        shadowColor: "#000000",
                        shadowOpacity: .14,
                        shadowRadius: 4,
                        elevation: 3,
                        shadowColorAndroid: "#000000"
                    }
                }), O)
            }
        }
}