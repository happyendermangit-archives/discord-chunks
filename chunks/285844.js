function(e, t, n) {
    var r = n("957578").Buffer,
        i = r.alloc(16, 0);

    function a(e) {
        var t = r.allocUnsafe(16);
        return t.writeUInt32BE(e[0] >>> 0, 0), t.writeUInt32BE(e[1] >>> 0, 4), t.writeUInt32BE(e[2] >>> 0, 8), t.writeUInt32BE(e[3] >>> 0, 12), t
    }

    function o(e) {
        this.h = e, this.state = r.alloc(16, 0), this.cache = r.allocUnsafe(0)
    }
    o.prototype.ghash = function(e) {
        for (var t = -1; ++t < e.length;) this.state[t] ^= e[t];
        this._multiply()
    }, o.prototype._multiply = function() {
        for (var e, t, n, r = [(e = this.h).readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)], i = [0, 0, 0, 0], o = -1; ++o < 128;) {
            for ((this.state[~~(o / 8)] & 1 << 7 - o % 8) != 0 && (i[0] ^= r[0], i[1] ^= r[1], i[2] ^= r[2], i[3] ^= r[3]), n = (1 & r[3]) != 0, t = 3; t > 0; t--) r[t] = r[t] >>> 1 | (1 & r[t - 1]) << 31;
            r[0] = r[0] >>> 1, n && (r[0] = -520093696 ^ r[0])
        }
        this.state = a(i)
    }, o.prototype.update = function(e) {
        var t;
        for (this.cache = r.concat([this.cache, e]); this.cache.length >= 16;) t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(t)
    }, o.prototype.final = function(e, t) {
        return this.cache.length && this.ghash(r.concat([this.cache, i], 16)), this.ghash(a([0, e, 0, t])), this.state
    }, e.exports = o
}