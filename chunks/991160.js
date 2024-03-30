function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        StageChannelParticipantNamedIndex: function() {
            return i
        },
        StageChannelParticipantTypes: function() {
            return a
        },
        default: function() {
            return D
        }
    });
    var r, o, i, a, u = n("727309"),
        s = n("751748"),
        l = n("736381"),
        c = n("73013"),
        f = n("935741"),
        d = n("751703"),
        _ = n("957808"),
        E = n("776982"),
        p = n("208454"),
        m = n("665863"),
        y = n("62957"),
        I = n("488764"),
        h = n("487181"),
        O = n("672933"),
        T = n("242654"),
        S = n("281767");

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function A(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                g(e, t, n[t])
            })
        }
        return e
    }

    function b(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function N(e) {
        var t, n = e.speaker,
            r = e.role,
            o = e.user,
            i = e.userNick,
            a = e.connectedOn,
            u = e.voiceState,
            l = e.type,
            c = u.selfMute ? "\x01" : "\0",
            f = u.selfVideo ? "\0" : "\x01",
            d = "".concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, "0");
        return "".concat(n ? "\0" : "\x01").concat("STREAM" === l ? "\0" : "\x01").concat(c).concat(f).concat(d).concat(a).concat((0, s.default)(i, o))
    }

    function R(e) {
        var t = e.user,
            n = e.voiceState.requestToSpeakTimestamp;
        return null == n ? t.id : "".concat(Date.parse(n)).concat(t.id)
    }

    function C(e) {
        return e === O.RequestToSpeakStates.REQUESTED_TO_SPEAK || e === O.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
    }

    function P(e) {
        var t = e.speaker,
            n = e.role,
            r = e.rtsState,
            o = e.blocked,
            i = e.isFriend,
            a = [];
        return C(r) && a.push("ALL_REQUESTED_TO_SPEAK"), r === O.RequestToSpeakStates.REQUESTED_TO_SPEAK && a.push("REQUESTED_TO_SPEAK_ONLY"), t ? a.push("SPEAKER") : (null != n ? a.push(n.id) : a.push("NO_ROLE"), a.push("AUDIENCE")), o && a.push("BLOCKED"), i && a.push("FRIEND"), a
    }(r = i || (i = {})).SPEAKER = "SPEAKER", r.AUDIENCE = "AUDIENCE", r.NO_ROLE = "NO_ROLE", r.ALL_REQUESTED_TO_SPEAK = "ALL_REQUESTED_TO_SPEAK", r.REQUESTED_TO_SPEAK_ONLY = "REQUESTED_TO_SPEAK_ONLY", r.BLOCKED = "BLOCKED", r.FRIEND = "FRIEND", r.SELECTED = "SELECTED", r.MEDIA = "MEDIA", (o = a || (a = {})).VOICE = "VOICE", o.STREAM = "STREAM";
    var D = function() {
        var e, t, n;

        function r(e) {
            var t;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), g(this, "channelId", void 0), g(this, "guildId", void 0), g(this, "participants", {}), g(this, "_participantsIndex", new u.SecondaryIndexMap(P, N)), g(this, "_requestToSpeakIndex", new u.SecondaryIndexMap(function() {
                return []
            }, R)), this.channelId = e, this.guildId = null === (t = f.default.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId()
        }
        return e = r, t = [{
            key: "_getParticipantsForUser",
            value: function(e, t) {
                var n, r, o, i = [],
                    a = m.default.getVoiceStateForChannel(this.channelId, e);
                if (null == a) return i;
                var u = p.default.getUser(e);
                if (null == u) return null != this.guildId && h.default.isPublic(this.channelId) && d.default.requestMember(this.guildId, e), i;
                var s = null != t ? t[0] : null,
                    f = {
                        user: u,
                        userNick: y.default.getName(this.guildId, this.channelId, u),
                        voiceState: a,
                        role: (0, T.getHighestHoistedRole)(this.guildId, e),
                        speaker: I.default.isSpeaker(e, this.channelId),
                        member: null != this.guildId ? _.default.getMember(this.guildId, e) : null,
                        blocked: E.default.getRelationships()[u.id] === S.RelationshipTypes.BLOCKED,
                        isFriend: E.default.isFriend(u.id),
                        connectedOn: null !== (n = null == s ? void 0 : s.connectedOn) && void 0 !== n ? n : Date.now()
                    },
                    v = b(A({}, f), {
                        type: "VOICE",
                        id: u.id,
                        rtsState: (0, O.getAudienceRequestToSpeakState)(a)
                    });
                i.push(v);
                var g = null !== (o = c.default.getStreamForUser(e, this.guildId)) && void 0 !== o ? o : c.default.getActiveStreamForUser(e, this.guildId);
                if (null != g && g.channelId === this.channelId) {
                    var N = (0, l.encodeStreamKey)(g);
                    r = b(A({}, f), {
                        id: N,
                        type: "STREAM",
                        rtsState: O.RequestToSpeakStates.NONE
                    }), i.push(r)
                }
                return i
            }
        }, {
            key: "updateParticipant",
            value: function(e) {
                var t = this,
                    n = this.participants[e],
                    r = this._getParticipantsForUser(e, n);
                return (null != n || 0 !== r.length) && (null == n || n.forEach(function(e) {
                    t._participantsIndex.delete(e.id), t._requestToSpeakIndex.delete(e.id)
                }), r.forEach(function(n) {
                    t._participantsIndex.set(n.id, n), n.id === e && C(n.rtsState) ? t._requestToSpeakIndex.set(e, n) : t._requestToSpeakIndex.delete(e)
                }), this.participants[e] = r, !0)
            }
        }, {
            key: "rebuild",
            value: function() {
                var e = this,
                    t = f.default.getChannel(this.channelId);
                if (null == t || !t.isGuildStageVoice()) return !1;
                var n = new Set(Object.keys(m.default.getVoiceStatesForChannel(t.id)));
                return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, n.forEach(function(t) {
                    return e.updateParticipant(t)
                }), !0
            }
        }, {
            key: "version",
            get: function() {
                return this._participantsIndex.version
            }
        }, {
            key: "size",
            value: function(e) {
                return this._participantsIndex.size(e)
            }
        }, {
            key: "toArray",
            value: function(e) {
                return this._participantsIndex.values(e, !0)
            }
        }, {
            key: "getParticipant",
            value: function(e) {
                var t;
                return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null
            }
        }, {
            key: "requestToSpeakVersion",
            get: function() {
                return this._requestToSpeakIndex.version
            }
        }, {
            key: "getRequestToSpeakParticipants",
            value: function() {
                return this._requestToSpeakIndex.values(void 0, !0)
            }
        }], v(e.prototype, t), n && v(e, n), r
    }()
}