function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useDragType: function() {
            return o
        }
    });
    var r = n("900255"),
        i = n("884691");

    function o(e) {
        return (0, i.useMemo)(function() {
            var t = e.type;
            return (0, r.invariant)(null != t, "spec.type must be defined"), t
        }, [e])
    }
}