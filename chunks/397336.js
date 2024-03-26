function(_, E, I) {
    "use strict";
    var e, a, o, R, t, A, T, r, N, i, c, O, n, L, D;
    I.r(E), I.d(E, {
        MAX_FAVORITES: function() {
            return S
        },
        MAX_FAVORITE_GIFS_SIZE: function() {
            return C
        },
        ROLE_SUBSCRIPTION_SUBSECTION: function() {
            return l
        },
        APPLICATION_SUBSCRIPTION_SUBSECTION: function() {
            return s
        },
        SOUNDBOARD_SUBSECTION: function() {
            return P
        },
        ProfileCustomizationSubsection: function() {
            return e
        },
        AppearanceScrollPositions: function() {
            return a
        },
        ProfileCustomizationScrollPositions: function() {
            return o
        },
        AccessibilityScrollPositions: function() {
            return R
        },
        UserSettingsScrollPositions: function() {
            return M
        },
        UserSettingsTypes: function() {
            return A
        },
        UserSettingsDelay: function() {
            return T
        },
        createEmptyEditInfo: function() {
            return G
        },
        ChangeEmailSteps: function() {
            return r
        },
        ChannelNotificationSettingsFlags: function() {
            return U
        },
        GuildNotificationSettingsFlags: function() {
            return d
        },
        ProtoAudioSettingsContextTypes: function() {
            return N
        }
    });
    let S = 250,
        C = 762880,
        l = "ROLE_SUBSCRIPTIONS",
        s = "APPLICATION_SUBSCRIPTION_SUBSECTION",
        P = "SOUNDBOARD_SUBSECTION";
    (i = e || (e = {})).USER_PROFILE = "user_profile", i.GUILD = "guild", i.TRY_IT_OUT = "try_it_out", (a || (a = {})).CUSTOM_APP_ICONS = "custom_app_icon", (o || (o = {})).TRY_IT_OUT = "try_it_out", (c = R || (R = {})).REDUCED_MOTION = "reduced_motion", c.SYNC_PROFILE_THEME_WITH_USER_THEME = "sync_profile_theme_with_user_theme", c.LEGACY_CHAT_INPUT = "legacy_chat_input", (t || (t = {})).HARDWARE_ACCELERATION = "hardware_acceleration";
    let M = {
        ProfileCustomizationScrollPositions: o,
        AccessibilityScrollPositions: R,
        VoiceAndVideoScrollPositions: t,
        AppearanceScrollPositions: a
    };

    function G() {
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
    }(O = A || (A = {}))[O.PRELOADED_USER_SETTINGS = 1] = "PRELOADED_USER_SETTINGS", O[O.FRECENCY_AND_FAVORITES_SETTINGS = 2] = "FRECENCY_AND_FAVORITES_SETTINGS", O[O.TEST_SETTINGS = 3] = "TEST_SETTINGS", (n = T || (T = {}))[n.INFREQUENT_USER_ACTION = 0] = "INFREQUENT_USER_ACTION", n[n.FREQUENT_USER_ACTION = 10] = "FREQUENT_USER_ACTION", n[n.SLOW_USER_ACTION = 20] = "SLOW_USER_ACTION", n[n.AUTOMATED = 30] = "AUTOMATED", n[n.DAILY = 86400] = "DAILY", (L = r || (r = {}))[L.CONFIRM_START = 0] = "CONFIRM_START", L[L.CONFIRM_CODE = 1] = "CONFIRM_CODE", L[L.EMAIL_AND_PASSWORD = 2] = "EMAIL_AND_PASSWORD", L[L.COMPLETE = 3] = "COMPLETE";
    let U = {
            NEW_FORUM_THREADS_ON: 16384,
            NEW_FORUM_THREADS_OFF: 8192,
            OPT_IN_ENABLED: 4096,
            FAVORITED: 2048,
            UNREADS_ALL_MESSAGES: 1024,
            UNREADS_ONLY_MENTIONS: 512
        },
        d = {
            OPT_IN_CHANNELS_ON: 16384,
            OPT_IN_CHANNELS_OFF: 8192,
            UNREADS_ONLY_MENTIONS: 4096,
            UNREADS_ALL_MESSAGES: 2048
        };
    (D = N || (N = {})).USER = "user", D.STREAM = "stream"
}