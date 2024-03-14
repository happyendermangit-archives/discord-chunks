function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelRTCParticipantsIndexes: function() {
            return i
        },
        default: function() {
            return s
        }
    }), n("222007"), n("808653"), n("424973");
    var i, s, r, a = n("917351"),
        o = n("407846"),
        l = n("899633"),
        u = n("191225"),
        d = n("374014"),
        c = n("373469"),
        f = n("271938"),
        _ = n("950104"),
        E = n("42203"),
        h = n("42887"),
        g = n("280168"),
        m = n("697218"),
        p = n("555035"),
        S = n("800762"),
        v = n("387111"),
        T = n("246846"),
        I = n("99795"),
        C = n("49111"),
        A = n("353927");
    let y = "__EMBEDDED_ACTIVITIES__";

    function N(e) {
        switch (e.type) {
            case I.ParticipantTypes.ACTIVITY:
                return "\x00".concat(e.sortKey);
            case I.ParticipantTypes.HIDDEN_STREAM:
            case I.ParticipantTypes.STREAM:
                return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, T.default)(e.userNick, e.user), "\x02");
            case I.ParticipantTypes.USER:
                var t, n;
                let i = "\x04";
                return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? i = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (i = "\x03"), "".concat(i).concat((0, T.default)(e.userNick, e.user))
        }
    }(r = i || (i = {})).VIDEO = "VIDEO", r.STREAM = "STREAM", r.FILTERED = "FILTERED", r.SPEAKING = "SPEAKING", r.ACTIVITY = "ACTIVITY", s = class {
        get version() {
            return this.participantByIndex.version
        }
        size(e) {
            return this.participantByIndex.size(e)
        }
        toArray(e) {
            return this.participantByIndex.values(e, !0)
        }
        rebuild() {
            let e = E.default.getChannel(this.channelId);
            if (null == e || e.type === C.ChannelTypes.GUILD_TEXT) return !1;
            if (this.call = _.default.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
            let t = new Set(e.isGuildVocalOrThread() ? Object.keys(S.default.getVoiceStatesForChannel(e.id)) : e.recipients);
            return t.add(f.default.getId()), c.default.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
                let {
                    ownerId: n
                } = e;
                return t.add(n)
            }), this.participantByIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), this.updateEmbeddedActivities(), !0
        }
        getParticipant(e) {
            var t;
            return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null
        }
        updateEmbeddedActivities() {
            return this.updateParticipant(y)
        }
        hasEmbeddedActivity() {
            let e = this.participants[y];
            return null != e && e.length > 0
        }
        updateParticipant(e) {
            let t = this.participants[e],
                n = e === y ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
            return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                this.participantByIndex.delete(e.id)
            }), n.forEach(e => {
                this.participantByIndex.set(e.id, e)
            }), this.participants[e] = n, !0)
        }
        updateParticipantSpeaking(e) {
            var t, n;
            return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((t, n) => {
                if (n.type === I.ParticipantTypes.USER) {
                    let t = (0, l.getIsSpeaking)({
                        userId: e,
                        checkIsMuted: !0
                    });
                    return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, {
                        ...n,
                        speaking: t,
                        lastSpoke: this.lastSpoke[e],
                        soundsharing: g.default.isSoundSharing(e)
                    }), !0
                }
                return t
            }, !1)) && void 0 !== n && n
        }
        updateParticipantQuality(e, t, n) {
            var i, s;
            return null !== (s = null === (i = this.participants[e]) || void 0 === i ? void 0 : i.reduce((e, i) => i.type === I.ParticipantTypes.STREAM ? (this.participantByIndex.set(i.id, {
                ...i,
                maxResolution: t,
                maxFrameRate: n
            }), !0) : e, !1)) && void 0 !== s && s
        }
        _getEmbeddedActivities() {
            let e = u.default.getEmbeddedActivitiesForChannel(this.channelId),
                t = u.default.getSelfEmbeddedActivityForChannel(this.channelId);
            return null == t ? e : (0, a.uniqBy)([...e, t], e => e.applicationId)
        }
        _getParticipantsForEmbeddedActivities() {
            return this._getEmbeddedActivities().map((e, t) => {
                var n, i;
                return {
                    type: I.ParticipantTypes.ACTIVITY,
                    id: e.applicationId,
                    activityType: C.ActivityTypes.PLAYING,
                    activityUrl: e.url,
                    participants: new Set(e.userIds),
                    guildId: null !== (i = null === (n = E.default.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                    sortKey: t.toString()
                }
            })
        }
        _getParticipantsForUser(e) {
            var t, n, i, s, r, a;
            let o, u;
            let _ = [],
                T = m.default.getUser(e);
            if (null == T) return _;
            let C = S.default.getVoiceStateForChannel(this.channelId, e),
                y = S.default.getVoicePlatformForChannel(this.channelId, e),
                N = E.default.getChannel(this.channelId),
                R = null !== (i = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== i && i;
            (null != C || R) && (o = {
                type: I.ParticipantTypes.USER,
                ...p.default.getUserStreamData(e, null == N ? void 0 : N.getGuildId()),
                user: T,
                id: T.id,
                voiceState: C,
                voicePlatform: y,
                speaking: (0, l.getIsSpeaking)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (s = this.lastSpoke[e]) && void 0 !== s ? s : 0,
                soundsharing: g.default.isSoundSharing(e),
                ringing: R,
                userNick: v.default.getName(null == N ? void 0 : N.getGuildId(), this.channelId, T),
                localVideoDisabled: h.default.isLocalVideoDisabled(T.id)
            }, _.push(o));
            let O = null !== (r = c.default.getStreamForUser(e, null == N ? void 0 : N.getGuildId())) && void 0 !== r ? r : c.default.getActiveStreamForUser(e, null == N ? void 0 : N.getGuildId());
            if (null != O && O.channelId === this.channelId) {
                let t = (0, d.encodeStreamKey)(O),
                    n = this.getParticipant(t),
                    i = O.ownerId === f.default.getId() && c.default.isSelfStreamHidden(this.channelId),
                    s = (null == n ? void 0 : n.type) === I.ParticipantTypes.STREAM ? {
                        maxResolution: null != n.maxResolution ? {
                            ...n.maxResolution
                        } : void 0,
                        maxFrameRate: n.maxFrameRate
                    } : null;
                u = {
                    ...p.default.getUserStreamData(e, null == N ? void 0 : N.getGuildId(), A.MediaEngineContextTypes.STREAM),
                    ...s,
                    type: i ? I.ParticipantTypes.HIDDEN_STREAM : I.ParticipantTypes.STREAM,
                    id: t,
                    userVideo: null !== (a = null == C ? void 0 : C.selfVideo) && void 0 !== a && a,
                    user: T,
                    userNick: v.default.getName(null == N ? void 0 : N.getGuildId(), this.channelId, T),
                    stream: O
                }, _.push(u)
            }
            return _
        }
        constructor(e) {
            this.participants = {}, this.lastSpoke = {}, this.participantByIndex = new o.default(e => {
                var t;
                let n = [];
                return e.type === I.ParticipantTypes.USER && e.speaking && n.push("SPEAKING"), e.type === I.ParticipantTypes.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push("VIDEO"), !e.localVideoDisabled && n.push("FILTERED")) : (0, I.isStreamParticipant)(e) && (n.push("STREAM"), e.type !== I.ParticipantTypes.HIDDEN_STREAM && null != e.streamId && n.push("FILTERED")), e.type === I.ParticipantTypes.ACTIVITY && n.push("ACTIVITY"), n
            }, N), this.channelId = e
        }
    }
}