function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("470079"),
        o = n("623416");

    function i(e) {
        var t = e.channel,
            n = e.userActivity,
            i = e.inActivity,
            a = e.embeddedActivitiesManager;
        r.useEffect(function() {
            !i && (0, o.launchEmbeddedActivity)(t.id)
        }, [null == n ? void 0 : n.applicationId, t.id, i, a])
    }
}