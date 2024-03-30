function(t, e, n) {
    "use strict";

    function r(t) {
        return !!(t && t.then && "function" == typeof t.then)
    }
    n.r(e), n.d(e, {
        isThenable: function() {
            return r
        }
    })
}