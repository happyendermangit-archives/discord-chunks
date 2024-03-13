function(t, r, e) {
    "use strict";
    var n = TypeError;
    t.exports = function(t, r) {
        if (t < r) throw n("Not enough arguments");
        return t
    }
}