function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("470079"),
        r = n("566620");

    function s(e) {
        let {
            channel: t,
            userActivity: n,
            inActivity: s,
            embeddedActivitiesManager: a
        } = e;
        i.useEffect(() => {
            !s && (0, r.launchEmbeddedActivity)(t.id)
        }, [null == n ? void 0 : n.applicationId, t.id, s, a])
    }
}