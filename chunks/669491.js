function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("781738");
    var i = n("10371"),
        s = n.n(i),
        r = n("773179"),
        a = n.n(r),
        o = n("58539"),
        l = n("891600"),
        u = n("790217"),
        d = n("593251"),
        c = n("130285"),
        f = n("697930");
    let {
        Themes: _
    } = c._private, {
        SemanticColors: h,
        RawColors: E
    } = o._private, {
        Shadows: g
    } = u._private, {
        Spacing: m
    } = d._private, {
        Modules: p
    } = f._private, S = a.mapValues(E, e => s(e)), v = {
        themes: _,
        modules: p,
        colors: a.mapValues(h, (e, t) => ({
            css: A(t),
            resolve(t) {
                let n = e[t.theme],
                    i = n.raw,
                    s = n.opacity;
                if (1 === s) return v.unsafe_rawColors[i].resolve(t);
                {
                    let e = S[i];
                    return 0 !== e.alpha() && 1 !== s && (e = e.alpha(s)), T(e, t.saturation)
                }
            }
        })),
        unsafe_rawColors: a.mapValues(E, (e, t) => {
            let n = S[t];
            return {
                css: A(t),
                resolve: e => T(n, e.saturation)
            }
        }),
        shadows: a.mapValues(g, (e, t) => ({
            css: A(t),
            resolve: t => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: l.Radius,
        spacing: a.mapValues(m, e => "".concat(e, "px"))
    };

    function T(e, t) {
        return {
            spring() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return I(e, t, n).hex("rgba")
            },
            hsl() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return I(e, t, n).css("hsl")
            },
            hex() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return I(e, t, n).hex()
            },
            int() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = I(e, t, n),
                    s = i.num();
                return 1 !== i.alpha() ? s << 8 | Math.round(255 * i.alpha()) : s
            }
        }
    }

    function I(e, t, n) {
        var i;
        let s = a.clamp(null !== (i = n.opacity) && void 0 !== i ? i : 1, 0, 1),
            r = e;
        return 1 !== t && (r = r.set("hsl.s", r.get("hsl.s") * t)), 1 !== s && (r = r.alpha(r.alpha() * s)), r
    }

    function C(e) {
        return e.toLowerCase().replace(/_/g, "-")
    }

    function A(e, t) {
        let n = null != t ? C(t) : null,
            i = C(e);
        return "var(--".concat([n, i].filter(Boolean).join("-"), ")")
    }
    var y = v
}