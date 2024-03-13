function(t, r, e) {
    "use strict";
    var n = e("649675"),
        o = TypeError;
    t.exports = function(t, r) {
        if (!delete t[r]) throw o("Cannot delete property " + n(r) + " of " + n(t))
    }
}