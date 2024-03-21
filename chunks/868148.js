function(e, a, t) {
    var s = t("728110"),
        d = t("705646");
    e.exports = function e(a, t, n, c, i) {
        var r = -1,
            o = a.length;
        for (n || (n = d), i || (i = []); ++r < o;) {
            var f = a[r];
            t > 0 && n(f) ? t > 1 ? e(f, t - 1, n, c, i) : s(i, f) : !c && (i[i.length] = f)
        }
        return i
    }
}