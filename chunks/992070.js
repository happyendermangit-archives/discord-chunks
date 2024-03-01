function(t, e, s) {
    "use strict";
    var r = s("911718")("%TypeError%"),
        i = s("825089"),
        n = s("228140"),
        c = s("583608");
    t.exports = function(t, e) {
        if ("Object" !== c(t)) throw new r("Assertion failed: Type(O) is not Object");
        if (!n(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true, got " + i(e));
        return t[e]
    }
}