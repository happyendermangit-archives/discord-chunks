function(e, t, n) {
    "use strict";
    let r, i, l, u;
    n.r(t), n.d(t, {
        default: function() {
            return B
        }
    }), n("222007"), n("424973"), n("808653");
    var a = n("446674"),
        o = n("913144"),
        s = n("76393"),
        d = n("161454"),
        E = n("374014"),
        _ = n("223913"),
        c = n("537429"),
        I = n("756898"),
        S = n("271938"),
        T = n("42203"),
        f = n("305961"),
        p = n("42887"),
        N = n("957255"),
        A = n("945956"),
        R = n("18494"),
        C = n("800762"),
        L = n("49111"),
        O = n("706530");
    let h = null,
        P = {},
        g = null;

    function m() {
        r = new Map, i = {}, l = {}, u = {}, P = {}
    }
    m();

    function y(e) {
        r.delete(e)
    }

    function D() {
        let e = [];
        for (let t in i) {
            let n = i[t];
            for (let r in n) e.push(i[t][r])
        }
        return e
    }

    function v(e) {
        let {
            streamKey: t,
            region: n,
            viewerIds: i,
            paused: u
        } = e;
        r.set(t, {
            ...(0, E.decodeStreamKey)(t),
            state: u ? L.ApplicationStreamStates.PAUSED : L.ApplicationStreamStates.ACTIVE
        }), l[t] = {
            streamKey: t,
            region: n,
            viewerIds: i
        }
    }

    function U(e, t) {
        let n = T.default.getBasicChannel(t);
        return e === O.StreamTypes.CALL || null != n && N.default.canBasicChannel(L.BasicPermissions.VIEW_CHANNEL, n)
    }

    function M(e) {
        if (U(e.streamType, e.channelId)) return !0;
        let t = T.default.getBasicChannel(e.channelId);
        return null != t && (0, _.canWatchStream)(t, C.default, f.default, N.default, s.default)[0]
    }
    class G extends a.default.Store {
        initialize() {
            this.syncWith([N.default], () => !0), this.waitFor(d.default, N.default)
        }
        isSelfStreamHidden(e) {
            var t;
            return null !== (t = P[e]) && void 0 !== t && t
        }
        getLastActiveStream() {
            var e;
            return (0, c.default)(p.default) ? null !== (e = Array.from(r.values()).pop()) && void 0 !== e ? e : null : null
        }
        getAllActiveStreams() {
            return (0, c.default)(p.default) ? Array.from(r.values()) : []
        }
        getAllActiveStreamsForChannel(e) {
            return (0, c.default)(p.default) ? Array.from(r.values()).filter(t => t.channelId === e) : []
        }
        getActiveStreamForStreamKey(e) {
            var t;
            return (0, c.default)(p.default) ? null !== (t = r.get(e)) && void 0 !== t ? t : null : null
        }
        getActiveStreamForApplicationStream(e) {
            var t;
            if (!(0, c.default)(p.default) || null == e) return null;
            let n = (0, E.encodeStreamKey)(e);
            return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
        }
        getCurrentUserActiveStream() {
            let e = R.default.getVoiceChannelId(),
                t = T.default.getChannel(e);
            return null == t ? null : this.getActiveStreamForUser(S.default.getId(), t.getGuildId())
        }
        getActiveStreamForUser(e, t) {
            var n;
            let r = this.getStreamForUser(e, t);
            return null != r ? this.getActiveStreamForApplicationStream(r) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
        }
        getStreamerActiveStreamMetadata() {
            var e;
            let t = R.default.getVoiceChannelId(),
                n = T.default.getChannel(t);
            if (null == n) return null;
            let r = this.getActiveStreamForUser(S.default.getId(), n.getGuildId());
            return null == r ? null : null !== (e = u[(0, E.encodeStreamKey)(r)]) && void 0 !== e ? e : null
        }
        getStreamerActiveStreamMetadataForStream(e) {
            var t;
            return null !== (t = u[e]) && void 0 !== t ? t : null
        }
        getAnyStreamForUser(e) {
            var t;
            if (!(0, c.default)(p.default)) return null;
            let n = i[e];
            return null == n ? null : null !== (t = Object.values(n).find(e => M(e))) && void 0 !== t ? t : null
        }
        getStreamForUser(e, t) {
            var n;
            if (!(0, c.default)(p.default)) return null;
            let r = null === (n = i[e]) || void 0 === n ? void 0 : n[null != t ? t : L.NULL_STRING_GUILD_ID];
            return null != r && M(r) ? r : null
        }
        getRTCStream(e) {
            var t;
            return (0, c.default)(p.default) ? null !== (t = l[e]) && void 0 !== t ? t : null : null
        }
        getAllApplicationStreams() {
            return (0, c.default)(p.default) ? D().filter(e => null != e && U(e.streamType, e.channelId)) : []
        }
        getAllApplicationStreamsForChannel(e) {
            return (0, c.default)(p.default) ? D().filter(t => null != t && t.channelId === e && U(t.streamType, t.channelId)) : []
        }
        getViewerIds(e) {
            if (!(0, c.default)(p.default)) return [];
            let t = null;
            t = "string" == typeof e ? e : (0, E.encodeStreamKey)(e);
            let n = null != t ? l[t] : null;
            return null != n ? n.viewerIds : []
        }
        getCurrentAppIntent() {
            return g
        }
        getState() {
            return (0, c.default)(p.default) ? {
                activeStreams: Array.from(r.entries()),
                streamsByUserAndGuild: i,
                rtcStreams: l,
                streamerActiveStreamMetadatas: u
            } : {
                activeStreams: [],
                streamsByUserAndGuild: {},
                rtcStreams: {},
                streamerActiveStreamMetadatas: {}
            }
        }
    }
    G.displayName = "ApplicationStreamingStore";
    var B = new G(o.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                applicationStreamState: t
            } = e;
            i = t.streamsByUserAndGuild, r = new Map(t.activeStreams), l = t.rtcStreams, u = t.streamerActiveStreamMetadatas
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n,
                    guildId: r,
                    channelId: l,
                    sessionId: u,
                    selfStream: a
                } = t;
                if (a && null != l) {
                    var o, s;
                    return null == i[(o = {
                        streamType: null != r ? O.StreamTypes.GUILD : O.StreamTypes.CALL,
                        ownerId: n,
                        guildId: r,
                        channelId: l
                    }).ownerId] && (i[o.ownerId] = {}), i[o.ownerId][null !== (s = o.guildId) && void 0 !== s ? s : L.NULL_STRING_GUILD_ID] = o, !0
                } {
                    let t = S.default.getSessionId();
                    return n === S.default.getId() && u !== t && null != A.default.getChannelId() ? e : function(e, t) {
                        var n;
                        let r = null != t ? t : L.NULL_STRING_GUILD_ID;
                        return (null === (n = i[e]) || void 0 === n ? void 0 : n[r]) != null && (delete i[e][r], !0)
                    }(n, r) || e
                }
            }, !1)
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t
            } = e, n = (0, E.decodeStreamKey)(t);
            r.delete(t), r.set(t, {
                ...n,
                state: L.ApplicationStreamStates.CONNECTING
            }), n.ownerId === S.default.getId() && (P[n.channelId] = !1)
        },
        STREAM_START: function(e) {
            var t;
            let {
                streamType: n,
                guildId: i,
                channelId: l,
                pid: a,
                sourceName: o,
                sourceId: s
            } = e, _ = (0, E.encodeStreamKey)({
                streamType: n,
                guildId: i,
                channelId: l,
                ownerId: S.default.getId()
            }), c = null !== (t = null != a ? d.default.getGameForPID(a) : null != s ? d.default.getRunningGames().find(e => (0, I.default)(s, e.windowHandle)) : null) && void 0 !== t ? t : null;
            u[_] = {
                id: null == c ? void 0 : c.id,
                pid: a,
                sourceName: o
            }, r.delete(_), r.set(_, {
                streamType: n,
                guildId: i,
                channelId: l,
                ownerId: S.default.getId(),
                state: L.ApplicationStreamStates.CONNECTING
            })
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            u[t] = null
        },
        STREAM_CREATE: v,
        STREAM_UPDATE: v,
        STREAM_TIMED_OUT: function(e) {
            let {
                streamKey: t
            } = e, n = r.get(t);
            if (null == n) return !1;
            r.set(t, {
                ...n,
                state: L.ApplicationStreamStates.FAILED
            })
        },
        STREAM_DELETE: function(e) {
            let {
                streamKey: t,
                unavailable: i,
                reason: u
            } = e;
            delete l[t];
            let a = r.get(t);
            if (null == a) return !1;
            let o = L.ApplicationStreamStates.ENDED;
            if (i) o = L.ApplicationStreamStates.RECONNECTING;
            else if (u === L.ApplicationStreamDeleteReasons.UNAUTHORIZED) o = L.ApplicationStreamStates.FAILED;
            else if (u === L.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                let {
                    guildId: e
                } = (0, E.decodeStreamKey)(t);
                n.el("772545").then(n.bind(n, "772545")).then(t => {
                    let {
                        default: n
                    } = t;
                    n(e)
                }), o = L.ApplicationStreamStates.ENDED
            }
            r.set(t, {
                ...a,
                state: o
            }), o === L.ApplicationStreamStates.ENDED && h !== t && y(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            y(t)
        },
        STREAM_UPDATE_SELF_HIDDEN: function(e) {
            let {
                channelId: t,
                selfStreamHidden: n
            } = e, r = (0, E.isStreamKey)(h);
            r && (null == h ? void 0 : h.includes(S.default.getId())) && !1 === P[t] && !0 === n && (h = null), P[t] = n
        },
        SET_STREAM_APP_INTENT: function(e) {
            let {
                intent: t
            } = e;
            g = t
        },
        RTC_CONNECTION_STATE: function(e) {
            let {
                streamKey: t,
                state: n
            } = e;
            if (null == t) return !1;
            let i = r.get(t);
            if (null == i || i.state === L.ApplicationStreamStates.ENDED) return !1;
            let l = i.state;
            switch (n) {
                case L.RTCConnectionStates.DISCONNECTED:
                    l = L.ApplicationStreamStates.RECONNECTING;
                    break;
                case L.RTCConnectionStates.RTC_CONNECTED:
                    l = L.ApplicationStreamStates.ACTIVE
            }
            if (l === i.state) return !1;
            r.set(t, {
                ...i,
                state: l
            })
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            if (h = t, Array.from(r.values()).forEach(e => {
                    (0, E.encodeStreamKey)(e) !== h && e.state === L.ApplicationStreamStates.ENDED && y((0, E.encodeStreamKey)(e))
                }), null == t) return;
            let i = (0, E.isStreamKey)(t);
            i && t.includes(S.default.getId()) && (P[n] = !1)
        },
        CONNECTION_OPEN: m,
        CONNECTION_CLOSED: m,
        LOGOUT: m
    })
}