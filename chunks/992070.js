function(e, t, n) {
    "use strict";
    var r = n("911718")("%TypeError%"),
        i = n("825089"),
        o = n("228140"),
        s = n("583608");
    e.exports = function(e, t) {
        if ("Object" !== s(e)) throw new r("Assertion failed: Type(O) is not Object");
        if (!o(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true, got " + i(t));
        return e[t]
    }
}