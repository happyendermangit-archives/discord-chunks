function(e, t, n) {
    "use strict";
    var r = n("546299"),
        i = n("261638"),
        a = n("411108"),
        o = r.rotl32,
        s = r.sum32,
        u = r.sum32_5,
        c = a.ft_1,
        l = i.BlockHash,
        d = [1518500249, 1859775393, 2400959708, 3395469782];

    function f() {
        if (!(this instanceof f)) return new f;
        l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = Array(80)
    }
    r.inherits(f, l), e.exports = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 80, f.padLength = 64, f.prototype._update = function(e, t) {
        for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
        for (; r < n.length; r++) n[r] = o(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
        var i = this.h[0],
            a = this.h[1],
            l = this.h[2],
            f = this.h[3],
            p = this.h[4];
        for (r = 0; r < n.length; r++) {
            var h = ~~(r / 20),
                m = u(o(i, 5), c(h, a, l, f), p, n[r], d[h]);
            p = f, f = l, l = o(a, 30), a = i, i = m
        }
        this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], l), this.h[3] = s(this.h[3], f), this.h[4] = s(this.h[4], p)
    }, f.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}