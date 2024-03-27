function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
        return (e < 0 ? "-" : "") + n
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}