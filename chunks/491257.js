function(e) {
    "use strict";
    e.exports = function(e, t, n, r) {
        t = t || "&", n = n || "=";
        var i = {};
        if ("string" != typeof e || 0 === e.length) return i;
        var a = /\+/g;
        e = e.split(t);
        var o = 1e3;
        r && "number" == typeof r.maxKeys && (o = r.maxKeys);
        var s = e.length;
        o > 0 && s > o && (s = o);
        for (var u = 0; u < s; ++u) {
            var c, l, d, f, p, h, m = e[u].replace(a, "%20"),
                g = m.indexOf(n);
            if (g >= 0 ? (d = m.substr(0, g), f = m.substr(g + 1)) : (d = m, f = ""), p = decodeURIComponent(d), h = decodeURIComponent(f), c = i, l = p, Object.prototype.hasOwnProperty.call(c, l)) Array.isArray(i[p]) ? i[p].push(h) : i[p] = [i[p], h];
            else i[p] = h
        }
        return i
    }
}