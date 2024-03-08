function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("954016"),
        l = n("49111");

    function a(e) {
        return null != e && (e.application_id === i.XBOX_ACTIVITY_APPLICATION_ID || e.platform === l.ActivityGamePlatforms.XBOX)
    }
}