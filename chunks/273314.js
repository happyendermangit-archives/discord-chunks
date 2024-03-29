function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = r("%TypeError%"),
        a = r("%Number%"),
        o = n("814277"),
        s = n("444685"),
        u = n("537631");
    e.exports = function(e) {
        var t = o(e) ? e : s(e, a);
        if ("symbol" == typeof t) throw new i("Cannot convert a Symbol value to a number");
        if ("bigint" == typeof t) throw new i("Conversion from 'BigInt' to 'number' is not allowed.");
        return "string" == typeof t ? u(t) : a(t)
    }
}