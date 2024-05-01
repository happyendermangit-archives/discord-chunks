function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("911969"),
        r = n("358085");

    function a(e) {
        var t;
        let n;
        return n = (0, r.isIOS)() ? i.EmbeddedActivitySupportedPlatforms.IOS : (0, r.isAndroid)() ? i.EmbeddedActivitySupportedPlatforms.ANDROID : i.EmbeddedActivitySupportedPlatforms.WEB, null !== (t = null == e ? void 0 : e.includes(n)) && void 0 !== t && t
    }
}