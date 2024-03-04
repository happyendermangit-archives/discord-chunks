function(e, t, n) {
    "use strict";
    var r = n("555671"),
        i = n("256385"),
        o = n("408109"),
        s = r.rotl32,
        a = r.sum32,
        c = r.sum32_5,
        u = o.ft_1,
        d = i.BlockHash,
        l = [1518500249, 1859775393, 2400959708, 3395469782];

    function f() {
        if (!(this instanceof f)) return new f;
        d.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
    }
    r.inherits(f, d), e.exports = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 80, f.padLength = 64, f.prototype._update = function(e, t) {
        for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
        for (; r < n.length; r++) n[r] = s(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
        var i = this.h[0],
            o = this.h[1],
            d = this.h[2],
            f = this.h[3],
            p = this.h[4];
        for (r = 0; r < n.length; r++) {
            var h = ~~(r / 20),
                v = c(s(i, 5), u(h, o, d, f), p, n[r], l[h]);
            p = f, f = d, d = s(o, 30), o = i, i = v
        }
        this.h[0] = a(this.h[0], i), this.h[1] = a(this.h[1], o), this.h[2] = a(this.h[2], d), this.h[3] = a(this.h[3], f), this.h[4] = a(this.h[4], p)
    }, f.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}