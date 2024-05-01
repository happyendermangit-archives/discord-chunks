function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        coercePlatformTypeToConsoleType: function() {
            return s
        }
    });
    var i = n("927923"),
        r = n("981631");

    function s(e) {
        switch (e) {
            case r.PlatformTypes.XBOX:
                return i.GameConsoleTypes.XBOX;
            case r.PlatformTypes.PLAYSTATION:
            case r.PlatformTypes.PLAYSTATION_STAGING:
                return i.GameConsoleTypes.PLAYSTATION;
            default:
                return null
        }
    }
}