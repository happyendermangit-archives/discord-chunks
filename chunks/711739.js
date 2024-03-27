function(e) {
    "use strict";
    let t = /^xn--/,
        n = /[^\0-\x7E]/,
        r = /[\x2E\u3002\uFF0E\uFF61]/g,
        i = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        },
        a = 35,
        o = Math.floor,
        s = String.fromCharCode;

    function u(e) {
        throw RangeError(i[e])
    }

    function c(e, t) {
        let n = e.split("@"),
            i = "";
        return n.length > 1 && (i = n[0] + "@", e = n[1]), i + (function(e, t) {
            let n = [],
                r = e.length;
            for (; r--;) n[r] = t(e[r]);
            return n
        })((e = e.replace(r, ".")).split("."), t).join(".")
    }

    function l(e) {
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
    let d = function(e, t) {
            return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        },
        f = function(e, t, n) {
            let r = 0;
            for (e = n ? o(e / 700) : e >> 1, e += o(e / t); e > 26 * a >> 1; r += 36) e = o(e / a);
            return o(r + (a + 1) * e / (e + 38))
        },
        p = function(e) {
            let t = [],
                n = e.length,
                r = 0,
                i = 128,
                a = 72,
                s = e.lastIndexOf("-");
            s < 0 && (s = 0);
            for (let n = 0; n < s; ++n) e.charCodeAt(n) >= 128 && u("not-basic"), t.push(e.charCodeAt(n));
            for (let l = s > 0 ? s + 1 : 0; l < n;) {
                let s = r;
                for (let t = 1, i = 36;; i += 36) {
                    var c;
                    l >= n && u("invalid-input");
                    let s = (c = e.charCodeAt(l++)) - 48 < 10 ? c - 22 : c - 65 < 26 ? c - 65 : c - 97 < 26 ? c - 97 : 36;
                    (s >= 36 || s > o((2147483647 - r) / t)) && u("overflow"), r += s * t;
                    let d = i <= a ? 1 : i >= a + 26 ? 26 : i - a;
                    if (s < d) break;
                    let f = 36 - d;
                    t > o(2147483647 / f) && u("overflow"), t *= f
                }
                let d = t.length + 1;
                a = f(r - s, d, 0 == s), o(r / d) > 2147483647 - i && u("overflow"), i += o(r / d), r %= d, t.splice(r++, 0, i)
            }
            return String.fromCodePoint(...t)
        },
        h = function(e) {
            let t = [],
                n = (e = l(e)).length,
                r = 128,
                i = 0,
                a = 72;
            for (let n of e) n < 128 && t.push(s(n));
            let c = t.length,
                p = c;
            for (c && t.push("-"); p < n;) {
                let n = 2147483647;
                for (let t of e) t >= r && t < n && (n = t);
                let l = p + 1;
                for (let h of (n - r > o((2147483647 - i) / l) && u("overflow"), i += (n - r) * l, r = n, e))
                    if (h < r && ++i > 2147483647 && u("overflow"), h == r) {
                        let e = i;
                        for (let n = 36;; n += 36) {
                            let r = n <= a ? 1 : n >= a + 26 ? 26 : n - a;
                            if (e < r) break;
                            let i = e - r,
                                u = 36 - r;
                            t.push(s(d(r + i % u, 0))), e = o(i / u)
                        }
                        t.push(s(d(e, 0))), a = f(i, l, p == c), i = 0, ++p
                    }++ i, ++r
            }
            return t.join("")
        };
    e.exports = {
        version: "2.1.0",
        ucs2: {
            decode: l,
            encode: e => String.fromCodePoint(...e)
        },
        decode: p,
        encode: h,
        toASCII: function(e) {
            return c(e, function(e) {
                return n.test(e) ? "xn--" + h(e) : e
            })
        },
        toUnicode: function(e) {
            return c(e, function(e) {
                return t.test(e) ? p(e.slice(4).toLowerCase()) : e
            })
        }
    }
}