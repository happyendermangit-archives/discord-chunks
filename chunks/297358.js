function(e, t, n) {
    "use strict";
    var r = n("81021")("%TypeError%"),
        i = n("828148"),
        a = n("379284"),
        o = n("632384");
    e.exports = function(e, t, n) {
        if ("Object" !== o(e)) throw new r("Assertion failed: Type(O) is not Object");
        if (!i(t)) throw new r("Assertion failed: IsPropertyKey(P) is not true");
        return a(e, t, {
            "[[Configurable]]": !0,
            "[[Enumerable]]": !0,
            "[[Value]]": n,
            "[[Writable]]": !0
        })
    }
}