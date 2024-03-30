function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("358085");

    function r() {
        let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            r = window.GLOBAL_ENV.INVITE_HOST;
        return (0, i.isAndroid)() ? (r = location.host, e = "/invite/".concat(t)) : e = "/".concat(t), "".concat(n ? "".concat(location.protocol, "//") : "").concat(r).concat(e)
    }
}