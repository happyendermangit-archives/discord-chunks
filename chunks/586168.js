function(e, t, n) {
    "use strict";

    function r(e, t) {
        return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}