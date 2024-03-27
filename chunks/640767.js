function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = r("%Symbol.species%", !0),
        a = r("%TypeError%"),
        o = n("66034"),
        s = n("414916"),
        u = n("156700"),
        c = n("718129"),
        l = n("632384"),
        d = n("73871");
    e.exports = function(e, t) {
        if (!d(t) || t < 0) throw new a("Assertion failed: length must be an integer >= 0");
        if (!u(e)) return o(t);
        var n = s(e, "constructor");
        if (i && "Object" === l(n) && null === (n = s(n, i)) && (n = void 0), void 0 === n) return o(t);
        if (!c(n)) throw new a("C must be a constructor");
        return new n(t)
    }
}