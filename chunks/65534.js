function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        onProfilingStartRouteTransaction: function() {
            return u
        },
        wrapTransactionWithProfiling: function() {
            return l
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("643487"),
        o = n("450436");
    let s = !1;

    function u(t) {
        return t ? l(t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Transaction is undefined, skipping profiling"), t)
    }

    function l(t) {
        let e;
        let n = a.WINDOW.Profiler;
        if ("function" != typeof n) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."), t;
        if (s) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling has been disabled for the duration of the current user session."), t;
        let u = (0, r.getCurrentHub)().getClient(),
            l = u && u.getOptions();
        if (!l) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Profiling disabled, no options found."), t;
        let c = l.profilesSampleRate;
        if (!(0, o.isValidSampleRate)(c)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Profiling] Discarding profile because of invalid sample rate."), t;
        if (!c) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), t;
        if (!(!0 === c || Math.random() < c)) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(c)})`), t;
        try {
            e = new n({
                sampleInterval: 10,
                maxBufferSize: Math.floor(3e3)
            })
        } catch (t) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (i.logger.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), i.logger.log("[Profiling] Disabling profiling for current user session.")), s = !0
        }
        if (!e) return t;
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] started profiling transaction: ${t.name||t.description}`);
        let d = (0, i.uuid4)();
        async function f() {
            if (!t || !e) return null;
            let n = t.startChild({
                description: "profiler.stop",
                op: "profiler"
            });
            return e.stop().then(e => (n.finish(), p && (a.WINDOW.clearTimeout(p), p = void 0), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] stopped profiling of transaction: ${t.name||t.description}`), e) ? ((0, o.addProfileToMap)(d, e), null) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log(`[Profiling] profiler returned null profile for: ${t.name||t.description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)).catch(t => (n.finish(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] error while stopping profiler:", t), null))
        }
        let p = a.WINDOW.setTimeout(() => {
                ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Profiling] max profile duration elapsed, stopping profiling for:", t.name || t.description), f()
            }, 3e4),
            h = t.finish.bind(t);
        return t.finish = function() {
            return t ? (f().then(() => {
                t.setContext("profile", {
                    profile_id: d
                }), h()
            }, () => {
                h()
            }), t) : h()
        }, t
    }
}