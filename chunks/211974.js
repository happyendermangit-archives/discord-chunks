function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        broadcastActiveObservations: function() {
            return i
        }
    }), r("424973");
    var n = r("243546"),
        u = r("987291"),
        a = r("909639"),
        o = r("334935"),
        i = function() {
            var e = 1 / 0,
                t = [];
            n.resizeObservers.forEach(function(r) {
                if (0 !== r.activeTargets.length) {
                    var n = [];
                    r.activeTargets.forEach(function(t) {
                        var r = new u.ResizeObserverEntry(t.target),
                            i = (0, a.calculateDepthForNode)(t.target);
                        n.push(r), t.lastReportedSize = (0, o.calculateBoxSize)(t.target, t.observedBox), i < e && (e = i)
                    }), t.push(function() {
                        r.callback.call(r.observer, n, r.observer)
                    }), r.activeTargets.splice(0, r.activeTargets.length)
                }
            });
            for (var r = 0; r < t.length; r++)(0, t[r])();
            return e
        }
}