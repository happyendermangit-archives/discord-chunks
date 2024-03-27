function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDrop: function() {
            return c
        }
    });
    var r = n("245224"),
        i = n("55903"),
        a = n("50703"),
        o = n("919411"),
        s = n("501471"),
        u = n("787973");

    function c(e, t) {
        var n = (0, i.useOptionalFactory)(e, t),
            c = (0, a.useDropTargetMonitor)(),
            l = (0, o.useDropTargetConnector)(n.options);
        return (0, r.useRegisteredDropTarget)(n, c, l), [(0, s.useCollectedProps)(n.collect, c, l), (0, u.useConnectDropTarget)(l)]
    }
}