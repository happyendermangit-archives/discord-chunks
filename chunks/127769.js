function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        onProfilingStartRouteTransaction: function() {
            return c
        },
        wrapTransactionWithProfiling: function() {
            return l
        }
    });
    var r = n("675065"),
        i = n("103787"),
        a = n("714090"),
        s = n("959456");
    let o = !1;

    function c(t) {
        return t ? l(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Transaction is undefined, skipping profiling"), t)
    }

    function l(t) {
        let e;
        let n = a.WINDOW.Profiler;
        if ("function" != typeof n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."), t;
        if (o) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling has been disabled for the duration of the current user session."), t;
        let c = (0, r.getCurrentHub)().getClient(),
            l = c && c.getOptions();
        if (!l) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling disabled, no options found."), t;
        let u = l.profilesSampleRate;
        if (!(0, s.isValidSampleRate)(u)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Profiling] Discarding profile because of invalid sample rate."), t;
        if (!u) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), t;
        let d = !0 === u || Math.random() < u;
        if (!d) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ".concat(Number(u), ")")), t;
        try {
            e = new n({
                sampleInterval: 10,
                maxBufferSize: Math.floor(3e3)
            })
        } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (i.logger.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), i.logger.log("[Profiling] Disabling profiling for current user session.")), o = !0
        }
        if (!e) return t;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] started profiling transaction: ".concat(t.name || t.description));
        let h = (0, i.uuid4)();
        async function f() {
            if (!t || !e) return null;
            let n = t.startChild({
                description: "profiler.stop",
                op: "profiler"
            });
            return e.stop().then(e => (n.finish(), p && (a.WINDOW.clearTimeout(p), p = void 0), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] stopped profiling of transaction: ".concat(t.name || t.description)), e) ? ((0, s.addProfileToMap)(h, e), null) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] profiler returned null profile for: ".concat(t.name || t.description), "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)).catch(t => (n.finish(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] error while stopping profiler:", t), null))
        }
        let p = a.WINDOW.setTimeout(() => {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] max profile duration elapsed, stopping profiling for:", t.name || t.description), f()
            }, 3e4),
            _ = t.finish.bind(t);
        return t.finish = function() {
            return t ? (f().then(() => {
                t.setContext("profile", {
                    profile_id: h
                }), _()
            }, () => {
                _()
            }), t) : _()
        }, t
    }
}