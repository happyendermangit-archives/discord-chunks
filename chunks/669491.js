function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return R
        }
    }), n("781738");
    var i = n("10371"),
        r = n.n(i),
        s = n("773179"),
        a = n.n(s),
        o = n("58539"),
        l = n("891600"),
        u = n("790217"),
        c = n("593251"),
        d = n("130285"),
        f = n("697930");
    let {
        Themes: E
    } = d._private, {
        SemanticColors: p,
        RawColors: h
    } = o._private, {
        Shadows: _
    } = u._private, {
        Spacing: S
    } = c._private, {
        Modules: m
    } = f._private, T = a.mapValues(h, e => r(e)), g = {
        themes: E,
        modules: m,
        colors: a.mapValues(p, (e, t) => ({
            css: A(t),
            resolve(t) {
                let n = e[t.theme],
                    i = n.raw,
                    r = n.opacity;
                if (1 === r) return g.unsafe_rawColors[i].resolve(t);
                {
                    let e = T[i];
                    return 0 !== e.alpha() && 1 !== r && (e = e.alpha(r)), I(e, t.saturation)
                }
            }
        })),
        unsafe_rawColors: a.mapValues(h, (e, t) => {
            let n = T[t];
            return {
                css: A(t),
                resolve: e => I(n, e.saturation)
            }
        }),
        shadows: a.mapValues(_, (e, t) => ({
            css: A(t),
            resolve: t => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: l.Radius,
        spacing: a.mapValues(S, e => "".concat(e, "px"))
    };

    function I(e, t) {
        return {
            spring() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return C(e, t, n).hex("rgba")
            },
            hsl() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return C(e, t, n).css("hsl")
            },
            hex() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return C(e, t, n).hex()
            },
            int() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = C(e, t, n),
                    r = i.num();
                return 1 !== i.alpha() ? r << 8 | Math.round(255 * i.alpha()) : r
            }
        }
    }

    function C(e, t, n) {
        var i;
        let r = a.clamp(null !== (i = n.opacity) && void 0 !== i ? i : 1, 0, 1),
            s = e;
        return 1 !== t && (s = s.set("hsl.s", s.get("hsl.s") * t)), 1 !== r && (s = s.alpha(s.alpha() * r)), s
    }

    function v(e) {
        return e.toLowerCase().replace(/_/g, "-")
    }

    function A(e, t) {
        let n = null != t ? v(t) : null,
            i = v(e);
        return "var(--".concat([n, i].filter(Boolean).join("-"), ")")
    }
    var R = g
}