function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("512722"),
        o = n.n(r),
        i = n("945816"),
        a = n("483587"),
        u = n("661961"),
        s = n("807471"),
        l = n("35523"),
        c = n("217014"),
        f = n("335911"),
        d = n("545072"),
        _ = n("276664"),
        E = n("665863"),
        p = n("162677"),
        m = n("653211"),
        y = n("581050"),
        I = n("254061"),
        h = n("257335"),
        O = n("557963"),
        T = n("698779"),
        S = n("439386"),
        v = n("941504");

    function g(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e) {
        return (N = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function R(e, t) {
        return (R = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var C = new l.default("GameConsoleManager");

    function P(e) {
        return D.apply(this, arguments)
    }

    function D() {
        var e;
        return e = function(e) {
            var t;
            return function(e, t) {
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
            }(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (t = d.default.getChannelId(), o()(null == t, "Syncing to remote while in voice!"), !(e.selfMute !== f.default.isSelfMute())) return [3, 2];
                        return [4, u.default.toggleSelfMute({
                            syncRemote: !1
                        })];
                    case 1:
                        n.sent(), n.label = 2;
                    case 2:
                        return e.selfDeaf !== f.default.isSelfDeaf() && u.default.toggleSelfDeaf({
                            syncRemote: !1
                        }), [2]
                }
            })
        }, (D = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    A(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    A(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
    var L = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && R(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = N(t);
            if (n) {
                var a = N(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : g(e)
        });

        function o() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, o), e = r.apply(this, arguments), b(g(e), "rollbackCommandTimeout", new i.Timeout), b(g(e), "awaitRemoteTimeout", new i.Timeout), b(g(e), "actions", {
                WAIT_FOR_REMOTE_SESSION: function() {
                    return e.handleWaitForRemoteSession()
                },
                POST_CONNECTION_OPEN: function() {
                    return e.handleSessionsChanged()
                },
                SESSIONS_REPLACE: function() {
                    return e.handleSessionsChanged()
                },
                AUDIO_TOGGLE_SELF_DEAF: function(t) {
                    return e.handleAudioStateToggle(t)
                },
                AUDIO_TOGGLE_SELF_MUTE: function(t) {
                    return e.handleAudioStateToggle(t)
                },
                VOICE_STATE_UPDATES: function(t) {
                    return e.handleVoiceStateUpdates(t)
                },
                CONSOLE_COMMAND_UPDATE: function(t) {
                    return e.handleConsoleCommandUpdate(t)
                },
                PASSIVE_UPDATE_V1: function(t) {
                    return e.handleVoiceStateUpdates(t)
                },
                REMOTE_SESSION_DISCONNECT: function() {
                    return e.handleRemoteSessionDisconnect()
                }
            }), b(g(e), "maybeConnect", function(t) {
                var n, r, o = (n = t, r = I.default.getAwaitingRemoteSessionInfo(), n.find(function(e) {
                    var t = T.GAME_CONSOLE_SESSIONS.has(e.clientInfo.os),
                        n = null != E.default.getVoiceStateForSession(c.default.getId(), e.sessionId),
                        o = null == r || (0, h.coercePlatformTypeToConsoleType)(r.type) === e.clientInfo.os;
                    return t && o && n
                }));
                if (null == o) return null;
                e.awaitRemoteTimeout.stop(), (0, m.connectToRemote)(o.sessionId);
                var i = E.default.getVoiceStateForSession(c.default.getId(), o.sessionId);
                null != i && P(i)
            }), b(g(e), "handleAudioStateToggle", function(t) {
                var n = t.syncRemote,
                    r = t.context;
                if (!n || r !== S.MediaEngineContextTypes.DEFAULT) return;
                var o = f.default.isSelfDeaf(),
                    i = f.default.isSelfMute(),
                    a = c.default.getId(),
                    u = I.default.getRemoteSessionId();
                if (null == u) return;
                var s = E.default.getVoiceStateForSession(a, u);
                if (null != s)(s.selfDeaf !== o || s.selfMute !== i) && ((0, m.remoteVoiceStateUpdate)(u, {
                    selfDeaf: o,
                    selfMute: i
                }), e.rollbackCommandTimeout.start(3e3, function() {
                    P(s)
                }))
            }), b(g(e), "handleVoiceStateUpdates", function(t) {
                var n, r = null !== (n = t.voiceStates) && void 0 !== n ? n : [],
                    o = I.default.getRemoteSessionId();
                if (null == o) {
                    var i = r.map(function(e) {
                        var t = e.sessionId;
                        return null != t ? _.default.getSessionById(t) : null
                    }).filter(p.isNotNullish);
                    return e.maybeConnect(i)
                }
                var a = r.find(function(e) {
                    return e.sessionId === o
                });
                null != a && (e.rollbackCommandTimeout.stop(), P(a))
            }), b(g(e), "handleSessionsChanged", function() {
                var t = I.default.getRemoteSessionId();
                null != t && null == _.default.getSessionById(t) && (0, m.disconnectRemote)(), null == t && e.maybeConnect(Object.values(_.default.getSessions()))
            }), b(g(e), "handleWaitForRemoteSession", function() {
                e.awaitRemoteTimeout.start(6e4, function() {
                    (0, m.disconnectRemote)(), a.default.show({
                        title: v.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_TITLE,
                        body: v.default.Messages.GAME_CONSOLE_TRANSFER_TIMEOUT_BODY
                    })
                })
            }), b(g(e), "handleConsoleCommandUpdate", function(t) {
                var n, r = t.id,
                    o = t.result,
                    i = t.error;
                if (("failed" === o || "n/a" === o) && null != i) {
                    C.info("Console command Error result:", o, i);
                    var a = I.default.getAwaitingRemoteSessionInfo();
                    if ((null == a ? void 0 : a.commandId) === r) {
                        var u = I.default.getDevice(a.type, null !== (n = a.deviceId) && void 0 !== n ? n : ""),
                            s = (0, O.default)(null != u ? u : {
                                id: "id",
                                platform: v.default.Messages.STATUS_UNKNOWN,
                                name: v.default.Messages.STATUS_UNKNOWN
                            }, o, i);
                        null != s && y.default.showSelfDismissableAlert({
                            title: s.title,
                            body: s.body,
                            errorCodeMessage: s.errorCodeMessage,
                            reconnectPlatformType: s.isAccountLinkError ? a.type : void 0
                        }), T.USER_ACTION_REQUIRED_ERROR_CODES.has(i.code) && e.awaitRemoteTimeout.isStarted() ? e.awaitRemoteTimeout.start(18e4, function() {
                            return (0, m.disconnectRemote)()
                        }, !0) : "failed" === o && (0, m.disconnectRemote)()
                    }
                }
            }), b(g(e), "handleRemoteSessionDisconnect", function() {
                e.awaitRemoteTimeout.stop()
            }), e
        }
        return o
    }(s.default);
    t.default = new L
}