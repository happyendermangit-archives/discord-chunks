function(t, e, s) {
    s("70102");
    var r = s("912065").Buffer;

    function i(t, e) {
        this._block = r.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0
    }
    i.prototype.update = function(t, e) {
        "string" == typeof t && (e = e || "utf8", t = r.from(t, e));
        for (var s = this._block, i = this._blockSize, n = t.length, c = this._len, o = 0; o < n;) {
            for (var f = c % i, u = Math.min(n - o, i - f), a = 0; a < u; a++) s[f + a] = t[o + a];
            c += u, o += u, c % i == 0 && this._update(s)
        }
        return this._len += n, this
    }, i.prototype.digest = function(t) {
        var e = this._len % this._blockSize;
        this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var s = 8 * this._len;
        if (s <= 4294967295) this._block.writeUInt32BE(s, this._blockSize - 4);
        else {
            var r = (4294967295 & s) >>> 0;
            this._block.writeUInt32BE((s - r) / 4294967296, this._blockSize - 8), this._block.writeUInt32BE(r, this._blockSize - 4)
        }
        this._update(this._block);
        var i = this._hash();
        return t ? i.toString(t) : i
    }, i.prototype._update = function() {
        throw Error("_update must be implemented by subclass")
    }, t.exports = i
}