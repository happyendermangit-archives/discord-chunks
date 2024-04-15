function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelRTCParticipantsIndexes: function() {
            return i
        },
        default: function() {
            return L
        }
    }), n("47120"), n("724458"), n("653041");
    var i, r, s = n("392711"),
        a = n("759174"),
        o = n("586902"),
        l = n("317381"),
        u = n("569545"),
        d = n("199902"),
        _ = n("314897"),
        c = n("523746"),
        E = n("592125"),
        I = n("131951"),
        T = n("606304"),
        f = n("594174"),
        S = n("33039"),
        h = n("979651"),
        A = n("5192"),
        m = n("933546"),
        N = n("354459"),
        p = n("981631"),
        O = n("65154");

    function R(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let C = "__EMBEDDED_ACTIVITIES__";

    function g(e) {
        switch (e.type) {
            case N.ParticipantTypes.ACTIVITY:
                return "\0".concat(e.sortKey);
            case N.ParticipantTypes.HIDDEN_STREAM:
            case N.ParticipantTypes.STREAM:
                return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, m.default)(e.userNick, e.user), "\x02");
            case N.ParticipantTypes.USER:
                var t, n;
                let i = "\x04";
                return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? i = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (i = "\x03"), "".concat(i).concat((0, m.default)(e.userNick, e.user))
        }
    }(r = i || (i = {})).VIDEO = "VIDEO", r.STREAM = "STREAM", r.FILTERED = "FILTERED", r.SPEAKING = "SPEAKING", r.ACTIVITY = "ACTIVITY";
    class L {
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
            if (null == e || e.type === p.ChannelTypes.GUILD_TEXT) return !1;
            if (this.call = c.default.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
            let t = new Set(e.isGuildVocalOrThread() ? Object.keys(h.default.getVoiceStatesForChannel(e.id)) : e.recipients);
            return t.add(_.default.getId()), d.default.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
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
            return this.updateParticipant(C)
        }
        hasEmbeddedActivity() {
            let e = this.participants[C];
            return null != e && e.length > 0
        }
        updateParticipant(e) {
            let t = this.participants[e],
                n = e === C ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
            return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                this.participantByIndex.delete(e.id)
            }), n.forEach(e => {
                this.participantByIndex.set(e.id, e)
            }), this.participants[e] = n, !0)
        }
        updateParticipantSpeaking(e) {
            var t, n;
            return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((t, n) => {
                if (n.type === N.ParticipantTypes.USER) {
                    let t = (0, o.getIsSpeaking)({
                        userId: e,
                        checkIsMuted: !0
                    });
                    return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, {
                        ...n,
                        speaking: t,
                        lastSpoke: this.lastSpoke[e],
                        soundsharing: T.default.isSoundSharing(e)
                    }), !0
                }
                return t
            }, !1)) && void 0 !== n && n
        }
        updateParticipantQuality(e, t, n) {
            var i, r;
            return null !== (r = null === (i = this.participants[e]) || void 0 === i ? void 0 : i.reduce((e, i) => i.type === N.ParticipantTypes.STREAM ? (this.participantByIndex.set(i.id, {
                ...i,
                maxResolution: t,
                maxFrameRate: n
            }), !0) : e, !1)) && void 0 !== r && r
        }
        _getEmbeddedActivities() {
            let e = l.default.getEmbeddedActivitiesForChannel(this.channelId),
                t = l.default.getSelfEmbeddedActivityForChannel(this.channelId);
            return null == t ? e : (0, s.uniqBy)([...e, t], e => e.applicationId)
        }
        _getParticipantsForEmbeddedActivities() {
            return this._getEmbeddedActivities().map((e, t) => {
                var n, i;
                return {
                    type: N.ParticipantTypes.ACTIVITY,
                    id: e.applicationId,
                    activityType: p.ActivityTypes.PLAYING,
                    activityUrl: e.url,
                    participants: new Set(e.userIds),
                    guildId: null !== (i = null === (n = E.default.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== i ? i : null,
                    sortKey: t.toString()
                }
            })
        }
        _getParticipantsForUser(e) {
            var t, n, i, r, s, a;
            let l, c;
            let m = [],
                p = f.default.getUser(e);
            if (null == p) return m;
            let R = h.default.getVoiceStateForChannel(this.channelId, e),
                C = h.default.getVoicePlatformForChannel(this.channelId, e),
                g = E.default.getChannel(this.channelId),
                L = null !== (i = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== i && i;
            (null != R || L) && (l = {
                type: N.ParticipantTypes.USER,
                ...S.default.getUserStreamData(e, null == g ? void 0 : g.getGuildId()),
                user: p,
                id: p.id,
                voiceState: R,
                voicePlatform: C,
                speaking: (0, o.getIsSpeaking)({
                    userId: e,
                    checkIsMuted: !0
                }),
                lastSpoke: null !== (r = this.lastSpoke[e]) && void 0 !== r ? r : 0,
                soundsharing: T.default.isSoundSharing(e),
                ringing: L,
                userNick: A.default.getName(null == g ? void 0 : g.getGuildId(), this.channelId, p),
                localVideoDisabled: I.default.isLocalVideoDisabled(p.id)
            }, m.push(l));
            let D = null !== (s = d.default.getStreamForUser(e, null == g ? void 0 : g.getGuildId())) && void 0 !== s ? s : d.default.getActiveStreamForUser(e, null == g ? void 0 : g.getGuildId());
            if (null != D && D.channelId === this.channelId) {
                let t = (0, u.encodeStreamKey)(D),
                    n = this.getParticipant(t),
                    i = D.ownerId === _.default.getId() && d.default.isSelfStreamHidden(this.channelId),
                    r = (null == n ? void 0 : n.type) === N.ParticipantTypes.STREAM ? {
                        maxResolution: null != n.maxResolution ? {
                            ...n.maxResolution
                        } : void 0,
                        maxFrameRate: n.maxFrameRate
                    } : null;
                c = {
                    ...S.default.getUserStreamData(e, null == g ? void 0 : g.getGuildId(), O.MediaEngineContextTypes.STREAM),
                    ...r,
                    type: i ? N.ParticipantTypes.HIDDEN_STREAM : N.ParticipantTypes.STREAM,
                    id: t,
                    userVideo: null !== (a = null == R ? void 0 : R.selfVideo) && void 0 !== a && a,
                    user: p,
                    userNick: A.default.getName(null == g ? void 0 : g.getGuildId(), this.channelId, p),
                    stream: D
                }, m.push(c)
            }
            return m
        }
        constructor(e) {
            R(this, "channelId", void 0), R(this, "call", void 0), R(this, "participants", {}), R(this, "lastSpoke", {}), R(this, "participantByIndex", new a.SecondaryIndexMap(e => {
                var t;
                let n = [];
                return e.type === N.ParticipantTypes.USER && e.speaking && n.push("SPEAKING"), e.type === N.ParticipantTypes.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push("VIDEO"), !e.localVideoDisabled && n.push("FILTERED")) : (0, N.isStreamParticipant)(e) && (n.push("STREAM"), e.type !== N.ParticipantTypes.HIDDEN_STREAM && null != e.streamId && n.push("FILTERED")), e.type === N.ParticipantTypes.ACTIVITY && n.push("ACTIVITY"), n
            }, g)), this.channelId = e
        }
    }
}