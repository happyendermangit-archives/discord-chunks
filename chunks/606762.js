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
        f = n("428171"),
        _ = n("852040"),
        h = n("701909"),
        E = n("49111"),
        g = n("782340");
    (i = o || (o = {}))[i.EMPTY_STATE = 0] = "EMPTY_STATE", i[i.ADMINISTRATOR = 1] = "ADMINISTRATOR", i[i.ROLE = 2] = "ROLE", i[i.OWNER = 3] = "OWNER", i[i.MEMBER = 4] = "MEMBER", i[i.USER = 5] = "USER", i[i.GUILD = 6] = "GUILD", (s = l || (l = {}))[s.ROLES = 0] = "ROLES", s[s.MEMBERS = 1] = "MEMBERS", s[s.USERS = 2] = "USERS", s[s.GUILDS = 3] = "GUILDS";
    let m = 20,
        p = "channelPermissionSettingsAdvancedModeOn";

    function S(e, t, n, i) {
        let s = e.type;
        return {
            [E.Permissions.VIEW_CHANNEL.toString()]: {
                title: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : g.default.Messages.VIEW_CHANNEL,
                description: (() => {
                    if (t) switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                        case E.ChannelTypes.GUILD_VOICE:
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                    }
                    return s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                })(),
                flag: E.Permissions.VIEW_CHANNEL
            },
            [E.Permissions.MANAGE_CHANNELS.toString()]: {
                title: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.MANAGE_CHANNELS : g.default.Messages.MANAGE_CHANNEL,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.MANAGE_CHANNELS
            },
            [E.Permissions.MANAGE_ROLES.toString()]: {
                title: g.default.Messages.MANAGE_PERMISSIONS,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                    }
                })(),
                flag: E.Permissions.MANAGE_ROLES
            },
            [E.Permissions.MANAGE_WEBHOOKS.toString()]: {
                title: g.default.Messages.MANAGE_WEBHOOKS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                flag: E.Permissions.MANAGE_WEBHOOKS
            },
            [E.Permissions.CREATE_INSTANT_INVITE.toString()]: {
                title: g.default.Messages.CREATE_INSTANT_INVITE,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_VOICE:
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.CREATE_INSTANT_INVITE
            },
            [E.Permissions.SEND_MESSAGES.toString()]: {
                title: E.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.CREATE_FORUM_POSTS : n && s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : g.default.Messages.SEND_MESSAGES,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return n ? g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_FORUM:
                            return (null == i ? void 0 : i.createPostsDisabled) && !e.isMediaChannel() ? f.default.getForumChannelPermissionText() : g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                        case E.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                articleURL: h.default.getArticleURL(E.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            });
                        case E.ChannelTypes.GUILD_VOICE:
                            return _.default.getTextInVoiceSendMessageChannelPermissionText(null == i ? void 0 : i.sendMessagesDisabled);
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.SEND_MESSAGES
            },
            [E.Permissions.EMBED_LINKS.toString()]: {
                title: g.default.Messages.EMBED_LINKS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                flag: E.Permissions.EMBED_LINKS
            },
            [E.Permissions.ATTACH_FILES.toString()]: {
                title: g.default.Messages.ATTACH_FILES,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                flag: E.Permissions.ATTACH_FILES
            },
            [E.Permissions.ADD_REACTIONS.toString()]: {
                title: g.default.Messages.ADD_REACTIONS,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.ADD_REACTIONS
            },
            [E.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                flag: E.Permissions.USE_EXTERNAL_EMOJIS
            },
            [E.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                flag: E.Permissions.USE_EXTERNAL_STICKERS
            },
            [E.Permissions.MENTION_EVERYONE.toString()]: {
                title: s === E.ChannelTypes.GUILD_STAGE_VOICE ? g.default.Messages.MENTION_EVERYONE_STAGE : g.default.Messages.MENTION_EVERYONE,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : s === E.ChannelTypes.GUILD_STAGE_VOICE ? g.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : g.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                flag: E.Permissions.MENTION_EVERYONE
            },
            [E.Permissions.MANAGE_MESSAGES.toString()]: {
                title: g.default.Messages.MANAGE_MESSAGES,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                articleURL: h.default.getArticleURL(E.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            });
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.MANAGE_MESSAGES
            },
            [E.Permissions.READ_MESSAGE_HISTORY.toString()]: {
                title: E.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.READ_POST_HISTORY : g.default.Messages.READ_MESSAGE_HISTORY,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_VOICE:
                            return _.default.getTextInVoiceReadMessageHistoryChannelPermissionText(null == i ? void 0 : i.readMessageHistoryDisabled);
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.READ_MESSAGE_HISTORY
            },
            [E.Permissions.SEND_TTS_MESSAGES.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                flag: E.Permissions.SEND_TTS_MESSAGES
            },
            [E.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                flag: E.Permissions.USE_APPLICATION_COMMANDS
            },
            [E.Permissions.SEND_VOICE_MESSAGES.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                flag: E.Permissions.SEND_VOICE_MESSAGES
            },
            [E.Permissions.USE_CLYDE_AI.toString()]: {
                title: g.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : g.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                flag: E.Permissions.USE_CLYDE_AI
            },
            [E.Permissions.CONNECT.toString()]: {
                title: g.default.Messages.CONNECT,
                description: (() => {
                    if (t) switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                    }
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                    }
                })(),
                flag: E.Permissions.CONNECT
            },
            [E.Permissions.SPEAK.toString()]: {
                title: g.default.Messages.SPEAK,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                    }
                })(),
                flag: E.Permissions.SPEAK
            },
            [E.Permissions.STREAM.toString()]: {
                title: g.default.Messages.VIDEO,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                    }
                })(),
                flag: E.Permissions.STREAM
            },
            [E.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
                title: g.default.Messages.USE_EMBEDDED_ACTIVITIES,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                    }
                })(),
                flag: E.Permissions.USE_EMBEDDED_ACTIVITIES
            },
            [E.Permissions.USE_SOUNDBOARD.toString()]: {
                title: g.default.Messages.USE_SOUNDBOARD,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                helpCenterArticle: h.default.getArticleURL(E.HelpdeskArticles.SOUNDBOARD)
                            });
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                helpCenterArticle: h.default.getArticleURL(E.HelpdeskArticles.SOUNDBOARD)
                            });
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                helpCenterArticle: h.default.getArticleURL(E.HelpdeskArticles.SOUNDBOARD)
                            })
                    }
                })(),
                flag: E.Permissions.USE_SOUNDBOARD
            },
            [E.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
                title: g.default.Messages.USE_EXTERNAL_SOUNDS,
                description: g.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                flag: E.Permissions.USE_EXTERNAL_SOUNDS
            },
            [E.Permissions.USE_VAD.toString()]: {
                title: g.default.Messages.USE_VAD,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                    }
                })(),
                flag: E.Permissions.USE_VAD
            },
            [E.Permissions.PRIORITY_SPEAKER.toString()]: {
                title: g.default.Messages.PRIORITY_SPEAKER,
                description: (() => {
                    let e = {
                        keybind: g.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                        onClick: () => {
                            c.default.open(E.UserSettingsSections.KEYBINDS)
                        }
                    };
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
                    }
                })(),
                flag: E.Permissions.PRIORITY_SPEAKER
            },
            [E.Permissions.MUTE_MEMBERS.toString()]: {
                title: g.default.Messages.MUTE_MEMBERS,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: E.Permissions.MUTE_MEMBERS
            },
            [E.Permissions.DEAFEN_MEMBERS.toString()]: {
                title: g.default.Messages.DEAFEN_MEMBERS,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: E.Permissions.DEAFEN_MEMBERS
            },
            [E.Permissions.MOVE_MEMBERS.toString()]: {
                title: g.default.Messages.MOVE_MEMBERS,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_STAGE_VOICE:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                        case E.ChannelTypes.GUILD_TEXT:
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: E.Permissions.MOVE_MEMBERS
            },
            [E.Permissions.REQUEST_TO_SPEAK.toString()]: {
                title: g.default.Messages.REQUEST_TO_SPEAK,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                flag: E.Permissions.REQUEST_TO_SPEAK
            },
            [E.Permissions.MANAGE_THREADS.toString()]: {
                title: E.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.MANAGE_FORUM_POSTS : n && s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.MANAGE_THREADS_AND_FORUM_POSTS : g.default.Messages.MANAGE_THREADS,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return n ? g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.MANAGE_THREADS
            },
            [E.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
                title: g.default.Messages.CREATE_PUBLIC_THREADS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                flag: E.Permissions.CREATE_PUBLIC_THREADS
            },
            [E.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
                title: g.default.Messages.CREATE_PRIVATE_THREADS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                flag: E.Permissions.CREATE_PRIVATE_THREADS
            },
            [E.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
                title: E.ChannelTypesSets.GUILD_THREADS_ONLY.has(s) ? g.default.Messages.SEND_MESSAGES_IN_FORUM_POSTS : n && s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : g.default.Messages.SEND_MESSAGES_IN_THREADS,
                description: (() => {
                    switch (s) {
                        case E.ChannelTypes.GUILD_CATEGORY:
                            return n ? g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                        case E.ChannelTypes.GUILD_FORUM:
                        case E.ChannelTypes.GUILD_MEDIA:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                        default:
                            return g.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                    }
                })(),
                flag: E.Permissions.SEND_MESSAGES_IN_THREADS
            },
            [E.Permissions.MANAGE_EVENTS.toString()]: {
                title: g.default.Messages.MANAGE_EVENTS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                flag: E.Permissions.MANAGE_EVENTS
            },
            [E.Permissions.CREATE_EVENTS.toString()]: {
                title: g.default.Messages.CREATE_EVENTS,
                description: s === E.ChannelTypes.GUILD_CATEGORY ? g.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : g.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                flag: E.Permissions.CREATE_EVENTS
            },
            [E.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
                title: (null == i ? void 0 : i.inVoiceBgExperiment) ? g.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_TITLE : g.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                description: (null == i ? void 0 : i.inVoiceBgExperiment) ? g.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_DESCRIPTION : g.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                flag: E.Permissions.SET_VOICE_CHANNEL_STATUS
            }
        }
    }(r = u || (u = {})).SETTINGS_PAGE = "settings-page", r.MEMBERS_LIST = "members-list", r.EMPTY_STATE = "empty-state", r.CREATE_CHANNEL = "create-channel", (a = d || (d = {})).BASIC = "basic", a.ADVANCED = "advanced"
}