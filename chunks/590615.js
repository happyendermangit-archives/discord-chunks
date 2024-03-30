function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return c
        }
    });
    var n = r("896299"),
        o = r("281767");

    function c(e, t) {
        if (null == e.image) return null;
        null == t && (t = window.screen.width * (0, n.getDevicePixelRatio)()), t = (0, n.getBestMediaProxySize)(t);
        var r, c, i = window.GLOBAL_ENV.CDN_HOST;
        return r = (null != i ? "".concat((c = "https:", "https:"), "//").concat(i, "/guild-events/").concat(e.id, "/").concat(e.image) : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + o.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png")) + "?size=".concat(t)
    }
}