function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        defaultRequestInstrumentationOptions: function() {
            return o
        },
        instrumentOutgoingRequests: function() {
            return s
        }
    });
    var r = n("91320"),
        i = n("648238");
    let a = ["localhost", /^\/(?!\/)/],
        o = {
            traceFetch: !0,
            traceXHR: !0,
            enableHTTPTimings: !0,
            tracingOrigins: a,
            tracePropagationTargets: a
        };

    function s(t) {
        let {
            traceFetch: e,
            traceXHR: n,
            tracePropagationTargets: s,
            tracingOrigins: c,
            shouldCreateSpanForRequest: d,
            enableHTTPTimings: f
        } = {
            traceFetch: o.traceFetch,
            traceXHR: o.traceXHR,
            ...t
        }, p = "function" == typeof d ? d : t => !0, h = t => (function(t, e) {
            return (0, i.stringMatchesSomePattern)(t, e || a)
        })(t, s || c), _ = {};
        e && (0, i.addInstrumentationHandler)("fetch", t => {
            let e = function(t, e, n, a) {
                if (!(0, r.hasTracingEnabled)() || !t.fetchData) return;
                let o = e(t.fetchData.url);
                if (t.endTimestamp && o) {
                    let e = t.fetchData.__span;
                    if (!e) return;
                    let n = a[e];
                    if (n) {
                        if (t.response) {
                            n.setHttpStatus(t.response.status);
                            let e = parseInt(t.response && t.response.headers && t.response.headers.get("content-length"));
                            e > 0 && n.setData("http.response_content_length", e)
                        } else t.error && n.setStatus("internal_error");
                        n.finish(), delete a[e]
                    }
                    return
                }
                let s = (0, r.getCurrentHub)(),
                    u = s.getScope(),
                    c = s.getClient(),
                    l = u.getSpan(),
                    {
                        method: d,
                        url: f
                    } = t.fetchData,
                    p = o && l ? l.startChild({
                        data: {
                            url: f,
                            type: "fetch",
                            "http.method": d
                        },
                        description: `${d} ${f}`,
                        op: "http.client"
                    }) : void 0;
                if (p && (t.fetchData.__span = p.spanId, a[p.spanId] = p), n(t.fetchData.url) && c) {
                    let e = t.args[0];
                    t.args[1] = t.args[1] || {};
                    let n = t.args[1];
                    n.headers = function(t, e, n, a) {
                        let o = n.getSpan(),
                            s = o && o.transaction,
                            {
                                traceId: u,
                                sampled: c,
                                dsc: l
                            } = n.getPropagationContext(),
                            d = o ? o.toTraceparent() : (0, i.generateSentryTraceHeader)(u, void 0, c),
                            f = s ? s.getDynamicSamplingContext() : l || (0, r.getDynamicSamplingContextFromClient)(u, e, n),
                            p = (0, i.dynamicSamplingContextToSentryBaggageHeader)(f),
                            h = "undefined" != typeof Request && (0, i.isInstanceOf)(t, Request) ? t.headers : a.headers;
                        if (!h) return {
                            "sentry-trace": d,
                            baggage: p
                        };
                        if ("undefined" != typeof Headers && (0, i.isInstanceOf)(h, Headers)) {
                            let t = new Headers(h);
                            return t.append("sentry-trace", d), p && t.append(i.BAGGAGE_HEADER_NAME, p), t
                        }
                        if (Array.isArray(h)) {
                            let t = [...h, ["sentry-trace", d]];
                            return p && t.push([i.BAGGAGE_HEADER_NAME, p]), t
                        } else {
                            let t = "baggage" in h ? h.baggage : void 0,
                                e = [];
                            return Array.isArray(t) ? e.push(...t) : t && e.push(t), p && e.push(p), {
                                ...h,
                                "sentry-trace": d,
                                baggage: e.length > 0 ? e.join(",") : void 0
                            }
                        }
                    }(e, c, u, n)
                }
                return p
            }(t, p, h, _);
            f && e && u(e)
        }), n && (0, i.addInstrumentationHandler)("xhr", t => {
            let e = function(t, e, n, a) {
                let o = t.xhr,
                    s = o && o[i.SENTRY_XHR_DATA_KEY];
                if (!(0, r.hasTracingEnabled)() || o && o.__sentry_own_request__ || !o || !s) return;
                let u = e(s.url);
                if (t.endTimestamp && u) {
                    let t = o.__sentry_xhr_span_id__;
                    if (!t) return;
                    let e = a[t];
                    e && (e.setHttpStatus(s.status_code), e.finish(), delete a[t]);
                    return
                }
                let c = (0, r.getCurrentHub)(),
                    d = c.getScope(),
                    f = d.getSpan(),
                    p = u && f ? f.startChild({
                        data: {
                            ...s.data,
                            type: "xhr",
                            "http.method": s.method,
                            url: s.url
                        },
                        description: `${s.method} ${s.url}`,
                        op: "http.client"
                    }) : void 0;
                if (p && (o.__sentry_xhr_span_id__ = p.spanId, a[o.__sentry_xhr_span_id__] = p), o.setRequestHeader && n(s.url)) {
                    if (p) {
                        let t = p && p.transaction,
                            e = t && t.getDynamicSamplingContext(),
                            n = (0, i.dynamicSamplingContextToSentryBaggageHeader)(e);
                        l(o, p.toTraceparent(), n)
                    } else {
                        let t = c.getClient(),
                            {
                                traceId: e,
                                sampled: n,
                                dsc: a
                            } = d.getPropagationContext(),
                            s = (0, i.generateSentryTraceHeader)(e, void 0, n),
                            u = a || (t ? (0, r.getDynamicSamplingContextFromClient)(e, t, d) : void 0);
                        l(o, s, (0, i.dynamicSamplingContextToSentryBaggageHeader)(u))
                    }
                }
                return p
            }(t, p, h, _);
            f && e && u(e)
        })
    }

    function u(t) {
        let e = t.data.url,
            n = new PerformanceObserver(r => {
                r.getEntries().forEach(r => {
                    ("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(e) && ((function(t) {
                        let {
                            name: e,
                            version: n
                        } = function(t) {
                            let e = "unknown",
                                n = "unknown",
                                r = "";
                            for (let i of t) {
                                if ("/" === i) {
                                    [e, n] = t.split("/");
                                    break
                                }
                                if (!isNaN(Number(i))) {
                                    e = "h" === r ? "http" : r, n = t.split(r)[1];
                                    break
                                }
                                r += i
                            }
                            return r === t && (e = r), {
                                name: e,
                                version: n
                            }
                        }(t.nextHopProtocol), r = [];
                        return (r.push(["network.protocol.version", n], ["network.protocol.name", e]), i.browserPerformanceTimeOrigin) ? [...r, ["http.request.redirect_start", c(t.redirectStart)],
                            ["http.request.fetch_start", c(t.fetchStart)],
                            ["http.request.domain_lookup_start", c(t.domainLookupStart)],
                            ["http.request.domain_lookup_end", c(t.domainLookupEnd)],
                            ["http.request.connect_start", c(t.connectStart)],
                            ["http.request.secure_connection_start", c(t.secureConnectionStart)],
                            ["http.request.connection_end", c(t.connectEnd)],
                            ["http.request.request_start", c(t.requestStart)],
                            ["http.request.response_start", c(t.responseStart)],
                            ["http.request.response_end", c(t.responseEnd)]
                        ] : r
                    })(r).forEach(e => t.setData(...e)), n.disconnect())
                })
            });
        n.observe({
            entryTypes: ["resource"]
        })
    }

    function c(t) {
        return ((i.browserPerformanceTimeOrigin || performance.timeOrigin) + t) / 1e3
    }

    function l(t, e, n) {
        try {
            t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(i.BAGGAGE_HEADER_NAME, n)
        } catch (t) {}
    }
}