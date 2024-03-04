function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragSource: function() {
            return o
        }
    });
    var r = n("884691"),
        i = n("184087");

    function o(e, t, n) {
        var o = (0, r.useMemo)(function() {
            return new i.DragSourceImpl(e, t, n)
        }, [t, n]);
        return (0, r.useEffect)(function() {
            o.spec = e
        }, [e]), o
    }
}