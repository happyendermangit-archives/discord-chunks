function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        queueResizeObserver: function() {
            return i
        }
    });
    var n = r("194530"),
        i = function(e) {
            (0, n.queueMicroTask)(function() {
                requestAnimationFrame(e)
            })
        }
}