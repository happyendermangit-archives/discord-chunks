function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        broadcastActiveObservations: function() {
            return s
        }
    });
    var r = n("876026"),
        i = n("518285"),
        a = n("412169"),
        o = n("219845"),
        s = function() {
            var e = 1 / 0,
                t = [];
            r.resizeObservers.forEach(function(n) {
                if (0 !== n.activeTargets.length) {
                    var r = [];
                    n.activeTargets.forEach(function(t) {
                        var n = new i.ResizeObserverEntry(t.target),
                            s = (0, a.calculateDepthForNode)(t.target);
                        r.push(n), t.lastReportedSize = (0, o.calculateBoxSize)(t.target, t.observedBox), s < e && (e = s)
                    }), t.push(function() {
                        n.callback.call(n.observer, r, n.observer)
                    }), n.activeTargets.splice(0, n.activeTargets.length)
                }
            });
            for (var n = 0; n < t.length; n++)(0, t[n])();
            return e
        }
}