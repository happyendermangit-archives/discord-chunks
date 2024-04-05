function(e, t, n) {
    "use strict";
    n.r(t), n("757143");
    var i = n("688619"),
        r = n.n(i),
        s = n("595182"),
        a = n.n(s),
        o = n("402903"),
        l = n.n(o),
        u = n("190558"),
        d = n("387117"),
        _ = n("949180"),
        c = n("777910"),
        E = n("897710");
    let {
        Themes: I
    } = n("15202")._private, {
        SemanticColors: T,
        RawColors: f
    } = u._private, {
        Shadows: S
    } = c._private, {
        Spacing: A
    } = E._private, {
        Modules: h
    } = d._private, m = l()(f, e => r()(e)), N = {
        themes: I,
        modules: h,
        colors: l()(T, (e, t) => ({
            css: C(t),
            resolve(t) {
                let n = e[t.theme],
                    i = n.raw,
                    r = n.opacity;
                if (1 === r) return N.unsafe_rawColors[i].resolve(t);
                {
                    let e = m[i];
                    return 0 !== e.alpha() && 1 !== r && (e = e.alpha(r)), O(e, t.saturation)
                }
            }
        })),
        unsafe_rawColors: l()(f, (e, t) => {
            let n = m[t];
            return {
                css: C(t),
                resolve: e => O(n, e.saturation)
            }
        }),
        shadows: l()(S, (e, t) => ({
            css: C(t),
            resolve: t => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: _.Radius,
        spacing: l()(A, e => "".concat(e, "px"))
    };

    function O(e, t) {
        return {
            spring() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return p(e, t, n).hex("rgba")
            },
            hsl() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return p(e, t, n).css("hsl")
            },
            hex() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return p(e, t, n).hex()
            },
            int() {
                let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = p(e, t, n),
                    r = i.num();
                return 1 !== i.alpha() ? r << 8 | Math.round(255 * i.alpha()) : r
            }
        }
    }

    function p(e, t, n) {
        var i;
        let r = a()(null !== (i = n.opacity) && void 0 !== i ? i : 1, 0, 1),
            s = e;
        return 1 !== t && (s = s.set("hsl.s", s.get("hsl.s") * t)), 1 !== r && (s = s.alpha(s.alpha() * r)), s
    }

    function R(e) {
        return e.toLowerCase().replace(/_/g, "-")
    }

    function C(e, t) {
        let n = null != t ? R(t) : null,
            i = R(e);
        return "var(--".concat([n, i].filter(Boolean).join("-"), ")")
    }
    t.default = N
}