function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        isRateLimited: function() {
            return i
        },
        parseRetryAfterHeader: function() {
            return r
        },
        updateRateLimits: function() {
            return a
        }
    });

    function r(t, e = Date.now()) {
        let n = parseInt(`${t}`, 10);
        if (!isNaN(n)) return 1e3 * n;
        let r = Date.parse(`${t}`);
        return isNaN(r) ? 6e4 : r - e
    }

    function i(t, e, n = Date.now()) {
        var r;
        return ((r = t)[e] || r.all || 0) > n
    }

    function a(t, {
        statusCode: e,
        headers: n
    }, i = Date.now()) {
        let a = {
                ...t
            },
            o = n && n["x-sentry-rate-limits"],
            s = n && n["retry-after"];
        if (o)
            for (let t of o.trim().split(",")) {
                let [e, n] = t.split(":", 2), r = parseInt(e, 10), o = (isNaN(r) ? 60 : r) * 1e3;
                if (n)
                    for (let t of n.split(";")) a[t] = i + o;
                else a.all = i + o
            } else s ? a.all = i + r(s, i) : 429 === e && (a.all = i + 6e4);
        return a
    }
}