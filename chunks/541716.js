function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChatInputTypes: function() {
            return m
        },
        SlateToolbarTypes: function() {
            return r
        }
    });
    var i, r, s = n("873546"),
        a = n("703558");
    (i = r || (r = {}))[i.TOOLTIP = 0] = "TOOLTIP", i[i.STATIC = 1] = "STATIC";
    let o = {
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
                type: a.DraftType.ChannelMessage,
                commandType: a.DraftType.SlashCommand,
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
                ignorePreference: s.isMobile,
                disableEnterToSubmit: s.isMobile,
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
        l = {
            analyticsName: "overlay",
            autocomplete: {
                addReactionShortcut: !0,
                forceChatLayer: !0
            },
            drafts: {
                type: a.DraftType.ChannelMessage,
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
                ignorePreference: s.isMobile,
                disableEnterToSubmit: s.isMobile,
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
                type: a.DraftType.ChannelMessage,
                commandType: a.DraftType.SlashCommand
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
                ignorePreference: s.isMobile,
                disableEnterToSubmit: s.isMobile,
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
                type: a.DraftType.ChannelMessage
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
        _ = {
            analyticsName: "forum",
            drafts: {
                type: a.DraftType.ChannelMessage
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
        c = {
            analyticsName: "voice_channel_status",
            drafts: {
                type: a.DraftType.ChannelMessage
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
        E = {
            analyticsName: "thread_creation",
            attachments: !0,
            drafts: {
                type: a.DraftType.FirstThreadMessage
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
        I = {
            analyticsName: "create_forum_post",
            attachments: !0,
            drafts: {
                type: a.DraftType.FirstThreadMessage
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
        T = {
            analyticsName: "create_poll",
            attachments: !0,
            drafts: {
                type: a.DraftType.ChannelMessage
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
        f = {
            analyticsName: "profile_bio_input",
            drafts: {
                type: a.DraftType.ChannelMessage
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
        S = {
            analyticsName: "custom_gift_type",
            drafts: {
                type: a.DraftType.ChannelMessage
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
        h = {
            analyticsName: "rules_input",
            drafts: {
                type: a.DraftType.ChannelMessage
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
        A = {
            analyticsName: "forum_channel_guidelines",
            drafts: {
                type: a.DraftType.ChannelMessage
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
        m = {
            NORMAL: o,
            OVERLAY: l,
            SIDEBAR: u,
            EDIT: d,
            FORM: _,
            VOICE_CHANNEL_STATUS: c,
            THREAD_CREATION: E,
            PROFILE_BIO_INPUT: f,
            CUSTOM_GIFT: S,
            RULES_INPUT: h,
            CREATE_FORUM_POST: I,
            CREATE_POLL: T,
            FORUM_CHANNEL_GUIDELINES: A,
            ATOMIC_REACTOR_REPLY_INPUT: {
                analyticsName: "atomic_reator_reply_input",
                drafts: {
                    type: a.DraftType.ChannelMessage
                },
                permissions: {
                    requireSendMessages: !0
                },
                users: {
                    allowMentioning: !0
                },
                submit: {
                    useDisabledStylesOnSubmit: !0,
                    disableEnterToSubmit: !0
                },
                disableAutoFocus: !0,
                showCharacterCount: !0
            }
        }
}