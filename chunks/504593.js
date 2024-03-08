function(_, E, I) {
    "use strict";
    I.r(E), I.d(E, {
        DrawerTabTypes: function() {
            return a
        },
        AppStates: function() {
            return R
        },
        CACHE_STORE_LAZY_KEY: function() {
            return _t
        },
        CACHE_STORE_CHANNELS_LAZY_KEY: function() {
            return _A
        },
        CACHE_STORE_KEY: function() {
            return _T
        },
        ModalAnimation: function() {
            return u
        },
        Gradients: function() {
            return _r
        }
    }), I("222007");
    var e, a, o, R, t, A, T, r, N, i, c, O, n, L, D, S, C, l, s, P, M, G, U, d, u, p, B, g, H, f, h, y, Y, w, b, m, K, V, F, v, W, k, x, X, Q, J, Z, j, z, q, $, __, _E, _I, _e, _a, _o, _R = I("854588");
    (h = e || (e = {})).CHANNELS = "CHANNELS", h.MEMBERS = "MEMBERS", (y = a || (a = {})).CHAT = "CHAT", y.FRIENDS = "FRIENDS", y.QUICKSWITCHER = "QUICKSWITCHER", y.NOTIFICATIONS = "NOTIFICATIONS", y.MENTIONS_AND_QUICKSWITCHER = "MENTIONS_AND_QUICKSWITCHER", y.USER_SETTINGS = "USER_SETTINGS", y.STAGE_DISCOVERY = "STAGE_DISCOVERY", y.SERVER_DISCOVERY = "SERVER_DISCOVERY", y.PENDING_INCOMING_FRIEND_REQUESTS = "PENDING_INCOMING_FRIEND_REQUESTS", (Y = o || (o = {})).BACK_BUTTON = "Back Button", Y.SWIPE = "Swipe", Y.MUTUAL_GUILD_ITEM = "Mutual Guild Item", Y.MEMBER_LIST_ICON = "Member List Icon", Y.CHANNEL_DRAWER_ICON = "Channel Drawer Icon", Y.CHANNEL_TITLE = "Channel Title", Y.PREMIUM_GUILD_SUBSCRIPTION_GUILD_LIST_UPSELL = "Premium Guild Subscription Guild List Upsell", (w = R || (R = {})).INACTIVE = "inactive", w.BACKGROUND = "background", w.ACTIVE = "active", (b = t || (t = {})).WELCOME = "WELCOME", b.LOGIN = "LOGIN", b.REGISTER = "REGISTER", b.REGISTER_IDENTITY = "REGISTER_IDENTITY", b.REGISTER_DISPLAY_NAME = "REGISTER_DISPLAY_NAME", b.REGISTER_ACCOUNT_INFORMATION = "REGISTER_ACCOUNT_INFORMATION", b.VERIFY_PHONE = "VERIFY_PHONE", b.MFA = "MFA", b.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED = "ACCOUNT_DISABLED_OR_DELETION_SCHEDULED", b.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", b.AGE_GATE = "AGE_GATE", b.COUNTRY_SELECT = "COUNTRY_SELECT", b.EXTERNAL_LINK = "EXTERNAL_LINK", (m = A || (A = {})).DEFAULT = "default", m.DARK = "dark", m.LIGHT = "light", (K = T || (T = {})).CAMERA = "camera", K.PHOTO = "photo", (V = r || (r = {}))[V.BLURRED_NO_QUERY = 0] = "BLURRED_NO_QUERY", V[V.BLURRED_WITH_QUERY = 1] = "BLURRED_WITH_QUERY", V[V.FOCUSED_NO_QUERY = 2] = "FOCUSED_NO_QUERY", V[V.FOCUSED_WITH_QUERY = 3] = "FOCUSED_WITH_QUERY", (F = N || (N = {}))[F.GENERAL = 0] = "GENERAL", F[F.TEXT = 1] = "TEXT", F[F.VOICE = 2] = "VOICE", (v = i || (i = {})).LANDING = "LANDING", v.NAME = "NAME", (W = c || (c = {}))[W.SAFARI = 0] = "SAFARI", W[W.IN_APP = 1] = "IN_APP", W[W.CHROME = 2] = "CHROME", (k = O || (O = {})).SOLVED = "solved", k.EXPIRED = "expired", (n || (n = {})).MENTIONS = "mentions", (x = L || (L = {})).OVERVIEW = "OVERVIEW", x.RESEND_EMAIL = "RESEND_EMAIL", x.CONFIRM_EMAIL_CHANGE_START = "CONFIRM_EMAIL_CHANGE_START", x.CONFIRM_EMAIL_CHANGE_CODE = "CONFIRM_EMAIL_CHANGE_CODE", x.ENTER_EMAIL = "ENTER_EMAIL", x.ADD_PHONE = "ADD_PHONE", x.VERIFY_PHONE = "VERIFY_PHONE", x.VERIFY_PASSWORD = "VERIFY_PASSWORD", x.PHONE_THEN_EMAIL_INTERSTITIAL = "PHONE_THEN_EMAIL_INTERSTITIAL", x.CHANGE_EMAIL_COMPLETE = "CHANGE_EMAIL_COMPLETE", (X = D || (D = {})).VOICE = "VOICE", X.VIDEO = "VIDEO", X.STREAM = "STREAM", (Q = S || (S = {})).LANDING = "LANDING", Q.SYNCING = "SYNCING", Q.RESULTS = "RESULTS", Q.NO_RESULTS = "NO_RESULTS", Q.ADD_PHONE = "ADD_PHONE", Q.VERIFY_PHONE = "VERIFY_PHONE", (C || (C = {})).LANDING = "LANDING", (l || (l = {})).ADVANCED = "ADVANCED", (J = s || (s = {})).USER = "USER", J.ACTION = "ACTION", (Z = P || (P = {})).OVERVIEW = "OVERVIEW", Z.ADD_OVERRIDE = "ADD_OVERRIDE", Z.CHANNEL_OVERRIDE = "CHANNEL_OVERRIDE", (j = M || (M = {})).INVITE = "invite", j.GUILD_TEMPLATE = "guild-template", j.CHANNEL = "channel", j.GIFT_CODE = "gift-code", j.MESSAGE = "message", j.OAUTH2_AUTHORIZE = "oauth2-authorize", j.APP_DIRECTORY_PROFILE = "app-directory-profile", j.PROMOTIONS = "promotions", j.NONE = "none", j.REMOTE_AUTH = "remote-auth", j.USER_PROFILE = "user-profile", j.BUILD_OVERRIDE = "build-override", j.CONTACT_SYNC = "contact-sync", j.ADD_FRIENDS = "add-friends", j.COMPOSE_MESSAGE = "compose-message", j.GUILD_EVENT_DETAILS = "guild-event-details", j.FRIENDS = "friends", j.EDIT_PROFILE = "edit-profile", j.MOBILE_WEB_HANDOFF = "mobile-web-handoff", j.VOICE_CHANNEL = "voice-channel", j.GUILD_HOME = "guild-home", j.USER_CONNECTIONS_LINK_CALLBACK = "user-connections-link-callback", j.SESSION_MANAGEMENT = "session-management", j.CONNECTIONS = "connections", j.GUILD_SETTINGS = "guild-settings", j.GUILD_SETTINGS_PICKER = "guild-settings-picker", j.ACTIVATE_DEVICE = "activate-device", j.FAMILY_CENTER = "family-center", j.SHARE = "share", j.CREATE_VOICE_INVITE = "create_voice_invite", j.SEND_VOICE_HANGOUT_WAVE = "send_voice_hangout_wave", j.ACCOUNT_STANDING = "account-standing", j.MOBILE_NATIVE_UPDATE = "mobile-native-update";
    let _t = "CacheStoreLazy",
        _A = "CacheStoreChannelsLazy",
        _T = "CacheStore";
    (z = G || (G = {})).UPLOAD = "upload", z.GLOBAL_EMOJI = "global-emoji", z.EMOJI_AUTOCOMPLETE = "emoji-autocomplete", z.BADGE = "badge", z.ANIMATED_EMOJI = "animated-emoji", z.ANIMATED_AVATAR = "animated-avatar", z.CUSTOM_PROFILES = "custom-profiles", z.GLOBAL_STICKER = "global-sticker", z.PREMIUM_GUILD_PROFILE = "premium-guild-profile", z.LONGER_MESSAGE = "longer-message", z.GUILD_CAP = "guild-cap", z.ACTIVITIES = "activities", z.APP_ICONS = "app-icons", (q = U || (U = {})).UNKNOWN = "ESKERRORDOMAIN0", q.CLIENT_INVALID = "ESKERRORDOMAIN1", q.PAYMENT_CANCELED = "ESKERRORDOMAIN2", q.PAYMENT_INVALID = "ESKERRORDOMAIN3", q.PAYMENT_NOT_ALLOWED = "ESKERRORDOMAIN4", q.STORE_PRODUCT_NOT_AVAILABLE = "ESKERRORDOMAIN5", q.CLOUD_SERVICE_PERMISSION_DENIED = "ESKERRORDOMAIN6", q.CLOUD_SERVICE_NETWORK_CONNECTION_FAILED = "ESKERRORDOMAIN7", q.CLOUD_SERVICE_REVOKED = "ESKERRORDOMAIN8", q.PRIVACY_ACKNOWLEDGEMENT_REQUIRED = "ESKERRORDOMAIN9", q.UNAUTHORIZED_REQUEST_DATA = "ESKERRORDOMAIN10", q.INVALID_OFFER_IDENTIFIER = "ESKERRORDOMAIN11", q.INVALID_SIGNATURE = "ESKERRORDOMAIN12", q.MISSING_OFFER_PARAMS = "ESKERRORDOMAIN13", q.INVALID_OFFER_PRICE = "ESKERRORDOMAIN14", q.OVERLAY_CANCELLED = "ESKERRORDOMAIN15", q.OVERLAY_INVALID_CONFIGURATION = "ESKERRORDOMAIN16", q.OVERLAY_TIMEOUT = "ESKERRORDOMAIN17", q.INELIGIBLE_FOR_OFFER = "ESKERRORDOMAIN18", q.UNSUPPORTED_PLATFORM = "ESKERRORDOMAIN19", ($ = d || (d = {})).LOGOUT_TIMESTAMP_KEY = "logout_timestamp_key", $.ACKNOWLEDGED_TOOLTIPS_KEY = "acknowledged_tooltips_key", $.KRISP_ONBOARD = "krisp_onboard", $.SCREENSHARE_ONBOARD = "screenshare_onboard", (__ = u || (u = {})).NONE = "none", __.SLIDE_UP = "slide-up", __.SLIDE_IN = "slide-in", __.SLIDE_OUT = "slide-out", __.SLIDE_IN_OUT = "slide-in-out", __.SLIDE_IN_OUT_REVERSE = "slide-in-out-reverse", __.FADE = "fade", Object.freeze({
        START: {
            x: 0,
            y: 0
        },
        END: {
            x: 1,
            y: 0
        }
    }), Object.freeze({
        START: {
            x: 0,
            y: 0
        },
        END: {
            x: 0,
            y: 1
        }
    });
    let _r = {
        PREMIUM_TIER_0: [_R.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, _R.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS],
        PREMIUM_TIER_1: [_R.default.unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS, _R.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS],
        PREMIUM_TIER_2: [_R.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, _R.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
        PREMIUM_TIER_2_TRI_COLOR: [_R.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, _R.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, _R.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
        PREMIUM_GUILD: [_R.default.unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS, _R.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS],
        PREMIUM_TIER_0_PERK_CARD: ["#3736BB", "#4670E8", "#8377EB", "#E782F1", "#DF90AF"]
    };
    (_E = p || (p = {}))[_E.HIGH = .6] = "HIGH", _E[_E.LOW = .3] = "LOW", (_I = B || (B = {}))[_I.IMAGE = 0] = "IMAGE", _I[_I.GIF = 1] = "GIF", _I[_I.VIDEO = 2] = "VIDEO", (_e = g || (g = {})).OVERVIEW = "overview", _e.GIF_RESULTS = "gif_results", (_a = H || (H = {})).GUILD_TOOLTIP = "guild_tooltip", _a.GIF_PICKER_TOOLTIP = "gif_picker_tooltip", _a.GIF_PICKER_TOOLTIP_SPARKLE = "gif_picker_tooltip_sparkle", _a.STICKER_PICKER_SHOP_VIEW_ALL = "sticker_picker_shop_view_all", _a.SCREENSHARE_ONBOARD_SPARKLES = "screenshare_onboard_sparkles", _a.SCREENSHARE_SWIPE_UP_CONTROLS = "screenshare_swipe_up_controls", _a.STAGE_DISCOVERY_TOOLTIP = "stage_discovery_tooltip", _a.HUB_DISCOVERY_TOOLTIP = "hub_discovery_tooltip", (_o = f || (f = {}))[_o.ROW = 0] = "ROW", _o[_o.HEADER = 1] = "HEADER", _o[_o.FOOTER = 2] = "FOOTER"
}