function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        ADYEN_PAYMENT_SOURCES: function() {
            return _l
        },
        AppRoutes: function() {
            return _X
        },
        BasicPermissions: function() {
            return L
        },
        BraintreeErrors: function() {
            return c
        },
        ClientTypes: function() {
            return R
        },
        Color: function() {
            return _T.Color
        },
        CurrencyCodes: function() {
            return G
        },
        DELAYED_PAYMENTS: function() {
            return _d
        },
        DiscoveryBannedSearchWords: function() {
            return _j
        },
        EMAIL_DOMAIN: function() {
            return _L
        },
        ElevatedPermissions: function() {
            return _y
        },
        ElevatedPermissionsList: function() {
            return _h
        },
        FallbackCurrencyCountry: function() {
            return _Z
        },
        HangStatusTypes: function() {
            return a
        },
        IRREDEEMABLE_PAYMENT_SOURCES: function() {
            return _P
        },
        Links: function() {
            return _W
        },
        LocalizedLinks: function() {
            return _k
        },
        NOOP: function() {
            return _g
        },
        NOOP_NULL: function() {
            return _H
        },
        NOOP_PROMISE: function() {
            return _f
        },
        NavigateEventSource: function() {
            return g
        },
        OAuth2Scopes: function() {
            return t
        },
        PREPAID_PAYMENT_SOURCES: function() {
            return _M
        },
        PRIMARY_DOMAIN: function() {
            return _c
        },
        PROACTIVE_FULFILLMENT: function() {
            return _u
        },
        PaymentGatewayToFriendlyName: function() {
            return _S
        },
        PaymentGateways: function() {
            return A
        },
        PaymentSettings: function() {
            return _C
        },
        PaymentSourceFlags: function() {
            return r
        },
        PaymentSourceTypes: function() {
            return T
        },
        PaymentStatusTypes: function() {
            return N
        },
        Permissions: function() {
            return _B
        },
        PriceTierTypes: function() {
            return p
        },
        PurchaseTypeToAnalyticsPaymentType: function() {
            return _p
        },
        PurchaseTypes: function() {
            return n
        },
        RECAPTCHA_SITE_KEY: function() {
            return _D
        },
        REDIRECTED_PAYMENT_SOURCES: function() {
            return _U
        },
        ROUGH_COUNT_MILLION_PLAYERS: function() {
            return _K
        },
        RPCCloseCodes: function() {
            return l
        },
        RPCCommands: function() {
            return D
        },
        RPCErrors: function() {
            return C
        },
        RPCEvents: function() {
            return S
        },
        RPC_APPLICATION_LOGGING_CATEGORY: function() {
            return _b
        },
        RPC_PORT_RANGE: function() {
            return _m
        },
        RPC_STARTING_PORT: function() {
            return _Y
        },
        RPC_VERSION: function() {
            return _w
        },
        RevenueSurfaces: function() {
            return O
        },
        RoleFlags: function() {
            return H
        },
        SKUFeatureTypes: function() {
            return d
        },
        SKUGenres: function() {
            return u
        },
        SOCIAL_LINKS: function() {
            return _J
        },
        STATUS_PAGE_ENDPOINT: function() {
            return _v
        },
        STRIPE_PAYMENT_SOURCES: function() {
            return _s
        },
        SUPPORT_DEV_DOMAIN: function() {
            return _n
        },
        SUPPORT_DOMAIN: function() {
            return _O
        },
        StatusTypes: function() {
            return o
        },
        SubscriptionTypes: function() {
            return i
        },
        TOKENS_KEY: function() {
            return _F
        },
        TOKEN_KEY: function() {
            return _V
        },
        ThemeColor: function() {
            return _r.ThemeColor
        },
        ThemeExtends: function() {
            return _R.ThemeExtends
        },
        ThemeTypes: function() {
            return _R.default
        },
        UserMediaErrors: function() {
            return B
        },
        VAULTABLE_PAYMENT_SOURCES: function() {
            return _G
        },
        WebAnalyticsEvents: function() {
            return P
        },
        WebRoutes: function() {
            return _Q
        }
    }), e("47120");
    var I, o, a, R, t, A, T, r, N, i, c, O, n, L, D, S, C, l, s, P, M, G, U, d, u, p, B, g, H, f, h, y, w, Y, m, b, K, V, F, v, W, k, x, X, Q, J, Z, j, z, q, $, __, _E, _e, _I, _o, _a, _R = e("290926"),
        _t = e("149765"),
        _A = e("860911");
    e("674746");
    var _T = e("691324"),
        _r = e("481677");
    e("722770");
    let _N = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
        _i = location.protocol + "//discord.gg",
        _c = "discord.com",
        _O = "support.discord.com",
        _n = "support-dev.discord.com",
        _L = "discord.com";
    Object.freeze({
        HINT_PURPLE: "#c9d2f0",
        DARK_PURPLE: "#697ec4",
        MODAL_GREY: "#EFEFF4",
        ORANGE: "#f57731",
        GUILDS_GREY: "#1e2124",
        ACCOUNT_GREY: "#282b30",
        CHAT_GREY: "#36393e",
        UNREAD_GREY: "#8a8e94",
        HIGHLIGHT_GREY: "#25282c",
        AVATAR_GREY: "#747F8C",
        WHITE2: "#f3f3f3",
        WHITE3: "#f0f0f0",
        WHITE7: "#dbdde1",
        WHITE8: "#cdcdcd",
        GREY1: "#99aab5",
        GREY2: "#87909c",
        GREY3: "#737f8d",
        GREY4: "#949494",
        GREY5: "#535559",
        GREY6: "#4f545c",
        GREY7: "#1c242b",
        GREY9: "#202226"
    }), (f = I || (I = {})).PRIMARY_NORMAL = "ggsans-Normal, NotoSans-Normal", f.PRIMARY_MEDIUM = "ggsans-Medium, NotoSans-Medium", f.PRIMARY_SEMIBOLD = "ggsans-Semibold, NotoSans-Semibold", f.PRIMARY_BOLD = "ggsans-Bold, NotoSans-Bold", f.DISPLAY_NORMAL = "ggsans-Normal, NotoSans-Normal", f.DISPLAY_MEDIUM = "ggsans-Medium, NotoSans-Medium", f.DISPLAY_SEMIBOLD = "ggsans-Semibold, NotoSans-Semibold", f.DISPLAY_BOLD = "ggsans-Bold, NotoSans-Bold", f.DISPLAY_EXTRABOLD = "ggsans-ExtraBold, NotoSans-ExtraBold", f.CODE_NORMAL = "ggmono-Normal, SourceCodePro-Normal", f.CODE_BOLD = "ggmono-Bold, SourceCodePro-Bold", (h = o || (o = {})).ONLINE = "online", h.OFFLINE = "offline", h.IDLE = "idle", h.DND = "dnd", h.INVISIBLE = "invisible", h.STREAMING = "streaming", h.UNKNOWN = "unknown", (y = a || (a = {})).CHILLING = "chilling", y.GAMING = "gaming", y.FOCUSING = "focusing", y.BRB = "brb", y.EATING = "eating", y.IN_TRANSIT = "in-transit", y.WATCHING = "watching", y.CUSTOM = "custom", (w = R || (R = {})).DESKTOP = "desktop", w.WEB = "web", w.MOBILE = "mobile", w.UNKNOWN = "unknown";
    let _D = "6Lef5iQTAAAAAKeIvIY-DeexoO3gj7ryl9rLMEnn";
    (Y = t || (t = {})).IDENTIFY = "identify", Y.EMAIL = "email", Y.CONNECTIONS = "connections", Y.GUILDS = "guilds", Y.GUILDS_JOIN = "guilds.join", Y.GUILDS_MEMBERS_READ = "guilds.members.read", Y.GDM_JOIN = "gdm.join", Y.RPC = "rpc", Y.RPC_NOTIFICATIONS_READ = "rpc.notifications.read", Y.RPC_VOICE_READ = "rpc.voice.read", Y.RPC_VOICE_WRITE = "rpc.voice.write", Y.RPC_VIDEO_READ = "rpc.video.read", Y.RPC_VIDEO_WRITE = "rpc.video.write", Y.RPC_SCREENSHARE_READ = "rpc.screenshare.read", Y.RPC_SCREENSHARE_WRITE = "rpc.screenshare.write", Y.RPC_ACTIVITIES_WRITE = "rpc.activities.write", Y.BOT = "bot", Y.WEBHOOK_INCOMING = "webhook.incoming", Y.MESSAGES_READ = "messages.read", Y.APPLICATIONS_BUILDS_UPLOAD = "applications.builds.upload", Y.APPLICATIONS_BUILDS_READ = "applications.builds.read", Y.APPLICATIONS_COMMANDS = "applications.commands", Y.APPLICATIONS_COMMANDS_UPDATE = "applications.commands.update", Y.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE = "applications.commands.permissions.update", Y.APPLICATIONS_STORE_UPDATE = "applications.store.update", Y.APPLICATIONS_ENTITLEMENTS = "applications.entitlements", Y.ACTIVITIES_READ = "activities.read", Y.ACTIVITIES_WRITE = "activities.write", Y.RELATIONSHIPS_READ = "relationships.read", Y.VOICE = "voice", Y.DM_CHANNELS_READ = "dm_channels.read", Y.ROLE_CONNECTIONS_WRITE = "role_connections.write", (m = A || (A = {}))[m.STRIPE = 1] = "STRIPE", m[m.BRAINTREE = 2] = "BRAINTREE", m[m.APPLE = 3] = "APPLE", m[m.GOOGLE = 4] = "GOOGLE", m[m.ADYEN = 5] = "ADYEN", m[m.APPLE_PARTNER = 6] = "APPLE_PARTNER";
    let _S = Object.freeze({
            1: "Stripe",
            2: "Braintree",
            3: "Apple",
            4: "Google",
            5: "Adyen",
            6: "Apple Partner"
        }),
        _C = Object.freeze({
            BRAINTREE: {
                KEY: window.GLOBAL_ENV.BRAINTREE_KEY,
                PAYMENT_GATEWAY: "braintree"
            },
            STRIPE: {
                KEY: window.GLOBAL_ENV.STRIPE_KEY,
                PAYMENT_GATEWAY: "stripe"
            },
            ADYEN: {
                KEY: window.GLOBAL_ENV.ADYEN_KEY,
                PAYMENT_GATEWAY: "adyen"
            }
        });
    (b = T || (T = {}))[b.UNKNOWN = 0] = "UNKNOWN", b[b.CARD = 1] = "CARD", b[b.PAYPAL = 2] = "PAYPAL", b[b.GIROPAY = 3] = "GIROPAY", b[b.SOFORT = 4] = "SOFORT", b[b.PRZELEWY24 = 5] = "PRZELEWY24", b[b.SEPA_DEBIT = 6] = "SEPA_DEBIT", b[b.PAYSAFE_CARD = 7] = "PAYSAFE_CARD", b[b.GCASH = 8] = "GCASH", b[b.GRABPAY_MY = 9] = "GRABPAY_MY", b[b.MOMO_WALLET = 10] = "MOMO_WALLET", b[b.VENMO = 11] = "VENMO", b[b.GOPAY_WALLET = 12] = "GOPAY_WALLET", b[b.KAKAOPAY = 13] = "KAKAOPAY", b[b.BANCONTACT = 14] = "BANCONTACT", b[b.EPS = 15] = "EPS", b[b.IDEAL = 16] = "IDEAL", b[b.CASH_APP = 17] = "CASH_APP", b[b.APPLE = 18] = "APPLE", b[b.PAYMENT_REQUEST = 99] = "PAYMENT_REQUEST";
    let _l = new Map([
            [7, "paysafecard"],
            [8, "gcash"],
            [9, "grabpay_MY"],
            [10, "momo_wallet"],
            [13, "kakaopay"],
            [12, "gopay_wallet"],
            [17, "cashapp"]
        ]),
        _s = new Map([
            [14, "bancontact"],
            [3, "giropay"],
            [16, "ideal"]
        ]),
        _P = new Set([7, 8, 9, 12, 10, 13, 14, 15, 16, 4, 3, 5, 17]),
        _M = new Set([7, 9, 3, 5, 4, 14, 15, 16]),
        _G = new Set([1, 2, 6, 8, 10, 11, 13, 12, 17]),
        _U = new Set([3, 4, 5, 14, 15, 16, 7, 9, 12]),
        _d = new Set([6]),
        _u = new Set([4]);
    (K = r || (r = {}))[K.NEW = 1] = "NEW", (V = N || (N = {}))[V.PENDING = 0] = "PENDING", V[V.COMPLETED = 1] = "COMPLETED", V[V.FAILED = 2] = "FAILED", V[V.REVERSED = 3] = "REVERSED", V[V.REFUNDED = 4] = "REFUNDED", V[V.CANCELED = 5] = "CANCELED", (F = i || (i = {}))[F.PREMIUM = 1] = "PREMIUM", F[F.GUILD = 2] = "GUILD", F[F.APPLICATION = 3] = "APPLICATION", (v = c || (c = {})).PAYPAL_POPUP_CLOSED = "PAYPAL_POPUP_CLOSED", v.VENMO_APP_CANCELED = "VENMO_APP_CANCELED", v.VENMO_CANCELED = "VENMO_CANCELED", Object.freeze({
        CONSTANT: 1,
        APPLE_STICKER: 2
    }), (W = O || (O = {}))[W.DISCOVERY = 0] = "DISCOVERY", W[W.CHECKOUT = 1] = "CHECKOUT", (k = n || (n = {}))[k.SUBSCRIPTION = 0] = "SUBSCRIPTION", k[k.ONE_TIME = 1] = "ONE_TIME";
    let _p = Object.freeze({
        0: "subscription",
        1: "sku"
    });
    (x = L || (L = {}))[x.VIEW_CHANNEL = 1024] = "VIEW_CHANNEL", x[x.READ_MESSAGE_HISTORY = 65536] = "READ_MESSAGE_HISTORY", x[x.CONNECT = 1048576] = "CONNECT";
    let _B = Object.freeze({
            CREATE_INSTANT_INVITE: _t.getFlag(0),
            KICK_MEMBERS: _t.getFlag(1),
            BAN_MEMBERS: _t.getFlag(2),
            ADMINISTRATOR: _t.getFlag(3),
            MANAGE_CHANNELS: _t.getFlag(4),
            MANAGE_GUILD: _t.getFlag(5),
            CHANGE_NICKNAME: _t.getFlag(26),
            MANAGE_NICKNAMES: _t.getFlag(27),
            MANAGE_ROLES: _t.getFlag(28),
            MANAGE_WEBHOOKS: _t.getFlag(29),
            MANAGE_GUILD_EXPRESSIONS: _t.getFlag(30),
            CREATE_GUILD_EXPRESSIONS: _t.getFlag(43),
            VIEW_AUDIT_LOG: _t.getFlag(7),
            VIEW_CHANNEL: _t.getFlag(10),
            VIEW_GUILD_ANALYTICS: _t.getFlag(19),
            VIEW_CREATOR_MONETIZATION_ANALYTICS: _t.getFlag(41),
            MODERATE_MEMBERS: _t.getFlag(40),
            USE_EMBEDDED_ACTIVITIES: _t.getFlag(39),
            SEND_MESSAGES: _t.getFlag(11),
            SEND_TTS_MESSAGES: _t.getFlag(12),
            MANAGE_MESSAGES: _t.getFlag(13),
            EMBED_LINKS: _t.getFlag(14),
            ATTACH_FILES: _t.getFlag(15),
            READ_MESSAGE_HISTORY: _t.getFlag(16),
            MENTION_EVERYONE: _t.getFlag(17),
            USE_EXTERNAL_EMOJIS: _t.getFlag(18),
            ADD_REACTIONS: _t.getFlag(6),
            USE_APPLICATION_COMMANDS: _t.getFlag(31),
            MANAGE_THREADS: _t.getFlag(34),
            CREATE_PUBLIC_THREADS: _t.getFlag(35),
            CREATE_PRIVATE_THREADS: _t.getFlag(36),
            USE_EXTERNAL_STICKERS: _t.getFlag(37),
            SEND_MESSAGES_IN_THREADS: _t.getFlag(38),
            SEND_VOICE_MESSAGES: _t.getFlag(46),
            USE_CLYDE_AI: _t.getFlag(47),
            CONNECT: _t.getFlag(20),
            SPEAK: _t.getFlag(21),
            MUTE_MEMBERS: _t.getFlag(22),
            DEAFEN_MEMBERS: _t.getFlag(23),
            MOVE_MEMBERS: _t.getFlag(24),
            USE_VAD: _t.getFlag(25),
            PRIORITY_SPEAKER: _t.getFlag(8),
            STREAM: _t.getFlag(9),
            USE_SOUNDBOARD: _t.getFlag(42),
            USE_EXTERNAL_SOUNDS: _t.getFlag(45),
            SET_VOICE_CHANNEL_STATUS: _t.getFlag(48),
            REQUEST_TO_SPEAK: _t.getFlag(32),
            MANAGE_EVENTS: _t.getFlag(33),
            CREATE_EVENTS: _t.getFlag(44)
        }),
        _g = function() {
            for (var _ = arguments.length, E = Array(_), e = 0; e < _; e++) E[e] = arguments[e]
        },
        _H = () => null,
        _f = () => Promise.resolve(),
        _h = [_B.KICK_MEMBERS, _B.BAN_MEMBERS, _B.ADMINISTRATOR, _B.MANAGE_CHANNELS, _B.MANAGE_GUILD, _B.MANAGE_ROLES, _B.MANAGE_MESSAGES, _B.MANAGE_THREADS, _B.MODERATE_MEMBERS],
        _y = _t.combine(..._h),
        _w = 1,
        _Y = 6463,
        _m = 10,
        _b = "RpcApplicationLogger";
    (X = D || (D = {})).DISPATCH = "DISPATCH", X.SET_CONFIG = "SET_CONFIG", X.AUTHORIZE = "AUTHORIZE", X.AUTHENTICATE = "AUTHENTICATE", X.GET_GUILD = "GET_GUILD", X.GET_GUILDS = "GET_GUILDS", X.GET_CHANNEL = "GET_CHANNEL", X.GET_CHANNELS = "GET_CHANNELS", X.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", X.CREATE_CHANNEL_INVITE = "CREATE_CHANNEL_INVITE", X.GET_RELATIONSHIPS = "GET_RELATIONSHIPS", X.GET_USER = "GET_USER", X.SUBSCRIBE = "SUBSCRIBE", X.UNSUBSCRIBE = "UNSUBSCRIBE", X.SET_USER_VOICE_SETTINGS = "SET_USER_VOICE_SETTINGS", X.SET_USER_VOICE_SETTINGS_2 = "SET_USER_VOICE_SETTINGS_2", X.PUSH_TO_TALK = "PUSH_TO_TALK", X.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", X.GET_SELECTED_VOICE_CHANNEL = "GET_SELECTED_VOICE_CHANNEL", X.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", X.GET_VOICE_SETTINGS = "GET_VOICE_SETTINGS", X.SET_VOICE_SETTINGS_2 = "SET_VOICE_SETTINGS_2", X.SET_VOICE_SETTINGS = "SET_VOICE_SETTINGS", X.SET_ACTIVITY = "SET_ACTIVITY", X.SEND_ACTIVITY_JOIN_INVITE = "SEND_ACTIVITY_JOIN_INVITE", X.CLOSE_ACTIVITY_JOIN_REQUEST = "CLOSE_ACTIVITY_JOIN_REQUEST", X.ACTIVITY_INVITE_USER = "ACTIVITY_INVITE_USER", X.ACCEPT_ACTIVITY_INVITE = "ACCEPT_ACTIVITY_INVITE", X.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", X.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", X.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", X.INVITE_BROWSER = "INVITE_BROWSER", X.DEEP_LINK = "DEEP_LINK", X.CONNECTIONS_CALLBACK = "CONNECTIONS_CALLBACK", X.BILLING_POPUP_BRIDGE_CALLBACK = "BILLING_POPUP_BRIDGE_CALLBACK", X.BRAINTREE_POPUP_BRIDGE_CALLBACK = "BRAINTREE_POPUP_BRIDGE_CALLBACK", X.GIFT_CODE_BROWSER = "GIFT_CODE_BROWSER", X.GUILD_TEMPLATE_BROWSER = "GUILD_TEMPLATE_BROWSER", X.OVERLAY = "OVERLAY", X.BROWSER_HANDOFF = "BROWSER_HANDOFF", X.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", X.GET_IMAGE = "GET_IMAGE", X.SET_OVERLAY_LOCKED = "SET_OVERLAY_LOCKED", X.OPEN_OVERLAY_ACTIVITY_INVITE = "OPEN_OVERLAY_ACTIVITY_INVITE", X.OPEN_OVERLAY_GUILD_INVITE = "OPEN_OVERLAY_GUILD_INVITE", X.OPEN_OVERLAY_VOICE_SETTINGS = "OPEN_OVERLAY_VOICE_SETTINGS", X.VALIDATE_APPLICATION = "VALIDATE_APPLICATION", X.GET_ENTITLEMENT_TICKET = "GET_ENTITLEMENT_TICKET", X.GET_APPLICATION_TICKET = "GET_APPLICATION_TICKET", X.START_PURCHASE = "START_PURCHASE", X.START_PREMIUM_PURCHASE = "START_PREMIUM_PURCHASE", X.GET_SKUS = "GET_SKUS", X.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", X.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", X.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", X.GET_NETWORKING_CONFIG = "GET_NETWORKING_CONFIG", X.NETWORKING_SYSTEM_METRICS = "NETWORKING_SYSTEM_METRICS", X.NETWORKING_PEER_METRICS = "NETWORKING_PEER_METRICS", X.NETWORKING_CREATE_TOKEN = "NETWORKING_CREATE_TOKEN", X.SET_USER_ACHIEVEMENT = "SET_USER_ACHIEVEMENT", X.GET_USER_ACHIEVEMENTS = "GET_USER_ACHIEVEMENTS", X.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", X.SEND_GENERIC_EVENT = "SEND_GENERIC_EVENT", X.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", X.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", X.CAPTURE_LOG = "CAPTURE_LOG", X.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", X.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", X.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", X.GET_SOUNDBOARD_SOUNDS = "GET_SOUNDBOARD_SOUNDS", X.PLAY_SOUNDBOARD_SOUND = "PLAY_SOUNDBOARD_SOUND", X.TOGGLE_VIDEO = "TOGGLE_VIDEO", X.TOGGLE_SCREENSHARE = "TOGGLE_SCREENSHARE", X.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS", X.GET_PROVIDER_ACCESS_TOKEN = "GET_PROVIDER_ACCESS_TOKEN", (Q = S || (S = {})).CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", Q.GUILD_STATUS = "GUILD_STATUS", Q.GUILD_CREATE = "GUILD_CREATE", Q.CHANNEL_CREATE = "CHANNEL_CREATE", Q.RELATIONSHIP_UPDATE = "RELATIONSHIP_UPDATE", Q.VOICE_CHANNEL_SELECT = "VOICE_CHANNEL_SELECT", Q.VOICE_STATE_CREATE = "VOICE_STATE_CREATE", Q.VOICE_STATE_DELETE = "VOICE_STATE_DELETE", Q.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", Q.VOICE_SETTINGS_UPDATE = "VOICE_SETTINGS_UPDATE", Q.VOICE_SETTINGS_UPDATE_2 = "VOICE_SETTINGS_UPDATE_2", Q.VOICE_CONNECTION_STATUS = "VOICE_CONNECTION_STATUS", Q.SPEAKING_START = "SPEAKING_START", Q.SPEAKING_STOP = "SPEAKING_STOP", Q.GAME_JOIN = "GAME_JOIN", Q.GAME_SPECTATE = "GAME_SPECTATE", Q.ACTIVITY_JOIN = "ACTIVITY_JOIN", Q.ACTIVITY_JOIN_REQUEST = "ACTIVITY_JOIN_REQUEST", Q.ACTIVITY_SPECTATE = "ACTIVITY_SPECTATE", Q.ACTIVITY_INVITE = "ACTIVITY_INVITE", Q.ACTIVITY_PIP_MODE_UPDATE = "ACTIVITY_PIP_MODE_UPDATE", Q.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", Q.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", Q.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", Q.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE", Q.NOTIFICATION_CREATE = "NOTIFICATION_CREATE", Q.MESSAGE_CREATE = "MESSAGE_CREATE", Q.MESSAGE_UPDATE = "MESSAGE_UPDATE", Q.MESSAGE_DELETE = "MESSAGE_DELETE", Q.OVERLAY = "OVERLAY", Q.OVERLAY_UPDATE = "OVERLAY_UPDATE", Q.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", Q.ENTITLEMENT_DELETE = "ENTITLEMENT_DELETE", Q.USER_ACHIEVEMENT_UPDATE = "USER_ACHIEVEMENT_UPDATE", Q.VOICE_CHANNEL_EFFECT_SEND = "VOICE_CHANNEL_EFFECT_SEND", Q.VOICE_CHANNEL_EFFECT_RECENT_EMOJI = "VOICE_CHANNEL_EFFECT_RECENT_EMOJI", Q.VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE = "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE", Q.SCREENSHARE_STATE_UPDATE = "SCREENSHARE_STATE_UPDATE", Q.VIDEO_STATE_UPDATE = "VIDEO_STATE_UPDATE", Q.READY = "READY", Q.ERROR = "ERROR", (J = C || (C = {}))[J.UNKNOWN_ERROR = 1e3] = "UNKNOWN_ERROR", J[J.SERVICE_UNAVAILABLE = 1001] = "SERVICE_UNAVAILABLE", J[J.TRANSACTION_ABORTED = 1002] = "TRANSACTION_ABORTED", J[J.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", J[J.INVALID_COMMAND = 4002] = "INVALID_COMMAND", J[J.INVALID_GUILD = 4003] = "INVALID_GUILD", J[J.INVALID_EVENT = 4004] = "INVALID_EVENT", J[J.INVALID_CHANNEL = 4005] = "INVALID_CHANNEL", J[J.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS", J[J.INVALID_CLIENTID = 4007] = "INVALID_CLIENTID", J[J.INVALID_ORIGIN = 4008] = "INVALID_ORIGIN", J[J.INVALID_TOKEN = 4009] = "INVALID_TOKEN", J[J.INVALID_USER = 4010] = "INVALID_USER", J[J.INVALID_INVITE = 4011] = "INVALID_INVITE", J[J.INVALID_ACTIVITY_JOIN_REQUEST = 4012] = "INVALID_ACTIVITY_JOIN_REQUEST", J[J.INVALID_ENTITLEMENT = 4015] = "INVALID_ENTITLEMENT", J[J.INVALID_GIFT_CODE = 4016] = "INVALID_GIFT_CODE", J[J.INVALID_GUILD_TEMPLATE = 4017] = "INVALID_GUILD_TEMPLATE", J[J.INVALID_SOUND = 4018] = "INVALID_SOUND", J[J.INVALID_PROVIDER = 4019] = "INVALID_PROVIDER", J[J.OAUTH2_ERROR = 5e3] = "OAUTH2_ERROR", J[J.SELECT_CHANNEL_TIMED_OUT = 5001] = "SELECT_CHANNEL_TIMED_OUT", J[J.GET_GUILD_TIMED_OUT = 5002] = "GET_GUILD_TIMED_OUT", J[J.SELECT_VOICE_FORCE_REQUIRED = 5003] = "SELECT_VOICE_FORCE_REQUIRED", J[J.INVALID_ACTIVITY_SECRET = 5005] = "INVALID_ACTIVITY_SECRET", J[J.NO_ELIGIBLE_ACTIVITY = 5006] = "NO_ELIGIBLE_ACTIVITY", J[J.PURCHASE_CANCELED = 5008] = "PURCHASE_CANCELED", J[J.PURCHASE_ERROR = 5009] = "PURCHASE_ERROR", J[J.UNAUTHORIZED_FOR_ACHIEVEMENT = 5010] = "UNAUTHORIZED_FOR_ACHIEVEMENT", J[J.RATE_LIMITED = 5011] = "RATE_LIMITED", J[J.UNAUTHORIZED_FOR_APPLICATION = 5012] = "UNAUTHORIZED_FOR_APPLICATION", (Z = l || (l = {}))[Z.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", Z[Z.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", Z[Z.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", Z[Z.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", Z[Z.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", Z[Z.RATELIMITED = 4002] = "RATELIMITED", Z[Z.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", Z[Z.INVALID_VERSION = 4004] = "INVALID_VERSION", Z[Z.INVALID_ENCODING = 4005] = "INVALID_ENCODING";
    let _K = 250,
        _V = "token",
        _F = "tokens",
        _v = "https://".concat("status.discord.com"),
        _W = {
            PRESSKIT: "https://app.box.com/s/5puqm5ijahrrdao7yldi7fr3zah5i1am",
            REBRAND_PRESSKIT: "https://www.dropbox.com/sh/nabhhaq7kt59exr/AAB7U3f2pW-Jmvdul0yy7o-ia?dl=1",
            STATUS: "https://discordstatus.com",
            HELP_AND_SUPPORT: "//".concat(_O, "/hc/en-us"),
            FEEDBACK: "//".concat("feedback.discord.com"),
            EMAIL_SUPPORT: "mailto:support@".concat(_L),
            EMAIL_LAW_ENFORCEMENT: "mailto:lawenforcement@".concat(_L),
            EMAIL_HYPESQUAD: "mailto:hypesquad@".concat(_L),
            DEV_PERKS_FORM: "https://goo.gl/forms/oZfKBStV3sR8GHdU2",
            VERIFICATION_REQUIREMENTS: "https://dis.gd/vfqual",
            BASE_URL: "https://".concat(_c),
            PRESS_INQUIRIES: "mailto:press@".concat(_L),
            CONTACT_US: "https://dis.gd/contact",
            DEV_LANDING: "/build",
            DEV_PORTAL: "/developers",
            DEV_PORTAL_APPLICATIONS: "/developers/applications",
            DEV_PORTAL_DOCUMENTATION: "/developers/docs",
            DEV_PORTAL_SELF_SERVE_MODAL: "/developers/?store_signup=true",
            PARTNER_CODE_OF_CONDUCT: "https://".concat(_O, "/hc/en-us/articles/360024871991"),
            SUBMIT_TNS_REPORT: "https://dis.gd/request",
            MERCH_STORE: "https://discordmerch.com",
            MOD_ACADEMY_EXAM: "https://dis.gd/exam",
            OFFICIAL_3RD_PARTY_MERCH: "https://discordmerch.com/evergreenfooter",
            COMMUNITY: "/community",
            TWITTER_SUPPORT: "https://twitter.com/discord_support",
            QUESTS: "/quests"
        },
        _k = Object.freeze({
            TWITTER: Object.freeze({
                default: "https://twitter.com/discord",
                ja: "https://twitter.com/discord_jp"
            })
        }),
        _x = Object.freeze({
            WELCOME: "".concat(_N, "/welcome/"),
            ME: "".concat(_N, "/channels/@me"),
            SETTINGS: (_, E) => "".concat(_N, "/settings/").concat(_).concat(E ? "/".concat(E) : ""),
            CONNECTION: _ => "".concat(_N, "/connections/").concat(_),
            CHANGELOGS: "".concat(_N, "/settings/changelogs"),
            LOGIN: "".concat(_N, "/login"),
            LOGIN_WITH_REDIRECT: _ => "".concat(_N, "/login?redirect_to=").concat(_),
            REGISTER: "".concat(_N, "/register"),
            REGISTER_WITH_REDIRECT: _ => "".concat(_N, "/register?redirect_to=").concat(_),
            CREATE_GUILD: "".concat(_N, "/guilds/create"),
            VANITY_INVITE: _ => "".concat(_i, "/").concat(_),
            HYPESQUAD_ONLINE: "".concat(_N, "/settings/hypesquad-online"),
            BROWSE_NITRO_TITLES: "".concat(_N, "/store/browse?type=nitro"),
            SKU_DETAILS: (_, E) => "".concat(_N, "/store/skus/").concat(_).concat(null != E ? "?store_listing_id=".concat(E) : ""),
            MESSAGE: (_, E, e) => "/channels/".concat(_, "/").concat(E, "/").concat(e),
            CHANNEL: (_, E) => "/channels/".concat(_, "/").concat(E),
            REPORT: "".concat(_N, "/report")
        });
    (j = s || (s = {})).INDEX = "/", j.INDEX_WORD = "/index", j.INDEX_BUCKET = "/index/:bucketId", j.CHANGELOGS = "/changelogs/:date", j.COMMUNITY = "/community", j.COMPANY = "/company", j.COMPANY_INFORMATION = "/company-information", j.CREATORS = "/creators", j.DOWNLOADS = "/downloads", j.DOWNLOAD = "/download", j.GAMING = "/gaming", j.PRIVACY = "/privacy", j.TOS = "/tos", j.TERMS = "/terms", j.STORE_TERMS = "/store-terms", j.ACKNOWLEDGEMENTS = "/acknowledgements", j.LICENSES = "/licenses", j.PARTNERS = "/partners", j.HYPESQUAD = "/hypesquad", j.HYPESQUAD_RIOT = "/hypesquad-riot", j.BRANDING = "/branding", j.ERROR_404 = "/404", j.JOBS = "/jobs", j.JOB = "/jobs/:jobId", j.STREAMKIT = "/streamkit", j.SECURITY = "/security", j.NITRO = "/nitro", j.DISCOVER = "/servers", j.GUIDELINES = "/guidelines", j.RICH_PRESENCE = "/rich-presence", j.VERIFICATION = "/verification", j.OPEN_SOURCE = "/open-source", j.WARFRAME = "/warframe", j.REMOTE_AUTH = "/ra/:remoteAuthFingerprint", j.SAFETY_LANDING = "/safetycenter", j.SAFETY_ARTICLE_ROOT = "/safety", j.SAFETY_ARTICLE = "/safety/:article", j.NEWSROOM = "/newsroom", j.INSPIRATION = "/inspiration", j.MOD_ACADEMY_LANDING = "/moderation", j.MOD_ACADEMY_EXAM = "/moderation/exam", j.MOD_ACADEMY_ARTICLE = "/moderation/:article", j.BLOG = "/blog", j.APP_DIRECTORY = "/application-directory", j.REFRESH_INDEX = "/new", j.REFRESH_INDEX_WORD = "/new/index", j.REFRESH_COMPANY = "/new/company", j.REFRESH_DOWNLOAD = "/new/download", j.REFRESH_PRIVACY = "/new/privacy", j.REFRESH_TERMS = "/new/terms", j.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements", j.REFRESH_LICENSES = "/new/licenses", j.REFRESH_BRANDING = "/new/branding", j.REFRESH_JOBS = "/new/jobs", j.REFRESH_JOB = "/new/jobs/:jobId", j.REFRESH_STREAMKIT = "/new/streamkit", j.REFRESH_NITRO = "/new/nitro", j.REFRESH_GUIDELINES = "/new/guidelines", j.REFRESH_SAFETY_LANDING = "/new/safety", j.REFRESH_SAFETY_ARTICLE = "/new/safety/:article", j.COLLEGE = "/college", j.LEAGUE_CLUBS = "/league-communities", j.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams", j.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter", j.LEGACY_DEV_NEWSLETTER = "/newsletter", j.LEGAL_ARCHIVE = "/archive/", j.TERMS_MAY_2020 = "/archive/terms/may-2020", j.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020", j.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020", j.FALL_RELEASE_2023 = "/fallrelease", j.MOBILE_REDESIGN_2023 = "/mobile", j.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019", j.REFRESH_WHY_DISCORD = "/why-discord-is-different", j.WHY_DISCORD = "/why-discord", j.XBOX_OFFER = "/discord-xbox-offer-2020", j.COLLEGE_BRUINS = "/bruins", j.COLLEGE_ANTEATERS = "/anteaters", j.COLLEGE_GAUCHOS = "/gauchos", j.COLLEGE_BEARS = "/bears", j.COLLEGE_SLUGS = "/slugs", j.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram", j.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter", j.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram", j.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter";
    let _X = (0, _A.wrapPaths)(_x),
        _Q = (0, _A.wrapPaths)(s),
        _J = Object.freeze({
            FACEBOOK_URL: "https://www.facebook.com/discord/",
            INSTAGRAM_URL: "https://www.instagram.com/discord/",
            YOUTUBE_URL: "https://www.youtube.com/discord/",
            TIKTOK_URL: "https://www.tiktok.com/@discord"
        });
    (z = P || (P = {})).EXPERIMENT_USER_TRIGGERED = "experiment_user_triggered", z.EXPERIMENT_GUILD_TRIGGERED = "experiment_guild_triggered", z.EXPERIMENT_SAVE_EXPOSURE_FAILED = "experiment_save_exposure_failed", z.MKTG_PAGE_VIEWED = "mktg_page_viewed", z.CLICK_LANDING_CTA = "click_landing_cta", z.DOWNLOAD_APP = "download_app", z.MKTG_HYPESQUAD_FORM_SUBMITTED = "mktg_hypesquad_form_submitted", z.MKTG_HYPESQUAD_FORM_OPENED = "mktg_hypesquad_form_opened", z.CHANGE_MARKETING_LOCALE = "change_marketing_locale", z.GAME_CLICKED_LANDING = "game_clicked_landing", z.MAIN_NAVIGATION_MENU = "main_navigation_menu", z.MKTG_APPLICATION_STEP = "mktg_application_step", z.MKTG_WARFRAME_CTA_CLICKED = "mktg_warframe_cta_clicked", z.MKTG_PAGE_CTA_CLICKED = "mktg_page_cta_clicked", z.MKTG_VIDEO_PLAYED = "mktg_video_played", z.DEEP_LINK_CLICKED = "deep_link_clicked", z.SEO_PAGE_VIEWED = "seo_server_landing_page_viewed", z.SEO_PAGE_CTA_CLICKED = "seo_server_landing_page_cta_clicked", z.SEO_AGGREGATOR_PAGE_VIEWED = "seo_aggregator_page_viewed", z.SEO_AGGREGATOR_CTA_CLICKED = "seo_aggregator_page_cta_clicked", z.LOCATION_STACK_METADATA = "location_stack_metadata", z.CREATOR_STORE_PAGE_VIEWED = "creator_store_page_viewed", z.CREATOR_STORE_PAGE_CTA_CLICKED = "creator_store_page_cta_clicked", (M || (M = {})).MKTG_ACKNOWLEDGEMENTS_MODAL_OPEN = "mktg_ack_modal_open", (q = G || (G = {})).AED = "aed", q.AFN = "afn", q.ALL = "all", q.AMD = "amd", q.ANG = "ang", q.AOA = "aoa", q.ARS = "ars", q.AUD = "aud", q.AWG = "awg", q.AZN = "azn", q.BAM = "bam", q.BBD = "bbd", q.BDT = "bdt", q.BGN = "bgn", q.BHD = "bhd", q.BIF = "bif", q.BMD = "bmd", q.BND = "bnd", q.BOB = "bob", q.BOV = "bov", q.BRL = "brl", q.BSD = "bsd", q.BTN = "btn", q.BWP = "bwp", q.BYN = "byn", q.BYR = "byr", q.BZD = "bzd", q.CAD = "cad", q.CDF = "cdf", q.CHE = "che", q.CHF = "chf", q.CHW = "chw", q.CLF = "clf", q.CLP = "clp", q.CNY = "cny", q.COP = "cop", q.COU = "cou", q.CRC = "crc", q.CUC = "cuc", q.CUP = "cup", q.CVE = "cve", q.CZK = "czk", q.DJF = "djf", q.DKK = "dkk", q.DOP = "dop", q.DZD = "dzd", q.EGP = "egp", q.ERN = "ern", q.ETB = "etb", q.EUR = "eur", q.FJD = "fjd", q.FKP = "fkp", q.GBP = "gbp", q.GEL = "gel", q.GHS = "ghs", q.GIP = "gip", q.GMD = "gmd", q.GNF = "gnf", q.GTQ = "gtq", q.GYD = "gyd", q.HKD = "hkd", q.HNL = "hnl", q.HRK = "hrk", q.HTG = "htg", q.HUF = "huf", q.IDR = "idr", q.ILS = "ils", q.INR = "inr", q.IQD = "iqd", q.IRR = "irr", q.ISK = "isk", q.JMD = "jmd", q.JOD = "jod", q.JPY = "jpy", q.KES = "kes", q.KGS = "kgs", q.KHR = "khr", q.KMF = "kmf", q.KPW = "kpw", q.KRW = "krw", q.KWD = "kwd", q.KYD = "kyd", q.KZT = "kzt", q.LAK = "lak", q.LBP = "lbp", q.LKR = "lkr", q.LRD = "lrd", q.LSL = "lsl", q.LTL = "ltl", q.LVL = "lvl", q.LYD = "lyd", q.MAD = "mad", q.MDL = "mdl", q.MGA = "mga", q.MKD = "mkd", q.MMK = "mmk", q.MNT = "mnt", q.MOP = "mop", q.MRO = "mro", q.MUR = "mur", q.MVR = "mvr", q.MWK = "mwk", q.MXN = "mxn", q.MXV = "mxv", q.MYR = "myr", q.MZN = "mzn", q.NAD = "nad", q.NGN = "ngn", q.NIO = "nio", q.NOK = "nok", q.NPR = "npr", q.NZD = "nzd", q.OMR = "omr", q.PAB = "pab", q.PEN = "pen", q.PGK = "pgk", q.PHP = "php", q.PKR = "pkr", q.PLN = "pln", q.PYG = "pyg", q.QAR = "qar", q.RON = "ron", q.RSD = "rsd", q.RUB = "rub", q.RWF = "rwf", q.SAR = "sar", q.SBD = "sbd", q.SCR = "scr", q.SDG = "sdg", q.SEK = "sek", q.SGD = "sgd", q.SHP = "shp", q.SLL = "sll", q.SOS = "sos", q.SRD = "srd", q.SSP = "ssp", q.STD = "std", q.SVC = "svc", q.SYP = "syp", q.SZL = "szl", q.THB = "thb", q.TJS = "tjs", q.TMT = "tmt", q.TND = "tnd", q.TOP = "top", q.TRY = "try", q.TTD = "ttd", q.TWD = "twd", q.TZS = "tzs", q.UAH = "uah", q.UGX = "ugx", q.USD = "usd", q.USN = "usn", q.USS = "uss", q.UYI = "uyi", q.UYU = "uyu", q.UZS = "uzs", q.VEF = "vef", q.VND = "vnd", q.VUV = "vuv", q.WST = "wst", q.XAF = "xaf", q.XAG = "xag", q.XAU = "xau", q.XBA = "xba", q.XBB = "xbb", q.XBC = "xbc", q.XBD = "xbd", q.XCD = "xcd", q.XDR = "xdr", q.XFU = "xfu", q.XOF = "xof", q.XPD = "xpd", q.XPF = "xpf", q.XPT = "xpt", q.XSU = "xsu", q.XTS = "xts", q.XUA = "xua", q.YER = "yer", q.ZAR = "zar", q.ZMW = "zmw", q.ZWL = "zwl";
    let _Z = "US";
    ($ = U || (U = {})).COUNTRY = "US", $.CURRENCY = "usd", (__ = d || (d = {}))[__.SINGLE_PLAYER = 1] = "SINGLE_PLAYER", __[__.ONLINE_MULTIPLAYER = 2] = "ONLINE_MULTIPLAYER", __[__.LOCAL_MULTIPLAYER = 3] = "LOCAL_MULTIPLAYER", __[__.PVP = 4] = "PVP", __[__.LOCAL_COOP = 5] = "LOCAL_COOP", __[__.CROSS_PLATFORM = 6] = "CROSS_PLATFORM", __[__.RICH_PRESENCE = 7] = "RICH_PRESENCE", __[__.DISCORD_GAME_INVITES = 8] = "DISCORD_GAME_INVITES", __[__.SPECTATOR_MODE = 9] = "SPECTATOR_MODE", __[__.CONTROLLER_SUPPORT = 10] = "CONTROLLER_SUPPORT", __[__.CLOUD_SAVES = 11] = "CLOUD_SAVES", __[__.ONLINE_COOP = 12] = "ONLINE_COOP", __[__.SECURE_NETWORKING = 13] = "SECURE_NETWORKING", (_E = u || (u = {}))[_E.ACTION = 1] = "ACTION", _E[_E.ACTION_RPG = 2] = "ACTION_RPG", _E[_E.BRAWLER = 3] = "BRAWLER", _E[_E.HACK_AND_SLASH = 4] = "HACK_AND_SLASH", _E[_E.PLATFORMER = 5] = "PLATFORMER", _E[_E.STEALTH = 6] = "STEALTH", _E[_E.SURVIVAL = 7] = "SURVIVAL", _E[_E.ADVENTURE = 8] = "ADVENTURE", _E[_E.ACTION_ADVENTURE = 9] = "ACTION_ADVENTURE", _E[_E.METROIDVANIA = 10] = "METROIDVANIA", _E[_E.OPEN_WORLD = 11] = "OPEN_WORLD", _E[_E.PSYCHOLOGICAL_HORROR = 12] = "PSYCHOLOGICAL_HORROR", _E[_E.SANDBOX = 13] = "SANDBOX", _E[_E.SURVIVAL_HORROR = 14] = "SURVIVAL_HORROR", _E[_E.VISUAL_NOVEL = 15] = "VISUAL_NOVEL", _E[_E.DRIVING_RACING = 16] = "DRIVING_RACING", _E[_E.VEHICULAR_COMBAT = 17] = "VEHICULAR_COMBAT", _E[_E.MASSIVELY_MULTIPLAYER = 18] = "MASSIVELY_MULTIPLAYER", _E[_E.MMORPG = 19] = "MMORPG", _E[_E.ROLE_PLAYING = 20] = "ROLE_PLAYING", _E[_E.DUNGEON_CRAWLER = 21] = "DUNGEON_CRAWLER", _E[_E.ROGUELIKE = 22] = "ROGUELIKE", _E[_E.SHOOTER = 23] = "SHOOTER", _E[_E.LIGHT_GUN = 24] = "LIGHT_GUN", _E[_E.SHOOT_EM_UP = 25] = "SHOOT_EM_UP", _E[_E.FPS = 26] = "FPS", _E[_E.DUAL_JOYSTICK_SHOOTER = 27] = "DUAL_JOYSTICK_SHOOTER", _E[_E.SIMULATION = 28] = "SIMULATION", _E[_E.FLIGHT_SIMULATOR = 29] = "FLIGHT_SIMULATOR", _E[_E.TRAIN_SIMULATOR = 30] = "TRAIN_SIMULATOR", _E[_E.LIFE_SIMULATOR = 31] = "LIFE_SIMULATOR", _E[_E.FISHING = 32] = "FISHING", _E[_E.SPORTS = 33] = "SPORTS", _E[_E.BASEBALL = 34] = "BASEBALL", _E[_E.BASKETBALL = 35] = "BASKETBALL", _E[_E.BILLIARDS = 36] = "BILLIARDS", _E[_E.BOWLING = 37] = "BOWLING", _E[_E.BOXING = 38] = "BOXING", _E[_E.FOOTBALL = 39] = "FOOTBALL", _E[_E.GOLF = 40] = "GOLF", _E[_E.HOCKEY = 41] = "HOCKEY", _E[_E.SKATEBOARDING_SKATING = 42] = "SKATEBOARDING_SKATING", _E[_E.SNOWBOARDING_SKIING = 43] = "SNOWBOARDING_SKIING", _E[_E.SOCCER = 44] = "SOCCER", _E[_E.TRACK_FIELD = 45] = "TRACK_FIELD", _E[_E.SURFING_WAKEBOARDING = 46] = "SURFING_WAKEBOARDING", _E[_E.WRESTLING = 47] = "WRESTLING", _E[_E.STRATEGY = 48] = "STRATEGY", _E[_E.FOUR_X = 49] = "FOUR_X", _E[_E.ARTILLERY = 50] = "ARTILLERY", _E[_E.RTS = 51] = "RTS", _E[_E.TOWER_DEFENSE = 52] = "TOWER_DEFENSE", _E[_E.TURN_BASED_STRATEGY = 53] = "TURN_BASED_STRATEGY", _E[_E.WARGAME = 54] = "WARGAME", _E[_E.MOBA = 55] = "MOBA", _E[_E.FIGHTING = 56] = "FIGHTING", _E[_E.PUZZLE = 57] = "PUZZLE", _E[_E.CARD_GAME = 58] = "CARD_GAME", _E[_E.EDUCATION = 59] = "EDUCATION", _E[_E.FITNESS = 60] = "FITNESS", _E[_E.GAMBLING = 61] = "GAMBLING", _E[_E.MUSIC_RHYTHM = 62] = "MUSIC_RHYTHM", _E[_E.PARTY_MINI_GAME = 63] = "PARTY_MINI_GAME", _E[_E.PINBALL = 64] = "PINBALL", _E[_E.TRIVIA_BOARD_GAME = 65] = "TRIVIA_BOARD_GAME", (_e = p || (p = {}))[_e.GUILD_ROLE_SUBSCRIPTIONS = 1] = "GUILD_ROLE_SUBSCRIPTIONS", _e[_e.GUILD_PRODUCTS = 2] = "GUILD_PRODUCTS", (_I = B || (B = {})).PERMISSION_DENIED = "PERMISSION_DENIED", _I.PERMISSION_DISMISSED = "PERMISSION_DISMISSED", _I.NO_DEVICES_FOUND = "NO_DEVICES_FOUND", (_o = g || (g = {})).SWIPE = "SWIPE", _o.BROWSER = "BROWSER", _o.KEYBIND = "KEYBIND", (_a = H || (H = {}))[_a.IN_PROMPT = 1] = "IN_PROMPT";
    let _j = ["pepe", "nude", "nsfw", "18+", "hentai", "sex", "porn", "shit", "rape", "fuck", "penis", "pussy", "incest", "cum", "jizz", "cuck", "kkk", "terrorism"]
}