function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAccept: function() {
            return o
        }
    });
    var r = n("900255"),
        i = n("884691");

    function o(e) {
        var t = e.accept;
        return (0, i.useMemo)(function() {
            return (0, r.invariant)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t]
        }, [t])
    }
}