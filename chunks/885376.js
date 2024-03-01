function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasActiveObservations: function() {
            return a
        }
    });
    var r = n("514825"),
        a = function() {
            return r.resizeObservers.some(function(e) {
                return e.activeTargets.length > 0
            })
        }
}