function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FAKE_SCOPES: function() {
            return a
        },
        OrderedAccountScopes: function() {
            return s
        },
        RemovedScopes: function() {
            return l
        },
        ValidScopes: function() {
            return o
        },
        getScopeName: function() {
            return u
        },
        getSecurityMessage: function() {
            return d
        }
    });
    var i = n("981631"),
        r = n("689938");
    let a = [() => r.default.Messages.OAUTH2_FAKE_SCOPE_1, () => r.default.Messages.OAUTH2_FAKE_SCOPE_2, () => r.default.Messages.OAUTH2_FAKE_SCOPE_3, () => r.default.Messages.OAUTH2_FAKE_SCOPE_4, () => r.default.Messages.OAUTH2_FAKE_SCOPE_5, () => r.default.Messages.OAUTH2_FAKE_SCOPE_6, () => r.default.Messages.OAUTH2_FAKE_SCOPE_7, () => r.default.Messages.OAUTH2_FAKE_SCOPE_8],
        s = [i.OAuth2Scopes.BOT, i.OAuth2Scopes.OPENID, i.OAuth2Scopes.IDENTIFY, i.OAuth2Scopes.EMAIL, i.OAuth2Scopes.CONNECTIONS, i.OAuth2Scopes.MESSAGES_READ, i.OAuth2Scopes.GUILDS, i.OAuth2Scopes.GUILDS_JOIN, i.OAuth2Scopes.GUILDS_MEMBERS_READ, i.OAuth2Scopes.GDM_JOIN, i.OAuth2Scopes.RPC, i.OAuth2Scopes.RPC_NOTIFICATIONS_READ, i.OAuth2Scopes.RPC_VOICE_READ, i.OAuth2Scopes.RPC_VOICE_WRITE, i.OAuth2Scopes.RPC_VIDEO_READ, i.OAuth2Scopes.RPC_VIDEO_WRITE, i.OAuth2Scopes.RPC_SCREENSHARE_READ, i.OAuth2Scopes.RPC_SCREENSHARE_WRITE, i.OAuth2Scopes.RPC_ACTIVITIES_WRITE, i.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, i.OAuth2Scopes.APPLICATIONS_BUILDS_READ, i.OAuth2Scopes.APPLICATIONS_COMMANDS, i.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, i.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, i.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, i.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, i.OAuth2Scopes.ACTIVITIES_READ, i.OAuth2Scopes.ACTIVITIES_WRITE, i.OAuth2Scopes.RELATIONSHIPS_READ, i.OAuth2Scopes.RELATIONSHIPS_WRITE, i.OAuth2Scopes.VOICE, i.OAuth2Scopes.DM_CHANNELS_READ, i.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ, i.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, i.OAuth2Scopes.ROLE_CONNECTIONS_WRITE, i.OAuth2Scopes.PRESENCES_READ, i.OAuth2Scopes.PRESENCES_WRITE],
        o = s.concat([i.OAuth2Scopes.WEBHOOK_INCOMING, i.OAuth2Scopes.BOT]),
        l = ["rpc.api"];

    function u(e, t) {
        switch (e) {
            case i.OAuth2Scopes.IDENTIFY:
                return r.default.Messages.SCOPE_IDENTIFY;
            case i.OAuth2Scopes.OPENID:
                return r.default.Messages.SCOPE_OPENID;
            case i.OAuth2Scopes.EMAIL:
                return r.default.Messages.SCOPE_EMAIL;
            case i.OAuth2Scopes.BOT:
                return r.default.Messages.SCOPE_BOT;
            case i.OAuth2Scopes.CONNECTIONS:
                return r.default.Messages.SCOPE_CONNECTIONS;
            case i.OAuth2Scopes.MESSAGES_READ:
                return r.default.Messages.SCOPE_MESSAGES_READ;
            case i.OAuth2Scopes.GUILDS:
                return r.default.Messages.SCOPE_GUILDS;
            case i.OAuth2Scopes.GUILDS_JOIN:
                return r.default.Messages.SCOPE_GUILDS_JOIN;
            case i.OAuth2Scopes.GUILDS_MEMBERS_READ:
                if (t.includes(i.OAuth2Scopes.VOICE)) return r.default.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
                return r.default.Messages.SCOPE_GUILDS_MEMBERS_READ;
            case i.OAuth2Scopes.GDM_JOIN:
                return r.default.Messages.SCOPE_GDM_JOIN;
            case i.OAuth2Scopes.RPC:
                return r.default.Messages.SCOPE_RPC;
            case i.OAuth2Scopes.RPC_NOTIFICATIONS_READ:
                return r.default.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
            case i.OAuth2Scopes.RPC_VOICE_WRITE:
                return r.default.Messages.SCOPE_RPC_VOICE_WRITE;
            case i.OAuth2Scopes.RPC_VIDEO_READ:
                return r.default.Messages.SCOPE_RPC_VIDEO_READ;
            case i.OAuth2Scopes.RPC_VIDEO_WRITE:
                return r.default.Messages.SCOPE_RPC_VIDEO_WRITE;
            case i.OAuth2Scopes.RPC_SCREENSHARE_READ:
                return r.default.Messages.SCOPE_RPC_SCREENSHARE_READ;
            case i.OAuth2Scopes.RPC_SCREENSHARE_WRITE:
                return r.default.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
            case i.OAuth2Scopes.RPC_VOICE_READ:
                return r.default.Messages.SCOPE_RPC_VOICE_READ;
            case i.OAuth2Scopes.RPC_ACTIVITIES_WRITE:
                return r.default.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
            case i.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD:
                return r.default.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
            case i.OAuth2Scopes.APPLICATIONS_BUILDS_READ:
                return r.default.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
            case i.OAuth2Scopes.APPLICATIONS_COMMANDS:
                return r.default.Messages.SCOPE_APPLICATIONS_COMMANDS;
            case i.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE:
                return r.default.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
            case i.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
                return r.default.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
            case i.OAuth2Scopes.APPLICATIONS_STORE_UPDATE:
                return r.default.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
            case i.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS:
                return r.default.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
            case i.OAuth2Scopes.ACTIVITIES_READ:
                return r.default.Messages.SCOPE_ACTIVITIES_READ;
            case i.OAuth2Scopes.ACTIVITIES_WRITE:
                return r.default.Messages.SCOPE_ACTIVITIES_WRITE;
            case i.OAuth2Scopes.RELATIONSHIPS_READ:
                return r.default.Messages.SCOPE_RELATIONSHIPS_READ;
            case i.OAuth2Scopes.VOICE:
                return r.default.Messages.SCOPE_VOICE;
            case i.OAuth2Scopes.DM_CHANNELS_READ:
                return r.default.Messages.SCOPE_DM_CHANNELS_READ;
            case i.OAuth2Scopes.ROLE_CONNECTIONS_WRITE:
                return r.default.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
            default:
                return e
        }
    }

    function d(e) {
        return e.includes(i.OAuth2Scopes.MESSAGES_READ) ? r.default.Messages.OAUTH2_CAN_READ_NOTICE.format() : r.default.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
    }
}