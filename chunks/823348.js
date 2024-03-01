function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedAccessErrorCode: function() {
            return i
        }
    });
    var s = n("49111");

    function i(e, t) {
        return e >= 400 && e < 500 && null != t && t >= s.AbortCodes.USER_LIMITED_ACCESS_DEFAULT && t <= s.AbortCodes.USER_LIMITED_ACCESS_MAX
    }
}