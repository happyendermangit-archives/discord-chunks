function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("376556"),
        l = n("575365"),
        a = n("49111"),
        s = n("782340");

    function r(e) {
        var t;
        let n = null !== (t = (0, l.default)(e)) && void 0 !== t ? t : "";
        switch (n) {
            case a.ActivityGamePlatforms.PS4:
            case a.ActivityGamePlatforms.PS5:
                return s.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                    platform: n.toUpperCase()
                });
            case a.ActivityGamePlatforms.XBOX:
            case a.ActivityGamePlatforms.SAMSUNG:
                return s.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                    platform: i.default.get(n).name
                });
            default:
                return s.default.Messages.USER_ACTIVITY_HEADER_PLAYING
        }
    }
}