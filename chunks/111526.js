function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createEndDrag: function() {
            return i
        }
    });
    var r = n("900255"),
        a = n("897345");

    function i(e) {
        return function() {
            var t = e.getMonitor(),
                n = e.getRegistry();
            (function(e) {
                (0, r.invariant)(e.isDragging(), "Cannot call endDrag while not dragging.")
            })(t);
            var i = t.getSourceId();
            return null != i && (n.getSource(i, !0).endDrag(t, i), n.unpinSource()), {
                type: a.END_DRAG
            }
        }
    }
}