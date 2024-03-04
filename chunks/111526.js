function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createEndDrag: function() {
            return o
        }
    });
    var r = n("900255"),
        i = n("897345");

    function o(e) {
        return function() {
            var t = e.getMonitor(),
                n = e.getRegistry();
            (function(e) {
                (0, r.invariant)(e.isDragging(), "Cannot call endDrag while not dragging.")
            })(t);
            var o = t.getSourceId();
            return null != o && (n.getSource(o, !0).endDrag(t, o), n.unpinSource()), {
                type: i.END_DRAG
            }
        }
    }
}