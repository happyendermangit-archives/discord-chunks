function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("290976"),
        a = n("41218"),
        u = n("143040"),
        s = n("801776");

    function l(e) {
        var t = e.confettiSpawnRef,
            n = e.shouldFire,
            a = (0, o.useStateFromStores)([i.default], function() {
                return i.default.isFocused()
            }),
            l = (0, s.default)(),
            c = (0, u.default)(t);
        return r.useEffect(function() {
            a && n && null != c && l.fire(c.x, c.y)
        }, [l, a, c, n]), null
    }

    function c(e) {
        return r.createElement(a.default, {
            confettiLocation: e.confettiLocation
        }, r.createElement(l, e))
    }
}