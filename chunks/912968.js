function(e, t, n) {
    var r = n("484155"),
        i = n("841566"),
        a = n("290677"),
        o = n("551023"),
        s = n("682653"),
        u = n("454745"),
        c = Object.prototype.hasOwnProperty;
    e.exports = function(e, t) {
        var n = a(e),
            l = !n && i(e),
            d = !n && !l && o(e),
            f = !n && !l && !d && u(e),
            p = n || l || d || f,
            h = p ? r(e.length, String) : [],
            m = h.length;
        for (var g in e)(t || c.call(e, g)) && !(p && ("length" == g || d && ("offset" == g || "parent" == g) || f && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, m))) && h.push(g);
        return h
    }
}