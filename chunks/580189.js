function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isBlockedByProxyErrorCode: function() {
            return r
        }
    });
    var i = n("981631");

    function r(e) {
        var t;
        return !e.ok && (null === (t = e.body) || void 0 === t ? void 0 : t.code) === i.AbortCodes.BLOCKED_BY_PROXY
    }
}