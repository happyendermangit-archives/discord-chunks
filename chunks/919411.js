function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDropTargetConnector: function() {
            return s
        }
    });
    var r = n("470079"),
        i = n("952969"),
        a = n("996485"),
        o = n("174787");

    function s(e) {
        var t = (0, a.useDragDropManager)(),
            n = (0, r.useMemo)(function() {
                return new i.TargetConnector(t.getBackend())
            }, [t]);
        return (0, o.useIsomorphicLayoutEffect)(function() {
            return n.dropTargetOptions = e || null, n.reconnect(),
                function() {
                    return n.disconnectDropTarget()
                }
        }, [e]), n
    }
}