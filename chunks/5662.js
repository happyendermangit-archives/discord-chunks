function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDropTarget: function() {
            return o
        }
    });
    var r = n("884691"),
        i = n("598085");

    function o(e, t) {
        var n = (0, r.useMemo)(function() {
            return new i.DropTargetImpl(e, t)
        }, [t]);
        return (0, r.useEffect)(function() {
            n.spec = e
        }, [e]), n
    }
}