function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ADVANCED_MODE_ON_KEY: function() {
            return h
        },
        AudienceSelectorSections: function() {
            return l
        },
        MEMBER_REQUEST_COUNT: function() {
            return S
        },
        RowType: function() {
            return o
        },
        getChannelPermissionSpecMap: function() {
            return A
        }
    });
    var i, r, a, s, o, l, u, d, _ = n("230711"),
        c = n("197062"),
        E = n("727866"),
        I = n("63063"),
        T = n("981631"),
        f = n("689938");
    (i = o || (o = {}))[i.EMPTY_STATE = 0] = "EMPTY_STATE", i[i.ADMINISTRATOR = 1] = "ADMINISTRATOR", i[i.ROLE = 2] = "ROLE", i[i.OWNER = 3] = "OWNER", i[i.MEMBER = 4] = "MEMBER", i[i.USER = 5] = "USER", i[i.GUILD = 6] = "GUILD", (r = l || (l = {}))[r.ROLES = 0] = "ROLES", r[r.MEMBERS = 1] = "MEMBERS", r[r.USERS = 2] = "USERS", r[r.GUILDS = 3] = "GUILDS";
    let S = 20,
        h = "channelPermissionSettingsAdvancedModeOn";

    function A(e, t, n, i) {
        let r = e.type;
        return {
            [T.Permissions.VIEW_CHANNEL.toString()]: {
                title: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : f.default.Messages.VIEW_CHANNEL,
                description: (() => {
                    if (t) switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                        case T.ChannelTypes.GUILD_VOICE:
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                    }
                    return r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
                })(),
                flag: T.Permissions.VIEW_CHANNEL
            },
            [T.Permissions.MANAGE_CHANNELS.toString()]: {
                title: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.MANAGE_CHANNELS : f.default.Messages.MANAGE_CHANNEL,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.MANAGE_CHANNELS
            },
            [T.Permissions.MANAGE_ROLES.toString()]: {
                title: f.default.Messages.MANAGE_PERMISSIONS,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                    }
                })(),
                flag: T.Permissions.MANAGE_ROLES
            },
            [T.Permissions.MANAGE_WEBHOOKS.toString()]: {
                title: f.default.Messages.MANAGE_WEBHOOKS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
                flag: T.Permissions.MANAGE_WEBHOOKS
            },
            [T.Permissions.CREATE_INSTANT_INVITE.toString()]: {
                title: f.default.Messages.CREATE_INSTANT_INVITE,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_VOICE:
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.CREATE_INSTANT_INVITE
            },
            [T.Permissions.SEND_MESSAGES.toString()]: {
                title: T.ChannelTypesSets.GUILD_THREADS_ONLY.has(r) ? f.default.Messages.CREATE_FORUM_POSTS : n && r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : f.default.Messages.SEND_MESSAGES,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return n ? f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_FORUM:
                            return (null == i ? void 0 : i.createPostsDisabled) && !e.isMediaChannel() ? c.default.getForumChannelPermissionText() : f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                        case T.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                articleURL: I.default.getArticleURL(T.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            });
                        case T.ChannelTypes.GUILD_VOICE:
                            return E.default.getTextInVoiceSendMessageChannelPermissionText(null == i ? void 0 : i.sendMessagesDisabled);
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.SEND_MESSAGES
            },
            [T.Permissions.EMBED_LINKS.toString()]: {
                title: f.default.Messages.EMBED_LINKS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
                flag: T.Permissions.EMBED_LINKS
            },
            [T.Permissions.ATTACH_FILES.toString()]: {
                title: f.default.Messages.ATTACH_FILES,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
                flag: T.Permissions.ATTACH_FILES
            },
            [T.Permissions.ADD_REACTIONS.toString()]: {
                title: f.default.Messages.ADD_REACTIONS,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.ADD_REACTIONS
            },
            [T.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
                title: f.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
                flag: T.Permissions.USE_EXTERNAL_EMOJIS
            },
            [T.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
                title: f.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
                flag: T.Permissions.USE_EXTERNAL_STICKERS
            },
            [T.Permissions.MENTION_EVERYONE.toString()]: {
                title: r === T.ChannelTypes.GUILD_STAGE_VOICE ? f.default.Messages.MENTION_EVERYONE_STAGE : f.default.Messages.MENTION_EVERYONE,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : r === T.ChannelTypes.GUILD_STAGE_VOICE ? f.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : f.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
                flag: T.Permissions.MENTION_EVERYONE
            },
            [T.Permissions.MANAGE_MESSAGES.toString()]: {
                title: f.default.Messages.MANAGE_MESSAGES,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_ANNOUNCEMENT:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                                articleURL: I.default.getArticleURL(T.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                            });
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.MANAGE_MESSAGES
            },
            [T.Permissions.READ_MESSAGE_HISTORY.toString()]: {
                title: T.ChannelTypesSets.GUILD_THREADS_ONLY.has(r) ? f.default.Messages.READ_POST_HISTORY : f.default.Messages.READ_MESSAGE_HISTORY,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_VOICE:
                            return E.default.getTextInVoiceReadMessageHistoryChannelPermissionText(null == i ? void 0 : i.readMessageHistoryDisabled);
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.READ_MESSAGE_HISTORY
            },
            [T.Permissions.SEND_TTS_MESSAGES.toString()]: {
                title: f.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
                flag: T.Permissions.SEND_TTS_MESSAGES
            },
            [T.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
                title: f.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
                flag: T.Permissions.USE_APPLICATION_COMMANDS
            },
            [T.Permissions.SEND_VOICE_MESSAGES.toString()]: {
                title: f.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
                flag: T.Permissions.SEND_VOICE_MESSAGES
            },
            [T.Permissions.SEND_POLLS.toString()]: {
                title: f.default.Messages.ROLE_PERMISSIONS_SEND_POLLS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_SEND_POLLS_DESCRIPTION_TEXT,
                flag: T.Permissions.SEND_POLLS
            },
            [T.Permissions.USE_CLYDE_AI.toString()]: {
                title: f.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : f.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
                flag: T.Permissions.USE_CLYDE_AI
            },
            [T.Permissions.CONNECT.toString()]: {
                title: f.default.Messages.CONNECT,
                description: (() => {
                    if (t) switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                    }
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                    }
                })(),
                flag: T.Permissions.CONNECT
            },
            [T.Permissions.SPEAK.toString()]: {
                title: f.default.Messages.SPEAK,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                    }
                })(),
                flag: T.Permissions.SPEAK
            },
            [T.Permissions.STREAM.toString()]: {
                title: f.default.Messages.VIDEO,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                    }
                })(),
                flag: T.Permissions.STREAM
            },
            [T.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
                title: f.default.Messages.USE_EMBEDDED_ACTIVITIES,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                    }
                })(),
                flag: T.Permissions.USE_EMBEDDED_ACTIVITIES
            },
            [T.Permissions.USE_SOUNDBOARD.toString()]: {
                title: f.default.Messages.USE_SOUNDBOARD,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                                helpCenterArticle: I.default.getArticleURL(T.HelpdeskArticles.SOUNDBOARD)
                            });
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                                helpCenterArticle: I.default.getArticleURL(T.HelpdeskArticles.SOUNDBOARD)
                            });
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                                helpCenterArticle: I.default.getArticleURL(T.HelpdeskArticles.SOUNDBOARD)
                            })
                    }
                })(),
                flag: T.Permissions.USE_SOUNDBOARD
            },
            [T.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
                title: f.default.Messages.USE_EXTERNAL_SOUNDS,
                description: f.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
                flag: T.Permissions.USE_EXTERNAL_SOUNDS
            },
            [T.Permissions.USE_VAD.toString()]: {
                title: f.default.Messages.USE_VAD,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                    }
                })(),
                flag: T.Permissions.USE_VAD
            },
            [T.Permissions.PRIORITY_SPEAKER.toString()]: {
                title: f.default.Messages.PRIORITY_SPEAKER,
                description: (() => {
                    let e = {
                        keybind: f.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                        onClick: () => {
                            _.default.open(T.UserSettingsSections.KEYBINDS)
                        }
                    };
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
                    }
                })(),
                flag: T.Permissions.PRIORITY_SPEAKER
            },
            [T.Permissions.MUTE_MEMBERS.toString()]: {
                title: f.default.Messages.MUTE_MEMBERS,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: T.Permissions.MUTE_MEMBERS
            },
            [T.Permissions.DEAFEN_MEMBERS.toString()]: {
                title: f.default.Messages.DEAFEN_MEMBERS,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: T.Permissions.DEAFEN_MEMBERS
            },
            [T.Permissions.MOVE_MEMBERS.toString()]: {
                title: f.default.Messages.MOVE_MEMBERS,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return f.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_STAGE_VOICE:
                            return f.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                        case T.ChannelTypes.GUILD_TEXT:
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                    }
                })(),
                flag: T.Permissions.MOVE_MEMBERS
            },
            [T.Permissions.REQUEST_TO_SPEAK.toString()]: {
                title: f.default.Messages.REQUEST_TO_SPEAK,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
                flag: T.Permissions.REQUEST_TO_SPEAK
            },
            [T.Permissions.MANAGE_THREADS.toString()]: {
                title: T.ChannelTypesSets.GUILD_THREADS_ONLY.has(r) ? f.default.Messages.MANAGE_FORUM_POSTS : n && r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.MANAGE_THREADS_AND_FORUM_POSTS : f.default.Messages.MANAGE_THREADS,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return n ? f.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.MANAGE_THREADS
            },
            [T.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
                title: f.default.Messages.CREATE_PUBLIC_THREADS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
                flag: T.Permissions.CREATE_PUBLIC_THREADS
            },
            [T.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
                title: f.default.Messages.CREATE_PRIVATE_THREADS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
                flag: T.Permissions.CREATE_PRIVATE_THREADS
            },
            [T.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
                title: T.ChannelTypesSets.GUILD_THREADS_ONLY.has(r) ? f.default.Messages.SEND_MESSAGES_IN_FORUM_POSTS : n && r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : f.default.Messages.SEND_MESSAGES_IN_THREADS,
                description: (() => {
                    switch (r) {
                        case T.ChannelTypes.GUILD_CATEGORY:
                            return n ? f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                        case T.ChannelTypes.GUILD_FORUM:
                        case T.ChannelTypes.GUILD_MEDIA:
                            return f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                        default:
                            return f.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                    }
                })(),
                flag: T.Permissions.SEND_MESSAGES_IN_THREADS
            },
            [T.Permissions.MANAGE_EVENTS.toString()]: {
                title: f.default.Messages.MANAGE_EVENTS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
                flag: T.Permissions.MANAGE_EVENTS
            },
            [T.Permissions.CREATE_EVENTS.toString()]: {
                title: f.default.Messages.CREATE_EVENTS,
                description: r === T.ChannelTypes.GUILD_CATEGORY ? f.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : f.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
                flag: T.Permissions.CREATE_EVENTS
            },
            [T.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
                title: (null == i ? void 0 : i.inVoiceBgExperiment) ? f.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_TITLE : f.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
                description: (null == i ? void 0 : i.inVoiceBgExperiment) ? f.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_DESCRIPTION : f.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
                flag: T.Permissions.SET_VOICE_CHANNEL_STATUS
            }
        }
    }(a = u || (u = {})).SETTINGS_PAGE = "settings-page", a.MEMBERS_LIST = "members-list", a.EMPTY_STATE = "empty-state", a.CREATE_CHANNEL = "create-channel", (s = d || (d = {})).BASIC = "basic", s.ADVANCED = "advanced"
}