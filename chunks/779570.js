function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        },
        renderAutomodMessageMarkup: function() {
            return d
        }
    }), n("884876");
    var r = n("964164"),
        a = n("609879"),
        o = n("136938"),
        i = n("281767");

    function l(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }
    var s = new Set([i.MessageEmbedTypes.IMAGE, i.MessageEmbedTypes.GIFV]),
        c = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

    function u(e) {
        var t, n, i, u, d, p, g, y, b, E, v, O, S = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t = S.formatInline ? a.default.parseInlineReply : a.default.parse, n = e, (i = S).toAST, d = void 0 === (u = i.hideSimpleEmbedContent) || u, g = void 0 !== (p = i.formatInline) && p, y = i.postProcessor, b = !1, O = t(n.content, !0, (E = n, v = i, {
            allowLinks: null != E.webhookId || !!v.allowLinks,
            allowEmojiLinks: null != E.webhookId,
            channelId: E.channel_id,
            messageId: E.id,
            mentionChannels: E.mentionChannels,
            isInteracting: !!v.isInteracting,
            formatInline: !!v.formatInline,
            noStyleAndInteraction: !!v.noStyleAndInteraction,
            allowHeading: !!v.allowHeading,
            allowList: !!v.allowList,
            previewLinkTarget: !!v.previewLinkTarget,
            disableAnimatedEmoji: !!v.disableAnimatedEmoji,
            disableAutoBlockNewlines: !0,
            muted: !1
        }), function(e, t) {
            return !Array.isArray(e) && (e = [e]), d && (e = function(e, t) {
                if (1 !== e.length || 1 !== t.length) return e;
                var n = e[0],
                    r = t[0];
                return ("link" === n.type || "attachmentLink" === n.type) && s.has(r.type) && (0, o.isEmbedInline)(r) ? [] : e
            }(e, n.embeds)), !g && (e = function(e, t) {
                return t ? f(e) : ("paragraph" === e[0].type && l(e[0].content, Array) && (e[0].content = f(e[0].content)), e)
            }(e, t)), b = function(e, t) {
                return t ? m(e) : !!("paragraph" === e[0].type && l(e[0].content, Array)) && m(e[0].content)
            }(e = function(e) {
                var t = e.some(function(e) {
                    return "link" !== e.type || !1
                });
                return e.filter(function(e) {
                    var n = "link" === e.type,
                        a = (0, r.parseQuestsEmbedCode)(e.target);
                    return !(n && null != a && !t)
                })
            }(e), t), g && (e = function e(t) {
                return t.forEach(function(t) {
                    c.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                }), t
            }(e)), null != y && (e = y(e, t)), e
        }), {
            hasSpoilerEmbeds: b,
            content: O
        }
    }

    function d(e, t, n) {
        var r;
        return r = a.default.parseAutoModerationSystemMessage, r(e, !0, {
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
        }, function(e) {
            return !Array.isArray(e) && (e = [e]), e
        })
    }

    function f(e) {
        if (e.some(function(e) {
                return "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0
            })) return e;
        var t = 0;
        return (e.forEach(function(e) {
            if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (t += 1), t > 30) return !1
        }), t > 30) ? e : (e.forEach(function(e) {
            e.jumboable = !0
        }), e)
    }

    function m(e) {
        return e.some(function(e) {
            return "spoiler" === e.type && Array.isArray(e.content) && e.content.some(function(e) {
                return "link" === e.type || "attachmentLink" === e.type
            })
        })
    }
}