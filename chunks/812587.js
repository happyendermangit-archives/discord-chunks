function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        process: function() {
            return s
        }
    });
    var n = r("763985"),
        u = r("360668"),
        a = r("196134"),
        o = r("211974"),
        i = r("650536"),
        s = function() {
            var e = 0;
            for ((0, i.gatherActiveObservationsAtDepth)(e);
                (0, n.hasActiveObservations)();) e = (0, o.broadcastActiveObservations)(), (0, i.gatherActiveObservationsAtDepth)(e);
            return (0, u.hasSkippedObservations)() && (0, a.deliverResizeLoopError)(), e > 0
        }
}