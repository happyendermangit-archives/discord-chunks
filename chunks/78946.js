function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        queueTrackingEventMaker: function() {
            return r
        }
    });
    var r = function(e, t) {
        return function(n, r, o) {
            return new Promise(function(i) {
                var a;
                e.dispatch({
                    type: t,
                    event: n,
                    properties: r,
                    flush: null !== (a = null == o ? void 0 : o.flush) && void 0 !== a && a,
                    fingerprint: null == o ? void 0 : o.fingerprint,
                    resolve: i
                })
            })
        }
    }
}