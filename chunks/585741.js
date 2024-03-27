function(e, t, n) {
    "use strict";
    var r = n("546299"),
        i = n("261638"),
        a = n("411108"),
        o = n("21841"),
        s = r.sum32,
        u = r.sum32_4,
        c = r.sum32_5,
        l = a.ch32,
        d = a.maj32,
        f = a.s0_256,
        p = a.s1_256,
        h = a.g0_256,
        m = a.g1_256,
        g = i.BlockHash,
        _ = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

    function b() {
        if (!(this instanceof b)) return new b;
        g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = _, this.W = Array(64)
    }
    r.inherits(b, g), e.exports = b, b.blockSize = 512, b.outSize = 256, b.hmacStrength = 192, b.padLength = 64, b.prototype._update = function(e, t) {
        for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
        for (; r < n.length; r++) n[r] = u(m(n[r - 2]), n[r - 7], h(n[r - 15]), n[r - 16]);
        var i = this.h[0],
            a = this.h[1],
            g = this.h[2],
            _ = this.h[3],
            b = this.h[4],
            v = this.h[5],
            y = this.h[6],
            E = this.h[7];
        for (o(this.k.length === n.length), r = 0; r < n.length; r++) {
            var S = c(E, p(b), l(b, v, y), this.k[r], n[r]),
                x = s(f(i), d(i, a, g));
            E = y, y = v, v = b, b = s(_, S), _ = g, g = a, a = i, i = s(S, x)
        }
        this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], a), this.h[2] = s(this.h[2], g), this.h[3] = s(this.h[3], _), this.h[4] = s(this.h[4], b), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], y), this.h[7] = s(this.h[7], E)
    }, b.prototype._digest = function(e) {
        return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}