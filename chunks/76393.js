function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("446674"),
        s = n("913144"),
        r = n("235660"),
        a = n("800762");
    let o = null,
        l = null,
        u = new Set,
        d = {},
        c = {},
        _ = new Set,
        f = Object.freeze({});
    class E extends i.default.DeviceSettingsStore {
        initialize(e) {
            null != e && (c = e.lastSelectedDeviceByPlatform), this.waitFor(r.default, a.default)
        }
        getUserAgnosticState() {
            return {
                lastSelectedDeviceByPlatform: c
            }
        }
        getDevicesForPlatform(e) {
            var t;
            return null !== (t = d[e]) && void 0 !== t ? t : f
        }
        getLastSelectedDeviceByPlatform(e) {
            return c[e]
        }
        getDevice(e, t) {
            var n;
            return null === (n = d[e]) || void 0 === n ? void 0 : n[t]
        }
        getFetchingDevices(e) {
            return _.has(e)
        }
        getPendingDeviceCommands() {
            return u
        }
        getRemoteSessionId() {
            return o
        }
        getAwaitingRemoteSessionInfo() {
            return l
        }
    }
    E.displayName = "GameConsoleStore", E.persistKey = "GameConsoleStore";
    var h = new E(s.default, {
        REMOTE_SESSION_CONNECT: function(e) {
            let {
                sessionId: t
            } = e;
            o = t, l = null
        },
        REMOTE_SESSION_DISCONNECT: function() {
            o = null, l = null
        },
        WAIT_FOR_REMOTE_SESSION: function(e) {
            let {
                sessionType: t,
                nonce: n,
                channelId: i,
                deviceId: s,
                commandId: r
            } = e;
            l = {
                type: t,
                nonce: n,
                channelId: i,
                startedAt: Date.now(),
                deviceId: s,
                commandId: r
            }
        },
        GAME_CONSOLE_FETCH_DEVICES_START: function(e) {
            let {
                platform: t
            } = e;
            _.add(t)
        },
        GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function(e) {
            let {
                platform: t,
                devices: n
            } = e;
            _.delete(t);
            let i = d[t] = {},
                s = {};
            for (let e of n) i[e.id] = e, c[t] === e.id && (s[t] = e.id);
            c = s
        },
        GAME_CONSOLE_FETCH_DEVICES_FAIL: function(e) {
            let {
                platform: t
            } = e;
            _.delete(t)
        },
        GAME_CONSOLE_SELECT_DEVICE: function(e) {
            let {
                platform: t,
                deviceId: n
            } = e;
            c[t] = n
        }
    })
}