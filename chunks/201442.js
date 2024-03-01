function(t, e, s) {
    "use strict";
    var r = s("555671"),
        i = s("256385"),
        n = s("408109"),
        c = s("463483"),
        o = r.sum32,
        f = r.sum32_4,
        u = r.sum32_5,
        a = n.ch32,
        d = n.maj32,
        p = n.s0_256,
        b = n.s1_256,
        h = n.g0_256,
        l = n.g1_256,
        g = i.BlockHash,
        v = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

    function x() {
        if (!(this instanceof x)) return new x;
        g.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = v, this.W = Array(64)
    }
    r.inherits(x, g), t.exports = x, x.blockSize = 512, x.outSize = 256, x.hmacStrength = 192, x.padLength = 64, x.prototype._update = function(t, e) {
        for (var s = this.W, r = 0; r < 16; r++) s[r] = t[e + r];
        for (; r < s.length; r++) s[r] = f(l(s[r - 2]), s[r - 7], h(s[r - 15]), s[r - 16]);
        var i = this.h[0],
            n = this.h[1],
            g = this.h[2],
            v = this.h[3],
            x = this.h[4],
            m = this.h[5],
            y = this.h[6],
            _ = this.h[7];
        for (c(this.k.length === s.length), r = 0; r < s.length; r++) {
            var w = u(_, b(x), a(x, m, y), this.k[r], s[r]),
                M = o(p(i), d(i, n, g));
            _ = y, y = m, m = x, x = o(v, w), v = g, g = n, n = i, i = o(w, M)
        }
        this.h[0] = o(this.h[0], i), this.h[1] = o(this.h[1], n), this.h[2] = o(this.h[2], g), this.h[3] = o(this.h[3], v), this.h[4] = o(this.h[4], x), this.h[5] = o(this.h[5], m), this.h[6] = o(this.h[6], y), this.h[7] = o(this.h[7], _)
    }, x.prototype._digest = function(t) {
        return "hex" === t ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
    }
}