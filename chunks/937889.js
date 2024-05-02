function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        getInitialParserState: function() {
            return _
        },
        getInitialParserStateFromMessage: function() {
            return d
        },
        renderAutomodMessageMarkup: function() {
            return I
        },
        renderChangelogMessageMarkup: function() {
            return c
        }
    }), n("47120"), n("757143"), n("865427");
    var i = n("830121"),
        r = n("454585"),
        a = n("55406"),
        s = n("408433"),
        o = n("981631");
    let l = new Set([o.MessageEmbedTypes.IMAGE, o.MessageEmbedTypes.GIFV]),
        u = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

    function d(e, t) {
        let n = _({
                channelId: e.channel_id,
                messageId: e.id,
                renderOptions: t
            }),
            i = null != e.webhookId;
        return {
            ...n,
            allowLinks: i || n.allowLinks,
            allowEmojiLinks: i,
            mentionChannels: e.mentionChannels
        }
    }

    function _(e) {
        let {
            channelId: t,
            messageId: n,
            renderOptions: i
        } = e;
        return {
            channelId: t,
            messageId: n,
            allowLinks: !!i.allowLinks,
            allowDevLinks: !!i.allowDevLinks,
            formatInline: !!i.formatInline,
            noStyleAndInteraction: !!i.noStyleAndInteraction,
            allowHeading: !!i.allowHeading,
            allowList: !!i.allowList,
            previewLinkTarget: !!i.previewLinkTarget,
            disableAnimatedEmoji: !!i.disableAnimatedEmoji,
            isInteracting: !!i.isInteracting,
            allowEmojiLinks: !1,
            disableAutoBlockNewlines: !0,
            mentionChannels: [],
            muted: !1,
            unknownUserMentionPlaceholder: !0
        }
    }

    function c(e, t) {
        return {
            hasSpoilerEmbeds: !1,
            content: r.default.reactParserFor(a.default.getDefaultRules(t))(e.content, !1, {})
        }
    }

    function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return function(e, t, n) {
            let {
                toAST: r = !1,
                hideSimpleEmbedContent: a = !0,
                formatInline: o = !1,
                postProcessor: _
            } = n, c = !1, E = e(t.content, !0, d(t, n), (e, n) => (!Array.isArray(e) && (e = [e]), a && (e = function(e, t) {
                if (1 !== e.length || 1 !== t.length) return e;
                let n = e[0],
                    i = t[0];
                return ("link" === n.type || "attachmentLink" === n.type) && l.has(i.type) && (0, s.isEmbedInline)(i) ? [] : e
            }(e, t.embeds)), !o && (e = function(e, t) {
                return t ? T(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = T(e[0].content)), e)
            }(e, n)), c = function(e, t) {
                return t ? f(e) : "paragraph" === e[0].type && e[0].content instanceof Array && f(e[0].content)
            }(e = function(e) {
                let t = e.some(e => "link" !== e.type || !1);
                return e.filter(e => {
                    let n = "link" === e.type,
                        r = (0, i.parseQuestsEmbedCode)(e.target);
                    return !(n && null != r && !t)
                })
            }(e), n), o && (e = function e(t) {
                return t.forEach(t => {
                    u.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                }), t
            }(e)), null != _ && (e = _(e, n)), e));
            return {
                hasSpoilerEmbeds: c,
                content: E
            }
        }(t.formatInline ? r.default.parseInlineReply : r.default.parse, e, t)
    }

    function I(e, t, n) {
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

    function T(e) {
        if (e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0)) return e;
        let t = 0;
        return (e.forEach(e => {
            if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) return !1
        }), t > 30) ? e : (e.forEach(e => {
            e.jumboable = !0
        }), e)
    }

    function f(e) {
        return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
    }
}