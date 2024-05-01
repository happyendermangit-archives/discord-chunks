function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("442837"),
        r = n("314897"),
        s = n("317381");

    function a(e) {
        let t = r.default.getId(),
            {
                userActivity: n,
                inActivity: a
            } = (0, i.useStateFromStoresObject)([s.default], () => {
                var n;
                let i = s.default.getSelfEmbeddedActivityForChannel(e),
                    r = null === (n = s.default.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === (null == i ? void 0 : i.applicationId))) || void 0 === n ? void 0 : n.userIds,
                    a = null == r ? void 0 : r.has(t);
                return {
                    userActivity: i,
                    inActivity: null != a && a
                }
            });
        return {
            userActivity: n,
            inActivity: a
        }
    }
}