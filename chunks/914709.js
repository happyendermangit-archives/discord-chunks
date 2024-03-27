function(e, t, n) {
    var r = n("961123"),
        i = n("841566"),
        a = n("290677"),
        o = n("682653"),
        s = n("720815"),
        u = n("278757");
    e.exports = function(e, t, n) {
        t = r(t, e);
        for (var c = -1, l = t.length, d = !1; ++c < l;) {
            var f = u(t[c]);
            if (!(d = null != e && n(e, f))) break;
            e = e[f]
        }
        return d || ++c != l ? d : !!(l = null == e ? 0 : e.length) && s(l) && o(f, l) && (a(e) || i(e))
    }
}