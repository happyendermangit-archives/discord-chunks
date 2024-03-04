function(e, t, n) {
    n("854508"), n("70102");
    var r = n("619127"),
        i = n("912065").Buffer,
        o = n("441270"),
        s = n("599235"),
        a = n("820457"),
        c = n("687185"),
        u = n("135042");

    function d(e, t, n, s) {
        o.call(this);
        var c = i.alloc(4, 0);
        this._cipher = new r.AES(t);
        var d = this._cipher.encryptBlock(c);
        this._ghash = new a(d), n = function(e, t, n) {
            if (12 === t.length) return e._finID = i.concat([t, i.from([0, 0, 0, 1])]), i.concat([t, i.from([0, 0, 0, 2])]);
            var r = new a(n),
                o = t.length,
                s = o % 16;
            r.update(t), s && (s = 16 - s, r.update(i.alloc(s, 0))), r.update(i.alloc(8, 0));
            var c = i.alloc(8);
            c.writeUIntBE(8 * o, 0, 8), r.update(c), e._finID = r.state;
            var d = i.from(e._finID);
            return u(d), d
        }(this, n, d), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = s, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1
    }
    s(d, o), d.prototype._update = function(e) {
        if (!this._called && this._alen) {
            var t = 16 - this._alen % 16;
            t < 16 && (t = i.alloc(t, 0), this._ghash.update(t))
        }
        this._called = !0;
        var n = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(n), this._len += e.length, n
    }, d.prototype._final = function() {
        if (this._decrypt && !this._authTag) throw Error("Unsupported state or unable to authenticate data");
        var e = c(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function(e, t) {
                var n = 0;
                e.length !== t.length && n++;
                for (var r = Math.min(e.length, t.length), i = 0; i < r; ++i) n += e[i] ^ t[i];
                return n
            }(e, this._authTag)) throw Error("Unsupported state or unable to authenticate data");
        this._authTag = e, this._cipher.scrub()
    }, d.prototype.getAuthTag = function() {
        if (this._decrypt || !i.isBuffer(this._authTag)) throw Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }, d.prototype.setAuthTag = function(e) {
        if (!this._decrypt) throw Error("Attempting to set auth tag in unsupported state");
        this._authTag = e
    }, d.prototype.setAAD = function(e) {
        if (this._called) throw Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e), this._alen += e.length
    }, e.exports = d
}