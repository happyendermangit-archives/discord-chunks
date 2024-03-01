function(t, r, n) {
    var e = n("446288"),
        o = n("564414"),
        i = n("725502"),
        u = n("476540"),
        c = n("136047"),
        a = n("754076");
    t.exports = function(t, r, n) {
        r = e(r, t);
        for (var f = -1, s = r.length, p = !1; ++f < s;) {
            var v = a(r[f]);
            if (!(p = null != t && n(t, v))) break;
            t = t[v]
        }
        return p || ++f != s ? p : !!(s = null == t ? 0 : t.length) && c(s) && u(v, s) && (i(t) || o(t))
    }
}