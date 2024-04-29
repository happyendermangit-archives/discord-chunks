function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragType: function() {
            return a
        }
    });
    var r = n("573654"),
        i = n("470079");

    function a(e) {
        return (0, i.useMemo)(function() {
            var t = e.type;
            return (0, r.invariant)(null != t, "spec.type must be defined"), t
        }, [e])
    }
}