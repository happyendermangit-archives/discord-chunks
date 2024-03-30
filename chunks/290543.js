function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("935776"),
        o = n("941504");

    function i(e, t) {
        switch (t) {
            case r.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                return e.hasSpotifyAccount ? o.default.Messages.USER_ACTIVITY_PLAY_ON_PLATFORM.format({
                    platform: r.SPOTIFY_PLATFORM_NAME
                }) : o.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: r.SPOTIFY_PLATFORM_NAME
                });
            case r.SpotifyActionTypes.EMBED_SYNC:
                if (!e.hasSpotifyAccount) return o.default.Messages.USER_ACTIVITY_CONNECT_PLATFORM.format({
                    platform: r.SPOTIFY_PLATFORM_NAME
                });
                if (e.syncingWithUser || e.syncingWithParty) return o.default.Messages.INVITE_EMBED_JOINED;
                return o.default.Messages.JOIN;
            case r.SpotifyActionTypes.USER_ACTIVITY_SYNC:
            default:
                return
        }
    }
}