function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasSkippedObservations: function() {
            return a
        }
    });
    var r = n("514825"),
        a = function() {
            return r.resizeObservers.some(function(e) {
                return e.skippedTargets.length > 0
            })
        }
}