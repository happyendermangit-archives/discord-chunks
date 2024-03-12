function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var l = n("884691"),
        a = n("446674"),
        s = n("933326"),
        r = n("398604");

    function u(e, t, n) {
        let u = (0, a.useStateFromStores)([r.default], () => r.default.getUserCount(t, n));
        return (0, l.useEffect)(() => {
            null != e && null != t && s.default.getGuildEventUserCounts(e, t, null != n ? [n] : [])
        }, [t, e, n]), u
    }
}