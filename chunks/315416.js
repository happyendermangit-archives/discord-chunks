function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return u
        }
    });
    var n = s("470079"),
        l = s("442837"),
        a = s("897285"),
        r = s("924301");

    function u(e, t, s) {
        let u = (0, l.useStateFromStores)([r.default], () => r.default.getUserCount(t, s));
        return (0, n.useEffect)(() => {
            null != e && null != t && a.default.getGuildEventUserCounts(e, t, null != s ? [s] : [])
        }, [t, e, s]), u
    }
}