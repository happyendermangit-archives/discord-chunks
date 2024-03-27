function(e, t, n) {
    var r = n("957578").Buffer;

    function i(e) {
        !r.isBuffer(e) && (e = r.from(e));
        for (var t = e.length / 4 | 0, n = Array(t), i = 0; i < t; i++) n[i] = e.readUInt32BE(4 * i);
        return n
    }

    function a(e) {
        for (; 0 < e.length; e++) e[0] = 0
    }

    function o(e, t, n, r, i) {
        for (var a, o, s, u, c = n[0], l = n[1], d = n[2], f = n[3], p = e[0] ^ t[0], h = e[1] ^ t[1], m = e[2] ^ t[2], g = e[3] ^ t[3], _ = 4, b = 1; b < i; b++) a = c[p >>> 24] ^ l[h >>> 16 & 255] ^ d[m >>> 8 & 255] ^ f[255 & g] ^ t[_++], o = c[h >>> 24] ^ l[m >>> 16 & 255] ^ d[g >>> 8 & 255] ^ f[255 & p] ^ t[_++], s = c[m >>> 24] ^ l[g >>> 16 & 255] ^ d[p >>> 8 & 255] ^ f[255 & h] ^ t[_++], u = c[g >>> 24] ^ l[p >>> 16 & 255] ^ d[h >>> 8 & 255] ^ f[255 & m] ^ t[_++], p = a, h = o, m = s, g = u;
        return a = (r[p >>> 24] << 24 | r[h >>> 16 & 255] << 16 | r[m >>> 8 & 255] << 8 | r[255 & g]) ^ t[_++], o = (r[h >>> 24] << 24 | r[m >>> 16 & 255] << 16 | r[g >>> 8 & 255] << 8 | r[255 & p]) ^ t[_++], s = (r[m >>> 24] << 24 | r[g >>> 16 & 255] << 16 | r[p >>> 8 & 255] << 8 | r[255 & h]) ^ t[_++], u = (r[g >>> 24] << 24 | r[p >>> 16 & 255] << 16 | r[h >>> 8 & 255] << 8 | r[255 & m]) ^ t[_++], [a >>>= 0, o >>>= 0, s >>>= 0, u >>>= 0]
    }
    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        u = function() {
            for (var e = Array(256), t = 0; t < 256; t++) t < 128 ? e[t] = t << 1 : e[t] = t << 1 ^ 283;
            for (var n = [], r = [], i = [
                    [],
                    [],
                    [],
                    []
                ], a = [
                    [],
                    [],
                    [],
                    []
                ], o = 0, s = 0, u = 0; u < 256; ++u) {
                var c = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
                c = c >>> 8 ^ 255 & c ^ 99, n[o] = c, r[c] = o;
                var l = e[o],
                    d = e[l],
                    f = e[d],
                    p = 257 * e[c] ^ 16843008 * c;
                i[0][o] = p << 24 | p >>> 8, i[1][o] = p << 16 | p >>> 16, i[2][o] = p << 8 | p >>> 24, i[3][o] = p, p = 16843009 * f ^ 65537 * d ^ 257 * l ^ 16843008 * o, a[0][c] = p << 24 | p >>> 8, a[1][c] = p << 16 | p >>> 16, a[2][c] = p << 8 | p >>> 24, a[3][c] = p, 0 === o ? o = s = 1 : (o = l ^ e[e[e[f ^ l]]], s ^= e[e[s]])
            }
            return {
                SBOX: n,
                INV_SBOX: r,
                SUB_MIX: i,
                INV_SUB_MIX: a
            }
        }();

    function c(e) {
        this._key = i(e), this._reset()
    }
    c.blockSize = 16, c.keySize = 32, c.prototype.blockSize = c.blockSize, c.prototype.keySize = c.keySize, c.prototype._reset = function() {
        for (var e = this._key, t = e.length, n = t + 6, r = (n + 1) * 4, i = [], a = 0; a < t; a++) i[a] = e[a];
        for (a = t; a < r; a++) {
            var o = i[a - 1];
            a % t == 0 ? (o = o << 8 | o >>> 24, o = (u.SBOX[o >>> 24] << 24 | u.SBOX[o >>> 16 & 255] << 16 | u.SBOX[o >>> 8 & 255] << 8 | u.SBOX[255 & o]) ^ s[a / t | 0] << 24) : t > 6 && a % t == 4 && (o = u.SBOX[o >>> 24] << 24 | u.SBOX[o >>> 16 & 255] << 16 | u.SBOX[o >>> 8 & 255] << 8 | u.SBOX[255 & o]), i[a] = i[a - t] ^ o
        }
        for (var c = [], l = 0; l < r; l++) {
            var d = r - l,
                f = i[d - (l % 4 ? 0 : 4)];
            l < 4 || d <= 4 ? c[l] = f : c[l] = u.INV_SUB_MIX[0][u.SBOX[f >>> 24]] ^ u.INV_SUB_MIX[1][u.SBOX[f >>> 16 & 255]] ^ u.INV_SUB_MIX[2][u.SBOX[f >>> 8 & 255]] ^ u.INV_SUB_MIX[3][u.SBOX[255 & f]]
        }
        this._nRounds = n, this._keySchedule = i, this._invKeySchedule = c
    }, c.prototype.encryptBlockRaw = function(e) {
        return o(e = i(e), this._keySchedule, u.SUB_MIX, u.SBOX, this._nRounds)
    }, c.prototype.encryptBlock = function(e) {
        var t = this.encryptBlockRaw(e),
            n = r.allocUnsafe(16);
        return n.writeUInt32BE(t[0], 0), n.writeUInt32BE(t[1], 4), n.writeUInt32BE(t[2], 8), n.writeUInt32BE(t[3], 12), n
    }, c.prototype.decryptBlock = function(e) {
        var t = (e = i(e))[1];
        e[1] = e[3], e[3] = t;
        var n = o(e, this._invKeySchedule, u.INV_SUB_MIX, u.INV_SBOX, this._nRounds),
            a = r.allocUnsafe(16);
        return a.writeUInt32BE(n[0], 0), a.writeUInt32BE(n[3], 4), a.writeUInt32BE(n[2], 8), a.writeUInt32BE(n[1], 12), a
    }, c.prototype.scrub = function() {
        a(this._keySchedule), a(this._invKeySchedule), a(this._key)
    }, e.exports.AES = c
}