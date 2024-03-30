function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        makeConnection: function() {
            return v
        }
    });
    var r = n("264344"),
        o = n.n(r),
        i = n("188129"),
        a = n("384433"),
        u = n("354943"),
        s = n("655280"),
        l = n("995425"),
        c = n("227934"),
        f = n("461723"),
        d = n("126995"),
        _ = n("439386"),
        E = n("681751");

    function p(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function m(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e, t, n) {
        return (I = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function h(e) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function O(e, t) {
        return (O = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function T(e) {
        return e.split("-")[0]
    }
    var S = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && O(e, t)
        }(E, e);
        var t, n, r, o, u, d = (t = E, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = h(t);
            if (n) {
                var a = h(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : p(e)
        });

        function E(e, t, n, r) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, E), y(p(o = d.call(this, e, t, n, r)), "pc", void 0), y(p(o), "fpc", void 0), y(p(o), "codecs", []), y(p(o), "logger", void 0), o.logger = new i.Logger("Connection(".concat(e, ")"));
            var o, u = new s.default;
            u.on("answer", function(e) {
                return o.pc.setRemoteDescription(e).catch(function(e) {
                    return o.logger.error("Failed to set remote description (answer): ".concat(e))
                })
            }), u.on("offer", function(e) {
                o.pc.setRemoteDescription(e).then(function() {
                    return o.pc.createAnswer()
                }).then(function(e) {
                    return o.fpc.setRemoteDescription(e)
                }).catch(function(e) {
                    return o.logger.error("Failed to set remote description (offer): ".concat(e))
                })
            }), u.direction = null != o.input.stream ? f.Directions.SENDRECV : f.Directions.SENDONLY, o.fpc = u;
            var m = new c.default(o.voiceBitrate);
            return m.on("addtrack", function(e, t) {
                return o.createOutput(T(e), t)
            }), m.on("removetrack", function(e, t) {
                return o.destroyOutput(T(e), t)
            }), m.once("connected", function() {
                o.input.reset(), o.setConnectionState(_.ConnectionStates.CONNECTED), o.on(a.BaseConnectionEvent.Stats, o.handleStats), o.input.on(l.InputEvent.VoiceActivity, o.handleVoiceActivity)
            }), m.on("connecting", function() {
                return o.setConnectionState(_.ConnectionStates.DTLS_CONNECTING)
            }), m.on("checking", function() {
                return o.setConnectionState(_.ConnectionStates.ICE_CHECKING)
            }), m.on("failed", function() {
                return o.setConnectionState(_.ConnectionStates.NO_ROUTE)
            }), m.on("disconnected", function() {
                return o.setConnectionState(_.ConnectionStates.DISCONNECTED)
            }), m.on("closed", function() {
                return o.setConnectionState(_.ConnectionStates.DISCONNECTED)
            }), m.on("offer", function(e) {
                var t = e.sdp,
                    n = (0, f.extractSDP)(t),
                    r = n.outboundStreams,
                    i = n.codecs,
                    s = n.audioSSRC,
                    l = n.videoSSRC,
                    c = n.rtxSSRC;
                o.codecs = i;
                var d = (0, f.getExtensions)(t);
                u.outboundStreams = r, o.audioSSRC = s, u.extensions = d, (o.videoStreamParameters[0].ssrc !== l || o.videoStreamParameters[0].rtxSsrc !== c || !o.videoReady) && (o.videoStreamParameters[0].ssrc = l, o.videoStreamParameters[0].rtxSsrc = c, o.emit(a.BaseConnectionEvent.Video, o.ids.userId, o.input.getVideoStreamId(), o.audioSSRC, o.videoStreamParameters[0].ssrc, o.videoStreamParameters[0].rtxSsrc, o.videoStreamParameters), o.videoReady = !0)
            }), m.once("offer", function(e) {
                var t = e.sdp;
                o.emit(a.BaseConnectionEvent.Connected, "webrtc", (0, f.truncateSDP)(t))
            }), null != o.input.stream ? m.setStream(o.input.stream) : m.negotiationNeeded(), o.pc = m, o
        }
        return r = E, o = [{
            key: "destroy",
            value: function() {
                I(h(E.prototype), "destroy", this).call(this), this.pc.close()
            }
        }, {
            key: "setCodecs",
            value: function(e, t, n) {
                var r, o, i, a;
                (this.fpc.audioCodec !== e || this.fpc.videoCodec !== t) && (r = this.codecs.find(function(t) {
                    return t.name === e
                }), this.fpc.audioCodec = e, this.fpc.audioPayloadType = null !== (o = null == r ? void 0 : r.payloadType) && void 0 !== o ? o : 0, r = this.codecs.find(function(e) {
                    return e.name === t
                }), this.fpc.videoCodec = t, this.fpc.videoPayloadType = null !== (i = null == r ? void 0 : r.payloadType) && void 0 !== i ? i : 0, this.fpc.rtxPayloadType = null !== (a = null == r ? void 0 : r.rtxPayloadType) && void 0 !== a ? a : 0, this.pc.negotiationNeeded())
            }
        }, {
            key: "setStream",
            value: function(e) {
                this.fpc.direction = null != e ? f.Directions.SENDRECV : f.Directions.SENDONLY, this.pc.setStream(null != e ? e : null)
            }
        }, {
            key: "createUser",
            value: function(e, t, n) {
                if (0 === t) {
                    this.logger.warn("Attempting to create user ".concat(e, " with 0 audio SSRC"));
                    return
                }
                this.logger.info("Creating user: ".concat(e, " with audio SSRC: ").concat(t, " and video SSRCs: ").concat(null !== (r = null == n ? void 0 : n.join(",")) && void 0 !== r ? r : 0));
                var r, o = null != n && n.length > 0 ? n[0] : 0;
                this.fpc.addStream(e, t, o)
            }
        }, {
            key: "destroyUser",
            value: function(e) {
                this.fpc.removeStream(e)
            }
        }, {
            key: "setBitRate",
            value: function(e) {
                this.voiceBitrate !== e && (I(h(E.prototype), "setBitRate", this).call(this, e), this.pc.setBitRate(e))
            }
        }, {
            key: "setSDP",
            value: function(e) {
                var t = this;
                this.pc.on("offer", function() {
                    return t.fpc.createAnswer()
                }), this.fpc.sdp = e
            }
        }, {
            key: "getUserIdBySsrc",
            value: function(e) {}
        }, {
            key: "getRawStats",
            value: function() {
                return this.pc.getStats()
            }
        }, {
            key: "setVideoEncoderParameters",
            value: function(e) {}
        }], m(r.prototype, o), u && m(r, u), E
    }(u.default);

    function v(e, t, n, r) {
        var a = "".concat(null != o().name && "" !== o().name ? o().name : "unknown", " ").concat(null != o().version && "" !== o().version ? o().version : "unknown"),
            u = new i.Logger("Connection(".concat(e, ")"));
        return E.BROWSER_SUPPORTS_UNIFIED_PLAN ? (u.info("Using Unified Plan (".concat(a, ")")), new d.default(e, t, n, r)) : (u.info("Using Plan B (".concat(a, ")")), new S(e, t, n, r))
    }
}