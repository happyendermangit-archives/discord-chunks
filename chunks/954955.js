function(e, t, n) {
    var r = n("661233"),
        i = n("586769"),
        a = n("675769"),
        o = Math.max,
        s = Math.min;
    e.exports = function(e, t, n) {
        var u, c, l, d, f, p, h = 0,
            m = !1,
            g = !1,
            _ = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");

        function b(t) {
            var n = u,
                r = c;
            return u = c = void 0, h = t, d = e.apply(r, n)
        }
        t = a(t) || 0, r(n) && (m = !!n.leading, l = (g = "maxWait" in n) ? o(a(n.maxWait) || 0, t) : l, _ = "trailing" in n ? !!n.trailing : _);

        function v(e) {
            var n = e - p,
                r = e - h;
            return void 0 === p || n >= t || n < 0 || g && r >= l
        }

        function y() {
            var e, n, r, a, o = i();
            if (v(o)) return E(o);
            f = setTimeout(y, (n = (e = o) - p, r = e - h, a = t - n, g ? s(a, l - r) : a))
        }

        function E(e) {
            return (f = void 0, _ && u) ? b(e) : (u = c = void 0, d)
        }

        function S() {
            var e, n = i(),
                r = v(n);
            if (u = arguments, c = this, p = n, r) {
                if (void 0 === f) {
                    ;
                    return h = e = p, f = setTimeout(y, t), m ? b(e) : d
                }
                if (g) return clearTimeout(f), f = setTimeout(y, t), b(p)
            }
            return void 0 === f && (f = setTimeout(y, t)), d
        }
        return S.cancel = function() {
            void 0 !== f && clearTimeout(f), h = 0, u = p = c = f = void 0
        }, S.flush = function() {
            return void 0 === f ? d : E(i())
        }, S
    }
}