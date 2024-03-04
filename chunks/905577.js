function(e, t, n) {
    var r = n("446288"),
        i = n("754076");
    e.exports = function(e, t) {
        t = r(t, e);
        for (var n = 0, o = t.length; null != e && n < o;) e = e[i(t[n++])];
        return n && n == o ? e : void 0
    }
}