function(e, t, n) {
    e.exports = function(e, t, n, r) {
        var i = -1,
            o = null == e ? 0 : e.length;
        for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
        return n
    }
}