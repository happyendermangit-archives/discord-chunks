function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ADVANCED_MODE_ON_KEY: function() {
            return h
        },
        AudienceSelectorSections: function() {
            return s
        },
        MEMBER_REQUEST_COUNT: function() {
            return I
        },
        RowType: function() {
            return u
        },
        getChannelPermissionSpecMap: function() {
            return O
        }
    });
    var r, o, i, a, u, s, l, c, f = n("482644"),
        d = n("656148"),
        _ = n("450597"),
        E = n("481971"),
        p = n("281767"),
        m = n("941504");

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }(r = u || (u = {}))[r.EMPTY_STATE = 0] = "EMPTY_STATE", r[r.ADMINISTRATOR = 1] = "ADMINISTRATOR", r[r.ROLE = 2] = "ROLE", r[r.OWNER = 3] = "OWNER", r[r.MEMBER = 4] = "MEMBER", r[r.USER = 5] = "USER", r[r.GUILD = 6] = "GUILD", (o = s || (s = {}))[o.ROLES = 0] = "ROLES", o[o.MEMBERS = 1] = "MEMBERS", o[o.USERS = 2] = "USERS", o[o.GUILDS = 3] = "GUILDS";
    var I = 20,
        h = "channelPermissionSettingsAdvancedModeOn";

    function O(e, t, n, r) {
        var o, i = e.type;
        return y(o = {}, p.Permissions.VIEW_CHANNEL.toString(), {
            title: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL : m.default.Messages.VIEW_CHANNEL,
            description: function() {
                if (t) switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY_EVERYONE;
                    case p.ChannelTypes.GUILD_VOICE:
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_VOICE_EVERYONE;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_TEXT_EVERYONE
                }
                return i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION_CHANNEL
            }(),
            flag: p.Permissions.VIEW_CHANNEL
        }), y(o, p.Permissions.MANAGE_CHANNELS.toString(), {
            title: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.MANAGE_CHANNELS : m.default.Messages.MANAGE_CHANNEL,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_VOICE;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_STAGE;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_CHANNEL_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.MANAGE_CHANNELS
        }), y(o, p.Permissions.MANAGE_ROLES.toString(), {
            title: m.default.Messages.MANAGE_PERMISSIONS,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_STAGE;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION_CHANNEL
                }
            }(),
            flag: p.Permissions.MANAGE_ROLES
        }), y(o, p.Permissions.MANAGE_WEBHOOKS.toString(), {
            title: m.default.Messages.MANAGE_WEBHOOKS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION_CHANNEL,
            flag: p.Permissions.MANAGE_WEBHOOKS
        }), y(o, p.Permissions.CREATE_INSTANT_INVITE.toString(), {
            title: m.default.Messages.CREATE_INSTANT_INVITE,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_VOICE:
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_VOICE;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.CREATE_INSTANT_INVITE
        }), y(o, p.Permissions.SEND_MESSAGES.toString(), {
            title: p.ChannelTypesSets.GUILD_THREADS_ONLY.has(i) ? m.default.Messages.CREATE_FORUM_POSTS : n && i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : m.default.Messages.SEND_MESSAGES,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return n ? m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_FORUM:
                        return (null == r ? void 0 : r.createPostsDisabled) && !e.isMediaChannel() ? d.default.getForumChannelPermissionText() : m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION_TEXT;
                    case p.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                            articleURL: E.default.getArticleURL(p.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                        });
                    case p.ChannelTypes.GUILD_VOICE:
                        return _.default.getTextInVoiceSendMessageChannelPermissionText(null == r ? void 0 : r.sendMessagesDisabled);
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.SEND_MESSAGES
        }), y(o, p.Permissions.EMBED_LINKS.toString(), {
            title: m.default.Messages.EMBED_LINKS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION_TEXT,
            flag: p.Permissions.EMBED_LINKS
        }), y(o, p.Permissions.ATTACH_FILES.toString(), {
            title: m.default.Messages.ATTACH_FILES,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION_TEXT,
            flag: p.Permissions.ATTACH_FILES
        }), y(o, p.Permissions.ADD_REACTIONS.toString(), {
            title: m.default.Messages.ADD_REACTIONS,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT_WITH_VOICE_CHANNEL_EFFECTS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.ADD_REACTIONS
        }), y(o, p.Permissions.USE_EXTERNAL_EMOJIS.toString(), {
            title: m.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION_TEXT,
            flag: p.Permissions.USE_EXTERNAL_EMOJIS
        }), y(o, p.Permissions.USE_EXTERNAL_STICKERS.toString(), {
            title: m.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION_TEXT,
            flag: p.Permissions.USE_EXTERNAL_STICKERS
        }), y(o, p.Permissions.MENTION_EVERYONE.toString(), {
            title: i === p.ChannelTypes.GUILD_STAGE_VOICE ? m.default.Messages.MENTION_EVERYONE_STAGE : m.default.Messages.MENTION_EVERYONE,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_CATEGORY : i === p.ChannelTypes.GUILD_STAGE_VOICE ? m.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_STAGE : m.default.Messages.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION_TEXT,
            flag: p.Permissions.MENTION_EVERYONE
        }), y(o, p.Permissions.MANAGE_MESSAGES.toString(), {
            title: m.default.Messages.MANAGE_MESSAGES,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_ANNOUNCEMENT:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_ANNOUNCEMENT.format({
                            articleURL: E.default.getArticleURL(p.HelpdeskArticles.ANNOUNCEMENT_CHANNELS)
                        });
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.MANAGE_MESSAGES
        }), y(o, p.Permissions.READ_MESSAGE_HISTORY.toString(), {
            title: p.ChannelTypesSets.GUILD_THREADS_ONLY.has(i) ? m.default.Messages.READ_POST_HISTORY : m.default.Messages.READ_MESSAGE_HISTORY,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_VOICE:
                        return _.default.getTextInVoiceReadMessageHistoryChannelPermissionText(null == r ? void 0 : r.readMessageHistoryDisabled);
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_FORUM_CHANNEL;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.READ_MESSAGE_HISTORY
        }), y(o, p.Permissions.SEND_TTS_MESSAGES.toString(), {
            title: m.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION_TEXT,
            flag: p.Permissions.SEND_TTS_MESSAGES
        }), y(o, p.Permissions.USE_APPLICATION_COMMANDS.toString(), {
            title: m.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_DESCRIPTION_TEXT,
            flag: p.Permissions.USE_APPLICATION_COMMANDS
        }), y(o, p.Permissions.SEND_VOICE_MESSAGES.toString(), {
            title: m.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_SEND_VOICE_MESSAGES_DESCRIPTION_TEXT,
            flag: p.Permissions.SEND_VOICE_MESSAGES
        }), y(o, p.Permissions.USE_CLYDE_AI.toString(), {
            title: m.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION : m.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI_CHANNEL_DESCRIPTION,
            flag: p.Permissions.USE_CLYDE_AI
        }), y(o, p.Permissions.CONNECT.toString(), {
            title: m.default.Messages.CONNECT,
            description: function() {
                if (t) switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY_EVERYONE;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE_EVERYONE;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS_EVERYONE;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE_EVERYONE
                }
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_STAGE;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_THREADS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_CONNECT_DESCRIPTION_VOICE
                }
            }(),
            flag: p.Permissions.CONNECT
        }), y(o, p.Permissions.SPEAK.toString(), {
            title: m.default.Messages.SPEAK,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_STAGE;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_THREADS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_SPEAK_DESCRIPTION_VOICE
                }
            }(),
            flag: p.Permissions.SPEAK
        }), y(o, p.Permissions.STREAM.toString(), {
            title: m.default.Messages.VIDEO,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_THREADS;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_STAGE;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_STREAM_DESCRIPTION_VOICE
                }
            }(),
            flag: p.Permissions.STREAM
        }), y(o, p.Permissions.USE_EMBEDDED_ACTIVITIES.toString(), {
            title: m.default.Messages.USE_EMBEDDED_ACTIVITIES,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_THREADS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION_CHANNEL
                }
            }(),
            flag: p.Permissions.USE_EMBEDDED_ACTIVITIES
        }), y(o, p.Permissions.USE_SOUNDBOARD.toString(), {
            title: m.default.Messages.USE_SOUNDBOARD,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_CATEGORY.format({
                            helpCenterArticle: E.default.getArticleURL(p.HelpdeskArticles.SOUNDBOARD)
                        });
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_THREADS.format({
                            helpCenterArticle: E.default.getArticleURL(p.HelpdeskArticles.SOUNDBOARD)
                        });
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_VOICE.format({
                            helpCenterArticle: E.default.getArticleURL(p.HelpdeskArticles.SOUNDBOARD)
                        })
                }
            }(),
            flag: p.Permissions.USE_SOUNDBOARD
        }), y(o, p.Permissions.USE_EXTERNAL_SOUNDS.toString(), {
            title: m.default.Messages.USE_EXTERNAL_SOUNDS,
            description: m.default.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
            flag: p.Permissions.USE_EXTERNAL_SOUNDS
        }), y(o, p.Permissions.USE_VAD.toString(), {
            title: m.default.Messages.USE_VAD,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_STAGE;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_THREADS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION_VOICE
                }
            }(),
            flag: p.Permissions.USE_VAD
        }), y(o, p.Permissions.PRIORITY_SPEAKER.toString(), {
            title: m.default.Messages.PRIORITY_SPEAKER,
            description: function() {
                var e = {
                    keybind: m.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
                    onClick: function() {
                        f.default.open(p.UserSettingsSections.KEYBINDS)
                    }
                };
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_CATEGORY.format(e);
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_THREADS.format(e);
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_VOICE.format(e)
                }
            }(),
            flag: p.Permissions.PRIORITY_SPEAKER
        }), y(o, p.Permissions.MUTE_MEMBERS.toString(), {
            title: m.default.Messages.MUTE_MEMBERS,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_STAGE;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_THREADS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION_VOICE
                }
            }(),
            flag: p.Permissions.MUTE_MEMBERS
        }), y(o, p.Permissions.DEAFEN_MEMBERS.toString(), {
            title: m.default.Messages.DEAFEN_MEMBERS,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_THREADS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION_VOICE
                }
            }(),
            flag: p.Permissions.DEAFEN_MEMBERS
        }), y(o, p.Permissions.MOVE_MEMBERS.toString(), {
            title: m.default.Messages.MOVE_MEMBERS,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return m.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_STAGE_VOICE:
                        return m.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_STAGE;
                    case p.ChannelTypes.GUILD_TEXT:
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_THREADS;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION_VOICE
                }
            }(),
            flag: p.Permissions.MOVE_MEMBERS
        }), y(o, p.Permissions.REQUEST_TO_SPEAK.toString(), {
            title: m.default.Messages.REQUEST_TO_SPEAK,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION_STAGE,
            flag: p.Permissions.REQUEST_TO_SPEAK
        }), y(o, p.Permissions.MANAGE_THREADS.toString(), {
            title: p.ChannelTypesSets.GUILD_THREADS_ONLY.has(i) ? m.default.Messages.MANAGE_FORUM_POSTS : n && i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.MANAGE_THREADS_AND_FORUM_POSTS : m.default.Messages.MANAGE_THREADS,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return n ? m.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION_TEXT;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.MANAGE_THREADS
        }), y(o, p.Permissions.CREATE_PUBLIC_THREADS.toString(), {
            title: m.default.Messages.CREATE_PUBLIC_THREADS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION_TEXT,
            flag: p.Permissions.CREATE_PUBLIC_THREADS
        }), y(o, p.Permissions.CREATE_PRIVATE_THREADS.toString(), {
            title: m.default.Messages.CREATE_PRIVATE_THREADS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION_TEXT,
            flag: p.Permissions.CREATE_PRIVATE_THREADS
        }), y(o, p.Permissions.SEND_MESSAGES_IN_THREADS.toString(), {
            title: p.ChannelTypesSets.GUILD_THREADS_ONLY.has(i) ? m.default.Messages.SEND_MESSAGES_IN_FORUM_POSTS : n && i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : m.default.Messages.SEND_MESSAGES_IN_THREADS,
            description: function() {
                switch (i) {
                    case p.ChannelTypes.GUILD_CATEGORY:
                        return n ? m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_CATEGORY;
                    case p.ChannelTypes.GUILD_FORUM:
                    case p.ChannelTypes.GUILD_MEDIA:
                        return m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION_TEXT;
                    default:
                        return m.default.Messages.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION_TEXT
                }
            }(),
            flag: p.Permissions.SEND_MESSAGES_IN_THREADS
        }), y(o, p.Permissions.MANAGE_EVENTS.toString(), {
            title: m.default.Messages.MANAGE_EVENTS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION_CHANNEL,
            flag: p.Permissions.MANAGE_EVENTS
        }), y(o, p.Permissions.CREATE_EVENTS.toString(), {
            title: m.default.Messages.CREATE_EVENTS,
            description: i === p.ChannelTypes.GUILD_CATEGORY ? m.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CATEGORY : m.default.Messages.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION_CHANNEL,
            flag: p.Permissions.CREATE_EVENTS
        }), y(o, p.Permissions.SET_VOICE_CHANNEL_STATUS.toString(), {
            title: (null == r ? void 0 : r.inVoiceBgExperiment) ? m.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_TITLE : m.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
            description: (null == r ? void 0 : r.inVoiceBgExperiment) ? m.default.Messages.VOICE_CHANNEL_CUSTOMIZE_PERMISSION_DESCRIPTION : m.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
            flag: p.Permissions.SET_VOICE_CHANNEL_STATUS
        }), o
    }(i = l || (l = {})).SETTINGS_PAGE = "settings-page", i.MEMBERS_LIST = "members-list", i.EMPTY_STATE = "empty-state", i.CREATE_CHANNEL = "create-channel", (a = c || (c = {})).BASIC = "basic", a.ADVANCED = "advanced"
}