function(e, t, n) {
    "use strict";
    let i, s;
    n.r(t), n.d(t, {
        default: function() {
            return V
        }
    }), n("424973");
    var r = n("627445"),
        a = n.n(r),
        o = n("917351"),
        l = n.n(o),
        u = n("446674"),
        d = n("773364"),
        c = n("913144"),
        f = n("161454"),
        _ = n("583702"),
        E = n("374014"),
        h = n("582415"),
        g = n("537429"),
        m = n("773336"),
        p = n("373469"),
        S = n("271938"),
        v = n("42203"),
        T = n("42887"),
        I = n("824563"),
        C = n("945956"),
        A = n("49111"),
        y = n("353927");
    let N = {},
        R = {},
        O = {},
        D = {},
        P = A.StreamLayouts.THEATRE,
        L = {},
        M = [];

    function b() {
        l.forEach(L, (e, t) => {
            e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete L[t]
        })
    }

    function U(e) {
        e.filter(e => {
            let {
                connection: t
            } = e;
            return t.context === y.MediaEngineContextTypes.STREAM
        }).forEach(e => {
            let {
                stats: t
            } = e;
            c.default.dispatch({
                type: "STREAM_STATS_UPDATE",
                stats: t
            })
        })
    }

    function w() {
        return !0
    }
    class k extends u.default.Store {
        getActiveStreamKey() {
            return (0, g.default)(T.default) ? s : null
        }
        getAllActiveStreamKeys() {
            return Object.keys(L)
        }
        getRTCConnection(e) {
            return L[e]
        }
        getStatsHistory(e, t, n) {
            if (!(0, g.default)(T.default) || null == t) return null;
            if (n) {
                let n = p.default.getActiveStreamForUser(t, e);
                if (null == n || 0 === p.default.getViewerIds(n).length) return null
            }
            return M.map(e => n ? function(e) {
                var t, n, i, s, r;
                let a = e.find(e => "video" === e.type);
                return null != a && "video" === a.type ? {
                    type: "streamer",
                    packetsSentOrReceived: null !== (n = a.packetsSent) && void 0 !== n ? n : 0,
                    packetsLost: null !== (i = a.packetsLost) && void 0 !== i ? i : 0,
                    frameRate: null !== (s = a.frameRateEncode) && void 0 !== s ? s : 0,
                    resolution: null !== (r = null === (t = a.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== r ? r : 0,
                    bitrate: 0
                } : null
            }(e.rtp.outbound) : function(e) {
                var t, n, i, s, r, a;
                if (null == e) return null;
                let o = e.find(e => "video" === e.type);
                return null != o && "video" === o.type ? {
                    type: "spectator",
                    packetsSentOrReceived: null !== (n = o.packetsReceived) && void 0 !== n ? n : 0,
                    packetsLost: null !== (i = o.packetsLost) && void 0 !== i ? i : 0,
                    frameRate: null !== (s = o.frameRateDecode) && void 0 !== s ? s : 0,
                    bitrate: null !== (r = o.bitrate) && void 0 !== r ? r : 0,
                    resolution: null !== (a = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0
                } : null
            }(e.rtp.inbound[t]))
        }
        getQuality() {
            if (!(0, g.default)(T.default)) return A.RTCConnectionQuality.UNKNOWN;
            let e = this.getActiveStreamKey(),
                t = null != e ? L[e] : null;
            return null != t ? t.quality : A.RTCConnectionQuality.UNKNOWN
        }
        getMediaSessionId(e) {
            if (null == e) return null;
            let t = L[e];
            if (null != t) return null != t ? t.getMediaSessionId() : null
        }
        getRtcConnectionId(e) {
            if (null == e) return null;
            let t = L[e];
            if (null != t) return null != t ? t.getRTCConnectionId() : null
        }
        getVideoStats(e) {
            if (null == e) return null;
            let t = L[e];
            return null != t ? t.getVideoStats() : null
        }
        getHostname(e) {
            if (null == e) return "";
            let t = L[e];
            return null != t ? null != t.hostname ? t.hostname : "" : ""
        }
        getRegion(e) {
            if (null == e) return null;
            let t = L[e];
            return null != t ? t.getRegion() : null
        }
        getMaxViewers(e) {
            if (null == e) return null;
            let t = L[e];
            return null != t ? t.getMaxViewers() : null
        }
        getStreamSourceId(e) {
            return D[e]
        }
    }
    k.displayName = "StreamRTCConnectionStore";
    var V = new k(c.default, !T.default.isSupported() || __OVERLAY__ ? {} : {
        CONNECTION_OPEN: function(e) {
            i = e.sessionId, s = null, b()
        },
        CONNECTION_CLOSED: function() {
            i = null, s = null, b()
        },
        RTC_CONNECTION_STATE: w,
        RTC_CONNECTION_PING: w,
        RTC_CONNECTION_LOSS_RATE: w,
        RTC_CONNECTION_UPDATE_ID: function(e) {
            return l.some(L, t => t === e.connection)
        },
        STREAM_START: function(e) {
            let {
                streamType: t,
                guildId: n,
                channelId: i,
                appContext: s,
                pid: r,
                sourceId: a
            } = e, o = (0, E.encodeStreamKey)({
                streamType: t,
                guildId: n,
                channelId: i,
                ownerId: S.default.getId()
            });
            if (N[o] = s, l.forEach(L, e => {
                    let {
                        analyticsContext: t
                    } = e;
                    t.setActionContext(s)
                }), D[o] = a, O[o] = r, null != r) {
                let e = f.default.getGameForPID(r);
                null != e && (R[o] = {
                    name: e.name,
                    id: e.id,
                    exe: e.exeName
                })
            }
        },
        STREAM_STOP: function(e) {
            let {
                appContext: t,
                streamKey: n
            } = e;
            N[n] = t, l.forEach(L, e => {
                let {
                    analyticsContext: n
                } = e;
                n.setActionContext(t)
            }), D[n] = null, O[n] = null
        },
        STREAM_CREATE: function(e) {
            let {
                streamKey: t,
                rtcServerId: n,
                region: r,
                viewerIds: o
            } = e;
            s = t;
            let l = L[t];
            if (null == l && null != n) {
                var u, c, f;
                null == O[t] && (R[t] = null);
                let e = (0, E.decodeStreamKey)(t);
                null == R[t] && null == D[t] && (R[t] = (0, h.getStreamerApplication)(e, I.default));
                let s = v.default.getChannel(e.channelId),
                    d = null != s && s.isBroadcastChannel(),
                    g = new _.StreamRTCAnalyticsContext({
                        streamRegion: r,
                        streamApplication: R[t],
                        streamSourceType: function(e) {
                            var t, n, i;
                            if (null == e) return "unknown";
                            if (m.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
                                if (e.startsWith("web-contents-media-stream:")) return "tab";
                                if (e.startsWith("window:")) return "window";
                                else if (e.startsWith("screen:")) return "screen"
                            } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Firefox") return "" !== e ? "window" : "screen";
                            else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === "Safari") return "window";
                            return "unknown"
                        }(D[t]),
                        actionContext: N[t],
                        numViewers: null != o ? o.length : 0,
                        isBroadcast: d
                    });
                u = t, c = n, f = g, a(null != i, "Creating RTCConnection without session."), l = new _.default({
                    sessionId: i,
                    streamKey: u,
                    serverId: c,
                    initialLayout: P,
                    analyticsContext: f,
                    isStreamer: null != R[u],
                    parentMediaSessionId: C.default.getMediaSessionId()
                }), L[t] = l
            }
            M = [], T.default.getMediaEngine().on(d.MediaEngineEvent.ConnectionStats, U)
        },
        STREAM_SERVER_UPDATE: function(e) {
            let t = L[e.streamKey];
            if (null == t) return !1;
            t.connect(e.endpoint, e.token)
        },
        STREAM_UPDATE: function(e) {
            let {
                streamKey: t,
                viewerIds: n,
                paused: i
            } = e, s = L[t];
            if (null == s) return !1;
            null != n && s.analyticsContext.trackViewerCount(n.length), s.streamUpdate(i)
        },
        STREAM_DELETE: function(e) {
            let {
                streamKey: t
            } = e, n = L[t];
            if (null == n) return !1;
            t === s && (s = null, T.default.getMediaEngine().off(d.MediaEngineEvent.ConnectionStats, U)), n.destroy("stream-end"), delete L[t]
        },
        STREAM_STATS_UPDATE: function(e) {
            let {
                stats: t
            } = e;
            if (null == t) return !1;
            M.push(t), M.length > 30 && M.shift()
        },
        STREAM_LAYOUT_UPDATE: function(e) {
            let {
                layout: t
            } = e;
            P = t, Object.values(L).forEach(e => e.layoutChange(t))
        }
    })
}