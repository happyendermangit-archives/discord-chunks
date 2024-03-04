function(e, t, n) {
    e.exports = function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
            var s = e[n];
            t(s, n, e) && (o[i++] = s)
        }
        return o
    }
}