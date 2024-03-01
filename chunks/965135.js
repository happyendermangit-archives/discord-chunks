function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEmbeddedActivityLifecycle: function() {
            return s
        }
    });
    var a = n("884691"),
        l = n("550766"),
        i = n("505259"),
        o = n("676065"),
        r = n("141962");
    let s = e => {
        let {
            userActivity: t,
            inActivity: n
        } = (0, i.default)(e.id), s = r.default;
        return (0, o.default)({
            channel: e,
            userActivity: t,
            inActivity: n,
            embeddedActivitiesManager: s
        }), a.useEffect(() => () => {
            (null == t ? void 0 : t.applicationId) != null && (0, l.disconnectEmbeddedActivity)(e.id, null == t ? void 0 : t.applicationId)
        }, [e.id, null == t ? void 0 : t.applicationId]), {
            isLoading: !n
        }
    }
}