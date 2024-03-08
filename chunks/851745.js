function(e, t, n) {
    "use strict";
    var i, l, a, s, r, o, u, d, c, f, p, m, h, x, E, y, g, S, C, I;
    n.r(t), n.d(t, {
        MAX_COMMAND_AUTOCOMPLETE_PLACEHOLDERS: function() {
            return T
        },
        MAX_COMMAND_AUTOCOMPLETE_RESULTS_LEGACY: function() {
            return _
        },
        MAX_COMMAND_AUTOCOMPLETE_RESULTS: function() {
            return v
        },
        GlobalMentionMode: function() {
            return i
        },
        UserMentionMode: function() {
            return l
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
    let T = 3,
        _ = 7,
        v = 20;
    (p = i || (i = {}))[p.DENY = 0] = "DENY", p[p.ALLOW_EVERYONE = 1] = "ALLOW_EVERYONE", p[p.ALLOW_EVERYONE_OR_HERE = 2] = "ALLOW_EVERYONE_OR_HERE", (m = l || (l = {}))[m.DENY = 0] = "DENY", m[m.ALLOW_CHANNEL = 1] = "ALLOW_CHANNEL", m[m.ALLOW_GUILD = 2] = "ALLOW_GUILD", (h = a || (a = {}))[h.DENY = 0] = "DENY", h[h.ALLOW_MENTIONABLE = 1] = "ALLOW_MENTIONABLE", h[h.ALLOW_ALL = 2] = "ALLOW_ALL", (x = s || (s = {}))[x.DENY = 0] = "DENY", x[x.ALLOW_SELECTABLE = 1] = "ALLOW_SELECTABLE", (E = r || (r = {}))[E.DENY = 0] = "DENY", E[E.ALLOW = 1] = "ALLOW", (y = o || (o = {}))[y.DISABLED = 0] = "DISABLED", y[y.OLD_BUILT_INS = 1] = "OLD_BUILT_INS", y[y.NEW_TEXT_ONLY = 2] = "NEW_TEXT_ONLY", y[y.NEW = 3] = "NEW", (g = u || (u = {}))[g.INSERT = 0] = "INSERT", g[g.SEND = 1] = "SEND", (S = d || (d = {})).MENTIONS = "MENTIONS", S.CHANNELS = "CHANNELS", S.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS", S.REACTIONS = "REACTIONS", S.GIFS = "GIFS", S.LEGACY_COMMANDS = "LEGACY_COMMANDS", S.COMMANDS = "COMMANDS", S.COMMAND_OPTIONS = "COMMAND_OPTIONS", S.CHOICES = "CHOICES", (C = c || (c = {})).MENTION = "MENTION", C.CHANNEL = "CHANNEL", C.EMOJI = "EMOJI", C.STICKER = "STICKER", C.REACTION = "REACTION", C.GIF = "GIF", C.COMMAND = "COMMAND", C.COMMAND_OPTION = "COMMAND_OPTION", C.COMMAND_SUGGESTION = "COMMAND_SUGGESTION", C.CHOICE = "CHOICE", C.EMOJI_UPSELL = "EMOJI_UPSELL", (I = f || (f = {}))[I.AUTO = 0] = "AUTO", I[I.AUTO_WHEN_FILTERED = 1] = "AUTO_WHEN_FILTERED", I[I.MANUAL = 2] = "MANUAL"
}