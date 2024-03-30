function(t, e, n) {
    var r = n("796581"),
        i = n("149912");
    t.exports = function t(e, n, o, s, c) {
        var a = -1,
            u = e.length;
        for (o || (o = i), c || (c = []); ++a < u;) {
            var _ = e[a];
            n > 0 && o(_) ? n > 1 ? t(_, n - 1, o, s, c) : r(c, _) : !s && (c[c.length] = _)
        }
        return c
    }
}