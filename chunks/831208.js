function(e, t, n) {
    e = n.nmd(e), n("70102"), n("781738"), n("424973"), ! function(r) {
        var a = "object" == typeof t && t && !t.nodeType && t,
            o = "object" == typeof e && e && !e.nodeType && e,
            i = "object" == typeof n.g && n.g;
        (i.global === i || i.window === i || i.self === i) && (r = i);
        var s, u, l = /^xn--/,
            c = /[^\x20-\x7E]/,
            d = /[\x2E\u3002\uFF0E\uFF61]/g,
            f = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            p = 35,
            m = Math.floor,
            h = String.fromCharCode;

        function y(e) {
            throw RangeError(f[e])
        }

        function _(e, t) {
            for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
            return r
        }

        function g(e, t) {
            var n = e.split("@"),
                r = "";
            return n.length > 1 && (r = n[0] + "@", e = n[1]), r + _((e = e.replace(d, ".")).split("."), t).join(".")
        }

        function v(e) {
            for (var t, n, r = [], a = 0, o = e.length; a < o;)(t = e.charCodeAt(a++)) >= 55296 && t <= 56319 && a < o ? (64512 & (n = e.charCodeAt(a++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), a--) : r.push(t);
            return r
        }

        function b(e) {
            return _(e, function(e) {
                var t = "";
                return e > 65535 && (e -= 65536, t += h(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += h(e)
            }).join("")
        }

        function M(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }

        function w(e, t, n) {
            var r = 0;
            for (e = n ? m(e / 700) : e >> 1, e += m(e / t); e > 26 * p >> 1; r += 36) e = m(e / p);
            return m(r + (p + 1) * e / (e + 38))
        }

        function k(e) {
            var t, n, r, a, o, i, s, u, l, c, d, f = [],
                p = e.length,
                h = 0,
                _ = 128,
                g = 72;
            for ((r = e.lastIndexOf("-")) < 0 && (r = 0), a = 0; a < r; ++a) e.charCodeAt(a) >= 128 && y("not-basic"), f.push(e.charCodeAt(a));
            for (o = r > 0 ? r + 1 : 0; o < p;) {
                for (i = h, s = 1, u = 36;; u += 36) {
                    ;
                    if (o >= p && y("invalid-input"), ((l = (t = e.charCodeAt(o++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36) >= 36 || l > m((2147483647 - h) / s)) && y("overflow"), h += l * s, l < (c = u <= g ? 1 : u >= g + 26 ? 26 : u - g)) break;
                    s > m(2147483647 / (d = 36 - c)) && y("overflow"), s *= d
                }
                g = w(h - i, n = f.length + 1, 0 == i), m(h / n) > 2147483647 - _ && y("overflow"), _ += m(h / n), h %= n, f.splice(h++, 0, _)
            }
            return b(f)
        }

        function L(e) {
            var t, n, r, a, o, i, s, u, l, c, d, f, p, _, g, b = [];
            for (i = 0, f = (e = v(e)).length, t = 128, n = 0, o = 72; i < f; ++i)(d = e[i]) < 128 && b.push(h(d));
            for (r = a = b.length, a && b.push("-"); r < f;) {
                for (s = 2147483647, i = 0; i < f; ++i)(d = e[i]) >= t && d < s && (s = d);
                for (s - t > m((2147483647 - n) / (p = r + 1)) && y("overflow"), n += (s - t) * p, t = s, i = 0; i < f; ++i)
                    if ((d = e[i]) < t && ++n > 2147483647 && y("overflow"), d == t) {
                        for (u = n, l = 36; !(u < (c = l <= o ? 1 : l >= o + 26 ? 26 : l - o)); l += 36) {
                            ;
                            g = u - c, _ = 36 - c, b.push(h(M(c + g % _, 0))), u = m(g / _)
                        }
                        b.push(h(M(u, 0))), o = w(n, p, r == a), n = 0, ++r
                    }++ n, ++t
            }
            return b.join("")
        }
        if (s = {
                version: "1.4.1",
                ucs2: {
                    decode: v,
                    encode: b
                },
                decode: k,
                encode: L,
                toASCII: function(e) {
                    return g(e, function(e) {
                        return c.test(e) ? "xn--" + L(e) : e
                    })
                },
                toUnicode: function(e) {
                    return g(e, function(e) {
                        return l.test(e) ? k(e.slice(4).toLowerCase()) : e
                    })
                }
            }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
            return s
        });
        else if (a && o) {
            if (e.exports == a) o.exports = s;
            else
                for (u in s) s.hasOwnProperty(u) && (a[u] = s[u])
        } else r.punycode = s
    }(this)
}