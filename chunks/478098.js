function(e, t, r) {
    r("70102");
    var n = r("952133"),
        u = r("645942"),
        a = r("261497"),
        o = Math.max,
        i = Math.min;
    e.exports = function(e, t, r) {
        var s, l, c, f, d, D, h = 0,
            v = !1,
            p = !1,
            C = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");

        function g(t) {
            var r = s,
                n = l;
            return s = l = void 0, h = t, f = e.apply(n, r)
        }
        t = a(t) || 0, n(r) && (v = !!r.leading, c = (p = "maxWait" in r) ? o(a(r.maxWait) || 0, t) : c, C = "trailing" in r ? !!r.trailing : C);

        function B(e) {
            var r = e - D,
                n = e - h;
            return void 0 === D || r >= t || r < 0 || p && n >= c
        }

        function E() {
            var e, r, n, a, o = u();
            if (B(o)) return m(o);
            d = setTimeout(E, (r = (e = o) - D, n = e - h, a = t - r, p ? i(a, c - n) : a))
        }

        function m(e) {
            return (d = void 0, C && s) ? g(e) : (s = l = void 0, f)
        }

        function A() {
            var e, r = u(),
                n = B(r);
            if (s = arguments, l = this, D = r, n) {
                if (void 0 === d) {
                    ;
                    return h = e = D, d = setTimeout(E, t), v ? g(e) : f
                }
                if (p) return clearTimeout(d), d = setTimeout(E, t), g(D)
            }
            return void 0 === d && (d = setTimeout(E, t)), f
        }
        return A.cancel = function() {
            void 0 !== d && clearTimeout(d), h = 0, s = D = l = d = void 0
        }, A.flush = function() {
            return void 0 === d ? f : m(u())
        }, A
    }
}