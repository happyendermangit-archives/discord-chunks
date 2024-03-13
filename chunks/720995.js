function(t, r, e) {
    t.exports = function(t, r) {
        for (var e = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++e < n;) {
            var a = t[e];
            r(a, e, t) && (i[o++] = a)
        }
        return i
    }
}