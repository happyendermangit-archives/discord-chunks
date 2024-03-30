function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        createTransport: function() {
            return i
        }
    });
    var r = n("648238");

    function i(t, e, n = (0, r.makePromiseBuffer)(t.bufferSize || 30)) {
        let i = {};

        function o(o) {
            let s = [];
            if ((0, r.forEachEnvelopeItem)(o, (e, n) => {
                    let o = (0, r.envelopeItemTypeToDataCategory)(n);
                    if ((0, r.isRateLimited)(i, o)) {
                        let r = a(e, n);
                        t.recordDroppedEvent("ratelimit_backoff", o, r)
                    } else s.push(e)
                }), 0 === s.length) return (0, r.resolvedSyncPromise)();
            let u = (0, r.createEnvelope)(o[0], s),
                l = e => {
                    (0, r.forEachEnvelopeItem)(u, (n, i) => {
                        let o = a(n, i);
                        t.recordDroppedEvent(e, (0, r.envelopeItemTypeToDataCategory)(i), o)
                    })
                };
            return n.add(() => e({
                body: (0, r.serializeEnvelope)(u, t.textEncoder)
            }).then(t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), i = (0, r.updateRateLimits)(i, t), t), t => {
                throw l("network_error"), t
            })).then(t => t, t => {
                if (t instanceof r.SentryError) return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.error("Skipped sending event because buffer is full."), l("queue_overflow"), (0, r.resolvedSyncPromise)();
                throw t
            })
        }
        return o.__sentry__baseTransport__ = !0, {
            send: o,
            flush: t => n.drain(t)
        }
    }

    function a(t, e) {
        if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
    }
}