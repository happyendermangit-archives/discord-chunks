function(t, e, n) {
    "use strict";
    let r, i;
    n.r(e), n.d(e, {
        addPerformanceEntries: function() {
            return E
        },
        startTrackingInteractions: function() {
            return b
        },
        startTrackingLongTasks: function() {
            return v
        },
        startTrackingWebVitals: function() {
            return y
        }
    });
    var a = n("91320"),
        o = n("648238"),
        s = n("607190"),
        u = n("540161"),
        c = n("282572"),
        l = n("301072"),
        d = n("233863"),
        f = n("544457"),
        p = n("72609");

    function h(t) {
        return t / 1e3
    }

    function _() {
        return s.WINDOW && s.WINDOW.addEventListener && s.WINDOW.performance
    }
    let g = 0,
        m = {};

    function y() {
        let t = _();
        if (t && o.browserPerformanceTimeOrigin) {
            t.mark && s.WINDOW.performance.mark("sentry-tracing-init"),
                function() {
                    (0, c.onFID)(t => {
                        let e = t.entries.pop();
                        if (!e) return;
                        let n = h(o.browserPerformanceTimeOrigin),
                            r = h(e.startTime);
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FID"), m.fid = {
                            value: t.value,
                            unit: "millisecond"
                        }, m["mark.fid"] = {
                            value: n + r,
                            unit: "second"
                        }
                    })
                }();
            let e = function() {
                    return (0, u.onCLS)(t => {
                        let e = t.entries.pop();
                        e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS"), m.cls = {
                            value: t.value,
                            unit: ""
                        }, i = e)
                    })
                }(),
                n = function() {
                    return (0, l.onLCP)(t => {
                        let e = t.entries.pop();
                        e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP"), m.lcp = {
                            value: t.value,
                            unit: "millisecond"
                        }, r = e)
                    })
                }();
            return () => {
                e && e(), n && n()
            }
        }
        return () => void 0
    }

    function v() {
        (0, f.observe)("longtask", t => {
            for (let e of t) {
                let t = (0, a.getActiveTransaction)();
                if (!t) return;
                let n = h(o.browserPerformanceTimeOrigin + e.startTime),
                    r = h(e.duration);
                t.startChild({
                    description: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTimestamp: n,
                    endTimestamp: n + r
                })
            }
        })
    }

    function b() {
        (0, f.observe)("event", t => {
            for (let e of t) {
                let t = (0, a.getActiveTransaction)();
                if (!t) return;
                if ("click" === e.name) {
                    let n = h(o.browserPerformanceTimeOrigin + e.startTime),
                        r = h(e.duration);
                    t.startChild({
                        description: (0, o.htmlTreeAsString)(e.target),
                        op: `ui.interaction.${e.name}`,
                        startTimestamp: n,
                        endTimestamp: n + r
                    })
                }
            }
        }, {
            durationThreshold: 0
        })
    }

    function E(t) {
        let e, n;
        let a = _();
        if (!a || !s.WINDOW.performance.getEntries || !o.browserPerformanceTimeOrigin) return;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Tracing] Adding & adjusting spans using Performance API");
        let u = h(o.browserPerformanceTimeOrigin),
            c = a.getEntries();
        if (c.slice(g).forEach(r => {
                let i = h(r.startTime),
                    a = h(r.duration);
                if ("navigation" !== t.op || !(u + i < t.startTimestamp)) switch (r.entryType) {
                    case "navigation":
                        (function(t, e, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                    S(t, e, r, n)
                                }), S(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), S(t, e, "fetch", n, "cache", "domainLookupStart"), S(t, e, "domainLookup", n, "DNS"),
                                function(t, e, n) {
                                    (0, p._startChild)(t, {
                                        op: "browser",
                                        description: "request",
                                        startTimestamp: n + h(e.requestStart),
                                        endTimestamp: n + h(e.responseEnd)
                                    }), (0, p._startChild)(t, {
                                        op: "browser",
                                        description: "response",
                                        startTimestamp: n + h(e.responseStart),
                                        endTimestamp: n + h(e.responseEnd)
                                    })
                                }(t, e, n)
                        })(t, r, u), e = u + h(r.responseStart), n = u + h(r.requestStart);
                        break;
                    case "mark":
                    case "paint":
                    case "measure": {
                        (function(t, e, n, r, i) {
                            let a = i + n;
                            (0, p._startChild)(t, {
                                description: e.name,
                                endTimestamp: a + r,
                                op: e.entryType,
                                startTimestamp: a
                            })
                        })(t, r, i, a, u);
                        let e = (0, d.getVisibilityWatcher)(),
                            n = r.startTime < e.firstHiddenTime;
                        "first-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FP"), m.fp = {
                            value: r.startTime,
                            unit: "millisecond"
                        }), "first-contentful-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding FCP"), m.fcp = {
                            value: r.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                    case "resource": {
                        let e = r.name.replace(s.WINDOW.location.origin, "");
                        (function(t, e, n, r, i, a) {
                            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                            let o = {};
                            "transferSize" in e && (o["http.response_transfer_size"] = e.transferSize), "encodedBodySize" in e && (o["http.response_content_length"] = e.encodedBodySize), "decodedBodySize" in e && (o["http.decoded_response_content_length"] = e.decodedBodySize), "renderBlockingStatus" in e && (o["resource.render_blocking_status"] = e.renderBlockingStatus);
                            let s = a + r;
                            (0, p._startChild)(t, {
                                description: n,
                                endTimestamp: s + i,
                                op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                startTimestamp: s,
                                data: o
                            })
                        })(t, r, e, i, a, u)
                    }
                }
            }), g = Math.max(c.length - 1, 0), function(t) {
                let e = s.WINDOW.navigator;
                if (!e) return;
                let n = e.connection;
                n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), (0, p.isMeasurementValue)(n.rtt) && (m["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                })), (0, p.isMeasurementValue)(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`), (0, p.isMeasurementValue)(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
            }(t), "pageload" === t.op) {
            "number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding TTFB"), m.ttfb = {
                value: (e - t.startTimestamp) * 1e3,
                unit: "millisecond"
            }, "number" == typeof n && n <= e && (m["ttfb.requestTime"] = {
                value: (e - n) * 1e3,
                unit: "millisecond"
            })), ["fcp", "fp", "lcp"].forEach(e => {
                if (!m[e] || u >= t.startTimestamp) return;
                let n = m[e].value,
                    r = Math.abs((u + h(n) - t.startTimestamp) * 1e3),
                    i = r - n;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log(`[Measurements] Normalized ${e} from ${n} to ${r} (${i})`), m[e].value = r
            });
            let a = m["mark.fid"];
            a && m.fid && ((0, p._startChild)(t, {
                    description: "first input delay",
                    endTimestamp: a.value + h(m.fid.value),
                    op: "ui.action",
                    startTimestamp: a.value
                }), delete m["mark.fid"]), !("fcp" in m) && delete m.cls, Object.keys(m).forEach(e => {
                    t.setMeasurement(e, m[e].value, m[e].unit)
                }),
                function(t) {
                    r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding LCP Data"), r.element && t.setTag("lcp.element", (0, o.htmlTreeAsString)(r.element)), r.id && t.setTag("lcp.id", r.id), r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)), t.setTag("lcp.size", r.size)), i && i.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.logger.log("[Measurements] Adding CLS Data"), i.sources.forEach((e, n) => t.setTag(`cls.source.${n+1}`, (0, o.htmlTreeAsString)(e.node))))
                }(t)
        }
        r = void 0, i = void 0, m = {}
    }

    function S(t, e, n, r, i, a) {
        let o = a ? e[a] : e[`${n}End`],
            s = e[`${n}Start`];
        s && o && (0, p._startChild)(t, {
            op: "browser",
            description: i || n,
            startTimestamp: r + h(s),
            endTimestamp: r + h(o)
        })
    }
}