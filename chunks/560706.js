function(t, e, n) {
    var r = n("196322"),
        i = n("443735"),
        a = n("402428"),
        o = n("830911"),
        s = n("406705"),
        u = n("828091");
    t.exports = function(t, e, n) {
        e = r(e, t);
        for (var c = -1, l = e.length, d = !1; ++c < l;) {
            var f = u(e[c]);
            if (!(d = null != t && n(t, f))) break;
            t = t[f]
        }
        return d || ++c != l ? d : !!(l = null == t ? 0 : t.length) && s(l) && o(f, l) && (a(t) || i(t))
    }
}