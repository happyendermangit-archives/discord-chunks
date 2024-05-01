function(e, t, n) {
    "use strict";
    var i, r, s, a;
    n.r(t), n.d(t, {
        MAX_STAGE_TOPIC_LENGTH: function() {
            return o
        },
        RequestToSpeakPermissionStates: function() {
            return i
        },
        STAGE_APPLICATION_ID: function() {
            return l
        },
        STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY: function() {
            return d
        },
        STAGE_INVITE_STATE_KEY: function() {
            return u
        },
        StartStageSteps: function() {
            return r
        }
    }), n("63063"), n("981631"), n("689938");
    let o = 240,
        l = "834488117758001152",
        u = "stage-invite",
        d = "stage-channel-audience-notice-shown";
    (s = i || (i = {}))[s.EVERYONE = 1] = "EVERYONE", s[s.NO_ONE = 2] = "NO_ONE", s[s.ROLES = 3] = "ROLES", (a = r || (r = {}))[a.GUILD_SELECTION = 0] = "GUILD_SELECTION", a[a.STAGE_CHANNEL_SETTINGS = 1] = "STAGE_CHANNEL_SETTINGS", a[a.PUBLIC_STAGE_PREVIEW = 2] = "PUBLIC_STAGE_PREVIEW"
}