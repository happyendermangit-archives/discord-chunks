function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var i = n("446674"),
        r = n("913144"),
        s = n("235660"),
        a = n("800762");
    let o = null,
        l = null,
        u = new Set,
        c = {},
        d = {},
        f = new Set,
        E = Object.freeze({});
    class p extends i.default.DeviceSettingsStore {
        initialize(e) {
            null != e && (d = e.lastSelectedDeviceByPlatform), this.waitFor(s.default, a.default)
        }
        getUserAgnosticState() {
            return {
                lastSelectedDeviceByPlatform: d
            }
        }
        getDevicesForPlatform(e) {
            var t;
            return null !== (t = c[e]) && void 0 !== t ? t : E
        }
        getLastSelectedDeviceByPlatform(e) {
            return d[e]
        }
        getDevice(e, t) {
            var n;
            return null === (n = c[e]) || void 0 === n ? void 0 : n[t]
        }
        getFetchingDevices(e) {
            return f.has(e)
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
    p.displayName = "GameConsoleStore", p.persistKey = "GameConsoleStore";
    var h = new p(r.default, {
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
                deviceId: r,
                commandId: s
            } = e;
            l = {
                type: t,
                nonce: n,
                channelId: i,
                startedAt: Date.now(),
                deviceId: r,
                commandId: s
            }
        },
        GAME_CONSOLE_FETCH_DEVICES_START: function(e) {
            let {
                platform: t
            } = e;
            f.add(t)
        },
        GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function(e) {
            let {
                platform: t,
                devices: n
            } = e;
            f.delete(t);
            let i = c[t] = {},
                r = {};
            for (let e of n) i[e.id] = e, d[t] === e.id && (r[t] = e.id);
            d = r
        },
        GAME_CONSOLE_FETCH_DEVICES_FAIL: function(e) {
            let {
                platform: t
            } = e;
            f.delete(t)
        },
        GAME_CONSOLE_SELECT_DEVICE: function(e) {
            let {
                platform: t,
                deviceId: n
            } = e;
            d[t] = n
        }
    })
}