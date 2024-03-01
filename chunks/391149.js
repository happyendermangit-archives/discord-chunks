function(t, e, s) {
    s("854508"), s("70102");
    var r = s("619127"),
        i = s("912065").Buffer,
        n = s("441270"),
        c = s("599235"),
        o = s("820457"),
        f = s("687185"),
        u = s("135042");

    function a(t, e, s, c) {
        n.call(this);
        var f = i.alloc(4, 0);
        this._cipher = new r.AES(e);
        var a = this._cipher.encryptBlock(f);
        this._ghash = new o(a), s = function(t, e, s) {
            if (12 === e.length) return t._finID = i.concat([e, i.from([0, 0, 0, 1])]), i.concat([e, i.from([0, 0, 0, 2])]);
            var r = new o(s),
                n = e.length,
                c = n % 16;
            r.update(e), c && (c = 16 - c, r.update(i.alloc(c, 0))), r.update(i.alloc(8, 0));
            var f = i.alloc(8);
            f.writeUIntBE(8 * n, 0, 8), r.update(f), t._finID = r.state;
            var a = i.from(t._finID);
            return u(a), a
        }(this, s, a), this._prev = i.from(s), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = c, this._alen = 0, this._len = 0, this._mode = t, this._authTag = null, this._called = !1
    }
    c(a, n), a.prototype._update = function(t) {
        if (!this._called && this._alen) {
            var e = 16 - this._alen % 16;
            e < 16 && (e = i.alloc(e, 0), this._ghash.update(e))
        }
        this._called = !0;
        var s = this._mode.encrypt(this, t);
        return this._decrypt ? this._ghash.update(t) : this._ghash.update(s), this._len += t.length, s
    }, a.prototype._final = function() {
        if (this._decrypt && !this._authTag) throw Error("Unsupported state or unable to authenticate data");
        var t = f(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function(t, e) {
                var s = 0;
                t.length !== e.length && s++;
                for (var r = Math.min(t.length, e.length), i = 0; i < r; ++i) s += t[i] ^ e[i];
                return s
            }(t, this._authTag)) throw Error("Unsupported state or unable to authenticate data");
        this._authTag = t, this._cipher.scrub()
    }, a.prototype.getAuthTag = function() {
        if (this._decrypt || !i.isBuffer(this._authTag)) throw Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }, a.prototype.setAuthTag = function(t) {
        if (!this._decrypt) throw Error("Attempting to set auth tag in unsupported state");
        this._authTag = t
    }, a.prototype.setAAD = function(t) {
        if (this._called) throw Error("Attempting to set AAD in unsupported state");
        this._ghash.update(t), this._alen += t.length
    }, t.exports = a
}