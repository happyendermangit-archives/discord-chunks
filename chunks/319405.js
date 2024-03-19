function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        encodeStreamKeyForActivityQuest: function() {
            return d
        },
        default: function() {
            return G
        }
    }), E("222007");
    var t = E("689988"),
        o = E("191225"),
        n = E("374014"),
        r = E("373469"),
        a = E("271938"),
        i = E("546463"),
        I = E("316133"),
        s = E("718517"),
        T = E("448881"),
        S = E("481244"),
        N = E("374023"),
        O = E("2973"),
        A = E("227231"),
        R = E("166604"),
        l = E("706530");
    let u = 12 * s.default.Millis.HOUR,
        L = 1 * s.default.Millis.MINUTE,
        C = 1 * s.default.Millis.SECOND,
        D = 5 * s.default.Millis.SECOND,
        c = 1 * s.default.Millis.SECOND,
        d = e => (0, n.encodeStreamKey)({
            streamType: l.StreamTypes.CALL,
            channelId: e,
            ownerId: "1"
        });

    function U() {
        var e, _;
        let E = r.default.getStreamerActiveStreamMetadata();
        if ((null == E ? void 0 : E.id) == null) return null;
        let t = i.default.getGameById(E.id);
        if ((null == t ? void 0 : t.id) == null) return null;
        let o = (0, A.getQuestByApplicationId)(O.default.quests, t.id);
        return (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == o ? void 0 : null === (_ = o.userStatus) || void 0 === _ ? void 0 : _.completedAt) != null ? null : o
    }

    function M(e) {
        return I.default.countVoiceStatesForChannel(e) >= 2
    }

    function h(e) {
        var _;
        let {
            questId: E,
            streamKey: t,
            applicationId: o
        } = e, {
            channelId: a
        } = (0, n.decodeStreamKey)(t), i = M(a), I = null != r.default.getRTCStream(t) && (null === (_ = U()) || void 0 === _ ? void 0 : _.config.applicationId) === o && i, {
            quest: s,
            activity: T
        } = P(), S = (null == s ? void 0 : s.id) === E && (null == s ? void 0 : s.config.applicationId) === o && i && (null == T ? void 0 : T.channelId) === a;
        return I || S
    }

    function P(e) {
        let _ = {
                quest: null,
                activity: null
            },
            E = (0, S.getIsEligibleForActivityQuest)({
                location: R.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            });
        if (!E) return _;
        let t = o.default.getSelfEmbeddedActivities();
        for (let E of t.values()) {
            var n, r, a;
            if (null != e && E.channelId !== e) continue;
            let t = null !== (a = (0, A.getQuestByApplicationId)(O.default.quests, E.applicationId)) && void 0 !== a ? a : null,
                o = null != t && (null == t ? void 0 : null === (n = t.userStatus) || void 0 === n ? void 0 : n.enrolledAt) != null && (null == t ? void 0 : null === (r = t.userStatus) || void 0 === r ? void 0 : r.completedAt) == null;
            if (o) return {
                quest: t,
                activity: E
            };
            _ = {
                quest: null,
                activity: E
            }
        }
        return _
    }
    class m extends t.default {
        maybeFetchCurrentQuests() {
            (0, N.getIsEligibleForQuests)({
                location: R.QuestsExperimentLocations.QUESTS_MANAGER
            }) && !O.default.isFetchingCurrentQuests && (0, T.fetchCurrentQuests)()
        }
        constructor(...e) {
            super(...e), this.instantiatedAt = Date.now(), this.streamKeyToHeartbeatState = new Map, this.optimisticProgressUpdateIntervalIds = new Map, this.lastOptimisticallyUpdatedProgressMap = new Map, this.initiateHeartbeat = e => {
                let {
                    questId: _,
                    streamKey: E,
                    applicationId: t
                } = e;
                if (this.streamKeyToHeartbeatState.has(E)) return;
                let o = () => {
                    if (h({
                            questId: _,
                            streamKey: E,
                            applicationId: t
                        })) {
                        (0, T.sendHeartbeat)({
                            questId: _,
                            streamKey: E
                        });
                        let e = this.calculateHeartbeatDurationMs(_),
                            t = window.setTimeout(o, e);
                        this.streamKeyToHeartbeatState.set(E, {
                            heartbeatTimeoutId: t,
                            questId: _
                        })
                    } else this.terminateHeartbeat({
                        streamKey: E,
                        sendTerminalHeartbeat: !0
                    })
                };
                o()
            }, this.calculateHeartbeatDurationMs = e => {
                let _ = O.default.quests.get(e);
                if (null == _ || null == _.config || null == _.userStatus) return L;
                let {
                    streamProgressSeconds: E
                } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes, o = (t - E) * s.default.Millis.SECOND;
                return o <= L ? o + C : L
            }, this.terminateHeartbeat = e => {
                let {
                    streamKey: _,
                    sendTerminalHeartbeat: E
                } = e;
                this.terminateOptimisticProgressUpdateInterval(_);
                let t = this.streamKeyToHeartbeatState.get(_);
                if (null != t) {
                    let {
                        questId: e,
                        heartbeatTimeoutId: o
                    } = t;
                    window.clearTimeout(o), this.streamKeyToHeartbeatState.delete(_), E && (0, T.sendHeartbeat)({
                        questId: e,
                        streamKey: _,
                        terminal: !0
                    })
                }
            }, this.initiateOptimisticProgressUpdateInterval = e => {
                this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
                    var _;
                    let E = U(),
                        {
                            quest: t
                        } = P(),
                        o = null !== (_ = null != E ? E : t) && void 0 !== _ ? _ : null;
                    if (null == o) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    let n = o.userStatus,
                        r = o.config.streamDurationRequirementMinutes * s.default.Seconds.MINUTE,
                        a = this.lastOptimisticallyUpdatedProgressMap.get(e);
                    if (!h({
                            questId: o.id,
                            streamKey: e,
                            applicationId: o.config.applicationId
                        })) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    if (null == a) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
                    else if (null != n) {
                        let _ = Date.now() - a,
                            E = _ / s.default.Millis.SECOND,
                            t = n.streamProgressSeconds,
                            o = t + E;
                        if (o <= r) {
                            let _ = {
                                ...n,
                                streamProgressSeconds: o
                            };
                            (0, T.optimisticallyUpdateQuestProgress)(_), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
                        }
                    }
                }, c))
            }, this.terminateOptimisticProgressUpdateInterval = e => {
                window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
            }, this.handleEnrollmentSuccess = e => {
                let {
                    enrolledQuestUserStatus: {
                        questId: _
                    }
                } = e, E = r.default.getCurrentUserActiveStream(), t = U();
                if (null != E && (null == t ? void 0 : t.id) === _) {
                    this.initiateHeartbeat({
                        streamKey: (0, n.encodeStreamKey)(E),
                        applicationId: t.config.applicationId,
                        questId: t.id
                    });
                    return
                }
                let {
                    quest: o,
                    activity: a
                } = P();
                if (null != a && null != o && o.id === _) {
                    this.initiateHeartbeat({
                        streamKey: d(a.channelId),
                        applicationId: o.config.applicationId,
                        questId: o.id
                    });
                    return
                }
            }, this.handlePostConnectionOpen = () => {
                if (0 === O.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * D))
            }, this.handleSendHeartbeatSuccess = e => {
                let {
                    streamKey: _,
                    userStatus: E
                } = e;
                this.terminateOptimisticProgressUpdateInterval(_), null != E.completedAt ? (this.terminateHeartbeat({
                    streamKey: _,
                    sendTerminalHeartbeat: !1
                }), this.terminateOptimisticProgressUpdateInterval(_)) : this.initiateOptimisticProgressUpdateInterval(_)
            }, this.handleSendHeartbeatFailure = e => {
                let {
                    streamKey: _
                } = e;
                this.terminateOptimisticProgressUpdateInterval(_)
            }, this.handleRunningGamesChange = () => {
                !(this.instantiatedAt + u > Date.now() || O.default.lastFetchedCurrentQuests + u > Date.now()) && this.maybeFetchCurrentQuests()
            }, this.handleVoiceStateChange = () => {
                let e = r.default.getCurrentUserActiveStream(),
                    _ = U();
                null != e && this._handleVoiceStateChange({
                    streamKey: (0, n.encodeStreamKey)(e),
                    channelId: e.channelId,
                    quest: _
                });
                let {
                    quest: E,
                    activity: t
                } = P();
                null != t && this._handleVoiceStateChange({
                    streamKey: d(t.channelId),
                    channelId: t.channelId,
                    quest: E
                })
            }, this._handleVoiceStateChange = e => {
                let {
                    streamKey: _,
                    channelId: E,
                    quest: t
                } = e, o = null == t || !M(E), n = M(E) && !this.streamKeyToHeartbeatState.has(_) && null != t;
                o ? this.terminateHeartbeat({
                    streamKey: _,
                    sendTerminalHeartbeat: !0
                }) : n && this.initiateHeartbeat({
                    streamKey: _,
                    applicationId: t.config.applicationId,
                    questId: t.id
                })
            }, this.handleEmbeddedActivityUpdate = e => {
                let {
                    channelId: _
                } = e, {
                    quest: E,
                    activity: t
                } = P(_), o = d(_), n = (null == t || null == E) && this.streamKeyToHeartbeatState.has(o), r = null != t && null != E && M(_) && !this.streamKeyToHeartbeatState.has(o);
                n ? this.terminateHeartbeat({
                    streamKey: o,
                    sendTerminalHeartbeat: !0
                }) : r && this.initiateHeartbeat({
                    streamKey: o,
                    applicationId: E.config.applicationId,
                    questId: E.id
                })
            }, this.handleStreamCreate = e => {
                let {
                    streamKey: _
                } = e, {
                    channelId: E,
                    ownerId: t
                } = (0, n.decodeStreamKey)(_);
                if (t !== a.default.getId()) return;
                let o = U();
                if (null == o) {
                    this.terminateHeartbeat({
                        streamKey: _,
                        sendTerminalHeartbeat: !1
                    });
                    return
                }
                M(E) && !this.streamKeyToHeartbeatState.has(_) && this.initiateHeartbeat({
                    streamKey: _,
                    applicationId: o.config.applicationId,
                    questId: o.id
                })
            }, this.handleStreamStart = e => {
                let {
                    streamType: _,
                    guildId: E,
                    channelId: t
                } = e, o = U(), r = (0, n.encodeStreamKey)({
                    streamType: _,
                    guildId: E,
                    channelId: t,
                    ownerId: a.default.getId()
                });
                null == o ? this.terminateHeartbeat({
                    streamKey: r,
                    sendTerminalHeartbeat: !0
                }) : M(t) && !this.streamKeyToHeartbeatState.has(r) && this.initiateHeartbeat({
                    streamKey: r,
                    applicationId: o.config.applicationId,
                    questId: o.id
                })
            }, this.handleStreamClose = e => {
                let {
                    streamKey: _
                } = e;
                this.terminateHeartbeat({
                    streamKey: _,
                    sendTerminalHeartbeat: !0
                })
            }, this.actions = {
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
                EMBEDDED_ACTIVITY_INBOUND_UPDATE: this.handleEmbeddedActivityUpdate,
                EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2: this.handleEmbeddedActivityUpdate
            }
        }
    }
    var G = new m
}