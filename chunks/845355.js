function(e, t, n) {
    var r = n("42848"),
        i = 4294967294,
        a = Math.floor,
        o = Math.min;
    e.exports = function(e, t, n, s) {
        var u = 0,
            c = null == e ? 0 : e.length;
        if (0 === c) return 0;
        for (var l = (t = n(t)) != t, d = null === t, f = r(t), p = void 0 === t; u < c;) {
            var h = a((u + c) / 2),
                m = n(e[h]),
                g = void 0 !== m,
                _ = null === m,
                b = m == m,
                v = r(m);
            if (l) var y = s || b;
            else y = p ? b && (s || g) : d ? b && g && (s || !_) : f ? b && g && !_ && (s || !v) : !_ && !v && (s ? m <= t : m < t);
            y ? u = h + 1 : c = h
        }
        return o(c, i)
    }
}