function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sanitizeEmbed: function() {
            return p
        },
        mergeEmbedsOnURL: function() {
            return S
        },
        isEmbedInline: function() {
            return v
        },
        isServerShopArticleEmbed: function() {
            return T
        },
        getMaxEmbedMediaSize: function() {
            return I
        }
    }), n("222007"), n("702976"), n("424973");
    var i = n("917351"),
        s = n.n(i),
        r = n("866227"),
        a = n.n(r),
        o = n("509043"),
        l = n("299039"),
        u = n("49111");
    let d = /sketchfab/i,
        c = /^https:\/\/sketchfab\.com/i,
        _ = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
        f = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
        E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        h = new Set([u.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, u.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, u.MessageEmbedTypes.RICH, u.MessageEmbedTypes.SAFETY_POLICY_NOTICE, u.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, u.MessageEmbedTypes.VOICE_CHANNEL]);

    function g(e) {
        let {
            width: t,
            height: n
        } = e;
        return t > 0 && n > 0
    }

    function m(e) {
        let {
            url: t,
            proxy_url: n,
            width: i,
            height: s,
            placeholder: r,
            placeholder_version: a
        } = e;
        return {
            url: t,
            proxyURL: n,
            width: i,
            height: s,
            placeholder: r,
            placeholderVersion: a
        }
    }

    function p(e, t, n) {
        let i = {
            id: s.uniqueId("embed_"),
            url: n.url,
            type: n.type,
            rawTitle: n.title,
            rawDescription: n.description,
            referenceId: n.reference_id,
            flags: n.flags,
            contentScanVersion: n.content_scan_version
        };
        if (null != n.footer && (i.footer = {
                text: n.footer.text,
                iconURL: n.footer.icon_url,
                iconProxyURL: n.footer.proxy_icon_url
            }), null != n.author && null != n.author.name && (i.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url
            }), null != n.provider && null != n.provider.name && (i.provider = {
                name: n.provider.name,
                url: n.provider.url
            }), null != n.timestamp && (i.timestamp = a(new Date(n.timestamp))), null != n.color && (i.color = (0, o.int2hsl)(n.color, !0)), null != n.thumbnail && g(n.thumbnail)) switch (i.type) {
            case u.MessageEmbedTypes.ARTICLE:
            case u.MessageEmbedTypes.IMAGE:
                i.image = m(n.thumbnail);
                break;
            default:
                i.thumbnail = m(n.thumbnail)
        }
        if (null != n.image && g(n.image) && (i.image = m(n.image)), null != n.video && (null == i.thumbnail && null != n.video.proxy_url && g(n.video) && (i.thumbnail = {
                width: n.video.width,
                height: n.video.height,
                url: "".concat(n.video.proxy_url, "?format=jpeg")
            }), null != i.thumbnail && g(n.video) && function(e, t, n) {
                if (null != t && d.test(t.name) || c.test(n.url)) return !1;
                let i = null != n.proxy_url || /^https:/i.test(n.url);
                return null != e && 1492472454139 > l.default.extractTimestamp(e) && (i = i && null != t && _.test(t.name)), i
            }(t, n.provider, n.video) && (i.video = m(n.video))), h.has(i.type)) {
            var r;
            let e = null !== (r = n.fields) && void 0 !== r ? r : [];
            i.fields = e.map(e => {
                let {
                    name: t,
                    value: n,
                    inline: i
                } = e;
                return {
                    rawName: t,
                    rawValue: n,
                    inline: i
                }
            })
        } else i.fields = [];
        return i
    }

    function S(e) {
        let t = new Map,
            n = [];
        return e.forEach(e => {
            if (null == e.url) {
                n.push(e);
                return
            }
            let i = t.get(e.url);
            if (null == i) {
                n.push(e), t.set(e.url, e);
                return
            }
            null != e.image && (null == i.images && (i.images = [], null != i.image && i.images.push(i.image)), i.images.push(e.image))
        }), n
    }

    function v(e) {
        let {
            image: t,
            video: n,
            type: i,
            author: s,
            rawTitle: r
        } = e;
        return (null != t || null != n) && (i === u.MessageEmbedTypes.GIFV || i !== u.MessageEmbedTypes.RICH && null == s && null == r)
    }

    function T(e) {
        return e.type === u.MessageEmbedTypes.ARTICLE && null != e.url && (E.test(e.url) || f.test(e.url))
    }

    function I(e, t, n) {
        var i;
        return null != t && null != n ? {
            maxMediaWidth: t,
            maxMediaHeight: n
        } : (null === (i = e.provider) || void 0 === i ? void 0 : i.name) === "TikTok" ? {
            maxMediaWidth: 400,
            maxMediaHeight: 450
        } : {
            maxMediaWidth: 400,
            maxMediaHeight: 300
        }
    }
}