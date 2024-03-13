function(t, r, e) {
    var n = e("363863"),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, r, e, i, a, u) {
        var s = 1 & e,
            f = n(t),
            c = f.length;
        if (c != n(r).length && !s) return !1;
        for (var l = c; l--;) {
            var h = f[l];
            if (!(s ? h in r : o.call(r, h))) return !1
        }
        var p = u.get(t),
            v = u.get(r);
        if (p && v) return p == r && v == t;
        var d = !0;
        u.set(t, r), u.set(r, t);
        for (var g = s; ++l < c;) {
            var b = t[h = f[l]],
                y = r[h];
            if (i) var m = s ? i(y, b, h, r, t, u) : i(b, y, h, t, r, u);
            if (!(void 0 === m ? b === y || a(b, y, e, i, u) : m)) {
                d = !1;
                break
            }
            g || (g = "constructor" == h)
        }
        if (d && !g) {
            var w = t.constructor,
                _ = r.constructor;
            w != _ && "constructor" in t && "constructor" in r && !("function" == typeof w && w instanceof w && "function" == typeof _ && _ instanceof _) && (d = !1)
        }
        return u.delete(t), u.delete(r), d
    }
}