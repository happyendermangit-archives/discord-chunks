function(t, r, n) {
    "use strict";
    var e = n("980855"),
        o = n("49693"),
        i = n("182867"),
        u = Array,
        f = Math.max;
    t.exports = function(t, r, n) {
        for (var c = o(t), a = e(r, c), s = e(void 0 === n ? c : n, c), y = u(f(s - a, 0)), h = 0; a < s; a++, h++) i(y, h, t[a]);
        return y.length = h, y
    }
}