function(t, e, s) {
    "use strict";
    var r = s("911718"),
        i = r("%Symbol.species%", !0),
        n = r("%TypeError%"),
        c = s("940966"),
        o = s("992070"),
        f = s("477733"),
        u = s("350421"),
        a = s("583608"),
        d = s("610330");
    t.exports = function(t, e) {
        if (!d(e) || e < 0) throw new n("Assertion failed: length must be an integer >= 0");
        if (!f(t)) return c(e);
        var s = o(t, "constructor");
        if (i && "Object" === a(s) && null === (s = o(s, i)) && (s = void 0), void 0 === s) return c(e);
        if (!u(s)) throw new n("C must be a constructor");
        return new s(e)
    }
}