function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        connectToRemote: function() {
            return g
        },
        disconnectRemote: function() {
            return S
        },
        fetchDevices: function() {
            return C
        },
        persistSelectedDeviceId: function() {
            return D
        },
        remoteAudioSettingsUpdate: function() {
            return N
        },
        remoteDisconnect: function() {
            return b
        },
        remoteVoiceStateUpdate: function() {
            return A
        },
        transferToPlayStation: function() {
            return U
        }
    });
    var r = n("370203"),
        o = n("420321"),
        i = n("967888"),
        a = n("629815"),
        u = n("483587"),
        s = n("413087"),
        l = n("545072"),
        c = n("276664"),
        f = n("870331"),
        d = n("285910"),
        _ = n("581050"),
        E = n("254061"),
        p = n("873404"),
        m = n("281767"),
        y = n("941504");

    function I(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function h(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    I(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    I(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function O(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }

    function T(e, t) {
        var n, r;
        f.default.track(m.AnalyticEvents.REMOTE_COMMAND_SENT, {
            command_type: e,
            remote_platform: null === (r = c.default.getSessionById(t)) || void 0 === r ? void 0 : null === (n = r.clientInfo) || void 0 === n ? void 0 : n.os
        })
    }

    function S() {
        return v.apply(this, arguments)
    }

    function v() {
        return (v = h(function() {
            var e, t, n, r;
            return O(this, function(r) {
                switch (r.label) {
                    case 0:
                        t = null == (e = E.default.getAwaitingRemoteSessionInfo()) ? void 0 : e.nonce, a.default.dispatch({
                            type: "REMOTE_SESSION_DISCONNECT"
                        }), n = [], ((null == e ? void 0 : e.type) === m.PlatformTypes.PLAYSTATION || (null == e ? void 0 : e.type) === m.PlatformTypes.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(function(e, t, n) {
                            return M.apply(this, arguments)
                        }(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
                            return i.HTTP.del({
                                url: m.Endpoints.CONNECT_REQUEST(e)
                            })
                        }(t)), r.label = 1;
                    case 1:
                        return r.trys.push([1, 3, , 4]), [4, Promise.all(n)];
                    case 2:
                        return r.sent(), [3, 4];
                    case 3:
                        return r.sent(), u.default.show({
                            title: y.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
                            body: y.default.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
                        }), [3, 4];
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function g(e) {
        a.default.dispatch({
            type: "REMOTE_SESSION_CONNECT",
            sessionId: e
        })
    }

    function A(e, t) {
        var n = t.selfMute,
            r = t.selfDeaf;
        a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "VOICE_STATE_UPDATE",
                self_mute: n,
                self_deaf: r
            }
        }), T("VOICE_STATE_UPDATE", e)
    }

    function b(e) {
        a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: {
                type: "DISCONNECT"
            }
        }), T("DISCONNECT", e), S()
    }

    function N(e, t, n, r) {
        var o = (0, s.coerceAudioContextForProto)(n);
        null != o && (a.default.dispatch({
            type: "REMOTE_COMMAND",
            sessionId: e,
            payload: function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        var r, o, i;
                        r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : r[o] = i
                    })
                }
                return e
            }({
                type: "AUDIO_SETTINGS_UPDATE",
                context: o,
                id: t
            }, r)
        }), T("AUDIO_SETTINGS_UPDATE", e))
    }

    function R() {
        return (R = h(function() {
            var e, t, n;
            return O(this, function(r) {
                switch (r.label) {
                    case 0:
                        return r.trys.push([0, 2, , 3]), t = null != l.default.getRTCConnectionId() ? o.ConsoleHandoffType.TRANSFER_EXISTING_CALL : o.ConsoleHandoffType.CREATE_NEW_CALL, [4, i.HTTP.post({
                            url: m.Endpoints.CONNECT_REQUEST_CREATE,
                            body: {
                                analytics_properties: {
                                    handoff_type: t
                                }
                            }
                        })];
                    case 1:
                        return e = r.sent().body.nonce, [3, 3];
                    case 2:
                        return n = r.sent(), d.default.captureException(n), [3, 3];
                    case 3:
                        return [2, e]
                }
            })
        })).apply(this, arguments)
    }

    function C(e) {
        return P.apply(this, arguments)
    }

    function P() {
        return (P = h(function(e) {
            var t, n, r;
            return O(this, function(o) {
                switch (o.label) {
                    case 0:
                        a.default.dispatch({
                            type: "GAME_CONSOLE_FETCH_DEVICES_START",
                            platform: e
                        }), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, i.HTTP.get({
                            url: m.Endpoints.CONSOLES_DEVICES(e)
                        })];
                    case 2:
                        return t = o.sent(), [3, 4];
                    case 3:
                        throw n = o.sent(), a.default.dispatch({
                            type: "GAME_CONSOLE_FETCH_DEVICES_FAIL",
                            platform: e,
                            error: n
                        }), n;
                    case 4:
                        return r = t.body.devices, a.default.dispatch({
                            type: "GAME_CONSOLE_FETCH_DEVICES_SUCCESS",
                            platform: e,
                            devices: r
                        }), [2, r]
                }
            })
        })).apply(this, arguments)
    }

    function D(e, t) {
        a.default.dispatch({
            type: "GAME_CONSOLE_SELECT_DEVICE",
            platform: e,
            deviceId: t
        })
    }

    function L() {
        return (L = h(function(e, t, n, o) {
            var u, s, l;
            return O(this, function(c) {
                switch (c.label) {
                    case 0:
                        a.default.dispatch({
                            type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_START",
                            platform: e
                        }), c.label = 1;
                    case 1:
                        return c.trys.push([1, 3, , 4]), [4, i.HTTP.post({
                            url: m.Endpoints.CONSOLES_DEVICES_COMMANDS(e, t),
                            body: {
                                command: r.ConsoleCommands.CONNECT_VOICE,
                                channel_id: n.id,
                                guild_id: n.guild_id,
                                nonce: o
                            }
                        })];
                    case 2:
                        return u = c.sent(), [3, 4];
                    case 3:
                        throw s = c.sent(), a.default.dispatch({
                            type: "GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL",
                            platform: e,
                            error: s
                        }), s;
                    case 4:
                        return l = u.body.id, a.default.dispatch({
                            type: "WAIT_FOR_REMOTE_SESSION",
                            sessionType: e,
                            nonce: o,
                            channelId: n.id,
                            deviceId: t,
                            commandId: l
                        }), [2, l]
                }
            })
        })).apply(this, arguments)
    }

    function M() {
        return (M = h(function(e, t, n) {
            var r;
            return O(this, function(o) {
                switch (o.label) {
                    case 0:
                        a.default.dispatch({
                            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START",
                            platform: e,
                            deviceId: t,
                            commandId: n
                        }), o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]), [4, i.HTTP.del({
                            url: m.Endpoints.CONSOLES_DEVICES_COMMAND(e, t, n)
                        })];
                    case 2:
                        return o.sent(), [3, 4];
                    case 3:
                        throw r = o.sent(), a.default.dispatch({
                            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL",
                            platform: e,
                            deviceId: t,
                            commandId: n,
                            error: r
                        }), r;
                    case 4:
                        return a.default.dispatch({
                            type: "GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS",
                            platform: e,
                            deviceId: t,
                            commandId: n
                        }), [2]
                }
            })
        })).apply(this, arguments)
    }

    function U(e, t, n) {
        return w.apply(this, arguments)
    }

    function w() {
        return (w = h(function(e, t, n) {
            return O(this, function(r) {
                switch (r.label) {
                    case 0:
                        return [4, _.default.maybeShowPTTAlert(e)];
                    case 1:
                        return r.sent(), [4, S()];
                    case 2:
                        return r.sent(), [4, function() {
                            return R.apply(this, arguments)
                        }()];
                    case 3:
                        return [4, function(e, t, n, r) {
                            return L.apply(this, arguments)
                        }(e, t, n, r.sent())];
                    case 4:
                        return r.sent(), (0, p.default)(n.id, e), [2]
                }
            })
        })).apply(this, arguments)
    }
}