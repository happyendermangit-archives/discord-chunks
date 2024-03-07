function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return h
        }
    }), E("222007");
    var t = E("689988"),
        o = E("374014"),
        n = E("373469"),
        r = E("42203"),
        a = E("546463"),
        i = E("945956"),
        I = E("316133"),
        T = E("718517"),
        s = E("815496"),
        S = E("448881"),
        N = E("374023"),
        O = E("2973"),
        A = E("227231"),
        R = E("166604"),
        l = E("49111");
    let u = 5 * T.default.Millis.SECOND,
        L = 12 * T.default.Millis.HOUR,
        C = 1 * T.default.Millis.MINUTE,
        D = 30 * T.default.Millis.SECOND,
        c = 1 * T.default.Millis.SECOND;

    function d() {
        var e, _;
        let E = n.default.getStreamerActiveStreamMetadata();
        if ((null == E ? void 0 : E.id) == null) return null;
        let t = a.default.getGameById(E.id);
        if ((null == t ? void 0 : t.id) == null) return null;
        let o = (0, A.getQuestByApplicationId)(O.default.quests, t.id);
        return (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == o ? void 0 : null === (_ = o.userStatus) || void 0 === _ ? void 0 : _.completedAt) != null ? null : o
    }

    function U(e, _) {
        var E;
        let {
            channelId: t
        } = (0, o.decodeStreamKey)(e);
        return null != n.default.getRTCStream(e) && I.default.countVoiceStatesForChannel(t) >= 2 && (null === (E = d()) || void 0 === E ? void 0 : E.config.applicationId) === _
    }
    class M extends t.default {
        maybeFetchCurrentQuests() {
            (0, N.getIsEligibleForQuests)({
                location: R.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            }) && !O.default.isFetchingCurrentQuests && (0, S.fetchCurrentQuests)()
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
                    U(E, t) ? (0, S.sendHeartbeat)({
                        questId: _,
                        streamKey: E,
                        applicationId: t
                    }) : this.terminateHeartbeat(E);
                    let e = this.calculateHeartbeatDurationMs(_);
                    this.sendHeartbeatTimeoutIds.set(E, window.setTimeout(o, e))
                };
                o()
            }, this.calculateHeartbeatDurationMs = e => {
                let _ = O.default.quests.get(e);
                if (null == _ || null == _.config || null == _.userStatus) return C;
                let {
                    streamProgressSeconds: E
                } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes;
                return t - E <= .1 * t ? D : C
            }, this.terminateHeartbeat = e => {
                window.clearTimeout(this.sendHeartbeatTimeoutIds.get(e)), this.sendHeartbeatTimeoutIds.delete(e), this.terminateOptimisticProgressUpdateInterval(e)
            }, this.initiateOptimisticProgressUpdateInterval = e => {
                this.terminateOptimisticProgressUpdateInterval(e), this.optimisticProgressUpdateIntervalIds.set(e, window.setInterval(() => {
                    let _ = d();
                    if (null == _) {
                        this.terminateOptimisticProgressUpdateInterval(e);
                        return
                    }
                    let E = _.userStatus,
                        t = _.config.streamDurationRequirementMinutes * T.default.Seconds.MINUTE,
                        o = this.lastOptimisticallyUpdatedProgressMap.get(e);
                    if (!U(e, _.config.applicationId)) {
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
                            (0, S.optimisticallyUpdateQuestProgress)(_), this.lastOptimisticallyUpdatedProgressMap.set(e, Date.now())
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
                } = e, E = d();
                if (null == E || E.id !== _) return;
                let t = n.default.getCurrentUserActiveStream();
                null != t && this.initiateHeartbeat({
                    streamKey: (0, o.encodeStreamKey)(t),
                    applicationId: E.config.applicationId,
                    questId: E.id
                })
            }, this.handlePostConnectionOpen = () => {
                if (0 === O.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * u))
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
                !(this.instantiatedAt + L > Date.now() || O.default.lastFetchedCurrentQuests + L > Date.now()) && this.maybeFetchCurrentQuests()
            }, this.handleVoiceStateChange = () => {
                let e = n.default.getCurrentUserActiveStream();
                if (null == e) return;
                let _ = (0, o.encodeStreamKey)(e),
                    E = d();
                if (null == E) {
                    this.terminateHeartbeat(_);
                    return
                }
                if (2 > I.default.countVoiceStatesForChannel(e.channelId)) {
                    this.sendHeartbeatTimeoutIds.has(_) && ((0, S.sendHeartbeat)({
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
                    guildId: n
                } = (0, o.decodeStreamKey)(E), a = d();
                if (null == a) {
                    this.terminateHeartbeat(E);
                    return
                }(0, s.trackQuestEvent)(a.id, l.AnalyticEvents.QUEST_STREAMING_STARTED, {
                    media_session_id: i.default.getMediaSessionId(),
                    channel_type: null === (_ = r.default.getChannel(t)) || void 0 === _ ? void 0 : _.type,
                    guild_id: n
                }), !(2 > I.default.countVoiceStatesForChannel(t)) && this.initiateHeartbeat({
                    streamKey: E,
                    applicationId: a.config.applicationId,
                    questId: a.id
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
    var h = new M
}