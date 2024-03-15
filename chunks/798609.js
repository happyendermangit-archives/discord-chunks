function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d, c, f, _, E, h, g, m, p, S, v, T, I, A, C, y, N, R, O, D, P;
    n.r(t), n.d(t, {
        PermissionOverwriteType: function() {
            return i
        },
        EmbeddedActivitySupportedPlatforms: function() {
            return s
        },
        EmbeddedActivityLabelTypes: function() {
            return r
        },
        ApplicationDirectoryEntryCarouselItemType: function() {
            return a
        },
        InteractionContextType: function() {
            return o
        },
        ApplicationCommandOptionType: function() {
            return l
        },
        ApplicationCommandType: function() {
            return u
        },
        InteractionTypes: function() {
            return d
        },
        ComponentType: function() {
            return c
        },
        ButtonStyle: function() {
            return f
        },
        TextComponentStyle: function() {
            return _
        },
        InvoiceDiscountTypes: function() {
            return E
        },
        PurchaseNotificationType: function() {
            return h
        },
        AuthenticatorType: function() {
            return g
        }
    }), (m = i || (i = {}))[m.ROLE = 0] = "ROLE", m[m.MEMBER = 1] = "MEMBER", (p = s || (s = {})).IOS = "ios", p.ANDROID = "android", p.WEB = "web", (S = r || (r = {}))[S.NONE = 0] = "NONE", S[S.NEW = 1] = "NEW", S[S.UPDATED = 2] = "UPDATED", (v = a || (a = {}))[v.MEDIA_PROXY = 1] = "MEDIA_PROXY", v[v.YOUTUBE = 2] = "YOUTUBE", (T = o || (o = {}))[T.GUILD = 0] = "GUILD", T[T.BOT_DM = 1] = "BOT_DM", T[T.PRIVATE_CHANNEL = 2] = "PRIVATE_CHANNEL", (I = l || (l = {}))[I.SUB_COMMAND = 1] = "SUB_COMMAND", I[I.SUB_COMMAND_GROUP = 2] = "SUB_COMMAND_GROUP", I[I.STRING = 3] = "STRING", I[I.INTEGER = 4] = "INTEGER", I[I.BOOLEAN = 5] = "BOOLEAN", I[I.USER = 6] = "USER", I[I.CHANNEL = 7] = "CHANNEL", I[I.ROLE = 8] = "ROLE", I[I.MENTIONABLE = 9] = "MENTIONABLE", I[I.NUMBER = 10] = "NUMBER", I[I.ATTACHMENT = 11] = "ATTACHMENT", (A = u || (u = {}))[A.CHAT = 1] = "CHAT", A[A.USER = 2] = "USER", A[A.MESSAGE = 3] = "MESSAGE", A[A.PRIMARY_ENTRY_POINT = 4] = "PRIMARY_ENTRY_POINT", (C = d || (d = {}))[C.APPLICATION_COMMAND = 2] = "APPLICATION_COMMAND", C[C.MESSAGE_COMPONENT = 3] = "MESSAGE_COMPONENT", C[C.APPLICATION_COMMAND_AUTOCOMPLETE = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE", C[C.MODAL_SUBMIT = 5] = "MODAL_SUBMIT", (y = c || (c = {}))[y.ACTION_ROW = 1] = "ACTION_ROW", y[y.BUTTON = 2] = "BUTTON", y[y.STRING_SELECT = 3] = "STRING_SELECT", y[y.INPUT_TEXT = 4] = "INPUT_TEXT", y[y.USER_SELECT = 5] = "USER_SELECT", y[y.ROLE_SELECT = 6] = "ROLE_SELECT", y[y.MENTIONABLE_SELECT = 7] = "MENTIONABLE_SELECT", y[y.CHANNEL_SELECT = 8] = "CHANNEL_SELECT", (N = f || (f = {}))[N.PRIMARY = 1] = "PRIMARY", N[N.SECONDARY = 2] = "SECONDARY", N[N.SUCCESS = 3] = "SUCCESS", N[N.DESTRUCTIVE = 4] = "DESTRUCTIVE", N[N.LINK = 5] = "LINK", (R = _ || (_ = {}))[R.SMALL = 1] = "SMALL", R[R.PARAGRAPH = 2] = "PARAGRAPH", (O = E || (E = {}))[O.SUBSCRIPTION_PLAN = 1] = "SUBSCRIPTION_PLAN", O[O.ENTITLEMENT = 2] = "ENTITLEMENT", O[O.PREMIUM_LEGACY_UPGRADE_PROMOTION = 3] = "PREMIUM_LEGACY_UPGRADE_PROMOTION", O[O.PREMIUM_TRIAL = 4] = "PREMIUM_TRIAL", (D = h || (h = {}))[D.GUILD_PRODUCT = 0] = "GUILD_PRODUCT", (P = g || (g = {}))[P.WEBAUTHN = 1] = "WEBAUTHN", P[P.TOTP = 2] = "TOTP", P[P.SMS = 3] = "SMS"
}