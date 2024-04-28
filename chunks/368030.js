function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDropTarget: function() {
            return a
        }
    });
    var r = n("470079"),
        i = n("41276");

    function a(e, t) {
        var n = (0, r.useMemo)(function() {
            return new i.DropTargetImpl(e, t)
        }, [t]);
        return (0, r.useEffect)(function() {
            n.spec = e
        }, [e]), n
    }
}