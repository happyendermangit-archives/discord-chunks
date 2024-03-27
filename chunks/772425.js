function(t, r, n) {
    "use strict";
    var e = n("933676"),
        o = n("938507"),
        i = TypeError;
    t.exports = function(t) {
        if (e(t)) return t;
        throw i(o(t) + " is not a constructor")
    }
}