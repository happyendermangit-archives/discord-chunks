function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDrop: function() {
            return l
        }
    });
    var r = n("587134"),
        a = n("768140"),
        i = n("587663"),
        o = n("669044"),
        s = n("189632"),
        c = n("961560");

    function l(e, t) {
        var n = (0, a.useOptionalFactory)(e, t),
            l = (0, i.useDropTargetMonitor)(),
            u = (0, o.useDropTargetConnector)(n.options);
        return (0, r.useRegisteredDropTarget)(n, l, u), [(0, s.useCollectedProps)(n.collect, l, u), (0, c.useConnectDropTarget)(u)]
    }
}