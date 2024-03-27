function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasSkippedObservations: function() {
            return i
        }
    });
    var r = n("312413"),
        i = function() {
            return r.resizeObservers.some(function(e) {
                return e.skippedTargets.length > 0
            })
        }
}