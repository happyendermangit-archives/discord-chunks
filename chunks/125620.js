function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDrag: function() {
            return l
        }
    });
    var r = n("679839"),
        i = n("55903"),
        a = n("169591"),
        o = n("785870"),
        s = n("501471"),
        u = n("560998"),
        c = n("573654");

    function l(e, t) {
        var n = (0, i.useOptionalFactory)(e, t);
        (0, c.invariant)(!n.begin, "useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");
        var l = (0, a.useDragSourceMonitor)(),
            d = (0, o.useDragSourceConnector)(n.options, n.previewOptions);
        return (0, r.useRegisteredDragSource)(n, l, d), [(0, s.useCollectedProps)(n.collect, l, d), (0, u.useConnectDragSource)(d), (0, u.useConnectDragPreview)(d)]
    }
}