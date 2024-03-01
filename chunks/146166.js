function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAccept: function() {
            return i
        }
    });
    var r = n("900255"),
        a = n("884691");

    function i(e) {
        var t = e.accept;
        return (0, a.useMemo)(function() {
            return (0, r.invariant)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t]
        }, [t])
    }
}