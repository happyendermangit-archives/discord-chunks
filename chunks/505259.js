function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var a = n("446674"),
        l = n("271938"),
        i = n("191225");

    function o(e) {
        let t = l.default.getId(),
            {
                userActivity: n,
                inActivity: o
            } = (0, a.useStateFromStoresObject)([i.default], () => {
                var n;
                let a = i.default.getSelfEmbeddedActivityForChannel(e),
                    l = i.default.getEmbeddedActivitiesForChannel(e),
                    o = null === (n = l.find(e => e.applicationId === (null == a ? void 0 : a.applicationId))) || void 0 === n ? void 0 : n.userIds,
                    r = null == o ? void 0 : o.has(t);
                return {
                    userActivity: a,
                    inActivity: null != r && r
                }
            });
        return {
            userActivity: n,
            inActivity: o
        }
    }
}