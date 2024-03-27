function(e, t, n) {
    var r = n("429614"),
        i = n("483506");
    e.exports = function e(t, n, a, o, s) {
        var u = -1,
            c = t.length;
        for (a || (a = i), s || (s = []); ++u < c;) {
            var l = t[u];
            n > 0 && a(l) ? n > 1 ? e(l, n - 1, a, o, s) : r(s, l) : !o && (s[s.length] = l)
        }
        return s
    }
}