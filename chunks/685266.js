function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = r("%Symbol.species%", !0),
        o = r("%TypeError%"),
        s = n("940966"),
        a = n("992070"),
        c = n("477733"),
        u = n("350421"),
        d = n("583608"),
        l = n("610330");
    e.exports = function(e, t) {
        if (!l(t) || t < 0) throw new o("Assertion failed: length must be an integer >= 0");
        if (!c(e)) return s(t);
        var n = a(e, "constructor");
        if (i && "Object" === d(n) && null === (n = a(n, i)) && (n = void 0), void 0 === n) return s(t);
        if (!u(n)) throw new o("C must be a constructor");
        return new n(t)
    }
}