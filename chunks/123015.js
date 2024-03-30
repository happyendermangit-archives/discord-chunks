function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("29570");

    function o(e) {
        switch (e) {
            case "android":
                return r.EmbeddedActivitySupportedPlatforms.ANDROID;
            case "ios":
                return r.EmbeddedActivitySupportedPlatforms.IOS;
            default:
                return r.EmbeddedActivitySupportedPlatforms.WEB
        }
    }
}