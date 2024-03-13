function(e, t, n) {
    var r = n("501870"),
        i = 4294967294,
        o = Math.floor,
        s = Math.min;
    e.exports = function(e, t, n, a) {
        var c = 0,
            u = null == e ? 0 : e.length;
        if (0 === u) return 0;
        for (var d = (t = n(t)) != t, l = null === t, f = r(t), p = void 0 === t; c < u;) {
            var h = o((c + u) / 2),
                v = n(e[h]),
                g = void 0 !== v,
                b = null === v,
                m = v == v,
                y = r(v);
            if (d) var x = a || m;
            else x = p ? m && (a || g) : l ? m && g && (a || !b) : f ? m && g && !b && (a || !y) : !b && !y && (a ? v <= t : v < t);
            x ? c = h + 1 : u = h
        }
        return s(u, i)
    }
}