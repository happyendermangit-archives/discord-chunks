function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d, c, f, _, h, E, g;
    n.r(t), n.d(t, {
        StickerFormat: function() {
            return i
        },
        MetaStickerType: function() {
            return s
        },
        StickerExtensions: function() {
            return r
        },
        isAnimatedSticker: function() {
            return m
        },
        isCustomSticker: function() {
            return p
        },
        StickerGridItemTypes: function() {
            return a
        },
        StickerCategoryTypes: function() {
            return o
        },
        StickerMetadataTypes: function() {
            return l
        },
        StickerSelectLocation: function() {
            return u
        }
    }), (d = i || (i = {}))[d.PNG = 1] = "PNG", d[d.APNG = 2] = "APNG", d[d.LOTTIE = 3] = "LOTTIE", d[d.GIF = 4] = "GIF", (c = s || (s = {}))[c.STANDARD = 1] = "STANDARD", c[c.GUILD = 2] = "GUILD", (f = r || (r = {})).PNG = "png", f.APNG = "png", f.LOTTIE = "json", f.WEBP = "webp", f.GIF = "gif";
    let m = e => 1 !== e,
        p = e => 1 !== e;
    (_ = a || (a = {}))[_.STICKER = 0] = "STICKER", _[_.CREATE_STICKER = 1] = "CREATE_STICKER", (h = o || (o = {})).PACK = "PACK", h.FAVORITE = "FAVORITE", h.RECENT = "RECENT", h.SEARCH_RESULTS = "SEARCH_RESULTS", h.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", h.GUILD = "GUILD", h.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", h.CREATE_STICKER = "CREATE_STICKER", (E = l || (l = {}))[E.STICKER_NAME = 0] = "STICKER_NAME", E[E.TAG = 1] = "TAG", E[E.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", E[E.GUILD_NAME = 3] = "GUILD_NAME", E[E.PACK_NAME = 4] = "PACK_NAME", (g = u || (u = {}))[g.STICKER_PICKER = 0] = "STICKER_PICKER", g[g.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", g[g.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"
}