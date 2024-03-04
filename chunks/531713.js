function(e, t, n) {
    var r = n("446288"),
        i = n("564414"),
        o = n("725502"),
        s = n("476540"),
        a = n("136047"),
        c = n("754076");
    e.exports = function(e, t, n) {
        t = r(t, e);
        for (var u = -1, d = t.length, l = !1; ++u < d;) {
            var f = c(t[u]);
            if (!(l = null != e && n(e, f))) break;
            e = e[f]
        }
        return l || ++u != d ? l : !!(d = null == e ? 0 : e.length) && a(d) && s(f, d) && (o(e) || i(e))
    }
}