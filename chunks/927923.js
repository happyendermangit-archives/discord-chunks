function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GAME_CONSOLE_ALERT_MODAL_LOCATION: function() {
            return S
        },
        GAME_CONSOLE_SESSIONS: function() {
            return T
        },
        GameConsoleCommandResultErrorCodes: function() {
            return r
        },
        GameConsoleTypes: function() {
            return i
        },
        PLAYSTATION_CLIENT_SCOPES: function() {
            return E
        },
        PLAYSTATION_LINK_DEST_ORIGIN: function() {
            return c
        },
        USER_ACTION_REQUIRED_ERROR_CODES: function() {
            return f
        },
        XBOX_APP_WEB_LINK: function() {
            return u
        },
        XBOX_CLIENT_SCOPES: function() {
            return _
        },
        XBOX_HANDOFF_SEARCH_PARAMS: function() {
            return I
        },
        XBOX_LINK_DEST_ORIGIN: function() {
            return d
        },
        XBOX_URL_BASE: function() {
            return l
        }
    }), n("610138"), n("216116"), n("78328"), n("815648"), n("47120");
    var i, r, s, a, o = n("981631");
    let l = "xbox://communitylinking/donut/audio",
        u = "https://www.xbox.com/en-US/apps/xbox-app-for-mobile",
        d = "https://login.live.com",
        _ = [o.OAuth2Scopes.VOICE, o.OAuth2Scopes.DM_CHANNELS_READ, o.OAuth2Scopes.GUILDS, o.OAuth2Scopes.GUILDS_MEMBERS_READ, o.OAuth2Scopes.IDENTIFY, o.OAuth2Scopes.CONNECTIONS],
        c = "https://my.account.sony.com",
        E = _,
        I = e => {
            let {
                guildId: t,
                channelName: n,
                guildName: i,
                channelId: r,
                muted: s,
                deafened: a,
                nonce: o
            } = e, l = {
                channelid: r,
                guildid: t,
                channelname: n,
                guildname: i,
                muted: String(s),
                deafened: String(a)
            };
            return null != o && (l.nonce = o), new URLSearchParams(l)
        };
    (s = i || (i = {})).PLAYSTATION = "playstation", s.XBOX = "xbox";
    let T = new Set(["xbox", "playstation"]);
    o.ActivityGamePlatforms.XBOX, o.ActivityGamePlatforms.PS5, (a = r || (r = {}))[a.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED = 27e4] = "CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED", a[a.CONSOLE_DEVICE_UNAVAILABLE = 270001] = "CONSOLE_DEVICE_UNAVAILABLE", a[a.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS = 270002] = "CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS", a[a.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED = 270003] = "CONSOLE_DEVICE_COMMUNICATION_RESTRICTED", a[a.CONSOLE_DEVICE_INVALID_POWER_MODE = 270004] = "CONSOLE_DEVICE_INVALID_POWER_MODE", a[a.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR = 270005] = "CONSOLE_DEVICE_ACCOUNT_LINK_ERROR", a[a.CONSOLE_DEVICE_MAX_MEMBERS_REACHED = 270006] = "CONSOLE_DEVICE_MAX_MEMBERS_REACHED", a[a.CONSOLE_DEVICE_BAD_COMMAND = 270007] = "CONSOLE_DEVICE_BAD_COMMAND";
    let f = new Set([27e4]),
        S = "console error alert"
}