function(e, t, n) {
    var r = n("821164"),
        i = Object.prototype.hasOwnProperty;
    e.exports = function(e, t, n, a, o, s) {
        var u = 1 & n,
            c = r(e),
            l = c.length;
        if (l != r(t).length && !u) return !1;
        for (var d = l; d--;) {
            var f = c[d];
            if (!(u ? f in t : i.call(t, f))) return !1
        }
        var p = s.get(e);
        if (p && s.get(t)) return p == t;
        var h = !0;
        s.set(e, t), s.set(t, e);
        for (var m = u; ++d < l;) {
            var g = e[f = c[d]],
                _ = t[f];
            if (a) var b = u ? a(_, g, f, t, e, s) : a(g, _, f, e, t, s);
            if (!(void 0 === b ? g === _ || o(g, _, n, a, s) : b)) {
                h = !1;
                break
            }
            m || (m = "constructor" == f)
        }
        if (h && !m) {
            var v = e.constructor,
                y = t.constructor;
            v != y && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y) && (h = !1)
        }
        return s.delete(e), s.delete(t), h
    }
}