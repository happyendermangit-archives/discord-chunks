function(e, t, n) {
    "use strict";

    function r() {
        var e = navigator.userAgentData;
        return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map(function(e) {
            return e.brand + "/" + e.version
        }).join(" ") : navigator.userAgent
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}