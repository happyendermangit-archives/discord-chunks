function(t, e, n) {
    var r = n("196322"),
        i = n("828091");
    t.exports = function(t, e) {
        e = r(e, t);
        for (var n = 0, a = e.length; null != t && n < a;) t = t[i(e[n++])];
        return n && n == a ? t : void 0
    }
}