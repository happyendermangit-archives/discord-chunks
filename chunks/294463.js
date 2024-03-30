function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MetaStickerType: function() {
            return f
        },
        StickerCategoryTypes: function() {
            return E
        },
        StickerExtensions: function() {
            return d
        },
        StickerFormat: function() {
            return c
        },
        StickerGridItemTypes: function() {
            return _
        },
        StickerMetadataTypes: function() {
            return p
        },
        StickerSelectLocation: function() {
            return m
        },
        isAnimatedSticker: function() {
            return y
        },
        isCustomSticker: function() {
            return I
        }
    }), (u = c || (c = {}))[u.PNG = 1] = "PNG", u[u.APNG = 2] = "APNG", u[u.LOTTIE = 3] = "LOTTIE", u[u.GIF = 4] = "GIF", (s = f || (f = {}))[s.STANDARD = 1] = "STANDARD", s[s.GUILD = 2] = "GUILD", (l = d || (d = {})).PNG = "png", l.APNG = "png", l.LOTTIE = "json", l.WEBP = "webp", l.GIF = "gif";
    var r, o, i, a, u, s, l, c, f, d, _, E, p, m, y = function(e) {
            return 1 !== e
        },
        I = function(e) {
            return 1 !== e
        };
    (r = _ || (_ = {}))[r.STICKER = 0] = "STICKER", r[r.CREATE_STICKER = 1] = "CREATE_STICKER", (o = E || (E = {})).PACK = "PACK", o.FAVORITE = "FAVORITE", o.RECENT = "RECENT", o.SEARCH_RESULTS = "SEARCH_RESULTS", o.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", o.GUILD = "GUILD", o.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", o.CREATE_STICKER = "CREATE_STICKER", (i = p || (p = {}))[i.STICKER_NAME = 0] = "STICKER_NAME", i[i.TAG = 1] = "TAG", i[i.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", i[i.GUILD_NAME = 3] = "GUILD_NAME", i[i.PACK_NAME = 4] = "PACK_NAME", (a = m || (m = {}))[a.STICKER_PICKER = 0] = "STICKER_PICKER", a[a.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", a[a.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"
}