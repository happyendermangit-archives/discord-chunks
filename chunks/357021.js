function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("446674"),
        s = n("471671"),
        r = n("232268"),
        o = n("759432"),
        u = n("798592");

    function d(e) {
        let {
            confettiSpawnRef: t,
            shouldFire: n
        } = e, l = (0, a.useStateFromStores)([s.default], () => s.default.isFocused()), r = (0, u.default)(), d = (0, o.default)(t);
        return i.useEffect(() => {
            l && n && null != d && r.fire(d.x, d.y)
        }, [r, l, d, n]), null
    }

    function c(e) {
        return (0, l.jsx)(r.default, {
            confettiLocation: e.confettiLocation,
            children: (0, l.jsx)(d, {
                ...e
            })
        })
    }
}