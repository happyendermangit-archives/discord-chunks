function(e, t, n) {
    n("424973"), n("70102");
    var r = n("725214"),
        i = n("391149"),
        o = n("912065").Buffer,
        s = n("421630"),
        a = n("441270"),
        c = n("619127"),
        u = n("786561");

    function d(e, t, n) {
        a.call(this), this._cache = new f, this._cipher = new c.AES(t), this._prev = o.from(n), this._mode = e, this._autopadding = !0
    }
    n("599235")(d, a), d.prototype._update = function(e) {
        this._cache.add(e);
        for (var t, n, r = []; t = this._cache.get();) n = this._mode.encrypt(this, t), r.push(n);
        return o.concat(r)
    };
    var l = o.alloc(16, 16);

    function f() {
        this.cache = o.allocUnsafe(0)
    }

    function p(e, t, n) {
        var a = r[e.toLowerCase()];
        if (!a) throw TypeError("invalid suite type");
        if ("string" == typeof t && (t = o.from(t)), t.length !== a.key / 8) throw TypeError("invalid key length " + t.length);
        if ("string" == typeof n && (n = o.from(n)), "GCM" !== a.mode && n.length !== a.iv) throw TypeError("invalid iv length " + n.length);
        return "stream" === a.type ? new s(a.module, t, n) : "auth" === a.type ? new i(a.module, t, n) : new d(a.module, t, n)
    }
    d.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding) return e = this._mode.encrypt(this, e), this._cipher.scrub(), e;
        if (!e.equals(l)) throw this._cipher.scrub(), Error("data not multiple of block length")
    }, d.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e, this
    }, f.prototype.add = function(e) {
        this.cache = o.concat([this.cache, e])
    }, f.prototype.get = function() {
        if (this.cache.length > 15) {
            var e = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16), e
        }
        return null
    }, f.prototype.flush = function() {
        for (var e = 16 - this.cache.length, t = o.allocUnsafe(e), n = -1; ++n < e;) t.writeUInt8(e, n);
        return o.concat([this.cache, t])
    };
    t.createCipheriv = p, t.createCipher = function(e, t) {
        var n = r[e.toLowerCase()];
        if (!n) throw TypeError("invalid suite type");
        var i = u(t, !1, n.key, n.iv);
        return p(e, i.key, i.iv)
    }
}