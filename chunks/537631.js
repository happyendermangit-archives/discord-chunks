function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = r("%Number%"),
        a = r("%RegExp%"),
        o = r("%TypeError%"),
        s = r("%parseInt%"),
        u = n("903390"),
        c = n("385097"),
        l = u("String.prototype.slice"),
        d = c(/^0b[01]+$/i),
        f = c(/^0o[0-7]+$/i),
        p = c(/^[-+]0x[0-9a-f]+$/i),
        h = c(new a("[\x85​￾]", "g")),
        m = n("761652"),
        g = n("632384");
    e.exports = function e(t) {
        if ("String" !== g(t)) throw new o("Assertion failed: `argument` is not a String");
        if (d(t)) return i(s(l(t, 2), 2));
        if (f(t)) return i(s(l(t, 2), 8));
        if (h(t) || p(t)) return NaN;
        var n = m(t);
        return n !== t ? e(n) : i(t)
    }
}