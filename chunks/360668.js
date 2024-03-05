function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        hasSkippedObservations: function() {
            return u
        }
    });
    var n = r("243546"),
        u = function() {
            return n.resizeObservers.some(function(e) {
                return e.skippedTargets.length > 0
            })
        }
}