function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        instrumentRoutingWithDefaults: function() {
            return a
        }
    });
    var r = n("103787"),
        i = n("307447");

    function a(t) {
        let e, n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (!i.WINDOW || !i.WINDOW.location) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not initialize routing instrumentation due to invalid location");
            return
        }
        let s = i.WINDOW.location.href;
        n && (e = t({
            name: i.WINDOW.location.pathname,
            startTimestamp: r.browserPerformanceTimeOrigin ? r.browserPerformanceTimeOrigin / 1e3 : void 0,
            op: "pageload",
            metadata: {
                source: "url"
            }
        })), a && (0, r.addInstrumentationHandler)("history", n => {
            let {
                to: a,
                from: o
            } = n;
            if (void 0 === o && s && -1 !== s.indexOf(a)) {
                s = void 0;
                return
            }
            o !== a && (s = void 0, e && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log("[Tracing] Finishing current transaction with op: ".concat(e.op)), e.finish()), e = t({
                name: i.WINDOW.location.pathname,
                op: "navigation",
                metadata: {
                    source: "url"
                }
            }))
        })
    }
}