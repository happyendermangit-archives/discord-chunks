function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return _
        }
    });
    var i = n("735250"),
        r = n("470079"),
        a = n("442837"),
        s = n("451478"),
        o = n("576125"),
        l = n("465858"),
        u = n("112843");

    function d(e) {
        let {
            confettiSpawnRef: t,
            shouldFire: n
        } = e, i = (0, a.useStateFromStores)([s.default], () => s.default.isFocused()), o = (0, u.default)(), d = (0, l.default)(t);
        return r.useEffect(() => {
            i && n && null != d && o.fire(d.x, d.y)
        }, [o, i, d, n]), null
    }

    function _(e) {
        return (0, i.jsx)(o.default, {
            confettiLocation: e.confettiLocation,
            children: (0, i.jsx)(d, {
                ...e
            })
        })
    }
}