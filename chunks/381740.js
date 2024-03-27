function(t, r, n) {
    "use strict";
    var e = n("740362"),
        o = n("666061"),
        i = n("347722"),
        u = n("97131");
    t.exports = function(t, r, n) {
        for (var c = o(r), s = u.f, f = i.f, a = 0; a < c.length; a++) {
            var p = c[a];
            !e(t, p) && !(n && e(n, p)) && s(t, p, f(r, p))
        }
    }
}