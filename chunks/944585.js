function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasActiveObservations: function() {
            return i
        }
    });
    var r = n("312413"),
        i = function() {
            return r.resizeObservers.some(function(e) {
                return e.activeTargets.length > 0
            })
        }
}