function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i = n("884691");

    function l(e) {
        let t = null == e ? void 0 : e.getBoundingClientRect(),
            n = null == t ? void 0 : t.left,
            l = null == t ? void 0 : t.top,
            a = (0, i.useMemo)(() => null != n && null != l ? {
                x: n,
                y: l
            } : null, [n, l]);
        return a
    }
}