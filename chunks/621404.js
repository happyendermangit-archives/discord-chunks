function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return i
        }
    });
    var n = r("470079"),
        a = r("898511"),
        u = r("320355"),
        l = r("89536");

    function i(e, t, r) {
        var i = (0, a.useStateFromStores)([l.default], function() {
            return l.default.getUserCount(t, r)
        });
        return (0, n.useEffect)(function() {
            null != e && null != t && u.default.getGuildEventUserCounts(e, t, null != r ? [r] : [])
        }, [t, e, r]), i
    }
}