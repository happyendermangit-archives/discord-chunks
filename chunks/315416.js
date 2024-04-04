function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        default: function() {
            return u
        }
    });
    var a = l("470079"),
        n = l("442837"),
        s = l("897285"),
        r = l("924301");

    function u(e, t, l) {
        let u = (0, n.useStateFromStores)([r.default], () => r.default.getUserCount(t, l));
        return (0, a.useEffect)(() => {
            null != e && null != t && s.default.getGuildEventUserCounts(e, t, null != l ? [l] : [])
        }, [t, e, l]), u
    }
}