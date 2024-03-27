function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}