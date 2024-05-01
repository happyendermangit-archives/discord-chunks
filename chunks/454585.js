function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("392711"),
        r = n.n(i),
        s = n("25209"),
        a = n("691424"),
        o = n("428595"),
        l = n("364458");
    let u = null;

    function d(e, t) {
        let n = {};
        return null != e.mention && null != u && (n = {
            mention: u
        }), (0, l.default)([e, ...t, n])
    }
    u = n("878611").default;
    let _ = {
            enableBuildOverrides: !1,
            enableEmojiClick: !0
        },
        c = d(o.default.RULES, [(0, a.default)({
            enableBuildOverrides: !0
        })]),
        E = r().omit(d(o.default.RULES, [(0, a.default)(_)]), "paragraph", "newline"),
        I = d(o.default.CHANNEL_TOPIC_RULES, [(0, a.default)({
            ..._,
            emojiTooltipPosition: "bottom"
        }), {
            codeBlock: {
                react: o.default.RULES.text.react
            }
        }]),
        T = d(o.default.VOICE_CHANNEL_STATUS_RULES, [(0, a.default)({
            ..._,
            enableEmojiClick: !1
        })]),
        f = d(o.default.EMBED_TITLE_RULES, [(0, a.default)(_)]),
        S = d(o.default.INLINE_REPLY_RULES, [(0, a.default)(_)]),
        h = d(o.default.GUILD_VERIFICATION_FORM_RULES, [(0, a.default)(_)]),
        A = d(o.default.GUILD_EVENT_RULES, [(0, a.default)(_)]),
        m = d(o.default.INLINE_REPLY_RULES, [(0, a.default)({
            ..._,
            emoji: {
                height: 14,
                width: 14,
                lineHeight: 18
            }
        })]),
        N = d(o.default.AUTO_MODERATION_SYSTEM_MESSAGE_RULES, [(0, a.default)(_)]),
        p = r().omit(d(o.default.RULES, [(0, a.default)({
            ..._,
            emoji: {
                height: 14,
                width: 14
            }
        })]), "paragraph", "newline", "strong", "codeBlock", "inlineCode", "u", "link", "url", "autolink", "list", "heading", "subtext"),
        O = {
            text: o.default.RULES.text
        };
    t.default = {
        combineAndInjectMentionRule: d,
        createReactRules: a.default,
        defaultReactRuleOptions: _,
        defaultRules: c,
        guildEventRules: A,
        notifCenterV2MessagePreviewRules: p,
        lockscreenWidgetMessageRules: O,
        astParserFor: s.astParserFor,
        reactParserFor: s.reactParserFor,
        parse: s.reactParserFor(c),
        parseTopic: s.reactParserFor(I),
        parseVoiceChannelStatus: s.reactParserFor(T),
        parseEmbedTitle: s.reactParserFor(f),
        parseInlineReply: s.reactParserFor(S),
        parseGuildVerificationFormRule: s.reactParserFor(h),
        parseGuildEventDescription: s.reactParserFor(A),
        parseAutoModerationSystemMessage: s.reactParserFor(N),
        parseForumPostGuidelines: s.reactParserFor(E),
        parseForumPostMostRecentMessage: s.reactParserFor(m),
        parseNotifCenterMessagePreview: s.reactParserFor(p),
        parseToAST: s.astParserFor(c),
        parseTopicToAST: s.astParserFor(I),
        parseEmbedTitleToAST: s.astParserFor(f),
        parseInlineReplyToAST: s.astParserFor(S),
        parseAutoModerationSystemMessageToAST: s.astParserFor(N)
    }
}