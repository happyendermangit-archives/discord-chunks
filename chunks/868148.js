function(e, a, t) {
    var d = t("728110"),
        s = t("705646");
    e.exports = function e(a, t, n, c, i) {
        var r = -1,
            o = a.length;
        for (n || (n = s), i || (i = []); ++r < o;) {
            var f = a[r];
            t > 0 && n(f) ? t > 1 ? e(f, t - 1, n, c, i) : d(i, f) : !c && (i[i.length] = f)
        }
        return i
    }
}