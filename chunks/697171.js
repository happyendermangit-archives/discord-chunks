function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        process: function() {
            return u
        }
    });
    var r = n("828069"),
        i = n("203365"),
        a = n("635636"),
        o = n("376560"),
        s = n("951136"),
        u = function() {
            var e = 0;
            for ((0, s.gatherActiveObservationsAtDepth)(e);
                (0, r.hasActiveObservations)();) e = (0, o.broadcastActiveObservations)(), (0, s.gatherActiveObservationsAtDepth)(e);
            return (0, i.hasSkippedObservations)() && (0, a.deliverResizeLoopError)(), e > 0
        }
}