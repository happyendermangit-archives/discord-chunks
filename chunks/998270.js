function(t, r, n) {
    "use strict";
    var e = n("681802"),
        i = String;
    t.exports = function(t) {
        if ("Symbol" === e(t)) throw TypeError("Cannot convert a Symbol value to a string");
        return i(t)
    }
}