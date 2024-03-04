function(e, t, n) {
    "use strict";
    n("70102"), n("781738"), n("424973"), n("222007");
    let r = /^xn--/,
        i = /[^\0-\x7E]/,
        o = /[\x2E\u3002\uFF0E\uFF61]/g,
        s = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        },
        a = 35,
        c = Math.floor,
        u = String.fromCharCode;

    function d(e) {
        throw RangeError(s[e])
    }

    function l(e, t) {
        let n = e.split("@"),
            r = "";
        n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(o, ".");
        let i = e.split("."),
            s = (function(e, t) {
                let n = [],
                    r = e.length;
                for (; r--;) n[r] = t(e[r]);
                return n
            })(i, t).join(".");
        return r + s
    }

    function f(e) {
        let t = [],
            n = 0,
            r = e.length;
        for (; n < r;) {
            let i = e.charCodeAt(n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                let r = e.charCodeAt(n++);
                (64512 & r) == 56320 ? t.push(((1023 & i) << 10) + (1023 & r) + 65536) : (t.push(i), n--)
            } else t.push(i)
        }
        return t
    }
    let p = function(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        },
        h = function(e, t, n) {
            let r = 0;
            for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > 26 * a >> 1; r += 36) e = c(e / a);
            return c(r + (a + 1) * e / (e + 38))
        },
        v = function(e) {
            let t = [],
                n = e.length,
                r = 0,
                i = 128,
                o = 72,
                s = e.lastIndexOf("-");
            s < 0 && (s = 0);
            for (let n = 0; n < s; ++n) e.charCodeAt(n) >= 128 && d("not-basic"), t.push(e.charCodeAt(n));
            for (let u = s > 0 ? s + 1 : 0; u < n;) {
                let s = r;
                for (let t = 1, i = 36;; i += 36) {
                    var a;
                    u >= n && d("invalid-input");
                    let s = (a = e.charCodeAt(u++)) - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : 36;
                    (s >= 36 || s > c((2147483647 - r) / t)) && d("overflow"), r += s * t;
                    let l = i <= o ? 1 : i >= o + 26 ? 26 : i - o;
                    if (s < l) break;
                    let f = 36 - l;
                    t > c(2147483647 / f) && d("overflow"), t *= f
                }
                let l = t.length + 1;
                o = h(r - s, l, 0 == s), c(r / l) > 2147483647 - i && d("overflow"), i += c(r / l), r %= l, t.splice(r++, 0, i)
            }
            return String.fromCodePoint(...t)
        },
        g = function(e) {
            let t = [],
                n = (e = f(e)).length,
                r = 128,
                i = 0,
                o = 72;
            for (let n of e) n < 128 && t.push(u(n));
            let s = t.length,
                a = s;
            for (s && t.push("-"); a < n;) {
                let n = 2147483647;
                for (let t of e) t >= r && t < n && (n = t);
                let l = a + 1;
                for (let f of (n - r > c((2147483647 - i) / l) && d("overflow"), i += (n - r) * l, r = n, e))
                    if (f < r && ++i > 2147483647 && d("overflow"), f == r) {
                        let e = i;
                        for (let n = 36;; n += 36) {
                            let r = n <= o ? 1 : n >= o + 26 ? 26 : n - o;
                            if (e < r) break;
                            let i = e - r,
                                s = 36 - r;
                            t.push(u(p(r + i % s, 0))), e = c(i / s)
                        }
                        t.push(u(p(e, 0))), o = h(i, l, a == s), i = 0, ++a
                    }++ i, ++r
            }
            return t.join("")
        };
    e.exports = {
        version: "2.1.0",
        ucs2: {
            decode: f,
            encode: e => String.fromCodePoint(...e)
        },
        decode: v,
        encode: g,
        toASCII: function(e) {
            return l(e, function(e) {
                return i.test(e) ? "xn--" + g(e) : e
            })
        },
        toUnicode: function(e) {
            return l(e, function(e) {
                return r.test(e) ? v(e.slice(4).toLowerCase()) : e
            })
        }
    }
}