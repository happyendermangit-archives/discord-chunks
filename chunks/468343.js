function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        process: function() {
            return u
        }
    });
    var r = n("672986"),
        i = n("804785"),
        a = n("788543"),
        o = n("540499"),
        s = n("508567"),
        u = function() {
            var e = 0;
            for ((0, s.gatherActiveObservationsAtDepth)(e);
                (0, r.hasActiveObservations)();) e = (0, o.broadcastActiveObservations)(), (0, s.gatherActiveObservationsAtDepth)(e);
            return (0, i.hasSkippedObservations)() && (0, a.deliverResizeLoopError)(), e > 0
        }
}