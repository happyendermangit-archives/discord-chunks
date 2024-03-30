function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("99406"),
        o = n("281767");

    function i(e) {
        return null == e || null == e.type || e.type !== o.ActivityTypes.PLAYING ? null : (0, r.default)(e) ? o.ActivityGamePlatforms.XBOX : null != e.platform ? e.platform : o.ActivityGamePlatforms.DESKTOP
    }
}