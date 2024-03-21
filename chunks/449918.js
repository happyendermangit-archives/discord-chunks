function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getColor: function() {
            return _
        },
        useColorValue: function() {
            return f
        },
        useDesaturatedColorString: function() {
            return E
        },
        useThemedColorValue: function() {
            return h
        }
    }), n("781738");
    var i = n("884691"),
        s = n("10371"),
        r = n.n(s),
        a = n("368979"),
        o = n("65597"),
        l = n("669491"),
        u = n("841098"),
        d = n("206230");

    function c(e) {
        return e.toUpperCase().replace(/-/g, "_")
    }

    function _(e) {
        return l.default.unsafe_rawColors[c(e)].css
    }

    function f(e) {
        return null != e ? a.ColorDetails[e] : null
    }

    function E(e) {
        let t = (0, o.default)([d.default], () => d.default.saturation);
        return i.useMemo(() => {
            if (null == e) return null;
            if ("currentColor" === e || e.startsWith("var(")) return e;
            let n = r(e),
                i = n.set("hsl.s", n.get("hsl.s") * t);
            return i.hex()
        }, [e, t])
    }

    function h(e, t) {
        let n = (0, u.useTheme)(),
            s = (0, o.default)([d.default], () => d.default.saturation),
            r = i.useMemo(() => {
                if (null == e) return null;
                let i = l.default.colors[c(e)].resolve({
                        theme: null != t ? t : n,
                        saturation: s
                    }),
                    r = i.hex();
                return {
                    hex: r
                }
            }, [e, s, n, t]);
        return r
    }
    n("49111")
}