function(_, E, I) {
    "use strict";
    I.r(E), I.d(E, {
        default: function() {
            return l
        }
    }), I("70102");
    var e = I("10371"),
        a = I.n(e),
        o = I("91423"),
        R = I.n(o),
        t = I("58539"),
        A = I("891600"),
        T = I("790217"),
        r = I("593251"),
        N = I("130285"),
        i = I("515950");
    let {
        Themes: c
    } = N._private, {
        SemanticColors: O,
        RawColors: n
    } = t._private, {
        Shadows: L
    } = T._private, {
        Spacing: D
    } = r._private, S = Symbol("semanticColor"), C = {
        themes: c,
        colors: R(O, (_, E) => ({
            [S]: E
        })),
        unsafe_rawColors: n,
        shadows: R(L, _ => {
            function E(E) {
                return {
                    resolve: (I, e) => E(_[I].nativeStyles, e)
                }
            }
            return {
                shadowOffset: E(_ => _.shadowOffset),
                shadowColor: E((_, E) => E ? _.shadowColorAndroid : _.shadowColor),
                shadowOpacity: E(_ => _.shadowOpacity),
                shadowRadius: E(_ => _.shadowRadius),
                elevation: E(_ => _.elevation)
            }
        }),
        radii: A.Radius,
        spacing: D,
        internal: {
            isSemanticColor: _ => "object" == typeof _ && null !== _ && S in _,
            resolveSemanticColor(_, E, I) {
                var e, o;
                _ = function(_) {
                    if ("string" == typeof _) {
                        let E = _.toUpperCase();
                        if (!(E in c)) throw Error("Invalid theme: ".concat(_));
                        _ = c[E]
                    }
                    return _
                }(_);
                let R = O[E[S]],
                    {
                        category: t
                    } = R,
                    A = R[_],
                    T = n[A.raw],
                    r = A.opacity;
                if ((null == I ? void 0 : I.gradient) != null && "gradient" in R) {
                    let _ = R.gradient,
                        E = _[null == I ? void 0 : I.gradient.theme];
                    if (null != E) {
                        let _ = a(E.color in n ? n[E.color] : null == I ? void 0 : I.gradient.colors[E.color]);
                        "saturation" in E && (_ = _.set("hsl.s", E.saturation)), "lightness" in E && (_ = _.set("hsl.l", E.lightness)), T = _.hex(), r = "opacity" in E ? E.opacity : 1
                    }
                }
                let N = null !== (e = null == I ? void 0 : I.contrast) && void 0 !== e ? e : 1,
                    L = null !== (o = null == I ? void 0 : I.saturation) && void 0 !== o ? o : 1;
                if (L < 1 && (T = (0, i.transformColorForReducedSaturation)(T, t, L)), 1 !== N && (T = (0, i.transformColorContrast)(T, t, _, N)), 1 === r) return T;
                {
                    let _ = a(T);
                    return _.alpha(r).hex()
                }
            },
            adjustColorSaturation: (_, E, I) => (0, i.transformColorForReducedSaturation)(_, I, E),
            adjustColorContrast: (_, E, I, e) => (0, i.transformColorContrast)(_, I, e, E)
        }
    };
    var l = C
}