function(t, e, n) {
    "use strict";
    let r, i;
    n.r(e), n.d(e, {
        addPerformanceEntries: function() {
            return b
        },
        startTrackingInteractions: function() {
            return E
        },
        startTrackingLongTasks: function() {
            return v
        },
        startTrackingWebVitals: function() {
            return y
        }
    }), n("222007"), n("781738");
    var a = n("675065"),
        s = n("103787"),
        o = n("307447"),
        c = n("916876"),
        l = n("443026"),
        u = n("162223"),
        d = n("810843"),
        h = n("885405"),
        f = n("100183");

    function p(t) {
        return t / 1e3
    }

    function _() {
        return o.WINDOW && o.WINDOW.addEventListener && o.WINDOW.performance
    }
    let g = 0,
        m = {};

    function y() {
        let t = _();
        if (t && s.browserPerformanceTimeOrigin) {
            t.mark && o.WINDOW.performance.mark("sentry-tracing-init"),
                function() {
                    (0, l.onFID)(t => {
                        let e = t.entries.pop();
                        if (!e) return;
                        let n = p(s.browserPerformanceTimeOrigin),
                            r = p(e.startTime);
                        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding FID"), m.fid = {
                            value: t.value,
                            unit: "millisecond"
                        }, m["mark.fid"] = {
                            value: n + r,
                            unit: "second"
                        }
                    })
                }();
            let e = function() {
                    return (0, c.onCLS)(t => {
                        let e = t.entries.pop();
                        e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding CLS"), m.cls = {
                            value: t.value,
                            unit: ""
                        }, i = e)
                    })
                }(),
                n = function() {
                    return (0, u.onLCP)(t => {
                        let e = t.entries.pop();
                        e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding LCP"), m.lcp = {
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
        (0, h.observe)("longtask", t => {
            for (let e of t) {
                let t = (0, a.getActiveTransaction)();
                if (!t) return;
                let n = p(s.browserPerformanceTimeOrigin + e.startTime),
                    r = p(e.duration);
                t.startChild({
                    description: "Main UI thread blocked",
                    op: "ui.long-task",
                    startTimestamp: n,
                    endTimestamp: n + r
                })
            }
        })
    }

    function E() {
        (0, h.observe)("event", t => {
            for (let e of t) {
                let t = (0, a.getActiveTransaction)();
                if (!t) return;
                if ("click" === e.name) {
                    let n = p(s.browserPerformanceTimeOrigin + e.startTime),
                        r = p(e.duration);
                    t.startChild({
                        description: (0, s.htmlTreeAsString)(e.target),
                        op: "ui.interaction.".concat(e.name),
                        startTimestamp: n,
                        endTimestamp: n + r
                    })
                }
            }
        }, {
            durationThreshold: 0
        })
    }

    function b(t) {
        let e, n;
        let a = _();
        if (!a || !o.WINDOW.performance.getEntries || !s.browserPerformanceTimeOrigin) return;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Tracing] Adding & adjusting spans using Performance API");
        let c = p(s.browserPerformanceTimeOrigin),
            l = a.getEntries();
        if (l.slice(g).forEach(r => {
                let i = p(r.startTime),
                    a = p(r.duration);
                if ("navigation" !== t.op || !(c + i < t.startTimestamp)) switch (r.entryType) {
                    case "navigation":
                        (function(t, e, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(r => {
                                    S(t, e, r, n)
                                }), S(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), S(t, e, "fetch", n, "cache", "domainLookupStart"), S(t, e, "domainLookup", n, "DNS"),
                                function(t, e, n) {
                                    (0, f._startChild)(t, {
                                        op: "browser",
                                        description: "request",
                                        startTimestamp: n + p(e.requestStart),
                                        endTimestamp: n + p(e.responseEnd)
                                    }), (0, f._startChild)(t, {
                                        op: "browser",
                                        description: "response",
                                        startTimestamp: n + p(e.responseStart),
                                        endTimestamp: n + p(e.responseEnd)
                                    })
                                }(t, e, n)
                        })(t, r, c), e = c + p(r.responseStart), n = c + p(r.requestStart);
                        break;
                    case "mark":
                    case "paint":
                    case "measure": {
                        (function(t, e, n, r, i) {
                            let a = i + n;
                            (0, f._startChild)(t, {
                                description: e.name,
                                endTimestamp: a + r,
                                op: e.entryType,
                                startTimestamp: a
                            })
                        })(t, r, i, a, c);
                        let e = (0, d.getVisibilityWatcher)(),
                            n = r.startTime < e.firstHiddenTime;
                        "first-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding FP"), m.fp = {
                            value: r.startTime,
                            unit: "millisecond"
                        }), "first-contentful-paint" === r.name && n && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding FCP"), m.fcp = {
                            value: r.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                    case "resource": {
                        let e = r.name.replace(o.WINDOW.location.origin, "");
                        (function(t, e, n, r, i, a) {
                            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                            let s = {};
                            "transferSize" in e && (s["http.response_transfer_size"] = e.transferSize), "encodedBodySize" in e && (s["http.response_content_length"] = e.encodedBodySize), "decodedBodySize" in e && (s["http.decoded_response_content_length"] = e.decodedBodySize), "renderBlockingStatus" in e && (s["resource.render_blocking_status"] = e.renderBlockingStatus);
                            let o = a + r;
                            (0, f._startChild)(t, {
                                description: n,
                                endTimestamp: o + i,
                                op: e.initiatorType ? "resource.".concat(e.initiatorType) : "resource.other",
                                startTimestamp: o,
                                data: s
                            })
                        })(t, r, e, i, a, c)
                    }
                }
            }), g = Math.max(l.length - 1, 0), function(t) {
                let e = o.WINDOW.navigator;
                if (!e) return;
                let n = e.connection;
                n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), (0, f.isMeasurementValue)(n.rtt) && (m["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                })), (0, f.isMeasurementValue)(e.deviceMemory) && t.setTag("deviceMemory", "".concat(e.deviceMemory, " GB")), (0, f.isMeasurementValue)(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
            }(t), "pageload" === t.op) {
            "number" == typeof e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding TTFB"), m.ttfb = {
                value: (e - t.startTimestamp) * 1e3,
                unit: "millisecond"
            }, "number" == typeof n && n <= e && (m["ttfb.requestTime"] = {
                value: (e - n) * 1e3,
                unit: "millisecond"
            })), ["fcp", "fp", "lcp"].forEach(e => {
                if (!m[e] || c >= t.startTimestamp) return;
                let n = m[e].value,
                    r = c + p(n),
                    i = Math.abs((r - t.startTimestamp) * 1e3),
                    a = i - n;
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Normalized ".concat(e, " from ").concat(n, " to ").concat(i, " (").concat(a, ")")), m[e].value = i
            });
            let a = m["mark.fid"];
            a && m.fid && ((0, f._startChild)(t, {
                    description: "first input delay",
                    endTimestamp: a.value + p(m.fid.value),
                    op: "ui.action",
                    startTimestamp: a.value
                }), delete m["mark.fid"]), !("fcp" in m) && delete m.cls, Object.keys(m).forEach(e => {
                    t.setMeasurement(e, m[e].value, m[e].unit)
                }),
                function(t) {
                    r && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding LCP Data"), r.element && t.setTag("lcp.element", (0, s.htmlTreeAsString)(r.element)), r.id && t.setTag("lcp.id", r.id), r.url && t.setTag("lcp.url", r.url.trim().slice(0, 200)), t.setTag("lcp.size", r.size)), i && i.sources && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && s.logger.log("[Measurements] Adding CLS Data"), i.sources.forEach((e, n) => t.setTag("cls.source.".concat(n + 1), (0, s.htmlTreeAsString)(e.node))))
                }(t)
        }
        r = void 0, i = void 0, m = {}
    }

    function S(t, e, n, r, i, a) {
        let s = a ? e[a] : e["".concat(n, "End")],
            o = e["".concat(n, "Start")];
        o && s && (0, f._startChild)(t, {
            op: "browser",
            description: i || n,
            startTimestamp: r + p(o),
            endTimestamp: r + p(s)
        })
    }
}