function(t, e, s) {
    "use strict";
    var r = s("911718")("%TypeError%"),
        i = s("71001"),
        n = s("228140"),
        c = s("583608");
    t.exports = function(t, e, s) {
        if ("Object" !== c(t)) throw new r("Assertion failed: Type(O) is not Object");
        if (!n(e)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        if (!i(t, e, s)) throw new r("unable to create data property")
    }
}