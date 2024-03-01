function(e, t, n) {
    "use strict";

    function a(e) {
        let t = Promise.resolve(null),
            n = [],
            a = !1,
            {
                onContention: l,
                onContentionResolved: o,
                onTimeout: i,
                timeoutMs: r
            } = e,
            d = function(e, d) {
                n.length > 0 ? (l(d, n), a = !0) : a && (o(), a = !1), n.push(d);
                let E = null == r || null == i ? null : setTimeout(() => i(d, n), r);
                return new Promise((a, l) => {
                    t = t.then(e).then(a, l).then(() => n.splice(0, 1)), null != E && (t = t.then(() => clearTimeout(E)))
                })
            };
        return d.isMutexHeld = () => n.length > 0, d.getLockHolders = () => n, d
    }
    n.r(t), n.d(t, {
        createObservableLock: function() {
            return a
        }
    }), n("424973")
}