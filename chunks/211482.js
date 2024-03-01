function(t, e, s) {
    "use strict";
    var r = s("555671"),
        i = s("256385"),
        n = r.rotl32,
        c = r.sum32,
        o = r.sum32_3,
        f = r.sum32_4,
        u = i.BlockHash;

    function a() {
        if (!(this instanceof a)) return new a;
        u.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
    }

    function d(t, e, s, r) {
        if (t <= 15) return e ^ s ^ r;
        if (t <= 31) return e & s | ~e & r;
        if (t <= 47) return (e | ~s) ^ r;
        else if (t <= 63) return e & r | s & ~r;
        else return e ^ (s | ~r)
    }
    r.inherits(a, u), e.ripemd160 = a, a.blockSize = 512, a.outSize = 160, a.hmacStrength = 192, a.padLength = 64, a.prototype._update = function(t, e) {
        for (var s = this.h[0], r = this.h[1], i = this.h[2], u = this.h[3], a = this.h[4], g = s, v = r, x = i, m = u, y = a, _ = 0; _ < 80; _++) {
            var w = c(n(f(s, d(_, r, i, u), t[p[_] + e], function(t) {
                if (t <= 15) return 0;
                if (t <= 31) return 1518500249;
                if (t <= 47) return 1859775393;
                else if (t <= 63) return 2400959708;
                else return 2840853838
            }(_)), h[_]), a);
            s = a, a = u, u = n(i, 10), i = r, r = w, w = c(n(f(g, d(79 - _, v, x, m), t[b[_] + e], function(t) {
                if (t <= 15) return 1352829926;
                if (t <= 31) return 1548603684;
                if (t <= 47) return 1836072691;
                else if (t <= 63) return 2053994217;
                else return 0
            }(_)), l[_]), y), g = y, y = m, m = n(x, 10), x = v, v = w
        }
        w = o(this.h[1], i, m), this.h[1] = o(this.h[2], u, y), this.h[2] = o(this.h[3], a, g), this.h[3] = o(this.h[4], s, v), this.h[4] = o(this.h[0], r, x), this.h[0] = w
    }, a.prototype._digest = function(t) {
        return "hex" === t ? r.toHex32(this.h, "little") : r.split32(this.h, "little")
    };
    var p = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        b = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        l = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
}