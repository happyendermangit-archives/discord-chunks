function(t, r, n) {
    "use strict";
    var e = n("339718"),
        o = n("980855"),
        i = n("49693");
    t.exports = function(t) {
        for (var r = e(this), n = i(r), u = arguments.length, f = o(u > 1 ? arguments[1] : void 0, n), c = u > 2 ? arguments[2] : void 0, a = void 0 === c ? n : o(c, n); a > f;) r[f++] = t;
        return r
    }
}