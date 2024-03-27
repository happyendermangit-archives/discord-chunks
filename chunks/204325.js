function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        BrowserTracing: function() {
            return d
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("321611"),
        o = n("799821"),
        s = n("722994"),
        u = n("263951"),
        c = n("607190");
    let l = {
        ...r.TRACING_DEFAULTS,
        markBackgroundTransactions: !0,
        routingInstrumentation: u.instrumentRoutingWithDefaults,
        startTransactionOnLocationChange: !0,
        startTransactionOnPageLoad: !0,
        enableLongTask: !0,
        _experiments: {},
        ...s.defaultRequestInstrumentationOptions
    };
    class d {
        __init() {
            this.name = "BrowserTracing"
        }
        __init2() {
            this._hasSetTracePropagationTargets = !1
        }
        constructor(t) {
            d.prototype.__init.call(this), d.prototype.__init2.call(this), (0, r.addTracingExtensions)(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))), this.options = {
                ...l,
                ...t
            }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, o.startTrackingWebVitals)(), this.options.enableLongTask && (0, o.startTrackingLongTasks)(), this.options._experiments.enableInteractions && (0, o.startTrackingInteractions)()
        }
        setupOnce(t, e) {
            this._getCurrentHub = e;
            let n = e().getClient(),
                r = n && n.getOptions(),
                {
                    routingInstrumentation: o,
                    startTransactionOnLocationChange: u,
                    startTransactionOnPageLoad: c,
                    markBackgroundTransactions: l,
                    traceFetch: d,
                    traceXHR: f,
                    shouldCreateSpanForRequest: p,
                    enableHTTPTimings: h,
                    _experiments: _
                } = this.options,
                g = r && r.tracePropagationTargets,
                m = g || this.options.tracePropagationTargets;
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && g && i.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), o(t => {
                let n = this._createRouteTransaction(t);
                return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
            }, c, u), l && (0, a.registerBackgroundTabDetection)(), _.enableInteractions && this._registerInteractionListener(), (0, s.instrumentOutgoingRequests)({
                traceFetch: d,
                traceXHR: f,
                tracePropagationTargets: m,
                shouldCreateSpanForRequest: p,
                enableHTTPTimings: h
            })
        }
        _createRouteTransaction(t) {
            if (!this._getCurrentHub) {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);
                return
            }
            let e = this._getCurrentHub(),
                {
                    beforeNavigate: n,
                    idleTimeout: a,
                    finalTimeout: s,
                    heartbeatInterval: u
                } = this.options,
                l = "pageload" === t.op,
                d = l ? f("sentry-trace") : "",
                p = l ? f("baggage") : "",
                {
                    traceparentData: h,
                    dynamicSamplingContext: _,
                    propagationContext: g
                } = (0, i.tracingContextFromHeaders)(d, p),
                m = {
                    ...t,
                    ...h,
                    metadata: {
                        ...t.metadata,
                        dynamicSamplingContext: h && !_ ? {} : _
                    },
                    trimEnd: !0
                },
                y = "function" == typeof n ? n(m) : m,
                v = void 0 === y ? {
                    ...m,
                    sampled: !1
                } : y;
            v.metadata = v.name !== m.name ? {
                ...v.metadata,
                source: "custom"
            } : v.metadata, this._latestRouteName = v.name, this._latestRouteSource = v.metadata && v.metadata.source, !1 === v.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Tracing] Will not send ${v.op} transaction because of beforeNavigate.`), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Tracing] Starting ${v.op} transaction on scope`);
            let {
                location: b
            } = c.WINDOW, E = (0, r.startIdleTransaction)(e, v, a, s, !0, {
                location: b
            }, u), S = e.getScope();
            return l && h ? S.setPropagationContext(g) : S.setPropagationContext({
                traceId: E.traceId,
                spanId: E.spanId,
                parentSpanId: E.parentSpanId,
                sampled: !!E.sampled
            }), E.registerBeforeFinishCallback(t => {
                this._collectWebVitals(), (0, o.addPerformanceEntries)(t)
            }), E
        }
        _registerInteractionListener() {
            let t;
            let e = () => {
                let {
                    idleTimeout: e,
                    finalTimeout: n,
                    heartbeatInterval: a
                } = this.options, o = "ui.action.click", s = (0, r.getActiveTransaction)();
                if (s && s.op && ["navigation", "pageload"].includes(s.op)) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${o} transaction because a pageload or navigation transaction is in progress.`);
                    return
                }
                if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${o} transaction because _getCurrentHub is invalid.`);
                    return
                }
                if (!this._latestRouteName) {
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                    return
                }
                let u = this._getCurrentHub(),
                    {
                        location: l
                    } = c.WINDOW,
                    d = {
                        name: this._latestRouteName,
                        op: o,
                        trimEnd: !0,
                        metadata: {
                            source: this._latestRouteSource || "url"
                        }
                    };
                t = (0, r.startIdleTransaction)(u, d, e, n, !0, {
                    location: l
                }, a)
            };
            ["click"].forEach(t => {
                addEventListener(t, e, {
                    once: !1,
                    capture: !0
                })
            })
        }
    }

    function f(t) {
        let e = (0, i.getDomElement)(`meta[name=${t}]`);
        return e ? e.getAttribute("content") : void 0
    }
}