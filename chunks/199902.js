function(e, t, n) {
    "use strict";
    let i, r, s, a;
    n.r(t), n("47120"), n("653041"), n("724458");
    var o, l, u, d, _ = n("442837"),
        c = n("570140"),
        E = n("258609"),
        I = n("594190"),
        T = n("569545"),
        f = n("102172"),
        S = n("139656"),
        h = n("855403"),
        A = n("314897"),
        m = n("592125"),
        N = n("430824"),
        p = n("131951"),
        O = n("496675"),
        R = n("19780"),
        C = n("944486"),
        g = n("979651"),
        L = n("981631"),
        v = n("70722");
    let D = null,
        M = {},
        y = null;

    function P() {
        i = new Map, r = {}, s = {}, a = {}, M = {}
    }
    P();

    function U(e) {
        i.delete(e)
    }

    function b() {
        let e = [];
        for (let t in r) {
            let n = r[t];
            for (let i in n) e.push(r[t][i])
        }
        return e
    }

    function G(e) {
        let {
            streamKey: t,
            region: n,
            viewerIds: r,
            paused: a
        } = e;
        i.set(t, {
            ...(0, T.decodeStreamKey)(t),
            state: a ? L.ApplicationStreamStates.PAUSED : L.ApplicationStreamStates.ACTIVE
        }), s[t] = {
            streamKey: t,
            region: n,
            viewerIds: r
        }
    }

    function w(e, t) {
        let n = m.default.getBasicChannel(t);
        return e === v.StreamTypes.CALL || null != n && O.default.canBasicChannel(L.BasicPermissions.VIEW_CHANNEL, n)
    }

    function B(e) {
        if (w(e.streamType, e.channelId)) return !0;
        let t = m.default.getBasicChannel(e.channelId);
        return null != t && (0, f.canWatchStream)(t, g.default, N.default, O.default, E.default)[0]
    }
    class k extends(o = _.default.Store) {
        initialize() {
            this.syncWith([O.default], () => !0), this.waitFor(I.default, O.default)
        }
        isSelfStreamHidden(e) {
            var t;
            return null !== (t = M[e]) && void 0 !== t && t
        }
        getLastActiveStream() {
            var e;
            return (0, S.default)(p.default) ? null !== (e = Array.from(i.values()).pop()) && void 0 !== e ? e : null : null
        }
        getAllActiveStreams() {
            return (0, S.default)(p.default) ? Array.from(i.values()) : []
        }
        getAllActiveStreamsForChannel(e) {
            return (0, S.default)(p.default) ? Array.from(i.values()).filter(t => t.channelId === e) : []
        }
        getActiveStreamForStreamKey(e) {
            var t;
            return (0, S.default)(p.default) ? null !== (t = i.get(e)) && void 0 !== t ? t : null : null
        }
        getActiveStreamForApplicationStream(e) {
            var t;
            if (!(0, S.default)(p.default) || null == e) return null;
            let n = (0, T.encodeStreamKey)(e);
            return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
        }
        getCurrentUserActiveStream() {
            let e = C.default.getVoiceChannelId(),
                t = m.default.getChannel(e);
            return null == t ? null : this.getActiveStreamForUser(A.default.getId(), t.getGuildId())
        }
        getActiveStreamForUser(e, t) {
            var n;
            let i = this.getStreamForUser(e, t);
            return null != i ? this.getActiveStreamForApplicationStream(i) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
        }
        getStreamerActiveStreamMetadata() {
            var e;
            let t = C.default.getVoiceChannelId(),
                n = m.default.getChannel(t);
            if (null == n) return null;
            let i = this.getActiveStreamForUser(A.default.getId(), n.getGuildId());
            return null == i ? null : null !== (e = a[(0, T.encodeStreamKey)(i)]) && void 0 !== e ? e : null
        }
        getStreamerActiveStreamMetadataForStream(e) {
            var t;
            return null !== (t = a[e]) && void 0 !== t ? t : null
        }
        getAnyStreamForUser(e) {
            var t;
            if (!(0, S.default)(p.default)) return null;
            let n = r[e];
            return null == n ? null : null !== (t = Object.values(n).find(e => B(e))) && void 0 !== t ? t : null
        }
        getStreamForUser(e, t) {
            var n;
            if (!(0, S.default)(p.default)) return null;
            let i = null === (n = r[e]) || void 0 === n ? void 0 : n[null != t ? t : L.NULL_STRING_GUILD_ID];
            return null != i && B(i) ? i : null
        }
        getRTCStream(e) {
            var t;
            return (0, S.default)(p.default) ? null !== (t = s[e]) && void 0 !== t ? t : null : null
        }
        getAllApplicationStreams() {
            return (0, S.default)(p.default) ? b().filter(e => null != e && w(e.streamType, e.channelId)) : []
        }
        getAllApplicationStreamsForChannel(e) {
            return (0, S.default)(p.default) ? b().filter(t => null != t && t.channelId === e && w(t.streamType, t.channelId)) : []
        }
        getViewerIds(e) {
            if (!(0, S.default)(p.default)) return [];
            let t = null,
                n = null != (t = "string" == typeof e ? e : (0, T.encodeStreamKey)(e)) ? s[t] : null;
            return null != n ? n.viewerIds : []
        }
        getCurrentAppIntent() {
            return y
        }
        getState() {
            return (0, S.default)(p.default) ? {
                activeStreams: Array.from(i.entries()),
                streamsByUserAndGuild: r,
                rtcStreams: s,
                streamerActiveStreamMetadatas: a
            } : {
                activeStreams: [],
                streamsByUserAndGuild: {},
                rtcStreams: {},
                streamerActiveStreamMetadatas: {}
            }
        }
    }
    d = "ApplicationStreamingStore", (u = "displayName") in(l = k) ? Object.defineProperty(l, u, {
        value: d,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : l[u] = d, t.default = new k(c.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                applicationStreamState: t
            } = e;
            r = t.streamsByUserAndGuild, i = new Map(t.activeStreams), s = t.rtcStreams, a = t.streamerActiveStreamMetadatas
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n,
                    guildId: i,
                    channelId: s,
                    sessionId: a,
                    selfStream: o
                } = t;
                if (o && null != s) {
                    var l, u;
                    return null == r[(l = {
                        streamType: null != i ? v.StreamTypes.GUILD : v.StreamTypes.CALL,
                        ownerId: n,
                        guildId: i,
                        channelId: s
                    }).ownerId] && (r[l.ownerId] = {}), r[l.ownerId][null !== (u = l.guildId) && void 0 !== u ? u : L.NULL_STRING_GUILD_ID] = l, !0
                } {
                    let t = A.default.getSessionId();
                    return n === A.default.getId() && a !== t && null != R.default.getChannelId() ? e : function(e, t) {
                        var n;
                        let i = null != t ? t : L.NULL_STRING_GUILD_ID;
                        return (null === (n = r[e]) || void 0 === n ? void 0 : n[i]) != null && (delete r[e][i], !0)
                    }(n, i) || e
                }
            }, !1)
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t
            } = e, n = (0, T.decodeStreamKey)(t);
            i.delete(t), i.set(t, {
                ...n,
                state: L.ApplicationStreamStates.CONNECTING
            }), n.ownerId === A.default.getId() && (M[n.channelId] = !1)
        },
        STREAM_START: function(e) {
            var t;
            let {
                streamType: n,
                guildId: r,
                channelId: s,
                pid: o,
                sourceName: l,
                sourceId: u
            } = e, d = (0, T.encodeStreamKey)({
                streamType: n,
                guildId: r,
                channelId: s,
                ownerId: A.default.getId()
            }), _ = null !== (t = null != o ? I.default.getGameForPID(o) : null != u ? I.default.getRunningGames().find(e => (0, h.default)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
            a[d] = {
                id: null == _ ? void 0 : _.id,
                pid: o,
                sourceName: l
            }, i.delete(d), i.set(d, {
                streamType: n,
                guildId: r,
                channelId: s,
                ownerId: A.default.getId(),
                state: L.ApplicationStreamStates.CONNECTING
            })
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            a[t] = null
        },
        STREAM_CREATE: G,
        STREAM_UPDATE: G,
        STREAM_TIMED_OUT: function(e) {
            let {
                streamKey: t
            } = e, n = i.get(t);
            if (null == n) return !1;
            i.set(t, {
                ...n,
                state: L.ApplicationStreamStates.FAILED
            })
        },
        STREAM_DELETE: function(e) {
            let {
                streamKey: t,
                unavailable: r,
                reason: a
            } = e;
            delete s[t];
            let o = i.get(t);
            if (null == o) return !1;
            let l = L.ApplicationStreamStates.ENDED;
            if (r) l = L.ApplicationStreamStates.RECONNECTING;
            else if (a === L.ApplicationStreamDeleteReasons.UNAUTHORIZED) l = L.ApplicationStreamStates.FAILED;
            else if (a === L.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                let {
                    guildId: e
                } = (0, T.decodeStreamKey)(t);
                n.e("76731").then(n.bind(n, "626892")).then(t => {
                    let {
                        default: n
                    } = t;
                    n(e)
                }), l = L.ApplicationStreamStates.ENDED
            }
            i.set(t, {
                ...o,
                state: l
            }), l === L.ApplicationStreamStates.ENDED && D !== t && U(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            U(t)
        },
        STREAM_UPDATE_SELF_HIDDEN: function(e) {
            let {
                channelId: t,
                selfStreamHidden: n
            } = e;
            (0, T.isStreamKey)(D) && (null == D ? void 0 : D.includes(A.default.getId())) && !1 === M[t] && !0 === n && (D = null), M[t] = n
        },
        SET_STREAM_APP_INTENT: function(e) {
            let {
                intent: t
            } = e;
            y = t
        },
        RTC_CONNECTION_STATE: function(e) {
            let {
                streamKey: t,
                state: n
            } = e;
            if (null == t) return !1;
            let r = i.get(t);
            if (null == r || r.state === L.ApplicationStreamStates.ENDED) return !1;
            let s = r.state;
            switch (n) {
                case L.RTCConnectionStates.DISCONNECTED:
                    s = L.ApplicationStreamStates.RECONNECTING;
                    break;
                case L.RTCConnectionStates.RTC_CONNECTED:
                    s = L.ApplicationStreamStates.ACTIVE
            }
            if (s === r.state) return !1;
            i.set(t, {
                ...r,
                state: s
            })
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            if (D = t, Array.from(i.values()).forEach(e => {
                    (0, T.encodeStreamKey)(e) !== D && e.state === L.ApplicationStreamStates.ENDED && U((0, T.encodeStreamKey)(e))
                }), null != t)(0, T.isStreamKey)(t) && t.includes(A.default.getId()) && (M[n] = !1)
        },
        CONNECTION_OPEN: P,
        CONNECTION_CLOSED: P,
        LOGOUT: P
    })
}