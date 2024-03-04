function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDrag: function() {
            return d
        }
    });
    var r = n("726687"),
        i = n("768140"),
        o = n("133550"),
        s = n("53955"),
        a = n("189632"),
        c = n("961719"),
        u = n("900255");

    function d(e, t) {
        var n = (0, i.useOptionalFactory)(e, t);
        (0, u.invariant)(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
        var d = (0, o.useDragSourceMonitor)(),
            l = (0, s.useDragSourceConnector)(n.options, n.previewOptions);
        return (0, r.useRegisteredDragSource)(n, d, l), [(0, a.useCollectedProps)(n.collect, d, l), (0, c.useConnectDragSource)(l), (0, c.useConnectDragPreview)(l)]
    }
}