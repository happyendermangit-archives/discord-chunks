function(t, e, n) {
    var r = n("585606"),
        i = n("443735"),
        a = n("402428"),
        o = n("207757"),
        s = n("830911"),
        u = n("556868"),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = a(t),
            c = !n && i(t),
            d = !n && !c && o(t),
            f = !n && !c && !d && u(t),
            p = n || c || d || f,
            h = p ? r(t.length, String) : [],
            _ = h.length;
        for (var g in t)(e || l.call(t, g)) && !(p && ("length" == g || d && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, _))) && h.push(g);
        return h
    }
}