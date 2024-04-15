function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, h, A, m, N, p, O, R, C, g, L, D, v, M;
    n.r(t), n.d(t, {
        ApplicationCommandOptionType: function() {
            return l
        },
        ApplicationCommandType: function() {
            return u
        },
        ApplicationDirectoryEntryCarouselItemType: function() {
            return a
        },
        AuthenticatorType: function() {
            return f
        },
        ButtonStyle: function() {
            return c
        },
        ComponentType: function() {
            return _
        },
        EmbeddedActivityLabelTypes: function() {
            return s
        },
        EmbeddedActivitySupportedPlatforms: function() {
            return r
        },
        InteractionContextType: function() {
            return o
        },
        InteractionTypes: function() {
            return d
        },
        InvoiceDiscountTypes: function() {
            return I
        },
        PermissionOverwriteType: function() {
            return i
        },
        PurchaseNotificationType: function() {
            return T
        },
        TextComponentStyle: function() {
            return E
        }
    }), (S = i || (i = {}))[S.ROLE = 0] = "ROLE", S[S.MEMBER = 1] = "MEMBER", (h = r || (r = {})).IOS = "ios", h.ANDROID = "android", h.WEB = "web", (A = s || (s = {}))[A.NONE = 0] = "NONE", A[A.NEW = 1] = "NEW", A[A.UPDATED = 2] = "UPDATED", (m = a || (a = {}))[m.MEDIA_PROXY = 1] = "MEDIA_PROXY", m[m.YOUTUBE = 2] = "YOUTUBE", (N = o || (o = {}))[N.GUILD = 0] = "GUILD", N[N.BOT_DM = 1] = "BOT_DM", N[N.PRIVATE_CHANNEL = 2] = "PRIVATE_CHANNEL", (p = l || (l = {}))[p.SUB_COMMAND = 1] = "SUB_COMMAND", p[p.SUB_COMMAND_GROUP = 2] = "SUB_COMMAND_GROUP", p[p.STRING = 3] = "STRING", p[p.INTEGER = 4] = "INTEGER", p[p.BOOLEAN = 5] = "BOOLEAN", p[p.USER = 6] = "USER", p[p.CHANNEL = 7] = "CHANNEL", p[p.ROLE = 8] = "ROLE", p[p.MENTIONABLE = 9] = "MENTIONABLE", p[p.NUMBER = 10] = "NUMBER", p[p.ATTACHMENT = 11] = "ATTACHMENT", (O = u || (u = {}))[O.CHAT = 1] = "CHAT", O[O.USER = 2] = "USER", O[O.MESSAGE = 3] = "MESSAGE", O[O.PRIMARY_ENTRY_POINT = 4] = "PRIMARY_ENTRY_POINT", (R = d || (d = {}))[R.APPLICATION_COMMAND = 2] = "APPLICATION_COMMAND", R[R.MESSAGE_COMPONENT = 3] = "MESSAGE_COMPONENT", R[R.APPLICATION_COMMAND_AUTOCOMPLETE = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE", R[R.MODAL_SUBMIT = 5] = "MODAL_SUBMIT", (C = _ || (_ = {}))[C.ACTION_ROW = 1] = "ACTION_ROW", C[C.BUTTON = 2] = "BUTTON", C[C.STRING_SELECT = 3] = "STRING_SELECT", C[C.INPUT_TEXT = 4] = "INPUT_TEXT", C[C.USER_SELECT = 5] = "USER_SELECT", C[C.ROLE_SELECT = 6] = "ROLE_SELECT", C[C.MENTIONABLE_SELECT = 7] = "MENTIONABLE_SELECT", C[C.CHANNEL_SELECT = 8] = "CHANNEL_SELECT", (g = c || (c = {}))[g.PRIMARY = 1] = "PRIMARY", g[g.SECONDARY = 2] = "SECONDARY", g[g.SUCCESS = 3] = "SUCCESS", g[g.DESTRUCTIVE = 4] = "DESTRUCTIVE", g[g.LINK = 5] = "LINK", (L = E || (E = {}))[L.SMALL = 1] = "SMALL", L[L.PARAGRAPH = 2] = "PARAGRAPH", (D = I || (I = {}))[D.SUBSCRIPTION_PLAN = 1] = "SUBSCRIPTION_PLAN", D[D.ENTITLEMENT = 2] = "ENTITLEMENT", D[D.PREMIUM_LEGACY_UPGRADE_PROMOTION = 3] = "PREMIUM_LEGACY_UPGRADE_PROMOTION", D[D.PREMIUM_TRIAL = 4] = "PREMIUM_TRIAL", (v = T || (T = {}))[v.GUILD_PRODUCT = 0] = "GUILD_PRODUCT", (M = f || (f = {}))[M.WEBAUTHN = 1] = "WEBAUTHN", M[M.TOTP = 2] = "TOTP", M[M.SMS = 3] = "SMS"
}