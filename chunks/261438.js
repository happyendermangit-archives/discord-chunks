function(t, e, n) {
    "use strict";

    function r() {
        return (r = Object.assign ? Object.assign.bind() : function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }).apply(this, arguments)
    }
    n.r(e), n.d(e, {
        default: function() {
            return r
        }
    })
}