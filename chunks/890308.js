function(e, t, n) {
    e = n.nmd(e), ! function(r) {
        var i = "object" == typeof t && t && !t.nodeType && t,
            a = e && !e.nodeType && e,
            o = "object" == typeof n.g && n.g;
        (o.global === o || o.window === o || o.self === o) && (r = o);
        var s, u, c = /^xn--/,
            l = /[^\x20-\x7E]/,
            d = /[\x2E\u3002\uFF0E\uFF61]/g,
            f = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            p = 35,
            h = Math.floor,
            m = String.fromCharCode;

        function g(e) {
            throw RangeError(f[e])
        }

        function _(e, t) {
            for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
            return r
        }

        function b(e, t) {
            var n = e.split("@"),
                r = "";
            return n.length > 1 && (r = n[0] + "@", e = n[1]), r + _((e = e.replace(d, ".")).split("."), t).join(".")
        }

        function v(e) {
            for (var t, n, r = [], i = 0, a = e.length; i < a;)(t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < a ? (64512 & (n = e.charCodeAt(i++))) == 56320 ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--) : r.push(t);
            return r
        }

        function y(e) {
            return _(e, function(e) {
                var t = "";
                return e > 65535 && (e -= 65536, t += m(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += m(e)
            }).join("")
        }

        function E(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }

        function S(e, t, n) {
            var r = 0;
            for (e = n ? h(e / 700) : e >> 1, e += h(e / t); e > 26 * p >> 1; r += 36) e = h(e / p);
            return h(r + (p + 1) * e / (e + 38))
        }

        function x(e) {
            var t, n, r, i, a, o, s, u, c, l, d, f = [],
                p = e.length,
                m = 0,
                _ = 128,
                b = 72;
            for ((r = e.lastIndexOf("-")) < 0 && (r = 0), i = 0; i < r; ++i) e.charCodeAt(i) >= 128 && g("not-basic"), f.push(e.charCodeAt(i));
            for (a = r > 0 ? r + 1 : 0; a < p;) {
                for (o = m, s = 1, u = 36;; u += 36) {
                    ;
                    if (a >= p && g("invalid-input"), ((c = (t = e.charCodeAt(a++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36) >= 36 || c > h((2147483647 - m) / s)) && g("overflow"), m += c * s, c < (l = u <= b ? 1 : u >= b + 26 ? 26 : u - b)) break;
                    s > h(2147483647 / (d = 36 - l)) && g("overflow"), s *= d
                }
                b = S(m - o, n = f.length + 1, 0 == o), h(m / n) > 2147483647 - _ && g("overflow"), _ += h(m / n), m %= n, f.splice(m++, 0, _)
            }
            return y(f)
        }

        function w(e) {
            var t, n, r, i, a, o, s, u, c, l, d, f, p, _, b, y = [];
            for (o = 0, f = (e = v(e)).length, t = 128, n = 0, a = 72; o < f; ++o)(d = e[o]) < 128 && y.push(m(d));
            for (r = i = y.length, i && y.push("-"); r < f;) {
                for (s = 2147483647, o = 0; o < f; ++o)(d = e[o]) >= t && d < s && (s = d);
                for (s - t > h((2147483647 - n) / (p = r + 1)) && g("overflow"), n += (s - t) * p, t = s, o = 0; o < f; ++o)
                    if ((d = e[o]) < t && ++n > 2147483647 && g("overflow"), d == t) {
                        for (u = n, c = 36; !(u < (l = c <= a ? 1 : c >= a + 26 ? 26 : c - a)); c += 36) {
                            ;
                            b = u - l, _ = 36 - l, y.push(m(E(l + b % _, 0))), u = h(b / _)
                        }
                        y.push(m(E(u, 0))), a = S(n, p, r == i), n = 0, ++r
                    }++ n, ++t
            }
            return y.join("")
        }
        if (s = {
                version: "1.4.1",
                ucs2: {
                    decode: v,
                    encode: y
                },
                decode: x,
                encode: w,
                toASCII: function(e) {
                    return b(e, function(e) {
                        return l.test(e) ? "xn--" + w(e) : e
                    })
                },
                toUnicode: function(e) {
                    return b(e, function(e) {
                        return c.test(e) ? x(e.slice(4).toLowerCase()) : e
                    })
                }
            }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
            return s
        });
        else if (i && a) {
            if (e.exports == i) a.exports = s;
            else
                for (u in s) s.hasOwnProperty(u) && (i[u] = s[u])
        } else r.punycode = s
    }(this)
}