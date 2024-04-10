function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StageChannelParticipantNamedIndex: function() {
            return i
        },
        StageChannelParticipantTypes: function() {
            return r
        },
        default: function() {
            return D
        }
    }), n("653041"), n("47120");
    var i, r, s, a, o = n("759174"),
        l = n("933546"),
        u = n("569545"),
        d = n("199902"),
        _ = n("592125"),
        c = n("720202"),
        E = n("271383"),
        I = n("699516"),
        T = n("594174"),
        f = n("979651"),
        S = n("5192"),
        A = n("88751"),
        h = n("427679"),
        m = n("590415"),
        N = n("974609"),
        O = n("981631");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function R(e) {
        var t;
        let {
            speaker: n,
            role: i,
            user: r,
            userNick: s,
            connectedOn: a,
            voiceState: o,
            type: u
        } = e, d = o.selfMute ? "\x01" : "\0", _ = o.selfVideo ? "\0" : "\x01", c = "".concat(null !== (t = null == i ? void 0 : i.position) && void 0 !== t ? t : 999).padStart(3, "0");
        return "".concat(n ? "\0" : "\x01").concat("STREAM" === u ? "\0" : "\x01").concat(d).concat(_).concat(c).concat(a).concat((0, l.default)(s, r))
    }

    function C(e) {
        let {
            user: t,
            voiceState: n
        } = e, i = n.requestToSpeakTimestamp;
        return null == i ? t.id : "".concat(Date.parse(i)).concat(t.id)
    }

    function g(e) {
        return e === m.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === m.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
    }

    function L(e) {
        let {
            speaker: t,
            role: n,
            rtsState: i,
            blocked: r,
            isFriend: s
        } = e, a = [];
        return g(i) && a.push("ALL_REQUESTED_TO_SPEAK"), i === m.RequestToSpeakStates.REQUESTED_TO_SPEAK && a.push("REQUESTED_TO_SPEAK_ONLY"), t ? a.push("SPEAKER") : (null != n ? a.push(n.id) : a.push("NO_ROLE"), a.push("AUDIENCE")), r && a.push("BLOCKED"), s && a.push("FRIEND"), a
    }(s = i || (i = {})).SPEAKER = "SPEAKER", s.AUDIENCE = "AUDIENCE", s.NO_ROLE = "NO_ROLE", s.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", s.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", s.BLOCKED = "BLOCKED", s.FRIEND = "FRIEND", s.SELECTED = "SELECTED", s.MEDIA = "MEDIA", (a = r || (r = {})).VOICE = "VOICE", a.STREAM = "STREAM";
    class D {
        _getParticipantsForUser(e, t) {
            var n, i;
            let r;
            let s = [],
                a = f.default.getVoiceStateForChannel(this.channelId, e);
            if (null == a) return s;
            let o = T.default.getUser(e);
            if (null == o) return null != this.guildId && h.default.isPublic(this.channelId) && c.default.requestMember(this.guildId, e), s;
            let l = null != t ? t[0] : null,
                _ = {
                    user: o,
                    userNick: S.default.getName(this.guildId, this.channelId, o),
                    voiceState: a,
                    role: (0, N.getHighestHoistedRole)(this.guildId, e),
                    speaker: A.default.isSpeaker(e, this.channelId),
                    member: null != this.guildId ? E.default.getMember(this.guildId, e) : null,
                    blocked: I.default.getRelationships()[o.id] === O.RelationshipTypes.BLOCKED,
                    isFriend: I.default.isFriend(o.id),
                    connectedOn: null !== (n = null == l ? void 0 : l.connectedOn) && void 0 !== n ? n : Date.now()
                },
                p = {
                    ..._,
                    type: "VOICE",
                    id: o.id,
                    rtsState: (0, m.getAudienceRequestToSpeakState)(a)
                };
            s.push(p);
            let R = null !== (i = d.default.getStreamForUser(e, this.guildId)) && void 0 !== i ? i : d.default.getActiveStreamForUser(e, this.guildId);
            if (null != R && R.channelId === this.channelId) {
                let e = (0, u.encodeStreamKey)(R);
                r = {
                    ..._,
                    id: e,
                    type: "STREAM",
                    rtsState: m.RequestToSpeakStates.NONE
                }, s.push(r)
            }
            return s
        }
        updateParticipant(e) {
            let t = this.participants[e],
                n = this._getParticipantsForUser(e, t);
            return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
                this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id)
            }), n.forEach(t => {
                this._participantsIndex.set(t.id, t), t.id === e && g(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e)
            }), this.participants[e] = n, !0)
        }
        rebuild() {
            let e = _.default.getChannel(this.channelId);
            if (null == e || !e.isGuildStageVoice()) return !1;
            let t = new Set(Object.keys(f.default.getVoiceStatesForChannel(e.id)));
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
            p(this, "channelId", void 0), p(this, "guildId", void 0), p(this, "participants", {}), p(this, "_participantsIndex", new o.SecondaryIndexMap(L, R)), p(this, "_requestToSpeakIndex", new o.SecondaryIndexMap(() => [], C)), this.channelId = e, this.guildId = null === (t = _.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
        }
    }
}