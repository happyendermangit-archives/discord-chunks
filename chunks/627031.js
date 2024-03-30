function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n, r = null == t ? void 0 : null === (n = t.replace(/-/g, "_")) || void 0 === n ? void 0 : n.toUpperCase();
        if (null != r && r in e) return e[r]
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}