function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("913144");

    function s(e, t, n, s) {
        i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
            channelId: e,
            applicationId: t,
            intent: s,
            analyticsLocations: n
        })
    }
}