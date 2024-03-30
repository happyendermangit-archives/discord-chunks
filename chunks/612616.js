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
            return tA
        }
    });
    var t, I, a, r, R, A, T, n, N, i, c, O, L, D, S, C, l, s, P, u, M, U, G, d, p, B, g, f, H, h, y, Y, b, w, m, K, V, v, F, W, k, x, X, Q, J, Z, j, z, q, $, __, _E, _e, _o, _t, _I, _a, _r, _R, _A, _T, _n, _N, _i, _c, _O, _L, _D, _S, _C, _l, _s, _P, _u, _M, _U, _G, _d, _p, _B, _g, _f, _H, _h, _y, _Y, _b, _w, _m, _K, _V, _v, _F, _W, _k, _x, _X, _Q, _J, _Z, _j, _z, _q, _$, _0, _1, _3, _5, _2, _6, _4, _8, _7, _9, E_, EE, Ee, Eo, Et, EI, Ea, Er, ER, EA, ET, En, EN, Ei, Ec, EO, EL, ED, ES, EC, El, Es, EP, Eu, EM, EU, EG, Ed, Ep, EB, Eg, Ef, EH, Eh, Ey, EY, Eb, Ew, Em, EK, EV, Ev, EF, EW, Ek, Ex, EX, EQ, EJ, EZ, Ej, Ez, Eq, E$, E0, E1, E3, E5, E2, E6, E4, E8, E7, E9, e_, eE, ee, eo, et, eI, ea, er, eR, eA, eT, en, eN, ei, ec, eO, eL, eD, eS, eC, el, es, eP, eu, eM, eU, eG, ed, ep, eB, eg, ef, eH, eh, ey, eY, eb, ew, em, eK, eV, ev, eF, eW, ek, ex, eX, eQ, eJ, eZ, ej, ez, eq, e$, e0, e1, e3, e5, e2, e6, e4, e8, e7, e9, o_, oE, oe, oo, ot, oI, oa, or, oR, oA, oT, on, oN, oi, oc, oO, oL, oD, oS, oC, ol, os, oP, ou, oM, oU, oG, od, op, oB, og, of, oH, oh, oy, oY, ob, ow, om, oK, oV, ov, oF, oW, ok, ox, oX, oQ, oJ, oZ, oj, oz, oq, o$, o0, o1, o3, o5, o2, o6, o4, o8, o7, o9, t_, tE, te, to, tt, tI, ta, tr = e("40746")._private.Themes,
        tR = {
            ACTION_SHEET_GRADIENT_BG: (o(t = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(t, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(t, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(t, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(t, "gradient", {
                light: {
                    color: "gradient.mid",
                    lightness: .925,
                    saturation: "*0.8"
                },
                dark: {
                    color: "gradient.mid",
                    lightness: .12,
                    saturation: "*0.5"
                }
            }), t),
            ACTIVITY_CARD_BACKGROUND: (o(I = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(I, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(I, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(I, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: 1
            }), I),
            ACTIVITY_CARD_ICON_OVERLAY: (o(a = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: .85
            }), o(a, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: .85
            }), o(a, tr.MIDNIGHT, {
                raw: "PRIMARY_600",
                opacity: .85
            }), o(a, tr.DARKER, {
                raw: "PRIMARY_600",
                opacity: .85
            }), a),
            ALERT_BG: (o(r = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(r, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(r, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(r, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), r),
            ANDROID_NAVIGATION_BAR_BACKGROUND: (o(R = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_830",
                opacity: 1
            }), o(R, tr.LIGHT, {
                raw: "PRIMARY_100",
                opacity: 1
            }), o(R, tr.MIDNIGHT, {
                raw: "PLUM_24",
                opacity: 1
            }), o(R, tr.DARKER, {
                raw: "PLUM_24",
                opacity: 1
            }), R),
            ANDROID_NAVIGATION_SCRIM_BACKGROUND: (o(A = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_830",
                opacity: .5
            }), o(A, tr.LIGHT, {
                raw: "PRIMARY_100",
                opacity: .5
            }), o(A, tr.MIDNIGHT, {
                raw: "PLUM_24",
                opacity: .5
            }), o(A, tr.DARKER, {
                raw: "PLUM_24",
                opacity: .5
            }), A),
            ANDROID_RIPPLE: (o(T = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .07
            }), o(T, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .12
            }), o(T, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: .07
            }), o(T, tr.DARKER, {
                raw: "WHITE_500",
                opacity: .07
            }), T),
            BACKGROUND_ACCENT: (o(n = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(n, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(n, tr.MIDNIGHT, {
                raw: "PLUM_17",
                opacity: 1
            }), o(n, tr.DARKER, {
                raw: "PLUM_15",
                opacity: 1
            }), o(n, "gradient", {
                light: {
                    color: "gradient.mid",
                    opacity: .4,
                    lightness: "*0.75"
                },
                dark: {
                    color: "gradient.mid",
                    opacity: .3,
                    lightness: .75,
                    saturation: "*1.2"
                }
            }), n),
            BACKGROUND_FLOATING: (o(N = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_800",
                opacity: 1
            }), o(N, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(N, tr.MIDNIGHT, {
                raw: "PLUM_23",
                opacity: 1
            }), o(N, tr.DARKER, {
                raw: "PLUM_18",
                opacity: 1
            }), N),
            BACKGROUND_MENTIONED: (o(i = {
                category: "background"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: .1
            }), o(i, tr.LIGHT, {
                raw: "YELLOW_300",
                opacity: .1
            }), o(i, tr.MIDNIGHT, {
                raw: "YELLOW_260",
                opacity: .08
            }), o(i, tr.DARKER, {
                raw: "YELLOW_260",
                opacity: .08
            }), i),
            BACKGROUND_MENTIONED_HOVER: (o(c = {
                category: "background"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: .08
            }), o(c, tr.LIGHT, {
                raw: "YELLOW_300",
                opacity: .2
            }), o(c, tr.MIDNIGHT, {
                raw: "YELLOW_300",
                opacity: .08
            }), o(c, tr.DARKER, {
                raw: "YELLOW_300",
                opacity: .08
            }), c),
            BACKGROUND_MESSAGE_AUTOMOD: (o(O = {
                category: "background"
            }, tr.DARK, {
                raw: "RED_400",
                opacity: .05
            }), o(O, tr.LIGHT, {
                raw: "RED_400",
                opacity: .05
            }), o(O, tr.MIDNIGHT, {
                raw: "RED_345",
                opacity: .08
            }), o(O, tr.DARKER, {
                raw: "RED_345",
                opacity: .08
            }), O),
            BACKGROUND_MESSAGE_AUTOMOD_HOVER: (o(L = {
                category: "background"
            }, tr.DARK, {
                raw: "RED_400",
                opacity: .1
            }), o(L, tr.LIGHT, {
                raw: "RED_400",
                opacity: .1
            }), o(L, tr.MIDNIGHT, {
                raw: "RED_400",
                opacity: .1
            }), o(L, tr.DARKER, {
                raw: "RED_400",
                opacity: .1
            }), L),
            BACKGROUND_MESSAGE_HIGHLIGHT: (o(D = {
                category: "background"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: .08
            }), o(D, tr.LIGHT, {
                raw: "BRAND_360",
                opacity: .1
            }), o(D, tr.MIDNIGHT, {
                raw: "BRAND_360",
                opacity: .08
            }), o(D, tr.DARKER, {
                raw: "BRAND_360",
                opacity: .08
            }), D),
            BACKGROUND_MESSAGE_HIGHLIGHT_HOVER: (o(S = {
                category: "background"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: .06
            }), o(S, tr.LIGHT, {
                raw: "BRAND_360",
                opacity: .2
            }), o(S, tr.MIDNIGHT, {
                raw: "BRAND_360",
                opacity: .06
            }), o(S, tr.DARKER, {
                raw: "BRAND_360",
                opacity: .06
            }), S),
            BACKGROUND_MESSAGE_HOVER: (o(C = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_900",
                opacity: .06
            }), o(C, tr.LIGHT, {
                raw: "PRIMARY_900",
                opacity: .03
            }), o(C, tr.MIDNIGHT, {
                raw: "PLUM_21",
                opacity: 1
            }), o(C, tr.DARKER, {
                raw: "PLUM_21",
                opacity: 1
            }), C),
            BACKGROUND_MOBILE_PRIMARY: (o(l = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(l, tr.LIGHT, {
                raw: "PRIMARY_100",
                opacity: 1
            }), o(l, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(l, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), l),
            BACKGROUND_MOBILE_SECONDARY: (o(s = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(s, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(s, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(s, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), s),
            BACKGROUND_MODIFIER_ACCENT: (o(P = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .48
            }), o(P, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .24
            }), o(P, tr.MIDNIGHT, {
                raw: "PLUM_23_ALPHA",
                opacity: .09
            }), o(P, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .12
            }), P),
            BACKGROUND_MODIFIER_ACCENT_2: (o(u = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .48
            }), o(u, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .16
            }), o(u, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .32
            }), o(u, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .24
            }), u),
            BACKGROUND_MODIFIER_ACTIVE: (o(M = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .48
            }), o(M, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .2
            }), o(M, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: .48
            }), o(M, tr.DARKER, {
                raw: "PLUM_13",
                opacity: .48
            }), M),
            BACKGROUND_MODIFIER_HOVER: (o(U = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .3
            }), o(U, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .16
            }), o(U, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: .3
            }), o(U, tr.DARKER, {
                raw: "PLUM_13",
                opacity: .3
            }), U),
            BACKGROUND_MODIFIER_SELECTED: (o(G = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .6
            }), o(G, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .24
            }), o(G, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: .6
            }), o(G, tr.DARKER, {
                raw: "PLUM_13",
                opacity: .6
            }), G),
            BACKGROUND_NESTED_FLOATING: (o(d = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(d, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(d, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(d, tr.DARKER, {
                raw: "PLUM_22",
                opacity: 1
            }), o(d, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .1
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), d),
            BACKGROUND_PRIMARY: (o(p = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(p, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(p, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(p, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(p, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .5
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .5
                }
            }), p),
            BACKGROUND_SECONDARY: (o(B = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(B, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(B, tr.MIDNIGHT, {
                raw: "PLUM_23",
                opacity: 1
            }), o(B, tr.DARKER, {
                raw: "PLUM_18",
                opacity: 1
            }), B),
            BACKGROUND_SECONDARY_ALT: (o(g = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(g, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(g, tr.MIDNIGHT, {
                raw: "PLUM_17",
                opacity: 1
            }), o(g, tr.DARKER, {
                raw: "PLUM_15",
                opacity: 1
            }), o(g, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .5
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .5
                }
            }), g),
            BACKGROUND_TERTIARY: (o(f = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(f, tr.LIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(f, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: 1
            }), o(f, tr.DARKER, {
                raw: "PLUM_16",
                opacity: 1
            }), f),
            BG_BACKDROP: (o(H = {
                category: "background"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .7
            }), o(H, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .54
            }), o(H, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: .75
            }), o(H, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .7
            }), o(H, "gradient", {
                light: {
                    color: "gradient.start",
                    saturation: .2,
                    lightness: .3,
                    opacity: .7
                },
                dark: {
                    color: "gradient.start",
                    saturation: .25,
                    lightness: .1,
                    opacity: .7
                }
            }), H),
            BG_BACKDROP_NO_OPACITY: (o(h = {
                category: "background"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: 1
            }), o(h, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(h, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: 1
            }), o(h, tr.DARKER, {
                raw: "BLACK_500",
                opacity: 1
            }), h),
            BG_BASE_PRIMARY: (o(y = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(y, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(y, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(y, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(y, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .8
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .7
                }
            }), y),
            BG_BASE_SECONDARY: (o(Y = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(Y, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(Y, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(Y, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(Y, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .8
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .7
                }
            }), Y),
            BG_BASE_TERTIARY: (o(b = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(b, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(b, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(b, tr.DARKER, {
                raw: "PLUM_23",
                opacity: 1
            }), o(b, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .8
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .7
                }
            }), b),
            BG_BRAND: (o(w = {
                category: "background"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 1
            }), o(w, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(w, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(w, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 1
            }), w),
            BG_MOD_FAINT: (o(m = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .3
            }), o(m, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .08
            }), o(m, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .08
            }), o(m, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .12
            }), o(m, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .05
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .05
                }
            }), m),
            BG_MOD_STRONG: (o(K = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .54
            }), o(K, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .24
            }), o(K, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .18
            }), o(K, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .24
            }), o(K, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .1
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), K),
            BG_MOD_SUBTLE: (o(V = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .48
            }), o(V, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .16
            }), o(V, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .12
            }), o(V, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .16
            }), o(V, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .075
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .075
                }
            }), V),
            BG_SURFACE_OVERLAY: (o(v = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_800",
                opacity: 1
            }), o(v, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(v, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: 1
            }), o(v, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), o(v, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .5
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .5
                }
            }), v),
            BG_SURFACE_OVERLAY_TMP: (o(F = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_800",
                opacity: 1
            }), o(F, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(F, tr.MIDNIGHT, {
                raw: "PLUM_21",
                opacity: 1
            }), o(F, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), o(F, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .5
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .5
                }
            }), F),
            BG_SURFACE_RAISED: (o(W = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(W, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(W, tr.MIDNIGHT, {
                raw: "PLUM_23",
                opacity: 1
            }), o(W, tr.DARKER, {
                raw: "PLUM_18",
                opacity: 1
            }), o(W, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .5
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .5
                }
            }), W),
            BLACK: (o(k = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: 1
            }), o(k, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(k, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(k, tr.DARKER, {
                raw: "BLACK_500",
                opacity: 1
            }), k),
            BLUR_FALLBACK: (o(x = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: .96
            }), o(x, tr.LIGHT, {
                raw: "PRIMARY_530",
                opacity: .96
            }), o(x, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: .96
            }), o(x, tr.DARKER, {
                raw: "PLUM_17",
                opacity: .96
            }), x),
            BLUR_FALLBACK_PRESSED: (o(X = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_730",
                opacity: .96
            }), o(X, tr.LIGHT, {
                raw: "PRIMARY_560",
                opacity: .96
            }), o(X, tr.MIDNIGHT, {
                raw: "PLUM_20",
                opacity: .96
            }), o(X, tr.DARKER, {
                raw: "PLUM_18",
                opacity: .96
            }), X),
            BORDER_FAINT: (o(Q = {
                category: "border"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .03
            }), o(Q, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .04
            }), o(Q, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .06
            }), o(Q, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .06
            }), Q),
            BORDER_STRONG: (o(J = {
                category: "border"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .16
            }), o(J, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .16
            }), o(J, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .24
            }), o(J, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .22
            }), J),
            BORDER_SUBTLE: (o(Z = {
                category: "border"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .08
            }), o(Z, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(Z, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .12
            }), o(Z, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .12
            }), Z),
            BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND: (o(j = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_800",
                opacity: .6
            }), o(j, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .6
            }), o(j, tr.MIDNIGHT, {
                raw: "PLUM_23",
                opacity: .6
            }), o(j, tr.DARKER, {
                raw: "PLUM_23",
                opacity: .6
            }), j),
            BUTTON_CREATOR_REVENUE_BACKGROUND: (o(z = {
                category: "generic"
            }, tr.DARK, {
                raw: "TEAL_430",
                opacity: 1
            }), o(z, tr.LIGHT, {
                raw: "TEAL_430",
                opacity: 1
            }), o(z, tr.MIDNIGHT, {
                raw: "TEAL_430",
                opacity: 1
            }), o(z, tr.DARKER, {
                raw: "TEAL_430",
                opacity: 1
            }), z),
            BUTTON_DANGER_BACKGROUND: (o(q = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(q, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(q, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(q, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), q),
            BUTTON_DANGER_BACKGROUND_ACTIVE: (o($ = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_530",
                opacity: 1
            }), o($, tr.LIGHT, {
                raw: "RED_530",
                opacity: 1
            }), o($, tr.MIDNIGHT, {
                raw: "RED_530",
                opacity: 1
            }), o($, tr.DARKER, {
                raw: "RED_530",
                opacity: 1
            }), $),
            BUTTON_DANGER_BACKGROUND_DISABLED: (o(__ = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(__, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(__, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(__, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), __),
            BUTTON_DANGER_BACKGROUND_HOVER: (o(_E = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_500",
                opacity: 1
            }), o(_E, tr.LIGHT, {
                raw: "RED_500",
                opacity: 1
            }), o(_E, tr.MIDNIGHT, {
                raw: "RED_500",
                opacity: 1
            }), o(_E, tr.DARKER, {
                raw: "RED_500",
                opacity: 1
            }), _E),
            BUTTON_OUTLINE_BRAND_BACKGROUND: (o(_e = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_e, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_e, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_e, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 0
            }), _e),
            BUTTON_OUTLINE_BRAND_BACKGROUND_ACTIVE: (o(_o = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_560",
                opacity: 1
            }), o(_o, tr.LIGHT, {
                raw: "BRAND_560",
                opacity: 1
            }), o(_o, tr.MIDNIGHT, {
                raw: "BRAND_560",
                opacity: 1
            }), o(_o, tr.DARKER, {
                raw: "BRAND_560",
                opacity: 1
            }), _o),
            BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER: (o(_t = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_t, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_t, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_t, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 1
            }), _t),
            BUTTON_OUTLINE_BRAND_BORDER: (o(_I = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_I, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_I, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_I, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 1
            }), _I),
            BUTTON_OUTLINE_BRAND_BORDER_ACTIVE: (o(_a = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_560",
                opacity: 1
            }), o(_a, tr.LIGHT, {
                raw: "BRAND_560",
                opacity: 1
            }), o(_a, tr.MIDNIGHT, {
                raw: "BRAND_560",
                opacity: 1
            }), o(_a, tr.DARKER, {
                raw: "BRAND_560",
                opacity: 1
            }), _a),
            BUTTON_OUTLINE_BRAND_BORDER_HOVER: (o(_r = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_r, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_r, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(_r, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 1
            }), _r),
            BUTTON_OUTLINE_BRAND_TEXT: (o(_R = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_R, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(_R, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_R, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _R),
            BUTTON_OUTLINE_BRAND_TEXT_ACTIVE: (o(_A = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_A, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_A, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_A, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _A),
            BUTTON_OUTLINE_BRAND_TEXT_HOVER: (o(_T = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_T, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_T, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_T, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _T),
            BUTTON_OUTLINE_DANGER_BACKGROUND: (o(_n = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_n, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_n, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_n, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 0
            }), _n),
            BUTTON_OUTLINE_DANGER_BACKGROUND_ACTIVE: (o(_N = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_460",
                opacity: 1
            }), o(_N, tr.LIGHT, {
                raw: "RED_460",
                opacity: 1
            }), o(_N, tr.MIDNIGHT, {
                raw: "RED_460",
                opacity: 1
            }), o(_N, tr.DARKER, {
                raw: "RED_460",
                opacity: 1
            }), _N),
            BUTTON_OUTLINE_DANGER_BACKGROUND_HOVER: (o(_i = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(_i, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(_i, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(_i, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), _i),
            BUTTON_OUTLINE_DANGER_BORDER: (o(_c = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_400",
                opacity: 1
            }), o(_c, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(_c, tr.MIDNIGHT, {
                raw: "RED_400",
                opacity: 1
            }), o(_c, tr.DARKER, {
                raw: "RED_400",
                opacity: 1
            }), _c),
            BUTTON_OUTLINE_DANGER_BORDER_ACTIVE: (o(_O = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(_O, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(_O, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(_O, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), _O),
            BUTTON_OUTLINE_DANGER_BORDER_HOVER: (o(_L = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(_L, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(_L, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(_L, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), _L),
            BUTTON_OUTLINE_DANGER_TEXT: (o(_D = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_D, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(_D, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_D, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _D),
            BUTTON_OUTLINE_DANGER_TEXT_ACTIVE: (o(_S = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_S, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_S, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_S, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _S),
            BUTTON_OUTLINE_DANGER_TEXT_HOVER: (o(_C = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_C, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_C, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_C, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _C),
            BUTTON_OUTLINE_POSITIVE_BACKGROUND: (o(_l = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_l, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_l, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_l, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 0
            }), _l),
            BUTTON_OUTLINE_POSITIVE_BACKGROUND_ACTIVE: (o(_s = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_s, tr.LIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_s, tr.MIDNIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_s, tr.DARKER, {
                raw: "GREEN_530",
                opacity: 1
            }), _s),
            BUTTON_OUTLINE_POSITIVE_BACKGROUND_HOVER: (o(_P = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_P, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_P, tr.MIDNIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_P, tr.DARKER, {
                raw: "GREEN_430",
                opacity: 1
            }), _P),
            BUTTON_OUTLINE_POSITIVE_BORDER: (o(_u = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: 1
            }), o(_u, tr.LIGHT, {
                raw: "GREEN_400",
                opacity: 1
            }), o(_u, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: 1
            }), o(_u, tr.DARKER, {
                raw: "GREEN_360",
                opacity: 1
            }), _u),
            BUTTON_OUTLINE_POSITIVE_BORDER_ACTIVE: (o(_M = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_M, tr.LIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_M, tr.MIDNIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_M, tr.DARKER, {
                raw: "GREEN_530",
                opacity: 1
            }), _M),
            BUTTON_OUTLINE_POSITIVE_BORDER_HOVER: (o(_U = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_U, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_U, tr.MIDNIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_U, tr.DARKER, {
                raw: "GREEN_430",
                opacity: 1
            }), _U),
            BUTTON_OUTLINE_POSITIVE_TEXT: (o(_G = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_G, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(_G, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_G, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _G),
            BUTTON_OUTLINE_POSITIVE_TEXT_ACTIVE: (o(_d = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_d, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_d, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_d, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _d),
            BUTTON_OUTLINE_POSITIVE_TEXT_HOVER: (o(_p = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_p, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_p, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_p, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _p),
            BUTTON_OUTLINE_PRIMARY_BACKGROUND: (o(_B = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_B, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_B, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 0
            }), o(_B, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 0
            }), _B),
            BUTTON_OUTLINE_PRIMARY_BACKGROUND_ACTIVE: (o(_g = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(_g, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(_g, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: 1
            }), o(_g, tr.DARKER, {
                raw: "PLUM_11",
                opacity: 1
            }), _g),
            BUTTON_OUTLINE_PRIMARY_BACKGROUND_HOVER: (o(_f = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(_f, tr.LIGHT, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(_f, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: 1
            }), o(_f, tr.DARKER, {
                raw: "PLUM_13",
                opacity: 1
            }), _f),
            BUTTON_OUTLINE_PRIMARY_BORDER: (o(_H = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(_H, tr.LIGHT, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(_H, tr.MIDNIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(_H, tr.DARKER, {
                raw: "PRIMARY_500",
                opacity: 1
            }), _H),
            BUTTON_OUTLINE_PRIMARY_BORDER_ACTIVE: (o(_h = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(_h, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(_h, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: 1
            }), o(_h, tr.DARKER, {
                raw: "PLUM_11",
                opacity: 1
            }), _h),
            BUTTON_OUTLINE_PRIMARY_BORDER_HOVER: (o(_y = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(_y, tr.LIGHT, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(_y, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: 1
            }), o(_y, tr.DARKER, {
                raw: "PLUM_13",
                opacity: 1
            }), _y),
            BUTTON_OUTLINE_PRIMARY_TEXT: (o(_Y = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_Y, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(_Y, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_Y, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _Y),
            BUTTON_OUTLINE_PRIMARY_TEXT_ACTIVE: (o(_b = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_b, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_b, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_b, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _b),
            BUTTON_OUTLINE_PRIMARY_TEXT_HOVER: (o(_w = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_w, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_w, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_w, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), _w),
            BUTTON_POSITIVE_BACKGROUND: (o(_m = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_m, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_m, tr.MIDNIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_m, tr.DARKER, {
                raw: "GREEN_430",
                opacity: 1
            }), _m),
            BUTTON_POSITIVE_BACKGROUND_ACTIVE: (o(_K = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_K, tr.LIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_K, tr.MIDNIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_K, tr.DARKER, {
                raw: "GREEN_530",
                opacity: 1
            }), _K),
            BUTTON_POSITIVE_BACKGROUND_DISABLED: (o(_V = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_V, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_V, tr.MIDNIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(_V, tr.DARKER, {
                raw: "GREEN_430",
                opacity: 1
            }), _V),
            BUTTON_POSITIVE_BACKGROUND_HOVER: (o(_v = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_500",
                opacity: 1
            }), o(_v, tr.LIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_v, tr.MIDNIGHT, {
                raw: "GREEN_530",
                opacity: 1
            }), o(_v, tr.DARKER, {
                raw: "GREEN_500",
                opacity: 1
            }), _v),
            BUTTON_SECONDARY_BACKGROUND: (o(_F = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(_F, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(_F, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: 1
            }), o(_F, tr.DARKER, {
                raw: "PLUM_13",
                opacity: 1
            }), _F),
            BUTTON_SECONDARY_BACKGROUND_ACTIVE: (o(_W = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(_W, tr.LIGHT, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(_W, tr.MIDNIGHT, {
                raw: "PLUM_10",
                opacity: 1
            }), o(_W, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), _W),
            BUTTON_SECONDARY_BACKGROUND_DISABLED: (o(_k = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(_k, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(_k, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: 1
            }), o(_k, tr.DARKER, {
                raw: "PLUM_13",
                opacity: 1
            }), _k),
            BUTTON_SECONDARY_BACKGROUND_HOVER: (o(_x = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(_x, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(_x, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: 1
            }), o(_x, tr.DARKER, {
                raw: "PLUM_11",
                opacity: 1
            }), _x),
            CARD_GRADIENT_BG: (o(_X = {
                category: "background"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .4
            }), o(_X, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .7
            }), o(_X, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .4
            }), o(_X, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .4
            }), _X),
            CARD_GRADIENT_PRESSED_BG: (o(_Q = {
                category: "background"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .5
            }), o(_Q, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .5
            }), o(_Q, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .5
            }), o(_Q, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .5
            }), _Q),
            CARD_PRIMARY_BG: (o(_J = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(_J, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_J, tr.MIDNIGHT, {
                raw: "PLUM_23",
                opacity: 1
            }), o(_J, tr.DARKER, {
                raw: "PLUM_18",
                opacity: 1
            }), o(_J, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .75
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), _J),
            CARD_PRIMARY_PRESSED_BG: (o(_Z = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_645",
                opacity: 1
            }), o(_Z, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(_Z, tr.MIDNIGHT, {
                raw: "PLUM_25",
                opacity: 1
            }), o(_Z, tr.DARKER, {
                raw: "PLUM_19",
                opacity: 1
            }), o(_Z, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .075
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .05
                }
            }), _Z),
            CARD_SECONDARY_BG: (o(_j = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(_j, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_j, tr.MIDNIGHT, {
                raw: "PLUM_25",
                opacity: 1
            }), o(_j, tr.DARKER, {
                raw: "PLUM_19",
                opacity: 1
            }), o(_j, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .4
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), _j),
            CARD_SECONDARY_PRESSED_BG: (o(_z = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_645",
                opacity: 1
            }), o(_z, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(_z, tr.MIDNIGHT, {
                raw: "PLUM_26",
                opacity: 1
            }), o(_z, tr.DARKER, {
                raw: "PLUM_21",
                opacity: 1
            }), o(_z, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .75
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .05
                }
            }), _z),
            CHANNEL_ICON: (o(_q = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(_q, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(_q, tr.MIDNIGHT, {
                raw: "PLUM_10",
                opacity: 1
            }), o(_q, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), _q),
            CHANNEL_TEXT_AREA_PLACEHOLDER: (o(_$ = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(_$, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(_$, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: 1
            }), o(_$, tr.DARKER, {
                raw: "PLUM_11",
                opacity: 1
            }), _$),
            CHANNELS_DEFAULT: (o(_0 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(_0, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(_0, tr.MIDNIGHT, {
                raw: "PLUM_9",
                opacity: 1
            }), o(_0, tr.DARKER, {
                raw: "PLUM_9",
                opacity: 1
            }), _0),
            CHANNELTEXTAREA_BACKGROUND: (o(_1 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_560",
                opacity: 1
            }), o(_1, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(_1, tr.MIDNIGHT, {
                raw: "PLUM_23",
                opacity: 1
            }), o(_1, tr.DARKER, {
                raw: "PLUM_15",
                opacity: 1
            }), _1),
            CHAT_BACKGROUND: (o(_3 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(_3, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_3, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(_3, tr.DARKER, {
                raw: "PLUM_16",
                opacity: 1
            }), _3),
            CHAT_BANNER_BG: (o(_5 = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(_5, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(_5, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(_5, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(_5, "gradient", {
                light: {
                    color: "gradient.start"
                },
                dark: {
                    color: "gradient.start",
                    opacity: 1
                }
            }), _5),
            CHAT_BORDER: (o(_2 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(_2, tr.LIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(_2, tr.MIDNIGHT, {
                raw: "PLUM_20",
                opacity: 1
            }), o(_2, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), _2),
            CHAT_INPUT_CONTAINER_BACKGROUND: (o(_6 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(_6, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_6, tr.MIDNIGHT, {
                raw: "PLUM_16",
                opacity: 1
            }), o(_6, tr.DARKER, {
                raw: "PLUM_16",
                opacity: 1
            }), _6),
            CHAT_SWIPE_TO_REPLY_BACKGROUND: (o(_4 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(_4, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(_4, tr.MIDNIGHT, {
                raw: "PLUM_22",
                opacity: 1
            }), o(_4, tr.DARKER, {
                raw: "PLUM_22",
                opacity: 1
            }), _4),
            CHAT_SWIPE_TO_REPLY_GRADIENT_BACKGROUND: (o(_8 = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .1
            }), o(_8, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .4
            }), o(_8, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .1
            }), o(_8, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .1
            }), _8),
            COACHMARK_BG: (o(_7 = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_800",
                opacity: 1
            }), o(_7, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(_7, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: 1
            }), o(_7, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), _7),
            CONTEXT_MENU_BACKDROP_BACKGROUND: (o(_9 = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .7
            }), o(_9, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .54
            }), o(_9, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .7
            }), o(_9, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .7
            }), _9),
            CONTROL_BRAND_FOREGROUND: (o(E_ = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: 1
            }), o(E_, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(E_, tr.MIDNIGHT, {
                raw: "BRAND_360",
                opacity: 1
            }), o(E_, tr.DARKER, {
                raw: "BRAND_360",
                opacity: 1
            }), E_),
            CONTROL_BRAND_FOREGROUND_NEW: (o(EE = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: 1
            }), o(EE, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(EE, tr.MIDNIGHT, {
                raw: "BRAND_360",
                opacity: 1
            }), o(EE, tr.DARKER, {
                raw: "BRAND_360",
                opacity: 1
            }), EE),
            CREATOR_REVENUE_ICON_GRADIENT_END: (o(Ee = {
                category: "generic"
            }, tr.DARK, {
                raw: "TEAL_430",
                opacity: 1
            }), o(Ee, tr.LIGHT, {
                raw: "TEAL_400",
                opacity: 1
            }), o(Ee, tr.MIDNIGHT, {
                raw: "TEAL_430",
                opacity: 1
            }), o(Ee, tr.DARKER, {
                raw: "TEAL_430",
                opacity: 1
            }), Ee),
            CREATOR_REVENUE_ICON_GRADIENT_START: (o(Eo = {
                category: "generic"
            }, tr.DARK, {
                raw: "TEAL_360",
                opacity: 1
            }), o(Eo, tr.LIGHT, {
                raw: "TEAL_345",
                opacity: 1
            }), o(Eo, tr.MIDNIGHT, {
                raw: "TEAL_360",
                opacity: 1
            }), o(Eo, tr.DARKER, {
                raw: "TEAL_360",
                opacity: 1
            }), Eo),
            CREATOR_REVENUE_INFO_BOX_BACKGROUND: (o(Et = {
                category: "generic"
            }, tr.DARK, {
                raw: "TEAL_430",
                opacity: .1
            }), o(Et, tr.LIGHT, {
                raw: "TEAL_430",
                opacity: .1
            }), o(Et, tr.MIDNIGHT, {
                raw: "TEAL_430",
                opacity: .1
            }), o(Et, tr.DARKER, {
                raw: "TEAL_430",
                opacity: .1
            }), Et),
            CREATOR_REVENUE_INFO_BOX_BORDER: (o(EI = {
                category: "generic"
            }, tr.DARK, {
                raw: "TEAL_400",
                opacity: 1
            }), o(EI, tr.LIGHT, {
                raw: "TEAL_400",
                opacity: 1
            }), o(EI, tr.MIDNIGHT, {
                raw: "TEAL_400",
                opacity: 1
            }), o(EI, tr.DARKER, {
                raw: "TEAL_400",
                opacity: 1
            }), EI),
            CREATOR_REVENUE_LOCKED_CHANNEL_ICON: (o(Ea = {
                category: "generic"
            }, tr.DARK, {
                raw: "TEAL_345",
                opacity: 1
            }), o(Ea, tr.LIGHT, {
                raw: "TEAL_400",
                opacity: 1
            }), o(Ea, tr.MIDNIGHT, {
                raw: "TEAL_345",
                opacity: 1
            }), o(Ea, tr.DARKER, {
                raw: "TEAL_345",
                opacity: 1
            }), Ea),
            CREATOR_REVENUE_PROGRESS_BAR: (o(Er = {
                category: "generic"
            }, tr.DARK, {
                raw: "TEAL_400",
                opacity: 1
            }), o(Er, tr.LIGHT, {
                raw: "TEAL_345",
                opacity: 1
            }), o(Er, tr.MIDNIGHT, {
                raw: "TEAL_400",
                opacity: 1
            }), o(Er, tr.DARKER, {
                raw: "TEAL_400",
                opacity: 1
            }), Er),
            DEPRECATED_CARD_BG: (o(ER = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: .6
            }), o(ER, tr.LIGHT, {
                raw: "PRIMARY_100",
                opacity: 1
            }), o(ER, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: .6
            }), o(ER, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: .6
            }), ER),
            DEPRECATED_CARD_EDITABLE_BG: (o(EA = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: .3
            }), o(EA, tr.LIGHT, {
                raw: "PRIMARY_100",
                opacity: .6
            }), o(EA, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: .3
            }), o(EA, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: .3
            }), EA),
            DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND: (o(ET = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(ET, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ET, tr.MIDNIGHT, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(ET, tr.DARKER, {
                raw: "PRIMARY_400",
                opacity: 1
            }), ET),
            DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER: (o(En = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .3
            }), o(En, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: .3
            }), o(En, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: .3
            }), o(En, tr.DARKER, {
                raw: "WHITE_500",
                opacity: .3
            }), En),
            DEPRECATED_STORE_BG: (o(EN = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(EN, tr.LIGHT, {
                raw: "PRIMARY_100",
                opacity: 1
            }), o(EN, tr.MIDNIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(EN, tr.DARKER, {
                raw: "PRIMARY_600",
                opacity: 1
            }), EN),
            DEPRECATED_TEXT_INPUT_BG: (o(Ei = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(Ei, tr.LIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(Ei, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(Ei, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: 1
            }), Ei),
            DEPRECATED_TEXT_INPUT_BORDER: (o(Ec = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .3
            }), o(Ec, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: .3
            }), o(Ec, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .3
            }), o(Ec, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .3
            }), Ec),
            DEPRECATED_TEXT_INPUT_BORDER_DISABLED: (o(EO = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(EO, tr.LIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(EO, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(EO, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: 1
            }), EO),
            DEPRECATED_TEXT_INPUT_BORDER_HOVER: (o(EL = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_900",
                opacity: 1
            }), o(EL, tr.LIGHT, {
                raw: "PRIMARY_300",
                opacity: 1
            }), o(EL, tr.MIDNIGHT, {
                raw: "PRIMARY_900",
                opacity: 1
            }), o(EL, tr.DARKER, {
                raw: "PRIMARY_900",
                opacity: 1
            }), EL),
            DEPRECATED_TEXT_INPUT_PREFIX: (o(ED = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(ED, tr.LIGHT, {
                raw: "PRIMARY_300",
                opacity: 1
            }), o(ED, tr.MIDNIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(ED, tr.DARKER, {
                raw: "PRIMARY_200",
                opacity: 1
            }), ED),
            DISPLAY_BANNER_OVERFLOW_BACKGROUND: (o(ES = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: .5
            }), o(ES, tr.LIGHT, {
                raw: "WHITE_200",
                opacity: .5
            }), o(ES, tr.MIDNIGHT, {
                raw: "PLUM_20",
                opacity: .5
            }), o(ES, tr.DARKER, {
                raw: "PLUM_20",
                opacity: .5
            }), ES),
            DIVIDER_STRONG: (o(EC = {
                category: "border"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .16
            }), o(EC, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .16
            }), o(EC, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .24
            }), o(EC, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .22
            }), EC),
            DIVIDER_SUBTLE: (o(El = {
                category: "border"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .08
            }), o(El, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(El, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .12
            }), o(El, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .12
            }), El),
            EMBED_BACKGROUND: (o(Es = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(Es, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(Es, tr.MIDNIGHT, {
                raw: "PLUM_23",
                opacity: 1
            }), o(Es, tr.DARKER, {
                raw: "PLUM_18",
                opacity: 1
            }), o(Es, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .25
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), Es),
            EMBED_BACKGROUND_ALTERNATE: (o(EP = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(EP, tr.LIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(EP, tr.MIDNIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(EP, tr.DARKER, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(EP, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .25
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .075
                }
            }), EP),
            EMBED_TITLE: (o(Eu = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(Eu, tr.LIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(Eu, tr.MIDNIGHT, {
                raw: "PLUM_2",
                opacity: 1
            }), o(Eu, tr.DARKER, {
                raw: "PLUM_3",
                opacity: 1
            }), Eu),
            EXPRESSION_PICKER_BG: (o(EM = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(EM, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(EM, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(EM, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(EM, "gradient", {
                light: {
                    color: "gradient.end",
                    lightness: "*1.05"
                },
                dark: {
                    color: "gradient.end",
                    lightness: "*0.95"
                }
            }), EM),
            FOCUS_PRIMARY: (o(EU = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLUE_345",
                opacity: 1
            }), o(EU, tr.LIGHT, {
                raw: "BLUE_360",
                opacity: 1
            }), o(EU, tr.MIDNIGHT, {
                raw: "BLUE_345",
                opacity: 1
            }), o(EU, tr.DARKER, {
                raw: "BLUE_345",
                opacity: 1
            }), EU),
            FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND: (o(EG = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: .8
            }), o(EG, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: .8
            }), o(EG, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: .8
            }), o(EG, tr.DARKER, {
                raw: "PLUM_19",
                opacity: .8
            }), EG),
            FORUM_POST_TAG_BACKGROUND: (o(Ed = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: .9
            }), o(Ed, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: .9
            }), o(Ed, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: .9
            }), o(Ed, tr.DARKER, {
                raw: "PLUM_19",
                opacity: .9
            }), Ed),
            GUILD_ICON_INACTIVE_BG: (o(Ep = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(Ep, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(Ep, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(Ep, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), Ep),
            GUILD_ICON_INACTIVE_NESTED_BG: (o(EB = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(EB, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(EB, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(EB, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), EB),
            GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND: (o(Eg = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(Eg, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(Eg, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(Eg, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: 1
            }), Eg),
            HALO_POSITIVE: (o(Ef = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: .24
            }), o(Ef, tr.LIGHT, {
                raw: "GREEN_360",
                opacity: .24
            }), o(Ef, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: .24
            }), o(Ef, tr.DARKER, {
                raw: "GREEN_360",
                opacity: .24
            }), Ef),
            HEADER_MUTED: (o(EH = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(EH, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(EH, tr.MIDNIGHT, {
                raw: "PLUM_10",
                opacity: 1
            }), o(EH, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), EH),
            HEADER_PRIMARY: (o(Eh = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(Eh, tr.LIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(Eh, tr.MIDNIGHT, {
                raw: "PLUM_2",
                opacity: 1
            }), o(Eh, tr.DARKER, {
                raw: "PLUM_3",
                opacity: 1
            }), Eh),
            HEADER_SECONDARY: (o(Ey = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(Ey, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(Ey, tr.MIDNIGHT, {
                raw: "PLUM_8",
                opacity: 1
            }), o(Ey, tr.DARKER, {
                raw: "PLUM_9",
                opacity: 1
            }), Ey),
            HOME_BACKGROUND: (o(EY = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_645",
                opacity: 1
            }), o(EY, tr.LIGHT, {
                raw: "PRIMARY_100",
                opacity: 1
            }), o(EY, tr.MIDNIGHT, {
                raw: "PLUM_18",
                opacity: 1
            }), o(EY, tr.DARKER, {
                raw: "PLUM_18",
                opacity: 1
            }), EY),
            HOME_CARD_RESTING_BORDER: (o(Eb = {
                category: "generic"
            }, tr.DARK, {
                raw: "TRANSPARENT",
                opacity: 0
            }), o(Eb, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .24
            }), o(Eb, tr.MIDNIGHT, {
                raw: "TRANSPARENT",
                opacity: 0
            }), o(Eb, tr.DARKER, {
                raw: "TRANSPARENT",
                opacity: 0
            }), Eb),
            ICON_MUTED: (o(Ew = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(Ew, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(Ew, tr.MIDNIGHT, {
                raw: "PLUM_12",
                opacity: 1
            }), o(Ew, tr.DARKER, {
                raw: "PLUM_11",
                opacity: 1
            }), Ew),
            ICON_PRIMARY: (o(Em = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(Em, tr.LIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(Em, tr.MIDNIGHT, {
                raw: "PLUM_5",
                opacity: 1
            }), o(Em, tr.DARKER, {
                raw: "PLUM_4",
                opacity: 1
            }), Em),
            ICON_SECONDARY: (o(EK = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(EK, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(EK, tr.MIDNIGHT, {
                raw: "PLUM_9",
                opacity: 1
            }), o(EK, tr.DARKER, {
                raw: "PLUM_9",
                opacity: 1
            }), EK),
            ICON_TRANSPARENT: (o(EV = {
                category: "generic"
            }, tr.DARK, {
                raw: "TRANSPARENT",
                opacity: 0
            }), o(EV, tr.LIGHT, {
                raw: "TRANSPARENT",
                opacity: 0
            }), o(EV, tr.MIDNIGHT, {
                raw: "TRANSPARENT",
                opacity: 0
            }), o(EV, tr.DARKER, {
                raw: "TRANSPARENT",
                opacity: 0
            }), EV),
            INFO_BOX_BACKGROUND: (o(Ev = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLUE_345",
                opacity: .1
            }), o(Ev, tr.LIGHT, {
                raw: "BLUE_345",
                opacity: .1
            }), o(Ev, tr.MIDNIGHT, {
                raw: "BLUE_345",
                opacity: .1
            }), o(Ev, tr.DARKER, {
                raw: "BLUE_345",
                opacity: .1
            }), Ev),
            INFO_DANGER_BACKGROUND: (o(EF = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_400",
                opacity: .1
            }), o(EF, tr.LIGHT, {
                raw: "RED_430",
                opacity: .1
            }), o(EF, tr.MIDNIGHT, {
                raw: "RED_400",
                opacity: .1
            }), o(EF, tr.DARKER, {
                raw: "RED_400",
                opacity: .1
            }), EF),
            INFO_DANGER_FOREGROUND: (o(EW = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_400",
                opacity: 1
            }), o(EW, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(EW, tr.MIDNIGHT, {
                raw: "RED_400",
                opacity: 1
            }), o(EW, tr.DARKER, {
                raw: "RED_400",
                opacity: 1
            }), EW),
            INFO_DANGER_TEXT: (o(Ek = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(Ek, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(Ek, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(Ek, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), Ek),
            INFO_HELP_BACKGROUND: (o(Ex = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLUE_345",
                opacity: .1
            }), o(Ex, tr.LIGHT, {
                raw: "BLUE_430",
                opacity: .1
            }), o(Ex, tr.MIDNIGHT, {
                raw: "BLUE_345",
                opacity: .1
            }), o(Ex, tr.DARKER, {
                raw: "BLUE_345",
                opacity: .1
            }), Ex),
            INFO_HELP_FOREGROUND: (o(EX = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLUE_345",
                opacity: 1
            }), o(EX, tr.LIGHT, {
                raw: "BLUE_430",
                opacity: 1
            }), o(EX, tr.MIDNIGHT, {
                raw: "BLUE_345",
                opacity: 1
            }), o(EX, tr.DARKER, {
                raw: "BLUE_345",
                opacity: 1
            }), EX),
            INFO_HELP_TEXT: (o(EQ = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(EQ, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(EQ, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(EQ, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), EQ),
            INFO_POSITIVE_BACKGROUND: (o(EJ = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: .1
            }), o(EJ, tr.LIGHT, {
                raw: "GREEN_400",
                opacity: .05
            }), o(EJ, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: .1
            }), o(EJ, tr.DARKER, {
                raw: "GREEN_360",
                opacity: .1
            }), EJ),
            INFO_POSITIVE_FOREGROUND: (o(EZ = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: 1
            }), o(EZ, tr.LIGHT, {
                raw: "GREEN_400",
                opacity: 1
            }), o(EZ, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: 1
            }), o(EZ, tr.DARKER, {
                raw: "GREEN_360",
                opacity: 1
            }), EZ),
            INFO_POSITIVE_TEXT: (o(Ej = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(Ej, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(Ej, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(Ej, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), Ej),
            INFO_WARNING_BACKGROUND: (o(Ez = {
                category: "generic"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: .1
            }), o(Ez, tr.LIGHT, {
                raw: "YELLOW_400",
                opacity: .1
            }), o(Ez, tr.MIDNIGHT, {
                raw: "YELLOW_300",
                opacity: .1
            }), o(Ez, tr.DARKER, {
                raw: "YELLOW_300",
                opacity: .1
            }), Ez),
            INFO_WARNING_FOREGROUND: (o(Eq = {
                category: "generic"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(Eq, tr.LIGHT, {
                raw: "YELLOW_400",
                opacity: 1
            }), o(Eq, tr.MIDNIGHT, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(Eq, tr.DARKER, {
                raw: "YELLOW_300",
                opacity: 1
            }), Eq),
            INFO_WARNING_TEXT: (o(E$ = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(E$, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(E$, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(E$, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), E$),
            INPUT_BACKGROUND: (o(E0 = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(E0, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(E0, tr.MIDNIGHT, {
                raw: "PLUM_23_ALPHA",
                opacity: .09
            }), o(E0, tr.DARKER, {
                raw: "PLUM_24",
                opacity: .85
            }), o(E0, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .1
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), E0),
            INPUT_FOCUSED_BORDER: (o(E1 = {
                category: "background"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .16
            }), o(E1, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .16
            }), o(E1, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .24
            }), o(E1, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .32
            }), E1),
            INPUT_PLACEHOLDER_TEXT: (o(E3 = {
                category: "background"
            }, tr.DARK, {
                raw: "INPUT_PLACEHOLDER_TEXT_DARK",
                opacity: 1
            }), o(E3, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(E3, tr.MIDNIGHT, {
                raw: "PLUM_9",
                opacity: 1
            }), o(E3, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), E3),
            INTERACTIVE_ACTIVE: (o(E5 = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(E5, tr.LIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(E5, tr.MIDNIGHT, {
                raw: "PLUM_3",
                opacity: 1
            }), o(E5, tr.DARKER, {
                raw: "PLUM_1",
                opacity: 1
            }), E5),
            INTERACTIVE_HOVER: (o(E2 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(E2, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(E2, tr.MIDNIGHT, {
                raw: "PLUM_4",
                opacity: 1
            }), o(E2, tr.DARKER, {
                raw: "PLUM_4",
                opacity: 1
            }), E2),
            INTERACTIVE_MUTED: (o(E6 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(E6, tr.LIGHT, {
                raw: "PRIMARY_300",
                opacity: 1
            }), o(E6, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: 1
            }), o(E6, tr.DARKER, {
                raw: "PLUM_13",
                opacity: 1
            }), o(E6, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .3
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .3
                }
            }), E6),
            INTERACTIVE_NORMAL: (o(E4 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(E4, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(E4, tr.MIDNIGHT, {
                raw: "PLUM_6",
                opacity: 1
            }), o(E4, tr.DARKER, {
                raw: "PLUM_6",
                opacity: 1
            }), E4),
            LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT: (o(E8 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: .5
            }), o(E8, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: .1
            }), o(E8, tr.MIDNIGHT, {
                raw: "PRIMARY_660",
                opacity: .5
            }), o(E8, tr.DARKER, {
                raw: "PRIMARY_660",
                opacity: .5
            }), E8),
            LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN: (o(E7 = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .025
            }), o(E7, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .25
            }), o(E7, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .025
            }), o(E7, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .025
            }), E7),
            LEGACY_BLUR_FALLBACK_DEFAULT: (o(E9 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: .975
            }), o(E9, tr.LIGHT, {
                raw: "PRIMARY_230",
                opacity: .975
            }), o(E9, tr.MIDNIGHT, {
                raw: "PRIMARY_660",
                opacity: .975
            }), o(E9, tr.DARKER, {
                raw: "PRIMARY_660",
                opacity: .975
            }), E9),
            LEGACY_BLUR_FALLBACK_ULTRA_THIN: (o(e_ = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .95
            }), o(e_, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .95
            }), o(e_, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .95
            }), o(e_, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .95
            }), e_),
            LIVE_STAGE_TILE_BORDER: (o(eE = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .6
            }), o(eE, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: .15
            }), o(eE, tr.MIDNIGHT, {
                raw: "PLUM_13",
                opacity: .6
            }), o(eE, tr.DARKER, {
                raw: "PLUM_13",
                opacity: .6
            }), eE),
            LOGO_PRIMARY: (o(ee = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ee, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(ee, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ee, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), ee),
            MENTION_BACKGROUND: (o(eo = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: .3
            }), o(eo, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: .15
            }), o(eo, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: .5
            }), o(eo, tr.DARKER, {
                raw: "BRAND_500",
                opacity: .5
            }), eo),
            MENTION_FOREGROUND: (o(et = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_260",
                opacity: 1
            }), o(et, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(et, tr.MIDNIGHT, {
                raw: "BRAND_230",
                opacity: 1
            }), o(et, tr.DARKER, {
                raw: "BRAND_230",
                opacity: 1
            }), et),
            MODAL_BACKGROUND: (o(eI = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(eI, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eI, tr.MIDNIGHT, {
                raw: "PLUM_16",
                opacity: 1
            }), o(eI, tr.DARKER, {
                raw: "PLUM_16",
                opacity: 1
            }), eI),
            MODAL_FOOTER_BACKGROUND: (o(ea = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(ea, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(ea, tr.MIDNIGHT, {
                raw: "PLUM_17",
                opacity: 1
            }), o(ea, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), ea),
            NAVIGATOR_HEADER_TINT: (o(er = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(er, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(er, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(er, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), er),
            PANEL_BG: (o(eR = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(eR, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eR, tr.MIDNIGHT, {
                raw: "PLUM_24",
                opacity: 1
            }), o(eR, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(eR, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .2
                },
                dark: {
                    color: "BLACK_500",
                    opacity: .2
                }
            }), eR),
            POLLS_NORMAL_FILL_HOVER: (o(eA = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(eA, tr.LIGHT, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(eA, tr.MIDNIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(eA, tr.DARKER, {
                raw: "PRIMARY_600",
                opacity: 1
            }), eA),
            POLLS_NORMAL_IMAGE_BACKGROUND: (o(eT = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(eT, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eT, tr.MIDNIGHT, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(eT, tr.DARKER, {
                raw: "PRIMARY_660",
                opacity: 1
            }), eT),
            POLLS_VICTOR_FILL: (o(en = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: .2
            }), o(en, tr.LIGHT, {
                raw: "GREEN_400",
                opacity: .2
            }), o(en, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: .2
            }), o(en, tr.DARKER, {
                raw: "GREEN_360",
                opacity: .2
            }), en),
            POLLS_VOTED_FILL: (o(eN = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: .2
            }), o(eN, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: .2
            }), o(eN, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: .2
            }), o(eN, tr.DARKER, {
                raw: "BRAND_500",
                opacity: .2
            }), eN),
            PROFILE_GRADIENT_CARD_BACKGROUND: (o(ei = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .7
            }), o(ei, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .7
            }), o(ei, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .7
            }), o(ei, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .7
            }), ei),
            PROFILE_GRADIENT_MESSAGE_INPUT_BORDER: (o(ec = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: .48
            }), o(ec, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: .24
            }), o(ec, tr.MIDNIGHT, {
                raw: "PRIMARY_500",
                opacity: .48
            }), o(ec, tr.DARKER, {
                raw: "PRIMARY_500",
                opacity: .48
            }), ec),
            PROFILE_GRADIENT_NOTE_BACKGROUND: (o(eO = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .3
            }), o(eO, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .3
            }), o(eO, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .3
            }), o(eO, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .3
            }), eO),
            PROFILE_GRADIENT_OVERLAY: (o(eL = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .6
            }), o(eL, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .6
            }), o(eL, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .6
            }), o(eL, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .6
            }), eL),
            PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME: (o(eD = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .8
            }), o(eD, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .8
            }), o(eD, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .8
            }), o(eD, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .8
            }), eD),
            PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER: (o(eS = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .16
            }), o(eS, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(eS, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: .16
            }), o(eS, tr.DARKER, {
                raw: "WHITE_500",
                opacity: .16
            }), eS),
            PROFILE_GRADIENT_ROLE_PILL_BACKGROUND: (o(eC = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: .5
            }), o(eC, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .5
            }), o(eC, tr.MIDNIGHT, {
                raw: "PRIMARY_660",
                opacity: .5
            }), o(eC, tr.DARKER, {
                raw: "PRIMARY_660",
                opacity: .5
            }), eC),
            PROFILE_GRADIENT_ROLE_PILL_BORDER: (o(el = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .2
            }), o(el, tr.LIGHT, {
                raw: "PRIMARY_660",
                opacity: .2
            }), o(el, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: .2
            }), o(el, tr.DARKER, {
                raw: "WHITE_500",
                opacity: .2
            }), el),
            PROFILE_GRADIENT_SECTION_BOX: (o(es = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .45
            }), o(es, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: .45
            }), o(es, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .45
            }), o(es, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .45
            }), es),
            REDESIGN_ACTIVITY_CARD_BACKGROUND: (o(eP = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_560",
                opacity: 1
            }), o(eP, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eP, tr.MIDNIGHT, {
                raw: "PRIMARY_560",
                opacity: 1
            }), o(eP, tr.DARKER, {
                raw: "PRIMARY_560",
                opacity: 1
            }), eP),
            REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED: (o(eu = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(eu, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(eu, tr.MIDNIGHT, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(eu, tr.DARKER, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(eu, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .2
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .2
                }
            }), eu),
            REDESIGN_ACTIVITY_CARD_BADGE_ICON: (o(eM = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(eM, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: 1
            }), o(eM, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: 1
            }), o(eM, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), eM),
            REDESIGN_ACTIVITY_CARD_BORDER: (o(eU = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .02
            }), o(eU, tr.LIGHT, {
                raw: "PRIMARY_400",
                opacity: .24
            }), o(eU, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .12
            }), o(eU, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .06
            }), o(eU, "gradient", {
                light: {
                    color: "BLACK_500",
                    opacity: .1
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), eU),
            REDESIGN_ACTIVITY_CARD_OVERFLOW_BACKGROUND: (o(eG = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(eG, tr.LIGHT, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(eG, tr.MIDNIGHT, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(eG, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), eG),
            REDESIGN_BUTTON_ACTIVE_BACKGROUND: (o(ed = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_430",
                opacity: 1
            }), o(ed, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(ed, tr.MIDNIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(ed, tr.DARKER, {
                raw: "GREEN_430",
                opacity: 1
            }), ed),
            REDESIGN_BUTTON_ACTIVE_PRESSED_BACKGROUND: (o(ep = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_460",
                opacity: 1
            }), o(ep, tr.LIGHT, {
                raw: "GREEN_460",
                opacity: 1
            }), o(ep, tr.MIDNIGHT, {
                raw: "GREEN_460",
                opacity: 1
            }), o(ep, tr.DARKER, {
                raw: "GREEN_460",
                opacity: 1
            }), ep),
            REDESIGN_BUTTON_ACTIVE_TEXT: (o(eB = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eB, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eB, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eB, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), eB),
            REDESIGN_BUTTON_DANGER_BACKGROUND: (o(eg = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(eg, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(eg, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(eg, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), eg),
            REDESIGN_BUTTON_DANGER_PRESSED_BACKGROUND: (o(ef = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_460",
                opacity: 1
            }), o(ef, tr.LIGHT, {
                raw: "RED_460",
                opacity: 1
            }), o(ef, tr.MIDNIGHT, {
                raw: "RED_460",
                opacity: 1
            }), o(ef, tr.DARKER, {
                raw: "RED_460",
                opacity: 1
            }), ef),
            REDESIGN_BUTTON_DANGER_TEXT: (o(eH = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eH, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eH, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eH, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), eH),
            REDESIGN_BUTTON_DESTRUCTIVE_BACKGROUND: (o(eh = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(eh, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(eh, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(eh, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), eh),
            REDESIGN_BUTTON_DESTRUCTIVE_PRESSED_BACKGROUND: (o(ey = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_460",
                opacity: 1
            }), o(ey, tr.LIGHT, {
                raw: "RED_460",
                opacity: 1
            }), o(ey, tr.MIDNIGHT, {
                raw: "RED_460",
                opacity: 1
            }), o(ey, tr.DARKER, {
                raw: "RED_460",
                opacity: 1
            }), ey),
            REDESIGN_BUTTON_DESTRUCTIVE_TEXT: (o(eY = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eY, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eY, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eY, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), eY),
            REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND: (o(eb = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .54
            }), o(eb, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .54
            }), o(eb, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .54
            }), o(eb, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .54
            }), eb),
            REDESIGN_BUTTON_OVERLAY_ALPHA_PRESSED_BACKGROUND: (o(ew = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .64
            }), o(ew, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .64
            }), o(ew, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .64
            }), o(ew, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .64
            }), ew),
            REDESIGN_BUTTON_OVERLAY_ALPHA_TEXT: (o(em = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(em, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(em, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(em, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), em),
            REDESIGN_BUTTON_OVERLAY_BACKGROUND: (o(eK = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eK, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eK, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eK, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), eK),
            REDESIGN_BUTTON_OVERLAY_PRESSED_BACKGROUND: (o(eV = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(eV, tr.LIGHT, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(eV, tr.MIDNIGHT, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(eV, tr.DARKER, {
                raw: "PRIMARY_230",
                opacity: 1
            }), eV),
            REDESIGN_BUTTON_OVERLAY_TEXT: (o(ev = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(ev, tr.LIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(ev, tr.MIDNIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(ev, tr.DARKER, {
                raw: "PRIMARY_860",
                opacity: 1
            }), ev),
            REDESIGN_BUTTON_POSITIVE_BACKGROUND: (o(eF = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_430",
                opacity: 1
            }), o(eF, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(eF, tr.MIDNIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(eF, tr.DARKER, {
                raw: "GREEN_430",
                opacity: 1
            }), eF),
            REDESIGN_BUTTON_POSITIVE_PRESSED_BACKGROUND: (o(eW = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_460",
                opacity: 1
            }), o(eW, tr.LIGHT, {
                raw: "GREEN_460",
                opacity: 1
            }), o(eW, tr.MIDNIGHT, {
                raw: "GREEN_460",
                opacity: 1
            }), o(eW, tr.DARKER, {
                raw: "GREEN_460",
                opacity: 1
            }), eW),
            REDESIGN_BUTTON_POSITIVE_TEXT: (o(ek = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ek, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ek, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ek, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), ek),
            REDESIGN_BUTTON_PRIMARY_ALT_BACKGROUND: (o(ex = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 0
            }), o(ex, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 0
            }), o(ex, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 0
            }), o(ex, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 0
            }), ex),
            REDESIGN_BUTTON_PRIMARY_ALT_BORDER: (o(eX = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: 1
            }), o(eX, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(eX, tr.MIDNIGHT, {
                raw: "BRAND_400",
                opacity: 1
            }), o(eX, tr.DARKER, {
                raw: "BRAND_360",
                opacity: 1
            }), eX),
            REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BACKGROUND: (o(eQ = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_530",
                opacity: 0
            }), o(eQ, tr.LIGHT, {
                raw: "BRAND_530",
                opacity: 0
            }), o(eQ, tr.MIDNIGHT, {
                raw: "BRAND_530",
                opacity: 0
            }), o(eQ, tr.DARKER, {
                raw: "BRAND_530",
                opacity: 0
            }), eQ),
            REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BORDER: (o(eJ = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eJ, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eJ, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(eJ, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), eJ),
            REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BACKGROUND: (o(eZ = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_530",
                opacity: 1
            }), o(eZ, tr.LIGHT, {
                raw: "BRAND_530",
                opacity: 1
            }), o(eZ, tr.MIDNIGHT, {
                raw: "BRAND_530",
                opacity: 1
            }), o(eZ, tr.DARKER, {
                raw: "BRAND_530",
                opacity: 1
            }), eZ),
            REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BORDER: (o(ej = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: 1
            }), o(ej, tr.LIGHT, {
                raw: "BRAND_360",
                opacity: 1
            }), o(ej, tr.MIDNIGHT, {
                raw: "BRAND_360",
                opacity: 1
            }), o(ej, tr.DARKER, {
                raw: "BRAND_360",
                opacity: 1
            }), ej),
            REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_TEXT: (o(ez = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ez, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ez, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ez, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), ez),
            REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BACKGROUND: (o(eq = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_700",
                opacity: .16
            }), o(eq, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: .06
            }), o(eq, tr.MIDNIGHT, {
                raw: "BRAND_700",
                opacity: .16
            }), o(eq, tr.DARKER, {
                raw: "BRAND_700",
                opacity: .16
            }), eq),
            REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BORDER: (o(e$ = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_400",
                opacity: .5
            }), o(e$, tr.LIGHT, {
                raw: "BRAND_330",
                opacity: 1
            }), o(e$, tr.MIDNIGHT, {
                raw: "BRAND_400",
                opacity: .5
            }), o(e$, tr.DARKER, {
                raw: "BRAND_400",
                opacity: .5
            }), e$),
            REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_TEXT: (o(e0 = {
                category: "text"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: 1
            }), o(e0, tr.LIGHT, {
                raw: "BRAND_560",
                opacity: 1
            }), o(e0, tr.MIDNIGHT, {
                raw: "BRAND_360",
                opacity: 1
            }), o(e0, tr.DARKER, {
                raw: "BRAND_360",
                opacity: 1
            }), e0),
            REDESIGN_BUTTON_PRIMARY_ALT_TEXT: (o(e1 = {
                category: "text"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: 1
            }), o(e1, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(e1, tr.MIDNIGHT, {
                raw: "BRAND_400",
                opacity: 1
            }), o(e1, tr.DARKER, {
                raw: "BRAND_360",
                opacity: 1
            }), e1),
            REDESIGN_BUTTON_PRIMARY_BACKGROUND: (o(e3 = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 1
            }), o(e3, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(e3, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(e3, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 1
            }), e3),
            REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT: (o(e5 = {
                category: "text"
            }, tr.DARK, {
                raw: "BRAND_530",
                opacity: 1
            }), o(e5, tr.LIGHT, {
                raw: "BRAND_530",
                opacity: 1
            }), o(e5, tr.MIDNIGHT, {
                raw: "BRAND_530",
                opacity: 1
            }), o(e5, tr.DARKER, {
                raw: "BRAND_530",
                opacity: 1
            }), e5),
            REDESIGN_BUTTON_PRIMARY_OVERLAY_BACKGROUND: (o(e2 = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(e2, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(e2, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(e2, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), e2),
            REDESIGN_BUTTON_PRIMARY_OVERLAY_PRESSED_BACKGROUND: (o(e6 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(e6, tr.LIGHT, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(e6, tr.MIDNIGHT, {
                raw: "PLUM_4",
                opacity: 1
            }), o(e6, tr.DARKER, {
                raw: "PLUM_4",
                opacity: 1
            }), e6),
            REDESIGN_BUTTON_PRIMARY_OVERLAY_TEXT: (o(e4 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(e4, tr.LIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(e4, tr.MIDNIGHT, {
                raw: "PLUM_25",
                opacity: 1
            }), o(e4, tr.DARKER, {
                raw: "PLUM_25",
                opacity: 1
            }), e4),
            REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: (o(e8 = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_560",
                opacity: 1
            }), o(e8, tr.LIGHT, {
                raw: "BRAND_560",
                opacity: 1
            }), o(e8, tr.MIDNIGHT, {
                raw: "BRAND_560",
                opacity: 1
            }), o(e8, tr.DARKER, {
                raw: "BRAND_560",
                opacity: 1
            }), e8),
            REDESIGN_BUTTON_PRIMARY_TEXT: (o(e7 = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(e7, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(e7, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(e7, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), e7),
            REDESIGN_BUTTON_SECONDARY_BACKGROUND: (o(e9 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(e9, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(e9, tr.MIDNIGHT, {
                raw: "PLUM_17",
                opacity: 1
            }), o(e9, tr.DARKER, {
                raw: "PLUM_15",
                opacity: 1
            }), o(e9, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .72
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .24
                }
            }), e9),
            REDESIGN_BUTTON_SECONDARY_BORDER: (o(o_ = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: .08
            }), o(o_, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(o_, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .12
            }), o(o_, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .12
            }), o(o_, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: 0
                },
                dark: {
                    color: "WHITE_500",
                    opacity: 0
                }
            }), o_),
            REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND: (o(oE = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .54
            }), o(oE, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .54
            }), o(oE, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .54
            }), o(oE, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .54
            }), oE),
            REDESIGN_BUTTON_SECONDARY_OVERLAY_PRESSED_BACKGROUND: (o(oe = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .64
            }), o(oe, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .64
            }), o(oe, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .64
            }), o(oe, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .64
            }), oe),
            REDESIGN_BUTTON_SECONDARY_OVERLAY_TEXT: (o(oo = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(oo, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(oo, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(oo, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), oo),
            REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND: (o(ot = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(ot, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(ot, tr.MIDNIGHT, {
                raw: "PLUM_15",
                opacity: 1
            }), o(ot, tr.DARKER, {
                raw: "PLUM_13",
                opacity: 1
            }), o(ot, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: .62
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .34
                }
            }), ot),
            REDESIGN_BUTTON_SECONDARY_PRESSED_BORDER: (o(oI = {
                category: "generic"
            }, tr.DARK, {
                raw: "TRANSPARENT",
                opacity: 0
            }), o(oI, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .04
            }), o(oI, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .06
            }), o(oI, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .06
            }), o(oI, "gradient", {
                light: {
                    color: "WHITE_500",
                    opacity: 0
                },
                dark: {
                    color: "WHITE_500",
                    opacity: 0
                }
            }), oI),
            REDESIGN_BUTTON_SECONDARY_TEXT: (o(oa = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(oa, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(oa, tr.MIDNIGHT, {
                raw: "PLUM_4",
                opacity: 1
            }), o(oa, tr.DARKER, {
                raw: "PLUM_6",
                opacity: 1
            }), oa),
            REDESIGN_BUTTON_SELECTED_BACKGROUND: (o(or = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: .24
            }), o(or, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: .16
            }), o(or, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: .24
            }), o(or, tr.DARKER, {
                raw: "BRAND_500",
                opacity: .24
            }), or),
            REDESIGN_BUTTON_SELECTED_PRESSED_BACKGROUND: (o(oR = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: .28
            }), o(oR, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: .24
            }), o(oR, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: .28
            }), o(oR, tr.DARKER, {
                raw: "BRAND_500",
                opacity: .28
            }), oR),
            REDESIGN_BUTTON_SELECTED_TEXT: (o(oA = {
                category: "text"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 1
            }), o(oA, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(oA, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(oA, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 1
            }), oA),
            REDESIGN_BUTTON_TERTIARY_BACKGROUND: (o(oT = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(oT, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(oT, tr.MIDNIGHT, {
                raw: "PLUM_23_ALPHA",
                opacity: .09
            }), o(oT, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .12
            }), o(oT, "gradient", {
                light: {
                    color: "gradient.secondary",
                    opacity: .4
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .1
                }
            }), oT),
            REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND: (o(on = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_560",
                opacity: 1
            }), o(on, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .16
            }), o(on, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .2
            }), o(on, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .2
            }), o(on, "gradient", {
                light: {
                    color: "gradient.secondary",
                    opacity: .3
                },
                dark: {
                    color: "WHITE_500",
                    opacity: .2
                }
            }), on),
            REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT: (o(oN = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(oN, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(oN, tr.MIDNIGHT, {
                raw: "PLUM_6",
                opacity: 1
            }), o(oN, tr.DARKER, {
                raw: "PLUM_5",
                opacity: 1
            }), oN),
            REDESIGN_BUTTON_TERTIARY_TEXT: (o(oi = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(oi, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(oi, tr.MIDNIGHT, {
                raw: "PLUM_4",
                opacity: 1
            }), o(oi, tr.DARKER, {
                raw: "PLUM_6",
                opacity: 1
            }), oi),
            REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: (o(oc = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(oc, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(oc, tr.MIDNIGHT, {
                raw: "PLUM_8",
                opacity: 1
            }), o(oc, tr.DARKER, {
                raw: "PLUM_9",
                opacity: 1
            }), oc),
            REDESIGN_CHANNEL_MESSAGE_PREVIEW_TEXT: (o(oO = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(oO, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(oO, tr.MIDNIGHT, {
                raw: "PLUM_10",
                opacity: 1
            }), o(oO, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), oO),
            REDESIGN_CHANNEL_NAME_MUTED_TEXT: (o(oL = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(oL, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(oL, tr.MIDNIGHT, {
                raw: "PLUM_10",
                opacity: 1
            }), o(oL, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), oL),
            REDESIGN_CHANNEL_NAME_TEXT: (o(oD = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(oD, tr.LIGHT, {
                raw: "PRIMARY_860",
                opacity: 1
            }), o(oD, tr.MIDNIGHT, {
                raw: "PLUM_2",
                opacity: 1
            }), o(oD, tr.DARKER, {
                raw: "PLUM_3",
                opacity: 1
            }), oD),
            REDESIGN_CHAT_INPUT_BACKGROUND: (o(oS = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(oS, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(oS, tr.MIDNIGHT, {
                raw: "PLUM_23_ALPHA",
                opacity: .09
            }), o(oS, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .12
            }), oS),
            REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND: (o(oC = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: .08
            }), o(oC, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(oC, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: .08
            }), o(oC, tr.DARKER, {
                raw: "BLACK_500",
                opacity: .08
            }), oC),
            REDESIGN_INPUT_CONTROL_ACTIVE_BG: (o(ol = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_645",
                opacity: 1
            }), o(ol, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ol, tr.MIDNIGHT, {
                raw: "PLUM_17",
                opacity: 1
            }), o(ol, tr.DARKER, {
                raw: "PLUM_16",
                opacity: 1
            }), ol),
            REDESIGN_INPUT_CONTROL_SELECTED: (o(os = {
                category: "generic"
            }, tr.DARK, {
                raw: "BRAND_500",
                opacity: 1
            }), o(os, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(os, tr.MIDNIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(os, tr.DARKER, {
                raw: "BRAND_500",
                opacity: 1
            }), os),
            REDESIGN_ONLY_BACKGROUND_ACTIVE: (o(oP = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(oP, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(oP, tr.MIDNIGHT, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(oP, tr.DARKER, {
                raw: "PRIMARY_530",
                opacity: 1
            }), oP),
            REDESIGN_ONLY_BACKGROUND_DEFAULT: (o(ou = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(ou, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ou, tr.MIDNIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(ou, tr.DARKER, {
                raw: "PRIMARY_600",
                opacity: 1
            }), ou),
            REDESIGN_ONLY_BACKGROUND_OVERLAY: (o(oM = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_645",
                opacity: 1
            }), o(oM, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(oM, tr.MIDNIGHT, {
                raw: "PRIMARY_645",
                opacity: 1
            }), o(oM, tr.DARKER, {
                raw: "PRIMARY_645",
                opacity: 1
            }), oM),
            REDESIGN_ONLY_BACKGROUND_RAISED: (o(oU = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(oU, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(oU, tr.MIDNIGHT, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(oU, tr.DARKER, {
                raw: "PRIMARY_630",
                opacity: 1
            }), oU),
            REDESIGN_ONLY_BACKGROUND_SUNKEN: (o(oG = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(oG, tr.LIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(oG, tr.MIDNIGHT, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(oG, tr.DARKER, {
                raw: "PRIMARY_660",
                opacity: 1
            }), oG),
            SCROLLBAR_AUTO_SCROLLBAR_COLOR_THUMB: (o(od = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_730",
                opacity: 1
            }), o(od, tr.LIGHT, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(od, tr.MIDNIGHT, {
                raw: "PLUM_20",
                opacity: 1
            }), o(od, tr.DARKER, {
                raw: "PLUM_21",
                opacity: 1
            }), od),
            SCROLLBAR_AUTO_SCROLLBAR_COLOR_TRACK: (o(op = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(op, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(op, tr.MIDNIGHT, {
                raw: "PLUM_17",
                opacity: 1
            }), o(op, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), op),
            SCROLLBAR_AUTO_THUMB: (o(oB = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_730",
                opacity: 1
            }), o(oB, tr.LIGHT, {
                raw: "PRIMARY_300",
                opacity: 1
            }), o(oB, tr.MIDNIGHT, {
                raw: "PLUM_16",
                opacity: 1
            }), o(oB, tr.DARKER, {
                raw: "PLUM_21",
                opacity: 1
            }), oB),
            SCROLLBAR_AUTO_TRACK: (o(og = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(og, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(og, tr.MIDNIGHT, {
                raw: "PLUM_25",
                opacity: 1
            }), o(og, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), og),
            SCROLLBAR_THIN_THUMB: (o(of = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_730",
                opacity: 1
            }), o(of, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: .3
            }), o(of, tr.MIDNIGHT, {
                raw: "PLUM_20",
                opacity: 1
            }), o(of, tr.DARKER, {
                raw: "PLUM_21",
                opacity: 1
            }), of),
            SCROLLBAR_THIN_TRACK: (o(oH = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: 0
            }), o(oH, tr.LIGHT, {
                raw: "BLACK_500",
                opacity: 0
            }), o(oH, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 0
            }), o(oH, tr.DARKER, {
                raw: "BLACK_500",
                opacity: 0
            }), oH),
            SPOILER_HIDDEN_BACKGROUND: (o(oh = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: 1
            }), o(oh, tr.LIGHT, {
                raw: "PRIMARY_200",
                opacity: 1
            }), o(oh, tr.MIDNIGHT, {
                raw: "PLUM_14",
                opacity: 1
            }), o(oh, tr.DARKER, {
                raw: "PLUM_14",
                opacity: 1
            }), oh),
            SPOILER_REVEALED_BACKGROUND: (o(oy = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_660",
                opacity: 1
            }), o(oy, tr.LIGHT, {
                raw: "PRIMARY_160",
                opacity: 1
            }), o(oy, tr.MIDNIGHT, {
                raw: "PLUM_11",
                opacity: .16
            }), o(oy, tr.DARKER, {
                raw: "PLUM_11",
                opacity: .16
            }), oy),
            STATUS_DANGER: (o(oY = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_400",
                opacity: 1
            }), o(oY, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(oY, tr.MIDNIGHT, {
                raw: "RED_400",
                opacity: 1
            }), o(oY, tr.DARKER, {
                raw: "RED_400",
                opacity: 1
            }), oY),
            STATUS_DANGER_BACKGROUND: (o(ob = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_430",
                opacity: 1
            }), o(ob, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(ob, tr.MIDNIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(ob, tr.DARKER, {
                raw: "RED_430",
                opacity: 1
            }), ob),
            STATUS_DANGER_TEXT: (o(ow = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ow, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ow, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ow, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), ow),
            STATUS_DND: (o(om = {
                category: "generic"
            }, tr.DARK, {
                raw: "RED_400",
                opacity: 1
            }), o(om, tr.LIGHT, {
                raw: "RED_430",
                opacity: 1
            }), o(om, tr.MIDNIGHT, {
                raw: "RED_400",
                opacity: 1
            }), o(om, tr.DARKER, {
                raw: "RED_400",
                opacity: 1
            }), om),
            STATUS_IDLE: (o(oK = {
                category: "generic"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(oK, tr.LIGHT, {
                raw: "YELLOW_400",
                opacity: 1
            }), o(oK, tr.MIDNIGHT, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(oK, tr.DARKER, {
                raw: "YELLOW_300",
                opacity: 1
            }), oK),
            STATUS_OFFLINE: (o(oV = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(oV, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(oV, tr.MIDNIGHT, {
                raw: "PLUM_9",
                opacity: 1
            }), o(oV, tr.DARKER, {
                raw: "PLUM_9",
                opacity: 1
            }), oV),
            STATUS_ONLINE: (o(ov = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: 1
            }), o(ov, tr.LIGHT, {
                raw: "GREEN_400",
                opacity: 1
            }), o(ov, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: 1
            }), o(ov, tr.DARKER, {
                raw: "GREEN_360",
                opacity: 1
            }), ov),
            STATUS_POSITIVE: (o(oF = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: 1
            }), o(oF, tr.LIGHT, {
                raw: "GREEN_400",
                opacity: 1
            }), o(oF, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: 1
            }), o(oF, tr.DARKER, {
                raw: "GREEN_360",
                opacity: 1
            }), oF),
            STATUS_POSITIVE_BACKGROUND: (o(oW = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_430",
                opacity: 1
            }), o(oW, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(oW, tr.MIDNIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(oW, tr.DARKER, {
                raw: "GREEN_430",
                opacity: 1
            }), oW),
            STATUS_POSITIVE_TEXT: (o(ok = {
                category: "text"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ok, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ok, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ok, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), ok),
            STATUS_SPEAKING: (o(ox = {
                category: "generic"
            }, tr.DARK, {
                raw: "GREEN_360",
                opacity: 1
            }), o(ox, tr.LIGHT, {
                raw: "GREEN_360",
                opacity: 1
            }), o(ox, tr.MIDNIGHT, {
                raw: "GREEN_360",
                opacity: 1
            }), o(ox, tr.DARKER, {
                raw: "GREEN_360",
                opacity: 1
            }), ox),
            STATUS_WARNING: (o(oX = {
                category: "generic"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(oX, tr.LIGHT, {
                raw: "YELLOW_400",
                opacity: 1
            }), o(oX, tr.MIDNIGHT, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(oX, tr.DARKER, {
                raw: "YELLOW_300",
                opacity: 1
            }), oX),
            STATUS_WARNING_BACKGROUND: (o(oQ = {
                category: "generic"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(oQ, tr.LIGHT, {
                raw: "YELLOW_400",
                opacity: 1
            }), o(oQ, tr.MIDNIGHT, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(oQ, tr.DARKER, {
                raw: "YELLOW_300",
                opacity: 1
            }), oQ),
            STATUS_WARNING_TEXT: (o(oJ = {
                category: "text"
            }, tr.DARK, {
                raw: "BLACK_500",
                opacity: 1
            }), o(oJ, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(oJ, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(oJ, tr.DARKER, {
                raw: "BLACK_500",
                opacity: 1
            }), oJ),
            TEXT_BRAND: (o(oZ = {
                category: "text"
            }, tr.DARK, {
                raw: "BRAND_360",
                opacity: 1
            }), o(oZ, tr.LIGHT, {
                raw: "BRAND_500",
                opacity: 1
            }), o(oZ, tr.MIDNIGHT, {
                raw: "BRAND_400",
                opacity: 1
            }), o(oZ, tr.DARKER, {
                raw: "BRAND_360",
                opacity: 1
            }), oZ),
            TEXT_DANGER: (o(oj = {
                category: "text"
            }, tr.DARK, {
                raw: "RED_345",
                opacity: 1
            }), o(oj, tr.LIGHT, {
                raw: "RED_500",
                opacity: 1
            }), o(oj, tr.MIDNIGHT, {
                raw: "RED_345",
                opacity: 1
            }), o(oj, tr.DARKER, {
                raw: "RED_345",
                opacity: 1
            }), oj),
            TEXT_LINK: (o(oz = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLUE_345",
                opacity: 1
            }), o(oz, tr.LIGHT, {
                raw: "BLUE_430",
                opacity: 1
            }), o(oz, tr.MIDNIGHT, {
                raw: "BLUE_345",
                opacity: 1
            }), o(oz, tr.DARKER, {
                raw: "BLUE_345",
                opacity: 1
            }), oz),
            TEXT_LINK_LOW_SATURATION: (o(oq = {
                category: "generic"
            }, tr.DARK, {
                raw: "BLUE_330",
                opacity: 1
            }), o(oq, tr.LIGHT, {
                raw: "BLUE_430",
                opacity: 1
            }), o(oq, tr.MIDNIGHT, {
                raw: "BLUE_330",
                opacity: 1
            }), o(oq, tr.DARKER, {
                raw: "BLUE_330",
                opacity: 1
            }), oq),
            TEXT_LOW_CONTRAST: (o(o$ = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(o$, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(o$, tr.MIDNIGHT, {
                raw: "PLUM_12",
                opacity: 1
            }), o(o$, tr.DARKER, {
                raw: "PLUM_11",
                opacity: 1
            }), o$),
            TEXT_MESSAGE_PREVIEW_LOW_SAT: (o(o0 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(o0, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(o0, tr.MIDNIGHT, {
                raw: "PLUM_9",
                opacity: 1
            }), o(o0, tr.DARKER, {
                raw: "PLUM_11",
                opacity: 1
            }), o0),
            TEXT_MUTED: (o(o1 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(o1, tr.LIGHT, {
                raw: "PRIMARY_460",
                opacity: 1
            }), o(o1, tr.MIDNIGHT, {
                raw: "PLUM_10",
                opacity: 1
            }), o(o1, tr.DARKER, {
                raw: "PLUM_10",
                opacity: 1
            }), o1),
            TEXT_MUTED_ON_DEFAULT: (o(o3 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(o3, tr.LIGHT, {
                raw: "PRIMARY_430",
                opacity: 1
            }), o(o3, tr.MIDNIGHT, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(o3, tr.DARKER, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o3),
            TEXT_NORMAL: (o(o5 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(o5, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(o5, tr.MIDNIGHT, {
                raw: "PLUM_4",
                opacity: 1
            }), o(o5, tr.DARKER, {
                raw: "PLUM_6",
                opacity: 1
            }), o5),
            TEXT_POSITIVE: (o(o2 = {
                category: "text"
            }, tr.DARK, {
                raw: "GREEN_330",
                opacity: 1
            }), o(o2, tr.LIGHT, {
                raw: "GREEN_430",
                opacity: 1
            }), o(o2, tr.MIDNIGHT, {
                raw: "GREEN_330",
                opacity: 1
            }), o(o2, tr.DARKER, {
                raw: "GREEN_330",
                opacity: 1
            }), o2),
            TEXT_PRIMARY: (o(o6 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_230",
                opacity: 1
            }), o(o6, tr.LIGHT, {
                raw: "PRIMARY_600",
                opacity: 1
            }), o(o6, tr.MIDNIGHT, {
                raw: "PLUM_4",
                opacity: 1
            }), o(o6, tr.DARKER, {
                raw: "PLUM_6",
                opacity: 1
            }), o6),
            TEXT_SECONDARY: (o(o4 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_330",
                opacity: 1
            }), o(o4, tr.LIGHT, {
                raw: "PRIMARY_500",
                opacity: 1
            }), o(o4, tr.MIDNIGHT, {
                raw: "PLUM_8",
                opacity: 1
            }), o(o4, tr.DARKER, {
                raw: "PLUM_9",
                opacity: 1
            }), o4),
            TEXT_WARNING: (o(o8 = {
                category: "text"
            }, tr.DARK, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(o8, tr.LIGHT, {
                raw: "YELLOW_430",
                opacity: 1
            }), o(o8, tr.MIDNIGHT, {
                raw: "YELLOW_300",
                opacity: 1
            }), o(o8, tr.DARKER, {
                raw: "YELLOW_300",
                opacity: 1
            }), o8),
            TEXTBOX_MARKDOWN_SYNTAX: (o(o7 = {
                category: "text"
            }, tr.DARK, {
                raw: "PRIMARY_360",
                opacity: 1
            }), o(o7, tr.LIGHT, {
                raw: "PRIMARY_530",
                opacity: 1
            }), o(o7, tr.MIDNIGHT, {
                raw: "PLUM_9",
                opacity: 1
            }), o(o7, tr.DARKER, {
                raw: "PLUM_9",
                opacity: 1
            }), o7),
            THEME_LOCKED_BLUR_FALLBACK: (o(o9 = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: .96
            }), o(o9, tr.LIGHT, {
                raw: "PRIMARY_700",
                opacity: .96
            }), o(o9, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: .96
            }), o(o9, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: .96
            }), o9),
            TOAST_BG: (o(t_ = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_800",
                opacity: 1
            }), o(t_, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(t_, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: 1
            }), o(t_, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), o(t_, "gradient", {
                light: {
                    color: "gradient.start",
                    lightness: .7,
                    saturation: .5,
                    opacity: .95
                },
                dark: {
                    color: "gradient.start",
                    lightness: .4,
                    saturation: .5,
                    opacity: .95
                }
            }), t_),
            TYPING_INDICATOR_BG: (o(tE = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_630",
                opacity: 1
            }), o(tE, tr.LIGHT, {
                raw: "PRIMARY_130",
                opacity: 1
            }), o(tE, tr.MIDNIGHT, {
                raw: "BLACK_500",
                opacity: 1
            }), o(tE, tr.DARKER, {
                raw: "PLUM_20",
                opacity: 1
            }), o(tE, "gradient", {
                light: {
                    color: "gradient.end",
                    lightness: "*0.9",
                    saturation: "*0.9",
                    opacity: .9
                },
                dark: {
                    color: "gradient.end",
                    lightness: "*1.5",
                    saturation: "*1.2",
                    opacity: .9
                }
            }), tE),
            USER_PROFILE_HEADER_OVERFLOW_BACKGROUND: (o(te = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: .5
            }), o(te, tr.LIGHT, {
                raw: "WHITE_200",
                opacity: .5
            }), o(te, tr.MIDNIGHT, {
                raw: "PLUM_20",
                opacity: .5
            }), o(te, tr.DARKER, {
                raw: "PLUM_20",
                opacity: .5
            }), te),
            VOICE_VIDEO_VIDEO_TILE_BACKGROUND: (o(to = {
                category: "generic"
            }, tr.DARK, {
                raw: "PLUM_17",
                opacity: .4
            }), o(to, tr.LIGHT, {
                raw: "PLUM_17",
                opacity: .4
            }), o(to, tr.MIDNIGHT, {
                raw: "PLUM_17",
                opacity: .4
            }), o(to, tr.DARKER, {
                raw: "PLUM_17",
                opacity: .4
            }), to),
            VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK: (o(tt = {
                category: "generic"
            }, tr.DARK, {
                raw: "PRIMARY_700",
                opacity: .48
            }), o(tt, tr.LIGHT, {
                raw: "PRIMARY_700",
                opacity: .48
            }), o(tt, tr.MIDNIGHT, {
                raw: "PRIMARY_700",
                opacity: .48
            }), o(tt, tr.DARKER, {
                raw: "PRIMARY_700",
                opacity: .48
            }), tt),
            WHITE: (o(tI = {
                category: "generic"
            }, tr.DARK, {
                raw: "WHITE_500",
                opacity: 1
            }), o(tI, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(tI, tr.MIDNIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(tI, tr.DARKER, {
                raw: "WHITE_500",
                opacity: 1
            }), tI),
            YOU_BAR_BG: (o(ta = {
                category: "background"
            }, tr.DARK, {
                raw: "PRIMARY_800",
                opacity: 1
            }), o(ta, tr.LIGHT, {
                raw: "WHITE_500",
                opacity: 1
            }), o(ta, tr.MIDNIGHT, {
                raw: "PLUM_19",
                opacity: 1
            }), o(ta, tr.DARKER, {
                raw: "PLUM_17",
                opacity: 1
            }), o(ta, "gradient", {
                light: {
                    color: "gradient.mid",
                    lightness: .98
                },
                dark: {
                    color: "gradient.mid",
                    lightness: .16
                }
            }), ta)
        },
        tA = {
            SemanticColors: tR,
            RawColors: {
                APPLICATION_SUBSCRIPTION_END: "#0177a4",
                APPLICATION_SUBSCRIPTION_START: "#3442d9",
                BATTLENET: "#009ae5",
                BG_GRADIENT_AURORA_1: "#062053",
                BG_GRADIENT_AURORA_2: "#191fbb",
                BG_GRADIENT_AURORA_3: "#13929a",
                BG_GRADIENT_AURORA_4: "#218573",
                BG_GRADIENT_AURORA_5: "#051a81",
                BG_GRADIENT_CHROMA_GLOW_1: "#0eb5bf",
                BG_GRADIENT_CHROMA_GLOW_2: "#4c0ce0",
                BG_GRADIENT_CHROMA_GLOW_3: "#a308a7",
                BG_GRADIENT_CHROMA_GLOW_4: "#9a53ff",
                BG_GRADIENT_CHROMA_GLOW_5: "#218be0",
                BG_GRADIENT_CITRUS_SHERBERT_1: "#f3b336",
                BG_GRADIENT_CITRUS_SHERBERT_2: "#ee8558",
                BG_GRADIENT_COTTON_CANDY_1: "#f4abb8",
                BG_GRADIENT_COTTON_CANDY_2: "#b1c2fc",
                BG_GRADIENT_CRIMSON_MOON_1: "#950909",
                BG_GRADIENT_CRIMSON_MOON_2: "#000000",
                BG_GRADIENT_DESERT_KHAKI_1: "#e7dbd0",
                BG_GRADIENT_DESERT_KHAKI_2: "#dfd0b2",
                BG_GRADIENT_DESERT_KHAKI_3: "#e0d6a3",
                BG_GRADIENT_DUSK_1: "#665069",
                BG_GRADIENT_DUSK_2: "#91a3d1",
                BG_GRADIENT_EASTER_EGG_1: "#7289da",
                BG_GRADIENT_EASTER_EGG_2: "#4e5d94",
                BG_GRADIENT_FOREST_1: "#142215",
                BG_GRADIENT_FOREST_2: "#2d4d39",
                BG_GRADIENT_FOREST_3: "#454c32",
                BG_GRADIENT_FOREST_4: "#5a7c58",
                BG_GRADIENT_FOREST_5: "#a98e4b",
                BG_GRADIENT_HANAMI_1: "#efaab3",
                BG_GRADIENT_HANAMI_2: "#efd696",
                BG_GRADIENT_HANAMI_3: "#a6daa2",
                BG_GRADIENT_LOFI_VIBES_1: "#a4c0f7",
                BG_GRADIENT_LOFI_VIBES_2: "#a9e4e8",
                BG_GRADIENT_LOFI_VIBES_3: "#b0e2b8",
                BG_GRADIENT_LOFI_VIBES_4: "#cfdfa2",
                BG_GRADIENT_MARS_1: "#895240",
                BG_GRADIENT_MARS_2: "#8f4343",
                BG_GRADIENT_MIDNIGHT_BLURPLE_1: "#5348ca",
                BG_GRADIENT_MIDNIGHT_BLURPLE_2: "#140730",
                BG_GRADIENT_MINT_APPLE_1: "#56b69f",
                BG_GRADIENT_MINT_APPLE_2: "#63bc61",
                BG_GRADIENT_MINT_APPLE_3: "#9eca67",
                BG_GRADIENT_NEON_NIGHTS_1: "#01a89e",
                BG_GRADIENT_NEON_NIGHTS_2: "#7d60ba",
                BG_GRADIENT_NEON_NIGHTS_3: "#b43898",
                BG_GRADIENT_RETRO_RAINCLOUD_1: "#3a7ca1",
                BG_GRADIENT_RETRO_RAINCLOUD_2: "#7f7eb9",
                BG_GRADIENT_RETRO_STORM_1: "#3a7ca1",
                BG_GRADIENT_RETRO_STORM_2: "#58579a",
                BG_GRADIENT_SEPIA_1: "#857664",
                BG_GRADIENT_SEPIA_2: "#5b4421",
                BG_GRADIENT_STRAWBERRY_LEMONADE_1: "#af1a6c",
                BG_GRADIENT_STRAWBERRY_LEMONADE_2: "#c26b20",
                BG_GRADIENT_STRAWBERRY_LEMONADE_3: "#e7a525",
                BG_GRADIENT_SUNRISE_1: "#9f4175",
                BG_GRADIENT_SUNRISE_2: "#c49064",
                BG_GRADIENT_SUNRISE_3: "#a6953d",
                BG_GRADIENT_SUNSET_1: "#48288c",
                BG_GRADIENT_SUNSET_2: "#db7f4b",
                BG_GRADIENT_UNDER_THE_SEA_1: "#647962",
                BG_GRADIENT_UNDER_THE_SEA_2: "#588575",
                BG_GRADIENT_UNDER_THE_SEA_3: "#6a8482",
                BLACK_100: "#f2f2f2",
                BLACK_130: "#e8e8e8",
                BLACK_160: "#dadada",
                BLACK_200: "#cccccc",
                BLACK_230: "#bdbdbd",
                BLACK_260: "#acacac",
                BLACK_300: "#999999",
                BLACK_330: "#7a7a7a",
                BLACK_345: "#666666",
                BLACK_360: "#5c5c5c",
                BLACK_400: "#333333",
                BLACK_430: "#252525",
                BLACK_460: "#141414",
                BLACK_500: "#000000",
                BLACK_530: "#000000",
                BLACK_560: "#000000",
                BLACK_600: "#000000",
                BLACK_630: "#000000",
                BLACK_660: "#000000",
                BLACK_700: "#000000",
                BLACK_730: "#000000",
                BLACK_760: "#000000",
                BLACK_800: "#000000",
                BLACK_830: "#000000",
                BLACK_860: "#000000",
                BLACK_900: "#000000",
                BLUE_100: "#f6fafe",
                BLUE_130: "#f0f7fe",
                BLUE_160: "#e2f0fd",
                BLUE_200: "#cde8fd",
                BLUE_230: "#b2ddfc",
                BLUE_260: "#94d2fc",
                BLUE_300: "#66c4fd",
                BLUE_330: "#2eb6ff",
                BLUE_345: "#00aafc",
                BLUE_360: "#0097f2",
                BLUE_400: "#0082eb",
                BLUE_430: "#006be7",
                BLUE_460: "#005cd1",
                BLUE_500: "#0051b6",
                BLUE_530: "#00489b",
                BLUE_560: "#004088",
                BLUE_600: "#003976",
                BLUE_630: "#00336a",
                BLUE_660: "#002d5f",
                BLUE_700: "#002855",
                BLUE_730: "#002348",
                BLUE_760: "#001e3f",
                BLUE_800: "#001a36",
                BLUE_830: "#001630",
                BLUE_860: "#00132b",
                BLUE_900: "#001024",
                BRAND_100: "#f7f7fe",
                BRAND_130: "#f0f1fe",
                BRAND_160: "#e7e9fd",
                BRAND_200: "#dee0fc",
                BRAND_230: "#d4d7fc",
                BRAND_260: "#c9cdfb",
                BRAND_300: "#bcc1fa",
                BRAND_330: "#a8aff8",
                BRAND_345: "#9ba3f7",
                BRAND_360: "#949cf7",
                BRAND_400: "#7984f5",
                BRAND_430: "#707bf4",
                BRAND_460: "#6571f3",
                BRAND_500: "#5865f2",
                BRAND_530: "#505cdc",
                BRAND_560: "#4752c4",
                BRAND_600: "#3c45a5",
                BRAND_630: "#343b8f",
                BRAND_660: "#2d347d",
                BRAND_700: "#232861",
                BRAND_730: "#21265b",
                BRAND_760: "#1e2353",
                BRAND_800: "#1a1e49",
                BRAND_830: "#141738",
                BRAND_860: "#0d0f24",
                BRAND_900: "#04050c",
                BUNGIE: "#00a3e3",
                CRUNCHYROLL: "#f78b24",
                DISCORD_8TH_BDAY_BLUE: "#5665f9",
                DISCORD_8TH_BDAY_DARK_BLUE: "#3241e0",
                DISCORD_8TH_BDAY_GREEN: "#a4ef00",
                DISCORD_8TH_BDAY_LIGHT_BLUE: "#5e8fff",
                DISCORD_8TH_BDAY_PINK: "#ff52d2",
                DISCORD_8TH_BDAY_PURPLE: "#5665F9",
                DISCORD_8TH_BDAY_YELLOW: "#ffff00",
                EBAY: "#0064d2",
                EPIC_GAMES: "#3c3935",
                FACEBOOK: "#355089",
                GITHUB: "#191717",
                GOLD: "#ffc819",
                GREEN_100: "#ecfef1",
                GREEN_130: "#defee7",
                GREEN_160: "#bdfcd3",
                GREEN_200: "#88fbb5",
                GREEN_230: "#58f39c",
                GREEN_260: "#48e58b",
                GREEN_300: "#3bd67f",
                GREEN_330: "#2dc771",
                GREEN_345: "#26b968",
                GREEN_360: "#23a55a",
                GREEN_400: "#24934e",
                GREEN_430: "#248045",
                GREEN_460: "#1f703c",
                GREEN_500: "#1a6334",
                GREEN_530: "#15562b",
                GREEN_560: "#124c24",
                GREEN_600: "#0e431f",
                GREEN_630: "#0c3c1c",
                GREEN_660: "#0a3618",
                GREEN_700: "#072f15",
                GREEN_730: "#052910",
                GREEN_760: "#03240e",
                GREEN_800: "#031f0c",
                GREEN_830: "#031b0a",
                GREEN_860: "#041708",
                GREEN_900: "#051307",
                GUILD_BOOSTING_BLUE: "#3e70dd",
                GUILD_BOOSTING_BLUE_FOR_GRADIENTS: "#3442d9",
                GUILD_BOOSTING_PINK: "#ff73fa",
                GUILD_BOOSTING_PURPLE: "#b377f3",
                GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: "#9b44f7",
                HYPESQUAD_HOUSE_1: "#9c84ef",
                HYPESQUAD_HOUSE_2: "#f47b67",
                HYPESQUAD_HOUSE_3: "#45ddc0",
                INPUT_PLACEHOLDER_TEXT_DARK: "#87898c",
                LOL: "#021f25",
                ORANGE_100: "#fff8f5",
                ORANGE_130: "#fff4ed",
                ORANGE_160: "#feeadf",
                ORANGE_200: "#fddecd",
                ORANGE_230: "#fccfb2",
                ORANGE_260: "#fcbd95",
                ORANGE_300: "#fbab70",
                ORANGE_330: "#fa9746",
                ORANGE_345: "#f1882a",
                ORANGE_360: "#db7628",
                ORANGE_400: "#c46926",
                ORANGE_430: "#ac591f",
                ORANGE_460: "#9b4c19",
                ORANGE_500: "#8c4013",
                ORANGE_530: "#7b3710",
                ORANGE_560: "#6d300e",
                ORANGE_600: "#5f2b0b",
                ORANGE_630: "#56260a",
                ORANGE_660: "#4c2209",
                ORANGE_700: "#431e09",
                ORANGE_730: "#3b1a07",
                ORANGE_760: "#331606",
                ORANGE_800: "#2d1305",
                ORANGE_830: "#261005",
                ORANGE_860: "#200e05",
                ORANGE_900: "#190d04",
                PARTNER: "#4087ed",
                PAYPAL: "#13216b",
                PLAYSTATION: "#032f87",
                PLUM_23_ALPHA: "#A5B0E9",
                PLUM_0: "#f9f9fa",
                PLUM_1: "#f3f3f4",
                PLUM_10: "#818491",
                PLUM_11: "#6c6f7c",
                PLUM_12: "#5b5e6a",
                PLUM_13: "#4d505b",
                PLUM_14: "#41434d",
                PLUM_15: "#383a43",
                PLUM_16: "#31323b",
                PLUM_17: "#2c2d35",
                PLUM_18: "#26272f",
                PLUM_19: "#212229",
                PLUM_2: "#ecedef",
                PLUM_20: "#1c1d23",
                PLUM_21: "#18191f",
                PLUM_22: "#16161c",
                PLUM_23: "#131318",
                PLUM_24: "#0f1014",
                PLUM_25: "#0c0c10",
                PLUM_26: "#08080b",
                PLUM_3: "#e4e5e8",
                PLUM_4: "#dddee1",
                PLUM_5: "#d3d5d9",
                PLUM_6: "#c7c8ce",
                PLUM_7: "#b8bac1",
                PLUM_8: "#a8aab4",
                PLUM_9: "#9597a3",
                PREMIUM_PERK_BLUE: "#80a6ff",
                PREMIUM_PERK_BLUE_ALT: "#9cb8ff",
                PREMIUM_PERK_DARK_BLUE: "#4173da",
                PREMIUM_PERK_GOLD: "#faa61a",
                PREMIUM_PERK_GREEN: "#86dcc5",
                PREMIUM_PERK_LIGHT_BLUE: "#aec7ff",
                PREMIUM_PERK_ORANGE: "#fc964b",
                PREMIUM_PERK_PINK: "#ff80f4",
                PREMIUM_PERK_PURPLE: "#d09aff",
                PREMIUM_PERK_YELLOW: "#fed648",
                PREMIUM_TIER_0_BLUE: "#007cc2",
                PREMIUM_TIER_0_BLUE_FOR_GRADIENTS: "#007cc2",
                PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2: "#1776cf",
                PREMIUM_TIER_0_HEADER_GRADIENT_1: "#3736bb",
                PREMIUM_TIER_0_HEADER_GRADIENT_2: "#4670e8",
                PREMIUM_TIER_0_HEADER_GRADIENT_3: "#8377eb",
                PREMIUM_TIER_0_HEADER_GRADIENT_4: "#e782f1",
                PREMIUM_TIER_0_HEADER_GRADIENT_5: "#df90af",
                PREMIUM_TIER_0_PURPLE: "#5865f2",
                PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS: "#5865f2",
                PREMIUM_TIER_1_BLUE: "#738ef5",
                PREMIUM_TIER_1_BLUE_FOR_GRADIENTS: "#5865f2",
                PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS: "#3442d9",
                PREMIUM_TIER_1_PURPLE: "#b3aeff",
                PREMIUM_TIER_2_PINK: "#e292aa",
                PREMIUM_TIER_2_PINK_FOR_GRADIENTS: "#ab5d8a",
                PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2: "#b73ec1",
                PREMIUM_TIER_2_PURPLE: "#b473f5",
                PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS: "#8547c6",
                PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2: "#b845c1",
                PRIMARY_100: "#f9f9f9",
                PRIMARY_130: "#f2f3f5",
                PRIMARY_160: "#ebedef",
                PRIMARY_200: "#e3e5e8",
                PRIMARY_230: "#dbdee1",
                PRIMARY_260: "#d2d5d9",
                PRIMARY_300: "#c4c9ce",
                PRIMARY_330: "#b5bac1",
                PRIMARY_345: "#a5abb3",
                PRIMARY_360: "#949ba4",
                PRIMARY_400: "#80848e",
                PRIMARY_430: "#6d6f78",
                PRIMARY_460: "#5c5e66",
                PRIMARY_500: "#4e5058",
                PRIMARY_530: "#41434a",
                PRIMARY_560: "#383a40",
                PRIMARY_600: "#313338",
                PRIMARY_630: "#2b2d31",
                PRIMARY_645: "#282a2e",
                PRIMARY_660: "#232428",
                PRIMARY_700: "#1e1f22",
                PRIMARY_730: "#1a1b1e",
                PRIMARY_760: "#161719",
                PRIMARY_800: "#111214",
                PRIMARY_830: "#0c0c0d",
                PRIMARY_860: "#060607",
                PRIMARY_900: "#020202",
                RED_100: "#fef8f9",
                RED_130: "#fef4f4",
                RED_160: "#feeaea",
                RED_200: "#fdddde",
                RED_230: "#fbcdce",
                RED_260: "#fbbabb",
                RED_300: "#fba6a8",
                RED_330: "#fa9193",
                RED_345: "#fa777b",
                RED_360: "#f85b5f",
                RED_400: "#f23f43",
                RED_430: "#da373c",
                RED_460: "#bb3033",
                RED_500: "#a12829",
                RED_530: "#8f2022",
                RED_560: "#7f1c1e",
                RED_600: "#70181a",
                RED_630: "#651517",
                RED_660: "#5a1314",
                RED_700: "#501012",
                RED_730: "#460e0f",
                RED_760: "#3f0b0c",
                RED_800: "#360a0b",
                RED_830: "#2e090a",
                RED_860: "#280808",
                RED_900: "#220606",
                REDDIT: "#ff4500",
                RIOT_GAMES: "#ea0029",
                ROLE_BLUE: "#206694",
                ROLE_BROWN: "#a84300",
                ROLE_BURGUNDY: "#ad1457",
                ROLE_DARK_BLUE: "#546e7a",
                ROLE_DARK_GREY: "#607d8b",
                ROLE_DARK_PURPLE: "#71368a",
                ROLE_DARK_TEAL: "#11806a",
                ROLE_DEFAULT: "#99aab5",
                ROLE_GREEN: "#1f8b4c",
                ROLE_GREY: "#979c9f",
                ROLE_LIGHT_BLUE: "#99aab5",
                ROLE_LIGHT_GREEN: "#2ecc71",
                ROLE_LIGHT_GREY: "#95a5a6",
                ROLE_MAGENTA: "#e91e63",
                ROLE_ORANGE: "#e67e22",
                ROLE_PURPLE: "#9b59b6",
                ROLE_SALMON: "#e74c3c",
                ROLE_SKY_BLUE: "#3498db",
                ROLE_TAN: "#c27c0e",
                ROLE_TEAL: "#1abc9c",
                ROLE_TERRACOTTA: "#992d22",
                ROLE_YELLOW: "#f1c40f",
                SAMSUNG: "#1429a0",
                SKYPE: "#009dd7",
                SPOTIFY: "#1db954",
                STEAM: "#182332",
                TEAL_100: "#f4fbfd",
                TEAL_130: "#e9f9fd",
                TEAL_160: "#d3f4fb",
                TEAL_200: "#b1eff9",
                TEAL_230: "#7ee7f7",
                TEAL_260: "#5edbef",
                TEAL_300: "#47cbe2",
                TEAL_330: "#35bcd5",
                TEAL_345: "#2eb0c9",
                TEAL_360: "#289fb6",
                TEAL_400: "#248da1",
                TEAL_430: "#207a8d",
                TEAL_460: "#1b6b7c",
                TEAL_500: "#175e6d",
                TEAL_530: "#13525f",
                TEAL_560: "#0f4954",
                TEAL_600: "#0c4049",
                TEAL_630: "#0a3942",
                TEAL_660: "#08333a",
                TEAL_700: "#062d34",
                TEAL_730: "#05272d",
                TEAL_760: "#042227",
                TEAL_800: "#031d21",
                TEAL_830: "#02191d",
                TEAL_860: "#021619",
                TEAL_900: "#011215",
                TRANSPARENT: "#00000000",
                TWITCH: "#593695",
                TWITTER: "#1da1f2",
                WHITE_100: "#ffffff",
                WHITE_130: "#ffffff",
                WHITE_160: "#ffffff",
                WHITE_200: "#ffffff",
                WHITE_230: "#ffffff",
                WHITE_260: "#ffffff",
                WHITE_300: "#ffffff",
                WHITE_330: "#ffffff",
                WHITE_345: "#ffffff",
                WHITE_360: "#ffffff",
                WHITE_400: "#ffffff",
                WHITE_430: "#ffffff",
                WHITE_460: "#ffffff",
                WHITE_500: "#ffffff",
                WHITE_530: "#e8e8e8",
                WHITE_560: "#cfcfcf",
                WHITE_600: "#adadad",
                WHITE_630: "#969696",
                WHITE_660: "#838383",
                WHITE_700: "#666666",
                WHITE_730: "#5f5f5f",
                WHITE_760: "#585858",
                WHITE_800: "#4d4d4d",
                WHITE_830: "#3b3b3b",
                WHITE_860: "#262626",
                WHITE_900: "#0d0d0d",
                XBOX: "#107c10",
                YELLOW_100: "#fff8ef",
                YELLOW_130: "#fff4e8",
                YELLOW_160: "#ffebd3",
                YELLOW_200: "#fee0b6",
                YELLOW_230: "#fdd18c",
                YELLOW_260: "#fcc145",
                YELLOW_300: "#f0b232",
                YELLOW_330: "#e1a42a",
                YELLOW_345: "#d49824",
                YELLOW_360: "#bf861c",
                YELLOW_400: "#af7615",
                YELLOW_430: "#9a650d",
                YELLOW_460: "#8a5709",
                YELLOW_500: "#7c4b04",
                YELLOW_530: "#6d4104",
                YELLOW_560: "#613803",
                YELLOW_600: "#543203",
                YELLOW_630: "#4c2d03",
                YELLOW_660: "#432803",
                YELLOW_700: "#3b2303",
                YELLOW_730: "#351e02",
                YELLOW_760: "#2e1a02",
                YELLOW_800: "#271602",
                YELLOW_830: "#221302",
                YELLOW_860: "#1c1002",
                YELLOW_900: "#160e02",
                YOUTUBE: "#cb2120"
            }
        }
}