function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getActiveTransaction: function() {
            return i
        }
    });
    var r = n("369590");

    function i(t) {
        let e = t || (0, r.getCurrentHub)(),
            n = e.getScope();
        return n.getTransaction()
    }
}