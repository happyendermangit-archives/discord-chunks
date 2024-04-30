function(e, t, n) {
    "use strict";
    let i, r;
    n.r(t), n("653041");
    var s, a, o, l, u = n("512722"),
        d = n.n(u),
        _ = n("392711"),
        c = n.n(_),
        E = n("442837"),
        I = n("46973"),
        T = n("570140"),
        f = n("594190"),
        S = n("444852"),
        h = n("569545"),
        A = n("687516"),
        m = n("139656"),
        N = n("358085"),
        p = n("199902"),
        O = n("314897"),
        R = n("592125"),
        C = n("131951"),
        g = n("158776"),
        L = n("19780"),
        v = n("981631"),
        D = n("65154");
    let M = {},
        y = {},
        P = {},
        U = {},
        b = v.StreamLayouts.THEATRE,
        G = {},
        w = [];

    function B() {
        c().forEach(G, (e, t) => {
            e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete G[t]
        })
    }

    function k(e) {
        e.filter(e => {
            let {
                connection: t
            } = e;
            return t.context === D.MediaEngineContextTypes.STREAM
        }).forEach(e => {
            let {
                stats: t
            } = e;
            T.default.dispatch({
                type: "STREAM_STATS_UPDATE",
                stats: t
            })
        })
    }

    function V() {
        return !0
    }
    class x extends(s = E.default.Store) {
        getActiveStreamKey() {
            return (0, m.default)(C.default) ? r : null
        }
        getAllActiveStreamKeys() {
            return Object.keys(G)
        }
        getRTCConnection(e) {
            return G[e]
        }
        getStatsHistory(e, t, n) {
            if (!(0, m.default)(C.default) || null == t) return null;
            if (n) {
                let n = p.default.getActiveStreamForUser(t, e);
                if (null == n || 0 === p.default.getViewerIds(n).length) return null
            }
            return w.map(e => n ? function(e) {
                var t, n, i, r, s;
                let a = e.find(e => "video" === e.type);
                return null != a && "video" === a.type ? {
                    type: "streamer",
                    packetsSentOrReceived: null !== (n = a.packetsSent) && void 0 !== n ? n : 0,
                    packetsLost: null !== (i = a.packetsLost) && void 0 !== i ? i : 0,
                    frameRate: null !== (r = a.frameRateEncode) && void 0 !== r ? r : 0,
                    resolution: null !== (s = null === (t = a.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== s ? s : 0,
                    bitrate: 0
                } : null
            }(e.rtp.outbound) : function(e) {
                var t, n, i, r, s, a;
                if (null == e) return null;
                let o = e.find(e => "video" === e.type);
                return null != o && "video" === o.type ? {
                    type: "spectator",
                    packetsSentOrReceived: null !== (n = o.packetsReceived) && void 0 !== n ? n : 0,
                    packetsLost: null !== (i = o.packetsLost) && void 0 !== i ? i : 0,
                    frameRate: null !== (r = o.frameRateDecode) && void 0 !== r ? r : 0,
                    bitrate: null !== (s = o.bitrate) && void 0 !== s ? s : 0,
                    resolution: null !== (a = null === (t = o.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0
                } : null
            }(e.rtp.inbound[t]))
        }
        getQuality() {
            if (!(0, m.default)(C.default)) return v.RTCConnectionQuality.UNKNOWN;
            let e = this.getActiveStreamKey(),
                t = null != e ? G[e] : null;
            return null != t ? t.quality : v.RTCConnectionQuality.UNKNOWN
        }
        getMediaSessionId(e) {
            if (null == e) return null;
            let t = G[e];
            if (null != t) return null != t ? t.getMediaSessionId() : null
        }
        getRtcConnectionId(e) {
            if (null == e) return null;
            let t = G[e];
            if (null != t) return null != t ? t.getRTCConnectionId() : null
        }
        getVideoStats(e) {
            if (null == e) return null;
            let t = G[e];
            return null != t ? t.getVideoStats() : null
        }
        getHostname(e) {
            if (null == e) return "";
            let t = G[e];
            return null != t ? null != t.hostname ? t.hostname : "" : ""
        }
        getRegion(e) {
            if (null == e) return null;
            let t = G[e];
            return null != t ? t.getRegion() : null
        }
        getMaxViewers(e) {
            if (null == e) return null;
            let t = G[e];
            return null != t ? t.getMaxViewers() : null
        }
        getStreamSourceId(e) {
            return U[e]
        }
        setFocusedGoLiveStream(e) {
            c().forEach(G, (t, n) => {
                t.setSelectedGoLiveStream(n === e ? n : null)
            })
        }
    }
    l = "StreamRTCConnectionStore", (o = "displayName") in(a = x) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new x(T.default, !C.default.isSupported() || __OVERLAY__ ? {} : {
        CONNECTION_OPEN: function(e) {
            i = e.sessionId, r = null, B()
        },
        CONNECTION_CLOSED: function() {
            i = null, r = null, B()
        },
        RTC_CONNECTION_STATE: V,
        RTC_CONNECTION_PING: V,
        RTC_CONNECTION_LOSS_RATE: V,
        RTC_CONNECTION_UPDATE_ID: function(e) {
            return c().some(G, t => t === e.connection)
        },
        STREAM_START: function(e) {
            let {
                streamType: t,
                guildId: n,
                channelId: i,
                appContext: r,
                pid: s,
                sourceId: a
            } = e, o = (0, h.encodeStreamKey)({
                streamType: t,
                guildId: n,
                channelId: i,
                ownerId: O.default.getId()
            });
            if (M[o] = r, c().forEach(G, e => {
                    let {
                        analyticsContext: t
                    } = e;
                    t.setActionContext(r)
                }), U[o] = a, P[o] = s, null != s) {
                let e = f.default.getGameForPID(s);
                null != e && (y[o] = {
                    name: e.name,
                    id: e.id,
                    exe: e.exeName,
                    distributor: e.distributor
                })
            }
        },
        STREAM_STOP: function(e) {
            let {
                appContext: t,
                streamKey: n
            } = e;
            M[n] = t, c().forEach(G, e => {
                let {
                    analyticsContext: n
                } = e;
                n.setActionContext(t)
            }), U[n] = null, P[n] = null
        },
        STREAM_CREATE: function(e) {
            let {
                streamKey: t,
                rtcServerId: n,
                region: s,
                viewerIds: a
            } = e;
            r = t;
            let o = G[t];
            if (null == o && null != n) {
                var l, u, _;
                null == P[t] && (y[t] = null);
                let e = (0, h.decodeStreamKey)(t);
                null == y[t] && null == U[t] && (y[t] = (0, A.getStreamerApplication)(e, g.default));
                let r = R.default.getChannel(e.channelId),
                    c = null != r && r.isBroadcastChannel(),
                    E = new S.StreamRTCAnalyticsContext({
                        streamRegion: s,
                        streamApplication: y[t],
                        streamSourceType: function(e) {
                            var t, n, i;
                            if (null == e) return "unknown";
                            if (N.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
                                if (e.startsWith("web-contents-media-stream:")) return "tab";
                                if (e.startsWith("window:")) return "window";
                                else if (e.startsWith("screen:")) return "screen"
                            } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Firefox") return "" !== e ? "window" : "screen";
                            else if ((null === (i = platform) || void 0 === i ? void 0 : i.name) === "Safari") return "window";
                            return "unknown"
                        }(U[t]),
                        actionContext: M[t],
                        numViewers: null != a ? a.length : 0,
                        isBroadcast: c
                    });
                l = t, u = n, _ = E, d()(null != i, "Creating RTCConnection without session."), o = new S.default({
                    sessionId: i,
                    streamKey: l,
                    serverId: u,
                    initialLayout: b,
                    analyticsContext: _,
                    isStreamer: null != y[l],
                    parentMediaSessionId: L.default.getMediaSessionId()
                }), G[t] = o
            }
            w = [], C.default.getMediaEngine().on(I.MediaEngineEvent.ConnectionStats, k)
        },
        STREAM_SERVER_UPDATE: function(e) {
            let t = G[e.streamKey];
            if (null == t) return !1;
            t.connect(e.endpoint, e.token)
        },
        STREAM_UPDATE: function(e) {
            let {
                streamKey: t,
                viewerIds: n,
                paused: i
            } = e, r = G[t];
            if (null == r) return !1;
            null != n && r.analyticsContext.trackViewerCount(n.length), r.streamUpdate(i)
        },
        STREAM_DELETE: function(e) {
            let {
                streamKey: t
            } = e, n = G[t];
            if (null == n) return !1;
            t === r && (r = null, C.default.getMediaEngine().off(I.MediaEngineEvent.ConnectionStats, k)), n.destroy("stream-end"), delete G[t]
        },
        STREAM_STATS_UPDATE: function(e) {
            let {
                stats: t
            } = e;
            if (null == t) return !1;
            w.push(t), w.length > 30 && w.shift()
        },
        STREAM_LAYOUT_UPDATE: function(e) {
            let {
                layout: t
            } = e;
            b = t, Object.values(G).forEach(e => e.layoutChange(t))
        }
    })
}