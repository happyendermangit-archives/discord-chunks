function(t, e, s) {
    "use strict";
    s("781738"), s("424973");
    var r = s("463483"),
        i = s("599235");
    e.inherits = i;
    e.toArray = function(t, e) {
        if (Array.isArray(t)) return t.slice();
        if (!t) return [];
        var s = [];
        if ("string" == typeof t) {
            if (e) {
                if ("hex" === e)
                    for ((t = t.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (t = "0" + t), i = 0; i < t.length; i += 2) s.push(parseInt(t[i] + t[i + 1], 16))
            } else {
                for (var r = 0, i = 0; i < t.length; i++) {
                    var n, c, o = t.charCodeAt(i);
                    if (o < 128) s[r++] = o;
                    else if (o < 2048) s[r++] = o >> 6 | 192, s[r++] = 63 & o | 128;
                    else {
                        ;
                        if (n = t, c = i, (64512 & n.charCodeAt(c)) != 55296 || c < 0 || c + 1 >= n.length ? 1 : (64512 & n.charCodeAt(c + 1)) != 56320) s[r++] = o >> 12 | 224, s[r++] = o >> 6 & 63 | 128, s[r++] = 63 & o | 128;
                        else o = 65536 + ((1023 & o) << 10) + (1023 & t.charCodeAt(++i)), s[r++] = o >> 18 | 240, s[r++] = o >> 12 & 63 | 128, s[r++] = o >> 6 & 63 | 128, s[r++] = 63 & o | 128
                    }
                }
            }
        } else
            for (i = 0; i < t.length; i++) s[i] = 0 | t[i];
        return s
    };

    function n(t) {
        return (t >>> 24 | t >>> 8 & 65280 | t << 8 & 16711680 | (255 & t) << 24) >>> 0
    }
    e.toHex = function(t) {
        for (var e = "", s = 0; s < t.length; s++) e += c(t[s].toString(16));
        return e
    }, e.htonl = n;

    function c(t) {
        return 1 === t.length ? "0" + t : t
    }

    function o(t) {
        if (7 === t.length) return "0" + t;
        if (6 === t.length) return "00" + t;
        if (5 === t.length) return "000" + t;
        else if (4 === t.length) return "0000" + t;
        else if (3 === t.length) return "00000" + t;
        else if (2 === t.length) return "000000" + t;
        else if (1 === t.length) return "0000000" + t;
        else return t
    }
    e.toHex32 = function(t, e) {
        for (var s = "", r = 0; r < t.length; r++) {
            var i = t[r];
            "little" === e && (i = n(i)), s += o(i.toString(16))
        }
        return s
    }, e.zero2 = c, e.zero8 = o;
    e.join32 = function(t, e, s, i) {
        var n, c = s - e;
        r(c % 4 == 0);
        for (var o = Array(c / 4), f = 0, u = e; f < o.length; f++, u += 4) n = "big" === i ? t[u] << 24 | t[u + 1] << 16 | t[u + 2] << 8 | t[u + 3] : t[u + 3] << 24 | t[u + 2] << 16 | t[u + 1] << 8 | t[u], o[f] = n >>> 0;
        return o
    };
    e.split32 = function(t, e) {
        for (var s = Array(4 * t.length), r = 0, i = 0; r < t.length; r++, i += 4) {
            var n = t[r];
            "big" === e ? (s[i] = n >>> 24, s[i + 1] = n >>> 16 & 255, s[i + 2] = n >>> 8 & 255, s[i + 3] = 255 & n) : (s[i + 3] = n >>> 24, s[i + 2] = n >>> 16 & 255, s[i + 1] = n >>> 8 & 255, s[i] = 255 & n)
        }
        return s
    };
    e.rotr32 = function(t, e) {
        return t >>> e | t << 32 - e
    };
    e.rotl32 = function(t, e) {
        return t << e | t >>> 32 - e
    };
    e.sum32 = function(t, e) {
        return t + e >>> 0
    };
    e.sum32_3 = function(t, e, s) {
        return t + e + s >>> 0
    };
    e.sum32_4 = function(t, e, s, r) {
        return t + e + s + r >>> 0
    };
    e.sum32_5 = function(t, e, s, r, i) {
        return t + e + s + r + i >>> 0
    };
    e.sum64 = function(t, e, s, r) {
        var i = t[e],
            n = r + t[e + 1] >>> 0;
        t[e] = (n < r ? 1 : 0) + s + i >>> 0, t[e + 1] = n
    };
    e.sum64_hi = function(t, e, s, r) {
        return (e + r >>> 0 < e ? 1 : 0) + t + s >>> 0
    };
    e.sum64_lo = function(t, e, s, r) {
        return e + r >>> 0
    };
    e.sum64_4_hi = function(t, e, s, r, i, n, c, o) {
        var f, u = e;
        return f = 0 + ((u = u + r >>> 0) < e ? 1 : 0), f += (u = u + n >>> 0) < n ? 1 : 0, t + s + i + c + (f += (u = u + o >>> 0) < o ? 1 : 0) >>> 0
    };
    e.sum64_4_lo = function(t, e, s, r, i, n, c, o) {
        return e + r + n + o >>> 0
    };
    e.sum64_5_hi = function(t, e, s, r, i, n, c, o, f, u) {
        var a, d = e;
        return a = 0 + ((d = d + r >>> 0) < e ? 1 : 0), a += (d = d + n >>> 0) < n ? 1 : 0, a += (d = d + o >>> 0) < o ? 1 : 0, t + s + i + c + f + (a += (d = d + u >>> 0) < u ? 1 : 0) >>> 0
    };
    e.sum64_5_lo = function(t, e, s, r, i, n, c, o, f, u) {
        return e + r + n + o + u >>> 0
    };
    e.rotr64_hi = function(t, e, s) {
        return (e << 32 - s | t >>> s) >>> 0
    };
    e.rotr64_lo = function(t, e, s) {
        return (t << 32 - s | e >>> s) >>> 0
    };
    e.shr64_hi = function(t, e, s) {
        return t >>> s
    };
    e.shr64_lo = function(t, e, s) {
        return (t << 32 - s | e >>> s) >>> 0
    }
}