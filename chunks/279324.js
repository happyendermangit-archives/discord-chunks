function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("374550");

    function o() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            o = window.GLOBAL_ENV.INVITE_HOST;
        return (0, r.isAndroid)() ? (o = location.host, e = "/invite/".concat(t)) : e = "/".concat(t), "".concat(n ? "".concat(location.protocol, "//") : "").concat(o).concat(e)
    }
}