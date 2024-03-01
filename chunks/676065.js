function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var a = n("884691"),
        l = n("550766");

    function i(e) {
        let {
            channel: t,
            userActivity: n,
            inActivity: i,
            embeddedActivitiesManager: o
        } = e;
        a.useEffect(() => {
            !i && (0, l.launchEmbeddedActivity)(t.id)
        }, [null == n ? void 0 : n.applicationId, t.id, i, o])
    }
}