function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n)
    }

    function o(e) {
        return "home" === e || "browse" === e || "customize" === e || "guide" === e
    }
    n.r(t), n.d(t, {
        isStaticRouteIconType: function() {
            return o
        },
        smartOutput: function() {
            return r
        }
    })
}