function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSourceConnector: function() {
            return s
        }
    });
    var r = n("470079"),
        i = n("952969"),
        a = n("996485"),
        o = n("174787");

    function s(e, t) {
        var n = (0, a.useDragDropManager)(),
            s = (0, r.useMemo)(function() {
                return new i.SourceConnector(n.getBackend())
            }, [n]);
        return (0, o.useIsomorphicLayoutEffect)(function() {
            return s.dragSourceOptions = e || null, s.reconnect(),
                function() {
                    return s.disconnectDragSource()
                }
        }, [s, e]), (0, o.useIsomorphicLayoutEffect)(function() {
            return s.dragPreviewOptions = t || null, s.reconnect(),
                function() {
                    return s.disconnectDragPreview()
                }
        }, [s, t]), s
    }
}