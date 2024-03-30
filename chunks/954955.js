function(t, e, r) {
    var n = r("661233"),
        i = r("586769"),
        o = r("675769"),
        u = Math.max,
        c = Math.min;
    t.exports = function(t, e, r) {
        var a, s, f, l, v, p, d = 0,
            x = !1,
            g = !1,
            h = !0;
        if ("function" != typeof t) throw TypeError("Expected a function");

        function b(e) {
            var r = a,
                n = s;
            return a = s = void 0, d = e, l = t.apply(n, r)
        }
        e = o(e) || 0, n(r) && (x = !!r.leading, f = (g = "maxWait" in r) ? u(o(r.maxWait) || 0, e) : f, h = "trailing" in r ? !!r.trailing : h);

        function y(t) {
            var r = t - p,
                n = t - d;
            return void 0 === p || r >= e || r < 0 || g && n >= f
        }

        function I() {
            var t, r, n, o, u = i();
            if (y(u)) return m(u);
            v = setTimeout(I, (r = (t = u) - p, n = t - d, o = e - r, g ? c(o, f - n) : o))
        }

        function m(t) {
            return (v = void 0, h && a) ? b(t) : (a = s = void 0, l)
        }

        function E() {
            var t, r = i(),
                n = y(r);
            if (a = arguments, s = this, p = r, n) {
                if (void 0 === v) {
                    ;
                    return d = t = p, v = setTimeout(I, e), x ? b(t) : l
                }
                if (g) return clearTimeout(v), v = setTimeout(I, e), b(p)
            }
            return void 0 === v && (v = setTimeout(I, e)), l
        }
        return E.cancel = function() {
            void 0 !== v && clearTimeout(v), d = 0, a = p = s = v = void 0
        }, E.flush = function() {
            return void 0 === v ? l : m(i())
        }, E
    }
}