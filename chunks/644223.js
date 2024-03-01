function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var s = n("913144");

    function i(e, t, n, i) {
        s.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
            channelId: e,
            applicationId: t,
            intent: i,
            analyticsLocations: n
        })
    }
}