function(e, t) {
    "use strict";
    t.byteLength = function(e) {
        var t = u(e),
            n = t[0],
            r = t[1];
        return (n + r) * 3 / 4 - r
    }, t.toByteArray = function(e) {
        var t, n, a, o, s = u(e),
            c = s[0],
            l = s[1];
        var d = new i((t = 0, (c + (n = l)) * 3 / 4 - n)),
            f = 0,
            p = l > 0 ? c - 4 : c;
        for (o = 0; o < p; o += 4) a = r[e.charCodeAt(o)] << 18 | r[e.charCodeAt(o + 1)] << 12 | r[e.charCodeAt(o + 2)] << 6 | r[e.charCodeAt(o + 3)], d[f++] = a >> 16 & 255, d[f++] = a >> 8 & 255, d[f++] = 255 & a;
        return 2 === l && (a = r[e.charCodeAt(o)] << 2 | r[e.charCodeAt(o + 1)] >> 4, d[f++] = 255 & a), 1 === l && (a = r[e.charCodeAt(o)] << 10 | r[e.charCodeAt(o + 1)] << 4 | r[e.charCodeAt(o + 2)] >> 2, d[f++] = a >> 8 & 255, d[f++] = 255 & a), d
    }, t.fromByteArray = function(e) {
        for (var t, r = e.length, i = r % 3, a = [], o = 0, s = r - i; o < s; o += 16383) a.push(function(e, t, r) {
            for (var i, a, o = [], s = t; s < r; s += 3) {
                ;
                a = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(n[(i = a) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i])
            }
            return o.join("")
        }(e, o, o + 16383 > s ? s : o + 16383));
        return 1 === i ? (t = e[r - 1], a.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], a.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "=")), a.join("")
    };
    for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, s = a.length; o < s; ++o) n[o] = a[o], r[a.charCodeAt(o)] = o;

    function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("="); - 1 === n && (n = t);
        var r = n === t ? 0 : 4 - n % 4;
        return [n, r]
    }
    r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
}