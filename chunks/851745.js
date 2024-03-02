function(e, t, n) {
    "use strict";
    var l, i, a, s, r, o, u, d, c, f, m, p, h, E, g, C, S, T, I, v;
    n.r(t), n.d(t, {
        MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS: function() {
            return _
        },
        MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY: function() {
            return N
        },
        MAX_COMMAND_AUTOCOMPLETE_RESULTS: function() {
            return A
        },
        GlobalMentionMode: function() {
            return l
        },
        UserMentionMode: function() {
            return i
        },
        RoleMentionMode: function() {
            return a
        },
        ChannelMentionMode: function() {
            return s
        },
        ClydeMentionMode: function() {
            return r
        },
        CommandMode: function() {
            return o
        },
        SelectType: function() {
            return u
        },
        AutocompleteOptionTypes: function() {
            return d
        },
        AutocompleteSelectionTypes: function() {
            return c
        },
        FocusMode: function() {
            return f
        }
    });
    let _ = 3,
        N = 7,
        A = 20;
    (m = l || (l = {}))[m.DENY = 0] = "DENY", m[m.ALLOW_EVERYONE = 1] = "ALLOW_EVERYONE", m[m.ALLOW_EVERYONE_OR_HERE = 2] = "ALLOW_EVERYONE_OR_HERE", (p = i || (i = {}))[p.DENY = 0] = "DENY", p[p.ALLOW_CHANNEL = 1] = "ALLOW_CHANNEL", p[p.ALLOW_GUILD = 2] = "ALLOW_GUILD", (h = a || (a = {}))[h.DENY = 0] = "DENY", h[h.ALLOW_MENTIONABLE = 1] = "ALLOW_MENTIONABLE", h[h.ALLOW_ALL = 2] = "ALLOW_ALL", (E = s || (s = {}))[E.DENY = 0] = "DENY", E[E.ALLOW_SELECTABLE = 1] = "ALLOW_SELECTABLE", (g = r || (r = {}))[g.DENY = 0] = "DENY", g[g.ALLOW = 1] = "ALLOW", (C = o || (o = {}))[C.DISABLED = 0] = "DISABLED", C[C.OLD_BUILT_INS = 1] = "OLD_BUILT_INS", C[C.NEW_TEXT_ONLY = 2] = "NEW_TEXT_ONLY", C[C.NEW = 3] = "NEW", (S = u || (u = {}))[S.INSERT = 0] = "INSERT", S[S.SEND = 1] = "SEND", (T = d || (d = {})).MENTIONS = "MENTIONS", T.CHANNELS = "CHANNELS", T.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS", T.REACTIONS = "REACTIONS", T.GIFS = "GIFS", T.LEGACY_COMMANDS = "LEGACY_COMMANDS", T.COMMANDS = "COMMANDS", T.COMMAND_OPTIONS = "COMMAND_OPTIONS", T.CHOICES = "CHOICES", (I = c || (c = {})).MENTION = "MENTION", I.CHANNEL = "CHANNEL", I.EMOJI = "EMOJI", I.STICKER = "STICKER", I.REACTION = "REACTION", I.GIF = "GIF", I.COMMAND = "COMMAND", I.COMMAND_OPTION = "COMMAND_OPTION", I.COMMAND_SUGGESTION = "COMMAND_SUGGESTION", I.CHOICE = "CHOICE", I.EMOJI_UPSELL = "EMOJI_UPSELL", (v = f || (f = {}))[v.AUTO = 0] = "AUTO", v[v.AUTO_WHEN_FILTERED = 1] = "AUTO_WHEN_FILTERED", v[v.MANUAL = 2] = "MANUAL"
}