function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f, S, A, h, m, N, O;
    n.r(t), n.d(t, {
        AutocompleteOptionTypes: function() {
            return d
        },
        AutocompleteSelectionTypes: function() {
            return _
        },
        ChannelMentionMode: function() {
            return a
        },
        ClydeMentionMode: function() {
            return o
        },
        CommandMode: function() {
            return l
        },
        FocusMode: function() {
            return c
        },
        GlobalMentionMode: function() {
            return i
        },
        MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS: function() {
            return p
        },
        MAX_COMMAND_AUTOCOMPLETE_RESULTS: function() {
            return R
        },
        RoleMentionMode: function() {
            return s
        },
        SelectType: function() {
            return u
        },
        UserMentionMode: function() {
            return r
        }
    });
    let p = 3,
        R = 20;
    (E = i || (i = {}))[E.DENY = 0] = "DENY", E[E.ALLOW_EVERYONE = 1] = "ALLOW_EVERYONE", E[E.ALLOW_EVERYONE_OR_HERE = 2] = "ALLOW_EVERYONE_OR_HERE", (I = r || (r = {}))[I.DENY = 0] = "DENY", I[I.ALLOW_CHANNEL = 1] = "ALLOW_CHANNEL", I[I.ALLOW_GUILD = 2] = "ALLOW_GUILD", (T = s || (s = {}))[T.DENY = 0] = "DENY", T[T.ALLOW_MENTIONABLE = 1] = "ALLOW_MENTIONABLE", T[T.ALLOW_ALL = 2] = "ALLOW_ALL", (f = a || (a = {}))[f.DENY = 0] = "DENY", f[f.ALLOW_SELECTABLE = 1] = "ALLOW_SELECTABLE", (S = o || (o = {}))[S.DENY = 0] = "DENY", S[S.ALLOW = 1] = "ALLOW", (A = l || (l = {}))[A.DISABLED = 0] = "DISABLED", A[A.OLD_BUILT_INS = 1] = "OLD_BUILT_INS", A[A.NEW_TEXT_ONLY = 2] = "NEW_TEXT_ONLY", A[A.NEW = 3] = "NEW", (h = u || (u = {}))[h.INSERT = 0] = "INSERT", h[h.SEND = 1] = "SEND", (m = d || (d = {})).MENTIONS = "MENTIONS", m.CHANNELS = "CHANNELS", m.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS", m.REACTIONS = "REACTIONS", m.GIFS = "GIFS", m.LEGACY_COMMANDS = "LEGACY_COMMANDS", m.COMMANDS = "COMMANDS", m.COMMAND_OPTIONS = "COMMAND_OPTIONS", m.CHOICES = "CHOICES", (N = _ || (_ = {})).MENTION = "MENTION", N.CHANNEL = "CHANNEL", N.EMOJI = "EMOJI", N.STICKER = "STICKER", N.REACTION = "REACTION", N.GIF = "GIF", N.COMMAND = "COMMAND", N.COMMAND_OPTION = "COMMAND_OPTION", N.COMMAND_SUGGESTION = "COMMAND_SUGGESTION", N.CHOICE = "CHOICE", N.EMOJI_UPSELL = "EMOJI_UPSELL", (O = c || (c = {}))[O.AUTO = 0] = "AUTO", O[O.AUTO_WHEN_FILTERED = 1] = "AUTO_WHEN_FILTERED", O[O.MANUAL = 2] = "MANUAL"
}