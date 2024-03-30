function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        PROFILE_MAP: function() {
            return b
        },
        addProfileToMap: function() {
            return E
        },
        addProfilesToEnvelope: function() {
            return _
        },
        createProfilingEvent: function() {
            return v
        },
        findProfiledTransactionsFromEnvelope: function() {
            return g
        },
        isValidSampleRate: function() {
            return y
        }
    });
    var r, i = n("91320"),
        a = n("648238"),
        o = n("643487");
    let s = String(0),
        u = "",
        l = "",
        c = "",
        d = o.WINDOW.navigator && o.WINDOW.navigator.userAgent || "",
        f = "",
        p = o.WINDOW.navigator && o.WINDOW.navigator.language || o.WINDOW.navigator && o.WINDOW.navigator.languages && o.WINDOW.navigator.languages["0"] || "",
        h = o.WINDOW.navigator && o.WINDOW.navigator.userAgentData;
    if ("object" == typeof(r = h) && null !== r && "getHighEntropyValues" in r) h.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(t => {
        if (u = t.platform || "", c = t.architecture || "", f = t.model || "", l = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
            let e = t.fullVersionList[t.fullVersionList.length - 1];
            d = `${e.brand} ${e.version}`
        }
    }).catch(t => void 0);

    function _(t, e) {
        if (!e.length) return t;
        for (let n of e) t[1].push([{
            type: "profile"
        }, n]);
        return t
    }

    function g(t) {
        let e = [];
        return (0, a.forEachEnvelopeItem)(t, (t, n) => {
            if ("transaction" === n)
                for (let n = 1; n < t.length; n++) {
                    let r = t[n];
                    r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[n])
                }
        }), e
    }
    let m = new WeakMap;

    function y(t) {
        return "number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${t}.`), !1)
    }

    function v(t, e, n) {
        var r;
        return ((r = e).samples.length < 2 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains no frames"), !1)) ? function(t, e, n) {
            if ("transaction" !== t.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
            if (null == e) throw TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${e} instead.`);
            let r = function(t) {
                    let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
                    return ("string" == typeof e && 32 !== e.length && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log(`[Profiling] Invalid traceId: ${e} on profiled event`), "string" != typeof e) ? "" : e
                }(t),
                h = function(t) {
                    return "thread_metadata" in t ? t : function(t) {
                        let e;
                        let n = 0,
                            r = {
                                samples: [],
                                stacks: [],
                                frames: [],
                                thread_metadata: {
                                    [s]: {
                                        name: "main"
                                    }
                                }
                            };
                        if (!t.samples.length) return r;
                        let i = t.samples[0].timestamp,
                            o = "number" == typeof performance.timeOrigin ? performance.timeOrigin : a.browserPerformanceTimeOrigin || 0,
                            u = o - (a.browserPerformanceTimeOrigin || o);
                        for (let a = 0; a < t.samples.length; a++) {
                            let o = t.samples[a];
                            if (void 0 === o.stackId) {
                                void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[a] = {
                                    elapsed_since_start_ns: ((o.timestamp + u - i) * 1e6).toFixed(0),
                                    stack_id: e,
                                    thread_id: s
                                };
                                continue
                            }
                            let l = t.stacks[o.stackId],
                                c = [];
                            for (; l;) {
                                c.push(l.frameId);
                                let e = t.frames[l.frameId];
                                void 0 === r.frames[l.frameId] && (r.frames[l.frameId] = {
                                    function: e.name,
                                    abs_path: "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                                    lineno: e.line,
                                    colno: e.column
                                }), l = void 0 === l.parentId ? void 0 : t.stacks[l.parentId]
                            }
                            let d = {
                                elapsed_since_start_ns: ((o.timestamp + u - i) * 1e6).toFixed(0),
                                stack_id: n,
                                thread_id: s
                            };
                            r.stacks[n] = c, r.samples[a] = d, n++
                        }
                        return r
                    }(t)
                }(e),
                _ = "number" == typeof t.start_timestamp ? 1e3 * t.start_timestamp : Date.now(),
                g = "number" == typeof t.timestamp ? 1e3 * t.timestamp : Date.now();
            return {
                event_id: n,
                timestamp: new Date(_).toISOString(),
                platform: "javascript",
                version: "1",
                release: t.release || "",
                environment: t.environment || i.DEFAULT_ENVIRONMENT,
                runtime: {
                    name: "javascript",
                    version: o.WINDOW.navigator.userAgent
                },
                os: {
                    name: u,
                    version: l,
                    build_number: d
                },
                device: {
                    locale: p,
                    model: f,
                    manufacturer: d,
                    architecture: c,
                    is_emulator: !1
                },
                debug_meta: {
                    images: function(t) {
                        let e;
                        let n = a.GLOBAL_OBJ._sentryDebugIds;
                        if (!n) return [];
                        let r = (0, i.getCurrentHub)();
                        if (!r) return [];
                        let o = r.getClient();
                        if (!o) return [];
                        let s = o.getOptions();
                        if (!s) return [];
                        let u = s.stackParser;
                        if (!u) return [];
                        let l = m.get(u);
                        l ? e = l : (e = new Map, m.set(u, e));
                        let c = Object.keys(n).reduce((t, r) => {
                                let i;
                                let a = e.get(r);
                                a ? i = a : (i = u(r), e.set(r, i));
                                for (let e = i.length - 1; e >= 0; e--) {
                                    let a = i[e],
                                        o = a && a.filename;
                                    if (a && o) {
                                        t[o] = n[r];
                                        break
                                    }
                                }
                                return t
                            }, {}),
                            d = [];
                        for (let e of t) e && c[e] && d.push({
                            type: "sourcemap",
                            code_file: e,
                            debug_id: c[e]
                        });
                        return d
                    }(e.resources)
                },
                profile: h,
                transactions: [{
                    name: t.transaction || "",
                    id: t.event_id || (0, a.uuid4)(),
                    trace_id: r,
                    active_thread_id: s,
                    relative_start_ns: "0",
                    relative_end_ns: ((g - _) * 1e6).toFixed(0)
                }]
            }
        }(n, e, t) : null
    }
    let b = new Map;

    function E(t, e) {
        if (b.set(t, e), b.size > 30) {
            let t = b.keys().next().value;
            b.delete(t)
        }
    }
}