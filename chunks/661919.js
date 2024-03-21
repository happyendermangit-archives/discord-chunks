function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        graphs: function() {
            return E
        },
        keySection: function() {
            return v
        },
        parseSection: function() {
            return T
        },
        default: function() {
            return y
        }
    }), n("222007"), n("424973");
    var i = n("446674"),
        s = n("773364"),
        r = n("913144"),
        a = n("673777"),
        o = n("42887"),
        l = n("697218"),
        u = n("49111"),
        d = n("353927");
    let c = v(d.MediaEngineContextTypes.DEFAULT, u.RTCDebugSections.TRANSPORT, 0),
        _ = c,
        f = {},
        E = {
            availableOutgoingBitrate: !0,
            bitrate: !0,
            bitrateTarget: !0,
            bytesReceived: !0,
            bytesSent: !0,
            encoderQualityPsnr: !0,
            encoderQualityVmaf: !0,
            encodeUsage: !0,
            frameRateDecode: !0,
            frameRateEncode: !0,
            frameRateInput: !0,
            frameRateNetwork: !0,
            frameRateRender: !0,
            inboundBitrateEstimate: !0,
            packetsLost: !0,
            packetsReceived: !0,
            packetsSent: !0,
            ping: !0
        };

    function h(e, t, n) {
        return "".concat(e, ":").concat(t, ":").concat(n)
    }
    class g {
        static empty() {
            return new g({})
        }
        put(e, t, n, i) {
            if ("" === i) {
                let i = {
                    ...this.state
                };
                return delete i[h(e, t, n)], new g(i)
            }
            return new g({
                [h(e, t, n)]: i,
                ...this.state
            })
        }
        get(e, t, n) {
            let i = this.state[h(e, t, n)];
            return null != i ? i : null
        }
        constructor(e) {
            this.state = e
        }
    }
    let m = g.empty(),
        p = !1,
        S = null;

    function v(e, t, n) {
        return "".concat(e, ":").concat(t, ":").concat(n)
    }

    function T(e) {
        let [t, n] = e.split(":");
        return {
            context: t,
            section: n
        }
    }

    function I() {
        Object.values(d.MediaEngineContextTypes).forEach(e => {
            f[e] = {}
        })
    }
    I();

    function A() {
        null != S && (S.destroy(), S = null)
    }
    class C extends i.default.Store {
        getSection() {
            return _
        }
        getStats() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.MediaEngineContextTypes.DEFAULT;
            return f[e][0]
        }
        getAllStats() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d.MediaEngineContextTypes.DEFAULT;
            return Object.values(f[e])
        }
        getVideoStreams() {
            return m
        }
        shouldRecordNextConnection() {
            return p
        }
    }
    C.displayName = "RTCDebugStore";
    var y = new C(r.default, {
        RTC_DEBUG_MODAL_OPEN: function(e) {
            var t;
            _ = null !== (t = e.section) && void 0 !== t ? t : c
        },
        RTC_DEBUG_MODAL_CLOSE: function() {
            A()
        },
        RTC_DEBUG_MODAL_SET_SECTION: function(e) {
            _ = e.section
        },
        RTC_DEBUG_MODAL_UPDATE: function(e) {
            let {
                context: t,
                stats: n,
                index: i
            } = e, s = f[t];
            if (null != n) {
                let [e, r, a] = _.split(":");
                if (e === t && parseInt(a) === i) {
                    let e = l.default.getUser(r);
                    if (null != e) {
                        let {
                            rtp: {
                                inbound: e
                            }
                        } = n;
                        !Object.keys(e).includes(r) && (_ = c)
                    }
                }
                s[i] = function e(t) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                        s = {};
                    for (let [r, a] of Object.entries(t)) {
                        let t = n[r];
                        if (Array.isArray(a)) {
                            if ("object" == typeof a[0]) {
                                let n = Array.isArray(t) ? t : [],
                                    o = s[r] = [];
                                for (let t = 0; t < a.length; t++) {
                                    let s = n[t],
                                        r = "object" == typeof s ? s : {};
                                    o.push(e(a[t], r, i))
                                }
                            } else s[r] = a
                        } else if ("object" == typeof a && null !== a) {
                            let n = "object" == typeof t && null !== t ? t : {};
                            s[r] = e(a, n, i)
                        } else if (r in E && "number" == typeof a) {
                            let e = s[r] = Array.isArray(t) ? t : [];
                            e.push({
                                value: a,
                                time: i
                            }), e.length > 600 && e.shift()
                        } else s[r] = a
                    }
                    return s
                }(n, s[i])
            } else delete s[i]
        },
        RTC_DEBUG_MODAL_OPEN_REPLAY: function(e) {
            a.chooseReplayPath()
        },
        RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function(e) {
            let {
                path: t
            } = e, n = o.default.getMediaEngine();
            if (A(), !n.supports(d.Features.CONNECTION_REPLAY) || 0 === t.length) return;
            let i = n.createReplayConnection(d.MediaEngineContextTypes.DEFAULT, t);
            null != i && (S = i, i.on(s.BaseConnectionEvent.Video, (e, t, n, s, a) => {
                r.default.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                    mediaEngineConnectionId: i.mediaEngineConnectionId,
                    userId: e,
                    videoSsrc: null != s ? s : 0,
                    streamId: null != t ? t : ""
                })
            }), r.default.wait(() => a.open()))
        },
        RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function(e) {
            m = m.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId)
        },
        RTC_DEBUG_SET_RECORDING_FLAG: function(e) {
            let {
                value: t
            } = e;
            p = t
        },
        VOICE_CHANNEL_SELECT: function(e) {
            null != e.channelId && I()
        }
    });
    o.default.getMediaEngine().on(s.MediaEngineEvent.ConnectionStats, function(e) {
        Object.values(d.MediaEngineContextTypes).forEach(t => {
            e.filter(e => {
                let {
                    connection: n
                } = e;
                return n.context === t
            }).forEach((e, n) => {
                r.default.dispatch({
                    type: "RTC_DEBUG_MODAL_UPDATE",
                    stats: e.stats,
                    context: t,
                    index: n,
                    mediaEngineConnectionId: e.connection.mediaEngineConnectionId
                })
            })
        })
    })
}