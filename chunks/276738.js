function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDrag: function() {
            return u
        }
    });
    var r = n("726687"),
        a = n("768140"),
        i = n("133550"),
        o = n("53955"),
        s = n("189632"),
        c = n("961719"),
        l = n("900255");

    function u(e, t) {
        var n = (0, a.useOptionalFactory)(e, t);
        (0, l.invariant)(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
        var u = (0, i.useDragSourceMonitor)(),
            d = (0, o.useDragSourceConnector)(n.options, n.previewOptions);
        return (0, r.useRegisteredDragSource)(n, u, d), [(0, s.useCollectedProps)(n.collect, u, d), (0, c.useConnectDragSource)(d), (0, c.useConnectDragPreview)(d)]
    }
}