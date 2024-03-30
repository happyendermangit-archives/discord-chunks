function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("276664"),
        u = n("665863");

    function s(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function c(e) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function f(e, t) {
        return (f = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var d = null,
        _ = null,
        E = new Set,
        p = {},
        m = {},
        y = new Set,
        I = Object.freeze({}),
        h = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && f(e, t)
            }(h, e);
            var t, n, r, o, i, l = (t = h, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = c(t);
                if (n) {
                    var a = c(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : function(e) {
                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            });

            function h() {
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, h), l.apply(this, arguments)
            }
            return r = h, o = [{
                key: "initialize",
                value: function(e) {
                    null != e && (m = e.lastSelectedDeviceByPlatform), this.waitFor(a.default, u.default)
                }
            }, {
                key: "getUserAgnosticState",
                value: function() {
                    return {
                        lastSelectedDeviceByPlatform: m
                    }
                }
            }, {
                key: "getDevicesForPlatform",
                value: function(e) {
                    var t;
                    return null !== (t = p[e]) && void 0 !== t ? t : I
                }
            }, {
                key: "getLastSelectedDeviceByPlatform",
                value: function(e) {
                    return m[e]
                }
            }, {
                key: "getDevice",
                value: function(e, t) {
                    var n;
                    return null === (n = p[e]) || void 0 === n ? void 0 : n[t]
                }
            }, {
                key: "getFetchingDevices",
                value: function(e) {
                    return y.has(e)
                }
            }, {
                key: "getPendingDeviceCommands",
                value: function() {
                    return E
                }
            }, {
                key: "getRemoteSessionId",
                value: function() {
                    return d
                }
            }, {
                key: "getAwaitingRemoteSessionInfo",
                value: function() {
                    return _
                }
            }], s(r.prototype, o), i && s(r, i), h
        }(o.default.DeviceSettingsStore);
    l(h, "displayName", "GameConsoleStore"), l(h, "persistKey", "GameConsoleStore"), t.default = new h(i.default, {
        REMOTE_SESSION_CONNECT: function(e) {
            d = e.sessionId, _ = null
        },
        REMOTE_SESSION_DISCONNECT: function() {
            d = null, _ = null
        },
        WAIT_FOR_REMOTE_SESSION: function(e) {
            var t = e.sessionType,
                n = e.nonce,
                r = e.channelId,
                o = e.deviceId,
                i = e.commandId;
            _ = {
                type: t,
                nonce: n,
                channelId: r,
                startedAt: Date.now(),
                deviceId: o,
                commandId: i
            }
        },
        GAME_CONSOLE_FETCH_DEVICES_START: function(e) {
            var t = e.platform;
            y.add(t)
        },
        GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function(e) {
            var t = e.platform,
                n = e.devices;
            y.delete(t);
            var r = p[t] = {},
                o = {},
                i = !0,
                a = !1,
                u = void 0;
            try {
                for (var s, l = n[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                    var c = s.value;
                    r[c.id] = c, m[t] === c.id && (o[t] = c.id)
                }
            } catch (e) {
                a = !0, u = e
            } finally {
                try {
                    !i && null != l.return && l.return()
                } finally {
                    if (a) throw u
                }
            }
            m = o
        },
        GAME_CONSOLE_FETCH_DEVICES_FAIL: function(e) {
            var t = e.platform;
            y.delete(t)
        },
        GAME_CONSOLE_SELECT_DEVICE: function(e) {
            var t = e.platform,
                n = e.deviceId;
            m[t] = n
        }
    })
}