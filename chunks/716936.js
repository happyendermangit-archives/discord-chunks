function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = e.parentElement; null != n;) {
            if (n.classList.contains(t)) return n;
            n = n.parentElement
        }
        return null
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}