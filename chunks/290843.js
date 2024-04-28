function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDrop: function() {
            return c
        }
    });
    var r = n("387063"),
        i = n("341932"),
        a = n("369999"),
        o = n("782728"),
        s = n("3022"),
        u = n("151699");

    function c(e, t) {
        var n = (0, i.useOptionalFactory)(e, t),
            c = (0, a.useDropTargetMonitor)(),
            l = (0, o.useDropTargetConnector)(n.options);
        return (0, r.useRegisteredDropTarget)(n, c, l), [(0, s.useCollectedProps)(n.collect, c, l), (0, u.useConnectDropTarget)(l)]
    }
}