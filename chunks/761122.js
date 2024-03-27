function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("911969");

    function r(e) {
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