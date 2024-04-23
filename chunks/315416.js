function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var s = n("470079"),
        l = n("442837"),
        a = n("897285"),
        r = n("924301");

    function u(e, t, n) {
        let u = (0, l.useStateFromStores)([r.default], () => r.default.getUserCount(t, n));
        return (0, s.useEffect)(() => {
            null != e && null != t && a.default.getGuildEventUserCounts(e, t, null != n ? [n] : [])
        }, [t, e, n]), u
    }
}