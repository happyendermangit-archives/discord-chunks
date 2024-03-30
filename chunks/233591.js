function(e, t, n) {
    "use strict";
    var r = n("581031"),
        i = /[^\0-\u007E]/,
        a = /[.\u3002\uFF0E\uFF61]/g,
        o = "Overflow: input needs wider integers to process",
        s = 35,
        u = RangeError,
        c = r(a.exec),
        l = Math.floor,
        d = String.fromCharCode,
        f = r("".charCodeAt),
        p = r([].join),
        h = r([].push),
        m = r("".replace),
        g = r("".split),
        _ = r("".toLowerCase),
        b = function(e) {
            for (var t = [], n = 0, r = e.length; n < r;) {
                var i = f(e, n++);
                if (i >= 55296 && i <= 56319 && n < r) {
                    var a = f(e, n++);
                    (64512 & a) == 56320 ? h(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (h(t, i), n--)
                } else h(t, i)
            }
            return t
        },
        v = function(e) {
            return e + 22 + 75 * (e < 26)
        },
        y = function(e, t, n) {
            var r = 0;
            for (e = n ? l(e / 700) : e >> 1, e += l(e / t); e > 26 * s >> 1;) e = l(e / s), r += 36;
            return l(r + (s + 1) * e / (e + 38))
        },
        E = function(e) {
            var t, n, r = [],
                i = (e = b(e)).length,
                a = 128,
                s = 0,
                c = 72;
            for (t = 0; t < e.length; t++)(n = e[t]) < 128 && h(r, d(n));
            var f = r.length,
                m = f;
            for (f && h(r, "-"); m < i;) {
                var g = 2147483647;
                for (t = 0; t < e.length; t++)(n = e[t]) >= a && n < g && (g = n);
                var _ = m + 1;
                if (g - a > l((2147483647 - s) / _)) throw u(o);
                for (s += (g - a) * _, a = g, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < a && ++s > 2147483647) throw u(o);
                    if (n === a) {
                        for (var E = s, S = 36;;) {
                            var x = S <= c ? 1 : S >= c + 26 ? 26 : S - c;
                            if (E < x) break;
                            var w = E - x,
                                T = 36 - x;
                            h(r, d(v(x + w % T))), E = l(w / T), S += 36
                        }
                        h(r, d(v(E))), c = y(s, _, m === f), s = 0, m++
                    }
                }
                s++, a++
            }
            return p(r, "")
        };
    e.exports = function(e) {
        var t, n, r = [],
            o = g(m(_(e), a, "."), ".");
        for (t = 0; t < o.length; t++) h(r, c(i, n = o[t]) ? "xn--" + E(n) : n);
        return p(r, ".")
    }
}