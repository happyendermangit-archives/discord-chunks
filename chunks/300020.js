function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("616922"),
        r = n("689938");

    function a(e, t) {
        switch (t) {
            case i.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                return e.hasSpotifyAccount ? r.default.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                    platform: i.SPOTIFY_PLATFORM_NAME
                }) : r.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: i.SPOTIFY_PLATFORM_NAME
                });
            case i.SpotifyActionTypes.EMBED_SYNC:
                if (!e.hasSpotifyAccount) return r.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: i.SPOTIFY_PLATFORM_NAME
                });
                if (e.syncingWithUser || e.syncingWithParty) return r.default.Messages.INVITE_EMBED_JOINED;
                return r.default.Messages.JOIN;
            case i.SpotifyActionTypes.USER_ACTIVITY_SYNC:
            default:
                return
        }
    }
}