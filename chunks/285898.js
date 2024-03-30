function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEmbeddedActivityLifecycle: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("623416"),
        i = n("44550"),
        a = n("456015"),
        u = n("972977"),
        s = function(e) {
            var t = (0, i.default)(e.id),
                n = t.userActivity,
                s = t.inActivity,
                l = u.default;
            return (0, a.default)({
                channel: e,
                userActivity: n,
                inActivity: s,
                embeddedActivitiesManager: l
            }), r.useEffect(function() {
                return function() {
                    (null == n ? void 0 : n.applicationId) != null && (0, o.disconnectEmbeddedActivity)(e.id, null == n ? void 0 : n.applicationId)
                }
            }, [e.id, null == n ? void 0 : n.applicationId]), {
                isLoading: !s
            }
        }
}