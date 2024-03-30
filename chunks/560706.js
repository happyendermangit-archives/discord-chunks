function(t, e, n) {
    var r = n("196322"),
        i = n("443735"),
        a = n("402428"),
        o = n("830911"),
        s = n("406705"),
        u = n("828091");
    t.exports = function(t, e, n) {
        e = r(e, t);
        for (var l = -1, c = e.length, d = !1; ++l < c;) {
            var f = u(e[l]);
            if (!(d = null != t && n(t, f))) break;
            t = t[f]
        }
        return d || ++l != c ? d : !!(c = null == t ? 0 : t.length) && s(c) && o(f, c) && (a(t) || i(t))
    }
}