function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("281767");

    function o(e) {
        var t = window.GLOBAL_ENV,
            n = t.CDN_HOST;
        return "development" !== t.PROJECT_ENV ? "".concat(location.protocol, "//").concat(n).concat(r.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(r.Endpoints.SOUNDBOARD_SOUND(e))
    }
}