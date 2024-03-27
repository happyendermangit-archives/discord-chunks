function(t, e, r) {
    "use strict";
    var n = r("354848"),
        o = String,
        i = TypeError;
    t.exports = function(t) {
        if ("object" == typeof t || n(t)) return t;
        throw i("Can't set " + o(t) + " as a prototype")
    }
}