function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("51144"),
        r = n("616922"),
        a = n("689938");

    function s(e, t, n) {
        switch (t) {
            case r.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                if (e.playingSameTrack) return a.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: r.SPOTIFY_PLATFORM_NAME
                });
                return;
            case r.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                return a.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                    name: null != n ? n : i.default.getName(e.user)
                });
            case r.SpotifyActionTypes.EMBED_SYNC:
                if (e.isCurrentUser) return a.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (e.syncingWithUser || e.syncingWithParty) return a.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                if (e.notPlayable) return a.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: r.SPOTIFY_PLATFORM_NAME
                });
                return;
            default:
                return
        }
    }
}