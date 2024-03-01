function(t, e, s) {
    "use strict";
    var r = s("911718"),
        i = r("%String%"),
        n = r("%TypeError%");
    t.exports = function(t) {
        if ("symbol" == typeof t) throw new n("Cannot convert a Symbol value to a string");
        return i(t)
    }
}