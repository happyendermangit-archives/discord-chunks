function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SlateToolbarTypes: function() {
            return l
        },
        ChatInputTypes: function() {
            return C
        }
    });
    var i, l, a = n("394846"),
        s = n("474643");
    (i = l || (l = {}))[i.TOOLTIP = 0] = "TOOLTIP", i[i.STATIC = 1] = "STATIC";
    let r = {
            analyticsName: "normal",
            attachments: !0,
            autocomplete: {
                addReactionShortcut: !0,
                forceChatLayer: !0,
                reactions: !0
            },
            commands: {
                enabled: !0
            },
            drafts: {
                type: s.DraftType.ChannelMessage,
                commandType: s.DraftType.SlashCommand,
                autoSave: !0
            },
            emojis: {
                button: !0
            },
            gifs: {
                button: !0,
                allowSending: !0
            },
            gifts: {
                button: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            showThreadPromptOnReply: !0,
            stickers: {
                button: !0,
                allowSending: !0,
                autoSuggest: !0
            },
            users: {
                allowMentioning: !0
            },
            submit: {
                button: !0,
                ignorePreference: a.isMobile,
                disableEnterToSubmit: a.isMobile,
                clearOnSubmit: !0,
                useDisabledStylesOnSubmit: !0
            },
            uploadLongMessages: !0,
            upsellLongMessages: {
                iconOnly: !1
            },
            showCharacterCount: !0,
            sedReplace: !0
        },
        o = {
            analyticsName: "overlay",
            autocomplete: {
                addReactionShortcut: !0,
                forceChatLayer: !0
            },
            drafts: {
                type: s.DraftType.ChannelMessage,
                autoSave: !0
            },
            emojis: {
                button: !0
            },
            gifs: {
                button: !0
            },
            gifts: {
                button: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            showThreadPromptOnReply: !0,
            stickers: {
                button: !0,
                allowSending: !0
            },
            users: {
                allowMentioning: !0
            },
            submit: {
                button: !0,
                ignorePreference: a.isMobile,
                disableEnterToSubmit: a.isMobile,
                clearOnSubmit: !0,
                useDisabledStylesOnSubmit: !0
            },
            upsellLongMessages: {
                iconOnly: !1
            },
            showCharacterCount: !0
        },
        u = {
            analyticsName: "sidebar",
            attachments: !0,
            autocomplete: {
                addReactionShortcut: !0
            },
            commands: {
                enabled: !0
            },
            disableAutoFocus: !0,
            drafts: {
                type: s.DraftType.ChannelMessage,
                commandType: s.DraftType.SlashCommand
            },
            emojis: {
                button: !0
            },
            gifs: {
                allowSending: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            stickers: {
                allowSending: !0,
                autoSuggest: !0
            },
            users: {
                allowMentioning: !0
            },
            submit: {
                button: !0,
                ignorePreference: a.isMobile,
                disableEnterToSubmit: a.isMobile,
                clearOnSubmit: !0,
                useDisabledStylesOnSubmit: !0
            },
            uploadLongMessages: !0,
            showCharacterCount: !0,
            upsellLongMessages: {
                iconOnly: !0
            }
        },
        d = {
            analyticsName: "edit",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            emojis: {
                button: !0
            },
            users: {
                allowMentioning: !0
            },
            expressionPicker: {
                onlyEmojis: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0
            },
            showCharacterCount: !0
        },
        c = {
            analyticsName: "forum",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            emojis: {
                button: !0
            },
            gifs: {
                allowSending: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                allowEmptyMessage: !0
            },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0
            },
            showCharacterCount: !0
        },
        f = {
            analyticsName: "voice_channel_status",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            emojis: {
                button: !0
            },
            expressionPicker: {
                onlyEmojis: !0
            },
            permissions: {
                requireSendMessages: !1
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                allowEmptyMessage: !0
            },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0
            },
            markdown: {
                disableCodeBlocks: !0,
                disableBlockQuotes: !0
            },
            showCharacterCount: !0
        },
        m = {
            analyticsName: "thread_creation",
            attachments: !0,
            drafts: {
                type: s.DraftType.FirstThreadMessage
            },
            emojis: {
                button: !0
            },
            gifs: {
                allowSending: !0
            },
            stickers: {
                allowSending: !0
            },
            users: {
                allowMentioning: !0
            },
            permissions: {
                requireCreateTherads: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                button: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0,
            hideAttachmentArea: !0,
            upsellLongMessages: {
                iconOnly: !0
            }
        },
        p = {
            analyticsName: "create_forum_post",
            attachments: !0,
            drafts: {
                type: s.DraftType.FirstThreadMessage
            },
            gifs: {
                allowSending: !0
            },
            stickers: {
                allowSending: !0
            },
            users: {
                allowMentioning: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            },
            disableAutoFocus: !0,
            hideAttachmentArea: !0,
            uploadLongMessages: !0
        },
        h = {
            analyticsName: "create_poll",
            attachments: !0,
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            emojis: {
                button: !0
            },
            gifs: {
                allowSending: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            }
        },
        x = {
            analyticsName: "profile_bio_input",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            emojis: {
                button: !0
            },
            permissions: {
                requireSendMessages: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0
        },
        E = {
            analyticsName: "custom_gift_type",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            emojis: {},
            permissions: {
                requireSendMessages: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0
        },
        y = {
            analyticsName: "rules_input",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            permissions: {
                requireSendMessages: !0
            },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0
            },
            showCharacterCount: !0
        },
        g = {
            analyticsName: "forum_channel_guidelines",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            permissions: {
                requireSendMessages: !1
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            },
            autocomplete: {
                alwaysUseLayer: !0,
                small: !0
            },
            showCharacterCount: !0,
            toolbarType: 1
        },
        S = {
            analyticsName: "atomic_reator_reply_input",
            drafts: {
                type: s.DraftType.ChannelMessage
            },
            permissions: {
                requireSendMessages: !0
            },
            submit: {
                useDisabledStylesOnSubmit: !0,
                disableEnterToSubmit: !0
            },
            disableAutoFocus: !0,
            showCharacterCount: !0
        },
        C = {
            NORMAL: r,
            OVERLAY: o,
            SIDEBAR: u,
            EDIT: d,
            FORM: c,
            VOICE_CHANNEL_STATUS: f,
            THREAD_CREATION: m,
            PROFILE_BIO_INPUT: x,
            CUSTOM_GIFT: E,
            RULES_INPUT: y,
            CREATE_FORUM_POST: p,
            CREATE_POLL: h,
            FORUM_CHANNEL_GUIDELINES: g,
            ATOMIC_REACTOR_REPLY_INPUT: S
        }
}