function(t, n, e) {
    var r = e("796581"),
        i = e("149912");
    t.exports = function t(n, e, o, s, c) {
        var a = -1,
            u = n.length;
        for (o || (o = i), c || (c = []); ++a < u;) {
            var _ = n[a];
            e > 0 && o(_) ? e > 1 ? t(_, e - 1, o, s, c) : r(c, _) : !s && (c[c.length] = _)
        }
        return c
    }
}