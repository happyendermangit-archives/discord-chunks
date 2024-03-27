function(t, r, n) {
    "use strict";
    var e = n("581031"),
        o = n("740362"),
        i = n("299623"),
        u = n("953326").indexOf,
        c = n("624906"),
        s = e([].push);
    t.exports = function(t, r) {
        var n, e = i(t),
            f = 0,
            a = [];
        for (n in e) !o(c, n) && o(e, n) && s(a, n);
        for (; r.length > f;) o(e, n = r[f++]) && (~u(a, n) || s(a, n));
        return a
    }
}