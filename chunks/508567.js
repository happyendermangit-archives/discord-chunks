function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        gatherActiveObservationsAtDepth: function() {
            return o
        }
    });
    var r = n("876026"),
        i = n("412169"),
        a = n("219845"),
        o = function(e) {
            a.cache.clear(), r.resizeObservers.forEach(function(t) {
                t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
                    n.isActive() && ((0, i.calculateDepthForNode)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
                })
            })
        }
}