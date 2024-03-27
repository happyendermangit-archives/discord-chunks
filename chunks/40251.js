function(e, t, n) {
    var r = n("737372"),
        i = n("459584"),
        a = n("957578").Buffer,
        o = n("222822"),
        s = n("764900"),
        u = n("458340"),
        c = n("245413");

    function l(e, t, n) {
        s.call(this), this._cache = new f, this._cipher = new u.AES(t), this._prev = a.from(n), this._mode = e, this._autopadding = !0
    }
    n("689118")(l, s), l.prototype._update = function(e) {
        this._cache.add(e);
        for (var t, n, r = []; t = this._cache.get();) n = this._mode.encrypt(this, t), r.push(n);
        return a.concat(r)
    };
    var d = a.alloc(16, 16);

    function f() {
        this.cache = a.allocUnsafe(0)
    }

    function p(e, t, n) {
        var s = r[e.toLowerCase()];
        if (!s) throw TypeError("invalid suite type");
        if ("string" == typeof t && (t = a.from(t)), t.length !== s.key / 8) throw TypeError("invalid key length " + t.length);
        if ("string" == typeof n && (n = a.from(n)), "GCM" !== s.mode && n.length !== s.iv) throw TypeError("invalid iv length " + n.length);
        return "stream" === s.type ? new o(s.module, t, n) : "auth" === s.type ? new i(s.module, t, n) : new l(s.module, t, n)
    }
    l.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
        if (!e.equals(d)) throw this._cipher.scrub(), Error("data not multiple of block length")
    }, l.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e, this
    }, f.prototype.add = function(e) {
        this.cache = a.concat([this.cache, e])
    }, f.prototype.get = function() {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16), e
        }
        return null
    }, f.prototype.flush = function() {
        for (var e = 16 - this.cache.length, t = a.allocUnsafe(e), n = -1; ++n < e;) t.writeUInt8(e, n);
        return a.concat([this.cache, t])
    };
    t.createCipheriv = p, t.createCipher = function(e, t) {
        var n = r[e.toLowerCase()];
        if (!n) throw TypeError("invalid suite type");
        var i = c(t, !1, n.key, n.iv);
        return p(e, i.key, i.iv)
    }
}