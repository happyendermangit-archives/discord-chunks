function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StageChannelParticipantNamedIndex: function() {
            return i
        },
        StageChannelParticipantTypes: function() {
            return s
        },
        default: function() {
            return r
        }
    }), n("424973"), n("222007");
    var i, s, r, a, o, l = n("407846"),
        u = n("246846"),
        d = n("374014"),
        c = n("373469"),
        f = n("42203"),
        _ = n("124948"),
        h = n("26989"),
        E = n("27618"),
        g = n("697218"),
        m = n("800762"),
        p = n("387111"),
        S = n("325861"),
        v = n("834052"),
        T = n("808422"),
        I = n("922673"),
        C = n("49111");

    function A(e) {
        var t;
        let {
            speaker: n,
            role: i,
            user: s,
            userNick: r,
            connectedOn: a,
            voiceState: o,
            type: l
        } = e, d = o.selfMute ? "\x01" : "\x00", c = o.selfVideo ? "\x00" : "\x01", f = "".concat(null !== (t = null == i ? void 0 : i.position) && void 0 !== t ? t : 999).padStart(3, "0");
        return "".concat(n ? "\x00" : "\x01").concat("STREAM" === l ? "\x00" : "\x01").concat(d).concat(c).concat(f).concat(a).concat((0, u.default)(r, s))
    }

    function y(e) {
        let {
            user: t,
            voiceState: n
        } = e, i = n.requestToSpeakTimestamp;
        return null == i ? t.id : "".concat(Date.parse(i)).concat(t.id)
    }

    function N(e) {
        return e === T.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
    }

    function R(e) {
        let {
            speaker: t,
            role: n,
            rtsState: i,
            blocked: s,
            isFriend: r
        } = e, a = [];
        return N(i) && a.push("ALL_REQUESTED_TO_SPEAK"), i === T.RequestToSpeakStates.REQUESTED_TO_SPEAK && a.push("REQUESTED_TO_SPEAK_ONLY"), t ? a.push("SPEAKER") : (null != n ? a.push(n.id) : a.push("NO_ROLE"), a.push("AUDIENCE")), s && a.push("BLOCKED"), r && a.push("FRIEND"), a
    }(a = i || (i = {})).SPEAKER = "SPEAKER", a.AUDIENCE = "AUDIENCE", a.NO_ROLE = "NO_ROLE", a.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", a.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", a.BLOCKED = "BLOCKED", a.FRIEND = "FRIEND", a.SELECTED = "SELECTED", a.MEDIA = "MEDIA", (o = s || (s = {})).VOICE = "VOICE", o.STREAM = "STREAM", r = class {
        _getParticipantsForUser(e, t) {
            var n, i;
            let s;
            let r = [],
                a = m.default.getVoiceStateForChannel(this.channelId, e);
            if (null == a) return r;
            let o = g.default.getUser(e);
            if (null == o) return null != this.guildId && v.default.isPublic(this.channelId) && _.default.requestMember(this.guildId, e), r;
            let l = null != t ? t[0] : null,
                u = {
                    user: o,
                    userNick: p.default.getName(this.guildId, this.channelId, o),
                    voiceState: a,
                    role: (0, I.getHighestHoistedRole)(this.guildId, e),
                    speaker: S.default.isSpeaker(e, this.channelId),
                    member: null != this.guildId ? h.default.getMember(this.guildId, e) : null,
                    blocked: E.default.getRelationships()[o.id] === C.RelationshipTypes.BLOCKED,
                    isFriend: E.default.isFriend(o.id),
                    connectedOn: null !== (n = null == l ? void 0 : l.connectedOn) && void 0 !== n ? n : Date.now()
                },
                f = {
                    ...u,
                    type: "VOICE",
                    id: o.id,
                    rtsState: (0, T.getAudienceRequestToSpeakState)(a)
                };
            r.push(f);
            let A = null !== (i = c.default.getStreamForUser(e, this.guildId)) && void 0 !== i ? i : c.default.getActiveStreamForUser(e, this.guildId);
            if (null != A && A.channelId === this.channelId) {
                let e = (0, d.encodeStreamKey)(A);
                s = {
                    ...u,
                    id: e,
                    type: "STREAM",
                    rtsState: T.RequestToSpeakStates.NONE
                }, r.push(s)
            }
            return r
        }
        updateParticipant(e) {
            let t = this.participants[e],
                n = this._getParticipantsForUser(e, t);
            return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
            }), n.forEach(t => {
                this._participantsIndex.set(t.id, t), t.id === e && N(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
            }), this.participants[e] = n, !0)
        }
        rebuild() {
            let e = f.default.getChannel(this.channelId);
            if (null == e || !e.isGuildStageVoice()) return !1;
            let t = new Set(Object.keys(m.default.getVoiceStatesForChannel(e.id)));
            return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), !0
        }
        get version() {
            return this._participantsIndex.version
        }
        size(e) {
            return this._participantsIndex.size(e)
        }
        toArray(e) {
            return this._participantsIndex.values(e, !0)
        }
        getParticipant(e) {
            var t;
            return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
        }
        get requestToSpeakVersion() {
            return this._requestToSpeakIndex.version
        }
        getRequestToSpeakParticipants() {
            return this._requestToSpeakIndex.values(void 0, !0)
        }
        constructor(e) {
            var t;
            this.participants = {}, this._participantsIndex = new l.default(R, A), this._requestToSpeakIndex = new l.default(() => [], y), this.channelId = e, this.guildId = null === (t = f.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
        }
    }
}