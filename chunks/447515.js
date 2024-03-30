function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("688619"),
        o = n.n(r),
        i = n("595182"),
        a = n.n(i),
        u = n("402903"),
        s = n.n(u),
        l = n("612616"),
        c = n("534807"),
        f = n("57000"),
        d = n("422273"),
        _ = n("809283"),
        E = n("40746")._private.Themes,
        p = l._private.SemanticColors,
        m = l._private.RawColors,
        y = d._private.Shadows,
        I = _._private.Spacing,
        h = c._private.Modules,
        O = s()(m, function(e) {
            return o()(e)
        }),
        T = {
            themes: E,
            modules: h,
            colors: s()(p, function(e, t) {
                return {
                    css: A(t),
                    resolve: function(t) {
                        var n = e[t.theme],
                            r = n.raw,
                            o = n.opacity;
                        if (1 === o) return T.unsafe_rawColors[r].resolve(t);
                        var i = O[r];
                        return 0 !== i.alpha() && 1 !== o && (i = i.alpha(o)), S(i, t.saturation)
                    }
                }
            }),
            unsafe_rawColors: s()(m, function(e, t) {
                var n = O[t];
                return {
                    css: A(t),
                    resolve: function(e) {
                        return S(n, e.saturation)
                    }
                }
            }),
            shadows: s()(y, function(e, t) {
                return {
                    css: A(t),
                    resolve: function(t) {
                        return {
                            boxShadow: e[t.theme].boxShadow,
                            filter: e[t.theme].filter,
                            nativeStyles: e[t.theme].nativeStyles
                        }
                    }
                }
            }),
            radii: f.Radius,
            spacing: s()(I, function(e) {
                return "".concat(e, "px")
            })
        };

    function S(e, t) {
        return {
            spring: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return v(e, t, n).hex("rgba")
            },
            hsl: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return v(e, t, n).css("hsl")
            },
            hex: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return v(e, t, n).hex()
            },
            int: function() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = v(e, t, n),
                    o = r.num();
                return 1 !== r.alpha() ? o << 8 | Math.round(255 * r.alpha()) : o
            }
        }
    }

    function v(e, t, n) {
        var r, o = a()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1),
            i = e;
        return 1 !== t && (i = i.set("hsl.s", i.get("hsl.s") * t)), 1 !== o && (i = i.alpha(i.alpha() * o)), i
    }

    function g(e) {
        return e.toLowerCase().replace(/_/g, "-")
    }

    function A(e, t) {
        var n = null != t ? g(t) : null,
            r = g(e);
        return "var(--".concat([n, r].filter(Boolean).join("-"), ")")
    }
    t.default = T
}