function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useConnectDragSource: function() {
            return i
        },
        useConnectDragPreview: function() {
            return o
        }
    });
    var r = n("884691");

    function i(e) {
        return (0, r.useMemo)(function() {
            return e.hooks.dragSource()
        }, [e])
    }

    function o(e) {
        return (0, r.useMemo)(function() {
            return e.hooks.dragPreview()
        }, [e])
    }
}