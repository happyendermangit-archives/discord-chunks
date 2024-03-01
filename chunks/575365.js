function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var l = n("36539"),
        i = n("49111");

    function a(e) {
        return null == e || null == e.type || e.type !== i.ActivityTypes.PLAYING ? null : (0, l.default)(e) ? i.ActivityGamePlatforms.XBOX : null != e.platform ? e.platform : i.ActivityGamePlatforms.DESKTOP
    }
}