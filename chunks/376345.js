function(_, E, e) {
    "use strict";
    e.r(E), e("411104");
    var I = e("688619"),
        o = e.n(I),
        a = e("402903"),
        R = e.n(a),
        t = e("190558"),
        A = e("949180"),
        T = e("777910"),
        r = e("897710"),
        N = e("15202"),
        i = e("211468");
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
        colors: R()(O, (_, E) => ({
            [S]: E
        })),
        unsafe_rawColors: n,
        shadows: R()(L, _ => {
            function E(E) {
                return {
                    resolve: (e, I) => E(_[e].nativeStyles, I)
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
            resolveSemanticColor(_, E, e) {
                var I, a;
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
                if ((null == e ? void 0 : e.gradient) != null && "gradient" in R) {
                    let _ = R.gradient[null == e ? void 0 : e.gradient.theme];
                    if (null != _) {
                        let E = o()(_.color in n ? n[_.color] : null == e ? void 0 : e.gradient.colors[_.color]);
                        "saturation" in _ && (E = E.set("hsl.s", _.saturation)), "lightness" in _ && (E = E.set("hsl.l", _.lightness)), T = E.hex(), r = "opacity" in _ ? _.opacity : 1
                    }
                }
                let N = null !== (I = null == e ? void 0 : e.contrast) && void 0 !== I ? I : 1,
                    L = null !== (a = null == e ? void 0 : e.saturation) && void 0 !== a ? a : 1;
                return (L < 1 && (T = (0, i.transformColorForReducedSaturation)(T, t, L)), 1 !== N && (T = (0, i.transformColorContrast)(T, t, _, N)), 1 === r) ? T : o()(T).alpha(r).hex()
            },
            adjustColorSaturation: (_, E, e) => (0, i.transformColorForReducedSaturation)(_, e, E),
            adjustColorContrast: (_, E, e, I) => (0, i.transformColorContrast)(_, e, I, E)
        }
    };
    E.default = C
}