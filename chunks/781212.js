function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            a = Object.keys(e);
        for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && (i[n] = e[n]);
        return i
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}