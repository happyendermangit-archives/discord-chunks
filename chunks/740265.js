function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("726542"),
        r = n("603113"),
        s = n("981631"),
        a = n("689938");

    function o(e) {
        var t;
        let n = null !== (t = (0, r.default)(e)) && void 0 !== t ? t : "";
        switch (n) {
            case s.ActivityGamePlatforms.PS4:
            case s.ActivityGamePlatforms.PS5:
                return a.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                    platform: n.toUpperCase()
                });
            case s.ActivityGamePlatforms.XBOX:
            case s.ActivityGamePlatforms.SAMSUNG:
                return a.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                    platform: i.default.get(n).name
                });
            default:
                return a.default.Messages.USER_ACTIVITY_HEADER_PLAYING
        }
    }
}