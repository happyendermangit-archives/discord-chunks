function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FAKE_SCOPES: function() {
            return r
        },
        OrderedAccountScopes: function() {
            return a
        },
        ValidScopes: function() {
            return o
        },
        RemovedScopes: function() {
            return l
        },
        getScopeName: function() {
            return u
        },
        getSecurityMessage: function() {
            return d
        }
    });
    var i = n("49111"),
        s = n("782340");
    let r = [() => s.default.Messages.OAUTH2_FAKE_SCOPE_1, () => s.default.Messages.OAUTH2_FAKE_SCOPE_2, () => s.default.Messages.OAUTH2_FAKE_SCOPE_3, () => s.default.Messages.OAUTH2_FAKE_SCOPE_4, () => s.default.Messages.OAUTH2_FAKE_SCOPE_5, () => s.default.Messages.OAUTH2_FAKE_SCOPE_6, () => s.default.Messages.OAUTH2_FAKE_SCOPE_7, () => s.default.Messages.OAUTH2_FAKE_SCOPE_8],
        a = [i.OAuth2Scopes.BOT, i.OAuth2Scopes.IDENTIFY, i.OAuth2Scopes.EMAIL, i.OAuth2Scopes.CONNECTIONS, i.OAuth2Scopes.MESSAGES_READ, i.OAuth2Scopes.GUILDS, i.OAuth2Scopes.GUILDS_JOIN, i.OAuth2Scopes.GUILDS_MEMBERS_READ, i.OAuth2Scopes.GDM_JOIN, i.OAuth2Scopes.RPC, i.OAuth2Scopes.RPC_NOTIFICATIONS_READ, i.OAuth2Scopes.RPC_VOICE_READ, i.OAuth2Scopes.RPC_VOICE_WRITE, i.OAuth2Scopes.RPC_VIDEO_READ, i.OAuth2Scopes.RPC_VIDEO_WRITE, i.OAuth2Scopes.RPC_SCREENSHARE_READ, i.OAuth2Scopes.RPC_SCREENSHARE_WRITE, i.OAuth2Scopes.RPC_ACTIVITIES_WRITE, i.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, i.OAuth2Scopes.APPLICATIONS_BUILDS_READ, i.OAuth2Scopes.APPLICATIONS_COMMANDS, i.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, i.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, i.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, i.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, i.OAuth2Scopes.ACTIVITIES_READ, i.OAuth2Scopes.ACTIVITIES_WRITE, i.OAuth2Scopes.RELATIONSHIPS_READ, i.OAuth2Scopes.VOICE, i.OAuth2Scopes.DM_CHANNELS_READ, i.OAuth2Scopes.ROLE_CONNECTIONS_WRITE],
        o = a.concat([i.OAuth2Scopes.WEBHOOK_INCOMING, i.OAuth2Scopes.BOT]),
        l = ["rpc.api"];

    function u(e, t) {
        switch (e) {
            case i.OAuth2Scopes.IDENTIFY:
                return s.default.Messages.SCOPE_IDENTIFY;
            case i.OAuth2Scopes.EMAIL:
                return s.default.Messages.SCOPE_EMAIL;
            case i.OAuth2Scopes.BOT:
                return s.default.Messages.SCOPE_BOT;
            case i.OAuth2Scopes.CONNECTIONS:
                return s.default.Messages.SCOPE_CONNECTIONS;
            case i.OAuth2Scopes.MESSAGES_READ:
                return s.default.Messages.SCOPE_MESSAGES_READ;
            case i.OAuth2Scopes.GUILDS:
                return s.default.Messages.SCOPE_GUILDS;
            case i.OAuth2Scopes.GUILDS_JOIN:
                return s.default.Messages.SCOPE_GUILDS_JOIN;
            case i.OAuth2Scopes.GUILDS_MEMBERS_READ:
                if (t.includes(i.OAuth2Scopes.VOICE)) return s.default.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
                return s.default.Messages.SCOPE_GUILDS_MEMBERS_READ;
            case i.OAuth2Scopes.GDM_JOIN:
                return s.default.Messages.SCOPE_GDM_JOIN;
            case i.OAuth2Scopes.RPC:
                return s.default.Messages.SCOPE_RPC;
            case i.OAuth2Scopes.RPC_NOTIFICATIONS_READ:
                return s.default.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
            case i.OAuth2Scopes.RPC_VOICE_WRITE:
                return s.default.Messages.SCOPE_RPC_VOICE_WRITE;
            case i.OAuth2Scopes.RPC_VIDEO_READ:
                return s.default.Messages.SCOPE_RPC_VIDEO_READ;
            case i.OAuth2Scopes.RPC_VIDEO_WRITE:
                return s.default.Messages.SCOPE_RPC_VIDEO_WRITE;
            case i.OAuth2Scopes.RPC_SCREENSHARE_READ:
                return s.default.Messages.SCOPE_RPC_SCREENSHARE_READ;
            case i.OAuth2Scopes.RPC_SCREENSHARE_WRITE:
                return s.default.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
            case i.OAuth2Scopes.RPC_VOICE_READ:
                return s.default.Messages.SCOPE_RPC_VOICE_READ;
            case i.OAuth2Scopes.RPC_ACTIVITIES_WRITE:
                return s.default.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
            case i.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD:
                return s.default.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
            case i.OAuth2Scopes.APPLICATIONS_BUILDS_READ:
                return s.default.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
            case i.OAuth2Scopes.APPLICATIONS_COMMANDS:
                return s.default.Messages.SCOPE_APPLICATIONS_COMMANDS;
            case i.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE:
                return s.default.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
            case i.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
                return s.default.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
            case i.OAuth2Scopes.APPLICATIONS_STORE_UPDATE:
                return s.default.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
            case i.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS:
                return s.default.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
            case i.OAuth2Scopes.ACTIVITIES_READ:
                return s.default.Messages.SCOPE_ACTIVITIES_READ;
            case i.OAuth2Scopes.ACTIVITIES_WRITE:
                return s.default.Messages.SCOPE_ACTIVITIES_WRITE;
            case i.OAuth2Scopes.RELATIONSHIPS_READ:
                return s.default.Messages.SCOPE_RELATIONSHIPS_READ;
            case i.OAuth2Scopes.VOICE:
                return s.default.Messages.SCOPE_VOICE;
            case i.OAuth2Scopes.DM_CHANNELS_READ:
                return s.default.Messages.SCOPE_DM_CHANNELS_READ;
            case i.OAuth2Scopes.ROLE_CONNECTIONS_WRITE:
                return s.default.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
            default:
                return e
        }
    }

    function d(e) {
        return e.includes(i.OAuth2Scopes.MESSAGES_READ) ? s.default.Messages.OAUTH2_CAN_READ_NOTICE.format() : s.default.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
    }
}