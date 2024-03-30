function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        APPLICATION_SUBSCRIPTION_SUBSECTION: function() {
            return s
        },
        AccessibilityScrollPositions: function() {
            return N
        },
        AppearanceScrollPositions: function() {
            return T
        },
        ChangeEmailSteps: function() {
            return L
        },
        ChannelNotificationSettingsFlags: function() {
            return U
        },
        GuildNotificationSettingsFlags: function() {
            return G
        },
        MAX_FAVORITES: function() {
            return S
        },
        MAX_FAVORITE_GIFS_SIZE: function() {
            return C
        },
        ProfileCustomizationScrollPositions: function() {
            return n
        },
        ProfileCustomizationSubsection: function() {
            return A
        },
        ProtoAudioSettingsContextTypes: function() {
            return D
        },
        ROLE_SUBSCRIPTION_SUBSECTION: function() {
            return l
        },
        SOUNDBOARD_SUBSECTION: function() {
            return P
        },
        UserSettingsDelay: function() {
            return O
        },
        UserSettingsScrollPositions: function() {
            return u
        },
        UserSettingsTypes: function() {
            return c
        },
        createEmptyEditInfo: function() {
            return M
        }
    });
    var o, t, I, a, r, R, A, T, n, N, i, c, O, L, D, S = 250,
        C = 762880,
        l = "ROLE_SUBSCRIPTIONS",
        s = "APPLICATION_SUBSCRIPTION_SUBSECTION",
        P = "SOUNDBOARD_SUBSECTION";
    (o = A || (A = {})).USER_PROFILE = "user_profile", o.GUILD = "guild", o.TRY_IT_OUT = "try_it_out", (T || (T = {})).CUSTOM_APP_ICONS = "custom_app_icon", (n || (n = {})).TRY_IT_OUT = "try_it_out", (t = N || (N = {})).REDUCED_MOTION = "reduced_motion", t.SYNC_PROFILE_THEME_WITH_USER_THEME = "sync_profile_theme_with_user_theme", t.LEGACY_CHAT_INPUT = "legacy_chat_input", (i || (i = {})).HARDWARE_ACCELERATION = "hardware_acceleration";
    var u = {
        ProfileCustomizationScrollPositions: n,
        AccessibilityScrollPositions: N,
        VoiceAndVideoScrollPositions: i,
        AppearanceScrollPositions: T
    };

    function M() {
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
    }(I = c || (c = {}))[I.PRELOADED_USER_SETTINGS = 1] = "PRELOADED_USER_SETTINGS", I[I.FRECENCY_AND_FAVORITES_SETTINGS = 2] = "FRECENCY_AND_FAVORITES_SETTINGS", I[I.TEST_SETTINGS = 3] = "TEST_SETTINGS", (a = O || (O = {}))[a.INFREQUENT_USER_ACTION = 0] = "INFREQUENT_USER_ACTION", a[a.FREQUENT_USER_ACTION = 10] = "FREQUENT_USER_ACTION", a[a.SLOW_USER_ACTION = 20] = "SLOW_USER_ACTION", a[a.AUTOMATED = 30] = "AUTOMATED", a[a.DAILY = 86400] = "DAILY", (r = L || (L = {}))[r.CONFIRM_START = 0] = "CONFIRM_START", r[r.CONFIRM_CODE = 1] = "CONFIRM_CODE", r[r.EMAIL_AND_PASSWORD = 2] = "EMAIL_AND_PASSWORD", r[r.COMPLETE = 3] = "COMPLETE";
    var U = {
            NEW_FORUM_THREADS_ON: 16384,
            NEW_FORUM_THREADS_OFF: 8192,
            OPT_IN_ENABLED: 4096,
            FAVORITED: 2048,
            UNREADS_ALL_MESSAGES: 1024,
            UNREADS_ONLY_MENTIONS: 512
        },
        G = {
            OPT_IN_CHANNELS_ON: 16384,
            OPT_IN_CHANNELS_OFF: 8192,
            UNREADS_ONLY_MENTIONS: 4096,
            UNREADS_ALL_MESSAGES: 2048
        };
    (R = D || (D = {})).USER = "user", R.STREAM = "stream"
}