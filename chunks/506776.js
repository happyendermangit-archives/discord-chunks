function(e, t, n) {
    "use strict";
    n("781738"), n("424973");
    e.exports = function(e, t, n, r) {
        t = t || "&", n = n || "=";
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var o = /\+/g;
        e = e.split(t);
        var s = 1e3;
        r && "number" == typeof r.maxKeys && (s = r.maxKeys);
        var a = e.length;
        s > 0 && a > s && (a = s);
        for (var c = 0; c < a; ++c) {
            var u, d, l, f, p, h, v = e[c].replace(o, "%20"),
                g = v.indexOf(n);
            if (g >= 0 ? (l = v.substr(0, g), f = v.substr(g + 1)) : (l = v, f = ""), p = decodeURIComponent(l), h = decodeURIComponent(f), u = i, d = p, Object.prototype.hasOwnProperty.call(u, d)) Array.isArray(i[p]) ? i[p].push(h) : i[p] = [i[p], h];
            else i[p] = h
        }
        return i
    }
}