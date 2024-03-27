function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        queueResizeObserver: function() {
            return i
        }
    });
    var r = n("554887"),
        i = function(e) {
            (0, r.queueMicroTask)(function() {
                requestAnimationFrame(e)
            })
        }
}