function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        encodeStreamKeyForActivityQuest: function() {
            return P
        },
        default: function() {
            return B
        }
    }), E("222007");
    var t = E("689988"),
        o = E("191225"),
        n = E("374014"),
        r = E("373469"),
        a = E("271938"),
        i = E("42203"),
        I = E("546463"),
        s = E("945956"),
        T = E("316133"),
        S = E("718517"),
        N = E("815496"),
        O = E("448881"),
        A = E("481244"),
        R = E("374023"),
        l = E("2973"),
        u = E("227231"),
        L = E("166604"),
        C = E("49111"),
        D = E("706530");
    let c = 12 * S.default.Millis.HOUR,
        d = 1 * S.default.Millis.MINUTE,
        U = 1 * S.default.Millis.SECOND,
        M = 5 * S.default.Millis.SECOND,
        h = 1 * S.default.Millis.SECOND,
        P = e => (0, n.encodeStreamKey)({
            streamType: D.StreamTypes.CALL,
            channelId: e,
            ownerId: "1"
        });

    function m() {
        var e, _;
        let E = r.default.getStreamerActiveStreamMetadata();
        if ((null == E ? void 0 : E.id) == null) return null;
        let t = I.default.getGameById(E.id);
        if ((null == t ? void 0 : t.id) == null) return null;
        let o = (0, u.getQuestByApplicationId)(l.default.quests, t.id);
        return (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == o ? void 0 : null === (_ = o.userStatus) || void 0 === _ ? void 0 : _.completedAt) != null ? null : o
    }

    function G(e) {
        return T.default.countVoiceStatesForChannel(e) >= 2
    }

    function p(e) {
        var _;
        let {
            questId: E,
            streamKey: t,
            applicationId: o
        } = e, {
            channelId: a
        } = (0, n.decodeStreamKey)(t), i = G(a), I = null != r.default.getRTCStream(t) && (null === (_ = m()) || void 0 === _ ? void 0 : _.config.applicationId) === o && i, {
            quest: s,
            activity: T
        } = g(), S = (null == s ? void 0 : s.id) === E && (null == s ? void 0 : s.config.applicationId) === o && i && (null == T ? void 0 : T.channelId) === a;
        return I || S
    }

    function g(e) {
        let _ = {
                quest: null,
                activity: null
            },
            E = (0, A.getIsEligibleForActivityQuest)({
                location: L.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            });
        if (!E) return _;
        let t = o.default.getSelfEmbeddedActivities();
        for (let E of t.values()) {
            var n, r, a;
            if (null != e && E.channelId !== e) continue;
            let t = null !== (a = (0, u.getQuestByApplicationId)(l.default.quests, E.applicationId)) && void 0 !== a ? a : null,
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
    class y extends t.default {
        maybeFetchCurrentQuests() {
            (0, R.getIsEligibleForQuests)({
                location: L.QuestsExperimentLocations.QUESTS_MANAGER
            }) && !l.default.isFetchingCurrentQuests && (0, O.fetchCurrentQuests)()
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
                    if (p({
                            questId: _,
                            streamKey: E,
                            applicationId: t
                        })) {
                        (0, O.sendHeartbeat)({
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
                let _ = l.default.quests.get(e);
                if (null == _ || null == _.config || null == _.userStatus) return d;
                let {
                    streamProgressSeconds: E
                } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes, o = (t - E) * S.default.Millis.SECOND;
                return o <= d ? o + U : d
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
                    window.clearTimeout(o), this.streamKeyToHeartbeatState.delete(_), E && (0, O.sendHeartbeat)({
                        questId: e,
                        streamKey: _,
                        terminal: !0
                    })
                }
            }, this.initiateOptimisticProgressUpdateInterval = e => {
                this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
                    var _;
                    let E = m(),
                        {
                            quest: t
                        } = g(),
                        o = null !== (_ = null != E ? E : t) && void 0 !== _ ? _ : null;
                    if (null == o) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    let n = o.userStatus,
                        r = o.config.streamDurationRequirementMinutes * S.default.Seconds.MINUTE,
                        a = this.lastOptimisticallyUpdatedProgressMap.get(e);
                    if (!p({
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
                            E = _ / S.default.Millis.SECOND,
                            t = n.streamProgressSeconds,
                            o = t + E;
                        if (o <= r) {
                            let _ = {
                                ...n,
                                streamProgressSeconds: o
                            };
                            (0, O.optimisticallyUpdateQuestProgress)(_), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
                        }
                    }
                }, h))
            }, this.terminateOptimisticProgressUpdateInterval = e => {
                window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
            }, this.handleEnrollmentSuccess = e => {
                let {
                    enrolledQuestUserStatus: {
                        questId: _
                    }
                } = e, E = r.default.getCurrentUserActiveStream(), t = m();
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
                } = g();
                if (null != a && null != o && o.id === _) {
                    this.initiateHeartbeat({
                        streamKey: P(a.channelId),
                        applicationId: o.config.applicationId,
                        questId: o.id
                    });
                    return
                }
            }, this.handlePostConnectionOpen = () => {
                if (0 === l.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * M))
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
                !(this.instantiatedAt + c > Date.now() || l.default.lastFetchedCurrentQuests + c > Date.now()) && this.maybeFetchCurrentQuests()
            }, this.handleVoiceStateChange = () => {
                let e = r.default.getCurrentUserActiveStream(),
                    _ = m();
                null != e && this._handleVoiceStateChange({
                    streamKey: (0, n.encodeStreamKey)(e),
                    channelId: e.channelId,
                    quest: _
                });
                let {
                    quest: E,
                    activity: t
                } = g();
                null != t && this._handleVoiceStateChange({
                    streamKey: P(t.channelId),
                    channelId: t.channelId,
                    quest: E
                })
            }, this._handleVoiceStateChange = e => {
                let {
                    streamKey: _,
                    channelId: E,
                    quest: t
                } = e, o = null == t || !G(E), n = G(E) && !this.streamKeyToHeartbeatState.has(_) && null != t;
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
                } = g(_), o = P(_), n = (null == t || null == E) && this.streamKeyToHeartbeatState.has(o), r = null != t && null != E && G(_) && !this.streamKeyToHeartbeatState.has(o);
                n ? this.terminateHeartbeat({
                    streamKey: o,
                    sendTerminalHeartbeat: !0
                }) : r && this.initiateHeartbeat({
                    streamKey: o,
                    applicationId: E.config.applicationId,
                    questId: E.id
                })
            }, this.handleStreamCreate = e => {
                var _;
                let {
                    streamKey: E
                } = e, {
                    channelId: t,
                    guildId: o,
                    ownerId: r
                } = (0, n.decodeStreamKey)(E);
                if (r !== a.default.getId()) return;
                let I = m();
                if (null == I) {
                    this.terminateHeartbeat({
                        streamKey: E,
                        sendTerminalHeartbeat: !1
                    });
                    return
                }(0, N.trackQuestEvent)(I.id, C.AnalyticEvents.QUEST_STREAMING_STARTED, {
                    media_session_id: s.default.getMediaSessionId(),
                    channel_type: null === (_ = i.default.getChannel(t)) || void 0 === _ ? void 0 : _.type,
                    guild_id: o
                }), G(t) && !this.streamKeyToHeartbeatState.has(E) && this.initiateHeartbeat({
                    streamKey: E,
                    applicationId: I.config.applicationId,
                    questId: I.id
                })
            }, this.handleStreamStart = e => {
                let {
                    streamType: _,
                    guildId: E,
                    channelId: t
                } = e, o = m(), r = (0, n.encodeStreamKey)({
                    streamType: _,
                    guildId: E,
                    channelId: t,
                    ownerId: a.default.getId()
                });
                null == o ? this.terminateHeartbeat({
                    streamKey: r,
                    sendTerminalHeartbeat: !0
                }) : G(t) && !this.streamKeyToHeartbeatState.has(r) && this.initiateHeartbeat({
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
    var B = new y
}