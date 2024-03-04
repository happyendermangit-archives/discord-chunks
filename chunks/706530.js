function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StreamIssueReportReasons: function() {
            return r
        },
        DARWIN_SOUNDSHARE_VERSION: function() {
            return l
        },
        DARWIN_SCKIT_VERSION: function() {
            return u
        },
        DARWIN_SCKIT_AUDIO_VERSION: function() {
            return d
        },
        WINDOWS_SOUNDSHARE_VERSION: function() {
            return c
        },
        WINDOWS_GRAPHICS_CAPTURE_VERSION: function() {
            return f
        },
        StreamTypes: function() {
            return a
        },
        STREAM_NOTIFY_GUILD_MAX_SIZE: function() {
            return _
        }
    });
    var i, s, r, a, o = n("561467");
    (i = r || (r = {})).BLACK_SCREEN = "BLACK_SCREEN", i.BLURRY = "BLURRY", i.LAGGING = "LAGGING", i.OUT_OF_SYNC = "OUT_OF_SYNC", i.AUDIO_MISSING = "AUDIO_MISSING", i.AUDIO_POOR = "AUDIO_POOR", i.GAME_ISSUE = "GAME_ISSUE", i.STREAM_STOPPED = "STREAM_STOPPED", i.NO_ISSUE = "NO_ISSUE", i.OTHER = "OTHER";
    let l = ">=19.0.0",
        u = ">=22.0.0",
        d = ">=22.0.0",
        c = ">=10.0.17763",
        f = ">=10.0.22000";
    (s = a || (a = {})).GUILD = "guild", s.CALL = "call";
    let _ = o.Notifications.StreamNotificationsGuildMaxSize
}