function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("386823"),
        o = n("491049"),
        i = n("281767"),
        a = n("941504");

    function u(e) {
        var t, n = null !== (t = (0, o.default)(e)) && void 0 !== t ? t : "";
        switch (n) {
            case i.ActivityGamePlatforms.PS4:
            case i.ActivityGamePlatforms.PS5:
                return a.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                    platform: n.toUpperCase()
                });
            case i.ActivityGamePlatforms.XBOX:
            case i.ActivityGamePlatforms.SAMSUNG:
                return a.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                    platform: r.default.get(n).name
                });
            default:
                return a.default.Messages.USER_ACTIVITY_HEADER_PLAYING
        }
    }
}