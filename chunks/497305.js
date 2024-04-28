function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSource: function() {
            return a
        }
    });
    var r = n("470079"),
        i = n("75924");

    function a(e, t, n) {
        var a = (0, r.useMemo)(function() {
            return new i.DragSourceImpl(e, t, n)
        }, [t, n]);
        return (0, r.useEffect)(function() {
            a.spec = e
        }, [e]), a
    }
}