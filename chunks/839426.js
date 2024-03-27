function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("570140");

    function r(e, t, n, r) {
        i.default.dispatch({
            type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
            channelId: e,
            applicationId: t,
            intent: r,
            analyticsLocations: n
        })
    }
}