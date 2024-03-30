function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("392711"),
        o = n.n(r),
        i = n("364612"),
        a = n("673498"),
        u = n("690475"),
        s = n("6226");

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function f(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }
    var d = null;

    function _(e, t) {
        var n, r = {};
        return null != e.mention && null != d && (r = {
            mention: d
        }), (0, s.default)([e].concat(function(e) {
            if (Array.isArray(e)) return l(e)
        }(n = t) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(n) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return l(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
            }
        }(n) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }(), [r]))
    }
    d = n("561948").default;
    var E = {
            enableBuildOverrides: !1,
            enableEmojiClick: !0
        },
        p = _(u.default.RULES, [(0, a.default)({
            enableBuildOverrides: !0
        })]),
        m = o().omit(_(u.default.RULES, [(0, a.default)(E)]), "paragraph", "newline"),
        y = _(u.default.CHANNEL_TOPIC_RULES, [(0, a.default)(f(c({}, E), {
            emojiTooltipPosition: "bottom"
        })), {
            codeBlock: {
                react: u.default.RULES.text.react
            }
        }]),
        I = _(u.default.VOICE_CHANNEL_STATUS_RULES, [(0, a.default)(f(c({}, E), {
            enableEmojiClick: !1
        }))]),
        h = _(u.default.EMBED_TITLE_RULES, [(0, a.default)(E)]),
        O = _(u.default.INLINE_REPLY_RULES, [(0, a.default)(E)]),
        T = _(u.default.GUILD_VERIFICATION_FORM_RULES, [(0, a.default)(E)]),
        S = _(u.default.GUILD_EVENT_RULES, [(0, a.default)(E)]),
        v = _(u.default.INLINE_REPLY_RULES, [(0, a.default)(f(c({}, E), {
            emoji: {
                height: 14,
                width: 14,
                lineHeight: 18
            }
        }))]),
        g = _(u.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.default)(E)]),
        A = o().omit(_(u.default.RULES, [(0, a.default)(f(c({}, E), {
            emoji: {
                height: 14,
                width: 14
            }
        }))]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading"),
        b = {
            text: u.default.RULES.text
        };
    t.default = {
        combineAndInjectMentionRule: _,
        createReactRules: a.default,
        defaultReactRuleOptions: E,
        defaultRules: p,
        guildEventRules: S,
        notifCenterV2MessagePreviewRules: A,
        lockscreenWidgetMessageRules: b,
        astParserFor: i.astParserFor,
        reactParserFor: i.reactParserFor,
        parse: i.reactParserFor(p),
        parseTopic: i.reactParserFor(y),
        parseVoiceChannelStatus: i.reactParserFor(I),
        parseEmbedTitle: i.reactParserFor(h),
        parseInlineReply: i.reactParserFor(O),
        parseGuildVerificationFormRule: i.reactParserFor(T),
        parseGuildEventDescription: i.reactParserFor(S),
        parseAutoModerationSystemMessage: i.reactParserFor(g),
        parseForumPostGuidelines: i.reactParserFor(m),
        parseForumPostMostRecentMessage: i.reactParserFor(v),
        parseNotifCenterMessagePreview: i.reactParserFor(A),
        parseToAST: i.astParserFor(p),
        parseTopicToAST: i.astParserFor(y),
        parseEmbedTitleToAST: i.astParserFor(h),
        parseInlineReplyToAST: i.astParserFor(O),
        parseAutoModerationSystemMessageToAST: i.astParserFor(g)
    }
}