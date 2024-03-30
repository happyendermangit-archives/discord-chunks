function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("997133"),
        o = n("281767");

    function i(e) {
        return null != e && (e.application_id === r.XBOX_ACTIVITY_APPLICATION_ID || e.platform === o.ActivityGamePlatforms.XBOX)
    }
}