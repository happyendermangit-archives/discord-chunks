function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("798609");

    function s(e) {
        switch (e) {
            case "android":
                return i.EmbeddedActivitySupportedPlatforms.ANDROID;
            case "ios":
                return i.EmbeddedActivitySupportedPlatforms.IOS;
            default:
                return i.EmbeddedActivitySupportedPlatforms.WEB
        }
    }
}