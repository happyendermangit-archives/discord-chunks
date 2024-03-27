function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasSkippedObservations: function() {
            return i
        }
    });
    var r = n("876026"),
        i = function() {
            return r.resizeObservers.some(function(e) {
                return e.skippedTargets.length > 0
            })
        }
}