function(t, r, n) {
    "use strict";
    var e = n("649675"),
        i = TypeError;
    t.exports = function(t, r) {
        if (!delete t[r]) throw i("Cannot delete property " + e(r) + " of " + e(t))
    }
}