function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var l = n("884691");

    function i(e) {
        let t = null == e ? void 0 : e.getBoundingClientRect(),
            n = null == t ? void 0 : t.left,
            i = null == t ? void 0 : t.top,
            a = (0, l.useMemo)(() => null != n && null != i ? {
                x: n,
                y: i
            } : null, [n, i]);
        return a
    }
}