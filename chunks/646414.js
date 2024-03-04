function(e, t, n) {
    "use strict";
    var r = n("911718")("%TypeError%"),
        i = n("71001"),
        o = n("228140"),
        s = n("583608");
    e.exports = function(e, t, n) {
        if ("Object" !== s(e)) throw new r("Assertion failed: Type(O) is not Object");
        if (!o(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        if (!i(e, t, n)) throw new r("unable to create data property")
    }
}