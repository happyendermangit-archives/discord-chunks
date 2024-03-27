function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createEndDrag: function() {
            return a
        }
    });
    var r = n("573654"),
        i = n("964742");

    function a(e) {
        return function() {
            var t = e.getMonitor(),
                n = e.getRegistry();
            (function(e) {
                (0, r.invariant)(e.isDragging(), "Cannot call endDrag while not dragging.")
            })(t);
            var a = t.getSourceId();
            return null != a && (n.getSource(a, !0).endDrag(t, a), n.unpinSource()), {
                type: i.END_DRAG
            }
        }
    }
}