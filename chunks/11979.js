function(t, n, e) {
    "use strict";

    function r(t) {
        return !!(t && t.then && "function" == typeof t.then)
    }
    e.r(n), e.d(n, {
        isThenable: function() {
            return r
        }
    })
}