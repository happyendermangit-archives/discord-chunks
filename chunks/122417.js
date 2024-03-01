function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        queueResizeObserver: function() {
            return i
        }
    });
    var r = n("101330"),
        i = function(t) {
            (0, r.queueMicroTask)(function() {
                requestAnimationFrame(t)
            })
        }
}