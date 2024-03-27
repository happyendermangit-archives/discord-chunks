function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        getActiveTransaction: function() {
            return i
        }
    });
    var r = n("876122");

    function i(t) {
        return (t || (0, r.getCurrentHub)()).getScope().getTransaction()
    }
}