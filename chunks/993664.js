function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("945816"),
        o = n("807471"),
        i = n("950520"),
        a = n("545072"),
        u = n("870331"),
        s = n("388990"),
        l = n("603463"),
        c = n("654370"),
        f = n("281767");

    function d(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = 5 * s.default.Millis.MINUTE,
        I = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && m(e, t)
            }(O, e);
            var t, n, o, s, I, h = (t = O, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = p(t);
                if (n) {
                    var a = p(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : d(e)
            });

            function O() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, O), e = h.apply(this, arguments), E(d(e), "heartbeatInterval", new r.Interval), E(d(e), "runningGameKeys", new Set), E(d(e), "actions", {
                    RUNNING_GAMES_CHANGE: function(t) {
                        return e.handleRunningGamesChanged(t)
                    },
                    LOGOUT: function() {
                        return e.stopHeartbeat()
                    },
                    CONNECTION_CLOSED: function() {
                        return e.stopHeartbeat()
                    },
                    POST_CONNECTION_OPEN: function() {
                        return e.handlePostConnectionOpen()
                    }
                }), E(d(e), "handleRunningGamesChanged", function(t) {
                    if (0 === t.games.length) {
                        e.stopHeartbeat();
                        return
                    }
                    e.maybeStartHeartbeat()
                }), E(d(e), "logRunningGameHeartbeats", function() {
                    var t = c.default.getRunningGames(),
                        n = {
                            rtc_connection_id: a.default.getRTCConnectionId(),
                            media_session_id: a.default.getMediaSessionId()
                        },
                        r = new Set;
                    t.forEach(function(t) {
                        var o, a, s = (0, c.gameKey)(t),
                            d = !e.runningGameKeys.has(s),
                            _ = null !== (a = t.id) && void 0 !== a ? a : null === (o = i.default.getGameByName(t.name)) || void 0 === o ? void 0 : o.id;
                        u.default.track(f.AnalyticEvents.RUNNING_GAME_HEARTBEAT, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    E(e, t, n[t])
                                })
                            }
                            return e
                        }({
                            game_id: _,
                            game_name: t.name,
                            game_distributor: t.distributor,
                            game_executable: (0, l.removeExecutablePathPrefix)(t.exePath),
                            game_detection_enabled: (0, c.isDetectionEnabled)(t),
                            initial_heartbeat: d
                        }, n)), r.add((0, c.gameKey)(t))
                    }), e.runningGameKeys = r
                }), e
            }
            return o = O, s = [{
                key: "_terminate",
                value: function() {
                    this.stopHeartbeat()
                }
            }, {
                key: "maybeStartHeartbeat",
                value: function() {
                    !this.heartbeatInterval.isStarted() && (this.logRunningGameHeartbeats(), this.heartbeatInterval.start(y, this.logRunningGameHeartbeats))
                }
            }, {
                key: "stopHeartbeat",
                value: function() {
                    this.heartbeatInterval.stop(), this.runningGameKeys.clear()
                }
            }, {
                key: "handlePostConnectionOpen",
                value: function() {
                    c.default.getRunningGames().length > 0 && this.maybeStartHeartbeat()
                }
            }], _(o.prototype, s), I && _(o, I), O
        }(o.default);
    t.default = new I
}