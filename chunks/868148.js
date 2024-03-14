function(e, a, t) {
    var s = t("728110"),
        d = t("705646");
    e.exports = function e(a, t, n, c, i) {
        var r = -1,
            o = a.length;
        for (n || (n = d), i || (i = []); ++r < o;) {
            var l = a[r];
            t > 0 && n(l) ? t > 1 ? e(l, t - 1, n, c, i) : s(i, l) : !c && (i[i.length] = l)
        }
        return i
    }
}