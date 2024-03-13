function(t, r, e) {
    var n = e("863847"),
        o = e("106985"),
        i = e("9159"),
        a = e("594546"),
        u = e("364599"),
        s = e("486036"),
        f = e("474710"),
        c = e("965779"),
        l = "[object Arguments]",
        h = "[object Array]",
        p = "[object Object]",
        v = Object.prototype.hasOwnProperty;
    t.exports = function(t, r, e, d, g, b) {
        var y = s(t),
            m = s(r),
            w = y ? h : u(t),
            _ = m ? h : u(r);
        w = w == l ? p : w, _ = _ == l ? p : _;
        var k = w == p,
            x = _ == p,
            E = w == _;
        if (E && f(t)) {
            if (!f(r)) return !1;
            y = !0, k = !1
        }
        if (E && !k) return b || (b = new n), y || c(t) ? o(t, r, e, d, g, b) : i(t, r, w, e, d, g, b);
        if (!(1 & e)) {
            var S = k && v.call(t, "__wrapped__"),
                M = x && v.call(r, "__wrapped__");
            if (S || M) {
                var R = S ? t.value() : t,
                    O = M ? r.value() : r;
                return b || (b = new n), g(R, O, e, d, b)
            }
        }
        return !!E && (b || (b = new n), a(t, r, e, d, g, b))
    }
}