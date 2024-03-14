function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return a
        }
    });
    var n = i("450484"),
        l = i("782340");

    function a(t, e) {
        switch (e) {
            case n.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                return t.hasSpotifyAccount ? l.default.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                    platform: n.SPOTIFY_PLATFORM_NAME
                }) : l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: n.SPOTIFY_PLATFORM_NAME
                });
            case n.SpotifyActionTypes.EMBED_SYNC:
                if (!t.hasSpotifyAccount) return l.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: n.SPOTIFY_PLATFORM_NAME
                });
                if (t.syncingWithUser || t.syncingWithParty) return l.default.Messages.INVITE_EMBED_JOINED;
                return l.default.Messages.JOIN;
            case n.SpotifyActionTypes.USER_ACTIVITY_SYNC:
            default:
                return
        }
    }
}