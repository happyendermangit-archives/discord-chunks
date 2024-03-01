function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        isLimitedAccessErrorCode: function() {
            return o
        }
    });
    var t = E("49111");

    function o(e, _) {
        return 403 === e && null != _ && _ >= t.AbortCodes.GUILD_LIMITED_ACCESS_DEFAULT && _ <= t.AbortCodes.GUILD_LIMITED_ACCESS_MAX
    }
}