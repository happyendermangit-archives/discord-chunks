function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        coercePlatformTypeToConsoleType: function() {
            return i
        }
    });
    var r = n("698779"),
        o = n("281767");

    function i(e) {
        switch (e) {
            case o.PlatformTypes.XBOX:
                return r.GameConsoleTypes.XBOX;
            case o.PlatformTypes.PLAYSTATION:
            case o.PlatformTypes.PLAYSTATION_STAGING:
                return r.GameConsoleTypes.PLAYSTATION;
            default:
                return null
        }
    }
}