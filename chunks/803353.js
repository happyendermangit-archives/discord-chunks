function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return a
        }
    });
    var n = i("798609"),
        l = i("773336");

    function a(t) {
        var e;
        let i;
        return i = (0, l.isIOS)() ? n.EmbeddedActivitySupportedPlatforms.IOS : (0, l.isAndroid)() ? n.EmbeddedActivitySupportedPlatforms.ANDROID : n.EmbeddedActivitySupportedPlatforms.WEB, null !== (e = null == t ? void 0 : t.includes(i)) && void 0 !== e && e
    }
}