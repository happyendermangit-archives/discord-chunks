function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
            return y
        },
        GAME_CONSOLE_SESSIONS: function() {
            return p
        },
        GameConsoleCommandResultErrorCodes: function() {
            return a
        },
        GameConsoleTypes: function() {
            return i
        },
        PLAYSTATION_CLIENT_SCOPES: function() {
            return _
        },
        PLAYSTATION_LINK_DEST_ORIGIN: function() {
            return d
        },
        USER_ACTION_REQUIRED_ERROR_CODES: function() {
            return m
        },
        XBOX_APP_WEB_LINK: function() {
            return l
        },
        XBOX_CLIENT_SCOPES: function() {
            return f
        },
        XBOX_HANDOFF_SEARCH_PARAMS: function() {
            return E
        },
        XBOX_LINK_DEST_ORIGIN: function() {
            return c
        },
        XBOX_URL_BASE: function() {
            return s
        }
    });
    var r, o, i, a, u = n("281767"),
        s = "xbox://communitylinking/donut/audio",
        l = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
        c = "https://login.live.com",
        f = [u.OAuth2Scopes.VOICE, u.OAuth2Scopes.DM_CHANNELS_READ, u.OAuth2Scopes.GUILDS, u.OAuth2Scopes.GUILDS_MEMBERS_READ, u.OAuth2Scopes.IDENTIFY, u.OAuth2Scopes.CONNECTIONS],
        d = "https://my.account.sony.com",
        _ = f,
        E = function(e) {
            var t = e.guildId,
                n = e.channelName,
                r = e.guildName,
                o = e.channelId,
                i = e.muted,
                a = e.deafened,
                u = e.nonce,
                s = {
                    channelid: o,
                    guildid: t,
                    channelname: n,
                    guildname: r,
                    muted: String(i),
                    deafened: String(a)
                };
            return null != u && (s.nonce = u), new URLSearchParams(s)
        };
    (r = i || (i = {})).PLAYSTATION = "playstation", r.XBOX = "xbox";
    var p = new Set(["xbox", "playstation"]);
    u.ActivityGamePlatforms.XBOX, u.ActivityGamePlatforms.PS5, (o = a || (a = {}))[o.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", o[o.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", o[o.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", o[o.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", o[o.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", o[o.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", o[o.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", o[o.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
    var m = new Set([27e4]),
        y = "console error alert"
}