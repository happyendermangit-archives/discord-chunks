function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        registerErrorInstrumentation: function() {
            return s
        }
    });
    var r = n("103787"),
        i = n("749331");
    let a = !1;

    function s() {
        !a && (a = !0, (0, r.addInstrumentationHandler)("error", o), (0, r.addInstrumentationHandler)("unhandledrejection", o))
    }

    function o() {
        let t = (0, i.getActiveTransaction)();
        if (t) {
            let e = "internal_error";
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Transaction: ".concat(e, " -> Global error occured")), t.setStatus(e)
        }
    }
    o.tag = "sentry_tracingErrorCallback"
}