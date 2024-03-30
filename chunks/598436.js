function(_, E, e) {
    "use strict";
    e.r(E);
    var o = e("688619"),
        t = e.n(o),
        I = e("402903"),
        a = e.n(I),
        r = e("612616"),
        R = e("57000"),
        A = e("422273"),
        T = e("809283"),
        n = e("40746"),
        N = e("218081"),
        i = n._private.Themes,
        c = r._private.SemanticColors,
        O = r._private.RawColors,
        L = A._private.Shadows,
        D = T._private.Spacing,
        S = Symbol("semanticColor"),
        C = {
            themes: i,
            colors: a()(c, function(_, E) {
                var e, o, t;
                return e = {}, o = S, t = E, o in e ? Object.defineProperty(e, o, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = t, e
            }),
            unsafe_rawColors: O,
            shadows: a()(L, function(_) {
                var E = function(E) {
                    return {
                        resolve: function(e, o) {
                            return E(_[e].nativeStyles, o)
                        }
                    }
                };
                return {
                    shadowOffset: E(function(_) {
                        return _.shadowOffset
                    }),
                    shadowColor: E(function(_, E) {
                        return E ? _.shadowColorAndroid : _.shadowColor
                    }),
                    shadowOpacity: E(function(_) {
                        return _.shadowOpacity
                    }),
                    shadowRadius: E(function(_) {
                        return _.shadowRadius
                    }),
                    elevation: E(function(_) {
                        return _.elevation
                    })
                }
            }),
            radii: R.Radius,
            spacing: D,
            internal: {
                isSemanticColor: function(_) {
                    return "object" == typeof _ && null !== _ && S in _
                },
                getSemanticColorName: function(_) {
                    return _[S]
                },
                resolveSemanticColor: function(_, E, e) {
                    _ = function(_) {
                        if ("string" == typeof _) {
                            var E = _.toUpperCase();
                            if (!(E in i)) throw Error("Invalid theme: ".concat(_));
                            _ = i[E]
                        }
                        return _
                    }(_);
                    var o, I, a = c[E[S]],
                        r = a.category,
                        R = a[_],
                        A = O[R.raw],
                        T = R.opacity;
                    if ((null == e ? void 0 : e.gradient) != null && "gradient" in a) {
                        var n = a.gradient[null == e ? void 0 : e.gradient.theme];
                        if (null != n) {
                            var L = t()(n.color in O ? O[n.color] : null == e ? void 0 : e.gradient.colors[n.color]);
                            "saturation" in n && (L = L.set("hsl.s", n.saturation)), "lightness" in n && (L = L.set("hsl.l", n.lightness)), A = L.hex(), T = "opacity" in n ? n.opacity : 1
                        }
                    }
                    var D = null !== (o = null == e ? void 0 : e.contrast) && void 0 !== o ? o : 1,
                        C = null !== (I = null == e ? void 0 : e.saturation) && void 0 !== I ? I : 1;
                    return (C < 1 && (A = (0, N.transformColorForReducedSaturation)(A, r, C)), 1 !== D && (A = (0, N.transformColorContrast)(A, r, _, D)), 1 === T) ? A : t()(A).alpha(T).hex()
                },
                adjustColorSaturation: function(_, E, e) {
                    return (0, N.transformColorForReducedSaturation)(_, e, E)
                },
                adjustColorContrast: function(_, E, e, o) {
                    return (0, N.transformColorContrast)(_, e, o, E)
                }
            }
        };
    E.default = C
}