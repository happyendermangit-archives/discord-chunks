function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("36539"),
        l = n("49111");

    function a(e) {
        return null == e || null == e.type || e.type !== l.ActivityTypes.PLAYING ? null : (0, i.default)(e) ? l.ActivityGamePlatforms.XBOX : null != e.platform ? e.platform : l.ActivityGamePlatforms.DESKTOP
    }
}