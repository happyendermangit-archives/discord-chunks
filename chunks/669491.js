function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("781738");
    var i = n("10371"),
        s = n.n(i),
        r = n("555123"),
        a = n.n(r),
        o = n("91423"),
        l = n.n(o),
        u = n("58539"),
        d = n("697930"),
        c = n("891600"),
        f = n("790217"),
        _ = n("593251"),
        h = n("130285");
    let {
        Themes: E
    } = h._private, {
        SemanticColors: g,
        RawColors: m
    } = u._private, {
        Shadows: p
    } = f._private, {
        Spacing: S
    } = _._private, {
        Modules: v
    } = d._private, T = l(m, e => s(e)), I = {
        themes: E,
        modules: v,
        colors: l(g, (e, t) => ({
            css: N(t),
            resolve(t) {
                let n = e[t.theme],
                    i = n.raw,
                    s = n.opacity;
                if (1 === s) return I.unsafe_rawColors[i].resolve(t);
                {
                    let e = T[i];
                    return 0 !== e.alpha() && 1 !== s && (e = e.alpha(s)), C(e, t.saturation)
                }
            }
        })),
        unsafe_rawColors: l(m, (e, t) => {
            let n = T[t];
            return {
                css: N(t),
                resolve: e => C(n, e.saturation)
            }
        }),
        shadows: l(p, (e, t) => ({
            css: N(t),
            resolve: t => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: c.Radius,
        spacing: l(S, e => "".concat(e, "px"))
    };

    function C(e, t) {
        return {
            spring() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return A(e, t, n).hex("rgba")
            },
            hsl() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return A(e, t, n).css("hsl")
            },
            hex() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return A(e, t, n).hex()
            },
            int() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = A(e, t, n),
                    s = i.num();
                return 1 !== i.alpha() ? s << 8 | Math.round(255 * i.alpha()) : s
            }
        }
    }

    function A(e, t, n) {
        var i;
        let s = a(null !== (i = n.opacity) && void 0 !== i ? i : 1, 0, 1),
            r = e;
        return 1 !== t && (r = r.set("hsl.s", r.get("hsl.s") * t)), 1 !== s && (r = r.alpha(r.alpha() * s)), r
    }

    function y(e) {
        return e.toLowerCase().replace(/_/g, "-")
    }

    function N(e, t) {
        let n = null != t ? y(t) : null,
            i = y(e);
        return "var(--".concat([n, i].filter(Boolean).join("-"), ")")
    }
    var R = I
}