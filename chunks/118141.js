function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        queueResizeObserver: function() {
            return u
        }
    });
    var n = r("194530"),
        u = function(e) {
            (0, n.queueMicroTask)(function() {
                requestAnimationFrame(e)
            })
        }
}