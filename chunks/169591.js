function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSourceMonitor: function() {
            return o
        }
    });
    var r = n("470079"),
        i = n("952969"),
        a = n("996485");

    function o() {
        var e = (0, a.useDragDropManager)();
        return (0, r.useMemo)(function() {
            return new i.DragSourceMonitorImpl(e)
        }, [e])
    }
}