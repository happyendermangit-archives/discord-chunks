function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        makeOfflineTransport: function() {
            return a
        }
    });
    var r = n("648238");

    function i(t, e) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.logger.info(`[Offline]: ${t}`, e)
    }

    function a(t) {
        return e => {
            let n;
            let a = t(e),
                o = e.createStore ? e.createStore(e) : void 0,
                s = 5e3;

            function u(t) {
                o && (n && clearTimeout(n), "number" != typeof(n = setTimeout(async () => {
                    n = void 0;
                    let t = await o.pop();
                    t && (i("Attempting to send previously queued event"), l(t).catch(t => {
                        i("Failed to retry sending", t)
                    }))
                }, t)) && n.unref && n.unref())
            }

            function c() {
                !n && (u(s), s = Math.min(2 * s, 36e5))
            }
            async function l(t) {
                try {
                    let e = await a.send(t),
                        n = 100;
                    if (e) {
                        if (e.headers && e.headers["retry-after"]) n = (0, r.parseRetryAfterHeader)(e.headers["retry-after"]);
                        else if ((e.statusCode || 0) >= 400) return e
                    }
                    return u(n), s = 5e3, e
                } catch (a) {
                    var n, l, d;
                    if (o && await (n = t, l = a, d = s, !(0, r.envelopeContainsItemType)(n, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(n, l, d)))) return await o.insert(t), c(), i("Error sending. Event queued", a), {};
                    throw a
                }
            }
            return e.flushAtStartup && c(), {
                send: l,
                flush: t => a.flush(t)
            }
        }
    }
}