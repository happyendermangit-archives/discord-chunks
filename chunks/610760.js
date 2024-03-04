function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = r("%Number%"),
        o = r("%RegExp%"),
        s = r("%TypeError%"),
        a = r("%parseInt%"),
        c = n("314970"),
        u = n("998645"),
        d = c("String.prototype.slice"),
        l = u(/^0b[01]+$/i),
        f = u(/^0o[0-7]+$/i),
        p = u(/^[-+]0x[0-9a-f]+$/i),
        h = u(new o("[\x85​￾]", "g")),
        v = n("418348"),
        g = n("583608");
    e.exports = function e(t) {
        if ("String" !== g(t)) throw new s("Assertion failed: `argument` is not a String");
        if (l(t)) return i(a(d(t, 2), 2));
        if (f(t)) return i(a(d(t, 2), 8));
        if (h(t) || p(t)) return NaN;
        var n = v(t);
        return n !== t ? e(n) : i(t)
    }
}