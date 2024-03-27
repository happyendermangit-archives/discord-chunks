function(e, t, n) {
    "use strict";
    var r = n("21841"),
        i = n("689118");
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
                    var a, o, s = e.charCodeAt(i);
                    if (s < 128) n[r++] = s;
                    else if (s < 2048) n[r++] = s >> 6 | 192, n[r++] = 63 & s | 128;
                    else {
                        ;
                        if (a = e, o = i, (64512 & a.charCodeAt(o)) != 55296 || o < 0 || o + 1 >= a.length ? 1 : (64512 & a.charCodeAt(o + 1)) != 56320) n[r++] = s >> 12 | 224, n[r++] = s >> 6 & 63 | 128, n[r++] = 63 & s | 128;
                        else s = 65536 + ((1023 & s) << 10) + (1023 & e.charCodeAt(++i)), n[r++] = s >> 18 | 240, n[r++] = s >> 12 & 63 | 128, n[r++] = s >> 6 & 63 | 128, n[r++] = 63 & s | 128
                    }
                }
            }
        } else
            for (i = 0; i < e.length; i++) n[i] = 0 | e[i];
        return n
    };

    function a(e) {
        return (e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (255 & e) << 24) >>> 0
    }
    t.toHex = function(e) {
        for (var t = "", n = 0; n < e.length; n++) t += o(e[n].toString(16));
        return t
    }, t.htonl = a;

    function o(e) {
        return 1 === e.length ? "0" + e : e
    }

    function s(e) {
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
            "little" === t && (i = a(i)), n += s(i.toString(16))
        }
        return n
    }, t.zero2 = o, t.zero8 = s;
    t.join32 = function(e, t, n, i) {
        var a, o = n - t;
        r(o % 4 == 0);
        for (var s = Array(o / 4), u = 0, c = t; u < s.length; u++, c += 4) a = "big" === i ? e[c] << 24 | e[c + 1] << 16 | e[c + 2] << 8 | e[c + 3] : e[c + 3] << 24 | e[c + 2] << 16 | e[c + 1] << 8 | e[c], s[u] = a >>> 0;
        return s
    };
    t.split32 = function(e, t) {
        for (var n = Array(4 * e.length), r = 0, i = 0; r < e.length; r++, i += 4) {
            var a = e[r];
            "big" === t ? (n[i] = a >>> 24, n[i + 1] = a >>> 16 & 255, n[i + 2] = a >>> 8 & 255, n[i + 3] = 255 & a) : (n[i + 3] = a >>> 24, n[i + 2] = a >>> 16 & 255, n[i + 1] = a >>> 8 & 255, n[i] = 255 & a)
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
            a = r + e[t + 1] >>> 0;
        e[t] = (a < r ? 1 : 0) + n + i >>> 0, e[t + 1] = a
    };
    t.sum64_hi = function(e, t, n, r) {
        return (t + r >>> 0 < t ? 1 : 0) + e + n >>> 0
    };
    t.sum64_lo = function(e, t, n, r) {
        return t + r >>> 0
    };
    t.sum64_4_hi = function(e, t, n, r, i, a, o, s) {
        var u, c = t;
        return u = 0 + ((c = c + r >>> 0) < t ? 1 : 0), u += (c = c + a >>> 0) < a ? 1 : 0, e + n + i + o + (u += (c = c + s >>> 0) < s ? 1 : 0) >>> 0
    };
    t.sum64_4_lo = function(e, t, n, r, i, a, o, s) {
        return t + r + a + s >>> 0
    };
    t.sum64_5_hi = function(e, t, n, r, i, a, o, s, u, c) {
        var l, d = t;
        return l = 0 + ((d = d + r >>> 0) < t ? 1 : 0), l += (d = d + a >>> 0) < a ? 1 : 0, l += (d = d + s >>> 0) < s ? 1 : 0, e + n + i + o + u + (l += (d = d + c >>> 0) < c ? 1 : 0) >>> 0
    };
    t.sum64_5_lo = function(e, t, n, r, i, a, o, s, u, c) {
        return t + r + a + s + c >>> 0
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