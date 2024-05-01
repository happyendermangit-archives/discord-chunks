function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("442837"),
        r = n("314897"),
        a = n("317381");

    function s(e) {
        let t = r.default.getId(),
            {
                userActivity: n,
                inActivity: s
            } = (0, i.useStateFromStoresObject)([a.default], () => {
                var n;
                let i = a.default.getSelfEmbeddedActivityForChannel(e),
                    r = null === (n = a.default.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === (null == i ? void 0 : i.applicationId))) || void 0 === n ? void 0 : n.userIds,
                    s = null == r ? void 0 : r.has(t);
                return {
                    userActivity: i,
                    inActivity: null != s && s
                }
            });
        return {
            userActivity: n,
            inActivity: s
        }
    }
}