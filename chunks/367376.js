function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var l = n("917351"),
        i = n.n(l),
        a = n("933805"),
        s = n("52140"),
        r = n("888198"),
        o = n("788554");
    let u = null;

    function d(e, t) {
        let n = {};
        return null != e.mention && null != u && (n = {
            mention: u
        }), (0, o.default)([e, ...t, n])
    }
    u = n("236180").default;
    let c = {
            enableBuildOverrides: !1,
            enableEmojiClick: !0
        },
        f = d(r.default.RULES, [(0, s.default)({
            enableBuildOverrides: !0
        })]),
        m = i.omit(d(r.default.RULES, [(0, s.default)(c)]), "paragraph", "newline"),
        p = d(r.default.CHANNEL_TOPIC_RULES, [(0, s.default)({
            ...c,
            emojiTooltipPosition: "bottom"
        }), {
            codeBlock: {
                react: r.default.RULES.text.react
            }
        }]),
        h = d(r.default.VOICE_CHANNEL_STATUS_RULES, [(0, s.default)({
            ...c,
            enableEmojiClick: !1
        })]),
        E = d(r.default.EMBED_TITLE_RULES, [(0, s.default)(c)]),
        g = d(r.default.INLINE_REPLY_RULES, [(0, s.default)(c)]),
        C = d(r.default.GUILD_VERIFICATION_FORM_RULES, [(0, s.default)(c)]),
        S = d(r.default.GUILD_EVENT_RULES, [(0, s.default)(c)]),
        T = d(r.default.INLINE_REPLY_RULES, [(0, s.default)({
            ...c,
            emoji: {
                height: 14,
                width: 14,
                lineHeight: 18
            }
        })]),
        I = d(r.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, s.default)(c)]),
        v = i.omit(d(r.default.RULES, [(0, s.default)({
            ...c,
            emoji: {
                height: 14,
                width: 14
            }
        })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading"),
        _ = {
            text: r.default.RULES.text
        };
    var N = {
        combineAndInjectMentionRule: d,
        createReactRules: s.default,
        defaultReactRuleOptions: c,
        defaultRules: f,
        guildEventRules: S,
        notifCenterV2MessagePreviewRules: v,
        lockscreenWidgetMessageRules: _,
        astParserFor: a.astParserFor,
        reactParserFor: a.reactParserFor,
        parse: a.reactParserFor(f),
        parseTopic: a.reactParserFor(p),
        parseVoiceChannelStatus: a.reactParserFor(h),
        parseEmbedTitle: a.reactParserFor(E),
        parseInlineReply: a.reactParserFor(g),
        parseGuildVerificationFormRule: a.reactParserFor(C),
        parseGuildEventDescription: a.reactParserFor(S),
        parseAutoModerationSystemMessage: a.reactParserFor(I),
        parseForumPostGuidelines: a.reactParserFor(m),
        parseForumPostMostRecentMessage: a.reactParserFor(T),
        parseNotifCenterMessagePreview: a.reactParserFor(v),
        parseToAST: a.astParserFor(f),
        parseTopicToAST: a.astParserFor(p),
        parseEmbedTitleToAST: a.astParserFor(E),
        parseInlineReplyToAST: a.astParserFor(g),
        parseAutoModerationSystemMessageToAST: a.astParserFor(I)
    }
}