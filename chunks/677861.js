function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("29570"),
        o = n("374550");

    function i(e) {
        var t, n;
        return t = (0, o.isIOS)() ? r.EmbeddedActivitySupportedPlatforms.IOS : (0, o.isAndroid)() ? r.EmbeddedActivitySupportedPlatforms.ANDROID : r.EmbeddedActivitySupportedPlatforms.WEB, null !== (n = null == e ? void 0 : e.includes(t)) && void 0 !== n && n
    }
}