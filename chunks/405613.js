function(e, l, t) {
    "use strict";
    t.r(l), t.d(l, {
        default: function() {
            return i
        }
    });
    var n = t("134432"),
        s = t("981631");

    function i(e, l) {
        let t;
        if (null == e.image) return null;
        null == l && (l = window.screen.width * (0, n.getDevicePixelRatio)()), l = (0, n.getBestMediaProxySize)(l);
        let i = window.GLOBAL_ENV.CDN_HOST;
        if (null != i) {
            var a;
            t = "".concat((a = "https:", "https:"), "//").concat(i, "/guild-events/").concat(e.id, "/").concat(e.image)
        } else t = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + s.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
        return t += "?size=".concat(l)
    }
}