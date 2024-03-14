function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        XBOX_URL_BASE: function() {
            return l
        },
        XBOX_APP_WEB_LINK: function() {
            return u
        },
        XBOX_LINK_DEST_ORIGIN: function() {
            return d
        },
        XBOX_CLIENT_SCOPES: function() {
            return c
        },
        PLAYSTATION_LINK_DEST_ORIGIN: function() {
            return f
        },
        PLAYSTATION_CLIENT_SCOPES: function() {
            return _
        },
        XBOX_HANDOFF_SEARCH_PARAMS: function() {
            return h
        },
        GameConsoleTypes: function() {
            return i
        },
        GAME_CONSOLE_SESSIONS: function() {
            return E
        },
        GameConsoleCommandResultErrorCodes: function() {
            return s
        },
        USER_ACTION_REQUIRED_ERROR_CODES: function() {
            return g
        },
        GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
            return m
        }
    }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var i, s, r, a, o = n("49111");
    let l = "xbox://communitylinking/donut/audio",
        u = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
        d = "https://login.live.com",
        c = [o.OAuth2Scopes.VOICE, o.OAuth2Scopes.DM_CHANNELS_READ, o.OAuth2Scopes.GUILDS, o.OAuth2Scopes.GUILDS_MEMBERS_READ, o.OAuth2Scopes.IDENTIFY, o.OAuth2Scopes.CONNECTIONS],
        f = "https://my.account.sony.com",
        _ = c,
        h = e => {
            let {
                guildId: t,
                channelName: n,
                guildName: i,
                channelId: s,
                muted: r,
                deafened: a,
                nonce: o
            } = e, l = {
                channelid: s,
                guildid: t,
                channelname: n,
                guildname: i,
                muted: String(r),
                deafened: String(a)
            };
            return null != o && (l.nonce = o), new URLSearchParams(l)
        };
    (r = i || (i = {})).PLAYSTATION = "playstation", r.XBOX = "xbox";
    let E = new Set(["xbox", "playstation"]);
    o.ActivityGamePlatforms.XBOX, o.ActivityGamePlatforms.PS5, (a = s || (s = {}))[a.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", a[a.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", a[a.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", a[a.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", a[a.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", a[a.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", a[a.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", a[a.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
    let g = new Set([27e4]),
        m = "console error alert"
}