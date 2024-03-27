function(e, t, n) {
    var r = n("458340"),
        i = n("957578").Buffer,
        a = n("764900"),
        o = n("689118"),
        s = n("285844"),
        u = n("257693"),
        c = n("875115");

    function l(e, t, n, o) {
        a.call(this);
        var u = i.alloc(4, 0);
        this._cipher = new r.AES(t);
        var l = this._cipher.encryptBlock(u);
        this._ghash = new s(l), n = function(e, t, n) {
            if (12 === t.length) return e._finID = i.concat([t, i.from([0, 0, 0, 1])]), i.concat([t, i.from([0, 0, 0, 2])]);
            var r = new s(n),
                a = t.length,
                o = a % 16;
            r.update(t), o && (o = 16 - o, r.update(i.alloc(o, 0))), r.update(i.alloc(8, 0));
            var u = i.alloc(8);
            u.writeUIntBE(8 * a, 0, 8), r.update(u), e._finID = r.state;
            var l = i.from(e._finID);
            return c(l), l
        }(this, n, l), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = o, this._alen = 0, this._len = 0, this._mode = e, this._authTag = null, this._called = !1
    }
    o(l, a), l.prototype._update = function(e) {
        if (!this._called && this._alen) {
            var t = 16 - this._alen % 16;
            t < 16 && (t = i.alloc(t, 0), this._ghash.update(t))
        }
        this._called = !0;
        var n = this._mode.encrypt(this, e);
        return this._decrypt ? this._ghash.update(e) : this._ghash.update(n), this._len += e.length, n
    }, l.prototype._final = function() {
        if (this._decrypt && !this._authTag) throw Error("Unsupported state or unable to authenticate data");
        var e = u(this._ghash.final(8 * this._alen, 8 * this._len), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && function(e, t) {
                var n = 0;
                e.length !== t.length && n++;
                for (var r = Math.min(e.length, t.length), i = 0; i < r; ++i) n += e[i] ^ t[i];
                return n
            }(e, this._authTag)) throw Error("Unsupported state or unable to authenticate data");
        this._authTag = e, this._cipher.scrub()
    }, l.prototype.getAuthTag = function() {
        if (this._decrypt || !i.isBuffer(this._authTag)) throw Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }, l.prototype.setAuthTag = function(e) {
        if (!this._decrypt) throw Error("Attempting to set auth tag in unsupported state");
        this._authTag = e
    }, l.prototype.setAAD = function(e) {
        if (this._called) throw Error("Attempting to set AAD in unsupported state");
        this._ghash.update(e), this._alen += e.length
    }, e.exports = l
}