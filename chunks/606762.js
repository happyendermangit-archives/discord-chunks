function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        RowType: function() {
            return o
        },
        AudienceSelectorSections: function() {
            return l
        },
        MEMBER_REQUEST_COUNT: function() {
            return m
        },
        ADVANCED_MODE_ON_KEY: function() {
            return p
        },
        getChannelPermissionSpecMap: function() {
            return S
        }
    });
    var i, s, r, a, o, l, u, d, c = n("79112"),
        _ = n("428171"),
        f = n("852040"),
        E = n("701909"),
        h = n("49111"),
        g = n("782340");
    (i = o || (o = {}))[i.EMPTY_STATE = 0] = "EMPTY_STATE", i[i.ADMINISTRATOR = 1] = "ADMINISTRATOR", i[i.ROLE = 2] = "ROLE", i[i.OWNER = 3] = "OWNER", i[i.MEMBER = 4] = "MEMBER", i[i.USER = 5] = "USER", i[i.GUILD = 6] = "GUILD", (s = l || (l = {}))[s.ROLES = 0] = "ROLES", s[s.MEMBERS = 1] = "MEMBERS", s[s.USERS = 2] = "USERS", s[s.GUILDS = 3] = "GUILDS";
    let m = 20,
        p = "channelPermissionSettingsAdvancedModeOn";

    function S(e, t, n, i) {
        let s = e.type;
        return {
            [h.Permissions.VIEW_CHANNEL.toString()]: {
                title: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : g.default.Messages.VIEW_CHANNEL,
                description: (() => {
                    if (t) switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                        case h.ChannelTypes.GUILD_VOICE:
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                    }
                    return s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                })(),
                flag: h.Permissions.VIEW_CHANNEL
            },
            [h.Permissions.MANAGE_CHANNELS.toString()]: {
                title: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.MANAGE_CHANNELS : g.default.Messages.MANAGE_CHANNEL,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.MANAGE_CHANNELS
            },
            [h.Permissions.MANAGE_ROLES.toString()]: {
                title: g.default.Messages.MANAGE_PERMISSIONS,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                    }
                })(),
                flag: h.Permissions.MANAGE_ROLES
            },
            [h.Permissions.MANAGE_WEBHOOKS.toString()]: {
                title: g.default.Messages.MANAGE_WEBHOOKS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                flag: h.Permissions.MANAGE_WEBHOOKS
            },
            [h.Permissions.CREATE_INSTANT_INVITE.toString()]: {
                title: g.default.Messages.CREATE_INSTANT_INVITE,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_VOICE:
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.CREATE_INSTANT_INVITE
            },
            [h.Permissions.SEND_MESSAGES.toString()]: {
                title: h.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.CREATE_FORUM_POSTS : n && s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : g.default.Messages.SEND_MESSAGES,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return n ? g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_FORUM:
                            return (null == i ? void 0 : i.createPostsDisabled) && !e.isMediaChannel() ? _.default.getForumChannelPermissionText() : g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                        case h.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                articleURL: E.default.getArticleURL(h.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            });
                        case h.ChannelTypes.GUILD_VOICE:
                            return f.default.getTextInVoiceSendMessageChannelPermissionText(null == i ? void 0 : i.sendMessagesDisabled);
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.SEND_MESSAGES
            },
            [h.Permissions.EMBED_LINKS.toString()]: {
                title: g.default.Messages.EMBED_LINKS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                flag: h.Permissions.EMBED_LINKS
            },
            [h.Permissions.ATTACH_FILES.toString()]: {
                title: g.default.Messages.ATTACH_FILES,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                flag: h.Permissions.ATTACH_FILES
            },
            [h.Permissions.ADD_REACTIONS.toString()]: {
                title: g.default.Messages.ADD_REACTIONS,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.ADD_REACTIONS
            },
            [h.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                flag: h.Permissions.USE_EXTERNAL_EMOJIS
            },
            [h.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                flag: h.Permissions.USE_EXTERNAL_STICKERS
            },
            [h.Permissions.MENTION_EVERYONE.toString()]: {
                title: s === h.ChannelTypes.GUILD_STAGE_VOICE ? g.default.Messages.MENTION_EVERYONE_STAGE : g.default.Messages.MENTION_EVERYONE,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : s === h.ChannelTypes.GUILD_STAGE_VOICE ? g.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : g.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                flag: h.Permissions.MENTION_EVERYONE
            },
            [h.Permissions.MANAGE_MESSAGES.toString()]: {
                title: g.default.Messages.MANAGE_MESSAGES,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                articleURL: E.default.getArticleURL(h.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            });
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.MANAGE_MESSAGES
            },
            [h.Permissions.READ_MESSAGE_HISTORY.toString()]: {
                title: h.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.READ_POST_HISTORY : g.default.Messages.READ_MESSAGE_HISTORY,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_VOICE:
                            return f.default.getTextInVoiceReadMessageHistoryChannelPermissionText(null == i ? void 0 : i.readMessageHistoryDisabled);
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.READ_MESSAGE_HISTORY
            },
            [h.Permissions.SEND_TTS_MESSAGES.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                flag: h.Permissions.SEND_TTS_MESSAGES
            },
            [h.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                flag: h.Permissions.USE_APPLICATION_COMMANDS
            },
            [h.Permissions.SEND_VOICE_MESSAGES.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                flag: h.Permissions.SEND_VOICE_MESSAGES
            },
            [h.Permissions.USE_CLYDE_AI.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : g.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                flag: h.Permissions.USE_CLYDE_AI
            },
            [h.Permissions.CONNECT.toString()]: {
                title: g.default.Messages.CONNECT,
                description: (() => {
                    if (t) switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                    }
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                    }
                })(),
                flag: h.Permissions.CONNECT
            },
            [h.Permissions.SPEAK.toString()]: {
                title: g.default.Messages.SPEAK,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                    }
                })(),
                flag: h.Permissions.SPEAK
            },
            [h.Permissions.STREAM.toString()]: {
                title: g.default.Messages.VIDEO,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                    }
                })(),
                flag: h.Permissions.STREAM
            },
            [h.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
                title: g.default.Messages.USE_EMBEDDED_ACTIVITIES,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                    }
                })(),
                flag: h.Permissions.USE_EMBEDDED_ACTIVITIES
            },
            [h.Permissions.USE_SOUNDBOARD.toString()]: {
                title: g.default.Messages.USE_SOUNDBOARD,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                helpCenterArticle: E.default.getArticleURL(h.HelpdeskArticles.SOUNDBOARD)
                            });
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                helpCenterArticle: E.default.getArticleURL(h.HelpdeskArticles.SOUNDBOARD)
                            });
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                helpCenterArticle: E.default.getArticleURL(h.HelpdeskArticles.SOUNDBOARD)
                            })
                    }
                })(),
                flag: h.Permissions.USE_SOUNDBOARD
            },
            [h.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
                title: g.default.Messages.USE_EXTERNAL_SOUNDS,
                description: g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                flag: h.Permissions.USE_EXTERNAL_SOUNDS
            },
            [h.Permissions.USE_VAD.toString()]: {
                title: g.default.Messages.USE_VAD,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                    }
                })(),
                flag: h.Permissions.USE_VAD
            },
            [h.Permissions.PRIORITY_SPEAKER.toString()]: {
                title: g.default.Messages.PRIORITY_SPEAKER,
                description: (() => {
                    let e = {
                        keybind: g.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                        onClick: () => {
                            c.default.open(h.UserSettingsSections.KEYBINDS)
                        }
                    };
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
                    }
                })(),
                flag: h.Permissions.PRIORITY_SPEAKER
            },
            [h.Permissions.MUTE_MEMBERS.toString()]: {
                title: g.default.Messages.MUTE_MEMBERS,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: h.Permissions.MUTE_MEMBERS
            },
            [h.Permissions.DEAFEN_MEMBERS.toString()]: {
                title: g.default.Messages.DEAFEN_MEMBERS,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: h.Permissions.DEAFEN_MEMBERS
            },
            [h.Permissions.MOVE_MEMBERS.toString()]: {
                title: g.default.Messages.MOVE_MEMBERS,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                        case h.ChannelTypes.GUILD_TEXT:
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: h.Permissions.MOVE_MEMBERS
            },
            [h.Permissions.REQUEST_TO_SPEAK.toString()]: {
                title: g.default.Messages.REQUEST_TO_SPEAK,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                flag: h.Permissions.REQUEST_TO_SPEAK
            },
            [h.Permissions.MANAGE_THREADS.toString()]: {
                title: h.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.MANAGE_FORUM_POSTS : n && s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.MANAGE_THREADS_AND_FORUM_POSTS : g.default.Messages.MANAGE_THREADS,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return n ? g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.MANAGE_THREADS
            },
            [h.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
                title: g.default.Messages.CREATE_PUBLIC_THREADS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                flag: h.Permissions.CREATE_PUBLIC_THREADS
            },
            [h.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
                title: g.default.Messages.CREATE_PRIVATE_THREADS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                flag: h.Permissions.CREATE_PRIVATE_THREADS
            },
            [h.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
                title: h.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.SEND_MESSAGES_IN_FORUM_POSTS : n && s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : g.default.Messages.SEND_MESSAGES_IN_THREADS,
                description: (() => {
                    switch (s) {
                        case h.ChannelTypes.GUILD_CATEGORY:
                            return n ? g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                        case h.ChannelTypes.GUILD_FORUM:
                        case h.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                    }
                })(),
                flag: h.Permissions.SEND_MESSAGES_IN_THREADS
            },
            [h.Permissions.MANAGE_EVENTS.toString()]: {
                title: g.default.Messages.MANAGE_EVENTS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                flag: h.Permissions.MANAGE_EVENTS
            },
            [h.Permissions.CREATE_EVENTS.toString()]: {
                title: g.default.Messages.CREATE_EVENTS,
                description: s === h.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                flag: h.Permissions.CREATE_EVENTS
            },
            [h.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
                title: (null == i ? void 0 : i.inVoiceBgExperiment) ? g.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_TITLE : g.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                description: (null == i ? void 0 : i.inVoiceBgExperiment) ? g.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_DESCRIPTION : g.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                flag: h.Permissions.SET_VOICE_CHANNEL_STATUS
            }
        }
    }(r = u || (u = {})).SETTINGS_PAGE = "settings-page", r.MEMBERS_LIST = "members-list", r.EMPTY_STATE = "empty-state", r.CREATE_CHANNEL = "create-channel", (a = d || (d = {})).BASIC = "basic", a.ADVANCED = "advanced"
}