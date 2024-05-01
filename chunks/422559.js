function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OrderedPermissions: function() {
            return a
        },
        containsDisallowedPermission: function() {
            return o
        },
        getPermissionName: function() {
            return u
        }
    }), n("411104");
    var i = n("149765"),
        r = n("981631"),
        s = n("689938");
    let a = [r.Permissions.ADMINISTRATOR, r.Permissions.MANAGE_GUILD, r.Permissions.MANAGE_ROLES, r.Permissions.MANAGE_CHANNELS, r.Permissions.KICK_MEMBERS, r.Permissions.BAN_MEMBERS, r.Permissions.CREATE_INSTANT_INVITE, r.Permissions.MANAGE_NICKNAMES, r.Permissions.CHANGE_NICKNAME, r.Permissions.MANAGE_GUILD_EXPRESSIONS, r.Permissions.CREATE_GUILD_EXPRESSIONS, r.Permissions.MANAGE_WEBHOOKS, r.Permissions.VIEW_AUDIT_LOG, r.Permissions.VIEW_CHANNEL, r.Permissions.MANAGE_EVENTS, r.Permissions.CREATE_EVENTS, r.Permissions.MODERATE_MEMBERS, r.Permissions.VIEW_GUILD_ANALYTICS, r.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, r.Permissions.SEND_MESSAGES, r.Permissions.SEND_MESSAGES_IN_THREADS, r.Permissions.CREATE_PUBLIC_THREADS, r.Permissions.CREATE_PRIVATE_THREADS, r.Permissions.SEND_TTS_MESSAGES, r.Permissions.MANAGE_MESSAGES, r.Permissions.MANAGE_THREADS, r.Permissions.EMBED_LINKS, r.Permissions.ATTACH_FILES, r.Permissions.READ_MESSAGE_HISTORY, r.Permissions.MENTION_EVERYONE, r.Permissions.ADD_REACTIONS, r.Permissions.USE_EXTERNAL_EMOJIS, r.Permissions.USE_EXTERNAL_STICKERS, r.Permissions.USE_APPLICATION_COMMANDS, r.Permissions.SEND_VOICE_MESSAGES, r.Permissions.USE_CLYDE_AI, r.Permissions.SEND_POLLS, r.Permissions.CONNECT, r.Permissions.SPEAK, r.Permissions.MUTE_MEMBERS, r.Permissions.DEAFEN_MEMBERS, r.Permissions.MOVE_MEMBERS, r.Permissions.USE_VAD, r.Permissions.PRIORITY_SPEAKER, r.Permissions.REQUEST_TO_SPEAK, r.Permissions.STREAM, r.Permissions.USE_EMBEDDED_ACTIVITIES, r.Permissions.USE_SOUNDBOARD, r.Permissions.USE_EXTERNAL_SOUNDS, r.Permissions.SET_VOICE_CHANNEL_STATUS];

    function o(e) {
        return Object.values(r.Permissions).some(t => i.has(e, t) && !a.includes(t))
    }
    let l = {
        [r.Permissions.ADMINISTRATOR.toString()]: () => s.default.Messages.ADMINISTRATOR,
        [r.Permissions.MANAGE_GUILD.toString()]: () => s.default.Messages.MANAGE_SERVER,
        [r.Permissions.MANAGE_ROLES.toString()]: () => s.default.Messages.MANAGE_ROLES,
        [r.Permissions.MANAGE_CHANNELS.toString()]: () => s.default.Messages.MANAGE_CHANNELS,
        [r.Permissions.KICK_MEMBERS.toString()]: () => s.default.Messages.KICK_MEMBERS,
        [r.Permissions.BAN_MEMBERS.toString()]: () => s.default.Messages.BAN_MEMBERS,
        [r.Permissions.CREATE_INSTANT_INVITE.toString()]: () => s.default.Messages.CREATE_INSTANT_INVITE,
        [r.Permissions.MANAGE_NICKNAMES.toString()]: () => s.default.Messages.MANAGE_NICKNAMES,
        [r.Permissions.CHANGE_NICKNAME.toString()]: () => s.default.Messages.CHANGE_NICKNAME,
        [r.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => s.default.Messages.MANAGE_EXPRESSIONS,
        [r.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => s.default.Messages.CREATE_EXPRESSIONS,
        [r.Permissions.MANAGE_WEBHOOKS.toString()]: () => s.default.Messages.MANAGE_WEBHOOKS,
        [r.Permissions.VIEW_AUDIT_LOG.toString()]: () => s.default.Messages.VIEW_AUDIT_LOG,
        [r.Permissions.VIEW_CHANNEL.toString()]: () => s.default.Messages.READ_MESSAGES,
        [r.Permissions.SEND_MESSAGES.toString()]: () => s.default.Messages.SEND_MESSAGES,
        [r.Permissions.SEND_TTS_MESSAGES.toString()]: () => s.default.Messages.SEND_TTS_MESSAGES,
        [r.Permissions.MANAGE_MESSAGES.toString()]: () => s.default.Messages.MANAGE_MESSAGES,
        [r.Permissions.EMBED_LINKS.toString()]: () => s.default.Messages.EMBED_LINKS,
        [r.Permissions.ATTACH_FILES.toString()]: () => s.default.Messages.ATTACH_FILES,
        [r.Permissions.READ_MESSAGE_HISTORY.toString()]: () => s.default.Messages.READ_MESSAGE_HISTORY,
        [r.Permissions.MENTION_EVERYONE.toString()]: () => s.default.Messages.MENTION_EVERYONE,
        [r.Permissions.ADD_REACTIONS.toString()]: () => s.default.Messages.ADD_REACTIONS,
        [r.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => s.default.Messages.USE_EXTERNAL_EMOJIS,
        [r.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => s.default.Messages.USE_EXTERNAL_STICKERS,
        [r.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => s.default.Messages.USE_APPLICATION_COMMANDS,
        [r.Permissions.SEND_VOICE_MESSAGES.toString()]: () => s.default.Messages.SEND_VOICE_MESSAGE,
        [r.Permissions.CONNECT.toString()]: () => s.default.Messages.CONNECT,
        [r.Permissions.SPEAK.toString()]: () => s.default.Messages.SPEAK,
        [r.Permissions.MUTE_MEMBERS.toString()]: () => s.default.Messages.MUTE_MEMBERS,
        [r.Permissions.DEAFEN_MEMBERS.toString()]: () => s.default.Messages.DEAFEN_MEMBERS,
        [r.Permissions.MOVE_MEMBERS.toString()]: () => s.default.Messages.MOVE_MEMBERS,
        [r.Permissions.USE_VAD.toString()]: () => s.default.Messages.USE_VAD,
        [r.Permissions.PRIORITY_SPEAKER.toString()]: () => s.default.Messages.PRIORITY_SPEAKER,
        [r.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => s.default.Messages.CREATE_PUBLIC_THREADS,
        [r.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => s.default.Messages.CREATE_PRIVATE_THREADS,
        [r.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => s.default.Messages.SEND_MESSAGES_IN_THREADS,
        [r.Permissions.MANAGE_THREADS.toString()]: () => s.default.Messages.MANAGE_THREADS,
        [r.Permissions.MANAGE_EVENTS.toString()]: () => s.default.Messages.MANAGE_EVENTS,
        [r.Permissions.CREATE_EVENTS.toString()]: () => s.default.Messages.CREATE_EVENTS,
        [r.Permissions.MODERATE_MEMBERS.toString()]: () => s.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
        [r.Permissions.REQUEST_TO_SPEAK.toString()]: () => s.default.Messages.REQUEST_TO_SPEAK,
        [r.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => s.default.Messages.VIEW_GUILD_ANALYTICS,
        [r.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => s.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        [r.Permissions.STREAM.toString()]: () => s.default.Messages.VIDEO,
        [r.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => s.default.Messages.USE_EMBEDDED_ACTIVITIES,
        [r.Permissions.USE_SOUNDBOARD.toString()]: () => s.default.Messages.USE_SOUNDBOARD,
        [r.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => s.default.Messages.USE_EXTERNAL_SOUNDS,
        [r.Permissions.USE_CLYDE_AI.toString()]: () => s.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
        [r.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => s.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
        [r.Permissions.SEND_POLLS.toString()]: () => s.default.Messages.ROLE_PERMISSIONS_SEND_POLLS
    };

    function u(e) {
        let t = l[e.toString()];
        if (null == t) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
        return t()
    }
}