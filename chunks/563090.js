function(_, E, e) {
    "use strict";
    e.r(E), e.d(E, {
        ADYEN_PAYMENT_SOURCES: function() {
            return _U
        },
        AppRoutes: function() {
            return _j
        },
        BasicPermissions: function() {
            return Q
        },
        BraintreeErrors: function() {
            return W
        },
        ClientTypes: function() {
            return Y
        },
        Color: function() {
            return _N.Color
        },
        CurrencyCodes: function() {
            return _E
        },
        DELAYED_PAYMENTS: function() {
            return _f
        },
        DiscoveryBannedSearchWords: function() {
            return _0
        },
        EMAIL_DOMAIN: function() {
            return _s
        },
        ElevatedPermissions: function() {
            return _m
        },
        ElevatedPermissionsList: function() {
            return _w
        },
        FallbackCurrencyCountry: function() {
            return _$
        },
        HangStatusTypes: function() {
            return y
        },
        IRREDEEMABLE_PAYMENT_SOURCES: function() {
            return _d
        },
        Links: function() {
            return _Q
        },
        LocalizedLinks: function() {
            return _J
        },
        NOOP: function() {
            return _Y
        },
        NOOP_NULL: function() {
            return _b
        },
        NavigateEventSource: function() {
            return _r
        },
        OAuth2Scopes: function() {
            return b
        },
        PREPAID_PAYMENT_SOURCES: function() {
            return _p
        },
        PRIMARY_DOMAIN: function() {
            return _S
        },
        PROACTIVE_FULFILLMENT: function() {
            return _H
        },
        PaymentGatewayToFriendlyName: function() {
            return _u
        },
        PaymentGateways: function() {
            return w
        },
        PaymentSettings: function() {
            return _M
        },
        PaymentSourceFlags: function() {
            return V
        },
        PaymentSourceTypes: function() {
            return K
        },
        PaymentStatusTypes: function() {
            return v
        },
        Permissions: function() {
            return _y
        },
        PriceTierTypes: function() {
            return _I
        },
        PurchaseTypeToAnalyticsPaymentType: function() {
            return _h
        },
        PurchaseTypes: function() {
            return x
        },
        RECAPTCHA_SITE_KEY: function() {
            return _P
        },
        REDIRECTED_PAYMENT_SOURCES: function() {
            return _g
        },
        ROUGH_COUNT_MILLION_PLAYERS: function() {
            return _W
        },
        RPCCloseCodes: function() {
            return z
        },
        RPCCommands: function() {
            return J
        },
        RPCErrors: function() {
            return j
        },
        RPCEvents: function() {
            return Z
        },
        RPC_APPLICATION_LOGGING_CATEGORY: function() {
            return _F
        },
        RPC_PORT_RANGE: function() {
            return _v
        },
        RPC_STARTING_PORT: function() {
            return _V
        },
        RPC_VERSION: function() {
            return _K
        },
        RevenueSurfaces: function() {
            return k
        },
        RoleFlags: function() {
            return _R
        },
        SKUFeatureTypes: function() {
            return _o
        },
        SKUGenres: function() {
            return _t
        },
        SOCIAL_LINKS: function() {
            return _q
        },
        STATUS_PAGE_ENDPOINT: function() {
            return _X
        },
        STRIPE_PAYMENT_SOURCES: function() {
            return _G
        },
        SUPPORT_DEV_DOMAIN: function() {
            return _l
        },
        SUPPORT_DOMAIN: function() {
            return _C
        },
        StatusTypes: function() {
            return h
        },
        SubscriptionTypes: function() {
            return F
        },
        TOKENS_KEY: function() {
            return _x
        },
        TOKEN_KEY: function() {
            return _k
        },
        ThemeColor: function() {
            return _i.ThemeColor
        },
        ThemeExtends: function() {
            return _A.ThemeExtends
        },
        ThemeTypes: function() {
            return _A.default
        },
        UserMediaErrors: function() {
            return _a
        },
        VAULTABLE_PAYMENT_SOURCES: function() {
            return _B
        },
        WebAnalyticsEvents: function() {
            return $
        },
        WebRoutes: function() {
            return _z
        }
    });
    var o, t, I, a, r, R, A, T, n, N, i, c, O, L, D, S, C, l, s, P, u, M, U, G, d, p, B, g, f, H, h, y, Y, b, w, m, K, V, v, F, W, k, x, X, Q, J, Z, j, z, q, $, __, _E, _e, _o, _t, _I, _a, _r, _R, _A = e("924560"),
        _T = e("22287"),
        _n = e("389380");
    e("116603");
    var _N = e("720337"),
        _i = e("611863");

    function _c(_, E) {
        (null == E || E > _.length) && (E = _.length);
        for (var e = 0, o = Array(E); e < E; e++) o[e] = _[e];
        return o
    }
    e("504523");

    function _O(_, E, e) {
        return E in _ ? Object.defineProperty(_, E, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : _[E] = e, _
    }
    var _L = location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT,
        _D = location.protocol + "//discord.gg",
        _S = "discord.com",
        _C = "support.discord.com",
        _l = "support-dev.discord.com",
        _s = "discord.com";
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
    }), (o = H || (H = {})).PRIMARY_NORMAL = "ggsans-Normal, NotoSans-Normal", o.PRIMARY_MEDIUM = "ggsans-Medium, NotoSans-Medium", o.PRIMARY_SEMIBOLD = "ggsans-Semibold, NotoSans-Semibold", o.PRIMARY_BOLD = "ggsans-Bold, NotoSans-Bold", o.DISPLAY_NORMAL = "ggsans-Normal, NotoSans-Normal", o.DISPLAY_MEDIUM = "ggsans-Medium, NotoSans-Medium", o.DISPLAY_SEMIBOLD = "ggsans-Semibold, NotoSans-Semibold", o.DISPLAY_BOLD = "ggsans-Bold, NotoSans-Bold", o.DISPLAY_EXTRABOLD = "ggsans-ExtraBold, NotoSans-ExtraBold", o.CODE_SEMIBOLD = "SourceCodePro-Semibold", (t = h || (h = {})).ONLINE = "online", t.OFFLINE = "offline", t.IDLE = "idle", t.DND = "dnd", t.INVISIBLE = "invisible", t.STREAMING = "streaming", t.UNKNOWN = "unknown", (I = y || (y = {})).CHILLING = "chilling", I.GAMING = "gaming", I.FOCUSING = "focusing", I.BRB = "brb", I.EATING = "eating", I.IN_TRANSIT = "in-transit", I.WATCHING = "watching", I.CUSTOM = "custom", (a = Y || (Y = {})).DESKTOP = "desktop", a.WEB = "web", a.MOBILE = "mobile", a.UNKNOWN = "unknown";
    var _P = "6Lef5iQTAAAAAKeIvIY-DeexoO3gj7ryl9rLMEnn";
    (r = b || (b = {})).IDENTIFY = "identify", r.EMAIL = "email", r.CONNECTIONS = "connections", r.GUILDS = "guilds", r.GUILDS_JOIN = "guilds.join", r.GUILDS_MEMBERS_READ = "guilds.members.read", r.GDM_JOIN = "gdm.join", r.RPC = "rpc", r.RPC_NOTIFICATIONS_READ = "rpc.notifications.read", r.RPC_VOICE_READ = "rpc.voice.read", r.RPC_VOICE_WRITE = "rpc.voice.write", r.RPC_VIDEO_READ = "rpc.video.read", r.RPC_VIDEO_WRITE = "rpc.video.write", r.RPC_SCREENSHARE_READ = "rpc.screenshare.read", r.RPC_SCREENSHARE_WRITE = "rpc.screenshare.write", r.RPC_ACTIVITIES_WRITE = "rpc.activities.write", r.BOT = "bot", r.WEBHOOK_INCOMING = "webhook.incoming", r.MESSAGES_READ = "messages.read", r.APPLICATIONS_BUILDS_UPLOAD = "applications.builds.upload", r.APPLICATIONS_BUILDS_READ = "applications.builds.read", r.APPLICATIONS_COMMANDS = "applications.commands", r.APPLICATIONS_COMMANDS_UPDATE = "applications.commands.update", r.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE = "applications.commands.permissions.update", r.APPLICATIONS_STORE_UPDATE = "applications.store.update", r.APPLICATIONS_ENTITLEMENTS = "applications.entitlements", r.ACTIVITIES_READ = "activities.read", r.ACTIVITIES_WRITE = "activities.write", r.RELATIONSHIPS_READ = "relationships.read", r.VOICE = "voice", r.DM_CHANNELS_READ = "dm_channels.read", r.ROLE_CONNECTIONS_WRITE = "role_connections.write", (R = w || (w = {}))[R.STRIPE = 1] = "STRIPE", R[R.BRAINTREE = 2] = "BRAINTREE", R[R.APPLE = 3] = "APPLE", R[R.GOOGLE = 4] = "GOOGLE", R[R.ADYEN = 5] = "ADYEN", R[R.APPLE_PARTNER = 6] = "APPLE_PARTNER";
    var _u = Object.freeze((_O(m = {}, 1, "Stripe"), _O(m, 2, "Braintree"), _O(m, 3, "Apple"), _O(m, 4, "Google"), _O(m, 5, "Adyen"), _O(m, 6, "Apple Partner"), m)),
        _M = Object.freeze({
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
    (A = K || (K = {}))[A.UNKNOWN = 0] = "UNKNOWN", A[A.CARD = 1] = "CARD", A[A.PAYPAL = 2] = "PAYPAL", A[A.GIROPAY = 3] = "GIROPAY", A[A.SOFORT = 4] = "SOFORT", A[A.PRZELEWY24 = 5] = "PRZELEWY24", A[A.SEPA_DEBIT = 6] = "SEPA_DEBIT", A[A.PAYSAFE_CARD = 7] = "PAYSAFE_CARD", A[A.GCASH = 8] = "GCASH", A[A.GRABPAY_MY = 9] = "GRABPAY_MY", A[A.MOMO_WALLET = 10] = "MOMO_WALLET", A[A.VENMO = 11] = "VENMO", A[A.GOPAY_WALLET = 12] = "GOPAY_WALLET", A[A.KAKAOPAY = 13] = "KAKAOPAY", A[A.BANCONTACT = 14] = "BANCONTACT", A[A.EPS = 15] = "EPS", A[A.IDEAL = 16] = "IDEAL", A[A.CASH_APP = 17] = "CASH_APP", A[A.APPLE = 18] = "APPLE", A[A.PAYMENT_REQUEST = 99] = "PAYMENT_REQUEST";
    var _U = new Map([
            [7, "paysafecard"],
            [8, "gcash"],
            [9, "grabpay_MY"],
            [10, "momo_wallet"],
            [13, "kakaopay"],
            [12, "gopay_wallet"],
            [17, "cashapp"]
        ]),
        _G = new Map([
            [14, "bancontact"],
            [3, "giropay"],
            [16, "ideal"]
        ]),
        _d = new Set([7, 8, 9, 12, 10, 13, 14, 15, 16, 4, 3, 5, 17]),
        _p = new Set([7, 9, 3, 5, 4, 14, 15, 16]),
        _B = new Set([1, 2, 6, 8, 10, 11, 13, 12, 17]),
        _g = new Set([3, 4, 5, 14, 15, 16, 7, 9, 12]),
        _f = new Set([6]),
        _H = new Set([4]);
    (T = V || (V = {}))[T.NEW = 1] = "NEW", (n = v || (v = {}))[n.PENDING = 0] = "PENDING", n[n.COMPLETED = 1] = "COMPLETED", n[n.FAILED = 2] = "FAILED", n[n.REVERSED = 3] = "REVERSED", n[n.REFUNDED = 4] = "REFUNDED", n[n.CANCELED = 5] = "CANCELED", (N = F || (F = {}))[N.PREMIUM = 1] = "PREMIUM", N[N.GUILD = 2] = "GUILD", N[N.APPLICATION = 3] = "APPLICATION", (i = W || (W = {})).PAYPAL_POPUP_CLOSED = "PAYPAL_POPUP_CLOSED", i.VENMO_APP_CANCELED = "VENMO_APP_CANCELED", i.VENMO_CANCELED = "VENMO_CANCELED", Object.freeze({
        CONSTANT: 1,
        APPLE_STICKER: 2
    }), (c = k || (k = {}))[c.DISCOVERY = 0] = "DISCOVERY", c[c.CHECKOUT = 1] = "CHECKOUT", (O = x || (x = {}))[O.SUBSCRIPTION = 0] = "SUBSCRIPTION", O[O.ONE_TIME = 1] = "ONE_TIME";
    var _h = Object.freeze((_O(X = {}, 0, "subscription"), _O(X, 1, "sku"), X));
    (L = Q || (Q = {}))[L.VIEW_CHANNEL = 1024] = "VIEW_CHANNEL", L[L.READ_MESSAGE_HISTORY = 65536] = "READ_MESSAGE_HISTORY", L[L.CONNECT = 1048576] = "CONNECT";
    var _y = Object.freeze({
            CREATE_INSTANT_INVITE: _T.getFlag(0),
            KICK_MEMBERS: _T.getFlag(1),
            BAN_MEMBERS: _T.getFlag(2),
            ADMINISTRATOR: _T.getFlag(3),
            MANAGE_CHANNELS: _T.getFlag(4),
            MANAGE_GUILD: _T.getFlag(5),
            CHANGE_NICKNAME: _T.getFlag(26),
            MANAGE_NICKNAMES: _T.getFlag(27),
            MANAGE_ROLES: _T.getFlag(28),
            MANAGE_WEBHOOKS: _T.getFlag(29),
            MANAGE_GUILD_EXPRESSIONS: _T.getFlag(30),
            CREATE_GUILD_EXPRESSIONS: _T.getFlag(43),
            VIEW_AUDIT_LOG: _T.getFlag(7),
            VIEW_CHANNEL: _T.getFlag(10),
            VIEW_GUILD_ANALYTICS: _T.getFlag(19),
            VIEW_CREATOR_MONETIZATION_ANALYTICS: _T.getFlag(41),
            MODERATE_MEMBERS: _T.getFlag(40),
            USE_EMBEDDED_ACTIVITIES: _T.getFlag(39),
            SEND_MESSAGES: _T.getFlag(11),
            SEND_TTS_MESSAGES: _T.getFlag(12),
            MANAGE_MESSAGES: _T.getFlag(13),
            EMBED_LINKS: _T.getFlag(14),
            ATTACH_FILES: _T.getFlag(15),
            READ_MESSAGE_HISTORY: _T.getFlag(16),
            MENTION_EVERYONE: _T.getFlag(17),
            USE_EXTERNAL_EMOJIS: _T.getFlag(18),
            ADD_REACTIONS: _T.getFlag(6),
            USE_APPLICATION_COMMANDS: _T.getFlag(31),
            MANAGE_THREADS: _T.getFlag(34),
            CREATE_PUBLIC_THREADS: _T.getFlag(35),
            CREATE_PRIVATE_THREADS: _T.getFlag(36),
            USE_EXTERNAL_STICKERS: _T.getFlag(37),
            SEND_MESSAGES_IN_THREADS: _T.getFlag(38),
            SEND_VOICE_MESSAGES: _T.getFlag(46),
            USE_CLYDE_AI: _T.getFlag(47),
            CONNECT: _T.getFlag(20),
            SPEAK: _T.getFlag(21),
            MUTE_MEMBERS: _T.getFlag(22),
            DEAFEN_MEMBERS: _T.getFlag(23),
            MOVE_MEMBERS: _T.getFlag(24),
            USE_VAD: _T.getFlag(25),
            PRIORITY_SPEAKER: _T.getFlag(8),
            STREAM: _T.getFlag(9),
            USE_SOUNDBOARD: _T.getFlag(42),
            USE_EXTERNAL_SOUNDS: _T.getFlag(45),
            SET_VOICE_CHANNEL_STATUS: _T.getFlag(48),
            REQUEST_TO_SPEAK: _T.getFlag(32),
            MANAGE_EVENTS: _T.getFlag(33),
            CREATE_EVENTS: _T.getFlag(44)
        }),
        _Y = function() {
            for (var _ = arguments.length, E = Array(_), e = 0; e < _; e++) E[e] = arguments[e]
        },
        _b = function() {
            return null
        },
        _w = [_y.KICK_MEMBERS, _y.BAN_MEMBERS, _y.ADMINISTRATOR, _y.MANAGE_CHANNELS, _y.MANAGE_GUILD, _y.MANAGE_ROLES, _y.MANAGE_MESSAGES, _y.MANAGE_THREADS, _y.MODERATE_MEMBERS];
    var _m = _T.combine.apply(_T, function(_) {
            if (Array.isArray(_)) return _c(_)
        }(D = _w) || function(_) {
            if ("undefined" != typeof Symbol && null != _[Symbol.iterator] || null != _["@@iterator"]) return Array.from(_)
        }(D) || function(_, E) {
            if (_) {
                if ("string" == typeof _) return _c(_, E);
                var e = Object.prototype.toString.call(_).slice(8, -1);
                if ("Object" === e && _.constructor && (e = _.constructor.name), "Map" === e || "Set" === e) return Array.from(e);
                if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return _c(_, E)
            }
        }(D) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()),
        _K = 1,
        _V = 6463,
        _v = 10,
        _F = "RpcApplicationLogger";
    (S = J || (J = {})).DISPATCH = "DISPATCH", S.SET_CONFIG = "SET_CONFIG", S.AUTHORIZE = "AUTHORIZE", S.AUTHENTICATE = "AUTHENTICATE", S.GET_GUILD = "GET_GUILD", S.GET_GUILDS = "GET_GUILDS", S.GET_CHANNEL = "GET_CHANNEL", S.GET_CHANNELS = "GET_CHANNELS", S.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", S.CREATE_CHANNEL_INVITE = "CREATE_CHANNEL_INVITE", S.GET_RELATIONSHIPS = "GET_RELATIONSHIPS", S.GET_USER = "GET_USER", S.SUBSCRIBE = "SUBSCRIBE", S.UNSUBSCRIBE = "UNSUBSCRIBE", S.SET_USER_VOICE_SETTINGS = "SET_USER_VOICE_SETTINGS", S.SET_USER_VOICE_SETTINGS_2 = "SET_USER_VOICE_SETTINGS_2", S.PUSH_TO_TALK = "PUSH_TO_TALK", S.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", S.GET_SELECTED_VOICE_CHANNEL = "GET_SELECTED_VOICE_CHANNEL", S.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", S.GET_VOICE_SETTINGS = "GET_VOICE_SETTINGS", S.SET_VOICE_SETTINGS_2 = "SET_VOICE_SETTINGS_2", S.SET_VOICE_SETTINGS = "SET_VOICE_SETTINGS", S.SET_ACTIVITY = "SET_ACTIVITY", S.SEND_ACTIVITY_JOIN_INVITE = "SEND_ACTIVITY_JOIN_INVITE", S.CLOSE_ACTIVITY_JOIN_REQUEST = "CLOSE_ACTIVITY_JOIN_REQUEST", S.ACTIVITY_INVITE_USER = "ACTIVITY_INVITE_USER", S.ACCEPT_ACTIVITY_INVITE = "ACCEPT_ACTIVITY_INVITE", S.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", S.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", S.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", S.CREATE_ACTIVITY_INSTANCE = "CREATE_ACTIVITY_INSTANCE", S.JOIN_ACTIVITY_INSTANCE = "JOIN_ACTIVITY_INSTANCE", S.LEAVE_ACTIVITY_INSTANCE = "LEAVE_ACTIVITY_INSTANCE", S.INVITE_BROWSER = "INVITE_BROWSER", S.DEEP_LINK = "DEEP_LINK", S.CONNECTIONS_CALLBACK = "CONNECTIONS_CALLBACK", S.BILLING_POPUP_BRIDGE_CALLBACK = "BILLING_POPUP_BRIDGE_CALLBACK", S.BRAINTREE_POPUP_BRIDGE_CALLBACK = "BRAINTREE_POPUP_BRIDGE_CALLBACK", S.GIFT_CODE_BROWSER = "GIFT_CODE_BROWSER", S.GUILD_TEMPLATE_BROWSER = "GUILD_TEMPLATE_BROWSER", S.OVERLAY = "OVERLAY", S.BROWSER_HANDOFF = "BROWSER_HANDOFF", S.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", S.GET_IMAGE = "GET_IMAGE", S.CREATE_LOBBY = "CREATE_LOBBY", S.UPDATE_LOBBY = "UPDATE_LOBBY", S.DELETE_LOBBY = "DELETE_LOBBY", S.UPDATE_LOBBY_MEMBER = "UPDATE_LOBBY_MEMBER", S.CONNECT_TO_LOBBY = "CONNECT_TO_LOBBY", S.DISCONNECT_FROM_LOBBY = "DISCONNECT_FROM_LOBBY", S.SEND_TO_LOBBY = "SEND_TO_LOBBY", S.SEARCH_LOBBIES = "SEARCH_LOBBIES", S.CONNECT_TO_LOBBY_VOICE = "CONNECT_TO_LOBBY_VOICE", S.DISCONNECT_FROM_LOBBY_VOICE = "DISCONNECT_FROM_LOBBY_VOICE", S.SET_OVERLAY_LOCKED = "SET_OVERLAY_LOCKED", S.OPEN_OVERLAY_ACTIVITY_INVITE = "OPEN_OVERLAY_ACTIVITY_INVITE", S.OPEN_OVERLAY_GUILD_INVITE = "OPEN_OVERLAY_GUILD_INVITE", S.OPEN_OVERLAY_VOICE_SETTINGS = "OPEN_OVERLAY_VOICE_SETTINGS", S.VALIDATE_APPLICATION = "VALIDATE_APPLICATION", S.GET_ENTITLEMENT_TICKET = "GET_ENTITLEMENT_TICKET", S.GET_APPLICATION_TICKET = "GET_APPLICATION_TICKET", S.START_PURCHASE = "START_PURCHASE", S.START_PREMIUM_PURCHASE = "START_PREMIUM_PURCHASE", S.GET_SKUS = "GET_SKUS", S.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", S.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", S.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", S.GET_NETWORKING_CONFIG = "GET_NETWORKING_CONFIG", S.NETWORKING_SYSTEM_METRICS = "NETWORKING_SYSTEM_METRICS", S.NETWORKING_PEER_METRICS = "NETWORKING_PEER_METRICS", S.NETWORKING_CREATE_TOKEN = "NETWORKING_CREATE_TOKEN", S.SET_USER_ACHIEVEMENT = "SET_USER_ACHIEVEMENT", S.GET_USER_ACHIEVEMENTS = "GET_USER_ACHIEVEMENTS", S.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", S.SEND_GENERIC_EVENT = "SEND_GENERIC_EVENT", S.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", S.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", S.CAPTURE_LOG = "CAPTURE_LOG", S.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", S.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", S.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", S.GET_SOUNDBOARD_SOUNDS = "GET_SOUNDBOARD_SOUNDS", S.PLAY_SOUNDBOARD_SOUND = "PLAY_SOUNDBOARD_SOUND", S.TOGGLE_VIDEO = "TOGGLE_VIDEO", S.TOGGLE_SCREENSHARE = "TOGGLE_SCREENSHARE", S.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS", S.GET_PROVIDER_ACCESS_TOKEN = "GET_PROVIDER_ACCESS_TOKEN", (C = Z || (Z = {})).CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", C.GUILD_STATUS = "GUILD_STATUS", C.GUILD_CREATE = "GUILD_CREATE", C.CHANNEL_CREATE = "CHANNEL_CREATE", C.RELATIONSHIP_UPDATE = "RELATIONSHIP_UPDATE", C.VOICE_CHANNEL_SELECT = "VOICE_CHANNEL_SELECT", C.VOICE_STATE_CREATE = "VOICE_STATE_CREATE", C.VOICE_STATE_DELETE = "VOICE_STATE_DELETE", C.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", C.VOICE_SETTINGS_UPDATE = "VOICE_SETTINGS_UPDATE", C.VOICE_SETTINGS_UPDATE_2 = "VOICE_SETTINGS_UPDATE_2", C.VOICE_CONNECTION_STATUS = "VOICE_CONNECTION_STATUS", C.SPEAKING_START = "SPEAKING_START", C.SPEAKING_STOP = "SPEAKING_STOP", C.GAME_JOIN = "GAME_JOIN", C.GAME_SPECTATE = "GAME_SPECTATE", C.ACTIVITY_JOIN = "ACTIVITY_JOIN", C.ACTIVITY_JOIN_REQUEST = "ACTIVITY_JOIN_REQUEST", C.ACTIVITY_SPECTATE = "ACTIVITY_SPECTATE", C.ACTIVITY_INVITE = "ACTIVITY_INVITE", C.ACTIVITY_PIP_MODE_UPDATE = "ACTIVITY_PIP_MODE_UPDATE", C.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", C.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", C.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", C.ACTIVITY_INSTANCE_UPDATE = "ACTIVITY_INSTANCE_UPDATE", C.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE", C.NOTIFICATION_CREATE = "NOTIFICATION_CREATE", C.MESSAGE_CREATE = "MESSAGE_CREATE", C.MESSAGE_UPDATE = "MESSAGE_UPDATE", C.MESSAGE_DELETE = "MESSAGE_DELETE", C.LOBBY_DELETE = "LOBBY_DELETE", C.LOBBY_UPDATE = "LOBBY_UPDATE", C.LOBBY_MEMBER_CONNECT = "LOBBY_MEMBER_CONNECT", C.LOBBY_MEMBER_DISCONNECT = "LOBBY_MEMBER_DISCONNECT", C.LOBBY_MEMBER_UPDATE = "LOBBY_MEMBER_UPDATE", C.LOBBY_MESSAGE = "LOBBY_MESSAGE", C.OVERLAY = "OVERLAY", C.OVERLAY_UPDATE = "OVERLAY_UPDATE", C.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", C.ENTITLEMENT_DELETE = "ENTITLEMENT_DELETE", C.USER_ACHIEVEMENT_UPDATE = "USER_ACHIEVEMENT_UPDATE", C.VOICE_CHANNEL_EFFECT_SEND = "VOICE_CHANNEL_EFFECT_SEND", C.VOICE_CHANNEL_EFFECT_RECENT_EMOJI = "VOICE_CHANNEL_EFFECT_RECENT_EMOJI", C.VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE = "VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE", C.SCREENSHARE_STATE_UPDATE = "SCREENSHARE_STATE_UPDATE", C.VIDEO_STATE_UPDATE = "VIDEO_STATE_UPDATE", C.READY = "READY", C.ERROR = "ERROR", (l = j || (j = {}))[l.UNKNOWN_ERROR = 1e3] = "UNKNOWN_ERROR", l[l.SERVICE_UNAVAILABLE = 1001] = "SERVICE_UNAVAILABLE", l[l.TRANSACTION_ABORTED = 1002] = "TRANSACTION_ABORTED", l[l.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", l[l.INVALID_COMMAND = 4002] = "INVALID_COMMAND", l[l.INVALID_GUILD = 4003] = "INVALID_GUILD", l[l.INVALID_EVENT = 4004] = "INVALID_EVENT", l[l.INVALID_CHANNEL = 4005] = "INVALID_CHANNEL", l[l.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS", l[l.INVALID_CLIENTID = 4007] = "INVALID_CLIENTID", l[l.INVALID_ORIGIN = 4008] = "INVALID_ORIGIN", l[l.INVALID_TOKEN = 4009] = "INVALID_TOKEN", l[l.INVALID_USER = 4010] = "INVALID_USER", l[l.INVALID_INVITE = 4011] = "INVALID_INVITE", l[l.INVALID_ACTIVITY_JOIN_REQUEST = 4012] = "INVALID_ACTIVITY_JOIN_REQUEST", l[l.INVALID_LOBBY = 4013] = "INVALID_LOBBY", l[l.INVALID_LOBBY_SECRET = 4014] = "INVALID_LOBBY_SECRET", l[l.INVALID_ENTITLEMENT = 4015] = "INVALID_ENTITLEMENT", l[l.INVALID_GIFT_CODE = 4016] = "INVALID_GIFT_CODE", l[l.INVALID_GUILD_TEMPLATE = 4017] = "INVALID_GUILD_TEMPLATE", l[l.INVALID_SOUND = 4018] = "INVALID_SOUND", l[l.INVALID_PROVIDER = 4019] = "INVALID_PROVIDER", l[l.OAUTH2_ERROR = 5e3] = "OAUTH2_ERROR", l[l.SELECT_CHANNEL_TIMED_OUT = 5001] = "SELECT_CHANNEL_TIMED_OUT", l[l.GET_GUILD_TIMED_OUT = 5002] = "GET_GUILD_TIMED_OUT", l[l.SELECT_VOICE_FORCE_REQUIRED = 5003] = "SELECT_VOICE_FORCE_REQUIRED", l[l.INVALID_ACTIVITY_SECRET = 5005] = "INVALID_ACTIVITY_SECRET", l[l.NO_ELIGIBLE_ACTIVITY = 5006] = "NO_ELIGIBLE_ACTIVITY", l[l.LOBBY_FULL = 5007] = "LOBBY_FULL", l[l.PURCHASE_CANCELED = 5008] = "PURCHASE_CANCELED", l[l.PURCHASE_ERROR = 5009] = "PURCHASE_ERROR", l[l.UNAUTHORIZED_FOR_ACHIEVEMENT = 5010] = "UNAUTHORIZED_FOR_ACHIEVEMENT", l[l.RATE_LIMITED = 5011] = "RATE_LIMITED", l[l.UNAUTHORIZED_FOR_APPLICATION = 5012] = "UNAUTHORIZED_FOR_APPLICATION", (s = z || (z = {}))[s.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", s[s.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", s[s.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", s[s.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", s[s.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", s[s.RATELIMITED = 4002] = "RATELIMITED", s[s.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", s[s.INVALID_VERSION = 4004] = "INVALID_VERSION", s[s.INVALID_ENCODING = 4005] = "INVALID_ENCODING";
    var _W = 250,
        _k = "token",
        _x = "tokens",
        _X = "https://".concat("status.discord.com"),
        _Q = {
            PRESSKIT: "https://app.box.com/s/5puqm5ijahrrdao7yldi7fr3zah5i1am",
            REBRAND_PRESSKIT: "https://www.dropbox.com/sh/nabhhaq7kt59exr/AAB7U3f2pW-Jmvdul0yy7o-ia?dl=1",
            STATUS: "https://discordstatus.com",
            HELP_AND_SUPPORT: "//".concat(_C, "/hc/en-us"),
            FEEDBACK: "//".concat("feedback.discord.com"),
            EMAIL_SUPPORT: "mailto:support@".concat(_s),
            EMAIL_LAW_ENFORCEMENT: "mailto:lawenforcement@".concat(_s),
            EMAIL_HYPESQUAD: "mailto:hypesquad@".concat(_s),
            DEV_PERKS_FORM: "https://goo.gl/forms/oZfKBStV3sR8GHdU2",
            VERIFICATION_REQUIREMENTS: "https://dis.gd/vfqual",
            BASE_URL: "https://".concat(_S),
            PRESS_INQUIRIES: "mailto:press@".concat(_s),
            CONTACT_US: "https://dis.gd/contact",
            DEV_LANDING: "/build",
            DEV_PORTAL: "/developers",
            DEV_PORTAL_APPLICATIONS: "/developers/applications",
            DEV_PORTAL_DOCUMENTATION: "/developers/docs",
            DEV_PORTAL_SELF_SERVE_MODAL: "/developers/?store_signup=true",
            PARTNER_CODE_OF_CONDUCT: "https://".concat(_C, "/hc/en-us/articles/360024871991"),
            SUBMIT_TNS_REPORT: "https://dis.gd/request",
            MERCH_STORE: "https://discordmerch.com",
            MOD_ACADEMY_EXAM: "https://dis.gd/exam",
            OFFICIAL_3RD_PARTY_MERCH: "https://discordmerch.com/evergreenfooter",
            COMMUNITY: "/community",
            TWITTER_SUPPORT: "https://twitter.com/discord_support",
            QUESTS: "/quests"
        },
        _J = Object.freeze({
            TWITTER: Object.freeze({
                default: "https://twitter.com/discord",
                ja: "https://twitter.com/discord_jp"
            })
        }),
        _Z = Object.freeze({
            WELCOME: "".concat(_L, "/welcome/"),
            ME: "".concat(_L, "/channels/@me"),
            SETTINGS: function(_, E) {
                return "".concat(_L, "/settings/").concat(_).concat(E ? "/".concat(E) : "")
            },
            CONNECTION: function(_) {
                return "".concat(_L, "/connections/").concat(_)
            },
            CHANGELOGS: "".concat(_L, "/settings/changelogs"),
            LOGIN: "".concat(_L, "/login"),
            LOGIN_WITH_REDIRECT: function(_) {
                return "".concat(_L, "/login?redirect_to=").concat(_)
            },
            REGISTER: "".concat(_L, "/register"),
            REGISTER_WITH_REDIRECT: function(_) {
                return "".concat(_L, "/register?redirect_to=").concat(_)
            },
            CREATE_GUILD: "".concat(_L, "/guilds/create"),
            VANITY_INVITE: function(_) {
                return "".concat(_D, "/").concat(_)
            },
            HYPESQUAD_ONLINE: "".concat(_L, "/settings/hypesquad-online"),
            BROWSE_NITRO_TITLES: "".concat(_L, "/store/browse?type=nitro"),
            SKU_DETAILS: function(_, E) {
                return "".concat(_L, "/store/skus/").concat(_).concat(null != E ? "?store_listing_id=".concat(E) : "")
            },
            MESSAGE: function(_, E, e) {
                return "/channels/".concat(_, "/").concat(E, "/").concat(e)
            },
            CHANNEL: function(_, E) {
                return "/channels/".concat(_, "/").concat(E)
            },
            REPORT: "".concat(_L, "/report")
        });
    (P = q || (q = {})).INDEX = "/", P.INDEX_WORD = "/index", P.INDEX_BUCKET = "/index/:bucketId", P.CHANGELOGS = "/changelogs/:date", P.COMMUNITY = "/community", P.COMPANY = "/company", P.COMPANY_INFORMATION = "/company-information", P.CREATORS = "/creators", P.DOWNLOADS = "/downloads", P.DOWNLOAD = "/download", P.GAMING = "/gaming", P.PRIVACY = "/privacy", P.TOS = "/tos", P.TERMS = "/terms", P.STORE_TERMS = "/store-terms", P.ACKNOWLEDGEMENTS = "/acknowledgements", P.LICENSES = "/licenses", P.PARTNERS = "/partners", P.HYPESQUAD = "/hypesquad", P.HYPESQUAD_RIOT = "/hypesquad-riot", P.BRANDING = "/branding", P.ERROR_404 = "/404", P.JOBS = "/jobs", P.JOB = "/jobs/:jobId", P.STREAMKIT = "/streamkit", P.SECURITY = "/security", P.NITRO = "/nitro", P.DISCOVER = "/servers", P.GUIDELINES = "/guidelines", P.RICH_PRESENCE = "/rich-presence", P.VERIFICATION = "/verification", P.OPEN_SOURCE = "/open-source", P.WARFRAME = "/warframe", P.REMOTE_AUTH = "/ra/:remoteAuthFingerprint", P.SAFETY_LANDING = "/safetycenter", P.SAFETY_ARTICLE_ROOT = "/safety", P.SAFETY_ARTICLE = "/safety/:article", P.NEWSROOM = "/newsroom", P.INSPIRATION = "/inspiration", P.MOD_ACADEMY_LANDING = "/moderation", P.MOD_ACADEMY_EXAM = "/moderation/exam", P.MOD_ACADEMY_ARTICLE = "/moderation/:article", P.BLOG = "/blog", P.APP_DIRECTORY = "/application-directory", P.REFRESH_INDEX = "/new", P.REFRESH_INDEX_WORD = "/new/index", P.REFRESH_COMPANY = "/new/company", P.REFRESH_DOWNLOAD = "/new/download", P.REFRESH_PRIVACY = "/new/privacy", P.REFRESH_TERMS = "/new/terms", P.REFRESH_ACKNOWLEDGEMENTS = "/new/acknowledgements", P.REFRESH_LICENSES = "/new/licenses", P.REFRESH_BRANDING = "/new/branding", P.REFRESH_JOBS = "/new/jobs", P.REFRESH_JOB = "/new/jobs/:jobId", P.REFRESH_STREAMKIT = "/new/streamkit", P.REFRESH_NITRO = "/new/nitro", P.REFRESH_GUIDELINES = "/new/guidelines", P.REFRESH_SAFETY_LANDING = "/new/safety", P.REFRESH_SAFETY_ARTICLE = "/new/safety/:article", P.COLLEGE = "/college", P.LEAGUE_CLUBS = "/league-communities", P.DISCORD_RECRUITING_SCAMS = "/discord-recruitment-scams", P.DEV_NEWSLETTER_SIGNUP = "/dev-newsletter", P.LEGACY_DEV_NEWSLETTER = "/newsletter", P.LEGAL_ARCHIVE = "/archive/", P.TERMS_MAY_2020 = "/archive/terms/may-2020", P.PRIVACY_JUNE_2020 = "/archive/privacy/june-2020", P.GUIDELINES_MAY_2020 = "/archive/guidelines/may-2020", P.FALL_RELEASE_2023 = "/fallrelease", P.MOBILE_REDESIGN_2023 = "/mobile", P.REFRESH_XBOX_OFFER = "/new/discord-xbox-offer-2019", P.REFRESH_WHY_DISCORD = "/why-discord-is-different", P.WHY_DISCORD = "/why-discord", P.XBOX_OFFER = "/discord-xbox-offer-2020", P.COLLEGE_BRUINS = "/bruins", P.COLLEGE_ANTEATERS = "/anteaters", P.COLLEGE_GAUCHOS = "/gauchos", P.COLLEGE_BEARS = "/bears", P.COLLEGE_SLUGS = "/slugs", P.BACK_TO_SCHOOL_GIVEAWAY_INSTAGRAM = "/terms/back-to-school-2020/instagram", P.BACK_TO_SCHOOL_GIVEAWAY_TWITTER = "/terms/back-to-school-2020/twitter", P.SNOWSGIVING_GIVEAWAY_INSTAGRAM = "/terms/snowsgiving-2020/instagram", P.SNOWSGIVING_GIVEAWAY_TWITTER = "/terms/snowsgiving-2020/twitter";
    var _j = (0, _n.wrapPaths)(_Z),
        _z = (0, _n.wrapPaths)(q),
        _q = Object.freeze({
            FACEBOOK_URL: "https://www.facebook.com/discord/",
            INSTAGRAM_URL: "https://www.instagram.com/discord/",
            YOUTUBE_URL: "https://www.youtube.com/discord/",
            TIKTOK_URL: "https://www.tiktok.com/@discord"
        });
    (u = $ || ($ = {})).EXPERIMENT_USER_TRIGGERED = "experiment_user_triggered", u.EXPERIMENT_GUILD_TRIGGERED = "experiment_guild_triggered", u.EXPERIMENT_SAVE_EXPOSURE_FAILED = "experiment_save_exposure_failed", u.MKTG_PAGE_VIEWED = "mktg_page_viewed", u.CLICK_LANDING_CTA = "click_landing_cta", u.DOWNLOAD_APP = "download_app", u.MKTG_HYPESQUAD_FORM_SUBMITTED = "mktg_hypesquad_form_submitted", u.MKTG_HYPESQUAD_FORM_OPENED = "mktg_hypesquad_form_opened", u.CHANGE_MARKETING_LOCALE = "change_marketing_locale", u.GAME_CLICKED_LANDING = "game_clicked_landing", u.MAIN_NAVIGATION_MENU = "main_navigation_menu", u.MKTG_APPLICATION_STEP = "mktg_application_step", u.MKTG_WARFRAME_CTA_CLICKED = "mktg_warframe_cta_clicked", u.MKTG_PAGE_CTA_CLICKED = "mktg_page_cta_clicked", u.MKTG_VIDEO_PLAYED = "mktg_video_played", u.DEEP_LINK_CLICKED = "deep_link_clicked", u.SEO_PAGE_VIEWED = "seo_server_landing_page_viewed", u.SEO_PAGE_CTA_CLICKED = "seo_server_landing_page_cta_clicked", u.SEO_AGGREGATOR_PAGE_VIEWED = "seo_aggregator_page_viewed", u.SEO_AGGREGATOR_CTA_CLICKED = "seo_aggregator_page_cta_clicked", u.LOCATION_STACK_METADATA = "location_stack_metadata", u.CREATOR_STORE_PAGE_VIEWED = "creator_store_page_viewed", u.CREATOR_STORE_PAGE_CTA_CLICKED = "creator_store_page_cta_clicked", (__ || (__ = {})).MKTG_ACKNOWLEDGEMENTS_MODAL_OPEN = "mktg_ack_modal_open", (M = _E || (_E = {})).AED = "aed", M.AFN = "afn", M.ALL = "all", M.AMD = "amd", M.ANG = "ang", M.AOA = "aoa", M.ARS = "ars", M.AUD = "aud", M.AWG = "awg", M.AZN = "azn", M.BAM = "bam", M.BBD = "bbd", M.BDT = "bdt", M.BGN = "bgn", M.BHD = "bhd", M.BIF = "bif", M.BMD = "bmd", M.BND = "bnd", M.BOB = "bob", M.BOV = "bov", M.BRL = "brl", M.BSD = "bsd", M.BTN = "btn", M.BWP = "bwp", M.BYN = "byn", M.BYR = "byr", M.BZD = "bzd", M.CAD = "cad", M.CDF = "cdf", M.CHE = "che", M.CHF = "chf", M.CHW = "chw", M.CLF = "clf", M.CLP = "clp", M.CNY = "cny", M.COP = "cop", M.COU = "cou", M.CRC = "crc", M.CUC = "cuc", M.CUP = "cup", M.CVE = "cve", M.CZK = "czk", M.DJF = "djf", M.DKK = "dkk", M.DOP = "dop", M.DZD = "dzd", M.EGP = "egp", M.ERN = "ern", M.ETB = "etb", M.EUR = "eur", M.FJD = "fjd", M.FKP = "fkp", M.GBP = "gbp", M.GEL = "gel", M.GHS = "ghs", M.GIP = "gip", M.GMD = "gmd", M.GNF = "gnf", M.GTQ = "gtq", M.GYD = "gyd", M.HKD = "hkd", M.HNL = "hnl", M.HRK = "hrk", M.HTG = "htg", M.HUF = "huf", M.IDR = "idr", M.ILS = "ils", M.INR = "inr", M.IQD = "iqd", M.IRR = "irr", M.ISK = "isk", M.JMD = "jmd", M.JOD = "jod", M.JPY = "jpy", M.KES = "kes", M.KGS = "kgs", M.KHR = "khr", M.KMF = "kmf", M.KPW = "kpw", M.KRW = "krw", M.KWD = "kwd", M.KYD = "kyd", M.KZT = "kzt", M.LAK = "lak", M.LBP = "lbp", M.LKR = "lkr", M.LRD = "lrd", M.LSL = "lsl", M.LTL = "ltl", M.LVL = "lvl", M.LYD = "lyd", M.MAD = "mad", M.MDL = "mdl", M.MGA = "mga", M.MKD = "mkd", M.MMK = "mmk", M.MNT = "mnt", M.MOP = "mop", M.MRO = "mro", M.MUR = "mur", M.MVR = "mvr", M.MWK = "mwk", M.MXN = "mxn", M.MXV = "mxv", M.MYR = "myr", M.MZN = "mzn", M.NAD = "nad", M.NGN = "ngn", M.NIO = "nio", M.NOK = "nok", M.NPR = "npr", M.NZD = "nzd", M.OMR = "omr", M.PAB = "pab", M.PEN = "pen", M.PGK = "pgk", M.PHP = "php", M.PKR = "pkr", M.PLN = "pln", M.PYG = "pyg", M.QAR = "qar", M.RON = "ron", M.RSD = "rsd", M.RUB = "rub", M.RWF = "rwf", M.SAR = "sar", M.SBD = "sbd", M.SCR = "scr", M.SDG = "sdg", M.SEK = "sek", M.SGD = "sgd", M.SHP = "shp", M.SLL = "sll", M.SOS = "sos", M.SRD = "srd", M.SSP = "ssp", M.STD = "std", M.SVC = "svc", M.SYP = "syp", M.SZL = "szl", M.THB = "thb", M.TJS = "tjs", M.TMT = "tmt", M.TND = "tnd", M.TOP = "top", M.TRY = "try", M.TTD = "ttd", M.TWD = "twd", M.TZS = "tzs", M.UAH = "uah", M.UGX = "ugx", M.USD = "usd", M.USN = "usn", M.USS = "uss", M.UYI = "uyi", M.UYU = "uyu", M.UZS = "uzs", M.VEF = "vef", M.VND = "vnd", M.VUV = "vuv", M.WST = "wst", M.XAF = "xaf", M.XAG = "xag", M.XAU = "xau", M.XBA = "xba", M.XBB = "xbb", M.XBC = "xbc", M.XBD = "xbd", M.XCD = "xcd", M.XDR = "xdr", M.XFU = "xfu", M.XOF = "xof", M.XPD = "xpd", M.XPF = "xpf", M.XPT = "xpt", M.XSU = "xsu", M.XTS = "xts", M.XUA = "xua", M.YER = "yer", M.ZAR = "zar", M.ZMW = "zmw", M.ZWL = "zwl";
    var _$ = "US";
    (U = _e || (_e = {})).COUNTRY = "US", U.CURRENCY = "usd", (G = _o || (_o = {}))[G.SINGLE_PLAYER = 1] = "SINGLE_PLAYER", G[G.ONLINE_MULTIPLAYER = 2] = "ONLINE_MULTIPLAYER", G[G.LOCAL_MULTIPLAYER = 3] = "LOCAL_MULTIPLAYER", G[G.PVP = 4] = "PVP", G[G.LOCAL_COOP = 5] = "LOCAL_COOP", G[G.CROSS_PLATFORM = 6] = "CROSS_PLATFORM", G[G.RICH_PRESENCE = 7] = "RICH_PRESENCE", G[G.DISCORD_GAME_INVITES = 8] = "DISCORD_GAME_INVITES", G[G.SPECTATOR_MODE = 9] = "SPECTATOR_MODE", G[G.CONTROLLER_SUPPORT = 10] = "CONTROLLER_SUPPORT", G[G.CLOUD_SAVES = 11] = "CLOUD_SAVES", G[G.ONLINE_COOP = 12] = "ONLINE_COOP", G[G.SECURE_NETWORKING = 13] = "SECURE_NETWORKING", (d = _t || (_t = {}))[d.ACTION = 1] = "ACTION", d[d.ACTION_RPG = 2] = "ACTION_RPG", d[d.BRAWLER = 3] = "BRAWLER", d[d.HACK_AND_SLASH = 4] = "HACK_AND_SLASH", d[d.PLATFORMER = 5] = "PLATFORMER", d[d.STEALTH = 6] = "STEALTH", d[d.SURVIVAL = 7] = "SURVIVAL", d[d.ADVENTURE = 8] = "ADVENTURE", d[d.ACTION_ADVENTURE = 9] = "ACTION_ADVENTURE", d[d.METROIDVANIA = 10] = "METROIDVANIA", d[d.OPEN_WORLD = 11] = "OPEN_WORLD", d[d.PSYCHOLOGICAL_HORROR = 12] = "PSYCHOLOGICAL_HORROR", d[d.SANDBOX = 13] = "SANDBOX", d[d.SURVIVAL_HORROR = 14] = "SURVIVAL_HORROR", d[d.VISUAL_NOVEL = 15] = "VISUAL_NOVEL", d[d.DRIVING_RACING = 16] = "DRIVING_RACING", d[d.VEHICULAR_COMBAT = 17] = "VEHICULAR_COMBAT", d[d.MASSIVELY_MULTIPLAYER = 18] = "MASSIVELY_MULTIPLAYER", d[d.MMORPG = 19] = "MMORPG", d[d.ROLE_PLAYING = 20] = "ROLE_PLAYING", d[d.DUNGEON_CRAWLER = 21] = "DUNGEON_CRAWLER", d[d.ROGUELIKE = 22] = "ROGUELIKE", d[d.SHOOTER = 23] = "SHOOTER", d[d.LIGHT_GUN = 24] = "LIGHT_GUN", d[d.SHOOT_EM_UP = 25] = "SHOOT_EM_UP", d[d.FPS = 26] = "FPS", d[d.DUAL_JOYSTICK_SHOOTER = 27] = "DUAL_JOYSTICK_SHOOTER", d[d.SIMULATION = 28] = "SIMULATION", d[d.FLIGHT_SIMULATOR = 29] = "FLIGHT_SIMULATOR", d[d.TRAIN_SIMULATOR = 30] = "TRAIN_SIMULATOR", d[d.LIFE_SIMULATOR = 31] = "LIFE_SIMULATOR", d[d.FISHING = 32] = "FISHING", d[d.SPORTS = 33] = "SPORTS", d[d.BASEBALL = 34] = "BASEBALL", d[d.BASKETBALL = 35] = "BASKETBALL", d[d.BILLIARDS = 36] = "BILLIARDS", d[d.BOWLING = 37] = "BOWLING", d[d.BOXING = 38] = "BOXING", d[d.FOOTBALL = 39] = "FOOTBALL", d[d.GOLF = 40] = "GOLF", d[d.HOCKEY = 41] = "HOCKEY", d[d.SKATEBOARDING_SKATING = 42] = "SKATEBOARDING_SKATING", d[d.SNOWBOARDING_SKIING = 43] = "SNOWBOARDING_SKIING", d[d.SOCCER = 44] = "SOCCER", d[d.TRACK_FIELD = 45] = "TRACK_FIELD", d[d.SURFING_WAKEBOARDING = 46] = "SURFING_WAKEBOARDING", d[d.WRESTLING = 47] = "WRESTLING", d[d.STRATEGY = 48] = "STRATEGY", d[d.FOUR_X = 49] = "FOUR_X", d[d.ARTILLERY = 50] = "ARTILLERY", d[d.RTS = 51] = "RTS", d[d.TOWER_DEFENSE = 52] = "TOWER_DEFENSE", d[d.TURN_BASED_STRATEGY = 53] = "TURN_BASED_STRATEGY", d[d.WARGAME = 54] = "WARGAME", d[d.MOBA = 55] = "MOBA", d[d.FIGHTING = 56] = "FIGHTING", d[d.PUZZLE = 57] = "PUZZLE", d[d.CARD_GAME = 58] = "CARD_GAME", d[d.EDUCATION = 59] = "EDUCATION", d[d.FITNESS = 60] = "FITNESS", d[d.GAMBLING = 61] = "GAMBLING", d[d.MUSIC_RHYTHM = 62] = "MUSIC_RHYTHM", d[d.PARTY_MINI_GAME = 63] = "PARTY_MINI_GAME", d[d.PINBALL = 64] = "PINBALL", d[d.TRIVIA_BOARD_GAME = 65] = "TRIVIA_BOARD_GAME", (p = _I || (_I = {}))[p.GUILD_ROLE_SUBSCRIPTIONS = 1] = "GUILD_ROLE_SUBSCRIPTIONS", p[p.GUILD_PRODUCTS = 2] = "GUILD_PRODUCTS", (B = _a || (_a = {})).PERMISSION_DENIED = "PERMISSION_DENIED", B.PERMISSION_DISMISSED = "PERMISSION_DISMISSED", B.NO_DEVICES_FOUND = "NO_DEVICES_FOUND", (g = _r || (_r = {})).SWIPE = "SWIPE", g.BROWSER = "BROWSER", g.KEYBIND = "KEYBIND", (f = _R || (_R = {}))[f.IN_PROMPT = 1] = "IN_PROMPT";
    var _0 = ["pepe", "nude", "nsfw", "18+", "hentai", "sex", "porn", "shit", "rape", "fuck", "penis", "pussy", "incest", "cum", "jizz", "cuck", "kkk", "terrorism"]
}