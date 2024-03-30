function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u, s, l = n("512722"),
        c = n.n(l),
        f = n("392711"),
        d = n.n(f),
        _ = n("898511"),
        E = n("384433"),
        p = n("629815"),
        m = n("654370"),
        y = n("942879"),
        I = n("736381"),
        h = n("977221"),
        O = n("882909"),
        T = n("374550"),
        S = n("73013"),
        v = n("217014"),
        g = n("935741"),
        A = n("335911"),
        b = n("868447"),
        N = n("545072"),
        R = n("281767"),
        C = n("439386");

    function P(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function D(e) {
        return (D = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function L(e, t) {
        return (L = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var M = {},
        U = {},
        w = {},
        k = {},
        G = R.StreamLayouts.THEATRE,
        B = {},
        j = [];

    function F() {
        d().forEach(B, function(e, t) {
            e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete B[t]
        })
    }

    function V(e) {
        e.filter(function(e) {
            return e.connection.context === C.MediaEngineContextTypes.STREAM
        }).forEach(function(e) {
            var t = e.stats;
            p.default.dispatch({
                type: "STREAM_STATS_UPDATE",
                stats: t
            })
        })
    }

    function H() {
        return !0
    }
    var x = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && L(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = D(t);
            if (n) {
                var a = D(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "getActiveStreamKey",
            value: function() {
                return (0, O.default)(A.default) ? u : null
            }
        }, {
            key: "getAllActiveStreamKeys",
            value: function() {
                return Object.keys(B)
            }
        }, {
            key: "getRTCConnection",
            value: function(e) {
                return B[e]
            }
        }, {
            key: "getStatsHistory",
            value: function(e, t, n) {
                if (!(0, O.default)(A.default) || null == t) return null;
                if (n) {
                    var r = S.default.getActiveStreamForUser(t, e);
                    if (null == r || 0 === S.default.getViewerIds(r).length) return null
                }
                return j.map(function(e) {
                    var r, o, i, a, u, s;
                    return n ? null != (s = e.rtp.outbound.find(function(e) {
                        return "video" === e.type
                    })) && "video" === s.type ? {
                        type: "streamer",
                        packetsSentOrReceived: null !== (o = s.packetsSent) && void 0 !== o ? o : 0,
                        packetsLost: null !== (i = s.packetsLost) && void 0 !== i ? i : 0,
                        frameRate: null !== (a = s.frameRateEncode) && void 0 !== a ? a : 0,
                        resolution: null !== (u = null === (r = s.resolution) || void 0 === r ? void 0 : r.height) && void 0 !== u ? u : 0,
                        bitrate: 0
                    } : null : function(e) {
                        if (null == e) return null;
                        var t, n, r, o, i, a, u = e.find(function(e) {
                            return "video" === e.type
                        });
                        return null != u && "video" === u.type ? {
                            type: "spectator",
                            packetsSentOrReceived: null !== (n = u.packetsReceived) && void 0 !== n ? n : 0,
                            packetsLost: null !== (r = u.packetsLost) && void 0 !== r ? r : 0,
                            frameRate: null !== (o = u.frameRateDecode) && void 0 !== o ? o : 0,
                            bitrate: null !== (i = u.bitrate) && void 0 !== i ? i : 0,
                            resolution: null !== (a = null === (t = u.resolution) || void 0 === t ? void 0 : t.height) && void 0 !== a ? a : 0
                        } : null
                    }(e.rtp.inbound[t])
                })
            }
        }, {
            key: "getQuality",
            value: function() {
                if (!(0, O.default)(A.default)) return R.RTCConnectionQuality.UNKNOWN;
                var e = this.getActiveStreamKey(),
                    t = null != e ? B[e] : null;
                return null != t ? t.quality : R.RTCConnectionQuality.UNKNOWN
            }
        }, {
            key: "getMediaSessionId",
            value: function(e) {
                if (null == e) return null;
                var t = B[e];
                if (null != t) return null != t ? t.getMediaSessionId() : null
            }
        }, {
            key: "getRtcConnectionId",
            value: function(e) {
                if (null == e) return null;
                var t = B[e];
                if (null != t) return null != t ? t.getRTCConnectionId() : null
            }
        }, {
            key: "getVideoStats",
            value: function(e) {
                if (null == e) return null;
                var t = B[e];
                return null != t ? t.getVideoStats() : null
            }
        }, {
            key: "getHostname",
            value: function(e) {
                if (null == e) return "";
                var t = B[e];
                return null != t ? null != t.hostname ? t.hostname : "" : ""
            }
        }, {
            key: "getRegion",
            value: function(e) {
                if (null == e) return null;
                var t = B[e];
                return null != t ? t.getRegion() : null
            }
        }, {
            key: "getMaxViewers",
            value: function(e) {
                if (null == e) return null;
                var t = B[e];
                return null != t ? t.getMaxViewers() : null
            }
        }, {
            key: "getStreamSourceId",
            value: function(e) {
                return k[e]
            }
        }], P(r.prototype, o), i && P(r, i), s
    }(_.default.Store);
    i = "StreamRTCConnectionStore", (o = "displayName") in(r = x) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new x(p.default, !A.default.isSupported() || __OVERLAY__ ? {} : {
        CONNECTION_OPEN: function(e) {
            a = e.sessionId, u = null, F()
        },
        CONNECTION_CLOSED: function() {
            a = null, u = null, F()
        },
        RTC_CONNECTION_STATE: H,
        RTC_CONNECTION_PING: H,
        RTC_CONNECTION_LOSS_RATE: H,
        RTC_CONNECTION_UPDATE_ID: function(e) {
            return d().some(B, function(t) {
                return t === e.connection
            })
        },
        STREAM_START: function(e) {
            var t = e.streamType,
                n = e.guildId,
                r = e.channelId,
                o = e.appContext,
                i = e.pid,
                a = e.sourceId,
                u = (0, I.encodeStreamKey)({
                    streamType: t,
                    guildId: n,
                    channelId: r,
                    ownerId: v.default.getId()
                });
            if (M[u] = o, d().forEach(B, function(e) {
                    e.analyticsContext.setActionContext(o)
                }), k[u] = a, w[u] = i, null != i) {
                var s = m.default.getGameForPID(i);
                null != s && (U[u] = {
                    name: s.name,
                    id: s.id,
                    exe: s.exeName,
                    distributor: s.distributor
                })
            }
        },
        STREAM_STOP: function(e) {
            var t = e.appContext,
                n = e.streamKey;
            M[n] = t, d().forEach(B, function(e) {
                e.analyticsContext.setActionContext(t)
            }), k[n] = null, w[n] = null
        },
        STREAM_CREATE: function(e) {
            var t = e.streamKey,
                n = e.rtcServerId,
                r = e.region,
                o = e.viewerIds;
            u = t;
            var i = B[t];
            if (null == i && null != n) {
                null == w[t] && (U[t] = null);
                var s, l, f, d = (0, I.decodeStreamKey)(t);
                null == U[t] && null == k[t] && (U[t] = (0, h.getStreamerApplication)(d, b.default));
                var _ = g.default.getChannel(d.channelId),
                    p = null != _ && _.isBroadcastChannel(),
                    m = new y.StreamRTCAnalyticsContext({
                        streamRegion: r,
                        streamApplication: U[t],
                        streamSourceType: function(e) {
                            var t, n, r;
                            if (null == e) return "unknown";
                            if (T.isPlatformEmbedded || (null === (t = platform) || void 0 === t ? void 0 : t.name) === "Chrome") {
                                if (e.startsWith("web-contents-media-stream:")) return "tab";
                                if (e.startsWith("window:")) return "window";
                                else if (e.startsWith("screen:")) return "screen"
                            } else if ((null === (n = platform) || void 0 === n ? void 0 : n.name) === "Firefox") return "" !== e ? "window" : "screen";
                            else if ((null === (r = platform) || void 0 === r ? void 0 : r.name) === "Safari") return "window";
                            return "unknown"
                        }(k[t]),
                        actionContext: M[t],
                        numViewers: null != o ? o.length : 0,
                        isBroadcast: p
                    });
                s = t, l = n, f = m, c()(null != a, "Creating RTCConnection without session."), i = new y.default({
                    sessionId: a,
                    streamKey: s,
                    serverId: l,
                    initialLayout: G,
                    analyticsContext: f,
                    isStreamer: null != U[s],
                    parentMediaSessionId: N.default.getMediaSessionId()
                }), B[t] = i
            }
            j = [], A.default.getMediaEngine().on(E.MediaEngineEvent.ConnectionStats, V)
        },
        STREAM_SERVER_UPDATE: function(e) {
            var t = B[e.streamKey];
            if (null == t) return !1;
            t.connect(e.endpoint, e.token)
        },
        STREAM_UPDATE: function(e) {
            var t = e.streamKey,
                n = e.viewerIds,
                r = e.paused,
                o = B[t];
            if (null == o) return !1;
            null != n && o.analyticsContext.trackViewerCount(n.length), o.streamUpdate(r)
        },
        STREAM_DELETE: function(e) {
            var t = e.streamKey,
                n = B[t];
            if (null == n) return !1;
            t === u && (u = null, A.default.getMediaEngine().off(E.MediaEngineEvent.ConnectionStats, V)), n.destroy("stream-end"), delete B[t]
        },
        STREAM_STATS_UPDATE: function(e) {
            var t = e.stats;
            if (null == t) return !1;
            j.push(t), j.length > 30 && j.shift()
        },
        STREAM_LAYOUT_UPDATE: function(e) {
            var t = e.layout;
            G = t, Object.values(B).forEach(function(e) {
                return e.layoutChange(t)
            })
        }
    })
}