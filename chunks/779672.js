function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        encodeStreamKeyForActivityQuest: function() {
            return R
        }
    });
    var r = n("807471"),
        o = n("632142"),
        i = n("736381"),
        a = n("73013"),
        u = n("217014"),
        s = n("950520"),
        l = n("473702"),
        c = n("388990"),
        f = n("532642"),
        d = n("888466"),
        _ = n("276269"),
        E = n("995389"),
        p = n("710765"),
        m = n("961338"),
        y = n("367965");

    function I(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = 12 * c.default.Millis.HOUR,
        g = 1 * c.default.Millis.MINUTE,
        A = 1 * c.default.Millis.SECOND,
        b = 5 * c.default.Millis.SECOND,
        N = 1 * c.default.Millis.SECOND,
        R = function(e) {
            return (0, i.encodeStreamKey)({
                streamType: y.StreamTypes.CALL,
                channelId: e,
                ownerId: "1"
            })
        };

    function C() {
        var e, t, n = a.default.getStreamerActiveStreamMetadata();
        if ((null == n ? void 0 : n.id) == null) return null;
        var r = s.default.getGameById(n.id);
        if ((null == r ? void 0 : r.id) == null) return null;
        var o = (0, p.getQuestByApplicationId)(E.default.quests, r.id);
        return (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == o ? void 0 : null === (t = o.userStatus) || void 0 === t ? void 0 : t.completedAt) != null ? null : o
    }

    function P(e) {
        return l.default.countVoiceStatesForChannel(e) >= 2
    }

    function D(e) {
        var t, n = e.questId,
            r = e.streamKey,
            o = e.applicationId,
            u = (0, i.decodeStreamKey)(r).channelId,
            s = P(u),
            l = null != a.default.getRTCStream(r) && (null === (t = C()) || void 0 === t ? void 0 : t.config.applicationId) === o && s,
            c = L(),
            f = c.quest,
            d = c.activity,
            _ = (null == f ? void 0 : f.id) === n && (null == f ? void 0 : f.config.applicationId) === o && s && (null == d ? void 0 : d.channelId) === u;
        return l || _
    }

    function L(e) {
        var t = {
            quest: null,
            activity: null
        };
        if (!(0, d.getIsEligibleForActivityQuest)({
                location: m.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            })) return t;
        var n = o.default.getSelfEmbeddedActivities(),
            r = !0,
            i = !1,
            a = void 0;
        try {
            for (var u, s = n.values()[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                var l, c, f, _ = u.value;
                if (null == e || _.channelId === e) {
                    var y = null !== (f = (0, p.getQuestByApplicationId)(E.default.quests, _.applicationId)) && void 0 !== f ? f : null;
                    if (null != y && (null == y ? void 0 : null === (l = y.userStatus) || void 0 === l ? void 0 : l.enrolledAt) != null && (null == y ? void 0 : null === (c = y.userStatus) || void 0 === c ? void 0 : c.completedAt) == null) return {
                        quest: y,
                        activity: _
                    };
                    t = {
                        quest: null,
                        activity: _
                    }
                }
            }
        } catch (e) {
            i = !0, a = e
        } finally {
            try {
                !r && null != s.return && s.return()
            } finally {
                if (i) throw a
            }
        }
        return t
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(d, e);
        var t, n, r, o, s, l = (t = d, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : I(e)
        });

        function d() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, d), e = l.apply(this, arguments), O(I(e), "instantiatedAt", Date.now()), O(I(e), "streamKeyToHeartbeatState", new Map), O(I(e), "optimisticProgressUpdateIntervalIds", new Map), O(I(e), "lastOptimisticallyUpdatedProgressMap", new Map), O(I(e), "initiateHeartbeat", function(t) {
                var n = t.questId,
                    r = t.streamKey,
                    o = t.applicationId;
                if (!e.streamKeyToHeartbeatState.has(r)) {
                    var i = function() {
                        if (D({
                                questId: n,
                                streamKey: r,
                                applicationId: o
                            })) {
                            (0, f.sendHeartbeat)({
                                questId: n,
                                streamKey: r
                            });
                            var t = e.calculateHeartbeatDurationMs(n),
                                a = window.setTimeout(i, t);
                            e.streamKeyToHeartbeatState.set(r, {
                                heartbeatTimeoutId: a,
                                questId: n
                            })
                        } else e.terminateHeartbeat({
                            streamKey: r,
                            sendTerminalHeartbeat: !0
                        })
                    };
                    i()
                }
            }), O(I(e), "calculateHeartbeatDurationMs", function(e) {
                var t = E.default.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return g;
                var n = t.userStatus.streamProgressSeconds,
                    r = (60 * t.config.streamDurationRequirementMinutes - n) * c.default.Millis.SECOND;
                return r <= g ? r + A : g
            }), O(I(e), "terminateHeartbeat", function(t) {
                var n = t.streamKey,
                    r = t.sendTerminalHeartbeat;
                e.terminateOptimisticProgressUpdateInterval(n);
                var o = e.streamKeyToHeartbeatState.get(n);
                if (null != o) {
                    var i = o.questId,
                        a = o.heartbeatTimeoutId;
                    window.clearTimeout(a), e.streamKeyToHeartbeatState.delete(n), r && (0, f.sendHeartbeat)({
                        questId: i,
                        streamKey: n,
                        terminal: !0
                    })
                }
            }), O(I(e), "initiateOptimisticProgressUpdateInterval", function(t) {
                e.terminateOptimisticProgressUpdateInterval(t), e.optimisticProgressUpdateIntervalIds.set(t, window.setInterval(function() {
                    var n, r = C(),
                        o = L().quest,
                        i = null !== (n = null != r ? r : o) && void 0 !== n ? n : null;
                    if (null == i) {
                        e.terminateOptimisticProgressUpdateInterval(t);
                        return
                    }
                    var a = i.userStatus,
                        u = i.config.streamDurationRequirementMinutes * c.default.Seconds.MINUTE,
                        s = e.lastOptimisticallyUpdatedProgressMap.get(t);
                    if (!D({
                            questId: i.id,
                            streamKey: t,
                            applicationId: i.config.applicationId
                        })) {
                        e.terminateOptimisticProgressUpdateInterval(t);
                        return
                    }
                    if (null == s) e.lastOptimisticallyUpdatedProgressMap.set(t, Date.now());
                    else if (null != a) {
                        var l = (Date.now() - s) / c.default.Millis.SECOND,
                            d = a.streamProgressSeconds + l;
                        if (d <= u) {
                            var _, E, p = (_ = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))), r.forEach(function(t) {
                                        O(e, t, n[t])
                                    })
                                }
                                return e
                            }({}, a), E = (E = {
                                streamProgressSeconds: d
                            }, E), Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var r = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, r)
                                }
                                return n
                            })(Object(E)).forEach(function(e) {
                                Object.defineProperty(_, e, Object.getOwnPropertyDescriptor(E, e))
                            }), _);
                            (0, f.optimisticallyUpdateQuestProgress)(p), e.lastOptimisticallyUpdatedProgressMap.set(t, Date.now())
                        }
                    }
                }, N))
            }), O(I(e), "terminateOptimisticProgressUpdateInterval", function(t) {
                window.clearInterval(e.optimisticProgressUpdateIntervalIds.get(t)), e.optimisticProgressUpdateIntervalIds.delete(t), e.lastOptimisticallyUpdatedProgressMap.delete(t)
            }), O(I(e), "handleEnrollmentSuccess", function(t) {
                var n = t.enrolledQuestUserStatus.questId,
                    r = a.default.getCurrentUserActiveStream(),
                    o = C();
                if (null != r && (null == o ? void 0 : o.id) === n) {
                    e.initiateHeartbeat({
                        streamKey: (0, i.encodeStreamKey)(r),
                        applicationId: o.config.applicationId,
                        questId: o.id
                    });
                    return
                }
                var u = L(),
                    s = u.quest,
                    l = u.activity;
                if (null != l && null != s && s.id === n) {
                    e.initiateHeartbeat({
                        streamKey: R(l.channelId),
                        applicationId: s.config.applicationId,
                        questId: s.id
                    });
                    return
                }
            }), O(I(e), "handlePostConnectionOpen", function() {
                0 === E.default.lastFetchedCurrentQuests && window.setTimeout(e.maybeFetchCurrentQuests, Math.floor(Math.random() * b))
            }), O(I(e), "handleSendHeartbeatSuccess", function(t) {
                var n = t.streamKey,
                    r = t.userStatus;
                e.terminateOptimisticProgressUpdateInterval(n), null != r.completedAt ? (e.terminateHeartbeat({
                    streamKey: n,
                    sendTerminalHeartbeat: !1
                }), e.terminateOptimisticProgressUpdateInterval(n)) : e.initiateOptimisticProgressUpdateInterval(n)
            }), O(I(e), "handleSendHeartbeatFailure", function(t) {
                var n = t.streamKey;
                e.terminateOptimisticProgressUpdateInterval(n)
            }), O(I(e), "handleRunningGamesChange", function() {
                !(e.instantiatedAt + v > Date.now() || E.default.lastFetchedCurrentQuests + v > Date.now()) && e.maybeFetchCurrentQuests()
            }), O(I(e), "handleVoiceStateChange", function() {
                var t = a.default.getCurrentUserActiveStream(),
                    n = C();
                null != t && e._handleVoiceStateChange({
                    streamKey: (0, i.encodeStreamKey)(t),
                    channelId: t.channelId,
                    quest: n
                });
                var r = L(),
                    o = r.quest,
                    u = r.activity;
                null != u && e._handleVoiceStateChange({
                    streamKey: R(u.channelId),
                    channelId: u.channelId,
                    quest: o
                })
            }), O(I(e), "_handleVoiceStateChange", function(t) {
                var n = t.streamKey,
                    r = t.channelId,
                    o = t.quest,
                    i = null == o || !P(r),
                    a = P(r) && !e.streamKeyToHeartbeatState.has(n) && null != o;
                i ? e.terminateHeartbeat({
                    streamKey: n,
                    sendTerminalHeartbeat: !0
                }) : a && e.initiateHeartbeat({
                    streamKey: n,
                    applicationId: o.config.applicationId,
                    questId: o.id
                })
            }), O(I(e), "handleEmbeddedActivityUpdate", function(t) {
                var n = t.channelId,
                    r = L(n),
                    o = r.quest,
                    i = r.activity,
                    a = R(n),
                    u = (null == i || null == o) && e.streamKeyToHeartbeatState.has(a),
                    s = null != i && null != o && P(n) && !e.streamKeyToHeartbeatState.has(a);
                u ? e.terminateHeartbeat({
                    streamKey: a,
                    sendTerminalHeartbeat: !0
                }) : s && e.initiateHeartbeat({
                    streamKey: a,
                    applicationId: o.config.applicationId,
                    questId: o.id
                })
            }), O(I(e), "handleStreamCreate", function(t) {
                var n = t.streamKey,
                    r = (0, i.decodeStreamKey)(n),
                    o = r.channelId;
                if (r.ownerId === u.default.getId()) {
                    var a = C();
                    if (null == a) {
                        e.terminateHeartbeat({
                            streamKey: n,
                            sendTerminalHeartbeat: !1
                        });
                        return
                    }
                    P(o) && !e.streamKeyToHeartbeatState.has(n) && e.initiateHeartbeat({
                        streamKey: n,
                        applicationId: a.config.applicationId,
                        questId: a.id
                    })
                }
            }), O(I(e), "handleStreamStart", function(t) {
                var n = t.streamType,
                    r = t.guildId,
                    o = t.channelId,
                    a = C(),
                    s = (0, i.encodeStreamKey)({
                        streamType: n,
                        guildId: r,
                        channelId: o,
                        ownerId: u.default.getId()
                    });
                null == a ? e.terminateHeartbeat({
                    streamKey: s,
                    sendTerminalHeartbeat: !0
                }) : P(o) && !e.streamKeyToHeartbeatState.has(s) && e.initiateHeartbeat({
                    streamKey: s,
                    applicationId: a.config.applicationId,
                    questId: a.id
                })
            }), O(I(e), "handleStreamClose", function(t) {
                var n = t.streamKey;
                e.terminateHeartbeat({
                    streamKey: n,
                    sendTerminalHeartbeat: !0
                })
            }), O(I(e), "actions", {
                QUESTS_ENROLL_SUCCESS: e.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: e.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: e.handleSendHeartbeatFailure,
                POST_CONNECTION_OPEN: e.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: e.handleRunningGamesChange,
                STREAM_START: e.handleStreamStart,
                STREAM_CREATE: e.handleStreamCreate,
                STREAM_CLOSE: e.handleStreamClose,
                PASSIVE_UPDATE_V1: e.handleVoiceStateChange,
                VOICE_STATE_UPDATES: e.handleVoiceStateChange,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: e.handleEmbeddedActivityUpdate,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: e.handleEmbeddedActivityUpdate
            }), e
        }
        return r = d, o = [{
            key: "maybeFetchCurrentQuests",
            value: function() {
                (0, _.getIsEligibleForQuests)({
                    location: m.QuestsExperimentLocations.QUESTS_MANAGER
                }) && !E.default.isFetchingCurrentQuests && (0, f.fetchCurrentQuests)()
            }
        }], h(r.prototype, o), s && h(r, s), d
    }(r.default);
    t.default = new M
}