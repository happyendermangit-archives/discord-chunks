function(e, t, n) {
    var r = n("912065").Buffer;

    function i(e) {
        !r.isBuffer(e) && (e = r.from(e));
        for (var t = e.length / 4 | 0, n = Array(t), i = 0; i < t; i++) n[i] = e.readUInt32BE(4 * i);
        return n
    }

    function o(e) {
        for (; 0 < e.length; e++) e[0] = 0
    }

    function s(e, t, n, r, i) {
        for (var o, s, a, c, u = n[0], d = n[1], l = n[2], f = n[3], p = e[0] ^ t[0], h = e[1] ^ t[1], v = e[2] ^ t[2], g = e[3] ^ t[3], b = 4, m = 1; m < i; m++) o = u[p >>> 24] ^ d[h >>> 16 & 255] ^ l[v >>> 8 & 255] ^ f[255 & g] ^ t[b++], s = u[h >>> 24] ^ d[v >>> 16 & 255] ^ l[g >>> 8 & 255] ^ f[255 & p] ^ t[b++], a = u[v >>> 24] ^ d[g >>> 16 & 255] ^ l[p >>> 8 & 255] ^ f[255 & h] ^ t[b++], c = u[g >>> 24] ^ d[p >>> 16 & 255] ^ l[h >>> 8 & 255] ^ f[255 & v] ^ t[b++], p = o, h = s, v = a, g = c;
        return o = (r[p >>> 24] << 24 | r[h >>> 16 & 255] << 16 | r[v >>> 8 & 255] << 8 | r[255 & g]) ^ t[b++], s = (r[h >>> 24] << 24 | r[v >>> 16 & 255] << 16 | r[g >>> 8 & 255] << 8 | r[255 & p]) ^ t[b++], a = (r[v >>> 24] << 24 | r[g >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & h]) ^ t[b++], c = (r[g >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[h >>> 8 & 255] << 8 | r[255 & v]) ^ t[b++], [o >>>= 0, s >>>= 0, a >>>= 0, c >>>= 0]
    }
    var a = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        c = function() {
            for (var e = Array(256), t = 0; t < 256; t++) t < 128 ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
            for (var n = [], r = [], i = [
                    [],
                    [],
                    [],
                    []
                ], o = [
                    [],
                    [],
                    [],
                    []
                ], s = 0, a = 0, c = 0; c < 256; ++c) {
                var u = a ^ a << 1 ^ a << 2 ^ a << 3 ^ a << 4;
                u = u >>> 8 ^ 255 & u ^ 99, n[s] = u, r[u] = s;
                var d = e[s],
                    l = e[d],
                    f = e[l],
                    p = 257 * e[u] ^ 16843008 * u;
                i[0][s] = p << 24 | p >>> 8, i[1][s] = p << 16 | p >>> 16, i[2][s] = p << 8 | p >>> 24, i[3][s] = p, p = 16843009 * f ^ 65537 * l ^ 257 * d ^ 16843008 * s, o[0][u] = p << 24 | p >>> 8, o[1][u] = p << 16 | p >>> 16, o[2][u] = p << 8 | p >>> 24, o[3][u] = p, 0 === s ? s = a = 1 : (s = d ^ e[e[e[f ^ d]]], a ^= e[e[a]])
            }
            return {
                SBOX: n,
                INV_SBOX: r,
                SUB_MIX: i,
                INV_SUB_MIX: o
            }
        }();

    function u(e) {
        this._key = i(e), this._reset()
    }
    u.blockSize = 16, u.keySize = 32, u.prototype.blockSize = u.blockSize, u.prototype.keySize = u.keySize, u.prototype._reset = function() {
        for (var e = this._key, t = e.length, n = t + 6, r = (n + 1) * 4, i = [], o = 0; o < t; o++) i[o] = e[o];
        for (o = t; o < r; o++) {
            var s = i[o - 1];
            o % t == 0 ? (s = s << 8 | s >>> 24, s = (c.SBOX[s >>> 24] << 24 | c.SBOX[s >>> 16 & 255] << 16 | c.SBOX[s >>> 8 & 255] << 8 | c.SBOX[255 & s]) ^ a[o / t | 0] << 24) : t > 6 && o % t == 4 && (s = c.SBOX[s >>> 24] << 24 | c.SBOX[s >>> 16 & 255] << 16 | c.SBOX[s >>> 8 & 255] << 8 | c.SBOX[255 & s]), i[o] = i[o - t] ^ s
        }
        for (var u = [], d = 0; d < r; d++) {
            var l = r - d,
                f = i[l - (d % 4 ? 0 : 4)];
            d < 4 || l <= 4 ? u[d] = f : u[d] = c.INV_SUB_MIX[0][c.SBOX[f >>> 24]] ^ c.INV_SUB_MIX[1][c.SBOX[f >>> 16 & 255]] ^ c.INV_SUB_MIX[2][c.SBOX[f >>> 8 & 255]] ^ c.INV_SUB_MIX[3][c.SBOX[255 & f]]
        }
        this._nRounds = n, this._keySchedule = i, this._invKeySchedule = u
    }, u.prototype.encryptBlockRaw = function(e) {
        return s(e = i(e), this._keySchedule, c.SUB_MIX, c.SBOX, this._nRounds)
    }, u.prototype.encryptBlock = function(e) {
        var t = this.encryptBlockRaw(e),
            n = r.allocUnsafe(16);
        return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n
    }, u.prototype.decryptBlock = function(e) {
        var t = (e = i(e))[1];
        e[1] = e[3], e[3] = t;
        var n = s(e, this._invKeySchedule, c.INV_SUB_MIX, c.INV_SBOX, this._nRounds),
            o = r.allocUnsafe(16);
        return o.writeUInt32BE(n[0], 0), o.writeUInt32BE(n[3], 4), o.writeUInt32BE(n[2], 8), o.writeUInt32BE(n[1], 12), o
    }, u.prototype.scrub = function() {
        o(this._keySchedule), o(this._invKeySchedule), o(this._key)
    }, e.exports.AES = u
}