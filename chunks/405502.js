function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getColor: function() {
            return d
        },
        useColorValue: function() {
            return _
        },
        useDesaturatedColorString: function() {
            return E
        },
        useThemedColorValue: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("688619"),
        i = n.n(o),
        a = n("720337"),
        u = n("37295"),
        s = n("447515"),
        l = n("523263"),
        c = n("622780");

    function f(e) {
        return e.toUpperCase().replace(/-/g, "_")
    }

    function d(e) {
        return s.default.unsafe_rawColors[f(e)].css
    }

    function _(e) {
        return null != e ? a.ColorDetails[e] : null
    }

    function E(e) {
        var t = (0, u.useStateFromStores)([c.default], function() {
            return c.default.saturation
        });
        return r.useMemo(function() {
            if (null == e) return null;
            if ("currentColor" === e || e.startsWith("var(")) return e;
            var n = i()(e);
            return n.set("hsl.s", n.get("hsl.s") * t).hex()
        }, [e, t])
    }

    function p(e, t) {
        var n = (0, l.useTheme)(),
            o = (0, u.useStateFromStores)([c.default], function() {
                return c.default.saturation
            });
        return r.useMemo(function() {
            return null == e ? null : {
                hex: s.default.colors[f(e)].resolve({
                    theme: null != t ? t : n,
                    saturation: o
                }).hex()
            }
        }, [e, o, n, t])
    }
    n("281767")
}