function(e, t, n) {
    "use strict";

    function r() {
        return (r = Object.assign ? Object.assign.bind() : function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}