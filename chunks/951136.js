function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        gatherActiveObservationsAtDepth: function() {
            return a
        }
    });
    var r = n("304329"),
        i = n("977584"),
        a = function(e) {
            r.resizeObservers.forEach(function(t) {
                t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
                    n.isActive() && ((0, i.calculateDepthForNode)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
                })
            })
        }
}