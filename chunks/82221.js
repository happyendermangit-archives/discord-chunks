function(t, e, s) {
    "use strict";
    s("70102"), s("424973");
    var r = s("912065").Buffer,
        i = s("275682").Transform,
        n = s("599235");

    function c(t) {
        i.call(this), this._block = r.allocUnsafe(t), this._blockSize = t, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    n(c, i), c.prototype._transform = function(t, e, s) {
        var r = null;
        try {
            this.update(t, e)
        } catch (t) {
            r = t
        }
        s(r)
    }, c.prototype._flush = function(t) {
        var e = null;
        try {
            this.push(this.digest())
        } catch (t) {
            e = t
        }
        t(e)
    }, c.prototype.update = function(t, e) {
        if (! function(t, e) {
                if (!r.isBuffer(t) && "string" != typeof t) throw TypeError(e + " must be a string or a buffer")
            }(t, "Data"), this._finalized) throw Error("Digest already called");
        !r.isBuffer(t) && (t = r.from(t, e));
        for (var s = this._block, i = 0; this._blockOffset + t.length - i >= this._blockSize;) {
            for (var n = this._blockOffset; n < this._blockSize;) s[n++] = t[i++];
            this._update(), this._blockOffset = 0
        }
        for (; i < t.length;) s[this._blockOffset++] = t[i++];
        for (var c = 0, o = 8 * t.length; o > 0; ++c) this._length[c] += o, (o = this._length[c] / 4294967296 | 0) > 0 && (this._length[c] -= 4294967296 * o);
        return this
    }, c.prototype._update = function() {
        throw Error("_update is not implemented")
    }, c.prototype.digest = function(t) {
        if (this._finalized) throw Error("Digest already called");
        this._finalized = !0;
        var e = this._digest();
        void 0 !== t && (e = e.toString(t)), this._block.fill(0), this._blockOffset = 0;
        for (var s = 0; s < 4; ++s) this._length[s] = 0;
        return e
    }, c.prototype._digest = function() {
        throw Error("_digest is not implemented")
    }, t.exports = c
}