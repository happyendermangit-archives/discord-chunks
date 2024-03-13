function(e, t, n) {
    n("70102");
    var r = n("952133"),
        a = n("645942"),
        o = n("261497"),
        i = Math.max,
        s = Math.min;
    e.exports = function(e, t, n) {
        var u, l, c, d, f, p, m = 0,
            h = !1,
            y = !1,
            _ = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");

        function g(t) {
            var n = u,
                r = l;
            return u = l = void 0, m = t, d = e.apply(r, n)
        }
        t = o(t) || 0, r(n) && (h = !!n.leading, c = (y = "maxWait" in n) ? i(o(n.maxWait) || 0, t) : c, _ = "trailing" in n ? !!n.trailing : _);

        function v(e) {
            var n = e - p,
                r = e - m;
            return void 0 === p || n >= t || n < 0 || y && r >= c
        }

        function b() {
            var e, n, r, o, i = a();
            if (v(i)) return M(i);
            f = setTimeout(b, (n = (e = i) - p, r = e - m, o = t - n, y ? s(o, c - r) : o))
        }

        function M(e) {
            return (f = void 0, _ && u) ? g(e) : (u = l = void 0, d)
        }

        function w() {
            var e, n = a(),
                r = v(n);
            if (u = arguments, l = this, p = n, r) {
                if (void 0 === f) {
                    ;
                    return m = e = p, f = setTimeout(b, t), h ? g(e) : d
                }
                if (y) return clearTimeout(f), f = setTimeout(b, t), g(p)
            }
            return void 0 === f && (f = setTimeout(b, t)), d
        }
        return w.cancel = function() {
            void 0 !== f && clearTimeout(f), m = 0, u = p = l = f = void 0
        }, w.flush = function() {
            return void 0 === f ? d : M(a())
        }, w
    }
}