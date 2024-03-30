function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("470079");

    function o(e) {
        var t = null == e ? void 0 : e.getBoundingClientRect(),
            n = null == t ? void 0 : t.left,
            o = null == t ? void 0 : t.top;
        return (0, r.useMemo)(function() {
            return null != n && null != o ? {
                x: n,
                y: o
            } : null
        }, [n, o])
    }
}