function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getColor: function() {
            return c
        },
        useColorValue: function() {
            return E
        },
        useDesaturatedColorString: function() {
            return I
        },
        useThemedColorValue: function() {
            return T
        }
    }), n("757143");
    var i = n("470079"),
        r = n("688619"),
        a = n.n(r),
        s = n("691324"),
        o = n("399606"),
        l = n("692547"),
        u = n("410030"),
        d = n("607070");

    function _(e) {
        return e.toUpperCase().replace(/-/g, "_")
    }

    function c(e) {
        return l.default.unsafe_rawColors[_(e)].css
    }

    function E(e) {
        return null != e ? s.ColorDetails[e] : null
    }

    function I(e) {
        let t = (0, o.useStateFromStores)([d.default], () => d.default.saturation);
        return i.useMemo(() => {
            if (null == e) return null;
            if ("currentColor" === e || e.startsWith("var(")) return e;
            let n = a()(e);
            return n.set("hsl.s", n.get("hsl.s") * t).hex()
        }, [e, t])
    }

    function T(e, t) {
        let n = (0, u.useTheme)(),
            r = (0, o.useStateFromStores)([d.default], () => d.default.saturation);
        return i.useMemo(() => null == e ? null : {
            hex: l.default.colors[_(e)].resolve({
                theme: null != t ? t : n,
                saturation: r
            }).hex()
        }, [e, r, n, t])
    }
    n("981631")
}