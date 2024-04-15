function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        renderAutomodMessageMarkup: function() {
            return d
        }
    }), n("47120"), n("757143"), n("865427");
    var i = n("830121"),
        r = n("454585"),
        s = n("408433"),
        a = n("981631");
    let o = new Set([a.MessageEmbedTypes.IMAGE, a.MessageEmbedTypes.GIFV]),
        l = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function(e, t, n) {
            var r, a;
            let {
                toAST: u = !1,
                hideSimpleEmbedContent: d = !0,
                formatInline: E = !1,
                postProcessor: I
            } = n, T = !1;
            let f = e(t.content, !0, (r = t, a = n, {
                allowLinks: null != r.webhookId || !!a.allowLinks,
                allowDevLinks: !!a.allowDevLinks,
                allowEmojiLinks: null != r.webhookId,
                channelId: r.channel_id,
                messageId: r.id,
                mentionChannels: r.mentionChannels,
                isInteracting: !!a.isInteracting,
                formatInline: !!a.formatInline,
                noStyleAndInteraction: !!a.noStyleAndInteraction,
                allowHeading: !!a.allowHeading,
                allowList: !!a.allowList,
                previewLinkTarget: !!a.previewLinkTarget,
                disableAnimatedEmoji: !!a.disableAnimatedEmoji,
                disableAutoBlockNewlines: !0,
                muted: !1
            }), (e, n) => (!Array.isArray(e) && (e = [e]), d && (e = function(e, t) {
                if (1 !== e.length || 1 !== t.length) return e;
                let n = e[0],
                    i = t[0];
                return ("link" === n.type || "attachmentLink" === n.type) && o.has(i.type) && (0, s.isEmbedInline)(i) ? [] : e
            }(e, t.embeds)), !E && (e = function(e, t) {
                return t ? _(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = _(e[0].content)), e)
            }(e, n)), T = function(e, t) {
                return t ? c(e) : "paragraph" === e[0].type && e[0].content instanceof Array && c(e[0].content)
            }(e = function(e) {
                let t = e.some(e => "link" !== e.type || !1);
                return e.filter(e => {
                    let n = "link" === e.type,
                        r = (0, i.parseQuestsEmbedCode)(e.target);
                    return !(n && null != r && !t)
                })
            }(e), n), E && (e = function e(t) {
                return t.forEach(t => {
                    l.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                }), t
            }(e)), null != I && (e = I(e, n)), e));
            return {
                hasSpoilerEmbeds: T,
                content: f
            }
        }(t.formatInline ? r.default.parseInlineReply : r.default.parse, e, t)
    }

    function d(e, t, n) {
        var i;
        return i = r.default.parseAutoModerationSystemMessage, i(e, !0, {
            allowLinks: !1,
            allowDevLinks: !1,
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

    function _(e) {
        if (e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0)) return e;
        let t = 0;
        return (e.forEach(e => {
            if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) return !1
        }), t > 30) ? e : (e.forEach(e => {
            e.jumboable = !0
        }), e)
    }

    function c(e) {
        return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
    }
}