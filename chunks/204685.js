function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isLimitedAccessErrorCode: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e, t) {
        return 403 === e && null != t && t >= r.AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && t <= r.AbortCodes.GUILD_LIMITED_ACCESS_MAX
    }
}