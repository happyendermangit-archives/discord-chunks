function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("830567"),
        o = n("935776"),
        i = n("941504");

    function a(e, t, n) {
        switch (t) {
            case o.SpotifyActionTypes.USER_ACTIVITY_PLAY:
                if (e.isCurrentUser) return i.default.Messages.USER_ACTIVITY_CANNOT_PLAY_SELF;
                if (e.playingSameTrack) return i.default.Messages.USER_ACTIVITY_ALREADY_PLAYING;
                if (e.notPlayable) return i.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: o.SPOTIFY_PLATFORM_NAME
                });
                return;
            case o.SpotifyActionTypes.USER_ACTIVITY_SYNC:
                if (e.isCurrentUser) return i.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (e.syncingWithUser || e.syncingWithParty) return i.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                return i.default.Messages.USER_ACTIVITY_LISTEN_ALONG_DESCRIPTION.format({
                    name: null != n ? n : r.default.getName(e.user)
                });
            case o.SpotifyActionTypes.EMBED_SYNC:
                if (e.isCurrentUser) return i.default.Messages.USER_ACTIVITY_CANNOT_SYNC_SELF;
                if (e.syncingWithUser || e.syncingWithParty) return i.default.Messages.USER_ACTIVITY_ALREADY_SYNCING;
                if (e.notPlayable) return i.default.Messages.USER_ACTIVITY_NOT_DETECTED.format({
                    name: o.SPOTIFY_PLATFORM_NAME
                });
                return;
            default:
                return
        }
    }
}