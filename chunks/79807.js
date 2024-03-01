function(t, r, n) {
    "use strict";
    var e = TypeError;
    t.exports = function(t, r) {
        if (t < r) throw e("Not enough arguments");
        return t
    }
}