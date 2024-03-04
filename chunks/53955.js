function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSourceConnector: function() {
            return a
        }
    });
    var r = n("884691"),
        i = n("29150"),
        o = n("119076"),
        s = n("634115");

    function a(e, t) {
        var n = (0, o.useDragDropManager)(),
            a = (0, r.useMemo)(function() {
                return new i.SourceConnector(n.getBackend())
            }, [n]);
        return (0, s.useIsomorphicLayoutEffect)(function() {
            return a.dragSourceOptions = e || null, a.reconnect(),
                function() {
                    return a.disconnectDragSource()
                }
        }, [a, e]), (0, s.useIsomorphicLayoutEffect)(function() {
            return a.dragPreviewOptions = t || null, a.reconnect(),
                function() {
                    return a.disconnectDragPreview()
                }
        }, [a, t]), a
    }
}