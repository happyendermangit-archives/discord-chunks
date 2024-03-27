function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        makeFetchTransport: function() {
            return o
        }
    });
    var r = n("91320"),
        i = n("648238"),
        a = n("56618");

    function o(t, e = (0, a.getNativeFetchImplementation)()) {
        let n = 0,
            o = 0;
        return (0, r.createTransport)(t, function(r) {
            let s = r.body.length;
            n += s, o++;
            let u = {
                body: r.body,
                method: "POST",
                referrerPolicy: "origin",
                headers: t.headers,
                keepalive: n <= 6e4 && o < 15,
                ...t.fetchOptions
            };
            try {
                return e(t.url, u).then(t => (n -= s, o--, {
                    statusCode: t.status,
                    headers: {
                        "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                        "retry-after": t.headers.get("Retry-After")
                    }
                }))
            } catch (t) {
                return (0, a.clearCachedFetchImplementation)(), n -= s, o--, (0, i.rejectedSyncPromise)(t)
            }
        })
    }
}