function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        DARWIN_SCKIT_AUDIO_VERSION: function() {
            return d
        },
        DARWIN_SCKIT_VERSION: function() {
            return u
        },
        DARWIN_SOUNDSHARE_VERSION: function() {
            return l
        },
        STREAM_NOTIFY_GUILD_MAX_SIZE: function() {
            return E
        },
        StreamIssueReportReasons: function() {
            return a
        },
        StreamTypes: function() {
            return s
        },
        WINDOWS_GRAPHICS_CAPTURE_VERSION: function() {
            return c
        },
        WINDOWS_SOUNDSHARE_VERSION: function() {
            return _
        }
    });
    var i, r, a, s, o = n("214627");
    (i = a || (a = {})).BLACK_SCREEN = "BLACK_SCREEN", i.BLURRY = "BLURRY", i.LAGGING = "LAGGING", i.OUT_OF_SYNC = "OUT_OF_SYNC", i.AUDIO_MISSING = "AUDIO_MISSING", i.AUDIO_POOR = "AUDIO_POOR", i.GAME_ISSUE = "GAME_ISSUE", i.STREAM_STOPPED = "STREAM_STOPPED", i.NO_ISSUE = "NO_ISSUE", i.OTHER = "OTHER";
    let l = ">=19.0.0",
        u = ">=22.0.0",
        d = ">=22.0.0",
        _ = ">=10.0.17763",
        c = ">=10.0.22000";
    (r = s || (s = {})).GUILD = "guild", r.CALL = "call";
    let E = o.Notifications.StreamNotificationsGuildMaxSize
}