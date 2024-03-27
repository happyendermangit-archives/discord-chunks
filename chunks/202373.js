function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        createPublishDragSource: function() {
            return i
        }
    });
    var r = n("964742");

    function i(e) {
        return function() {
            if (e.getMonitor().isDragging()) return {
                type: r.PUBLISH_DRAG_SOURCE
            }
        }
    }
}