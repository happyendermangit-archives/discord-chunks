function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useEmbeddedActivityLifecycle: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("566620"),
        s = n("246106"),
        a = n("797398"),
        o = n("513202");
    let l = e => {
        let {
            userActivity: t,
            inActivity: n
        } = (0, s.default)(e.id), l = o.default;
        return (0, a.default)({
            channel: e,
            userActivity: t,
            inActivity: n,
            embeddedActivitiesManager: l
        }), i.useEffect(() => () => {
            (null == t ? void 0 : t.applicationId) != null && (0, r.disconnectEmbeddedActivity)(e.id, null == t ? void 0 : t.applicationId)
        }, [e.id, null == t ? void 0 : t.applicationId]), {
            isLoading: !n
        }
    }
}