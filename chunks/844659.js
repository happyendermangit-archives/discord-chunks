function(e, t, n) {
    "use strict";

    function i(e, t, n) {
        return "string" == typeof e.content || void 0 === e.content ? e.content : t(e.content, n)
    }

    function l(e) {
        return "home" === e || "browse" === e || "customize" === e || "guide" === e
    }
    n.r(t), n.d(t, {
        smartOutput: function() {
            return i
        },
        isStaticRouteIconType: function() {
            return l
        }
    })
}