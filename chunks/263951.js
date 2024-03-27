function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        instrumentRoutingWithDefaults: function() {
            return a
        }
    });
    var r = n("648238"),
        i = n("607190");

    function a(t, e = !0, n = !0) {
        let a;
        if (!i.WINDOW || !i.WINDOW.location) {
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn("Could not initialize routing instrumentation due to invalid location");
            return
        }
        let o = i.WINDOW.location.href;
        e && (a = t({
            name: i.WINDOW.location.pathname,
            startTimestamp: r.browserPerformanceTimeOrigin ? r.browserPerformanceTimeOrigin / 1e3 : void 0,
            op: "pageload",
            metadata: {
                source: "url"
            }
        })), n && (0, r.addInstrumentationHandler)("history", ({
            to: e,
            from: n
        }) => {
            if (void 0 === n && o && -1 !== o.indexOf(e)) {
                o = void 0;
                return
            }
            n !== e && (o = void 0, a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.log(`[Tracing] Finishing current transaction with op: ${a.op}`), a.finish()), a = t({
                name: i.WINDOW.location.pathname,
                op: "navigation",
                metadata: {
                    source: "url"
                }
            }))
        })
    }
}