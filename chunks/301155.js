function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = r("%TypeError%"),
        o = r("%Number%"),
        s = n("226797"),
        a = n("430344"),
        c = n("610760");
    e.exports = function(e) {
        var t = s(e) ? e : a(e, o);
        if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
        if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
        return "string" == typeof t ? c(t) : o(t)
    }
}