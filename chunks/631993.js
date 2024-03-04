function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDrop: function() {
            return u
        }
    });
    var r = n("587134"),
        i = n("768140"),
        o = n("587663"),
        s = n("669044"),
        a = n("189632"),
        c = n("961560");

    function u(e, t) {
        var n = (0, i.useOptionalFactory)(e, t),
            u = (0, o.useDropTargetMonitor)(),
            d = (0, s.useDropTargetConnector)(n.options);
        return (0, r.useRegisteredDropTarget)(n, u, d), [(0, a.useCollectedProps)(n.collect, u, d), (0, c.useConnectDropTarget)(d)]
    }
}