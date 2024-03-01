function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        sanitizeEmbed: function() {
            return E
        },
        mergeEmbedsOnURL: function() {
            return p
        },
        isEmbedInline: function() {
            return y
        },
        isServerShopArticleEmbed: function() {
            return T
        },
        getMaxEmbedMediaSize: function() {
            return C
        }
    }), n("222007"), n("702976"), n("424973");
    var s = n("917351"),
        i = n.n(s),
        r = n("866227"),
        a = n.n(r),
        o = n("509043"),
        d = n("299039"),
        u = n("49111");
    let l = /sketchfab/i,
        f = /^https:\/\/sketchfab\.com/i,
        _ = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
        c = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
        g = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        m = new Set([u.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, u.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, u.MessageEmbedTypes.RICH, u.MessageEmbedTypes.SAFETY_POLICY_NOTICE, u.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, u.MessageEmbedTypes.VOICE_CHANNEL]);

    function h(e) {
        let {
            width: t,
            height: n
        } = e;
        return t > 0 && n > 0
    }

    function v(e) {
        let {
            url: t,
            proxy_url: n,
            width: s,
            height: i,
            placeholder: r,
            placeholder_version: a
        } = e;
        return {
            url: t,
            proxyURL: n,
            width: s,
            height: i,
            placeholder: r,
            placeholderVersion: a
        }
    }

    function E(e, t, n) {
        let s = {
            id: i.uniqueId("embed_"),
            url: n.url,
            type: n.type,
            rawTitle: n.title,
            rawDescription: n.description,
            referenceId: n.reference_id,
            flags: n.flags,
            contentScanVersion: n.content_scan_version
        };
        if (null != n.footer && (s.footer = {
                text: n.footer.text,
                iconURL: n.footer.icon_url,
                iconProxyURL: n.footer.proxy_icon_url
            }), null != n.author && null != n.author.name && (s.author = {
                name: n.author.name,
                url: n.author.url,
                iconURL: n.author.icon_url,
                iconProxyURL: n.author.proxy_icon_url
            }), null != n.provider && null != n.provider.name && (s.provider = {
                name: n.provider.name,
                url: n.provider.url
            }), null != n.timestamp && (s.timestamp = a(new Date(n.timestamp))), null != n.color && (s.color = (0, o.int2hsl)(n.color, !0)), null != n.thumbnail && h(n.thumbnail)) switch (s.type) {
            case u.MessageEmbedTypes.ARTICLE:
            case u.MessageEmbedTypes.IMAGE:
                s.image = v(n.thumbnail);
                break;
            default:
                s.thumbnail = v(n.thumbnail)
        }
        if (null != n.image && h(n.image) && (s.image = v(n.image)), null != n.video && (null == s.thumbnail && null != n.video.proxy_url && h(n.video) && (s.thumbnail = {
                width: n.video.width,
                height: n.video.height,
                url: "".concat(n.video.proxy_url, "?format=jpeg")
            }), null != s.thumbnail && h(n.video) && function(e, t, n) {
                if (null != t && l.test(t.name) || f.test(n.url)) return !1;
                let s = null != n.proxy_url || /^https:/i.test(n.url);
                return null != e && 1492472454139 > d.default.extractTimestamp(e) && (s = s && null != t && _.test(t.name)), s
            }(t, n.provider, n.video) && (s.video = v(n.video))), m.has(s.type)) {
            var r;
            let e = null !== (r = n.fields) && void 0 !== r ? r : [];
            s.fields = e.map(e => {
                let {
                    name: t,
                    value: n,
                    inline: s
                } = e;
                return {
                    rawName: t,
                    rawValue: n,
                    inline: s
                }
            })
        } else s.fields = [];
        return s
    }

    function p(e) {
        let t = new Map,
            n = [];
        return e.forEach(e => {
            if (null == e.url) {
                n.push(e);
                return
            }
            let s = t.get(e.url);
            if (null == s) {
                n.push(e), t.set(e.url, e);
                return
            }
            null != e.image && (null == s.images && (s.images = [], null != s.image && s.images.push(s.image)), s.images.push(e.image))
        }), n
    }

    function y(e) {
        let {
            image: t,
            video: n,
            type: s,
            author: i,
            rawTitle: r
        } = e;
        return (null != t || null != n) && (s === u.MessageEmbedTypes.GIFV || s !== u.MessageEmbedTypes.RICH && null == i && null == r)
    }

    function T(e) {
        return e.type === u.MessageEmbedTypes.ARTICLE && null != e.url && (g.test(e.url) || c.test(e.url))
    }

    function C(e, t, n) {
        var s;
        return null != t && null != n ? {
            maxMediaWidth: t,
            maxMediaHeight: n
        } : (null === (s = e.provider) || void 0 === s ? void 0 : s.name) === "TikTok" ? {
            maxMediaWidth: 400,
            maxMediaHeight: 450
        } : {
            maxMediaWidth: 400,
            maxMediaHeight: 300
        }
    }
}