function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useConnectDragPreview: function() {
            return a
        },
        useConnectDragSource: function() {
            return i
        }
    });
    var r = n("470079");

    function i(e) {
        return (0, r.useMemo)(function() {
            return e.hooks.dragSource()
        }, [e])
    }

    function a(e) {
        return (0, r.useMemo)(function() {
            return e.hooks.dragPreview()
        }, [e])
    }
}