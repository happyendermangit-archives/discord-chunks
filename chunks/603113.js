function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("802856"),
        r = n("981631");

    function s(e) {
        return null == e || null == e.type || e.type !== r.ActivityTypes.PLAYING ? null : (0, i.default)(e) ? r.ActivityGamePlatforms.XBOX : null != e.platform ? e.platform : r.ActivityGamePlatforms.DESKTOP
    }
}