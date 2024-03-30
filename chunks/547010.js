function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedAccessErrorCode: function() {
            return r
        }
    });
    var i = n("981631");

    function r(e, t) {
        return 403 === e && null != t && t >= i.AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && t <= i.AbortCodes.GUILD_LIMITED_ACCESS_MAX
    }
}