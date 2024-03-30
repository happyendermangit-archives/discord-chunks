function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var r = n("188129"),
        o = n("418603"),
        i = n("384433"),
        a = n("702016"),
        u = n("912872");

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

    function f(e, t, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
            var r = function(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                return e
            }(e, t);
            if (r) {
                var o = Object.getOwnPropertyDescriptor(r, t);
                return o.get ? o.get.call(n || e) : o.value
            }
        })(e, t, n || e)
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e, t) {
        return (_ = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var E = new r.Logger("SpeedTester"),
        p = 0,
        m = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && _(e, t)
            }(I, e);
            var t, n, r, o, m, y = (t = I, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = d(t);
                if (n) {
                    var a = d(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : s(e)
            });

            function I(e) {
                var t;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, I), c(s(t = y.call(this, e)), "mediaEngineConnectionId", "Native-".concat(p++)), c(s(t), "codecs", []), c(s(t), "qos", !0), c(s(t), "conn", void 0), c(s(t), "reconnectInterval", 6e4), c(s(t), "pingInterval", u.PING_INTERVAL), c(s(t), "handlePing", function(e, n, r) {
                    t.emit(i.BaseSpeedTesterEvent.Ping, e)
                }), c(s(t), "handlePingTimeout", function(e, n, r, o) {
                    t.emit(i.BaseSpeedTesterEvent.PingTimeout, r, o > 0 ? o : 4e3)
                }), c(s(t), "handleNewListenerNative", function(e) {
                    if (e === i.BaseSpeedTesterEvent.ConnectionStateChange) t.emit(e, t.connectionState)
                }), t
            }
            return r = I, o = [{
                key: "initialize",
                value: function(e) {
                    var t, n = this;
                    this.audioSSRC = e.ssrc, this.streamUserId = e.streamUserId, this.pingInterval = u.PING_INTERVAL, this.initializeStreamParameters(e.streamParameters), e.streamParameters = this.videoStreamParameters;
                    var r = (0, a.getVoiceEngine)();
                    t = this.conn = r.createSpeedTestConnectionWithOptions(this.ids.userId, e, function(r, o) {
                        if (!n.destroyed) {
                            if (null != r && "" !== r) {
                                n.setConnectionState(u.ConnectionStates.NO_ROUTE), n.emit(i.BaseSpeedTesterEvent.Error, r);
                                return
                            }
                            if (null == o) throw Error("Invalid transport info");
                            var a = o.protocol,
                                s = o.address,
                                l = o.port;
                            E.info("Connected with local address ".concat(s, ":").concat(l, " and protocol: ").concat(a)), n.codecs = [{
                                type: "audio",
                                name: u.Codecs.OPUS,
                                priority: 1,
                                payloadType: 120
                            }, {
                                type: "test",
                                name: u.Codecs.TEST,
                                priority: 1,
                                payloadType: 127
                            }], t.getEncryptionModes(function(r) {
                                var o, c;
                                E.info("Encryption modes: ".concat(r)), t.setTransportOptions(n.getConnectionTransportOptions()), null === (o = t.setPingInterval) || void 0 === o || o.call(t, n.pingInterval), t.setPingCallback(n.handlePing), null === (c = t.setPingTimeoutCallback) || void 0 === c || c.call(t, n.handlePingTimeout), n.setConnectionState(u.ConnectionStates.CONNECTED), n.emit(i.BaseSpeedTesterEvent.Connected, a, {
                                    address: s,
                                    port: l,
                                    mode: n.chooseEncryptionMode(e.modes, r),
                                    codecs: n.codecs
                                })
                            })
                        }
                    }), this.on("newListener", this.handleNewListenerNative)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.conn.destroy(), this.setConnectionState(u.ConnectionStates.DISCONNECTED), f(d(I.prototype), "destroy", this).call(this)
                }
            }, {
                key: "setCodecs",
                value: function(e, t) {
                    this.conn.setTransportOptions(this.getCodecOptions(e, t))
                }
            }, {
                key: "setEncryption",
                value: function(e, t) {
                    this.conn.setTransportOptions({
                        encryptionSettings: {
                            mode: e,
                            secretKey: t
                        }
                    })
                }
            }, {
                key: "setSDP",
                value: function(e) {}
            }, {
                key: "getNetworkOverhead",
                value: function(e) {
                    this.conn.getNetworkOverhead(e)
                }
            }, {
                key: "setPingInterval",
                value: function(e) {
                    var t, n;
                    this.pingInterval = e, null === (t = (n = this.conn).setPingInterval) || void 0 === t || t.call(n, this.pingInterval)
                }
            }, {
                key: "startSpeedTestSender",
                value: function(e, t, n, r) {
                    null != this.conn.startSpeedTestSender ? this.conn.startSpeedTestSender({
                        clusterSize: t,
                        clusterIntervalMs: n,
                        numClusters: r
                    }, e) : this.conn.startClientToServerSpeedTest({
                        doneCb: e,
                        clusterSize: t,
                        clusterIntervalMs: n,
                        numClusters: r
                    })
                }
            }, {
                key: "stopSpeedTestSender",
                value: function() {
                    null != this.conn.stopSpeedTestSender ? this.conn.stopSpeedTestSender() : this.conn.endClientToServerSpeedTest({})
                }
            }, {
                key: "startSpeedTestReceiver",
                value: function(e, t) {
                    null != this.conn.startSpeedTestReceiver ? this.conn.startSpeedTestReceiver({
                        packetLimit: t
                    }, e) : this.conn.startServerToClientSpeedTest({
                        readyCb: e,
                        packetLimit: t
                    })
                }
            }, {
                key: "stopSpeedTestReceiver",
                value: function(e) {
                    null != this.conn.stopSpeedTestReceiver ? this.conn.stopSpeedTestReceiver(e) : this.conn.endServerToClientSpeedTest({
                        doneCb: e
                    })
                }
            }, {
                key: "chooseEncryptionMode",
                value: function(e, t) {
                    var n = !0,
                        r = !1,
                        o = void 0;
                    try {
                        for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                            var u = i.value,
                                s = !0,
                                l = !1,
                                c = void 0;
                            try {
                                for (var f, d = e[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                                    var _ = f.value;
                                    if (u === _) return u
                                }
                            } catch (e) {
                                l = !0, c = e
                            } finally {
                                try {
                                    !s && null != d.return && d.return()
                                } finally {
                                    if (l) throw c
                                }
                            }
                        }
                    } catch (e) {
                        r = !0, o = e
                    } finally {
                        try {
                            !n && null != a.return && a.return()
                        } finally {
                            if (r) throw o
                        }
                    }
                    return "xsalsa20_poly1305"
                }
            }, {
                key: "getConnectionTransportOptions",
                value: function() {
                    return {
                        qos: this.qos,
                        reconnectInterval: this.reconnectInterval,
                        userChannelIds: this.ids
                    }
                }
            }, {
                key: "getCodecOptions",
                value: function(e, t) {
                    var n, r, o, i, a, u = {
                            type: null !== (r = null == (n = this.codecs.find(function(t) {
                                return t.name === e
                            })) ? void 0 : n.payloadType) && void 0 !== r ? r : 0,
                            name: e,
                            freq: 48e3,
                            pacsize: 960,
                            channels: 1,
                            rate: 64e3
                        },
                        s = [{
                            type: null !== (o = null == n ? void 0 : n.payloadType) && void 0 !== o ? o : 0,
                            name: e,
                            freq: 48e3,
                            channels: 2,
                            params: {
                                stereo: "1"
                            }
                        }];
                    return {
                        audioEncoder: u,
                        audioDecoders: s,
                        testEncoder: {
                            type: null !== (i = null == (n = this.codecs.find(function(e) {
                                return e.name === t
                            })) ? void 0 : n.payloadType) && void 0 !== i ? i : 0
                        },
                        testDecoder: {
                            type: null !== (a = null == n ? void 0 : n.payloadType) && void 0 !== a ? a : 0
                        }
                    }
                }
            }, {
                key: "getUserIdBySsrc",
                value: function(e) {}
            }], m = [{
                key: "create",
                value: function(e, t) {
                    var n = new I(e);
                    return E.info("Creating connection to ".concat(t.address, ":").concat(t.port, " with audio ssrc: ").concat(t.ssrc)), n.initialize(t), n
                }
            }], o && l(r.prototype, o), m && l(r, m), I
        }(o.default)
}