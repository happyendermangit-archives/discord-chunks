function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        addTracingExtensions: function() {
            return p
        },
        startIdleTransaction: function() {
            return f
        }
    });
    var r = n("648238"),
        i = n("876122"),
        a = n("633401"),
        o = n("750513"),
        s = n("376097"),
        u = n("912033");

    function l() {
        let t = this.getScope().getSpan();
        return t ? {
            "sentry-trace": t.toTraceparent()
        } : {}
    }

    function c(t, e, n) {
        let i;
        return (0, a.hasTracingEnabled)(e) ? void 0 !== t.sampled ? (t.setMetadata({
            sampleRate: Number(t.sampled)
        }), t) : ("function" == typeof e.tracesSampler ? (i = e.tracesSampler(n), t.setMetadata({
            sampleRate: Number(i)
        })) : void 0 !== n.parentSampled ? i = n.parentSampled : void 0 !== e.tracesSampleRate ? (i = e.tracesSampleRate, t.setMetadata({
            sampleRate: Number(i)
        })) : (i = 1, t.setMetadata({
            sampleRate: i
        })), ! function(t) {
            return (0, r.isNaN)(t) || !("number" == typeof t || "boolean" == typeof t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
        }(i)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t) : i ? (t.sampled = Math.random() < i, t.sampled) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), t.sampled = !1, t) : (t.sampled = !1, t)
    }

    function d(t, e) {
        let n = this.getClient(),
            i = n && n.getOptions() || {},
            a = i.instrumenter || "sentry",
            o = t.instrumenter || "sentry";
        a !== o && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error(`A transaction was started with instrumenter=\`${o}\`, but the SDK is configured with the \`${a}\` instrumenter.
The transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`), t.sampled = !1);
        let s = new u.Transaction(t, this);
        return (s = c(s, i, {
            parentSampled: t.parentSampled,
            transactionContext: t,
            ...e
        })).sampled && s.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", s), s
    }

    function f(t, e, n, r, i, a, o) {
        let u = t.getClient(),
            l = u && u.getOptions() || {},
            d = new s.IdleTransaction(e, t, n, r, o, i);
        return (d = c(d, l, {
            parentSampled: e.parentSampled,
            transactionContext: e,
            ...a
        })).sampled && d.initSpanRecorder(l._experiments && l._experiments.maxSpans), u && u.emit && u.emit("startTransaction", d), d
    }

    function p() {
        let t = (0, i.getMainCarrier)();
        t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = d), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = l), (0, o.registerErrorInstrumentation)())
    }
}