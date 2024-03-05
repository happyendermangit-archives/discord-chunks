function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        gatherActiveObservationsAtDepth: function() {
            return a
        }
    }), r("424973");
    var n = r("243546"),
        u = r("909639"),
        a = function(e) {
            n.resizeObservers.forEach(function(t) {
                t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(r) {
                    r.isActive() && ((0, u.calculateDepthForNode)(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r))
                })
            })
        }
}