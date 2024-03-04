function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedAccessErrorCode: function() {
            return s
        }
    });
    var i = n("49111");

    function s(e, t) {
        return e >= 400 && e < 500 && null != t && t >= i.AbortCodes.USER_LIMITED_ACCESS_DEFAULT && t <= i.AbortCodes.USER_LIMITED_ACCESS_MAX
    }
}