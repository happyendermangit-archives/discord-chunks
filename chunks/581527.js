function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = r("%String%"),
        a = r("%TypeError%");
    e.exports = function(e) {
        if ("symbol" == typeof e) throw new a("Cannot convert a Symbol value to a string");
        return i(e)
    }
}