function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return P
        }
    }), E("222007");
    var t = E("689988"),
        o = E("374014"),
        n = E("373469"),
        r = E("271938"),
        a = E("42203"),
        i = E("546463"),
        I = E("945956"),
        s = E("316133"),
        T = E("718517"),
        S = E("815496"),
        N = E("448881"),
        O = E("374023"),
        A = E("2973"),
        R = E("227231"),
        l = E("166604"),
        u = E("49111");
    let L = 5 * T.default.Millis.SECOND,
        C = 12 * T.default.Millis.HOUR,
        D = 1 * T.default.Millis.MINUTE,
        c = 30 * T.default.Millis.SECOND,
        d = 1 * T.default.Millis.SECOND;

    function U() {
        var e, _;
        let E = n.default.getStreamerActiveStreamMetadata();
        if ((null == E ? void 0 : E.id) == null) return null;
        let t = i.default.getGameById(E.id);
        if ((null == t ? void 0 : t.id) == null) return null;
        let o = (0, R.getQuestByApplicationId)(A.default.quests, t.id);
        return (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == o ? void 0 : null === (_ = o.userStatus) || void 0 === _ ? void 0 : _.completedAt) != null ? null : o
    }

    function M(e, _) {
        var E;
        let {
            channelId: t
        } = (0, o.decodeStreamKey)(e);
        return null != n.default.getRTCStream(e) && s.default.countVoiceStatesForChannel(t) >= 2 && (null === (E = U()) || void 0 === E ? void 0 : E.config.applicationId) === _
    }
    class h extends t.default {
        maybeFetchCurrentQuests() {
            (0, O.getIsEligibleForQuests)({
                location: l.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            }) && !A.default.isFetchingCurrentQuests && (0, N.fetchCurrentQuests)()
        }
        constructor(...e) {
            super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatTimeoutIds = new Map, this.optimisticProgressUpdateIntervalIds = new Map, this.lastOptimisticallyUpdatedProgressMap = new Map, this.initiateHeartbeat = e => {
                let {
                    questId: _,
                    streamKey: E,
                    applicationId: t
                } = e;
                this.terminateHeartbeat(E);
                let o = () => {
                    M(E, t) ? (0, N.sendHeartbeat)({
                        questId: _,
                        streamKey: E,
                        applicationId: t
                    }) : this.terminateHeartbeat(E);
                    let e = this.calculateHeartbeatDurationMs(_);
                    this.sendHeartbeatTimeoutIds.set(E, window.setTimeout(o, e))
                };
                o()
            }, this.calculateHeartbeatDurationMs = e => {
                let _ = A.default.quests.get(e);
                if (null == _ || null == _.config || null == _.userStatus) return D;
                let {
                    streamProgressSeconds: E
                } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes;
                return t - E <= .1 * t ? c : D
            }, this.terminateHeartbeat = e => {
                window.clearTimeout(this.sendHeartbeatTimeoutIds.get(e)), this.sendHeartbeatTimeoutIds.delete(e), this.terminateOptimisticProgressUpdateInterval(e)
            }, this.initiateOptimisticProgressUpdateInterval = e => {
                this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
                    let _ = U();
                    if (null == _) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    let E = _.userStatus,
                        t = _.config.streamDurationRequirementMinutes * T.default.Seconds.MINUTE,
                        o = this.lastOptimisticallyUpdatedProgressMap.get(e);
                    if (!M(e, _.config.applicationId)) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    if (null == o) this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now());
                    else if (null != E) {
                        let _ = Date.now() - o,
                            n = _ / T.default.Millis.SECOND,
                            r = E.streamProgressSeconds,
                            a = r + n;
                        if (a <= t) {
                            let _ = {
                                ...E,
                                streamProgressSeconds: a
                            };
                            (0, N.optimisticallyUpdateQuestProgress)(_), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
                        }
                    }
                }, d))
            }, this.terminateOptimisticProgressUpdateInterval = e => {
                window.clearInterval(this.optimisticProgressUpdateIntervalIds.get(e)), this.optimisticProgressUpdateIntervalIds.delete(e), this.lastOptimisticallyUpdatedProgressMap.delete(e)
            }, this.handleEnrollmentSuccess = e => {
                let {
                    enrolledQuestUserStatus: {
                        questId: _
                    }
                } = e, E = U();
                if (null == E || E.id !== _) return;
                let t = n.default.getCurrentUserActiveStream();
                null != t && this.initiateHeartbeat({
                    streamKey: (0, o.encodeStreamKey)(t),
                    applicationId: E.config.applicationId,
                    questId: E.id
                })
            }, this.handlePostConnectionOpen = () => {
                if (0 === A.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * L))
            }, this.handleSendHeartbeatSuccess = e => {
                let {
                    streamKey: _,
                    userStatus: E
                } = e;
                this.terminateOptimisticProgressUpdateInterval(_), null != E.completedAt ? (this.terminateHeartbeat(_), this.terminateOptimisticProgressUpdateInterval(_)) : this.initiateOptimisticProgressUpdateInterval(_)
            }, this.handleSendHeartbeatFailure = e => {
                let {
                    streamKey: _
                } = e;
                this.terminateOptimisticProgressUpdateInterval(_)
            }, this.handleRunningGamesChange = () => {
                !(this.instantiatedAt + C > Date.now() || A.default.lastFetchedCurrentQuests + C > Date.now()) && this.maybeFetchCurrentQuests()
            }, this.handleVoiceStateChange = () => {
                let e = n.default.getCurrentUserActiveStream();
                if (null == e) return;
                let _ = (0, o.encodeStreamKey)(e),
                    E = U();
                if (null == E) {
                    this.terminateHeartbeat(_);
                    return
                }
                if (2 > s.default.countVoiceStatesForChannel(e.channelId)) {
                    this.sendHeartbeatTimeoutIds.has(_) && ((0, N.sendHeartbeat)({
                        questId: E.id,
                        streamKey: _,
                        applicationId: E.config.applicationId
                    }), this.terminateHeartbeat(_));
                    return
                }!this.sendHeartbeatTimeoutIds.has(_) && this.initiateHeartbeat({
                    streamKey: _,
                    applicationId: E.config.applicationId,
                    questId: E.id
                })
            }, this.handleStreamCreate = e => {
                var _;
                let {
                    streamKey: E
                } = e, {
                    channelId: t,
                    guildId: n,
                    ownerId: i
                } = (0, o.decodeStreamKey)(E);
                if (i !== r.default.getId()) return;
                let T = U();
                if (null == T) {
                    this.terminateHeartbeat(E);
                    return
                }(0, S.trackQuestEvent)(T.id, u.AnalyticEvents.QUEST_STREAMING_STARTED, {
                    media_session_id: I.default.getMediaSessionId(),
                    channel_type: null === (_ = a.default.getChannel(t)) || void 0 === _ ? void 0 : _.type,
                    guild_id: n
                }), !(2 > s.default.countVoiceStatesForChannel(t)) && this.initiateHeartbeat({
                    streamKey: E,
                    applicationId: T.config.applicationId,
                    questId: T.id
                })
            }, this.handleStreamClose = e => {
                let {
                    streamKey: _
                } = e;
                this.terminateHeartbeat(_)
            }, this.actions = {
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                QUESTS_SEND_HEARTBEAT_FAILURE: this.handleSendHeartbeatFailure,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_CREATE: this.handleStreamCreate,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V1: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange
            }
        }
    }
    var P = new h
}