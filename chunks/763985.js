function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        hasActiveObservations: function() {
            return u
        }
    });
    var n = r("243546"),
        u = function() {
            return n.resizeObservers.some(function(e) {
                return e.activeTargets.length > 0
            })
        }
}