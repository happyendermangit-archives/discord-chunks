function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        OrderedPermissions: function() {
            return s
        },
        containsDisallowedPermission: function() {
            return l
        },
        getPermissionName: function() {
            return f
        }
    });
    var r, o = n("22287"),
        i = n("281767"),
        a = n("941504");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = [i.Permissions.ADMINISTRATOR, i.Permissions.MANAGE_GUILD, i.Permissions.MANAGE_ROLES, i.Permissions.MANAGE_CHANNELS, i.Permissions.KICK_MEMBERS, i.Permissions.BAN_MEMBERS, i.Permissions.CREATE_INSTANT_INVITE, i.Permissions.MANAGE_NICKNAMES, i.Permissions.CHANGE_NICKNAME, i.Permissions.MANAGE_GUILD_EXPRESSIONS, i.Permissions.CREATE_GUILD_EXPRESSIONS, i.Permissions.MANAGE_WEBHOOKS, i.Permissions.VIEW_AUDIT_LOG, i.Permissions.VIEW_CHANNEL, i.Permissions.MANAGE_EVENTS, i.Permissions.CREATE_EVENTS, i.Permissions.MODERATE_MEMBERS, i.Permissions.VIEW_GUILD_ANALYTICS, i.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS, i.Permissions.SEND_MESSAGES, i.Permissions.SEND_MESSAGES_IN_THREADS, i.Permissions.CREATE_PUBLIC_THREADS, i.Permissions.CREATE_PRIVATE_THREADS, i.Permissions.SEND_TTS_MESSAGES, i.Permissions.MANAGE_MESSAGES, i.Permissions.MANAGE_THREADS, i.Permissions.EMBED_LINKS, i.Permissions.ATTACH_FILES, i.Permissions.READ_MESSAGE_HISTORY, i.Permissions.MENTION_EVERYONE, i.Permissions.ADD_REACTIONS, i.Permissions.USE_EXTERNAL_EMOJIS, i.Permissions.USE_EXTERNAL_STICKERS, i.Permissions.USE_APPLICATION_COMMANDS, i.Permissions.SEND_VOICE_MESSAGES, i.Permissions.USE_CLYDE_AI, i.Permissions.CONNECT, i.Permissions.SPEAK, i.Permissions.MUTE_MEMBERS, i.Permissions.DEAFEN_MEMBERS, i.Permissions.MOVE_MEMBERS, i.Permissions.USE_VAD, i.Permissions.PRIORITY_SPEAKER, i.Permissions.REQUEST_TO_SPEAK, i.Permissions.STREAM, i.Permissions.USE_EMBEDDED_ACTIVITIES, i.Permissions.USE_SOUNDBOARD, i.Permissions.USE_EXTERNAL_SOUNDS, i.Permissions.SET_VOICE_CHANNEL_STATUS];

    function l(e) {
        return Object.values(i.Permissions).some(function(t) {
            return o.has(e, t) && !s.includes(t)
        })
    }
    var c = (u(r = {}, i.Permissions.ADMINISTRATOR.toString(), function() {
        return a.default.Messages.ADMINISTRATOR
    }), u(r, i.Permissions.MANAGE_GUILD.toString(), function() {
        return a.default.Messages.MANAGE_SERVER
    }), u(r, i.Permissions.MANAGE_ROLES.toString(), function() {
        return a.default.Messages.MANAGE_ROLES
    }), u(r, i.Permissions.MANAGE_CHANNELS.toString(), function() {
        return a.default.Messages.MANAGE_CHANNELS
    }), u(r, i.Permissions.KICK_MEMBERS.toString(), function() {
        return a.default.Messages.KICK_MEMBERS
    }), u(r, i.Permissions.BAN_MEMBERS.toString(), function() {
        return a.default.Messages.BAN_MEMBERS
    }), u(r, i.Permissions.CREATE_INSTANT_INVITE.toString(), function() {
        return a.default.Messages.CREATE_INSTANT_INVITE
    }), u(r, i.Permissions.MANAGE_NICKNAMES.toString(), function() {
        return a.default.Messages.MANAGE_NICKNAMES
    }), u(r, i.Permissions.CHANGE_NICKNAME.toString(), function() {
        return a.default.Messages.CHANGE_NICKNAME
    }), u(r, i.Permissions.MANAGE_GUILD_EXPRESSIONS.toString(), function() {
        return a.default.Messages.MANAGE_EXPRESSIONS
    }), u(r, i.Permissions.CREATE_GUILD_EXPRESSIONS.toString(), function() {
        return a.default.Messages.CREATE_EXPRESSIONS
    }), u(r, i.Permissions.MANAGE_WEBHOOKS.toString(), function() {
        return a.default.Messages.MANAGE_WEBHOOKS
    }), u(r, i.Permissions.VIEW_AUDIT_LOG.toString(), function() {
        return a.default.Messages.VIEW_AUDIT_LOG
    }), u(r, i.Permissions.VIEW_CHANNEL.toString(), function() {
        return a.default.Messages.READ_MESSAGES
    }), u(r, i.Permissions.SEND_MESSAGES.toString(), function() {
        return a.default.Messages.SEND_MESSAGES
    }), u(r, i.Permissions.SEND_TTS_MESSAGES.toString(), function() {
        return a.default.Messages.SEND_TTS_MESSAGES
    }), u(r, i.Permissions.MANAGE_MESSAGES.toString(), function() {
        return a.default.Messages.MANAGE_MESSAGES
    }), u(r, i.Permissions.EMBED_LINKS.toString(), function() {
        return a.default.Messages.EMBED_LINKS
    }), u(r, i.Permissions.ATTACH_FILES.toString(), function() {
        return a.default.Messages.ATTACH_FILES
    }), u(r, i.Permissions.READ_MESSAGE_HISTORY.toString(), function() {
        return a.default.Messages.READ_MESSAGE_HISTORY
    }), u(r, i.Permissions.MENTION_EVERYONE.toString(), function() {
        return a.default.Messages.MENTION_EVERYONE
    }), u(r, i.Permissions.ADD_REACTIONS.toString(), function() {
        return a.default.Messages.ADD_REACTIONS
    }), u(r, i.Permissions.USE_EXTERNAL_EMOJIS.toString(), function() {
        return a.default.Messages.USE_EXTERNAL_EMOJIS
    }), u(r, i.Permissions.USE_EXTERNAL_STICKERS.toString(), function() {
        return a.default.Messages.USE_EXTERNAL_STICKERS
    }), u(r, i.Permissions.USE_APPLICATION_COMMANDS.toString(), function() {
        return a.default.Messages.USE_APPLICATION_COMMANDS
    }), u(r, i.Permissions.SEND_VOICE_MESSAGES.toString(), function() {
        return a.default.Messages.SEND_VOICE_MESSAGE
    }), u(r, i.Permissions.CONNECT.toString(), function() {
        return a.default.Messages.CONNECT
    }), u(r, i.Permissions.SPEAK.toString(), function() {
        return a.default.Messages.SPEAK
    }), u(r, i.Permissions.MUTE_MEMBERS.toString(), function() {
        return a.default.Messages.MUTE_MEMBERS
    }), u(r, i.Permissions.DEAFEN_MEMBERS.toString(), function() {
        return a.default.Messages.DEAFEN_MEMBERS
    }), u(r, i.Permissions.MOVE_MEMBERS.toString(), function() {
        return a.default.Messages.MOVE_MEMBERS
    }), u(r, i.Permissions.USE_VAD.toString(), function() {
        return a.default.Messages.USE_VAD
    }), u(r, i.Permissions.PRIORITY_SPEAKER.toString(), function() {
        return a.default.Messages.PRIORITY_SPEAKER
    }), u(r, i.Permissions.CREATE_PUBLIC_THREADS.toString(), function() {
        return a.default.Messages.CREATE_PUBLIC_THREADS
    }), u(r, i.Permissions.CREATE_PRIVATE_THREADS.toString(), function() {
        return a.default.Messages.CREATE_PRIVATE_THREADS
    }), u(r, i.Permissions.SEND_MESSAGES_IN_THREADS.toString(), function() {
        return a.default.Messages.SEND_MESSAGES_IN_THREADS
    }), u(r, i.Permissions.MANAGE_THREADS.toString(), function() {
        return a.default.Messages.MANAGE_THREADS
    }), u(r, i.Permissions.MANAGE_EVENTS.toString(), function() {
        return a.default.Messages.MANAGE_EVENTS
    }), u(r, i.Permissions.CREATE_EVENTS.toString(), function() {
        return a.default.Messages.CREATE_EVENTS
    }), u(r, i.Permissions.MODERATE_MEMBERS.toString(), function() {
        return a.default.Messages.MODERATE_MEMBERS_PERMISSION_INTERNAL
    }), u(r, i.Permissions.REQUEST_TO_SPEAK.toString(), function() {
        return a.default.Messages.REQUEST_TO_SPEAK
    }), u(r, i.Permissions.VIEW_GUILD_ANALYTICS.toString(), function() {
        return a.default.Messages.VIEW_GUILD_ANALYTICS
    }), u(r, i.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString(), function() {
        return a.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS
    }), u(r, i.Permissions.STREAM.toString(), function() {
        return a.default.Messages.VIDEO
    }), u(r, i.Permissions.USE_EMBEDDED_ACTIVITIES.toString(), function() {
        return a.default.Messages.USE_EMBEDDED_ACTIVITIES
    }), u(r, i.Permissions.USE_SOUNDBOARD.toString(), function() {
        return a.default.Messages.USE_SOUNDBOARD
    }), u(r, i.Permissions.USE_EXTERNAL_SOUNDS.toString(), function() {
        return a.default.Messages.USE_EXTERNAL_SOUNDS
    }), u(r, i.Permissions.USE_CLYDE_AI.toString(), function() {
        return a.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI
    }), u(r, i.Permissions.SET_VOICE_CHANNEL_STATUS.toString(), function() {
        return a.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
    }), r);

    function f(e) {
        var t = c[e.toString()];
        if (null == t) throw Error("Unknown permission. Did you provide a _single_ bit flag? Perm: ".concat(e));
        return t()
    }
}