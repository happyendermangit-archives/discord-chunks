function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDropTargetConnector: function() {
            return a
        }
    });
    var r = n("884691"),
        i = n("29150"),
        o = n("119076"),
        s = n("634115");

    function a(e) {
        var t = (0, o.useDragDropManager)(),
            n = (0, r.useMemo)(function() {
                return new i.TargetConnector(t.getBackend())
            }, [t]);
        return (0, s.useIsomorphicLayoutEffect)(function() {
            return n.dropTargetOptions = e || null, n.reconnect(),
                function() {
                    return n.disconnectDropTarget()
                }
        }, [e]), n
    }
}