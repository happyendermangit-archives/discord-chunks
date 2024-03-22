function(e, a, t) {
    var d = t("728110"),
        s = t("705646");
    e.exports = function e(a, t, n, i, c) {
        var r = -1,
            o = a.length;
        for (n || (n = s), c || (c = []); ++r < o;) {
            var f = a[r];
            t > 0 && n(f) ? t > 1 ? e(f, t - 1, n, i, c) : d(c, f) : !i && (c[c.length] = f)
        }
        return c
    }
}