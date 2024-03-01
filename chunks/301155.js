function(t, e, s) {
    "use strict";
    var r = s("911718"),
        i = r("%TypeError%"),
        n = r("%Number%"),
        c = s("226797"),
        o = s("430344"),
        f = s("610760");
    t.exports = function(t) {
        var e = c(t) ? t : o(t, n);
        if ("symbol" == typeof e) throw new i("Cannot convert a Symbol value to a number");
        if ("bigint" == typeof e) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
        return "string" == typeof e ? f(e) : n(e)
    }
}