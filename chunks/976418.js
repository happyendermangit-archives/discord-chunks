function(t, r, n) {
    "use strict";
    var e = n("175440"),
        o = Math.floor,
        i = function(t, r) {
            var n = t.length,
                c = o(n / 2);
            return n < 8 ? u(t, r) : f(t, i(e(t, 0, c), r), i(e(t, c), r), r)
        },
        u = function(t, r) {
            for (var n, e, o = t.length, i = 1; i < o;) {
                for (e = i, n = t[i]; e && r(t[e - 1], n) > 0;) t[e] = t[--e];
                e !== i++ && (t[e] = n)
            }
            return t
        },
        f = function(t, r, n, e) {
            for (var o = r.length, i = n.length, u = 0, f = 0; u < o || f < i;) t[u + f] = u < o && f < i ? 0 >= e(r[u], n[f]) ? r[u++] : n[f++] : u < o ? r[u++] : n[f++];
            return t
        };
    t.exports = i
}