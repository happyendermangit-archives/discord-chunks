function(e, t, n) {
    var r = n("417849"),
        i = n("427507"),
        o = n("111071"),
        s = Math.ceil,
        a = Math.max;
    e.exports = function(e, t, n) {
        t = (n ? i(e, t, n) : void 0 === t) ? 1 : a(o(t), 0);
        var c = null == e ? 0 : e.length;
        if (!c || t < 1) return [];
        for (var u = 0, d = 0, l = Array(s(c / t)); u < c;) l[d++] = r(e, u, u += t);
        return l
    }
}