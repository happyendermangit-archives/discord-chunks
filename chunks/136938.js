function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMaxEmbedMediaSize: function() {
            return S
        },
        isEmbedInline: function() {
            return O
        },
        isServerShopArticleEmbed: function() {
            return T
        },
        mergeEmbedsOnURL: function() {
            return h
        },
        sanitizeEmbed: function() {
            return I
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("913527"),
        a = n.n(i),
        u = n("194926"),
        s = n("523018"),
        l = n("281767"),
        c = /sketchfab/i,
        f = /^https:\/\/sketchfab\.com/i,
        d = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
        _ = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
        E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        p = new Set([l.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, l.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, l.MessageEmbedTypes.RICH, l.MessageEmbedTypes.SAFETY_POLICY_NOTICE, l.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, l.MessageEmbedTypes.VOICE_CHANNEL]);

    function m(e) {
        var t = e.width,
            n = e.height;
        return t > 0 && n > 0
    }

    function y(e) {
        return {
            url: e.url,
            proxyURL: e.proxy_url,
            width: e.width,
            height: e.height,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version
        }
    }

    function I(e, t, n) {
        var r = {
            id: o().uniqueId("embed_"),
            url: n.url,
            type: n.type,
            rawTitle: n.title,
            rawDescription: n.description,
            referenceId: n.reference_id,
            flags: n.flags,
            contentScanVersion: n.content_scan_version
        };
        if (null != n.footer && (r.footer = {
                text: n.footer.text,
                iconURL: n.footer.icon_url,
                iconProxyURL: n.footer.proxy_icon_url
            }), null != n.author && null != n.author.name && (r.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url
            }), null != n.provider && null != n.provider.name && (r.provider = {
                name: n.provider.name,
                url: n.provider.url
            }), null != n.timestamp && (r.timestamp = a()(new Date(n.timestamp))), null != n.color && (r.color = (0, u.int2hsl)(n.color, !0)), null != n.thumbnail && m(n.thumbnail)) switch (r.type) {
            case l.MessageEmbedTypes.ARTICLE:
            case l.MessageEmbedTypes.IMAGE:
                r.image = y(n.thumbnail);
                break;
            default:
                r.thumbnail = y(n.thumbnail)
        }
        if (null != n.image && m(n.image) && (r.image = y(n.image)), null != n.video && (null == r.thumbnail && null != n.video.proxy_url && m(n.video) && (r.thumbnail = {
                width: n.video.width,
                height: n.video.height,
                url: "".concat(n.video.proxy_url, "?format=jpeg")
            }), null != r.thumbnail && m(n.video) && function(e, t, n) {
                if (null != t && c.test(t.name) || f.test(n.url)) return !1;
                var r = null != n.proxy_url || /^https:/i.test(n.url);
                return null != e && 1492472454139 > s.default.extractTimestamp(e) && (r = r && null != t && d.test(t.name)), r
            }(t, n.provider, n.video) && (r.video = y(n.video))), p.has(r.type)) {
            var i, _ = null !== (i = n.fields) && void 0 !== i ? i : [];
            r.fields = _.map(function(e) {
                return {
                    rawName: e.name,
                    rawValue: e.value,
                    inline: e.inline
                }
            })
        } else r.fields = [];
        return r
    }

    function h(e) {
        var t = new Map,
            n = [];
        return e.forEach(function(e) {
            if (null == e.url) {
                n.push(e);
                return
            }
            var r = t.get(e.url);
            if (null == r) {
                n.push(e), t.set(e.url, e);
                return
            }
            null != e.image && (null == r.images && (r.images = [], null != r.image && r.images.push(r.image)), r.images.push(e.image))
        }), n
    }

    function O(e) {
        var t = e.image,
            n = e.video,
            r = e.type,
            o = e.author,
            i = e.rawTitle;
        return (null != t || null != n) && (r === l.MessageEmbedTypes.GIFV || r !== l.MessageEmbedTypes.RICH && null == o && null == i)
    }

    function T(e) {
        return e.type === l.MessageEmbedTypes.ARTICLE && null != e.url && (E.test(e.url) || _.test(e.url))
    }

    function S(e, t, n) {
        var r;
        return null != t && null != n ? {
            maxMediaWidth: t,
            maxMediaHeight: n
        } : (null === (r = e.provider) || void 0 === r ? void 0 : r.name) === "TikTok" ? {
            maxMediaWidth: 400,
            maxMediaHeight: 450
        } : {
            maxMediaWidth: 400,
            maxMediaHeight: 300
        }
    }
}