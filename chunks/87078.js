function(t, r, n) {
    "use strict";
    var e = n("64980"),
        i = n("116180"),
        u = Math.floor,
        o = e("".charAt),
        c = e("".replace),
        a = e("".slice),
        s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        f = /\$([$&'`]|\d{1,2})/g;
    t.exports = function(t, r, n, e, l, p) {
        var v = n + t.length,
            x = e.length,
            h = f;
        return void 0 !== l && (l = i(l), h = s), c(p, h, function(i, c) {
            var s;
            switch (o(c, 0)) {
                case "$":
                    return "$";
                case "&":
                    return t;
                case "`":
                    return a(r, 0, n);
                case "'":
                    return a(r, v);
                case "<":
                    s = l[a(c, 1, -1)];
                    break;
                default:
                    var f = +c;
                    if (0 === f) return i;
                    if (f > x) {
                        var p = u(f / 10);
                        if (0 === p) return i;
                        if (p <= x) return void 0 === e[p - 1] ? o(c, 1) : e[p - 1] + o(c, 1);
                        return i
                    }
                    s = e[f - 1]
            }
            return void 0 === s ? "" : s
        })
    }
}