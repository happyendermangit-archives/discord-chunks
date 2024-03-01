function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        gatherActiveObservationsAtDepth: function() {
            return o
        }
    }), n("424973");
    var r = n("514825"),
        a = n("627545"),
        o = function(e) {
            r.resizeObservers.forEach(function(t) {
                t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
                    n.isActive() && ((0, a.calculateDepthForNode)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
                })
            })
        }
}