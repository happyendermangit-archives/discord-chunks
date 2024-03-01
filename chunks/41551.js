function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        queueResizeObserver: function() {
            return a
        }
    });
    var r = n("455369"),
        a = function(e) {
            (0, r.queueMicroTask)(function() {
                requestAnimationFrame(e)
            })
        }
}