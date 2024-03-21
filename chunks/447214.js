function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    }), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007"), n("860677");
    var i, s = n("627445"),
        r = n.n(s),
        a = n("181905"),
        o = n("981980"),
        l = n("102053"),
        u = n("432710"),
        d = n("446674"),
        c = n("872717"),
        _ = n("913144"),
        f = n("105059"),
        E = n("849365"),
        h = n("11275"),
        g = n("400683"),
        m = n("605250"),
        p = n("155084"),
        S = n("410912"),
        T = n("313915"),
        v = n("599110"),
        I = n("922932"),
        A = n("718517"),
        C = n("773336"),
        y = n("286235"),
        N = n("41642"),
        R = n("265912"),
        O = n("799600"),
        D = n("705215"),
        P = n("342797"),
        L = n("123265"),
        M = n("340115"),
        b = n("571420"),
        U = n("797785"),
        w = n("49111");
    let k = new m.default("GatewaySocket"),
        V = new D.default;

    function G() {}
    let F = 30 * A.default.Millis.SECOND,
        x = 3 * A.default.Millis.MINUTE,
        B = 1 * A.default.Millis.MINUTE;

    function H(e) {
        return null == e ? 0 : "string" == typeof e ? e.length : e.byteLength
    }
    let Y = window.GLOBAL_ENV.GATEWAY_ENDPOINT;
    i = class extends M.default {
        get connectionState() {
            return this.connectionState_
        }
        set connectionState(e) {
            k.verbose("Setting connection state to ".concat(e)), this.connectionState_ = e
        }
        addAnalytics(e) {
            this.analytics = {
                ...this.analytics,
                ...e
            }
        }
        setResumeUrl(e) {
            null != e && e.endsWith("/") && (e = e.substring(0, e.length - 1)), null !== e && k.verbose("Updating resume url to ".concat(e)), this.resumeUrl = e
        }
        _connect() {
            var e, t;
            let n;
            if (!this.willReconnect()) {
                k.verbose("Skipping _connect because willReconnect is false");
                return
            }
            if (b.getIsPaused()) {
                k.info("Skipping _connect because socket is paused");
                return
            }
            this.connectionState = N.default.CONNECTING, this.nextReconnectIsImmediate = !1;
            let i = this.compressionHandler.getAlgorithm(),
                s = V.getName(),
                r = this._getGatewayUrl(),
                a = window.GLOBAL_ENV.API_VERSION;
            l.default.mark("\uD83C\uDF10", "Socket._connect"), k.info("[CONNECT] ".concat(r, ", ") + "encoding: ".concat(s, ", ") + "version: ".concat(a, ", ") + "compression: ".concat(null != i ? i : "none")), null !== this.webSocket && (k.error("_connect called with already existing websocket"), this._cleanup(e => e.close(4e3))), this.connectionStartTime = Date.now(), this.helloTimeout = setTimeout(() => {
                let e = Date.now() - this.connectionStartTime;
                this._handleClose(!1, 0, "The connection timed out after ".concat(e, " ms - did not receive OP_HELLO in time.")), this.setResumeUrl(null)
            }, F);
            let o = new URL(r);
            o.searchParams.append("encoding", s), o.searchParams.append("v", a.toString()), null != i && o.searchParams.append("compress", i);
            ! function(e) {
                let t, {
                        gatewayURL: n,
                        newCallback: i,
                        onOpen: s,
                        onMessage: r,
                        onError: a,
                        onClose: o
                    } = e,
                    l = window._ws,
                    u = !1,
                    d = !1,
                    c = null,
                    _ = null;
                if (window._ws = null, null != l) {
                    if (t = l.ws, l.state.gateway !== n) k.verbose("[FAST CONNECT] gatewayURL mismatch: ".concat(l.state.gateway, " !== ").concat(n)), t.close(1e3), t = null;
                    else {
                        var f;
                        let e = {
                            ...l.state
                        };
                        null != e.messages && (e.messages = e.messages.map(e => null != e.data && "string" == typeof e.data ? {
                            ...e,
                            data: e.data.substring(0, 100)
                        } : e)), k.log("[FAST CONNECT] successfully took over websocket, state:", {
                            ...e,
                            messages: null === (f = e.messages) || void 0 === f ? void 0 : f.length
                        }), u = l.state.open, d = l.state.identify, c = l.state.messages, _ = l.state.clientState
                    }
                }
                null == t && ((t = (0, U.default)(n)).binaryType = "arraybuffer"), i(t), u && s(d, _), null != c && c.forEach(r), t.onopen = () => s(d, _), t.onmessage = r, t.onclose = o, t.onerror = a
            }({
                gatewayURL: o.toString(),
                newCallback: e => {
                    this.webSocket = e, this.compressionHandler.bindWebSocket(e)
                },
                onOpen: e => {
                    l.default.mark("\uD83C\uDF10", "GatewaySocket.onOpen ".concat(e));
                    let t = Date.now() - this.connectionStartTime;
                    k.info("[CONNECTED] ".concat(o.toString(), " in ").concat(t, " ms")), this.isFastConnect = e, e ? this._doFastConnectIdentify() : this._doResumeOrIdentify()
                },
                onMessage: (e = this.compressionHandler, t = (e, t) => {
                    let n = Date.now(),
                        {
                            op: i,
                            s: s,
                            t: r,
                            d: a
                        } = V.unpack(e);
                    i !== M.Opcode.DISPATCH && l.default.mark("\uD83C\uDF10", "GatewaySocket.onMessage ".concat(i, " ").concat(M.Opcode[i]));
                    let o = Date.now() - n;
                    switch ("READY" === r ? S.default.parseReady.set(n, o) : "READY_SUPPLEMENTAL" === r ? S.default.parseReadySupplemental.set(n, o) : o > 10 && l.default.mark("\uD83C\uDF10", "Parse " + r, o), null != s && (this.seq = s), i) {
                        case M.Opcode.HELLO:
                            this._clearHelloTimeout(), this._handleHello(a);
                            break;
                        case M.Opcode.RECONNECT:
                            this._handleReconnect();
                            break;
                        case M.Opcode.INVALID_SESSION:
                            this._handleInvalidSession(a);
                            break;
                        case M.Opcode.HEARTBEAT:
                            this._sendHeartbeat();
                            break;
                        case M.Opcode.HEARTBEAT_ACK:
                            this._handleHeartbeatAck(a);
                            break;
                        case M.Opcode.DISPATCH:
                            this._handleDispatch(a, r, "READY" === r ? {
                                compressed_byte_size: t,
                                uncompressed_byte_size: H(e),
                                compression_algorithm: this.compressionHandler.getAlgorithm(),
                                packing_algorithm: V.getName(),
                                unpack_duration_ms: o
                            } : null);
                            break;
                        default:
                            k.info("Unhandled op ".concat(i))
                    }
                }, n = 0, e.dataReady(e => {
                    try {
                        return t(e, n)
                    } finally {
                        n = 0
                    }
                }), t => {
                    let i = t.data;
                    null != t.raw_length ? n += t.raw_length : n += H(i), e.feed(i)
                }),
                onError: () => {
                    this.setResumeUrl(null), I.default.flushDNSCache(), this._handleClose(!1, 0, "An error with the websocket occurred")
                },
                onClose: e => {
                    let {
                        wasClean: t,
                        code: n,
                        reason: i
                    } = e;
                    return this._handleClose(t, n, i)
                }
            })
        }
        _handleHello(e) {
            let t = this.heartbeatInterval = e.heartbeat_interval,
                n = Date.now() - this.connectionStartTime;
            k.verbose("[HELLO] via ".concat((0, P.getConnectionPath)(e), ", ") + "heartbeat interval: ".concat(t, ", ") + "took ".concat(n, " ms")), this._startHeartbeater()
        }
        _handleReconnect() {
            k.verbose("[RECONNECT] gateway requested I reconnect."), this._cleanup(e => e.close(4e3)), this.connectionState = N.default.WILL_RECONNECT, this._connect()
        }
        _handleInvalidSession(e) {
            k.info("[INVALID_SESSION]".concat(e ? " can resume)" : "")), e ? this._doResumeOrIdentify() : this._doIdentify()
        }
        _handleDispatch(e, t, n) {
            let i = Date.now() - this.connectionStartTime;
            if ("READY" === t) {
                let t = e.session_id;
                this.sessionId = t;
                let n = (0, P.getConnectionPath)(e);
                l.default.setServerTrace(n), k.info("[READY] took ".concat(i, "ms, as ").concat(t)), k.verbose("".concat(n)), this.connectionState = N.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.setResumeUrl(e.resume_gateway_url)
            } else "READY_SUPPLEMENTAL" === t ? (k.info("[READY_SUPPLEMENTAL] took ".concat(i, "ms")), this.connectionState = N.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0) : "RESUMED" === t && (k.verbose((0, P.getConnectionPath)(e)), this.connectionState = N.default.SESSION_ESTABLISHED, this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0);
            this.dispatcher.receiveDispatch(e, t, n)
        }
        handleResumeDispatched() {
            let e = Date.now() - this.connectionStartTime;
            k.info("[RESUMED] took ".concat(e, "ms, replayed ").concat(this.dispatcher.resumeAnalytics.numEvents, " events, new seq: ").concat(this.seq))
        }
        handleReadyDispatched() {
            this.didForceClearGuildHashes = !1, this.hasConnectedOnce = !0
        }
        _getGatewayUrl() {
            return null != this.resumeUrl ? this.resumeUrl : Y
        }
        _handleHeartbeatAck(e) {
            this.lastHeartbeatAckTime = Date.now(), this.heartbeatAck = !0, null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null, k.verbose("Expedited heartbeat succeeded"))
        }
        _handleHeartbeatTimeout() {
            this._cleanup(e => e.close(4e3)), this.connectionState = N.default.WILL_RECONNECT;
            let e = this.gatewayBackoff.fail(() => this._connect());
            k.warn("[ACK TIMEOUT] reconnecting in ".concat((e / 1e3).toFixed(2), " seconds."))
        }
        _handleClose(e, t, n) {
            if (e = e || !1, this._cleanup(), this.emit("close", {
                    code: t,
                    reason: n
                }), 4004 === t) return this.connectionState = N.default.CLOSED, k.warn("[WS CLOSED] because of authentication failure, marking as closed."), this._reset(e, t, n);
            if (this._tryDetectInvalidIOSToken(t, n, e), this.connectionState = N.default.WILL_RECONNECT, this.nextReconnectIsImmediate) k.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying immediately.")), this._connect();
            else {
                let i = this.gatewayBackoff.fail(() => this._connect());
                k.info("[WS CLOSED] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ") retrying in ").concat((i / 1e3).toFixed(2), " seconds.")), this.gatewayBackoff.fails > 4 && this._reset(e, t, n)
            }
        }
        _tryDetectInvalidIOSToken(e, t, n) {
            (0, C.isIOS)() && null != this.token && 1001 === e && "Stream end encountered" === t && (this.iosGoingAwayEventCount += 1, 3 === this.iosGoingAwayEventCount && c.HTTP.get({
                url: w.Endpoints.ME,
                headers: {
                    authorization: this.token
                }
            }).then(e => {
                let {
                    status: t
                } = e;
                v.default.track(w.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                    api_status_code: t
                })
            }, e => {
                let {
                    status: t
                } = e;
                401 === t && (this.connectionState = N.default.CLOSED, k.warn("[WS CLOSED] because of manual authentication failure, marking as closed."), this._reset(n, 4004, "invalid token manually detected")), v.default.track(w.AnalyticEvents.IOS_INVALID_TOKEN_WORKAROUND_TRIGGERED, {
                    api_status_code: t
                })
            }))
        }
        _reset(e, t, n) {
            this.sessionId = null, this.seq = 0, k.warn("[RESET] (".concat(e.toString(), ", ").concat(t, ", ").concat(n, ")")), this.emit("disconnect", {
                wasClean: e,
                code: t,
                reason: n
            })
        }
        _startHeartbeater() {
            let {
                heartbeatInterval: e
            } = this;
            r(null != e, "GatewaySocket: Heartbeat interval should never null here."), null !== this.initialHeartbeatTimeout && clearTimeout(this.initialHeartbeatTimeout), null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null);
            let t = () => {
                this.heartbeatAck ? (this.heartbeatAck = !1, this._sendHeartbeat()) : null === this.expeditedHeartbeatTimeout && this._handleHeartbeatTimeout()
            };
            this.initialHeartbeatTimeout = setTimeout(() => {
                this.initialHeartbeatTimeout = null, this.heartbeatAck = !0, this.heartbeater = setInterval(t, e), t()
            }, Math.floor(Math.random() * e))
        }
        _stopHeartbeater() {
            null !== this.heartbeater && (clearInterval(this.heartbeater), this.heartbeater = null), null !== this.initialHeartbeatTimeout && (clearTimeout(this.initialHeartbeatTimeout), this.initialHeartbeatTimeout = null), null !== this.expeditedHeartbeatTimeout && (clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = null)
        }
        _clearHelloTimeout() {
            null != this.helloTimeout && (clearTimeout(this.helloTimeout), this.helloTimeout = null)
        }
        _cleanup(e) {
            d.default.Emitter.resume(), this._stopHeartbeater(), this._clearHelloTimeout();
            let t = this.webSocket;
            this.webSocket = null, null != t && (t.onopen = G, t.onmessage = G, t.onerror = G, t.onclose = G, null == e || e(t)), this.gatewayBackoff.cancel(), this.compressionHandler.close(), this.compressionHandler = new O.default(V)
        }
        _doResume() {
            var e;
            this.connectionState = N.default.RESUMING, this.dispatcher.resumeAnalytics = (0, P.createResumeAnalytics)(Date.now() - this.connectionStartTime), k.info("[RESUME] resuming session ".concat(null !== (e = this.sessionId) && void 0 !== e ? e : "", ", seq: ").concat(this.seq)), this.send(M.Opcode.RESUME, {
                token: this.token,
                session_id: this.sessionId,
                seq: this.seq
            }, !1)
        }
        async _doIdentify() {
            this.seq = 0, this.sessionId = null;
            let e = this.handleIdentify();
            if (null === e) {
                this._handleClose(!0, 4004, "No connection info provided");
                return
            }
            this.connectionState = N.default.IDENTIFYING;
            let t = Date.now();
            this.identifyStartTime = t;
            let [n, i, s] = await Promise.all([(0, g.isCacheEnabled)() ? f.default.getCommittedVersions() : {}, (0, g.isCacheEnabled)() ? h.default.getCommittedVersions() : {}, !!(0, g.isCacheEnabled)() && E.default.canUseGuildVersions()]), r = s ? {
                guild_versions: n,
                highest_last_message_id: i.highest_last_message_id,
                read_state_version: i.read_state_version,
                user_guild_settings_version: i.user_guild_settings_version,
                user_settings_version: i.user_settings_version,
                private_channels_version: i.private_channels_version,
                api_code_version: i.api_code_version,
                initial_guild_id: i.initial_guild_id
            } : {
                guild_versions: {}
            };
            if (this.connectionState !== N.default.IDENTIFYING || this.identifyStartTime !== t) {
                k.warn("Skipping identify because connectionState or identifyStartTime has changed");
                return
            }
            let {
                token: o,
                properties: l = {},
                presence: u
            } = e;
            this.token = o, k.verbose("[IDENTIFY]");
            let d = {
                    token: o,
                    capabilities: R.default,
                    properties: l,
                    presence: u,
                    compress: this.compressionHandler.usesLegacyCompression(),
                    client_state: r
                },
                c = JSON.stringify(d);
            this.identifyUncompressedByteSize = c.length, this.identifyCompressedByteSize = a.deflate(c).length, this.identifyCount += 1, this.send(M.Opcode.IDENTIFY, d, !1)
        }
        _doFastConnectIdentify() {
            this.seq = 0, this.sessionId = null;
            let e = this.handleIdentify();
            if (null === e) {
                this._handleClose(!0, 4004, "No connection info provided");
                return
            }
            let {
                token: t
            } = e;
            this.token = t, this.connectionState = N.default.IDENTIFYING, this.identifyStartTime = Date.now(), this.identifyCount += 1, k.verbose("[IDENTIFY, fast-connect]"), this._updateLastHeartbeatAckTime()
        }
        _doResumeOrIdentify() {
            let e = Date.now(),
                t = null !== this.sessionId && (null == this.lastHeartbeatAckTime || e - this.lastHeartbeatAckTime <= x);
            t ? this._doResume() : this._doIdentify(), this._updateLastHeartbeatAckTime()
        }
        _updateLastHeartbeatAckTime() {
            this.lastHeartbeatAckTime = Date.now()
        }
        _sendHeartbeat() {
            this.send(M.Opcode.HEARTBEAT, this.seq, !1)
        }
        getLogger() {
            return k
        }
        willReconnect() {
            return this.connectionState === N.default.WILL_RECONNECT
        }
        isClosed() {
            return this.connectionState === N.default.CLOSED
        }
        isSessionEstablished() {
            return this.connectionState === N.default.SESSION_ESTABLISHED || this.connectionState === N.default.RESUMING
        }
        isConnected() {
            return this.connectionState === N.default.IDENTIFYING || this.connectionState === N.default.RESUMING || this.connectionState === N.default.SESSION_ESTABLISHED
        }
        connect() {
            return this.isClosed() ? (k.verbose(".connect() called, new state is WILL_RECONNECT"), this.connectionState = N.default.WILL_RECONNECT, this._connect(), !0) : (k.error("Cannot start a new connection, connection state is not closed"), !1)
        }
        resetSocketOnError(e) {
            let {
                action: t,
                error: n
            } = e;
            k.error("resetSocketOnError during ".concat(t, ": ").concat(n.message), n.stack), p.default.increment({
                name: u.MetricEvents.SOCKET_CRASHED,
                tags: ["action:".concat(t)]
            }, !0), !1 !== e.sentry && y.default.captureException(n, {
                tags: {
                    socketCrashedAction: t
                }
            }), v.default.track(w.AnalyticEvents.GATEWAY_SOCKET_RESET, {
                error_message: n.message,
                error_stack: n.stack,
                action: t
            }), this._cleanup(e => e.close()), this._reset(!0, 1e3, "Resetting socket due to error."), this.dispatcher.clear(), this.connectionState = N.default.WILL_RECONNECT, this.dispatchExceptionBackoff.cancel();
            let i = e.clearCache || this.dispatchExceptionBackoff._fails > 0;
            0 === this.dispatchExceptionBackoff._fails ? (k.verbose("Triggering fast reconnect"), this.dispatchExceptionBackoff.fail(() => {}), setTimeout(() => this._connect(), 0)) : this.dispatchExceptionBackoff.fail(() => this._connect()), i && (this.didForceClearGuildHashes = !0, _.default.dispatch({
                type: "CLEAR_CACHES",
                reason: "Socket reset during ".concat(t)
            })), clearTimeout(this.dispatchSuccessTimer), this.dispatchSuccessTimer = setTimeout(() => this.dispatchExceptionBackoff.succeed(), 2 * B)
        }
        resetSocketOnDispatchError(e) {
            let t = null != e.error.message && e.error.message.indexOf("Guild data was missing from store") >= 0;
            this.resetSocketOnError({
                ...e,
                sentry: !t,
                clearCache: t
            })
        }
        close() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.isClosed()) {
                k.verbose("close() called, but socket is already closed.");
                return
            }
            k.info("Closing connection, current state is ".concat(this.connectionState));
            let t = e ? 4e3 : void 0;
            this._cleanup(e => e.close(t)), this.connectionState = N.default.CLOSED, !e && setImmediate(() => {
                this._reset(!0, 1e3, "Disconnect requested by user")
            })
        }
        networkStateChange(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            this.expeditedHeartbeat(e, t, n, !1)
        }
        expeditedHeartbeat(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            if (!this.isClosed()) {
                if (this.isConnected()) {
                    k.verbose("Performing an expedited heartbeat ".concat(null != t && "" !== t ? "reason: " + t : "")), this.heartbeatAck = !1, this._sendHeartbeat(), null !== this.expeditedHeartbeatTimeout && clearTimeout(this.expeditedHeartbeatTimeout), this.expeditedHeartbeatTimeout = setTimeout(() => {
                        this.expeditedHeartbeatTimeout = null, !1 === this.heartbeatAck && this._handleHeartbeatTimeout()
                    }, e);
                    return
                }
                n ? this.resetBackoff(t, i) : k.verbose("Expedited heartbeat requested, but, connection state is ".concat(this.connectionState, " and reconnectImmediately was not requested ").concat(null != t && "" !== t ? "reason: " + t : ""))
            }
        }
        resetBackoff() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            k.verbose("Connection has reset backoff".concat(null != e && "" !== e ? " for reason: " + e : "")), this.gatewayBackoff.succeed(), this.iosGoingAwayEventCount = 0, this.nextReconnectIsImmediate = !0, this.willReconnect() ? this._connect() : t && this.connectionState !== N.default.SESSION_ESTABLISHED && this._handleClose(!0, 0, e)
        }
        constructor() {
            super(), this.dispatchExceptionBackoff = new o.default(1e3, B), this.dispatchSuccessTimer = 0, this.didForceClearGuildHashes = !1, this.identifyUncompressedByteSize = 0, this.identifyCompressedByteSize = 0, this.analytics = {}, this.identifyCount = 0, this.resumeUrl = null, this.iosGoingAwayEventCount = 0, this.send = (e, t, n) => {
                T.default.isLoggingGatewayEvents && k.verboseDangerously("~>", e, t);
                let i = V.pack({
                    op: e,
                    d: t
                });
                if (!n || this.isSessionEstablished()) try {
                    null != this.webSocket ? this.webSocket.send(i) : k.warn("Attempted to send without a websocket that exists. Opcode: ".concat(e))
                } catch (e) {} else k.warn("Attempted to send while not being in a connected state opcode: ".concat(e))
            }, this.dispatcher = new L.default(this), this.gatewayBackoff = new o.default(1e3, 6e4), this.connectionState_ = N.default.CLOSED, this.webSocket = null, this.seq = 0, this.sessionId = null, this.token = null, this.initialHeartbeatTimeout = null, this.expeditedHeartbeatTimeout = null, this.lastHeartbeatAckTime = null, this.helloTimeout = null, this.heartbeatInterval = null, this.heartbeater = null, this.heartbeatAck = !0, this.connectionStartTime = 0, this.identifyStartTime = 0, this.nextReconnectIsImmediate = !1, this.compressionHandler = new O.default(V), this.hasConnectedOnce = !1, this.isFastConnect = !1, this.identifyCount = 0, this.iosGoingAwayEventCount = 0
        }
    }
}