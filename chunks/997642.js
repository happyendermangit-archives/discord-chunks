function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isBlockedByProxyErrorCode: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e) {
        var t;
        return !e.ok && (null === (t = e.body) || void 0 === t ? void 0 : t.code) === r.AbortCodes.BLOCKED_BY_PROXY
    }
}