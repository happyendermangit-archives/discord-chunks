function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = e[t];
        return null == r ? n ? "".concat(e.any, " (any)") : "100" : r.toString()
    }

    function o(e, t) {
        var n = e[t];
        return null == n ? e.any : n
    }
    n.r(t), n.d(t, {
        formatSinkWantAsInt: function() {
            return o
        },
        formatSinkWantStat: function() {
            return r
        }
    })
}