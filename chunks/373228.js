function(e, t, n) {
    "use strict";
    var i, r, s, a, o, l, u, d, _, c, E, I, T, f;
    n.r(t), n.d(t, {
        MetaStickerType: function() {
            return r
        },
        StickerCategoryTypes: function() {
            return o
        },
        StickerExtensions: function() {
            return s
        },
        StickerFormat: function() {
            return i
        },
        StickerGridItemTypes: function() {
            return a
        },
        StickerMetadataTypes: function() {
            return l
        },
        StickerSelectLocation: function() {
            return u
        },
        isAnimatedSticker: function() {
            return S
        },
        isCustomSticker: function() {
            return h
        }
    }), (d = i || (i = {}))[d.PNG = 1] = "PNG", d[d.APNG = 2] = "APNG", d[d.LOTTIE = 3] = "LOTTIE", d[d.GIF = 4] = "GIF", (_ = r || (r = {}))[_.STANDARD = 1] = "STANDARD", _[_.GUILD = 2] = "GUILD", (c = s || (s = {})).PNG = "png", c.APNG = "png", c.LOTTIE = "json", c.WEBP = "webp", c.GIF = "gif";
    let S = e => 1 !== e,
        h = e => 1 !== e;
    (E = a || (a = {}))[E.STICKER = 0] = "STICKER", E[E.CREATE_STICKER = 1] = "CREATE_STICKER", (I = o || (o = {})).PACK = "PACK", I.FAVORITE = "FAVORITE", I.RECENT = "RECENT", I.SEARCH_RESULTS = "SEARCH_RESULTS", I.SEARCH_SUGGESTIONS = "SEARCH_SUGGESTIONS", I.GUILD = "GUILD", I.EMPTY_GUILD_UPSELL = "EMPTY_GUILD_UPSELL", I.CREATE_STICKER = "CREATE_STICKER", (T = l || (l = {}))[T.STICKER_NAME = 0] = "STICKER_NAME", T[T.TAG = 1] = "TAG", T[T.CORRELATED_EMOJI = 2] = "CORRELATED_EMOJI", T[T.GUILD_NAME = 3] = "GUILD_NAME", T[T.PACK_NAME = 4] = "PACK_NAME", (f = u || (u = {}))[f.STICKER_PICKER = 0] = "STICKER_PICKER", f[f.EXPRESSION_SUGGESTIONS = 1] = "EXPRESSION_SUGGESTIONS", f[f.AUTOCOMPLETE = 2] = "AUTOCOMPLETE"
}