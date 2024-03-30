function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return $
        }
    });
    var r = n("512722"),
        o = n.n(r),
        i = n("457854"),
        a = n("235923"),
        u = n("757167"),
        s = n("767556"),
        l = n("898511"),
        c = n("967888"),
        f = n("629815"),
        d = n("365215"),
        _ = n("627725"),
        E = n("263302"),
        p = n("546900"),
        m = n("35523"),
        y = n("35911"),
        I = n("117459"),
        h = n("306191"),
        O = n("870331"),
        T = n("618396"),
        S = n("388990"),
        v = n("374550"),
        g = n("285910"),
        A = n("779250"),
        b = n("552292"),
        N = n("522667"),
        R = n("149297"),
        C = n("53465"),
        P = n("375215"),
        D = n("453085"),
        L = n("910375"),
        M = n("663193"),
        U = n("281767");

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    n("341604");

    function k(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function G(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function B(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function j(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function F(e) {
        return (F = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function V(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                j(e, t, n[t])
            })
        }
        return e
    }

    function H(e, t) {
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

    function x(e, t) {
        return (x = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Y(e, t) {
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
                if ("string" == typeof e) return w(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var W = new m.default("GatewaySocket"),
        K = new R.default;

    function z() {}
    var X = 30 * S.default.Millis.SECOND,
        q = 3 * S.default.Millis.MINUTE,
        Q = 1 * S.default.Millis.MINUTE;

    function J(e) {
        return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
    }
    var Z = window.GLOBAL_ENV.GATEWAY_ENDPOINT,
        $ = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && x(e, t)
            }(w, e);
            var t, n, r, m, S, R = (t = w, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = F(t);
                if (n) {
                    var a = F(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : k(e)
            });

            function w() {
                var e;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, w), j(k(e = R.call(this)), "gatewayBackoff", void 0), j(k(e), "handleIdentify", void 0), j(k(e), "dispatchExceptionBackoff", new a.default(1e3, Q)), j(k(e), "dispatchSuccessTimer", 0), j(k(e), "connectionState_", void 0), j(k(e), "webSocket", void 0), j(k(e), "seq", void 0), j(k(e), "sessionId", void 0), j(k(e), "token", void 0), j(k(e), "initialHeartbeatTimeout", void 0), j(k(e), "expeditedHeartbeatTimeout", void 0), j(k(e), "heartbeatInterval", void 0), j(k(e), "helloTimeout", void 0), j(k(e), "heartbeater", void 0), j(k(e), "lastHeartbeatAckTime", void 0), j(k(e), "heartbeatAck", void 0), j(k(e), "connectionStartTime", void 0), j(k(e), "identifyStartTime", void 0), j(k(e), "nextReconnectIsImmediate", void 0), j(k(e), "compressionHandler", void 0), j(k(e), "hasConnectedOnce", void 0), j(k(e), "isFastConnect", void 0), j(k(e), "didForceClearGuildHashes", !1), j(k(e), "identifyUncompressedByteSize", 0), j(k(e), "identifyCompressedByteSize", 0), j(k(e), "analytics", {}), j(k(e), "identifyCount", 0), j(k(e), "resumeUrl", null), j(k(e), "iosGoingAwayEventCount", 0), j(k(e), "dispatcher", void 0), j(k(e), "send", function(t, n, r) {
                    h.default.isLoggingGatewayEvents && W.verboseDangerously("~>", t, n);
                    var o = K.pack({
                        op: t,
                        d: n
                    });
                    if (!r || e.isSessionEstablished()) try {
                        null != e.webSocket ? e.webSocket.send(o) : W.warn("Attempted to send without a websocket that exists. Opcode: ".concat(t))
                    } catch (e) {} else W.warn("Attempted to send while not being in a connected state opcode: ".concat(t))
                }), e.dispatcher = new P.default(k(e)), e.gatewayBackoff = new a.default(1e3, 6e4), e.connectionState_ = A.default.CLOSED, e.webSocket = null, e.seq = 0, e.sessionId = null, e.token = null, e.initialHeartbeatTimeout = null, e.expeditedHeartbeatTimeout = null, e.lastHeartbeatAckTime = null, e.helloTimeout = null, e.heartbeatInterval = null, e.heartbeater = null, e.heartbeatAck = !0, e.connectionStartTime = 0, e.identifyStartTime = 0, e.nextReconnectIsImmediate = !1, e.compressionHandler = new N.default(K), e.hasConnectedOnce = !1, e.isFastConnect = !1, e.identifyCount = 0, e.iosGoingAwayEventCount = 0, e
            }
            return r = w, m = [{
                key: "connectionState",
                get: function() {
                    return this.connectionState_
                },
                set: function(e) {
                    W.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
                }
            }, {
                key: "addAnalytics",
                value: function(e) {
                    this.analytics = V({}, this.analytics, e)
                }
            }, {
                key: "setResumeUrl",
                value: function(e) {
                    null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && W.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
                }
            }, {
                key: "_connect",
                value: function() {
                    var e, t, n, r = this;
                    if (!this.willReconnect()) {
                        W.verbose("Skipping _connect because willReconnect is false");
                        return
                    }
                    if (L.getIsPaused()) {
                        W.info("Skipping _connect because socket is paused");
                        return
                    }
                    this.connectionState = A.default.CONNECTING, this.nextReconnectIsImmediate = !1, this.compressionHandler.recomputeAlgorithm();
                    var o = this.compressionHandler.getAlgorithm(),
                        i = K.getName(),
                        a = this._getGatewayUrl(),
                        s = window.GLOBAL_ENV.API_VERSION;
                    u.default.mark("\uD83C\uDF10", "Socket._connect"), W.info("[CONNECT] ".concat(a, ", ") + "encoding: ".concat(i, ", ") + "version: ".concat(s, ", ") + "compression: ".concat(null != o ? o : "none")), null !== this.webSocket && (W.error("_connect called with already existing websocket"), this._cleanup(function(e) {
                        return e.close(4e3)
                    })), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(function() {
                        var e = Date.now() - r.connectionStartTime;
                        r._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), r.setResumeUrl(null)
                    }, X);
                    var l = new URL(a);
                    l.searchParams.append("encoding", i), l.searchParams.append("v", s.toString()), null != o && l.searchParams.append("compress", o), ! function(e) {
                        var t = e.gatewayURL,
                            n = e.newCallback,
                            r = e.onOpen,
                            o = e.onMessage,
                            i = e.onError,
                            a = e.onClose,
                            u = window._ws,
                            s = !1,
                            l = !1,
                            c = null,
                            f = null;
                        if (window._ws = null, null != u) {
                            if (d = u.ws, u.state.gateway !== t) W.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(u.state.gateway, " !== ").concat(t)), d.close(1e3), d = null;
                            else {
                                var d, _, E = V({}, u.state);
                                null != E.messages && (E.messages = E.messages.map(function(e) {
                                    return null != e.data && "string" == typeof e.data ? H(V({}, e), {
                                        data: e.data.substring(0, 100)
                                    }) : e
                                })), W.log("[FAST CONNECT] successfully took over websocket, state:", H(V({}, E), {
                                    messages: null === (_ = E.messages) || void 0 === _ ? void 0 : _.length
                                })), s = u.state.open, l = u.state.identify, c = u.state.messages, f = u.state.clientState
                            }
                        }
                        null == d && ((d = (0, M.default)(t)).binaryType = "arraybuffer"), n(d), s && r(l, f), null != c && c.forEach(o), d.onopen = function() {
                            return r(l, f)
                        }, d.onmessage = o, d.onclose = a, d.onerror = i
                    }({
                        gatewayURL: l.toString(),
                        newCallback: function(e) {
                            r.webSocket = e, r.compressionHandler.bindWebSocket(e)
                        },
                        onOpen: function(e) {
                            u.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                            var t = Date.now() - r.connectionStartTime;
                            W.info("[CONNECTED] ".concat(l.toString(), " in ").concat(t, " ms")), r.isFastConnect = e, e ? r._doFastConnectIdentify() : r._doResumeOrIdentify()
                        },
                        onMessage: (e = this.compressionHandler, t = function(e, t) {
                            var n = Date.now(),
                                o = K.unpack(e),
                                i = o.op,
                                a = o.s,
                                s = o.t,
                                l = o.d;
                            i !== D.Opcode.DISPATCH && u.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(i, " ").concat(D.Opcode[i]));
                            var c = Date.now() - n;
                            switch ("READY" === s ? I.default.parseReady.set(n, c) : "READY_SUPPLEMENTAL" === s ? I.default.parseReadySupplemental.set(n, c) : c > 10 && u.default.mark("\uD83C\uDF10", "Parse " + s, c), null != a && (r.seq = a), i) {
                                case D.Opcode.HELLO:
                                    r._clearHelloTimeout(), r._handleHello(l);
                                    break;
                                case D.Opcode.RECONNECT:
                                    r._handleReconnect();
                                    break;
                                case D.Opcode.INVALID_SESSION:
                                    r._handleInvalidSession(l);
                                    break;
                                case D.Opcode.HEARTBEAT:
                                    r._sendHeartbeat();
                                    break;
                                case D.Opcode.HEARTBEAT_ACK:
                                    r._handleHeartbeatAck(l);
                                    break;
                                case D.Opcode.DISPATCH:
                                    r._handleDispatch(l, s, "READY" === s ? {
                                        compressed_byte_size: t,
                                        uncompressed_byte_size: J(e),
                                        compression_algorithm: r.compressionHandler.getAlgorithm(),
                                        packing_algorithm: K.getName(),
                                        unpack_duration_ms: c
                                    } : null);
                                    break;
                                default:
                                    W.info("Unhandled op ".concat(i))
                            }
                        }, n = 0, e.dataReady(function(e) {
                            try {
                                return t(e, n)
                            } finally {
                                n = 0
                            }
                        }), function(t) {
                            var r = t.data;
                            null != t.raw_length ? n += t.raw_length : n += J(r), e.feed(r)
                        }),
                        onError: function() {
                            r.setResumeUrl(null), T.default.flushDNSCache(), r._handleClose(!1, 0, "An error with the websocket occurred")
                        },
                        onClose: function(e) {
                            var t = e.wasClean,
                                n = e.code,
                                o = e.reason;
                            return r._handleClose(t, n, o)
                        }
                    })
                }
            }, {
                key: "_handleHello",
                value: function(e) {
                    var t = this.heartbeatInterval = e.heartbeat_interval,
                        n = Date.now() - this.connectionStartTime;
                    W.verbose("[HELLO] via ".concat((0, C.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
                }
            }, {
                key: "_handleReconnect",
                value: function() {
                    W.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(function(e) {
                        return e.close(4e3)
                    }), this.connectionState = A.default.WILL_RECONNECT, this._connect()
                }
            }, {
                key: "_handleInvalidSession",
                value: function(e) {
                    W.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
                }
            }, {
                key: "_handleDispatch",
                value: function(e, t, n) {
                    var r = Date.now() - this.connectionStartTime;
                    if ("READY" === t) {
                        var o = e.session_id;
                        this.sessionId = o;
                        var i = (0, C.getConnectionPath)(e);
                        u.default.setServerTrace(i), W.info("[READY] took ".concat(r, "ms, as ").concat(o)), W.verbose("".concat(i)), this.connectionState = A.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
                    } else "READY_SUPPLEMENTAL" === t ? (W.info("[READY_SUPPLEMENTAL] took ".concat(r, "ms")), this.connectionState = A.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (W.verbose((0, C.getConnectionPath)(e)), this.connectionState = A.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
                    this.dispatcher.receiveDispatch(e, t, n)
                }
            }, {
                key: "handleResumeDispatched",
                value: function() {
                    var e = Date.now() - this.connectionStartTime;
                    W.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
                }
            }, {
                key: "handleReadyDispatched",
                value: function() {
                    this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0
                }
            }, {
                key: "_getGatewayUrl",
                value: function() {
                    return null != this.resumeUrl ? this.resumeUrl : Z
                }
            }, {
                key: "_handleHeartbeatAck",
                value: function(e) {
                    this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, W.verbose("Expedited heartbeat succeeded"))
                }
            }, {
                key: "_handleHeartbeatTimeout",
                value: function() {
                    var e = this;
                    this._cleanup(function(e) {
                        return e.close(4e3)
                    }), this.connectionState = A.default.WILL_RECONNECT;
                    var t = this.gatewayBackoff.fail(function() {
                        return e._connect()
                    });
                    W.warn("[ACK TIMEOUT] reconnecting in ".concat((t / 1e3).toFixed(2), " seconds."))
                }
            }, {
                key: "_handleClose",
                value: function(e, t, n) {
                    var r = this;
                    if (e = e || !1, this._cleanup(), this.emit("close", {
                            code: t,
                            reason: n
                        }), 4004 === t) return this.connectionState = A.default.CLOSED, W.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
                    if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = A.default.WILL_RECONNECT, this.nextReconnectIsImmediate) W.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
                    else {
                        var o = this.gatewayBackoff.fail(function() {
                            return r._connect()
                        });
                        W.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((o / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
                    }
                }
            }, {
                key: "_tryDetectInvalidIOSToken",
                value: function(e, t, n) {
                    var r = this;
                    (0, v.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && c.HTTP.get({
                        url: U.Endpoints.ME,
                        headers: {
                            authorization: this.token
                        }
                    }).then(function(e) {
                        var t = e.status;
                        O.default.track(U.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }, function(e) {
                        var t = e.status;
                        401 === t && (r.connectionState = A.default.CLOSED, W.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), r._reset(n, 4004, "invalid token manually detected")), O.default.track(U.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                            api_status_code: t
                        })
                    }))
                }
            }, {
                key: "_reset",
                value: function(e, t, n) {
                    this.sessionId = null, this.seq = 0, W.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
                        wasClean: e,
                        code: t,
                        reason: n
                    })
                }
            }, {
                key: "_startHeartbeater",
                value: function() {
                    var e = this,
                        t = this.heartbeatInterval;
                    o()(null != t, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
                    var n = function() {
                        e.heartbeatAck ? (e.heartbeatAck = !1, e._sendHeartbeat()) : null === e.expeditedHeartbeatTimeout && e._handleHeartbeatTimeout()
                    };
                    this.initialHeartbeatTimeout = setTimeout(function() {
                        e.initialHeartbeatTimeout = null, e.heartbeatAck = !0, e.heartbeater = setInterval(n, t), n()
                    }, Math.floor(Math.random() * t))
                }
            }, {
                key: "_stopHeartbeater",
                value: function() {
                    null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
                }
            }, {
                key: "_clearHelloTimeout",
                value: function() {
                    null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
                }
            }, {
                key: "_cleanup",
                value: function(e) {
                    l.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
                    var t = this.webSocket;
                    this.webSocket = null, null != t && (t.onopen = z, t.onmessage = z, t.onerror = z, t.onclose = z, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new N.default(K)
                }
            }, {
                key: "_doResume",
                value: function() {
                    var e;
                    this.connectionState = A.default.RESUMING, this.dispatcher.resumeAnalytics = (0, C.createResumeAnalytics)(Date.now() - this.connectionStartTime), W.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(D.Opcode.RESUME, {
                        token: this.token,
                        session_id: this.sessionId,
                        seq: this.seq
                    }, !1)
                }
            }, {
                key: "_doIdentify",
                value: function() {
                    var e, t = this;
                    return (e = function() {
                        var e, n, r, o, a, u, s, l, c, f, m, y;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(I) {
                            switch (I.label) {
                                case 0:
                                    if (t.seq = 0, t.sessionId = null, null === (e = t.handleIdentify())) return t._handleClose(!0, 4004, "No connection info provided"), [2];
                                    return t.connectionState = A.default.IDENTIFYING, n = Date.now(), t.identifyStartTime = n, [4, Promise.all([(0, p.isCacheEnabled)() ? d.default.getCommittedVersions() : {}, (0, p.isCacheEnabled)() ? E.default.getCommittedVersions() : {}, !!(0, p.isCacheEnabled)() && _.default.canUseGuildVersions()])];
                                case 1:
                                    if (o = (r = Y.apply(void 0, [I.sent(), 3]))[0], a = r[1], u = r[2] ? {
                                            guild_versions: o,
                                            highest_last_message_id: a.highest_last_message_id,
                                            read_state_version: a.read_state_version,
                                            user_guild_settings_version: a.user_guild_settings_version,
                                            user_settings_version: a.user_settings_version,
                                            private_channels_version: a.private_channels_version,
                                            api_code_version: a.api_code_version,
                                            initial_guild_id: a.initial_guild_id
                                        } : {
                                            guild_versions: {}
                                        }, t.connectionState !== A.default.IDENTIFYING || t.identifyStartTime !== n) return W.warn("Skipping identify because connectionState or identifyStartTime has changed"), [2];
                                    return s = e.token, c = void 0 === (l = e.properties) ? {} : l, f = e.presence, t.token = s, W.verbose("[IDENTIFY]"), y = JSON.stringify(m = {
                                        token: s,
                                        capabilities: b.default,
                                        properties: c,
                                        presence: f,
                                        compress: t.compressionHandler.usesLegacyCompression(),
                                        client_state: u
                                    }), t.identifyUncompressedByteSize = y.length, t.identifyCompressedByteSize = i.deflate(y).length, t.identifyCount += 1, t.send(D.Opcode.IDENTIFY, m, !1), [2]
                            }
                        })
                    }, function() {
                        var t = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = e.apply(t, n);

                            function a(e) {
                                G(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                G(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    })()
                }
            }, {
                key: "_doFastConnectIdentify",
                value: function() {
                    this.seq = 0, this.sessionId = null;
                    var e = this.handleIdentify();
                    if (null === e) {
                        this._handleClose(!0, 4004, "No connection info provided");
                        return
                    }
                    var t = e.token;
                    this.token = t, this.connectionState = A.default.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, W.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
                }
            }, {
                key: "_doResumeOrIdentify",
                value: function() {
                    var e = Date.now();
                    null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= q) ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
                }
            }, {
                key: "_updateLastHeartbeatAckTime",
                value: function() {
                    this.lastHeartbeatAckTime = Date.now()
                }
            }, {
                key: "_sendHeartbeat",
                value: function() {
                    this.send(D.Opcode.HEARTBEAT, this.seq, !1)
                }
            }, {
                key: "getLogger",
                value: function() {
                    return W
                }
            }, {
                key: "willReconnect",
                value: function() {
                    return this.connectionState === A.default.WILL_RECONNECT
                }
            }, {
                key: "isClosed",
                value: function() {
                    return this.connectionState === A.default.CLOSED
                }
            }, {
                key: "isSessionEstablished",
                value: function() {
                    return this.connectionState === A.default.SESSION_ESTABLISHED || this.connectionState === A.default.RESUMING
                }
            }, {
                key: "isConnected",
                value: function() {
                    return this.connectionState === A.default.IDENTIFYING || this.connectionState === A.default.RESUMING || this.connectionState === A.default.SESSION_ESTABLISHED
                }
            }, {
                key: "connect",
                value: function() {
                    return this.isClosed() ? (W.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = A.default.WILL_RECONNECT, this._connect(), !0) : (W.error("Cannot start a new connection, connection state is not closed"), !1)
                }
            }, {
                key: "resetSocketOnError",
                value: function(e) {
                    var t = this,
                        n = e.action,
                        r = e.error;
                    W.error("resetSocketOnError during ".concat(n, ": ").concat(r.message), r.stack), y.default.increment({
                        name: s.MetricEvents.SOCKET_CRASHED,
                        tags: ["action:".concat(n)]
                    }, !0), !1 !== e.sentry && g.default.captureException(r, {
                        tags: {
                            socketCrashedAction: n
                        }
                    }), O.default.track(U.AnalyticEvents.GATEWAY_SOCKET_RESET, {
                        error_message: r.message,
                        error_stack: r.stack,
                        action: n
                    }), this._cleanup(function(e) {
                        return e.close()
                    }), this._reset(!0, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = A.default.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
                    var o = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
                    0 === this.dispatchExceptionBackoff._fails ? (W.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(function() {}), setTimeout(function() {
                        return t._connect()
                    }, 0)) : this.dispatchExceptionBackoff.fail(function() {
                        return t._connect()
                    }), o && (this.didForceClearGuildHashes = !0, f.default.dispatch({
                        type: "CLEAR_CACHES",
                        reason: "Socket reset during ".concat(n)
                    })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(function() {
                        return t.dispatchExceptionBackoff.succeed()
                    }, 2 * Q)
                }
            }, {
                key: "resetSocketOnDispatchError",
                value: function(e) {
                    var t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
                    this.resetSocketOnError(H(V({}, e), {
                        sentry: !t,
                        clearCache: t
                    }))
                }
            }, {
                key: "close",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.isClosed()) {
                        W.verbose("close() called, but socket is already closed.");
                        return
                    }
                    W.info("Closing connection, current state is ".concat(this.connectionState));
                    var n = t ? 4e3 : void 0;
                    this._cleanup(function(e) {
                        return e.close(n)
                    }), this.connectionState = A.default.CLOSED, !t && setImmediate(function() {
                        e._reset(!0, 1e3, "Disconnect requested by user")
                    })
                }
            }, {
                key: "networkStateChange",
                value: function(e, t) {
                    var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    this.expeditedHeartbeat(e, t, n, !1)
                }
            }, {
                key: "expeditedHeartbeat",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        o = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    if (!this.isClosed()) {
                        if (this.isConnected()) {
                            W.verbose("Performing an expedited heartbeat ".concat(null != n && "" !== n ? "reason: " + n : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(function() {
                                t.expeditedHeartbeatTimeout = null, !1 === t.heartbeatAck && t._handleHeartbeatTimeout()
                            }, e);
                            return
                        }
                        r ? this.resetBackoff(n, o) : W.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != n && "" !== n ? "reason: " + n : ""))
                    }
                }
            }, {
                key: "resetBackoff",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    W.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== A.default.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
                }
            }], B(r.prototype, m), S && B(r, S), w
        }(D.default)
}