function(e, t, n) {
    "use strict";
    var i, s, r, a, o, l, u, d, c, _, f, E, h, g;
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
    }), (d = i || (i = {}))[d.PNG = 1] = "PNG", d[d.APNG = 2] = "APNG", d[d.LOTTIE = 3] = "LOTTIE", d[d.GIF = 4] = "GIF", (c = s || (s = {}))[c.STANDARD = 1] = "STANDARD", c[c.GUILD = 2] = "GUILD", (_ = r || (r = {})).PNG = "png", _.APNG = "png", _.LOTTIE = "json", _.WEBP = "webp", _.GIF = "gif";
    let m = e => 1 !== e,
        p = e => 1 !== e;
    (f = a || (a = {}))[f.STICKER = 0] = "STICKER", f[f.CREATE_STICKER = 1] = "CREATE_STICKER", (E = o || (o = {})).PACK = "PACK", E.FAVORITE = "FAVORITE", E.RECENT = "RECENT", E.SEARCH_RESULTS = "SEARCH_RESULTS", E.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", E.GUILD = "GUILD", E.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", E.CREATE_STICKER = "CREATE_STICKER", (h = l || (l = {}))[h.STICKER_NAME = 0] = "STICKER_NAME", h[h.TAG = 1] = "TAG", h[h.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", h[h.GUILD_NAME = 3] = "GUILD_NAME", h[h.PACK_NAME = 4] = "PACK_NAME", (g = u || (u = {}))[g.STICKER_PICKER = 0] = "STICKER_PICKER", g[g.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", g[g.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"
}