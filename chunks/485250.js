function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        FAKE_SCOPES: function() {
            return i
        },
        OrderedAccountScopes: function() {
            return a
        },
        RemovedScopes: function() {
            return s
        },
        ValidScopes: function() {
            return u
        },
        getScopeName: function() {
            return l
        },
        getSecurityMessage: function() {
            return c
        }
    });
    var r = n("281767"),
        o = n("941504"),
        i = [function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_1
        }, function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_2
        }, function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_3
        }, function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_4
        }, function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_5
        }, function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_6
        }, function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_7
        }, function() {
            return o.default.Messages.OAUTH2_FAKE_SCOPE_8
        }],
        a = [r.OAuth2Scopes.BOT, r.OAuth2Scopes.IDENTIFY, r.OAuth2Scopes.EMAIL, r.OAuth2Scopes.CONNECTIONS, r.OAuth2Scopes.MESSAGES_READ, r.OAuth2Scopes.GUILDS, r.OAuth2Scopes.GUILDS_JOIN, r.OAuth2Scopes.GUILDS_MEMBERS_READ, r.OAuth2Scopes.GDM_JOIN, r.OAuth2Scopes.RPC, r.OAuth2Scopes.RPC_NOTIFICATIONS_READ, r.OAuth2Scopes.RPC_VOICE_READ, r.OAuth2Scopes.RPC_VOICE_WRITE, r.OAuth2Scopes.RPC_VIDEO_READ, r.OAuth2Scopes.RPC_VIDEO_WRITE, r.OAuth2Scopes.RPC_SCREENSHARE_READ, r.OAuth2Scopes.RPC_SCREENSHARE_WRITE, r.OAuth2Scopes.RPC_ACTIVITIES_WRITE, r.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, r.OAuth2Scopes.APPLICATIONS_BUILDS_READ, r.OAuth2Scopes.APPLICATIONS_COMMANDS, r.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, r.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, r.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, r.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, r.OAuth2Scopes.ACTIVITIES_READ, r.OAuth2Scopes.ACTIVITIES_WRITE, r.OAuth2Scopes.RELATIONSHIPS_READ, r.OAuth2Scopes.VOICE, r.OAuth2Scopes.DM_CHANNELS_READ, r.OAuth2Scopes.ROLE_CONNECTIONS_WRITE],
        u = a.concat([r.OAuth2Scopes.WEBHOOK_INCOMING, r.OAuth2Scopes.BOT]),
        s = ["rpc.api"];

    function l(e, t) {
        switch (e) {
            case r.OAuth2Scopes.IDENTIFY:
                return o.default.Messages.SCOPE_IDENTIFY;
            case r.OAuth2Scopes.EMAIL:
                return o.default.Messages.SCOPE_EMAIL;
            case r.OAuth2Scopes.BOT:
                return o.default.Messages.SCOPE_BOT;
            case r.OAuth2Scopes.CONNECTIONS:
                return o.default.Messages.SCOPE_CONNECTIONS;
            case r.OAuth2Scopes.MESSAGES_READ:
                return o.default.Messages.SCOPE_MESSAGES_READ;
            case r.OAuth2Scopes.GUILDS:
                return o.default.Messages.SCOPE_GUILDS;
            case r.OAuth2Scopes.GUILDS_JOIN:
                return o.default.Messages.SCOPE_GUILDS_JOIN;
            case r.OAuth2Scopes.GUILDS_MEMBERS_READ:
                if (t.includes(r.OAuth2Scopes.VOICE)) return o.default.Messages.SCOPE_GUILDS_MEMBERS_READ_VOICE;
                return o.default.Messages.SCOPE_GUILDS_MEMBERS_READ;
            case r.OAuth2Scopes.GDM_JOIN:
                return o.default.Messages.SCOPE_GDM_JOIN;
            case r.OAuth2Scopes.RPC:
                return o.default.Messages.SCOPE_RPC;
            case r.OAuth2Scopes.RPC_NOTIFICATIONS_READ:
                return o.default.Messages.SCOPE_RPC_NOTIFICATIONS_READ;
            case r.OAuth2Scopes.RPC_VOICE_WRITE:
                return o.default.Messages.SCOPE_RPC_VOICE_WRITE;
            case r.OAuth2Scopes.RPC_VIDEO_READ:
                return o.default.Messages.SCOPE_RPC_VIDEO_READ;
            case r.OAuth2Scopes.RPC_VIDEO_WRITE:
                return o.default.Messages.SCOPE_RPC_VIDEO_WRITE;
            case r.OAuth2Scopes.RPC_SCREENSHARE_READ:
                return o.default.Messages.SCOPE_RPC_SCREENSHARE_READ;
            case r.OAuth2Scopes.RPC_SCREENSHARE_WRITE:
                return o.default.Messages.SCOPE_RPC_SCREENSHARE_WRITE;
            case r.OAuth2Scopes.RPC_VOICE_READ:
                return o.default.Messages.SCOPE_RPC_VOICE_READ;
            case r.OAuth2Scopes.RPC_ACTIVITIES_WRITE:
                return o.default.Messages.SCOPE_RPC_ACTIVITIES_WRITE;
            case r.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD:
                return o.default.Messages.SCOPE_APPLICATIONS_BUILDS_UPLOAD;
            case r.OAuth2Scopes.APPLICATIONS_BUILDS_READ:
                return o.default.Messages.SCOPE_APPLICATIONS_BUILDS_READ;
            case r.OAuth2Scopes.APPLICATIONS_COMMANDS:
                return o.default.Messages.SCOPE_APPLICATIONS_COMMANDS;
            case r.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE:
                return o.default.Messages.SCOPE_APPLICATIONS_COMMANDS_UPDATE;
            case r.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE:
                return o.default.Messages.SCOPE_APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE;
            case r.OAuth2Scopes.APPLICATIONS_STORE_UPDATE:
                return o.default.Messages.SCOPE_APPLICATIONS_STORE_UPDATE;
            case r.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS:
                return o.default.Messages.SCOPE_APPLICATIONS_ENTITLEMENTS;
            case r.OAuth2Scopes.ACTIVITIES_READ:
                return o.default.Messages.SCOPE_ACTIVITIES_READ;
            case r.OAuth2Scopes.ACTIVITIES_WRITE:
                return o.default.Messages.SCOPE_ACTIVITIES_WRITE;
            case r.OAuth2Scopes.RELATIONSHIPS_READ:
                return o.default.Messages.SCOPE_RELATIONSHIPS_READ;
            case r.OAuth2Scopes.VOICE:
                return o.default.Messages.SCOPE_VOICE;
            case r.OAuth2Scopes.DM_CHANNELS_READ:
                return o.default.Messages.SCOPE_DM_CHANNELS_READ;
            case r.OAuth2Scopes.ROLE_CONNECTIONS_WRITE:
                return o.default.Messages.SCOPE_ROLE_CONNECTIONS_WRITE;
            default:
                return e
        }
    }

    function c(e) {
        return e.includes(r.OAuth2Scopes.MESSAGES_READ) ? o.default.Messages.OAUTH2_CAN_READ_NOTICE.format() : o.default.Messages.OAUTH2_CANNOT_READ_SEND_NOTICE.format()
    }
}