function(e, t, n) {
    "use strict";
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y, I, h, O, T, S, v, g, A, b, N, R, C, P;
    n.r(t), n.d(t, {
        ApplicationCommandOptionType: function() {
            return s
        },
        ApplicationCommandType: function() {
            return l
        },
        ApplicationDirectoryEntryCarouselItemType: function() {
            return a
        },
        AuthenticatorType: function() {
            return m
        },
        ButtonStyle: function() {
            return d
        },
        ComponentType: function() {
            return f
        },
        EmbeddedActivityLabelTypes: function() {
            return i
        },
        EmbeddedActivitySupportedPlatforms: function() {
            return o
        },
        InteractionContextType: function() {
            return u
        },
        InteractionTypes: function() {
            return c
        },
        InvoiceDiscountTypes: function() {
            return E
        },
        PermissionOverwriteType: function() {
            return r
        },
        PurchaseNotificationType: function() {
            return p
        },
        TextComponentStyle: function() {
            return _
        }
    }), (y = r || (r = {}))[y.ROLE = 0] = "ROLE", y[y.MEMBER = 1] = "MEMBER", (I = o || (o = {})).IOS = "ios", I.ANDROID = "android", I.WEB = "web", (h = i || (i = {}))[h.NONE = 0] = "NONE", h[h.NEW = 1] = "NEW", h[h.UPDATED = 2] = "UPDATED", (O = a || (a = {}))[O.MEDIA_PROXY = 1] = "MEDIA_PROXY", O[O.YOUTUBE = 2] = "YOUTUBE", (T = u || (u = {}))[T.GUILD = 0] = "GUILD", T[T.BOT_DM = 1] = "BOT_DM", T[T.PRIVATE_CHANNEL = 2] = "PRIVATE_CHANNEL", (S = s || (s = {}))[S.SUB_COMMAND = 1] = "SUB_COMMAND", S[S.SUB_COMMAND_GROUP = 2] = "SUB_COMMAND_GROUP", S[S.STRING = 3] = "STRING", S[S.INTEGER = 4] = "INTEGER", S[S.BOOLEAN = 5] = "BOOLEAN", S[S.USER = 6] = "USER", S[S.CHANNEL = 7] = "CHANNEL", S[S.ROLE = 8] = "ROLE", S[S.MENTIONABLE = 9] = "MENTIONABLE", S[S.NUMBER = 10] = "NUMBER", S[S.ATTACHMENT = 11] = "ATTACHMENT", (v = l || (l = {}))[v.CHAT = 1] = "CHAT", v[v.USER = 2] = "USER", v[v.MESSAGE = 3] = "MESSAGE", v[v.PRIMARY_ENTRY_POINT = 4] = "PRIMARY_ENTRY_POINT", (g = c || (c = {}))[g.APPLICATION_COMMAND = 2] = "APPLICATION_COMMAND", g[g.MESSAGE_COMPONENT = 3] = "MESSAGE_COMPONENT", g[g.APPLICATION_COMMAND_AUTOCOMPLETE = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE", g[g.MODAL_SUBMIT = 5] = "MODAL_SUBMIT", (A = f || (f = {}))[A.ACTION_ROW = 1] = "ACTION_ROW", A[A.BUTTON = 2] = "BUTTON", A[A.STRING_SELECT = 3] = "STRING_SELECT", A[A.INPUT_TEXT = 4] = "INPUT_TEXT", A[A.USER_SELECT = 5] = "USER_SELECT", A[A.ROLE_SELECT = 6] = "ROLE_SELECT", A[A.MENTIONABLE_SELECT = 7] = "MENTIONABLE_SELECT", A[A.CHANNEL_SELECT = 8] = "CHANNEL_SELECT", (b = d || (d = {}))[b.PRIMARY = 1] = "PRIMARY", b[b.SECONDARY = 2] = "SECONDARY", b[b.SUCCESS = 3] = "SUCCESS", b[b.DESTRUCTIVE = 4] = "DESTRUCTIVE", b[b.LINK = 5] = "LINK", (N = _ || (_ = {}))[N.SMALL = 1] = "SMALL", N[N.PARAGRAPH = 2] = "PARAGRAPH", (R = E || (E = {}))[R.SUBSCRIPTION_PLAN = 1] = "SUBSCRIPTION_PLAN", R[R.ENTITLEMENT = 2] = "ENTITLEMENT", R[R.PREMIUM_LEGACY_UPGRADE_PROMOTION = 3] = "PREMIUM_LEGACY_UPGRADE_PROMOTION", R[R.PREMIUM_TRIAL = 4] = "PREMIUM_TRIAL", (C = p || (p = {}))[C.GUILD_PRODUCT = 0] = "GUILD_PRODUCT", (P = m || (m = {}))[P.WEBAUTHN = 1] = "WEBAUTHN", P[P.TOTP = 2] = "TOTP", P[P.SMS = 3] = "SMS"
}