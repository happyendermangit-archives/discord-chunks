function(e, t, n) {
    "use strict";
    n("781738"), n("424973");
    e.exports = function(e, t, n, r) {
        t = t || "&", n = n || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var i = /\+/g;
        e = e.split(t);
        var o = 1e3;
        r && "number" == typeof r.maxKeys && (o = r.maxKeys);
        var s = e.length;
        o > 0 && s > o && (s = o);
        for (var c = 0; c < s; ++c) {
            var l, u, d, p, f, m, h = e[c].replace(i, "%20"),
                v = h.indexOf(n);
            if (v >= 0 ? (d = h.substr(0, v), p = h.substr(v + 1)) : (d = h, p = ""), f = decodeURIComponent(d), m = decodeURIComponent(p), l = a, u = f, Object.prototype.hasOwnProperty.call(l, u)) Array.isArray(a[f]) ? a[f].push(m) : a[f] = [a[f], m];
            else a[f] = m
        }
        return a
    }
}