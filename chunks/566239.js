function(e, t, n) {
    "use strict";
    n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
    var r = n("112774"),
        i = !0,
        o = !0;
    try {
        String.fromCharCode.apply(null, [0])
    } catch (e) {
        i = !1
    }
    try {
        String.fromCharCode.apply(null, new Uint8Array(1))
    } catch (e) {
        o = !1
    }
    for (var s = new r.Buf8(256), a = 0; a < 256; a++) s[a] = a >= 252 ? 6 : a >= 248 ? 5 : a >= 240 ? 4 : a >= 224 ? 3 : a >= 192 ? 2 : 1;

    function c(e, t) {
        if (t < 65534 && (e.subarray && o || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
        for (var n = "", s = 0; s < t; s++) n += String.fromCharCode(e[s]);
        return n
    }
    s[254] = s[254] = 1, t.string2buf = function(e) {
        var t, n, i, o, s, a = e.length,
            c = 0;
        for (o = 0; o < a; o++)(64512 & (n = e.charCodeAt(o))) == 55296 && o + 1 < a && (64512 & (i = e.charCodeAt(o + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
        for (s = 0, t = new r.Buf8(c), o = 0; s < c; o++)(64512 & (n = e.charCodeAt(o))) == 55296 && o + 1 < a && (64512 & (i = e.charCodeAt(o + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), o++), n < 128 ? t[s++] = n : (n < 2048 ? t[s++] = 192 | n >>> 6 : (n < 65536 ? t[s++] = 224 | n >>> 12 : (t[s++] = 240 | n >>> 18, t[s++] = 128 | n >>> 12 & 63), t[s++] = 128 | n >>> 6 & 63), t[s++] = 128 | 63 & n);
        return t
    }, t.buf2binstring = function(e) {
        return c(e, e.length)
    }, t.binstring2buf = function(e) {
        for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
        return t
    }, t.buf2string = function(e, t) {
        var n, r, i, o, a = t || e.length,
            u = Array(2 * a);
        for (r = 0, n = 0; n < a;) {
            if ((i = e[n++]) < 128) {
                u[r++] = i;
                continue
            }
            if ((o = s[i]) > 4) {
                u[r++] = 65533, n += o - 1;
                continue
            }
            for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && n < a;) i = i << 6 | 63 & e[n++], o--;
            if (o > 1) {
                u[r++] = 65533;
                continue
            }
            i < 65536 ? u[r++] = i : (i -= 65536, u[r++] = 55296 | i >> 10 & 1023, u[r++] = 56320 | 1023 & i)
        }
        return c(u, r)
    }, t.utf8border = function(e, t) {
        var n;
        for ((t = t || e.length) > e.length && (t = e.length), n = t - 1; n >= 0 && (192 & e[n]) == 128;) n--;
        return n < 0 || 0 === n ? t : n + s[e[n]] > t ? n : t
    }
}