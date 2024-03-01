function(t, r, n) {
    "use strict";
    var e = n("64980"),
        i = /[^\0-\u007E]/,
        o = /[.\u3002\uFF0E\uFF61]/g,
        u = "Overflow: input needs wider integers to process",
        a = 35,
        f = RangeError,
        c = e(o.exec),
        s = Math.floor,
        l = String.fromCharCode,
        h = e("".charCodeAt),
        p = e([].join),
        v = e([].push),
        g = e("".replace),
        d = e("".split),
        y = e("".toLowerCase),
        b = function(t) {
            for (var r = [], n = 0, e = t.length; n < e;) {
                var i = h(t, n++);
                if (i >= 55296 && i <= 56319 && n < e) {
                    var o = h(t, n++);
                    (64512 & o) == 56320 ? v(r, ((1023 & i) << 10) + (1023 & o) + 65536) : (v(r, i), n--)
                } else v(r, i)
            }
            return r
        },
        m = function(t) {
            return t + 22 + 75 * (t < 26)
        },
        _ = function(t, r, n) {
            var e = 0;
            for (t = n ? s(t / 700) : t >> 1, t += s(t / r); t > 26 * a >> 1;) t = s(t / a), e += 36;
            return s(e + (a + 1) * t / (t + 38))
        },
        w = function(t) {
            var r, n, e = [],
                i = (t = b(t)).length,
                o = 128,
                a = 0,
                c = 72;
            for (r = 0; r < t.length; r++)(n = t[r]) < 128 && v(e, l(n));
            var h = e.length,
                g = h;
            for (h && v(e, "-"); g < i;) {
                var d = 2147483647;
                for (r = 0; r < t.length; r++)(n = t[r]) >= o && n < d && (d = n);
                var y = g + 1;
                if (d - o > s((2147483647 - a) / y)) throw f(u);
                for (a += (d - o) * y, o = d, r = 0; r < t.length; r++) {
                    if ((n = t[r]) < o && ++a > 2147483647) throw f(u);
                    if (n === o) {
                        for (var w = a, k = 36;;) {
                            var E = k <= c ? 1 : k >= c + 26 ? 26 : k - c;
                            if (w < E) break;
                            var R = w - E,
                                x = 36 - E;
                            v(e, l(m(E + R % x))), w = s(R / x), k += 36
                        }
                        v(e, l(m(w))), c = _(a, y, g === h), a = 0, g++
                    }
                }
                a++, o++
            }
            return p(e, "")
        };
    t.exports = function(t) {
        var r, n, e = [],
            u = d(g(y(t), o, "."), ".");
        for (r = 0; r < u.length; r++) v(e, c(i, n = u[r]) ? "xn--" + w(n) : n);
        return p(e, ".")
    }
}