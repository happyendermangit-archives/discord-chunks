function(_, E, e) {
    "use strict";
    var I, o, a, R, t, A, T, r, N, i, c, O, n, L, D, S, C;
    e.r(E), e.d(E, {
        APPLICATION_SUBSCRIPTION_SUBSECTION: function() {
            return M
        },
        AccessibilityScrollPositions: function() {
            return R
        },
        AppearanceScrollPositions: function() {
            return o
        },
        ChangeEmailSteps: function() {
            return N
        },
        ChannelNotificationSettingsFlags: function() {
            return u
        },
        GuildNotificationSettingsFlags: function() {
            return p
        },
        MAX_FAVORITES: function() {
            return l
        },
        MAX_FAVORITE_GIFS_SIZE: function() {
            return s
        },
        PrivacyAndSafetyScrollPositions: function() {
            return A
        },
        ProfileCustomizationScrollPositions: function() {
            return a
        },
        ProfileCustomizationSubsection: function() {
            return I
        },
        ProtoAudioSettingsContextTypes: function() {
            return i
        },
        ROLE_SUBSCRIPTION_SUBSECTION: function() {
            return P
        },
        SOUNDBOARD_SUBSECTION: function() {
            return U
        },
        UserSettingsDelay: function() {
            return r
        },
        UserSettingsScrollPositions: function() {
            return G
        },
        UserSettingsTypes: function() {
            return T
        },
        createEmptyEditInfo: function() {
            return d
        }
    });
    let l = 250,
        s = 762880,
        P = "ROLE_SUBSCRIPTIONS",
        M = "APPLICATION_SUBSCRIPTION_SUBSECTION",
        U = "SOUNDBOARD_SUBSECTION";
    (c = I || (I = {})).USER_PROFILE = "user_profile", c.GUILD = "guild", c.TRY_IT_OUT = "try_it_out", (o || (o = {})).CUSTOM_APP_ICONS = "custom_app_icon", (a || (a = {})).TRY_IT_OUT = "try_it_out", (O = R || (R = {})).REDUCED_MOTION = "reduced_motion", O.SYNC_PROFILE_THEME_WITH_USER_THEME = "sync_profile_theme_with_user_theme", O.LEGACY_CHAT_INPUT = "legacy_chat_input", (t || (t = {})).HARDWARE_ACCELERATION = "hardware_acceleration", (n = A || (A = {})).DM_SAFETY_ALERTS = "dm_safety_alerts", n.MESSAGE_REQUESTS = "message_requests", n.EXPLICIT_MEDIA_REDACTION = "explicit_media_redaction";
    let G = {
        ProfileCustomizationScrollPositions: a,
        AccessibilityScrollPositions: R,
        VoiceAndVideoScrollPositions: t,
        AppearanceScrollPositions: o,
        PrivacyAndSafetyScrollPositions: A
    };

    function d() {
        return {
            protoToSave: void 0,
            timeout: void 0,
            timeoutDelay: Number.MIN_SAFE_INTEGER,
            rateLimited: !1,
            cleanupFuncs: [],
            loaded: !1,
            loading: !1,
            triggeredMigrations: !1,
            offlineEditDataVersion: void 0
        }
    }(L = T || (T = {}))[L.PRELOADED_USER_SETTINGS = 1] = "PRELOADED_USER_SETTINGS", L[L.FRECENCY_AND_FAVORITES_SETTINGS = 2] = "FRECENCY_AND_FAVORITES_SETTINGS", L[L.TEST_SETTINGS = 3] = "TEST_SETTINGS", (D = r || (r = {}))[D.INFREQUENT_USER_ACTION = 0] = "INFREQUENT_USER_ACTION", D[D.FREQUENT_USER_ACTION = 10] = "FREQUENT_USER_ACTION", D[D.SLOW_USER_ACTION = 20] = "SLOW_USER_ACTION", D[D.AUTOMATED = 30] = "AUTOMATED", D[D.DAILY = 86400] = "DAILY", (S = N || (N = {}))[S.CONFIRM_START = 0] = "CONFIRM_START", S[S.CONFIRM_CODE = 1] = "CONFIRM_CODE", S[S.EMAIL_AND_PASSWORD = 2] = "EMAIL_AND_PASSWORD", S[S.COMPLETE = 3] = "COMPLETE";
    let u = {
            NEW_FORUM_THREADS_ON: 16384,
            NEW_FORUM_THREADS_OFF: 8192,
            OPT_IN_ENABLED: 4096,
            FAVORITED: 2048,
            UNREADS_ALL_MESSAGES: 1024,
            UNREADS_ONLY_MENTIONS: 512
        },
        p = {
            OPT_IN_CHANNELS_ON: 16384,
            OPT_IN_CHANNELS_OFF: 8192,
            UNREADS_ONLY_MENTIONS: 4096,
            UNREADS_ALL_MESSAGES: 2048
        };
    (C = i || (i = {})).USER = "user", C.STREAM = "stream"
}