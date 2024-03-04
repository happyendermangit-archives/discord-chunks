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
    }), n("70102");
    var i = n("316693"),
        s = n("49111"),
        r = n("782340");
    let a = [s.Permissions.ADMINISTRATOR, s.Permissions.MANAGE_GUILD, s.Permissions.MANAGE_ROLES, s.Permissions.MANAGE_CHANNELS, s.Permissions.KICK_MEMBERS, s.Permissions.BAN_MEMBERS, s.Permissions.CREATE_INSTANT_INVITE, s.Permissions.MANAGE_NICKNAMES, s.Permissions.CHANGE_NICKNAME, s.Permissions.MANAGE_GUILD_EXPRESSIONS, s.Permissions.CREATE_GUILD_EXPRESSIONS, s.Permissions.MANAGE_WEBHOOKS, s.Permissions.VIEW_AUDIT_LOG, s.Permissions.VIEW_CHANNEL, s.Permissions.MANAGE_EVENTS, s.Permissions.CREATE_EVENTS, s.Permissions.MODERATE_MEMBERS, s.Permissions.VIEW_GUILD_ANALYTICS, s.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, s.Permissions.SEND_MESSAGES, s.Permissions.SEND_MESSAGES_IN_THREADS, s.Permissions.CREATE_PUBLIC_THREADS, s.Permissions.CREATE_PRIVATE_THREADS, s.Permissions.SEND_TTS_MESSAGES, s.Permissions.MANAGE_MESSAGES, s.Permissions.MANAGE_THREADS, s.Permissions.EMBED_LINKS, s.Permissions.ATTACH_FILES, s.Permissions.READ_MESSAGE_HISTORY, s.Permissions.MENTION_EVERYONE, s.Permissions.ADD_REACTIONS, s.Permissions.USE_EXTERNAL_EMOJIS, s.Permissions.USE_EXTERNAL_STICKERS, s.Permissions.USE_APPLICATION_COMMANDS, s.Permissions.SEND_VOICE_MESSAGES, s.Permissions.USE_CLYDE_AI, s.Permissions.CONNECT, s.Permissions.SPEAK, s.Permissions.MUTE_MEMBERS, s.Permissions.DEAFEN_MEMBERS, s.Permissions.MOVE_MEMBERS, s.Permissions.USE_VAD, s.Permissions.PRIORITY_SPEAKER, s.Permissions.REQUEST_TO_SPEAK, s.Permissions.STREAM, s.Permissions.USE_EMBEDDED_ACTIVITIES, s.Permissions.USE_SOUNDBOARD, s.Permissions.USE_EXTERNAL_SOUNDS, s.Permissions.SET_VOICE_CHANNEL_STATUS];

    function o(e) {
        return Object.values(s.Permissions).some(t => i.default.has(e, t) && !a.includes(t))
    }
    let l = {
        [s.Permissions.ADMINISTRATOR.toString()]: () => r.default.Messages.ADMINISTRATOR,
        [s.Permissions.MANAGE_GUILD.toString()]: () => r.default.Messages.MANAGE_SERVER,
        [s.Permissions.MANAGE_ROLES.toString()]: () => r.default.Messages.MANAGE_ROLES,
        [s.Permissions.MANAGE_CHANNELS.toString()]: () => r.default.Messages.MANAGE_CHANNELS,
        [s.Permissions.KICK_MEMBERS.toString()]: () => r.default.Messages.KICK_MEMBERS,
        [s.Permissions.BAN_MEMBERS.toString()]: () => r.default.Messages.BAN_MEMBERS,
        [s.Permissions.CREATE_INSTANT_INVITE.toString()]: () => r.default.Messages.CREATE_INSTANT_INVITE,
        [s.Permissions.MANAGE_NICKNAMES.toString()]: () => r.default.Messages.MANAGE_NICKNAMES,
        [s.Permissions.CHANGE_NICKNAME.toString()]: () => r.default.Messages.CHANGE_NICKNAME,
        [s.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: () => r.default.Messages.MANAGE_EXPRESSIONS,
        [s.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: () => r.default.Messages.CREATE_EXPRESSIONS,
        [s.Permissions.MANAGE_WEBHOOKS.toString()]: () => r.default.Messages.MANAGE_WEBHOOKS,
        [s.Permissions.VIEW_AUDIT_LOG.toString()]: () => r.default.Messages.VIEW_AUDIT_LOG,
        [s.Permissions.VIEW_CHANNEL.toString()]: () => r.default.Messages.READ_MESSAGES,
        [s.Permissions.SEND_MESSAGES.toString()]: () => r.default.Messages.SEND_MESSAGES,
        [s.Permissions.SEND_TTS_MESSAGES.toString()]: () => r.default.Messages.SEND_TTS_MESSAGES,
        [s.Permissions.MANAGE_MESSAGES.toString()]: () => r.default.Messages.MANAGE_MESSAGES,
        [s.Permissions.EMBED_LINKS.toString()]: () => r.default.Messages.EMBED_LINKS,
        [s.Permissions.ATTACH_FILES.toString()]: () => r.default.Messages.ATTACH_FILES,
        [s.Permissions.READ_MESSAGE_HISTORY.toString()]: () => r.default.Messages.READ_MESSAGE_HISTORY,
        [s.Permissions.MENTION_EVERYONE.toString()]: () => r.default.Messages.MENTION_EVERYONE,
        [s.Permissions.ADD_REACTIONS.toString()]: () => r.default.Messages.ADD_REACTIONS,
        [s.Permissions.USE_EXTERNAL_EMOJIS.toString()]: () => r.default.Messages.USE_EXTERNAL_EMOJIS,
        [s.Permissions.USE_EXTERNAL_STICKERS.toString()]: () => r.default.Messages.USE_EXTERNAL_STICKERS,
        [s.Permissions.USE_APPLICATION_COMMANDS.toString()]: () => r.default.Messages.USE_APPLICATION_COMMANDS,
        [s.Permissions.SEND_VOICE_MESSAGES.toString()]: () => r.default.Messages.SEND_VOICE_MESSAGE,
        [s.Permissions.CONNECT.toString()]: () => r.default.Messages.CONNECT,
        [s.Permissions.SPEAK.toString()]: () => r.default.Messages.SPEAK,
        [s.Permissions.MUTE_MEMBERS.toString()]: () => r.default.Messages.MUTE_MEMBERS,
        [s.Permissions.DEAFEN_MEMBERS.toString()]: () => r.default.Messages.DEAFEN_MEMBERS,
        [s.Permissions.MOVE_MEMBERS.toString()]: () => r.default.Messages.MOVE_MEMBERS,
        [s.Permissions.USE_VAD.toString()]: () => r.default.Messages.USE_VAD,
        [s.Permissions.PRIORITY_SPEAKER.toString()]: () => r.default.Messages.PRIORITY_SPEAKER,
        [s.Permissions.CREATE_PUBLIC_THREADS.toString()]: () => r.default.Messages.CREATE_PUBLIC_THREADS,
        [s.Permissions.CREATE_PRIVATE_THREADS.toString()]: () => r.default.Messages.CREATE_PRIVATE_THREADS,
        [s.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: () => r.default.Messages.SEND_MESSAGES_IN_THREADS,
        [s.Permissions.MANAGE_THREADS.toString()]: () => r.default.Messages.MANAGE_THREADS,
        [s.Permissions.MANAGE_EVENTS.toString()]: () => r.default.Messages.MANAGE_EVENTS,
        [s.Permissions.CREATE_EVENTS.toString()]: () => r.default.Messages.CREATE_EVENTS,
        [s.Permissions.MODERATE_MEMBERS.toString()]: () => r.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL,
        [s.Permissions.REQUEST_TO_SPEAK.toString()]: () => r.default.Messages.REQUEST_TO_SPEAK,
        [s.Permissions.VIEW_GUILD_ANALYTICS.toString()]: () => r.default.Messages.VIEW_GUILD_ANALYTICS,
        [s.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: () => r.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS,
        [s.Permissions.STREAM.toString()]: () => r.default.Messages.VIDEO,
        [s.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: () => r.default.Messages.USE_EMBEDDED_ACTIVITIES,
        [s.Permissions.USE_SOUNDBOARD.toString()]: () => r.default.Messages.USE_SOUNDBOARD,
        [s.Permissions.USE_EXTERNAL_SOUNDS.toString()]: () => r.default.Messages.USE_EXTERNAL_SOUNDS,
        [s.Permissions.USE_CLYDE_AI.toString()]: () => r.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI,
        [s.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: () => r.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
    };

    function u(e) {
        let t = e.toString(),
            n = l[t];
        if (null == n) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
        return n()
    }
}