function(t, r, e) {
    "use strict";
    var n = e("64980"),
        o = /[^\0-\u007E]/,
        i = /[.\u3002\uFF0E\uFF61]/g,
        a = "Overflow: input needs wider integers to process",
        u = 35,
        s = RangeError,
        f = n(i.exec),
        c = Math.floor,
        l = String.fromCharCode,
        h = n("".charCodeAt),
        p = n([].join),
        v = n([].push),
        d = n("".replace),
        g = n("".split),
        b = n("".toLowerCase),
        y = function(t) {
            for (var r = [], e = 0, n = t.length; e < n;) {
                var o = h(t, e++);
                if (o >= 55296 && o <= 56319 && e < n) {
                    var i = h(t, e++);
                    (64512 & i) == 56320 ? v(r, ((1023 & o) << 10) + (1023 & i) + 65536) : (v(r, o), e--)
                } else v(r, o)
            }
            return r
        },
        m = function(t) {
            return t + 22 + 75 * (t < 26)
        },
        w = function(t, r, e) {
            var n = 0;
            for (t = e ? c(t / 700) : t >> 1, t += c(t / r); t > 26 * u >> 1;) t = c(t / u), n += 36;
            return c(n + (u + 1) * t / (t + 38))
        },
        _ = function(t) {
            var r, e, n = [],
                o = (t = y(t)).length,
                i = 128,
                u = 0,
                f = 72;
            for (r = 0; r < t.length; r++)(e = t[r]) < 128 && v(n, l(e));
            var h = n.length,
                d = h;
            for (h && v(n, "-"); d < o;) {
                var g = 2147483647;
                for (r = 0; r < t.length; r++)(e = t[r]) >= i && e < g && (g = e);
                var b = d + 1;
                if (g - i > c((2147483647 - u) / b)) throw s(a);
                for (u += (g - i) * b, i = g, r = 0; r < t.length; r++) {
                    if ((e = t[r]) < i && ++u > 2147483647) throw s(a);
                    if (e === i) {
                        for (var _ = u, k = 36;;) {
                            var x = k <= f ? 1 : k >= f + 26 ? 26 : k - f;
                            if (_ < x) break;
                            var E = _ - x,
                                S = 36 - x;
                            v(n, l(m(x + E % S))), _ = c(E / S), k += 36
                        }
                        v(n, l(m(_))), f = w(u, b, d === h), u = 0, d++
                    }
                }
                u++, i++
            }
            return p(n, "")
        };
    t.exports = function(t) {
        var r, e, n = [],
            a = g(d(b(t), i, "."), ".");
        for (r = 0; r < a.length; r++) v(n, f(o, e = a[r]) ? "xn--" + _(e) : e);
        return p(n, ".")
    }
}