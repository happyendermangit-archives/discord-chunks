function(e, t, n) {
    var r = n("459584"),
        i = n("957578").Buffer,
        a = n("737372"),
        o = n("222822"),
        s = n("764900"),
        u = n("458340"),
        c = n("245413");

    function l(e, t, n) {
        s.call(this), this._cache = new d, this._last = void 0, this._cipher = new u.AES(t), this._prev = i.from(n), this._mode = e, this._autopadding = !0
    }

    function d() {
        this.cache = i.allocUnsafe(0)
    }
    n("689118")(l, s), l.prototype._update = function(e) {
        this._cache.add(e);
        for (var t, n, r = []; t = this._cache.get(this._autopadding);) n = this._mode.decrypt(this, t), r.push(n);
        return i.concat(r)
    }, l.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding) return function(e) {
            var t = e[15];
            if (t < 1 || t > 16) throw Error("unable to decrypt data");
            for (var n = -1; ++n < t;)
                if (e[n + (16 - t)] !== t) throw Error("unable to decrypt data");
            if (16 !== t) return e.slice(0, 16 - t)
        }(this._mode.decrypt(this, e));
        if (e) throw Error("data not multiple of block length")
    }, l.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e, this
    }, d.prototype.add = function(e) {
        this.cache = i.concat([this.cache, e])
    }, d.prototype.get = function(e) {
        var t;
        if (e) {
            if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
        } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
        return null
    }, d.prototype.flush = function() {
        if (this.cache.length) return this.cache
    };

    function f(e, t, n) {
        var s = a[e.toLowerCase()];
        if (!s) throw TypeError("invalid suite type");
        if ("string" == typeof n && (n = i.from(n)), "GCM" !== s.mode && n.length !== s.iv) throw TypeError("invalid iv length " + n.length);
        if ("string" == typeof t && (t = i.from(t)), t.length !== s.key / 8) throw TypeError("invalid key length " + t.length);
        return "stream" === s.type ? new o(s.module, t, n, !0) : "auth" === s.type ? new r(s.module, t, n, !0) : new l(s.module, t, n)
    }
    t.createDecipher = function(e, t) {
        var n = a[e.toLowerCase()];
        if (!n) throw TypeError("invalid suite type");
        var r = c(t, !1, n.key, n.iv);
        return f(e, r.key, r.iv)
    }, t.createDecipheriv = f
}