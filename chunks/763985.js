function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        hasActiveObservations: function() {
            return i
        }
    });
    var n = r("243546"),
        i = function() {
            return n.resizeObservers.some(function(e) {
                return e.activeTargets.length > 0
            })
        }
}