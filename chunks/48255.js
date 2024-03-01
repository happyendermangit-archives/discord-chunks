function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        process: function() {
            return s
        }
    });
    var r = n("668239"),
        i = n("756378"),
        o = n("908912"),
        a = n("136810"),
        u = n("347724"),
        s = function() {
            var t = 0;
            for ((0, u.gatherActiveObservationsAtDepth)(t);
                (0, r.hasActiveObservations)();) t = (0, a.broadcastActiveObservations)(), (0, u.gatherActiveObservationsAtDepth)(t);
            return (0, i.hasSkippedObservations)() && (0, o.deliverResizeLoopError)(), t > 0
        }
}