function(e, t, n) {
    var r = n("812639"),
        i = n("757209"),
        a = n("105890"),
        o = Math.ceil,
        s = Math.max;
    e.exports = function(e, t, n) {
        t = (n ? i(e, t, n) : void 0 === t) ? 1 : s(a(t), 0);
        var u = null == e ? 0 : e.length;
        if (!u || t < 1) return [];
        for (var c = 0, l = 0, d = Array(o(u / t)); c < u;) d[l++] = r(e, c, c += t);
        return d
    }
}