function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BaseClient: function() {
            return d
        }
    }), n("222007"), n("424973");
    var r = n("103787"),
        i = n("356739"),
        a = n("20623"),
        s = n("577286"),
        o = n("353055"),
        c = n("89620"),
        l = n("964341");
    let u = "Not capturing exception because it's already been captured.";
    class d {
        __init() {
            this._integrations = {}
        }
        __init2() {
            this._integrationsInitialized = !1
        }
        __init3() {
            this._numProcessing = 0
        }
        __init4() {
            this._outcomes = {}
        }
        __init5() {
            this._hooks = {}
        }
        captureException(t, e, n) {
            if ((0, r.checkOrSetAlreadyCaught)(t)) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(u);
                return
            }
            let i = e && e.event_id;
            return this._process(this.eventFromException(t, e).then(t => this._captureEvent(t, e, n)).then(t => {
                i = t
            })), i
        }
        captureMessage(t, e, n, i) {
            let a = n && n.event_id,
                s = (0, r.isPrimitive)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
            return this._process(s.then(t => this._captureEvent(t, n, i)).then(t => {
                a = t
            })), a
        }
        captureEvent(t, e, n) {
            if (e && e.originalException && (0, r.checkOrSetAlreadyCaught)(e.originalException)) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(u);
                return
            }
            let i = e && e.event_id;
            return this._process(this._captureEvent(t, e, n).then(t => {
                i = t
            })), i
        }
        captureSession(t) {
            if (!this._isEnabled()) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("SDK not enabled, will not capture session.");
                return
            }
            "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, o.updateSession)(t, {
                init: !1
            }))
        }
        getDsn() {
            return this._dsn
        }
        getOptions() {
            return this._options
        }
        getSdkMetadata() {
            return this._options._metadata
        }
        getTransport() {
            return this._transport
        }
        flush(t) {
            let e = this._transport;
            return e ? this._isClientDoneProcessing(t).then(n => e.flush(t).then(t => n && t)) : (0, r.resolvedSyncPromise)(!0)
        }
        close(t) {
            return this.flush(t).then(t => (this.getOptions().enabled = !1, t))
        }
        setupIntegrations() {
            this._isEnabled() && !this._integrationsInitialized && (this._integrations = (0, s.setupIntegrations)(this._options.integrations), this._integrationsInitialized = !0)
        }
        getIntegrationById(t) {
            return this._integrations[t]
        }
        getIntegration(t) {
            try {
                return this._integrations[t.id] || null
            } catch (e) {
                return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Cannot retrieve integration ".concat(t.id, " from the current Client")), null
            }
        }
        addIntegration(t) {
            (0, s.setupIntegration)(t, this._integrations)
        }
        sendEvent(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (this._dsn) {
                let n = (0, a.createEventEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel);
                for (let t of e.attachments || []) n = (0, r.addItemToEnvelope)(n, (0, r.createAttachmentEnvelopeItem)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                let i = this._sendEnvelope(n);
                i && i.then(e => this.emit("afterSendEvent", t, e), null)
            }
        }
        sendSession(t) {
            if (this._dsn) {
                let e = (0, a.createSessionEnvelope)(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(e)
            }
        }
        recordDroppedEvent(t, e, n) {
            if (this._options.sendClientReports) {
                let n = "".concat(t, ":").concat(e);
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log('Adding outcome: "'.concat(n, '"')), this._outcomes[n] = this._outcomes[n] + 1 || 1
            }
        }
        on(t, e) {
            !this._hooks[t] && (this._hooks[t] = []), this._hooks[t].push(e)
        }
        emit(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            this._hooks[t] && this._hooks[t].forEach(t => t(...n))
        }
        _updateSessionFromEvent(t, e) {
            let n = !1,
                r = !1,
                i = e.exception && e.exception.values;
            if (i)
                for (let t of (r = !0, i)) {
                    let e = t.mechanism;
                    if (e && !1 === e.handled) {
                        n = !0;
                        break
                    }
                }
            let a = "ok" === t.status,
                s = a && 0 === t.errors || a && n;
            s && ((0, o.updateSession)(t, {
                ...n && {
                    status: "crashed"
                },
                errors: t.errors || Number(r || n)
            }), this.captureSession(t))
        }
        _isClientDoneProcessing(t) {
            return new r.SyncPromise(e => {
                let n = 0,
                    r = setInterval(() => {
                        0 == this._numProcessing ? (clearInterval(r), e(!0)) : (n += 1, t && n >= t && (clearInterval(r), e(!1)))
                    }, 1)
            })
        }
        _isEnabled() {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn
        }
        _prepareEvent(t, e, n) {
            let r = this.getOptions(),
                i = Object.keys(this._integrations);
            return !e.integrations && i.length > 0 && (e.integrations = i), (0, l.prepareEvent)(r, t, e, n).then(t => {
                if (null === t) return t;
                let {
                    propagationContext: e
                } = t.sdkProcessingMetadata || {}, r = t.contexts && t.contexts.trace;
                if (!r && e) {
                    let {
                        traceId: r,
                        spanId: i,
                        parentSpanId: a,
                        dsc: s
                    } = e;
                    t.contexts = {
                        trace: {
                            trace_id: r,
                            span_id: i,
                            parent_span_id: a
                        },
                        ...t.contexts
                    };
                    let o = s || (0, c.getDynamicSamplingContextFromClient)(r, this, n);
                    t.sdkProcessingMetadata = {
                        dynamicSamplingContext: o,
                        ...t.sdkProcessingMetadata
                    }
                }
                return t
            })
        }
        _captureEvent(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0;
            return this._processEvent(t, e, n).then(t => t.event_id, t => {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && ("log" === t.logLevel ? r.logger.log(t.message) : r.logger.warn(t))
            })
        }
        _processEvent(t, e, n) {
            let i = this.getOptions(),
                {
                    sampleRate: a
                } = i;
            if (!this._isEnabled()) return (0, r.rejectedSyncPromise)(new r.SentryError("SDK not enabled, will not capture event.", "log"));
            let s = f(t),
                o = h(t),
                c = t.type || "error",
                l = "before send for type `".concat(c, "`");
            if (o && "number" == typeof a && Math.random() > a) return this.recordDroppedEvent("sample_rate", "error", t), (0, r.rejectedSyncPromise)(new r.SentryError("Discarding event because it's not included in the random sample (sampling rate = ".concat(a, ")"), "log"));
            let u = "replay_event" === c ? "replay" : c;
            return this._prepareEvent(t, e, n).then(n => {
                if (null === n) throw this.recordDroppedEvent("event_processor", u, t), new r.SentryError("An event processor returned `null`, will not send event.", "log");
                let a = e.data && !0 === e.data.__sentry__;
                if (a) return n;
                let s = function(t, e, n) {
                    let {
                        beforeSend: r,
                        beforeSendTransaction: i
                    } = t;
                    return h(e) && r ? r(e, n) : f(e) && i ? i(e, n) : e
                }(i, n, e);
                return function(t, e) {
                    let n = "".concat(e, " must return `null` or a valid event.");
                    if ((0, r.isThenable)(t)) return t.then(t => {
                        if (!(0, r.isPlainObject)(t) && null !== t) throw new r.SentryError(n);
                        return t
                    }, t => {
                        throw new r.SentryError("".concat(e, " rejected with ").concat(t))
                    });
                    if (!(0, r.isPlainObject)(t) && null !== t) throw new r.SentryError(n);
                    return t
                }(s, l)
            }).then(i => {
                if (null === i) throw this.recordDroppedEvent("before_send", u, t), new r.SentryError("".concat(l, " returned `null`, will not send event."), "log");
                let a = n && n.getSession();
                !s && a && this._updateSessionFromEvent(a, i);
                let o = i.transaction_info;
                return s && o && i.transaction !== t.transaction && (i.transaction_info = {
                    ...o,
                    source: "custom"
                }), this.sendEvent(i, e), i
            }).then(null, t => {
                if (t instanceof r.SentryError) throw t;
                throw this.captureException(t, {
                    data: {
                        __sentry__: !0
                    },
                    originalException: t
                }), new r.SentryError("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ".concat(t))
            })
        }
        _process(t) {
            this._numProcessing++, t.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t))
        }
        _sendEnvelope(t) {
            if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, t => {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Error while sending event:", t)
            });
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Transport disabled")
        }
        _clearOutcomes() {
            let t = this._outcomes;
            return this._outcomes = {}, Object.keys(t).map(e => {
                let [n, r] = e.split(":");
                return {
                    reason: n,
                    category: r,
                    quantity: t[e]
                }
            })
        }
        constructor(t) {
            if (d.prototype.__init.call(this), d.prototype.__init2.call(this), d.prototype.__init3.call(this), d.prototype.__init4.call(this), d.prototype.__init5.call(this), this._options = t, t.dsn ? this._dsn = (0, r.makeDsn)(t.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("No DSN provided, client will not do anything."), this._dsn) {
                let e = (0, i.getEnvelopeEndpointWithUrlEncodedAuth)(this._dsn, t);
                this._transport = t.transport({
                    recordDroppedEvent: this.recordDroppedEvent.bind(this),
                    ...t.transportOptions,
                    url: e
                })
            }
        }
    }

    function h(t) {
        return void 0 === t.type
    }

    function f(t) {
        return "transaction" === t.type
    }
}