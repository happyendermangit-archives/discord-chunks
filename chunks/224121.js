function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        AppStates: function() {
            return h
        },
        CACHE_STORE_CHANNELS_LAZY_KEY: function() {
            return _R
        },
        CACHE_STORE_KEY: function() {
            return _A
        },
        CACHE_STORE_LAZY_KEY: function() {
            return _r
        },
        DrawerTabTypes: function() {
            return f
        },
        Gradients: function() {
            return _T
        },
        ModalAnimation: function() {
            return __
        }
    });
    var o, t, I, a, r, R, A, T, n, N, i, c, O, L, D, S, C, l, s, P, u, M, U, G, d, p, B, g, f, H, h, y, Y, b, w, m, K, V, v, F, W, k, x, X, Q, J, Z, j, z, q, $, __, _E, _e, _o, _t, _I, _a = e("598436");
    (o = g || (g = {})).CHANNELS = "CHANNELS", o.MEMBERS = "MEMBERS", (t = f || (f = {})).CHAT = "CHAT", t.FRIENDS = "FRIENDS", t.QUICKSWITCHER = "QUICKSWITCHER", t.NOTIFICATIONS = "NOTIFICATIONS", t.MENTIONS_AND_QUICKSWITCHER = "MENTIONS_AND_QUICKSWITCHER", t.USER_SETTINGS = "USER_SETTINGS", t.STAGE_DISCOVERY = "STAGE_DISCOVERY", t.SERVER_DISCOVERY = "SERVER_DISCOVERY", t.PENDING_INCOMING_FRIEND_REQUESTS = "PENDING_INCOMING_FRIEND_REQUESTS", (I = H || (H = {})).BACK_BUTTON = "Back Button", I.SWIPE = "Swipe", I.MUTUAL_GUILD_ITEM = "Mutual Guild Item", I.MEMBER_LIST_ICON = "Member List Icon", I.CHANNEL_DRAWER_ICON = "Channel Drawer Icon", I.CHANNEL_TITLE = "Channel Title", I.PREMIUM_GUILD_SUBSCRIPTION_GUILD_LIST_UPSELL = "Premium Guild Subscription Guild List Upsell", (a = h || (h = {})).INACTIVE = "inactive", a.BACKGROUND = "background", a.ACTIVE = "active", (r = y || (y = {})).WELCOME = "WELCOME", r.LOGIN = "LOGIN", r.REGISTER = "REGISTER", r.REGISTER_IDENTITY = "REGISTER_IDENTITY", r.REGISTER_DISPLAY_NAME = "REGISTER_DISPLAY_NAME", r.REGISTER_ACCOUNT_INFORMATION = "REGISTER_ACCOUNT_INFORMATION", r.VERIFY_PHONE = "VERIFY_PHONE", r.MFA = "MFA", r.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED = "ACCOUNT_DISABLED_OR_DELETION_SCHEDULED", r.AGE_GATE_UNDERAGE = "AGE_GATE_UNDERAGE", r.AGE_GATE = "AGE_GATE", r.COUNTRY_SELECT = "COUNTRY_SELECT", r.EXTERNAL_LINK = "EXTERNAL_LINK", (R = Y || (Y = {})).DEFAULT = "default", R.DARK = "dark", R.LIGHT = "light", (A = b || (b = {})).CAMERA = "camera", A.PHOTO = "photo", (T = w || (w = {}))[T.BLURRED_NO_QUERY = 0] = "BLURRED_NO_QUERY", T[T.BLURRED_WITH_QUERY = 1] = "BLURRED_WITH_QUERY", T[T.FOCUSED_NO_QUERY = 2] = "FOCUSED_NO_QUERY", T[T.FOCUSED_WITH_QUERY = 3] = "FOCUSED_WITH_QUERY", (n = m || (m = {}))[n.GENERAL = 0] = "GENERAL", n[n.TEXT = 1] = "TEXT", n[n.VOICE = 2] = "VOICE", (N = K || (K = {})).LANDING = "LANDING", N.NAME = "NAME", (i = V || (V = {}))[i.SAFARI = 0] = "SAFARI", i[i.IN_APP = 1] = "IN_APP", i[i.CHROME = 2] = "CHROME", (c = v || (v = {})).SOLVED = "solved", c.EXPIRED = "expired", (F || (F = {})).MENTIONS = "mentions", (O = W || (W = {})).OVERVIEW = "OVERVIEW", O.RESEND_EMAIL = "RESEND_EMAIL", O.CONFIRM_EMAIL_CHANGE_START = "CONFIRM_EMAIL_CHANGE_START", O.CONFIRM_EMAIL_CHANGE_CODE = "CONFIRM_EMAIL_CHANGE_CODE", O.ENTER_EMAIL = "ENTER_EMAIL", O.ADD_PHONE = "ADD_PHONE", O.VERIFY_PHONE = "VERIFY_PHONE", O.VERIFY_PASSWORD = "VERIFY_PASSWORD", O.PHONE_THEN_EMAIL_INTERSTITIAL = "PHONE_THEN_EMAIL_INTERSTITIAL", O.CHANGE_EMAIL_COMPLETE = "CHANGE_EMAIL_COMPLETE", (L = k || (k = {})).VOICE = "VOICE", L.VIDEO = "VIDEO", L.STREAM = "STREAM", (D = x || (x = {})).LANDING = "LANDING", D.SYNCING = "SYNCING", D.RESULTS = "RESULTS", D.NO_RESULTS = "NO_RESULTS", D.ADD_PHONE = "ADD_PHONE", D.VERIFY_PHONE = "VERIFY_PHONE", (X || (X = {})).LANDING = "LANDING", (Q || (Q = {})).ADVANCED = "ADVANCED", (S = J || (J = {})).USER = "USER", S.ACTION = "ACTION", (C = Z || (Z = {})).OVERVIEW = "OVERVIEW", C.ADD_OVERRIDE = "ADD_OVERRIDE", C.CHANNEL_OVERRIDE = "CHANNEL_OVERRIDE", (l = j || (j = {})).INVITE = "invite", l.GUILD_TEMPLATE = "guild-template", l.CHANNEL = "channel", l.GIFT_CODE = "gift-code", l.MESSAGE = "message", l.OAUTH2_AUTHORIZE = "oauth2-authorize", l.APP_DIRECTORY_PROFILE = "app-directory-profile", l.PROMOTIONS = "promotions", l.NONE = "none", l.REMOTE_AUTH = "remote-auth", l.USER_PROFILE = "user-profile", l.BUILD_OVERRIDE = "build-override", l.CONTACT_SYNC = "contact-sync", l.ADD_FRIENDS = "add-friends", l.COMPOSE_MESSAGE = "compose-message", l.GUILD_EVENT_DETAILS = "guild-event-details", l.FRIENDS = "friends", l.EDIT_PROFILE = "edit-profile", l.MOBILE_WEB_HANDOFF = "mobile-web-handoff", l.VOICE_CHANNEL = "voice-channel", l.GUILD_HOME = "guild-home", l.USER_CONNECTIONS_LINK_CALLBACK = "user-connections-link-callback", l.SESSION_MANAGEMENT = "session-management", l.CONNECTIONS = "connections", l.GUILD_SETTINGS = "guild-settings", l.GUILD_SETTINGS_PICKER = "guild-settings-picker", l.ACTIVATE_DEVICE = "activate-device", l.FAMILY_CENTER = "family-center", l.SHARE = "share", l.CREATE_VOICE_INVITE = "create_voice_invite", l.SEND_VOICE_HANGOUT_WAVE = "send_voice_hangout_wave", l.ACCOUNT_STANDING = "account-standing", l.MOBILE_NATIVE_UPDATE = "mobile-native-update";
    var _r = "CacheStoreLazy",
        _R = "CacheStoreChannelsLazy",
        _A = "CacheStore";
    (s = z || (z = {})).UPLOAD = "upload", s.GLOBAL_EMOJI = "global-emoji", s.EMOJI_AUTOCOMPLETE = "emoji-autocomplete", s.BADGE = "badge", s.ANIMATED_EMOJI = "animated-emoji", s.ANIMATED_AVATAR = "animated-avatar", s.CUSTOM_PROFILES = "custom-profiles", s.GLOBAL_STICKER = "global-sticker", s.PREMIUM_GUILD_PROFILE = "premium-guild-profile", s.LONGER_MESSAGE = "longer-message", s.GUILD_CAP = "guild-cap", s.ACTIVITIES = "activities", s.APP_ICONS = "app-icons", (P = q || (q = {})).UNKNOWN = "ESKERRORDOMAIN0", P.CLIENT_INVALID = "ESKERRORDOMAIN1", P.PAYMENT_CANCELED = "ESKERRORDOMAIN2", P.PAYMENT_INVALID = "ESKERRORDOMAIN3", P.PAYMENT_NOT_ALLOWED = "ESKERRORDOMAIN4", P.STORE_PRODUCT_NOT_AVAILABLE = "ESKERRORDOMAIN5", P.CLOUD_SERVICE_PERMISSION_DENIED = "ESKERRORDOMAIN6", P.CLOUD_SERVICE_NETWORK_CONNECTION_FAILED = "ESKERRORDOMAIN7", P.CLOUD_SERVICE_REVOKED = "ESKERRORDOMAIN8", P.PRIVACY_ACKNOWLEDGEMENT_REQUIRED = "ESKERRORDOMAIN9", P.UNAUTHORIZED_REQUEST_DATA = "ESKERRORDOMAIN10", P.INVALID_OFFER_IDENTIFIER = "ESKERRORDOMAIN11", P.INVALID_SIGNATURE = "ESKERRORDOMAIN12", P.MISSING_OFFER_PARAMS = "ESKERRORDOMAIN13", P.INVALID_OFFER_PRICE = "ESKERRORDOMAIN14", P.OVERLAY_CANCELLED = "ESKERRORDOMAIN15", P.OVERLAY_INVALID_CONFIGURATION = "ESKERRORDOMAIN16", P.OVERLAY_TIMEOUT = "ESKERRORDOMAIN17", P.INELIGIBLE_FOR_OFFER = "ESKERRORDOMAIN18", P.UNSUPPORTED_PLATFORM = "ESKERRORDOMAIN19", (u = $ || ($ = {})).LOGOUT_TIMESTAMP_KEY = "logout_timestamp_key", u.ACKNOWLEDGED_TOOLTIPS_KEY = "acknowledged_tooltips_key", u.KRISP_ONBOARD = "krisp_onboard", u.SCREENSHARE_ONBOARD = "screenshare_onboard", (M = __ || (__ = {})).NONE = "none", M.SLIDE_UP = "slide-up", M.SLIDE_IN = "slide-in", M.SLIDE_OUT = "slide-out", M.SLIDE_IN_OUT = "slide-in-out", M.SLIDE_IN_OUT_REVERSE = "slide-in-out-reverse", M.FADE = "fade", Object.freeze({
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
    var _T = {
        PREMIUM_TIER_0: [_a.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, _a.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS],
        PREMIUM_TIER_1: [_a.default.unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS, _a.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS],
        PREMIUM_TIER_2: [_a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, _a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
        PREMIUM_TIER_2_TRI_COLOR: [_a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS, _a.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2, _a.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS],
        PREMIUM_GUILD: [_a.default.unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS, _a.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS],
        PREMIUM_TIER_0_PERK_CARD: ["#3736BB", "#4670E8", "#8377EB", "#E782F1", "#DF90AF"]
    };
    (U = _E || (_E = {}))[U.HIGH = .6] = "HIGH", U[U.LOW = .3] = "LOW", (G = _e || (_e = {}))[G.IMAGE = 0] = "IMAGE", G[G.GIF = 1] = "GIF", G[G.VIDEO = 2] = "VIDEO", (d = _o || (_o = {})).OVERVIEW = "overview", d.GIF_RESULTS = "gif_results", (p = _t || (_t = {})).GUILD_TOOLTIP = "guild_tooltip", p.GIF_PICKER_TOOLTIP = "gif_picker_tooltip", p.GIF_PICKER_TOOLTIP_SPARKLE = "gif_picker_tooltip_sparkle", p.STICKER_PICKER_SHOP_VIEW_ALL = "sticker_picker_shop_view_all", p.SCREENSHARE_ONBOARD_SPARKLES = "screenshare_onboard_sparkles", p.SCREENSHARE_SWIPE_UP_CONTROLS = "screenshare_swipe_up_controls", p.STAGE_DISCOVERY_TOOLTIP = "stage_discovery_tooltip", p.HUB_DISCOVERY_TOOLTIP = "hub_discovery_tooltip", (B = _I || (_I = {}))[B.ROW = 0] = "ROW", B[B.HEADER = 1] = "HEADER", B[B.FOOTER = 2] = "FOOTER"
}