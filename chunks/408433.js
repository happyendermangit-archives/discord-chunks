function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getMaxEmbedMediaSize: function() {
            return p
        },
        isEmbedInline: function() {
            return m
        },
        isServerShopArticleEmbed: function() {
            return N
        },
        mergeEmbedsOnURL: function() {
            return A
        },
        sanitizeEmbed: function() {
            return h
        }
    }), n("47120"), n("789020"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("913527"),
        a = n.n(s),
        o = n("866442"),
        l = n("709054"),
        u = n("981631");
    let d = /sketchfab/i,
        _ = /^https:\/\/sketchfab\.com/i,
        c = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
        E = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
        I = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
        T = new Set([u.MessageEmbedTypes.AUTO_MODERATION_MESSAGE, u.MessageEmbedTypes.AUTO_MODERATION_NOTIFICATION, u.MessageEmbedTypes.RICH, u.MessageEmbedTypes.SAFETY_POLICY_NOTICE, u.MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION, u.MessageEmbedTypes.VOICE_CHANNEL, u.MessageEmbedTypes.POLL_RESULT]);

    function f(e) {
        let {
            width: t,
            height: n
        } = e;
        return t > 0 && n > 0
    }

    function S(e) {
        let {
            url: t,
            proxy_url: n,
            width: i,
            height: r,
            placeholder: s,
            placeholder_version: a
        } = e;
        return {
            url: t,
            proxyURL: n,
            width: i,
            height: r,
            placeholder: s,
            placeholderVersion: a
        }
    }

    function h(e, t, n) {
        let i = {
            id: r().uniqueId("embed_"),
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
            }), null != n.timestamp && (i.timestamp = a()(new Date(n.timestamp))), null != n.color && (i.color = (0, o.int2hsl)(n.color, !0)), null != n.thumbnail && f(n.thumbnail)) switch (i.type) {
            case u.MessageEmbedTypes.ARTICLE:
            case u.MessageEmbedTypes.IMAGE:
                i.image = S(n.thumbnail);
                break;
            default:
                i.thumbnail = S(n.thumbnail)
        }
        if (null != n.image && f(n.image) && (i.image = S(n.image)), null != n.video && (null == i.thumbnail && null != n.video.proxy_url && f(n.video) && (i.thumbnail = {
                width: n.video.width,
                height: n.video.height,
                url: "".concat(n.video.proxy_url, "?format=jpeg")
            }), null != i.thumbnail && f(n.video) && function(e, t, n) {
                if (null != t && d.test(t.name) || _.test(n.url)) return !1;
                let i = null != n.proxy_url || /^https:/i.test(n.url);
                return null != e && 1492472454139 > l.default.extractTimestamp(e) && (i = i && null != t && c.test(t.name)), i
            }(t, n.provider, n.video) && (i.video = S(n.video))), T.has(i.type)) {
            var s;
            let e = null !== (s = n.fields) && void 0 !== s ? s : [];
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

    function A(e) {
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

    function m(e) {
        let {
            image: t,
            video: n,
            type: i,
            author: r,
            rawTitle: s
        } = e;
        return (null != t || null != n) && (i === u.MessageEmbedTypes.GIFV || i !== u.MessageEmbedTypes.RICH && null == r && null == s)
    }

    function N(e) {
        return e.type === u.MessageEmbedTypes.ARTICLE && null != e.url && (I.test(e.url) || E.test(e.url))
    }

    function p(e, t, n) {
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