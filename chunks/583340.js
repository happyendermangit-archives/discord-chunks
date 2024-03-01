function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        isBlockedByProxyErrorCode: function() {
            return o
        }
    });
    var t = E("49111");

    function o(e) {
        var _;
        return !e.ok && (null === (_ = e.body) || void 0 === _ ? void 0 : _.code) === t.AbortCodes.BLOCKED_BY_PROXY
    }
}