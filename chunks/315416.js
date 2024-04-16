function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return u
        }
    });
    var l = a("470079"),
        n = a("442837"),
        s = a("897285"),
        r = a("924301");

    function u(e, t, a) {
        let u = (0, n.useStateFromStores)([r.default], () => r.default.getUserCount(t, a));
        return (0, l.useEffect)(() => {
            null != e && null != t && s.default.getGuildEventUserCounts(e, t, null != a ? [a] : [])
        }, [t, e, a]), u
    }
}