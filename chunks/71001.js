function(e, t, n) {
    "use strict";
    var r = n("911718")("%TypeError%"),
        i = n("228140"),
        o = n("970788"),
        s = n("583608");
    e.exports = function(e, t, n) {
        if ("Object" !== s(e)) throw new r("Assertion failed: Type(O) is not Object");
        if (!i(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        return o(e, t, {
            "[[Configurable]]": !0,
            "[[Enumerable]]": !0,
            "[[Value]]": n,
            "[[Writable]]": !0
        })
    }
}