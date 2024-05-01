function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("470079"),
        r = n("566620");

    function a(e) {
        let {
            channel: t,
            userActivity: n,
            inActivity: a,
            embeddedActivitiesManager: s
        } = e;
        i.useEffect(() => {
            !a && (0, r.launchEmbeddedActivity)(t.id)
        }, [null == n ? void 0 : n.applicationId, t.id, a, s])
    }
}