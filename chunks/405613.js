function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("134432"),
        r = n("981631");

    function s(e, t) {
        let n;
        if (null == e.image) return null;
        null == t && (t = window.screen.width * (0, i.getDevicePixelRatio)()), t = (0, i.getBestMediaProxySize)(t);
        let s = window.GLOBAL_ENV.CDN_HOST;
        if (null != s) {
            var a;
            n = "".concat((a = "https:", "https:"), "//").concat(s, "/guild-events/").concat(e.id, "/").concat(e.image)
        } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + r.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
        return n += "?size=".concat(t)
    }
}