function(e, t, n) {
    "use strict";
    n("781738"), n("424973");
    var r = n("463483"),
        i = n("599235");
    t.inherits = i;
    t.toArray = function(e, t) {
        if (Array.isArray(e)) return e.slice();
        if (!e) return [];
        var n = [];
        if ("string" == typeof e) {
            if (t) {
                if ("hex" === t)
                    for ((e = e.replace(/[^a-z0-9]+/ig, "")).length % 2 != 0 && (e = "0" + e), i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16))
            } else {
                for (var r = 0, i = 0; i < e.length; i++) {
                    var o, s, a = e.charCodeAt(i);
                    if (a < 128) n[r++] = a;
                    else if (a < 2048) n[r++] = a >> 6 | 192, n[r++] = 63 & a | 128;
                    else {
                        ;
                        if (o = e, s = i, (64512 & o.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= o.length ? 1 : (64512 & o.charCodeAt(s + 1)) != 56320) n[r++] = a >> 12 | 224, n[r++] = a >> 6 & 63 | 128, n[r++] = 63 & a | 128;
                        else a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++i)), n[r++] = a >> 18 | 240, n[r++] = a >> 12 & 63 | 128, n[r++] = a >> 6 & 63 | 128, n[r++] = 63 & a | 128
                    }
                }
            }
        } else
            for (i = 0; i < e.length; i++) n[i] = 0 | e[i];
        return n
    };

    function o(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
    }
    t.toHex = function(e) {
        for (var t = "", n = 0; n < e.length; n++) t += s(e[n].toString(16));
        return t
    }, t.htonl = o;

    function s(e) {
        return 1 === e.length ? "0" + e : e
    }

    function a(e) {
        if (7 === e.length) return "0" + e;
        if (6 === e.length) return "00" + e;
        if (5 === e.length) return "000" + e;
        else if (4 === e.length) return "0000" + e;
        else if (3 === e.length) return "00000" + e;
        else if (2 === e.length) return "000000" + e;
        else if (1 === e.length) return "0000000" + e;
        else return e
    }
    t.toHex32 = function(e, t) {
        for (var n = "", r = 0; r < e.length; r++) {
            var i = e[r];
            "little" === t && (i = o(i)), n += a(i.toString(16))
        }
        return n
    }, t.zero2 = s, t.zero8 = a;
    t.join32 = function(e, t, n, i) {
        var o, s = n - t;
        r(s % 4 == 0);
        for (var a = Array(s / 4), c = 0, u = t; c < a.length; c++, u += 4) o = "big" === i ? e[u] << 24 | e[u + 1] << 16 | e[u + 2] << 8 | e[u + 3] : e[u + 3] << 24 | e[u + 2] << 16 | e[u + 1] << 8 | e[u], a[c] = o >>> 0;
        return a
    };
    t.split32 = function(e, t) {
        for (var n = Array(4 * e.length), r = 0, i = 0; r < e.length; r++, i += 4) {
            var o = e[r];
            "big" === t ? (n[i] = o >>> 24, n[i + 1] = o >>> 16 & 255, n[i + 2] = o >>> 8 & 255, n[i + 3] = 255 & o) : (n[i + 3] = o >>> 24, n[i + 2] = o >>> 16 & 255, n[i + 1] = o >>> 8 & 255, n[i] = 255 & o)
        }
        return n
    };
    t.rotr32 = function(e, t) {
        return e >>> t | e << 32 - t
    };
    t.rotl32 = function(e, t) {
        return e << t | e >>> 32 - t
    };
    t.sum32 = function(e, t) {
        return e + t >>> 0
    };
    t.sum32_3 = function(e, t, n) {
        return e + t + n >>> 0
    };
    t.sum32_4 = function(e, t, n, r) {
        return e + t + n + r >>> 0
    };
    t.sum32_5 = function(e, t, n, r, i) {
        return e + t + n + r + i >>> 0
    };
    t.sum64 = function(e, t, n, r) {
        var i = e[t],
            o = r + e[t + 1] >>> 0;
        e[t] = (o < r ? 1 : 0) + n + i >>> 0, e[t + 1] = o
    };
    t.sum64_hi = function(e, t, n, r) {
        return (t + r >>> 0 < t ? 1 : 0) + e + n >>> 0
    };
    t.sum64_lo = function(e, t, n, r) {
        return t + r >>> 0
    };
    t.sum64_4_hi = function(e, t, n, r, i, o, s, a) {
        var c, u = t;
        return c = 0 + ((u = u + r >>> 0) < t ? 1 : 0), c += (u = u + o >>> 0) < o ? 1 : 0, e + n + i + s + (c += (u = u + a >>> 0) < a ? 1 : 0) >>> 0
    };
    t.sum64_4_lo = function(e, t, n, r, i, o, s, a) {
        return t + r + o + a >>> 0
    };
    t.sum64_5_hi = function(e, t, n, r, i, o, s, a, c, u) {
        var d, l = t;
        return d = 0 + ((l = l + r >>> 0) < t ? 1 : 0), d += (l = l + o >>> 0) < o ? 1 : 0, d += (l = l + a >>> 0) < a ? 1 : 0, e + n + i + s + c + (d += (l = l + u >>> 0) < u ? 1 : 0) >>> 0
    };
    t.sum64_5_lo = function(e, t, n, r, i, o, s, a, c, u) {
        return t + r + o + a + u >>> 0
    };
    t.rotr64_hi = function(e, t, n) {
        return (t << 32 - n | e >>> n) >>> 0
    };
    t.rotr64_lo = function(e, t, n) {
        return (e << 32 - n | t >>> n) >>> 0
    };
    t.shr64_hi = function(e, t, n) {
        return e >>> n
    };
    t.shr64_lo = function(e, t, n) {
        return (e << 32 - n | t >>> n) >>> 0
    }
}