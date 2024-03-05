function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        renderAutomodMessageMarkup: function() {
            return c
        }
    }), n("222007"), n("781738"), n("355025");
    var a = n("312016"),
        i = n("367376"),
        r = n("240873"),
        s = n("49111");
    let l = new Set([s.MessageEmbedTypes.IMAGE, s.MessageEmbedTypes.GIFV]),
        o = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
        return function(e, t, n) {
            var i, s;
            let {
                toAST: u = !1,
                hideSimpleEmbedContent: c = !0,
                formatInline: f = !1,
                postProcessor: g
            } = n, p = !1;
            let E = e(t.content, !0, (i = t, s = n, {
                allowLinks: null != i.webhookId || !!s.allowLinks,
                allowEmojiLinks: null != i.webhookId,
                channelId: i.channel_id,
                messageId: i.id,
                mentionChannels: i.mentionChannels,
                isInteracting: !!s.isInteracting,
                formatInline: !!s.formatInline,
                noStyleAndInteraction: !!s.noStyleAndInteraction,
                allowHeading: !!s.allowHeading,
                allowList: !!s.allowList,
                previewLinkTarget: !!s.previewLinkTarget,
                disableAnimatedEmoji: !!s.disableAnimatedEmoji,
                disableAutoBlockNewlines: !0,
                muted: !1
            }), (e, n) => (!Array.isArray(e) && (e = [e]), c && (e = function(e, t) {
                if (1 !== e.length || 1 !== t.length) return e;
                let n = e[0],
                    a = t[0];
                return ("link" === n.type || "attachmentLink" === n.type) && l.has(a.type) && (0, r.isEmbedInline)(a) ? [] : e
            }(e, t.embeds)), !f && (e = function(e, t) {
                return t ? d(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = d(e[0].content)), e)
            }(e, n)), p = function(e, t) {
                return t ? m(e) : "paragraph" === e[0].type && e[0].content instanceof Array && m(e[0].content)
            }(e = function(e) {
                let t = e.some(e => "link" !== e.type || !1);
                return e.filter(e => {
                    let n = "link" === e.type,
                        i = (0, a.parseQuestsEmbedCode)(e.target);
                    return !(n && null != i && !t)
                })
            }(e), n), f && (e = function e(t) {
                return t.forEach(t => {
                    o.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                }), t
            }(e)), null != g && (e = g(e, n)), e));
            return {
                hasSpoilerEmbeds: p,
                content: E
            }
        }(n, e, t)
    }

    function c(e, t, n) {
        var a;
        return a = i.default.parseAutoModerationSystemMessage, a(e, !0, {
            allowLinks: !1,
            allowEmojiLinks: !1,
            mentionChannels: [],
            isInteracting: !1,
            formatInline: !1,
            noStyleAndInteraction: !1,
            allowHeading: !1,
            allowList: !1,
            disableAutoBlockNewlines: !0,
            highlightWord: t,
            disableAnimatedEmoji: !1,
            channelId: n,
            muted: !1
        }, e => (!Array.isArray(e) && (e = [e]), e))
    }

    function d(e) {
        let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
        if (t) return e;
        let n = 0;
        return (e.forEach(e => {
            if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
        }), n > 30) ? e : (e.forEach(e => {
            e.jumboable = !0
        }), e)
    }

    function m(e) {
        return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
    }
}