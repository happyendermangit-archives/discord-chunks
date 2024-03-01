function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        XBOX_URL_BASE: function() {
            return d
        },
        XBOX_APP_WEB_LINK: function() {
            return u
        },
        XBOX_LINK_DEST_ORIGIN: function() {
            return l
        },
        XBOX_CLIENT_SCOPES: function() {
            return f
        },
        PLAYSTATION_LINK_DEST_ORIGIN: function() {
            return _
        },
        PLAYSTATION_CLIENT_SCOPES: function() {
            return c
        },
        XBOX_HANDOFF_SEARCH_PARAMS: function() {
            return g
        },
        GameConsoleTypes: function() {
            return s
        },
        GAME_CONSOLE_SESSIONS: function() {
            return m
        },
        GameConsoleCommandResultErrorCodes: function() {
            return i
        },
        USER_ACTION_REQUIRED_ERROR_CODES: function() {
            return h
        },
        GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
            return v
        }
    }), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
    var s, i, r, a, o = n("49111");
    let d = "xbox://communitylinking/donut/audio",
        u = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
        l = "https://login.live.com",
        f = [o.OAuth2Scopes.VOICE, o.OAuth2Scopes.DM_CHANNELS_READ, o.OAuth2Scopes.GUILDS, o.OAuth2Scopes.GUILDS_MEMBERS_READ, o.OAuth2Scopes.IDENTIFY, o.OAuth2Scopes.CONNECTIONS],
        _ = "https://my.account.sony.com",
        c = f,
        g = e => {
            let {
                guildId: t,
                channelName: n,
                guildName: s,
                channelId: i,
                muted: r,
                deafened: a,
                nonce: o
            } = e, d = {
                channelid: i,
                guildid: t,
                channelname: n,
                guildname: s,
                muted: String(r),
                deafened: String(a)
            };
            return null != o && (d.nonce = o), new URLSearchParams(d)
        };
    (r = s || (s = {})).PLAYSTATION = "playstation", r.XBOX = "xbox";
    let m = new Set(["xbox", "playstation"]);
    o.ActivityGamePlatforms.XBOX, o.ActivityGamePlatforms.PS5, (a = i || (i = {}))[a.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", a[a.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", a[a.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", a[a.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", a[a.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", a[a.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", a[a.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", a[a.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
    let h = new Set([27e4]),
        v = "console error alert"
}