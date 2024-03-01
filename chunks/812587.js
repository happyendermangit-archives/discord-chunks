function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        process: function() {
            return s
        }
    });
    var n = r("763985"),
        i = r("360668"),
        o = r("196134"),
        a = r("211974"),
        u = r("650536"),
        s = function() {
            var e = 0;
            for ((0, u.gatherActiveObservationsAtDepth)(e);
                (0, n.hasActiveObservations)();) e = (0, a.broadcastActiveObservations)(), (0, u.gatherActiveObservationsAtDepth)(e);
            return (0, i.hasSkippedObservations)() && (0, o.deliverResizeLoopError)(), e > 0
        }
}