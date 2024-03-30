function(t, e, r) {
    "use strict";
    var n = r("581031"),
        i = r("339718"),
        o = Math.floor,
        u = n("".charAt),
        c = n("".replace),
        a = n("".slice),
        s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        f = /\$([$&'`]|\d{1,2})/g;
    t.exports = function(t, e, r, n, l, v) {
        var p = r + t.length,
            d = n.length,
            x = f;
        return void 0 !== l && (l = i(l), x = s), c(v, x, function(i, c) {
            var s;
            switch (u(c, 0)) {
                case "$":
                    return "$";
                case "&":
                    return t;
                case "`":
                    return a(e, 0, r);
                case "'":
                    return a(e, p);
                case "<":
                    s = l[a(c, 1, -1)];
                    break;
                default:
                    var f = +c;
                    if (0 === f) return i;
                    if (f > d) {
                        var v = o(f / 10);
                        if (0 === v) return i;
                        if (v <= d) return void 0 === n[v - 1] ? u(c, 1) : n[v - 1] + u(c, 1);
                        return i
                    }
                    s = n[f - 1]
            }
            return void 0 === s ? "" : s
        })
    }
}