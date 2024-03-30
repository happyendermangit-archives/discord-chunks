function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("898511"),
        o = n("217014"),
        i = n("632142");

    function a(e) {
        var t = o.default.getId(),
            n = (0, r.useStateFromStoresObject)([i.default], function() {
                var n, r = i.default.getSelfEmbeddedActivityForChannel(e),
                    o = null === (n = i.default.getEmbeddedActivitiesForChannel(e).find(function(e) {
                        return e.applicationId === (null == r ? void 0 : r.applicationId)
                    })) || void 0 === n ? void 0 : n.userIds,
                    a = null == o ? void 0 : o.has(t);
                return {
                    userActivity: r,
                    inActivity: null != a && a
                }
            });
        return {
            userActivity: n.userActivity,
            inActivity: n.inActivity
        }
    }
}