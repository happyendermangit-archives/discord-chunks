function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("470079");

    function r(e) {
        let t = null == e ? void 0 : e.getBoundingClientRect(),
            n = null == t ? void 0 : t.left,
            r = null == t ? void 0 : t.top;
        return (0, i.useMemo)(() => null != n && null != r ? {
            x: n,
            y: r
        } : null, [n, r])
    }
}