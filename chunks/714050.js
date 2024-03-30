function(t, e, n) {
    "use strict";
    var r = n("974971"),
        i = String;
    t.exports = function(t) {
        if ("Symbol" === r(t)) throw TypeError("Cannot convert a Symbol value to a string");
        return i(t)
    }
}