function(t) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, a = []; ++n < r;) {
            var o = t[n];
            e(o, n, t) && (a[i++] = o)
        }
        return a
    }
}