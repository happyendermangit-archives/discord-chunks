function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("51144"),
        r = n("616922"),
        s = n("689938");

    function a(e, t, n) {
        switch (t) {
            case r.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                if (e.isCurrentUser) return s.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                if (e.playingSameTrack) return s.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                if (e.notPlayable) return s.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: r.SPOTIFY_PLATFORM_NAME
                });
                return;
            case r.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                if (e.isCurrentUser) return s.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (e.syncingWithUser || e.syncingWithParty) return s.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                return s.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                    name: null != n ? n : i.default.getName(e.user)
                });
            case r.SpotifyActionTypes.EMBED_SYNC:
                if (e.isCurrentUser) return s.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (e.syncingWithUser || e.syncingWithParty) return s.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                if (e.notPlayable) return s.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: r.SPOTIFY_PLATFORM_NAME
                });
                return;
            default:
                return
        }
    }
}