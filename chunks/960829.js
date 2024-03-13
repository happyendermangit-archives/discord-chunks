function(t, r, e) {
    var n = e("486835"),
        o = e("971433"),
        i = e("486036"),
        a = e("227290"),
        u = e("103451"),
        s = e("148807");
    t.exports = function(t, r, e) {
        r = n(r, t);
        for (var f = -1, c = r.length, l = !1; ++f < c;) {
            var h = s(r[f]);
            if (!(l = null != t && e(t, h))) break;
            t = t[h]
        }
        return l || ++f != c ? l : !!(c = null == t ? 0 : t.length) && u(c) && a(h, c) && (i(t) || o(t))
    }
}