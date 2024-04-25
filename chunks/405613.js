function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var s = n("134432"),
        l = n("981631");

    function a(e, t) {
        let n;
        if (null == e.image) return null;
        null == t && (t = window.screen.width * (0, s.getDevicePixelRatio)()), t = (0, s.getBestMediaProxySize)(t);
        let a = window.GLOBAL_ENV.CDN_HOST;
        if (null != a) {
            var r;
            n = "".concat((r = "https:", "https:"), "//").concat(a, "/guild-events/").concat(e.id, "/").concat(e.image)
        } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + l.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
        return n += "?size=".concat(t)
    }
}