function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("836560"),
        o = n("264344"),
        i = n.n(o),
        a = n("461723");

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function s(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function l(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function f(e) {
        return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                c(e, t, n[t])
            })
        }
        return e
    }

    function _(e, t) {
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

    function E(e, t) {
        return (E = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var p = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && E(e, t)
        }(y, e);
        var t, n, r, o, p, m = (t = y, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = f(t);
            if (n) {
                var a = f(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : s(e)
        });

        function y() {
            var e;
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, y), e = m.apply(this, arguments), c(s(e), "audioCodec", null), c(s(e), "audioPayloadType", null), c(s(e), "videoCodec", null), c(s(e), "videoPayloadType", null), c(s(e), "rtxPayloadType", null), c(s(e), "direction", null), c(s(e), "outboundStreams", []), c(s(e), "extensions", []), c(s(e), "streams", []), c(s(e), "activeAudioSSRCs", {}), c(s(e), "activeVideoSSRCs", {}), c(s(e), "_sdp", null), c(s(e), "connected", !1), c(s(e), "negotiating", !1), c(s(e), "_negotiationNeeded", !1), e
        }
        return r = y, o = [{
            key: "addStream",
            value: function(e, t, n) {
                var r = !1;
                !this.streams.some(function(e) {
                    return e.ssrc === t
                }) && this.streams.push({
                    ssrc: t,
                    cname: e,
                    type: "audio"
                }), this.activeAudioSSRCs[e] !== t && (this.activeAudioSSRCs = _(d({}, this.activeAudioSSRCs), c({}, e, t)), r = !0), null != n && (n > 0 ? (!this.streams.some(function(e) {
                    return e.ssrc === n
                }) && this.streams.push({
                    ssrc: n,
                    cname: e,
                    type: "video"
                }), this.activeVideoSSRCs[e] !== n && (this.activeVideoSSRCs = _(d({}, this.activeVideoSSRCs), c({}, e, n)), r = !0)) : null != this.activeVideoSSRCs[e] && (r = !0, this.activeVideoSSRCs = d({}, this.activeVideoSSRCs), delete this.activeVideoSSRCs[e])), r && this.negotiationNeeded()
            }
        }, {
            key: "removeStream",
            value: function(e) {
                var t = !1;
                null != this.activeAudioSSRCs[e] && (t = !0, this.activeAudioSSRCs = d({}, this.activeAudioSSRCs), delete this.activeAudioSSRCs[e]), null != this.activeVideoSSRCs[e] && (t = !0, this.activeVideoSSRCs = d({}, this.activeVideoSSRCs), delete this.activeVideoSSRCs[e]), t && this.negotiationNeeded()
            }
        }, {
            key: "sdp",
            get: function() {
                if (null == this._sdp) throw Error("sdp is not set");
                return this._sdp
            },
            set: function(e) {
                if (!(0, a.validateSdp)(e)) throw Error("Incorrect SDP received from rtc-worker: ".concat(e));
                this._sdp = e, this.createAnswer(), this.connected = !0, this._negotiationNeeded && this.negotiationNeeded()
            }
        }, {
            key: "negotiationNeeded",
            value: function() {
                if (this.negotiating) {
                    this._negotiationNeeded = !0;
                    return
                }
                null != this._sdp ? (this.negotiating = !0, this._negotiationNeeded = !1, this.generateSessionDescription("offer")) : this._negotiationNeeded = !0
            }
        }, {
            key: "setRemoteDescription",
            value: function(e) {
                return this.negotiating = !1, this._negotiationNeeded && this.negotiationNeeded(), Promise.resolve()
            }
        }, {
            key: "createAnswer",
            value: function() {
                return this.generateSessionDescription("answer")
            }
        }, {
            key: "getSSRCs",
            value: function(e) {
                var t = this,
                    n = this.streams.map(function(e, n) {
                        var r = e.cname,
                            o = e.ssrc,
                            i = e.type,
                            u = t.activeAudioSSRCs[r],
                            s = t.activeVideoSSRCs[r],
                            l = "".concat(i, "_inbound_").concat(n);
                        return [o, r, i, u === o || s === o ? t.direction : a.Directions.INACTIVE, l]
                    });
                if ("Firefox" !== i().name) return this.connected ? n : [];
                var r = this.outboundStreams.map(function(e, t) {
                    return [0, "outbound", e.type, (0, a.getDirection)(e.direction), "".concat(e.type, "_outbound_").concat(t)]
                });
                if ("answer" !== e) return r.concat(n);
                var o = r.length - n.length;
                return r.slice(0, o).concat(n).slice(0, r.length).map(function(e, n) {
                    var r, o, i = (o = 5, function(e) {
                            if (Array.isArray(e)) return e
                        }(r = e) || function(e, t) {
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
                        }(r, o) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return u(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return u(e, t)
                            }
                        }(r, o) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        s = i[0],
                        l = i[1],
                        c = i[2];
                    return i[3], i[4], [s, l, c, (0, a.getDirection)(t.outboundStreams[n].direction), t.outboundStreams[n].mid]
                })
            }
        }, {
            key: "generateSessionDescription",
            value: function(e) {
                var t = this.audioCodec,
                    n = this.audioPayloadType,
                    r = this.videoCodec,
                    o = this.videoPayloadType,
                    i = this.rtxPayloadType,
                    u = this.sdp;
                if (null == t || null == n || null == r || null == o || null == i || null == u || null == this.direction) throw Error("Invalid payload: audioCodec: ".concat(t, ", audioPayloadType: ").concat(null == n ? "null" : n, ", videoCodec: ").concat(r, ", videoCodecPayloadType: ").concat(null == o ? "null" : o, ", rtxPayloadType: ").concat(null == i ? "null" : i, ", sdp: ").concat(u));
                var s = (0, a.generateSessionDescription)({
                    type: e,
                    baseSDP: u,
                    direction: this.direction,
                    audioCodec: t,
                    audioPayloadType: n,
                    audioBitRate: 40,
                    videoCodec: r,
                    videoPayloadType: o,
                    videoBitRate: 2500,
                    rtxPayloadType: i,
                    ssrcs: this.getSSRCs(e),
                    extensions: this.extensions
                });
                return this.emit(e, s), Promise.resolve(s)
            }
        }], l(r.prototype, o), p && l(r, p), y
    }(r.EventEmitter)
}