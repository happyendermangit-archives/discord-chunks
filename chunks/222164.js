function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelRTCParticipantsIndexes: function() {
            return o
        },
        default: function() {
            return D
        }
    });
    var r, o, i = n("392711"),
        a = n("727309"),
        u = n("904435"),
        s = n("632142"),
        l = n("736381"),
        c = n("73013"),
        f = n("217014"),
        d = n("518254"),
        _ = n("935741"),
        E = n("335911"),
        p = n("380019"),
        m = n("208454"),
        y = n("712465"),
        I = n("665863"),
        h = n("62957"),
        O = n("751748"),
        T = n("656462"),
        S = n("281767"),
        v = n("439386");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function b(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function N(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                b(e, t, n[t])
            })
        }
        return e
    }

    function R(e, t) {
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
    var C = "__EMBEDDED_ACTIVITIES__";

    function P(e) {
        switch (e.type) {
            case T.ParticipantTypes.ACTIVITY:
                return "\0".concat(e.sortKey);
            case T.ParticipantTypes.HIDDEN_STREAM:
            case T.ParticipantTypes.STREAM:
                return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, O.default)(e.userNick, e.user), "\x02");
            case T.ParticipantTypes.USER:
                var t, n, r = "\x04";
                return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? r = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (r = "\x03"), "".concat(r).concat((0, O.default)(e.userNick, e.user))
        }
    }(r = o || (o = {})).VIDEO = "VIDEO", r.STREAM = "STREAM", r.FILTERED = "FILTERED", r.SPEAKING = "SPEAKING", r.ACTIVITY = "ACTIVITY";
    var D = function() {
        var e, t, n;

        function r(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), b(this, "channelId", void 0), b(this, "call", void 0), b(this, "participants", {}), b(this, "lastSpoke", {}), b(this, "participantByIndex", new a.SecondaryIndexMap(function(e) {
                var t, n = [];
                return e.type === T.ParticipantTypes.USER && e.speaking && n.push("SPEAKING"), e.type === T.ParticipantTypes.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push("VIDEO"), !e.localVideoDisabled && n.push("FILTERED")) : (0, T.isStreamParticipant)(e) && (n.push("STREAM"), e.type !== T.ParticipantTypes.HIDDEN_STREAM && null != e.streamId && n.push("FILTERED")), e.type === T.ParticipantTypes.ACTIVITY && n.push("ACTIVITY"), n
            }, P)), this.channelId = e
        }
        return e = r, t = [{
            key: "version",
            get: function() {
                return this.participantByIndex.version
            }
        }, {
            key: "size",
            value: function(e) {
                return this.participantByIndex.size(e)
            }
        }, {
            key: "toArray",
            value: function(e) {
                return this.participantByIndex.values(e, !0)
            }
        }, {
            key: "rebuild",
            value: function() {
                var e = this,
                    t = _.default.getChannel(this.channelId);
                if (null == t || t.type === S.ChannelTypes.GUILD_TEXT) return !1;
                if (this.call = d.default.getCall(this.channelId), t.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
                var n = new Set(t.isGuildVocalOrThread() ? Object.keys(I.default.getVoiceStatesForChannel(t.id)) : t.recipients);
                return n.add(f.default.getId()), c.default.getAllActiveStreamsForChannel(this.channelId).forEach(function(e) {
                    var t = e.ownerId;
                    return n.add(t)
                }), this.participantByIndex.clear(), this.participants = {}, n.forEach(function(t) {
                    return e.updateParticipant(t)
                }), this.updateEmbeddedActivities(), !0
            }
        }, {
            key: "getParticipant",
            value: function(e) {
                var t;
                return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null
            }
        }, {
            key: "updateEmbeddedActivities",
            value: function() {
                return this.updateParticipant(C)
            }
        }, {
            key: "hasEmbeddedActivity",
            value: function() {
                var e = this.participants[C];
                return null != e && e.length > 0
            }
        }, {
            key: "updateParticipant",
            value: function(e) {
                var t = this,
                    n = this.participants[e],
                    r = e === C ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
                return (null != n || 0 !== r.length) && (null == n || n.forEach(function(e) {
                    t.participantByIndex.delete(e.id)
                }), r.forEach(function(e) {
                    t.participantByIndex.set(e.id, e)
                }), this.participants[e] = r, !0)
            }
        }, {
            key: "updateParticipantSpeaking",
            value: function(e) {
                var t, n, r = this;
                return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce(function(t, n) {
                    if (n.type === T.ParticipantTypes.USER) {
                        var o = (0, u.getIsSpeaking)({
                            userId: e,
                            checkIsMuted: !0
                        });
                        return o && (r.lastSpoke[e] = Date.now()), r.participantByIndex.set(n.id, R(N({}, n), {
                            speaking: o,
                            lastSpoke: r.lastSpoke[e],
                            soundsharing: p.default.isSoundSharing(e)
                        })), !0
                    }
                    return t
                }, !1)) && void 0 !== n && n
            }
        }, {
            key: "updateParticipantQuality",
            value: function(e, t, n) {
                var r, o, i = this;
                return null !== (o = null === (r = this.participants[e]) || void 0 === r ? void 0 : r.reduce(function(e, r) {
                    return r.type === T.ParticipantTypes.STREAM ? (i.participantByIndex.set(r.id, R(N({}, r), {
                        maxResolution: t,
                        maxFrameRate: n
                    })), !0) : e
                }, !1)) && void 0 !== o && o
            }
        }, {
            key: "_getEmbeddedActivities",
            value: function() {
                var e, t = s.default.getEmbeddedActivitiesForChannel(this.channelId),
                    n = s.default.getSelfEmbeddedActivityForChannel(this.channelId);
                if (null == n) return t;
                return (0, i.uniqBy)(((function(e) {
                    if (Array.isArray(e)) return g(e)
                })(e = t) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return g(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                    }
                }(e) || function() {
                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()).concat([n]), function(e) {
                    return e.applicationId
                })
            }
        }, {
            key: "_getParticipantsForEmbeddedActivities",
            value: function() {
                var e = this;
                return this._getEmbeddedActivities().map(function(t, n) {
                    var r, o;
                    return {
                        type: T.ParticipantTypes.ACTIVITY,
                        id: t.applicationId,
                        activityType: S.ActivityTypes.PLAYING,
                        activityUrl: t.url,
                        participants: new Set(t.userIds),
                        guildId: null !== (o = null === (r = _.default.getChannel(e.channelId)) || void 0 === r ? void 0 : r.getGuildId()) && void 0 !== o ? o : null,
                        sortKey: n.toString()
                    }
                })
            }
        }, {
            key: "_getParticipantsForUser",
            value: function(e) {
                var t = [],
                    n = m.default.getUser(e);
                if (null == n) return t;
                var r = I.default.getVoiceStateForChannel(this.channelId, e),
                    o = I.default.getVoicePlatformForChannel(this.channelId, e),
                    i = _.default.getChannel(this.channelId),
                    a = null !== (g = null === (O = this.call) || void 0 === O ? void 0 : null === (d = O.ringing) || void 0 === d ? void 0 : d.includes(e)) && void 0 !== g && g;
                (null != r || a) && (S = R(N({
                    type: T.ParticipantTypes.USER
                }, y.default.getUserStreamData(e, null == i ? void 0 : i.getGuildId())), {
                    user: n,
                    id: n.id,
                    voiceState: r,
                    voicePlatform: o,
                    speaking: (0, u.getIsSpeaking)({
                        userId: e,
                        checkIsMuted: !0
                    }),
                    lastSpoke: null !== (A = this.lastSpoke[e]) && void 0 !== A ? A : 0,
                    soundsharing: p.default.isSoundSharing(e),
                    ringing: a,
                    userNick: h.default.getName(null == i ? void 0 : i.getGuildId(), this.channelId, n),
                    localVideoDisabled: E.default.isLocalVideoDisabled(n.id)
                }), t.push(S));
                var s = null !== (C = c.default.getStreamForUser(e, null == i ? void 0 : i.getGuildId())) && void 0 !== C ? C : c.default.getActiveStreamForUser(e, null == i ? void 0 : i.getGuildId());
                if (null != s && s.channelId === this.channelId) {
                    var d, O, S, g, A, b, C, P, D = (0, l.encodeStreamKey)(s),
                        L = this.getParticipant(D),
                        M = s.ownerId === f.default.getId() && c.default.isSelfStreamHidden(this.channelId),
                        U = (null == L ? void 0 : L.type) === T.ParticipantTypes.STREAM ? {
                            maxResolution: null != L.maxResolution ? N({}, L.maxResolution) : void 0,
                            maxFrameRate: L.maxFrameRate
                        } : null;
                    b = R(N({}, y.default.getUserStreamData(e, null == i ? void 0 : i.getGuildId(), v.MediaEngineContextTypes.STREAM), U), {
                        type: M ? T.ParticipantTypes.HIDDEN_STREAM : T.ParticipantTypes.STREAM,
                        id: D,
                        userVideo: null !== (P = null == r ? void 0 : r.selfVideo) && void 0 !== P && P,
                        user: n,
                        userNick: h.default.getName(null == i ? void 0 : i.getGuildId(), this.channelId, n),
                        stream: s
                    }), t.push(b)
                }
                return t
            }
        }], A(e.prototype, t), n && A(e, n), r
    }()
}