function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        broadcastActiveObservations: function() {
            return s
        }
    }), n("424973");
    var r = n("514825"),
        a = n("261423"),
        o = n("627545"),
        i = n("572462"),
        s = function() {
            var e = 1 / 0,
                t = [];
            r.resizeObservers.forEach(function(n) {
                if (0 !== n.activeTargets.length) {
                    var r = [];
                    n.activeTargets.forEach(function(t) {
                        var n = new a.ResizeObserverEntry(t.target),
                            s = (0, o.calculateDepthForNode)(t.target);
                        r.push(n), t.lastReportedSize = (0, i.calculateBoxSize)(t.target, t.observedBox), s < e && (e = s)
                    }), t.push(function() {
                        n.callback.call(n.observer, r, n.observer)
                    }), n.activeTargets.splice(0, n.activeTargets.length)
                }
            });
            for (var n = 0; n < t.length; n++)(0, t[n])();
            return e
        }
}