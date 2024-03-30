function(e, t, n) {
    "use strict";

    function r(e) {
        var t = Promise.resolve(null),
            n = [],
            r = !1,
            o = e.onContention,
            i = e.onContentionResolved,
            a = e.onTimeout,
            u = e.timeoutMs,
            s = function(e, s) {
                n.length > 0 ? (o(s, n), r = !0) : r && (i(), r = !1), n.push(s);
                var l = null == u || null == a ? null : setTimeout(function() {
                    return a(s, n)
                }, u);
                return new Promise(function(r, o) {
                    t = t.then(e).then(r, o).then(function() {
                        return n.splice(0, 1)
                    }), null != l && (t = t.then(function() {
                        return clearTimeout(l)
                    }))
                })
            };
        return s.isMutexHeld = function() {
            return n.length > 0
        }, s.getLockHolders = function() {
            return n
        }, s
    }
    n.r(t), n.d(t, {
        createObservableLock: function() {
            return r
        }
    })
}