function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("629815");

    function o(e, t, n, o) {
        r.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
            channelId: e,
            applicationId: t,
            intent: o,
            analyticsLocations: n
        })
    }
}