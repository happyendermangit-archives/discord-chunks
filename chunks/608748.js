function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        process: function() {
            return u
        }
    });
    var r = n("944585"),
        i = n("455087"),
        a = n("343174"),
        o = n("467544"),
        s = n("189848"),
        u = function() {
            var e = 0;
            for ((0, s.gatherActiveObservationsAtDepth)(e);
                (0, r.hasActiveObservations)();) e = (0, o.broadcastActiveObservations)(), (0, s.gatherActiveObservationsAtDepth)(e);
            return (0, i.hasSkippedObservations)() && (0, a.deliverResizeLoopError)(), e > 0
        }
}