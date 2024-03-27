function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        registerErrorInstrumentation: function() {
            return o
        }
    });
    var r = n("648238"),
        i = n("147816");
    let a = !1;

    function o() {
        !a && (a = !0, (0, r.addInstrumentationHandler)("error", s), (0, r.addInstrumentationHandler)("unhandledrejection", s))
    }

    function s() {
        let t = (0, i.getActiveTransaction)();
        if (t) {
            let e = "internal_error";
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
        }
    }
    s.tag = "sentry_tracingErrorCallback"
}