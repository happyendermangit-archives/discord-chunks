function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        default: function() {
            return M
        }
    }), E("222007");
    var t = E("689988"),
        o = E("374014"),
        n = E("373469"),
        r = E("271938"),
        a = E("42203"),
        i = E("546463"),
        I = E("945956"),
        T = E("316133"),
        s = E("718517"),
        S = E("815496"),
        N = E("448881"),
        O = E("374023"),
        A = E("2973"),
        R = E("227231"),
        l = E("166604"),
        u = E("49111");
    let L = 5 * s.default.Millis.SECOND,
        C = 12 * s.default.Millis.HOUR,
        D = 1 * s.default.Millis.MINUTE,
        c = 30 * s.default.Millis.SECOND;

    function d() {
        var e, _;
        let E = n.default.getStreamerActiveStreamMetadata();
        if ((null == E ? void 0 : E.id) == null) return null;
        let t = i.default.getGameById(E.id);
        if ((null == t ? void 0 : t.id) == null) return null;
        let o = (0, R.getQuestByApplicationId)(A.default.quests, t.id);
        return (null == o ? void 0 : null === (e = o.userStatus) || void 0 === e ? void 0 : e.enrolledAt) == null || (null == o ? void 0 : null === (_ = o.userStatus) || void 0 === _ ? void 0 : _.completedAt) != null ? null : o
    }
    class U extends t.default {
        maybeFetchCurrentQuests() {
            (0, O.getIsEligibleForQuests)({
                location: l.QuestsExperimentLocations.QUESTS_MANAGER,
                autoTrackExposure: !1
            }) && !A.default.isFetchingCurrentQuests && (0, N.fetchCurrentQuests)()
        }
        constructor(...e) {
            super(...e), this.instantiatedAt = Date.now(), this.sendHeartbeatTimeoutIds = new Map, this.initiateHeartbeat = e => {
                let {
                    questId: _,
                    streamKey: E,
                    applicationId: t
                } = e;
                this.terminateHeartbeat(E);
                let {
                    channelId: r
                } = (0, o.decodeStreamKey)(E), a = () => {
                    var e;
                    null != n.default.getRTCStream(E) && T.default.countVoiceStatesForChannel(r) >= 2 && (null === (e = d()) || void 0 === e ? void 0 : e.config.applicationId) === t && (0, N.sendHeartbeat)({
                        questId: _,
                        streamKey: E,
                        applicationId: t
                    });
                    let o = this.calculateHeartbeatDurationMs(_);
                    this.sendHeartbeatTimeoutIds.set(E, window.setTimeout(a, o))
                };
                a()
            }, this.calculateHeartbeatDurationMs = e => {
                let _ = A.default.quests.get(e);
                if (null == _ || null == _.config || null == _.userStatus) return D;
                let {
                    streamProgressSeconds: E
                } = _.userStatus, t = 60 * _.config.streamDurationRequirementMinutes;
                return t - E <= .1 * t ? c : D
            }, this.terminateHeartbeat = e => {
                window.clearTimeout(this.sendHeartbeatTimeoutIds.get(e)), this.sendHeartbeatTimeoutIds.delete(e)
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
                if (0 === A.default.lastFetchedCurrentQuests) window.setTimeout(this.maybeFetchCurrentQuests, Math.floor(Math.random() * L))
            }, this.handleSendHeartbeatSuccess = e => {
                let {
                    streamKey: _,
                    userStatus: E
                } = e;
                null != E.completedAt && this.terminateHeartbeat(_)
            }, this.handleRunningGamesChange = () => {
                !(this.instantiatedAt + C > Date.now() || A.default.lastFetchedCurrentQuests + C > Date.now()) && this.maybeFetchCurrentQuests()
            }, this.handleVoiceStateChange = () => {
                let e = n.default.getCurrentUserActiveStream();
                if (null == e) return;
                let _ = (0, o.encodeStreamKey)(e),
                    E = d();
                if (null == E) {
                    this.terminateHeartbeat(_);
                    return
                }
                if (2 > T.default.countVoiceStatesForChannel(e.channelId)) {
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
            }, this.handleStreamStart = e => {
                var _;
                let {
                    streamType: E,
                    guildId: t,
                    channelId: n
                } = e, i = (0, o.encodeStreamKey)({
                    streamType: E,
                    guildId: t,
                    channelId: n,
                    ownerId: r.default.getId()
                }), s = d();
                if (null == s) {
                    this.terminateHeartbeat(i);
                    return
                }(0, S.trackQuestEvent)(s.id, u.AnalyticEvents.QUEST_STREAMING_STARTED, {
                    media_session_id: I.default.getMediaSessionId(),
                    channel_type: null === (_ = a.default.getChannel(n)) || void 0 === _ ? void 0 : _.type,
                    guild_id: t
                }), !(2 > T.default.countVoiceStatesForChannel(n)) && this.initiateHeartbeat({
                    streamKey: i,
                    applicationId: s.config.applicationId,
                    questId: s.id
                })
            }, this.handleStreamClose = e => {
                let {
                    streamKey: _
                } = e;
                this.terminateHeartbeat(_)
            }, this.actions = {
                QUESTS_ENROLL_SUCCESS: this.handleEnrollmentSuccess,
                QUESTS_SEND_HEARTBEAT_SUCCESS: this.handleSendHeartbeatSuccess,
                POST_CONNECTION_OPEN: this.handlePostConnectionOpen,
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                STREAM_START: this.handleStreamStart,
                STREAM_CLOSE: this.handleStreamClose,
                PASSIVE_UPDATE_V1: this.handleVoiceStateChange,
                VOICE_STATE_UPDATES: this.handleVoiceStateChange
            }
        }
    }
    var M = new U
}