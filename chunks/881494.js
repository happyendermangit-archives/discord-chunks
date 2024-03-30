function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        graphs: function() {
            return g
        },
        keySection: function() {
            return C
        },
        parseSection: function() {
            return P
        }
    });
    var r, o = n("898511"),
        i = n("384433"),
        a = n("629815"),
        u = n("669781"),
        s = n("335911"),
        l = n("208454"),
        c = n("281767"),
        f = n("439386");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function E(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function p(e, t, n) {
        return t && E(e.prototype, t), n && E(e, n), e
    }

    function m(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function y(e) {
        return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                m(e, t, n[t])
            })
        }
        return e
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function O(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var T = C(f.MediaEngineContextTypes.DEFAULT, c.RTCDebugSections.TRANSPORT, 0),
        S = T,
        v = {},
        g = {
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

    function A(e, t, n) {
        return "".concat(e, ":").concat(t, ":").concat(n)
    }
    var b = (function() {
            function e(t) {
                _(this, e), m(this, "state", void 0), this.state = t
            }
            return p(e, [{
                key: "put",
                value: function(t, n, r, o) {
                    if ("" === o) {
                        var i = I({}, this.state);
                        return delete i[A(t, n, r)], new e(i)
                    }
                    return new e(I(m({}, A(t, n, r), o), this.state))
                }
            }, {
                key: "get",
                value: function(e, t, n) {
                    var r = this.state[A(e, t, n)];
                    return null != r ? r : null
                }
            }], [{
                key: "empty",
                value: function() {
                    return new e({})
                }
            }]), e
        })().empty(),
        N = !1,
        R = null;

    function C(e, t, n) {
        return "".concat(e, ":").concat(t, ":").concat(n)
    }

    function P(e) {
        var t = O(e.split(":"), 2);
        return {
            context: t[0],
            section: t[1]
        }
    }

    function D() {
        Object.values(f.MediaEngineContextTypes).forEach(function(e) {
            v[e] = {}
        })
    }
    D();

    function L() {
        null != R && (R.destroy(), R = null)
    }
    var M = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = y(t);
            if (n) {
                var a = y(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o() {
            return _(this, o), r.apply(this, arguments)
        }
        return p(o, [{
            key: "getSection",
            value: function() {
                return S
            }
        }, {
            key: "getStats",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.MediaEngineContextTypes.DEFAULT;
                return v[e][0]
            }
        }, {
            key: "getAllStats",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f.MediaEngineContextTypes.DEFAULT;
                return Object.values(v[e])
            }
        }, {
            key: "getVideoStreams",
            value: function() {
                return b
            }
        }, {
            key: "shouldRecordNextConnection",
            value: function() {
                return N
            }
        }]), o
    }(o.default.Store);
    m(M, "displayName", "RTCDebugStore"), t.default = new M(a.default, {
        RTC_DEBUG_MODAL_OPEN: function(e) {
            var t;
            S = null !== (t = e.section) && void 0 !== t ? t : T
        },
        RTC_DEBUG_MODAL_CLOSE: function() {
            L()
        },
        RTC_DEBUG_MODAL_SET_SECTION: function(e) {
            S = e.section
        },
        RTC_DEBUG_MODAL_UPDATE: function(e) {
            var t = e.context,
                n = e.stats,
                r = e.index,
                o = v[t];
            if (null != n) {
                var i = O(S.split(":"), 3),
                    a = i[0],
                    u = i[1],
                    s = i[2];
                a === t && parseInt(s) === r && null != l.default.getUser(u) && !Object.keys(n.rtp.inbound).includes(u) && (S = T), o[r] = function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                        o = {},
                        i = !0,
                        a = !1,
                        u = void 0;
                    try {
                        for (var s, l = Object.entries(t)[Symbol.iterator](); !(i = (s = l.next()).done); i = !0) {
                            var c = O(s.value, 2),
                                f = c[0],
                                d = c[1],
                                _ = n[f];
                            if (Array.isArray(d)) {
                                if ("object" == typeof d[0]) {
                                    for (var E = Array.isArray(_) ? _ : [], p = o[f] = [], m = 0; m < d.length; m++) {
                                        var y = E[m],
                                            I = "object" == typeof y ? y : {};
                                        p.push(e(d[m], I, r))
                                    }
                                } else o[f] = d
                            } else if ("object" == typeof d && null !== d) {
                                var h = "object" == typeof _ && null !== _ ? _ : {};
                                o[f] = e(d, h, r)
                            } else if (f in g && "number" == typeof d) {
                                var T = o[f] = Array.isArray(_) ? _ : [];
                                T.push({
                                    value: d,
                                    time: r
                                }), T.length > 600 && T.shift()
                            } else o[f] = d
                        }
                    } catch (e) {
                        a = !0, u = e
                    } finally {
                        try {
                            !i && null != l.return && l.return()
                        } finally {
                            if (a) throw u
                        }
                    }
                    return o
                }(n, o[r])
            } else delete o[r]
        },
        RTC_DEBUG_MODAL_OPEN_REPLAY: function(e) {
            u.chooseReplayPath()
        },
        RTC_DEBUG_MODAL_OPEN_REPLAY_AT_PATH: function(e) {
            var t = e.path,
                n = s.default.getMediaEngine();
            if (L(), !!n.supports(f.Features.CONNECTION_REPLAY)) {
                if (0 !== t.length) {
                    var r = n.createReplayConnection(f.MediaEngineContextTypes.DEFAULT, t);
                    null != r && (R = r, r.on(i.BaseConnectionEvent.Video, function(e, t, n, o, i) {
                        a.default.dispatch({
                            type: "RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT",
                            mediaEngineConnectionId: r.mediaEngineConnectionId,
                            userId: e,
                            videoSsrc: null != o ? o : 0,
                            streamId: null != t ? t : ""
                        })
                    }), a.default.wait(function() {
                        return u.open()
                    }))
                }
            }
        },
        RTC_DEBUG_MODAL_UPDATE_VIDEO_OUTPUT: function(e) {
            b = b.put(e.mediaEngineConnectionId, e.userId, e.videoSsrc, e.streamId)
        },
        RTC_DEBUG_SET_RECORDING_FLAG: function(e) {
            N = e.value
        },
        VOICE_CHANNEL_SELECT: function(e) {
            null != e.channelId && D()
        }
    }), s.default.getMediaEngine().on(i.MediaEngineEvent.ConnectionStats, function(e) {
        Object.values(f.MediaEngineContextTypes).forEach(function(t) {
            e.filter(function(e) {
                return e.connection.context === t
            }).forEach(function(e, n) {
                a.default.dispatch({
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