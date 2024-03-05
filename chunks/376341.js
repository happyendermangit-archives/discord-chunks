function(e, t, r) {
    var n = r("626785"),
        u = r("809408"),
        a = r("168850"),
        o = r("446288"),
        i = r("330124"),
        s = r("701389"),
        l = r("702820"),
        c = r("552647"),
        f = l(function(e, t) {
            var r = {};
            if (null == e) return r;
            var l = !1;
            t = n(t, function(t) {
                return t = o(t, e), l || (l = t.length > 1), t
            }), i(e, c(e), r), l && (r = u(r, 7, s));
            for (var f = t.length; f--;) a(r, t[f]);
            return r
        });
    e.exports = f
}