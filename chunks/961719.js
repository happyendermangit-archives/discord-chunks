function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useConnectDragSource: function() {
            return a
        },
        useConnectDragPreview: function() {
            return i
        }
    });
    var r = n("884691");

    function a(e) {
        return (0, r.useMemo)(function() {
            return e.hooks.dragSource()
        }, [e])
    }

    function i(e) {
        return (0, r.useMemo)(function() {
            return e.hooks.dragPreview()
        }, [e])
    }
}