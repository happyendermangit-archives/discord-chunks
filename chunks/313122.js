function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        encodeStreamKeyForActivityQuest: function() {
            return g
        }
    }), n("47120");
    var i = n("147913"),
        r = n("317381"),
        s = n("569545"),
        a = n("199902"),
        o = n("314897"),
        l = n("77498"),
        u = n("938475"),
        d = n("70956"),
        _ = n("272008"),
        c = n("718514"),
        E = n("57655"),
        I = n("569984"),
        T = n("918701"),
        f = n("46140"),
        S = n("70722");

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let A = 12 * d.default.Millis.HOUR,
        m = 1 * d.default.Millis.MINUTE,
        N = 1 * d.default.Millis.SECOND,
        p = 5 * d.default.Millis.SECOND,
        O = 1 * d.default.Millis.SECOND,
        R = d.default.Millis.DAY,
        C = 30 * d.default.Millis.MINUTE,
        g = e => (0, s.encodeStreamKey)({
            streamType: S.StreamTypes.CALL,
            channelId: e,
            ownerId: "1"
        });

    function L() {
        var e, t;
        let n = a.default.getStreamerActiveStreamMetadata();
        if ((null == n ? void 0 : n.id) == null) return null;
        let i = l.default.getGameById(n.id);
        if ((null == i ? void 0 : i.id) == null) return null;
        let r = (0, T.getQuestByApplicationId)(I.default.quests, i.id);
        return (null == r ? void 0 : null === (e = r.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == r ? void 0 : null === (t = r.userStatus) || void 0 === t ? void 0 : t.completedAt) != null ? null : r
    }

    function D(e) {
        return u.default.countVoiceStatesForChannel(e) >= 2
    }

    function v(e) {
        var t;
        let {
            questId: n,
            streamKey: i,
            applicationId: r
        } = e, {
            channelId: o
        } = (0, s.decodeStreamKey)(i), l = D(o), u = I.default.quests.get(n), d = null != a.default.getRTCStream(i) && (null === (t = L()) || void 0 === t ? void 0 : t.config.applicationId) === r && l && null != u && !(0, T.isQuestExpired)(u), {
            quest: _,
            activity: c
        } = M(), E = (null == _ ? void 0 : _.id) === n && (null == _ ? void 0 : _.config.applicationId) === r && l && (null == c ? void 0 : c.channelId) === o && !(0, T.isQuestExpired)(_);
        return d || E
    }

    function M(e) {
        let t = {
            quest: null,
            activity: null
        };
        if (!(0, c.getIsEligibleForActivityQuest)({
                location: f.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            })) return t;
        for (let a of r.default.getSelfEmbeddedActivities().values()) {
            var n, i, s;
            if (null != e && a.channelId !== e) continue;
            let r = null !== (s = (0, T.getQuestByApplicationId)(I.default.quests, a.applicationId)) && void 0 !== s ? s : null;
            if (null != r && (null == r ? void 0 : null === (n = r.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null == r ? void 0 : null === (i = r.userStatus) || void 0 === i ? void 0 : i.completedAt) == null) return {
                quest: r,
                activity: a
            };
            t = {
                quest: null,
                activity: a
            }
        }
        return t
    }
    class y extends i.default {
        maybeFetchCurrentQuests() {
            (0, E.getIsEligibleForQuests)({
                location: f.QuestsExperimentLocations.QUESTS_MANAGER
            }) && !I.default.isFetchingCurrentQuests && (0, _.fetchCurrentQuests)()
        }
        constructor(...e) {
            super(...e), h(this, "instantiatedAt", Date.now()), h(this, "streamKeyToHeartbeatState", new Map), h(this, "optimisticProgressUpdateIntervalIds", new Map), h(this, "lastOptimisticallyUpdatedProgressMap", new Map), h(this, "questsInitialFetchTimerId", null), h(this, "questsRecurringFetchTimerId", null), h(this, "questsLastFetchAttemptedAt", 0), h(this, "initiateHeartbeat", e => {
                let {
                    questId: t,
                    streamKey: n,
                    applicationId: i
                } = e;
                if (this.streamKeyToHeartbeatState.has(n)) return;
                let r = () => {
                    if (v({
                            questId: t,
                            streamKey: n,
                            applicationId: i
                        })) {
                        (0, _.sendHeartbeat)({
                            questId: t,
                            streamKey: n
                        });
                        let e = this.calculateHeartbeatDurationMs(t),
                            i = window.setTimeout(r, e);
                        this.streamKeyToHeartbeatState.set(n, {
                            heartbeatTimeoutId: i,
                            questId: t
                        })
                    } else this.terminateHeartbeat({
                        streamKey: n,
                        sendTerminalHeartbeat: !0
                    })
                };
                r()
            }), h(this, "calculateHeartbeatDurationMs", e => {
                let t = I.default.quests.get(e);
                if (null == t || null == t.config || null == t.userStatus) return m;
                let {
                    streamProgressSeconds: n
                } = t.userStatus, i = (60 * t.config.streamDurationRequirementMinutes - n) * d.default.Millis.SECOND;
                return i <= m ? i + N : m
            }), h(this, "terminateHeartbeat", e => {
                let {
                    streamKey: t,
                    sendTerminalHeartbeat: n
                } = e;
                this.terminateOptimisticProgressUpdateInterval(t);
                let i = this.streamKeyToHeartbeatState.get(t);
                if (null != i) {
                    let {
                        questId: e,
                        heartbeatTimeoutId: r
                    } = i;
                    window.clearTimeout(r), this.streamKeyToHeartbeatState.delete(t), n && (0, _.sendHeartbeat)({
                        questId: e,
                        streamKey: t,
                        terminal: !0
                    })
                }
            }), h(this, "initiateOptimisticProgressUpdateInterval", e => {
                this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
                    var t;
                    let n = L(),
                        {
                            quest: i
                        } = M(),
                        r = null !== (t = null != n ? n : i) && void 0 !== t ? t : null;
                    if (null == r) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    let s = r.userStatus,
                        a = r.config.streamDurationRequirementMinutes * d.default.Seconds.MINUTE,
                        o = this.lastOptimisticallyUpdatedProgressMap.get(e);
                    if (!v({
                            questId: r.id,
                            streamKey: e,
                            applicationId: r.config.applicationId
                        })) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    if (null == o) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
                    else if (null != s) {
                        let t = (Date.now() - o) / d.default.Millis.SECOND,
                            n = s.streamProgressSeconds + t;
                        if (n <= a) {
                            let t = {
                                ...s,
                                streamProgressSeconds: n
                            };
                            (0, _.optimisticallyUpdateQuestProgress)(t), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
                        }
                    }
                }, O))
            }), h(this, "terminateOptimisticProgressUpdateInterval", e => {
                window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
            }), h(this, "handleEnrollmentSuccess", e => {
                let {
                    enrolledQuestUserStatus: {
                        questId: t
                    }
                } = e, n = a.default.getCurrentUserActiveStream(), i = L();
                if (null != n && (null == i ? void 0 : i.id) === t) {
                    this.initiateHeartbeat({
                        streamKey: (0, s.encodeStreamKey)(n),
                        applicationId: i.config.applicationId,
                        questId: i.id
                    });
                    return
                }
                let {
                    quest: r,
                    activity: o
                } = M();
                if (null != o && null != r && r.id === t) {
                    this.initiateHeartbeat({
                        streamKey: g(o.channelId),
                        applicationId: r.config.applicationId,
                        questId: r.id
                    });
                    return
                }
            }), h(this, "handleLogout", () => {
                window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsLastFetchAttemptedAt = 0
            }), h(this, "handleQuestsFetchCurrentQuestsBegin", () => {
                this.questsLastFetchAttemptedAt = Date.now()
            }), h(this, "handlePostConnectionOpen", () => {
                window.clearTimeout(this.questsInitialFetchTimerId), window.clearTimeout(this.questsRecurringFetchTimerId), this.questsRecurringFetchTimerId = window.setInterval(() => {
                    Date.now() - this.questsLastFetchAttemptedAt > R && (this.questsLastFetchAttemptedAt = Date.now(), this.maybeFetchCurrentQuests())
                }, C), this.questsInitialFetchTimerId = window.setTimeout(() => {
                    0 === I.default.lastFetchedCurrentQuests && this.maybeFetchCurrentQuests()
                }, Math.floor(Math.random() * p))
            }), h(this, "handleSendHeartbeatSuccess", e => {
                let {
                    streamKey: t,
                    userStatus: n
                } = e;
                this.terminateOptimisticProgressUpdateInterval(t), null != n.completedAt ? (this.terminateHeartbeat({
                    streamKey: t,
                    sendTerminalHeartbeat: !1
                }), this.terminateOptimisticProgressUpdateInterval(t)) : this.initiateOptimisticProgressUpdateInterval(t)
            }), h(this, "handleSendHeartbeatFailure", e => {
                let {
                    streamKey: t
                } = e;
                this.terminateOptimisticProgressUpdateInterval(t)
            }), h(this, "handleRunningGamesChange", () => {
                !(this.instantiatedAt + A > Date.now() || I.default.lastFetchedCurrentQuests + A > Date.now()) && this.maybeFetchCurrentQuests()
            }), h(this, "handleVoiceStateChange", () => {
                let e = a.default.getCurrentUserActiveStream(),
                    t = L();
                null != e && this._handleVoiceStateChange({
                    streamKey: (0, s.encodeStreamKey)(e),
                    channelId: e.channelId,
                    quest: t
                });
                let {
                    quest: n,
                    activity: i
                } = M();
                null != i && this._handleVoiceStateChange({
                    streamKey: g(i.channelId),
                    channelId: i.channelId,
                    quest: n
                })
            }), h(this, "_handleVoiceStateChange", e => {
                let {
                    streamKey: t,
                    channelId: n,
                    quest: i
                } = e, r = null == i || !D(n), s = D(n) && !this.streamKeyToHeartbeatState.has(t) && null != i;
                r ? this.terminateHeartbeat({
                    streamKey: t,
                    sendTerminalHeartbeat: !0
                }) : s && this.initiateHeartbeat({
                    streamKey: t,
                    applicationId: i.config.applicationId,
                    questId: i.id
                })
            }), h(this, "handleEmbeddedActivityUpdate", e => {
                let {
                    quest: t,
                    activity: n
                } = M(e), i = g(e), r = (null == n || null == t) && this.streamKeyToHeartbeatState.has(i), s = null != n && null != t && D(e) && !this.streamKeyToHeartbeatState.has(i);
                r ? this.terminateHeartbeat({
                    streamKey: i,
                    sendTerminalHeartbeat: !0
                }) : s && this.initiateHeartbeat({
                    streamKey: i,
                    applicationId: t.config.applicationId,
                    questId: t.id
                })
            }), h(this, "handleStreamCreate", e => {
                let {
                    streamKey: t
                } = e, {
                    channelId: n,
                    ownerId: i
                } = (0, s.decodeStreamKey)(t);
                if (i !== o.default.getId()) return;
                let r = L();
                if (null == r) {
                    this.terminateHeartbeat({
                        streamKey: t,
                        sendTerminalHeartbeat: !1
                    });
                    return
                }
                D(n) && !this.streamKeyToHeartbeatState.has(t) && this.initiateHeartbeat({
                    streamKey: t,
                    applicationId: r.config.applicationId,
                    questId: r.id
                })
            }), h(this, "handleStreamStart", e => {
                let {
                    streamType: t,
                    guildId: n,
                    channelId: i
                } = e, r = L(), a = (0, s.encodeStreamKey)({
                    streamType: t,
                    guildId: n,
                    channelId: i,
                    ownerId: o.default.getId()
                });
                null == r ? this.terminateHeartbeat({
                    streamKey: a,
                    sendTerminalHeartbeat: !0
                }) : D(i) && !this.streamKeyToHeartbeatState.has(a) && this.initiateHeartbeat({
                    streamKey: a,
                    applicationId: r.config.applicationId,
                    questId: r.id
                })
            }), h(this, "handleStreamClose", e => {
                let {
                    streamKey: t
                } = e;
                this.terminateHeartbeat({
                    streamKey: t,
                    sendTerminalHeartbeat: !0
                })
            }), h(this, "actions", {
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: this.handleQuestsFetchCurrentQuestsBegin,
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_START: this.handleStreamStart,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V1: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange,
                EMBEDDED_ACTIVITY_UPDATE: e => {
                    let {
                        channelId: t
                    } = e;
                    return this.handleEmbeddedActivityUpdate(t)
                },
                EMBEDDED_ACTIVITY_UPDATE_V2: e => {
                    let {
                        location: t
                    } = e;
                    return this.handleEmbeddedActivityUpdate(t.channel_id)
                },
                LOGOUT: this.handleLogout
            })
        }
    }
    t.default = new y
}