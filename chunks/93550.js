function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var l = n("407063"),
        a = n("49111");

    function s(e, t) {
        let n;
        if (null == e.image) return null;
        null == t && (t = window.screen.width * (0, l.getDevicePixelRatio)()), t = (0, l.getBestMediaProxySize)(t);
        let s = window.GLOBAL_ENV.CDN_HOST;
        if (null != s) {
            var r;
            n = "".concat((r = "https:", "https:"), "//").concat(s, "/guild-events/").concat(e.id, "/").concat(e.image)
        } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + a.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
        return n += "?size=".concat(t)
    }
}