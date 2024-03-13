function(e, t, n) {
    "use strict";
    let i, s, r, a;
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    }), n("222007"), n("424973"), n("808653");
    var o = n("446674"),
        l = n("913144"),
        u = n("76393"),
        d = n("161454"),
        c = n("374014"),
        f = n("223913"),
        _ = n("537429"),
        h = n("756898"),
        E = n("271938"),
        g = n("42203"),
        m = n("305961"),
        p = n("42887"),
        S = n("957255"),
        v = n("945956"),
        T = n("18494"),
        I = n("800762"),
        C = n("49111"),
        A = n("706530");
    let y = null,
        N = {},
        R = null;

    function O() {
        i = new Map, s = {}, r = {}, a = {}, N = {}
    }
    O();

    function D(e) {
        i.delete(e)
    }

    function P() {
        let e = [];
        for (let t in s) {
            let n = s[t];
            for (let i in n) e.push(s[t][i])
        }
        return e
    }

    function M(e) {
        let {
            streamKey: t,
            region: n,
            viewerIds: s,
            paused: a
        } = e;
        i.set(t, {
            ...(0, c.decodeStreamKey)(t),
            state: a ? C.ApplicationStreamStates.PAUSED : C.ApplicationStreamStates.ACTIVE
        }), r[t] = {
            streamKey: t,
            region: n,
            viewerIds: s
        }
    }

    function L(e, t) {
        let n = g.default.getBasicChannel(t);
        return e === A.StreamTypes.CALL || null != n && S.default.canBasicChannel(C.BasicPermissions.VIEW_CHANNEL, n)
    }

    function b(e) {
        if (L(e.streamType, e.channelId)) return !0;
        let t = g.default.getBasicChannel(e.channelId);
        return null != t && (0, f.canWatchStream)(t, I.default, m.default, S.default, u.default)[0]
    }
    class U extends o.default.Store {
        initialize() {
            this.syncWith([S.default], () => !0), this.waitFor(d.default, S.default)
        }
        isSelfStreamHidden(e) {
            var t;
            return null !== (t = N[e]) && void 0 !== t && t
        }
        getLastActiveStream() {
            var e;
            return (0, _.default)(p.default) ? null !== (e = Array.from(i.values()).pop()) && void 0 !== e ? e : null : null
        }
        getAllActiveStreams() {
            return (0, _.default)(p.default) ? Array.from(i.values()) : []
        }
        getAllActiveStreamsForChannel(e) {
            return (0, _.default)(p.default) ? Array.from(i.values()).filter(t => t.channelId === e) : []
        }
        getActiveStreamForStreamKey(e) {
            var t;
            return (0, _.default)(p.default) ? null !== (t = i.get(e)) && void 0 !== t ? t : null : null
        }
        getActiveStreamForApplicationStream(e) {
            var t;
            if (!(0, _.default)(p.default) || null == e) return null;
            let n = (0, c.encodeStreamKey)(e);
            return null !== (t = this.getActiveStreamForStreamKey(n)) && void 0 !== t ? t : null
        }
        getCurrentUserActiveStream() {
            let e = T.default.getVoiceChannelId(),
                t = g.default.getChannel(e);
            return null == t ? null : this.getActiveStreamForUser(E.default.getId(), t.getGuildId())
        }
        getActiveStreamForUser(e, t) {
            var n;
            let i = this.getStreamForUser(e, t);
            return null != i ? this.getActiveStreamForApplicationStream(i) : null !== (n = this.getAllActiveStreams().find(t => t.ownerId === e)) && void 0 !== n ? n : null
        }
        getStreamerActiveStreamMetadata() {
            var e;
            let t = T.default.getVoiceChannelId(),
                n = g.default.getChannel(t);
            if (null == n) return null;
            let i = this.getActiveStreamForUser(E.default.getId(), n.getGuildId());
            return null == i ? null : null !== (e = a[(0, c.encodeStreamKey)(i)]) && void 0 !== e ? e : null
        }
        getStreamerActiveStreamMetadataForStream(e) {
            var t;
            return null !== (t = a[e]) && void 0 !== t ? t : null
        }
        getAnyStreamForUser(e) {
            var t;
            if (!(0, _.default)(p.default)) return null;
            let n = s[e];
            return null == n ? null : null !== (t = Object.values(n).find(e => b(e))) && void 0 !== t ? t : null
        }
        getStreamForUser(e, t) {
            var n;
            if (!(0, _.default)(p.default)) return null;
            let i = null === (n = s[e]) || void 0 === n ? void 0 : n[null != t ? t : C.NULL_STRING_GUILD_ID];
            return null != i && b(i) ? i : null
        }
        getRTCStream(e) {
            var t;
            return (0, _.default)(p.default) ? null !== (t = r[e]) && void 0 !== t ? t : null : null
        }
        getAllApplicationStreams() {
            return (0, _.default)(p.default) ? P().filter(e => null != e && L(e.streamType, e.channelId)) : []
        }
        getAllApplicationStreamsForChannel(e) {
            return (0, _.default)(p.default) ? P().filter(t => null != t && t.channelId === e && L(t.streamType, t.channelId)) : []
        }
        getViewerIds(e) {
            if (!(0, _.default)(p.default)) return [];
            let t = null;
            t = "string" == typeof e ? e : (0, c.encodeStreamKey)(e);
            let n = null != t ? r[t] : null;
            return null != n ? n.viewerIds : []
        }
        getCurrentAppIntent() {
            return R
        }
        getState() {
            return (0, _.default)(p.default) ? {
                activeStreams: Array.from(i.entries()),
                streamsByUserAndGuild: s,
                rtcStreams: r,
                streamerActiveStreamMetadatas: a
            } : {
                activeStreams: [],
                streamsByUserAndGuild: {},
                rtcStreams: {},
                streamerActiveStreamMetadatas: {}
            }
        }
    }
    U.displayName = "ApplicationStreamingStore";
    var w = new U(l.default, {
        OVERLAY_INITIALIZE: function(e) {
            let {
                applicationStreamState: t
            } = e;
            s = t.streamsByUserAndGuild, i = new Map(t.activeStreams), r = t.rtcStreams, a = t.streamerActiveStreamMetadatas
        },
        VOICE_STATE_UPDATES: function(e) {
            let {
                voiceStates: t
            } = e;
            return t.reduce((e, t) => {
                let {
                    userId: n,
                    guildId: i,
                    channelId: r,
                    sessionId: a,
                    selfStream: o
                } = t;
                if (o && null != r) {
                    var l, u;
                    return null == s[(l = {
                        streamType: null != i ? A.StreamTypes.GUILD : A.StreamTypes.CALL,
                        ownerId: n,
                        guildId: i,
                        channelId: r
                    }).ownerId] && (s[l.ownerId] = {}), s[l.ownerId][null !== (u = l.guildId) && void 0 !== u ? u : C.NULL_STRING_GUILD_ID] = l, !0
                } {
                    let t = E.default.getSessionId();
                    return n === E.default.getId() && a !== t && null != v.default.getChannelId() ? e : function(e, t) {
                        var n;
                        let i = null != t ? t : C.NULL_STRING_GUILD_ID;
                        return (null === (n = s[e]) || void 0 === n ? void 0 : n[i]) != null && (delete s[e][i], !0)
                    }(n, i) || e
                }
            }, !1)
        },
        STREAM_WATCH: function(e) {
            let {
                streamKey: t
            } = e, n = (0, c.decodeStreamKey)(t);
            i.delete(t), i.set(t, {
                ...n,
                state: C.ApplicationStreamStates.CONNECTING
            }), n.ownerId === E.default.getId() && (N[n.channelId] = !1)
        },
        STREAM_START: function(e) {
            var t;
            let {
                streamType: n,
                guildId: s,
                channelId: r,
                pid: o,
                sourceName: l,
                sourceId: u
            } = e, f = (0, c.encodeStreamKey)({
                streamType: n,
                guildId: s,
                channelId: r,
                ownerId: E.default.getId()
            }), _ = null !== (t = null != o ? d.default.getGameForPID(o) : null != u ? d.default.getRunningGames().find(e => (0, h.default)(u, e.windowHandle)) : null) && void 0 !== t ? t : null;
            a[f] = {
                id: null == _ ? void 0 : _.id,
                pid: o,
                sourceName: l
            }, i.delete(f), i.set(f, {
                streamType: n,
                guildId: s,
                channelId: r,
                ownerId: E.default.getId(),
                state: C.ApplicationStreamStates.CONNECTING
            })
        },
        STREAM_STOP: function(e) {
            let {
                streamKey: t
            } = e;
            a[t] = null
        },
        STREAM_CREATE: M,
        STREAM_UPDATE: M,
        STREAM_TIMED_OUT: function(e) {
            let {
                streamKey: t
            } = e, n = i.get(t);
            if (null == n) return !1;
            i.set(t, {
                ...n,
                state: C.ApplicationStreamStates.FAILED
            })
        },
        STREAM_DELETE: function(e) {
            let {
                streamKey: t,
                unavailable: s,
                reason: a
            } = e;
            delete r[t];
            let o = i.get(t);
            if (null == o) return !1;
            let l = C.ApplicationStreamStates.ENDED;
            if (s) l = C.ApplicationStreamStates.RECONNECTING;
            else if (a === C.ApplicationStreamDeleteReasons.UNAUTHORIZED) l = C.ApplicationStreamStates.FAILED;
            else if (a === C.ApplicationStreamDeleteReasons.SAFETY_GUILD_RATE_LIMITED) {
                let {
                    guildId: e
                } = (0, c.decodeStreamKey)(t);
                n.el("772545").then(n.bind(n, "772545")).then(t => {
                    let {
                        default: n
                    } = t;
                    n(e)
                }), l = C.ApplicationStreamStates.ENDED
            }
            i.set(t, {
                ...o,
                state: l
            }), l === C.ApplicationStreamStates.ENDED && y !== t && D(t)
        },
        STREAM_CLOSE: function(e) {
            let {
                streamKey: t
            } = e;
            D(t)
        },
        STREAM_UPDATE_SELF_HIDDEN: function(e) {
            let {
                channelId: t,
                selfStreamHidden: n
            } = e, i = (0, c.isStreamKey)(y);
            i && (null == y ? void 0 : y.includes(E.default.getId())) && !1 === N[t] && !0 === n && (y = null), N[t] = n
        },
        SET_STREAM_APP_INTENT: function(e) {
            let {
                intent: t
            } = e;
            R = t
        },
        RTC_CONNECTION_STATE: function(e) {
            let {
                streamKey: t,
                state: n
            } = e;
            if (null == t) return !1;
            let s = i.get(t);
            if (null == s || s.state === C.ApplicationStreamStates.ENDED) return !1;
            let r = s.state;
            switch (n) {
                case C.RTCConnectionStates.DISCONNECTED:
                    r = C.ApplicationStreamStates.RECONNECTING;
                    break;
                case C.RTCConnectionStates.RTC_CONNECTED:
                    r = C.ApplicationStreamStates.ACTIVE
            }
            if (r === s.state) return !1;
            i.set(t, {
                ...s,
                state: r
            })
        },
        CHANNEL_RTC_SELECT_PARTICIPANT: function(e) {
            let {
                id: t,
                channelId: n
            } = e;
            if (y = t, Array.from(i.values()).forEach(e => {
                    (0, c.encodeStreamKey)(e) !== y && e.state === C.ApplicationStreamStates.ENDED && D((0, c.encodeStreamKey)(e))
                }), null == t) return;
            let s = (0, c.isStreamKey)(t);
            s && t.includes(E.default.getId()) && (N[n] = !1)
        },
        CONNECTION_OPEN: O,
        CONNECTION_CLOSED: O,
        LOGOUT: O
    })
}