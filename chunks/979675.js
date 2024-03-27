function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        queueTrackingEventMaker: function() {
            return i
        }
    });
    let i = (e, t) => function(n, i, r) {
        return new Promise(s => {
            var a;
            e.dispatch({
                type: t,
                event: n,
                properties: i,
                flush: null !== (a = null == r ? void 0 : r.flush) && void 0 !== a && a,
                fingerprint: null == r ? void 0 : r.fingerprint,
                resolve: s
            })
        })
    }
}