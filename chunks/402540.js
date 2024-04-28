function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAccept: function() {
            return a
        }
    });
    var r = n("573654"),
        i = n("470079");

    function a(e) {
        var t = e.accept;
        return (0, i.useMemo)(function() {
            return (0, r.invariant)(null != e.accept, "accept must be defined"), Array.isArray(t) ? t : [t]
        }, [t])
    }
}