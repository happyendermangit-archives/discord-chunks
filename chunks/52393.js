function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("773336");

    function s() {
        let e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            s = window.GLOBAL_ENV.INVITE_HOST;
        return (0, i.isAndroid)() ? (s = location.host, e = "/invite/".concat(t)) : e = "/".concat(t), "".concat(n ? "".concat(location.protocol, "//") : "").concat(s).concat(e)
    }
}