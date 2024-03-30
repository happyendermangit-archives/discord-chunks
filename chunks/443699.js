function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createStickerPackCategory: function() {
            return D
        },
        getFilenameForSticker: function() {
            return b
        },
        getMessageStickers: function() {
            return k
        },
        getStickerAssetUrl: function() {
            return N
        },
        getStickerFormatTypeFromFileType: function() {
            return A
        },
        getStickerPackBannerAssetUrl: function() {
            return R
        },
        getStickerPackPreviewSticker: function() {
            return v
        },
        isAvailableGuildSticker: function() {
            return G
        },
        isGuildSticker: function() {
            return U
        },
        isStandardSticker: function() {
            return w
        },
        isStickerAssetUrl: function() {
            return C
        },
        isStickerPackAnimated: function() {
            return P
        },
        shouldAnimateSticker: function() {
            return L
        },
        shouldAttachSticker: function() {
            return M
        }
    });
    var r = n("284404"),
        o = n("896299"),
        i = n("306912"),
        a = n("158201"),
        u = n("299529"),
        s = n("374550"),
        l = n("51181"),
        c = n("294463"),
        f = n("271172"),
        d = n("281767"),
        _ = window.GLOBAL_ENV,
        E = _.API_ENDPOINT,
        p = _.MEDIA_PROXY_ENDPOINT,
        m = _.PROJECT_ENV,
        y = _.ASSET_ENDPOINT,
        I = _.CDN_HOST,
        h = Object.values(c.StickerExtensions),
        O = decodeURIComponent(d.Endpoints.STICKER_ASSET("[\\d]+", "(".concat(h.join("|"), ")"))),
        T = RegExp("(".concat(location.protocol).concat(y, "|").concat(location.protocol).concat(p, ")(").concat(O, ")"), "ig"),
        S = RegExp("".concat(location.protocol).concat(E, "(").concat(O, ")"), "ig"),
        v = function(e) {
            if (null != e.cover_sticker_id) {
                var t = e.stickers.find(function(t) {
                    return t.id === e.cover_sticker_id
                });
                if (null != t) return t
            }
            return e.stickers[0]
        },
        g = function(e) {
            switch (e) {
                case c.StickerFormat.PNG:
                    return u.SUPPORTS_WEBP ? c.StickerExtensions.WEBP : c.StickerExtensions.PNG;
                case c.StickerFormat.APNG:
                    return c.StickerExtensions.APNG;
                case c.StickerFormat.LOTTIE:
                    return c.StickerExtensions.LOTTIE;
                case c.StickerFormat.GIF:
                    return c.StickerExtensions.GIF;
                default:
                    throw Error("Unexpected format type: ".concat(e))
            }
        },
        A = function(e) {
            switch (e) {
                case "application/json":
                    return c.StickerFormat.LOTTIE;
                case "image/apng":
                    return c.StickerFormat.APNG;
                case "image/png":
                case "image/webp":
                    return c.StickerFormat.PNG;
                case "image/gif":
                    return c.StickerFormat.GIF;
                default:
                    throw Error("Unexpected file type: ".concat(e))
            }
        },
        b = function(e) {
            return null == e ? null : "".concat(e.name, ".").concat(g(e.format_type))
        },
        N = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = t.isPreview,
                r = t.size,
                i = void 0 === r ? f.DEFAULT_STICKER_DIMENSIONS : r;
            if (null == e.format_type) return null;
            var a = d.Endpoints.STICKER_ASSET(e.id, g(e.format_type));
            if ("development" !== m) {
                if (e.format_type === c.StickerFormat.LOTTIE) return "".concat(location.protocol).concat(y).concat(a);
                var u = e.format_type === c.StickerFormat.APNG && void 0 !== n && n && !(0, s.isAndroid)() ? "&passthrough=false" : "",
                    l = Math.min(2, (0, o.getDevicePixelRatio)());
                return "".concat(location.protocol).concat(p).concat(a, "?size=").concat((0, o.getBestMediaProxySize)(i * l)).concat(u)
            }
            return "".concat(location.protocol).concat(E).concat(a)
        },
        R = function(e, t) {
            var n, r = e.banner_asset_id;
            if (null == r) return null;
            var i = u.SUPPORTS_WEBP ? "webp" : "png";
            return n = null != I ? "".concat(location.protocol, "//").concat(I, "/app-assets/").concat(f.STICKER_APPLICATION_ID, "/store/").concat(r, ".").concat(i) : "".concat(location.protocol).concat(E).concat(d.Endpoints.STORE_ASSET(f.STICKER_APPLICATION_ID, r, i)), null != t && (n += "?size=".concat((0, o.getBestMediaProxySize)(t))), n
        },
        C = function(e) {
            return e.match("development" !== m ? T : S)
        },
        P = function(e) {
            return e.stickers.some(function(e) {
                var t = e.format_type;
                return t === c.StickerFormat.APNG || t === c.StickerFormat.LOTTIE || t === c.StickerFormat.GIF
            })
        },
        D = function(e) {
            return {
                type: c.StickerCategoryTypes.PACK,
                id: e.id,
                name: e.name,
                stickers: e.stickers,
                previewSticker: v(e)
            }
        },
        L = function(e, t) {
            return e === f.StickerAnimationSettings.ANIMATE_ON_INTERACTION ? t : e !== f.StickerAnimationSettings.NEVER_ANIMATE
        },
        M = function(e, t, n, o) {
            if (a.default.getUploadCount(n, o) > 0) return !0;
            var i = l.default.getStickerPreview(n, o);
            if (null != i && i.length > 0) return !0;
            switch (e) {
                case c.StickerSelectLocation.STICKER_PICKER:
                    return "" !== t.trim();
                case c.StickerSelectLocation.AUTOCOMPLETE:
                case c.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                    return (0, r.getQueriesFromUserInput)(t).length > 1;
                default:
                    return !1
            }
        },
        U = function(e) {
            return e.type === c.MetaStickerType.GUILD
        },
        w = function(e) {
            return e.type === c.MetaStickerType.STANDARD
        },
        k = function(e) {
            return e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : []
        },
        G = function(e) {
            if (null === e) return !1;
            var t = e.guild_id;
            return void 0 !== i.default.getGuild(t)
        }
}