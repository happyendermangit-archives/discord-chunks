function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("902735");

    function o(e, t) {
        if (null == t) return !0;
        if ("string" == typeof t) return e.includes(t);
        if ("object" != typeof t) return !1;
        var n = t[r.RPC_SCOPE_CONFIG.ANY],
            o = t[r.RPC_SCOPE_CONFIG.ALL];
        return !!(Array.isArray(n) && n.some(function(t) {
            return e.includes(t)
        }) || Array.isArray(o) && o.every(function(t) {
            return e.includes(t)
        })) || !1
    }
}