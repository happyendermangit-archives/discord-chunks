function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDropTargetConnector: function() {
            return s
        }
    });
    var r = n("884691"),
        a = n("29150"),
        i = n("119076"),
        o = n("634115");

    function s(e) {
        var t = (0, i.useDragDropManager)(),
            n = (0, r.useMemo)(function() {
                return new a.TargetConnector(t.getBackend())
            }, [t]);
        return (0, o.useIsomorphicLayoutEffect)(function() {
            return n.dropTargetOptions = e || null, n.reconnect(),
                function() {
                    return n.disconnectDropTarget()
                }
        }, [e]), n
    }
}