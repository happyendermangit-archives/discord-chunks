function(t, r, n) {
    var e = n("904526"),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, r, n, i, u, c) {
        var a = 1 & n,
            f = e(t),
            s = f.length;
        if (s != e(r).length && !a) return !1;
        for (var p = s; p--;) {
            var v = f[p];
            if (!(a ? v in r : o.call(r, v))) return !1
        }
        var l = c.get(t);
        if (l && c.get(r)) return l == r;
        var h = !0;
        c.set(t, r), c.set(r, t);
        for (var _ = a; ++p < s;) {
            var y = t[v = f[p]],
                b = r[v];
            if (i) var x = a ? i(b, y, v, r, t, c) : i(y, b, v, t, r, c);
            if (!(void 0 === x ? y === b || u(y, b, n, i, c) : x)) {
                h = !1;
                break
            }
            _ || (_ = "constructor" == v)
        }
        if (h && !_) {
            var d = t.constructor,
                j = r.constructor;
            d != j && "constructor" in t && "constructor" in r && !("function" == typeof d && d instanceof d && "function" == typeof j && j instanceof j) && (h = !1)
        }
        return c.delete(t), c.delete(r), h
    }
}