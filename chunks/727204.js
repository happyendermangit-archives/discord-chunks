function(t, r, n) {
    "use strict";
    var e = n("125359"),
        o = n("649675"),
        i = TypeError;
    t.exports = function(t) {
        if (e(t)) return t;
        throw i(o(t) + " is not a function")
    }
}