function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createStickerPackCategory: function() {
            return M
        },
        getFilenameForSticker: function() {
            return C
        },
        getMessageStickers: function() {
            return G
        },
        getStickerAssetUrl: function() {
            return g
        },
        getStickerFormatTypeFromFileType: function() {
            return R
        },
        getStickerPackBannerAssetUrl: function() {
            return L
        },
        getStickerPackPreviewSticker: function() {
            return O
        },
        isAvailableGuildSticker: function() {
            return w
        },
        isGuildSticker: function() {
            return U
        },
        isStandardSticker: function() {
            return b
        },
        isStickerAssetUrl: function() {
            return D
        },
        isStickerPackAnimated: function() {
            return v
        },
        shouldAnimateSticker: function() {
            return y
        },
        shouldAttachSticker: function() {
            return P
        }
    }), n("411104");
    var i = n("606301"),
        r = n("134432"),
        s = n("430824"),
        a = n("117530"),
        o = n("768581"),
        l = n("358085"),
        u = n("913663"),
        d = n("373228"),
        _ = n("611480"),
        c = n("981631");
    let {
        API_ENDPOINT: E,
        MEDIA_PROXY_ENDPOINT: I,
        PROJECT_ENV: T,
        ASSET_ENDPOINT: f,
        CDN_HOST: S
    } = window.GLOBAL_ENV, h = Object.values(d.StickerExtensions), A = decodeURIComponent(c.Endpoints.STICKER_ASSET("[\\d]+", "(".concat(h.join("|"), ")"))), m = RegExp("(".concat(location.protocol).concat(f, "|").concat(location.protocol).concat(I, ")(").concat(A, ")"), "ig"), N = RegExp("".concat(location.protocol).concat(E, "(").concat(A, ")"), "ig"), O = e => {
        if (null != e.cover_sticker_id) {
            let t = e.stickers.find(t => t.id === e.cover_sticker_id);
            if (null != t) return t
        }
        return e.stickers[0]
    }, p = e => {
        switch (e) {
            case d.StickerFormat.PNG:
                return o.SUPPORTS_WEBP ? d.StickerExtensions.WEBP : d.StickerExtensions.PNG;
            case d.StickerFormat.APNG:
                return d.StickerExtensions.APNG;
            case d.StickerFormat.LOTTIE:
                return d.StickerExtensions.LOTTIE;
            case d.StickerFormat.GIF:
                return d.StickerExtensions.GIF;
            default:
                throw Error("Unexpected format type: ".concat(e))
        }
    }, R = e => {
        switch (e) {
            case "application/json":
                return d.StickerFormat.LOTTIE;
            case "image/apng":
                return d.StickerFormat.APNG;
            case "image/png":
            case "image/webp":
                return d.StickerFormat.PNG;
            case "image/gif":
                return d.StickerFormat.GIF;
            default:
                throw Error("Unexpected file type: ".concat(e))
        }
    }, C = e => null == e ? null : "".concat(e.name, ".").concat(p(e.format_type)), g = function(e) {
        let {
            isPreview: t = !1,
            size: n = _.DEFAULT_STICKER_DIMENSIONS
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e.format_type) return null;
        let i = c.Endpoints.STICKER_ASSET(e.id, p(e.format_type));
        if ("development" !== T) {
            if (e.format_type === d.StickerFormat.LOTTIE) return "".concat(location.protocol).concat(f).concat(i);
            let s = e.format_type === d.StickerFormat.APNG && t && !(0, l.isAndroid)() ? "&passthrough=false" : "",
                a = Math.min(2, (0, r.getDevicePixelRatio)());
            return "".concat(location.protocol).concat(I).concat(i, "?size=").concat((0, r.getBestMediaProxySize)(n * a)).concat(s)
        }
        return "".concat(location.protocol).concat(E).concat(i)
    }, L = (e, t) => {
        let n;
        let i = e.banner_asset_id;
        if (null == i) return null;
        let s = o.SUPPORTS_WEBP ? "webp" : "png";
        return n = null != S ? "".concat(location.protocol, "//").concat(S, "/app-assets/").concat(_.STICKER_APPLICATION_ID, "/store/").concat(i, ".").concat(s) : "".concat(location.protocol).concat(E).concat(c.Endpoints.STORE_ASSET(_.STICKER_APPLICATION_ID, i, s)), null != t && (n += "?size=".concat((0, r.getBestMediaProxySize)(t))), n
    }, D = e => e.match("development" !== T ? m : N), v = e => e.stickers.some(e => {
        let {
            format_type: t
        } = e;
        return t === d.StickerFormat.APNG || t === d.StickerFormat.LOTTIE || t === d.StickerFormat.GIF
    }), M = e => ({
        type: d.StickerCategoryTypes.PACK,
        id: e.id,
        name: e.name,
        stickers: e.stickers,
        previewSticker: O(e)
    }), y = (e, t) => e === _.StickerAnimationSettings.ANIMATE_ON_INTERACTION ? t : e !== _.StickerAnimationSettings.NEVER_ANIMATE, P = (e, t, n, r) => {
        if (a.default.getUploadCount(n, r) > 0) return !0;
        let s = u.default.getStickerPreview(n, r);
        if (null != s && s.length > 0) return !0;
        switch (e) {
            case d.StickerSelectLocation.STICKER_PICKER:
                return "" !== t.trim();
            case d.StickerSelectLocation.AUTOCOMPLETE:
            case d.StickerSelectLocation.EXPRESSION_SUGGESTIONS:
                return (0, i.getQueriesFromUserInput)(t).length > 1;
            default:
                return !1
        }
    }, U = e => e.type === d.MetaStickerType.GUILD, b = e => e.type === d.MetaStickerType.STANDARD, G = e => e.stickerItems.length > 0 ? e.stickerItems : e.stickers.length > 0 ? e.stickers : [], w = e => {
        if (null === e) return !1;
        let t = e.guild_id;
        return void 0 !== s.default.getGuild(t)
    }
}