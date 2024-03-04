function(e, t, n) {
    n("70102");
    var r = n("285162"),
        i = n("271388"),
        o = n("16282"),
        s = Math.max,
        a = Math.min;
    e.exports = function(e, t, n) {
        var c, u, d, l, f, p, h = 0,
            v = !1,
            g = !1,
            b = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");

        function m(t) {
            var n = c,
                r = u;
            return c = u = void 0, h = t, l = e.apply(r, n)
        }
        t = o(t) || 0, r(n) && (v = !!n.leading, d = (g = "maxWait" in n) ? s(o(n.maxWait) || 0, t) : d, b = "trailing" in n ? !!n.trailing : b);

        function y(e) {
            var n = e - p,
                r = e - h;
            return void 0 === p || n >= t || n < 0 || g && r >= d
        }

        function x() {
            var e, n, r, o, s = i();
            if (y(s)) return w(s);
            f = setTimeout(x, (n = (e = s) - p, r = e - h, o = t - n, g ? a(o, d - r) : o))
        }

        function w(e) {
            return (f = void 0, b && c) ? m(e) : (c = u = void 0, l)
        }

        function S() {
            var e, n = i(),
                r = y(n);
            if (c = arguments, u = this, p = n, r) {
                if (void 0 === f) {
                    ;
                    return h = e = p, f = setTimeout(x, t), v ? m(e) : l
                }
                if (g) return clearTimeout(f), f = setTimeout(x, t), m(p)
            }
            return void 0 === f && (f = setTimeout(x, t)), l
        }
        return S.cancel = function() {
            void 0 !== f && clearTimeout(f), h = 0, c = p = u = f = void 0
        }, S.flush = function() {
            return void 0 === f ? l : w(i())
        }, S
    }
}