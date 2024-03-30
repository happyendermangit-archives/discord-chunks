function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedAccessErrorCode: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e, t) {
        return e >= 400 && e < 500 && null != t && t >= r.AbortCodes.USER_LIMITED_ACCESS_DEFAULT && t <= r.AbortCodes.USER_LIMITED_ACCESS_MAX
    }
}