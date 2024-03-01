function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPublishDragSource: function() {
            return a
        }
    });
    var r = n("897345");

    function a(e) {
        return function() {
            if (e.getMonitor().isDragging()) return {
                type: r.PUBLISH_DRAG_SOURCE
            }
        }
    }
}