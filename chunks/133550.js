function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSourceMonitor: function() {
            return s
        }
    });
    var r = n("884691"),
        i = n("29150"),
        o = n("119076");

    function s() {
        var e = (0, o.useDragDropManager)();
        return (0, r.useMemo)(function() {
            return new i.DragSourceMonitorImpl(e)
        }, [e])
    }
}