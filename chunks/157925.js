function(e, t, n) {
    "use strict";
    var i, r, a, s;
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
    (a = i || (i = {}))[a.EVERYONE = 1] = "EVERYONE", a[a.NO_ONE = 2] = "NO_ONE", a[a.ROLES = 3] = "ROLES", (s = r || (r = {}))[s.GUILD_SELECTION = 0] = "GUILD_SELECTION", s[s.STAGE_CHANNEL_SETTINGS = 1] = "STAGE_CHANNEL_SETTINGS", s[s.PUBLIC_STAGE_PREVIEW = 2] = "PUBLIC_STAGE_PREVIEW"
}