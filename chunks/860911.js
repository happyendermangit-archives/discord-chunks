function(_, E, e) {
    "use strict";

    function I(_) {
        let E = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
            I = null != window.GLOBAL_ENV.WEBAPP_ENDPOINT ? window.GLOBAL_ENV.WEBAPP_ENDPOINT : "",
            o = null != _ ? "?redirect_to=".concat(encodeURIComponent(_)) : "";
        return 0 !== e.length && (e = 0 === o.length ? "?".concat(e) : "&".concat(e)), "".concat(E ? I : "", "/login").concat(o).concat(e)
    }
    e.r(E), e.d(E, {
        getLoginPath: function() {
            return I
        },
        wrapPaths: function() {
            return o
        }
    }), e("47120");

    function o(_, E) {
        let e = {};
        for (let I of Object.keys(_)) {
            let o = _[I];
            if ("function" != typeof o) {
                e[I] = o;
                continue
            }
            e[I] = function() {
                for (var _ = arguments.length, e = Array(_), I = 0; I < _; I++) e[I] = arguments[I];
                return o(... function(_, E) {
                    return _.map(_ => null == _ ? _ : null == E ? encodeURIComponent(_) : String(_).split("").map(_ => null != E && E.includes(_) ? _ : encodeURIComponent(_)).join(""))
                }(e, E))
            }
        }
        return e
    }
}