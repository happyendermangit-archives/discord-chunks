function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("651820"),
        u = n("98660"),
        s = n("224359"),
        l = n("807471"),
        c = n("654370"),
        f = n("736381"),
        d = n("53867"),
        _ = n("217014"),
        E = n("935741"),
        p = n("950520"),
        m = n("894288"),
        y = n("575098"),
        I = n("650655"),
        h = n("904393"),
        O = n("719741"),
        T = n("354368"),
        S = n("281767");

    function v(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e) {
        return (A = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function b(e, t) {
        return (b = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var N = [],
        R = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && b(e, t)
            }(D, e);
            var t, n, l, R, C, P = (t = D, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = A(t);
                if (n) {
                    var a = A(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : v(e)
            });

            function D() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, D), e = P.apply(this, arguments), t = v(e), n = "actions", r = {
                    RUNNING_GAMES_CHANGE: e.handleRunningGamesChange,
                    STREAM_CREATE: e.handleStreamCreate,
                    STREAM_STOP: e.handleStreamStop,
                    START_BROADCAST_STREAM: e.handleStartBroadcastStream,
                    CALL_CREATE: e.handleCallCreate,
                    RTC_CONNECTION_STATE: e.handleRTCConnectionState,
                    CHANNEL_DELETE: e.handleChannelDelete,
                    MESSAGE_CREATE: e.handleMessageCreate
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return l = D, R = [{
                key: "handleRunningGamesChange",
                value: function() {
                    var e = c.default.getVisibleGame();
                    if (null == e) return;
                    var t = h.default.getCurrentConfig({
                            location: "handle_running_games_change"
                        }, {
                            autoTrackExposure: !1
                        }).canBroadcast,
                        n = y.default.getBroadcast(),
                        r = (0, I.getGameName)(e),
                        o = null != p.default.getGameByName(r),
                        i = (0, T.getIsBroadcastingToAnyone)();
                    if (!!t && null == n && !!d.BroadcastAutoBroadcast.getSetting() && !!o && !!i && null == N.find(function(t) {
                            return t.pid === e.pid
                        })) {
                        if (N = c.default.getRunningGames(), (0, O.getCanStartBroadcast)()) {
                            var a = m.default.getVoiceChannelId();
                            (0, s.createBroadcastChannelOrStartStream)({
                                pid: e.pid,
                                channelId: a
                            })
                        }
                    }
                }
            }, {
                key: "handleStreamCreate",
                value: function(e) {
                    var t = e.streamKey;
                    (0, I.startBroadcastForStream)(t, r)
                }
            }, {
                key: "handleStreamStop",
                value: function(e) {
                    var t = e.streamKey;
                    if (null == r) return;
                    var n = (0, f.decodeStreamKey)(t),
                        a = n.ownerId,
                        u = n.channelId;
                    if (null != a && null != u && a === _.default.getId()) {
                        var s = E.default.getChannel(u),
                            l = null != s && s.isBroadcastChannel();
                        null != s && a === s.ownerId && l && (r = null, o = null, i = null, (0, I.stopBroadcast)())
                    }
                }
            }, {
                key: "handleStartBroadcastStream",
                value: function(e) {
                    var t = e.options;
                    r = t.pid, o = t.sourceId, i = t.sourceName
                }
            }, {
                key: "handleCallCreate",
                value: function(e) {
                    var t = e.channelId;
                    if (null != t && (null != r || null != o || null != i)) {
                        var n = _.default.getId(),
                            a = E.default.getChannel(t);
                        null != a && n === a.ownerId && a.isBroadcastChannel() && (0, s.startStream)(null, t, {
                            pid: r,
                            sourceId: o,
                            sourceName: i
                        })
                    }
                }
            }, {
                key: "handleRTCConnectionState",
                value: function(e) {
                    var t = e.channelId;
                    if (e.state === S.RTCConnectionStates.DISCONNECTED) {
                        var n = m.default.getChannelId(),
                            r = E.default.getChannel(t);
                        if (null != r && r.isBroadcastChannel()) {
                            a.default.closePrivateChannel(t, n === t, !0);
                            var o = y.default.getBroadcast();
                            null != o && r.id === o.channelId && (0, I.stopBroadcast)()
                        }
                    }
                }
            }, {
                key: "handleChannelDelete",
                value: function(e) {
                    var t = e.channel,
                        n = y.default.getBroadcast();
                    null != n && t.id === n.channelId && (0, I.stopBroadcast)()
                }
            }, {
                key: "handleMessageCreate",
                value: function(e) {
                    var t = e.channelId;
                    if (null == e.guildId) {
                        var n = E.default.getChannel(t);
                        null != n && n.isBroadcastChannel() && m.default.getVoiceChannelId() !== n.id && (0, u.localAck)(t)
                    }
                }
            }], g(l.prototype, R), C && g(l, C), D
        }(l.default);
    t.default = new R
}