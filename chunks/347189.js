function(t, e, n) {
    var r = n("585606"),
        i = n("443735"),
        a = n("402428"),
        o = n("207757"),
        s = n("830911"),
        u = n("556868"),
        c = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = a(t),
            l = !n && i(t),
            d = !n && !l && o(t),
            f = !n && !l && !d && u(t),
            p = n || l || d || f,
            h = p ? r(t.length, String) : [],
            _ = h.length;
        for (var g in t)(e || c.call(t, g)) && !(p && ("length" == g || d && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, _))) && h.push(g);
        return h
    }
}