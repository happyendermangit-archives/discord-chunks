function(t, r, n) {
    "use strict";
    var e = n("926515"),
        o = n("622281"),
        i = n("323979"),
        u = n("995739"),
        c = n("337856"),
        s = n("641236"),
        f = TypeError,
        a = s("toPrimitive");
    t.exports = function(t, r) {
        if (!o(t) || i(t)) return t;
        var n, s = u(t, a);
        if (s) {
            if (void 0 === r && (r = "default"), !o(n = e(s, t, r)) || i(n)) return n;
            throw f("Can't convert object to primitive value")
        }
        return void 0 === r && (r = "number"), c(t, r)
    }
}