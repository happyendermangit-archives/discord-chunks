function(e, t, n) {
    n("424973"), n("70102");
    var r = n("391149"),
        i = n("912065").Buffer,
        o = n("725214"),
        s = n("421630"),
        a = n("441270"),
        c = n("619127"),
        u = n("786561");

    function d(e, t, n) {
        a.call(this), this._cache = new l, this._last = void 0, this._cipher = new c.AES(t), this._prev = i.from(n), this._mode = e, this._autopadding = !0
    }

    function l() {
        this.cache = i.allocUnsafe(0)
    }
    n("599235")(d, a), d.prototype._update = function(e) {
        this._cache.add(e);
        for (var t, n, r = []; t = this._cache.get(this._autopadding);) n = this._mode.decrypt(this, t), r.push(n);
        return i.concat(r)
    }, d.prototype._final = function() {
        var e = this._cache.flush();
        if (this._autopadding) return function(e) {
            var t = e[15];
            if (t < 1 || t > 16) throw Error("unable to decrypt data");
            for (var n = -1; ++n < t;)
                if (e[n + (16 - t)] !== t) throw Error("unable to decrypt data");
            if (16 !== t) return e.slice(0, 16 - t)
        }(this._mode.decrypt(this, e));
        if (e) throw Error("data not multiple of block length")
    }, d.prototype.setAutoPadding = function(e) {
        return this._autopadding = !!e, this
    }, l.prototype.add = function(e) {
        this.cache = i.concat([this.cache, e])
    }, l.prototype.get = function(e) {
        var t;
        if (e) {
            if (this.cache.length > 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t
        } else if (this.cache.length >= 16) return t = this.cache.slice(0, 16), this.cache = this.cache.slice(16), t;
        return null
    }, l.prototype.flush = function() {
        if (this.cache.length) return this.cache
    };

    function f(e, t, n) {
        var a = o[e.toLowerCase()];
        if (!a) throw TypeError("invalid suite type");
        if ("string" == typeof n && (n = i.from(n)), "GCM" !== a.mode && n.length !== a.iv) throw TypeError("invalid iv length " + n.length);
        if ("string" == typeof t && (t = i.from(t)), t.length !== a.key / 8) throw TypeError("invalid key length " + t.length);
        return "stream" === a.type ? new s(a.module, t, n, !0) : "auth" === a.type ? new r(a.module, t, n, !0) : new d(a.module, t, n)
    }
    t.createDecipher = function(e, t) {
        var n = o[e.toLowerCase()];
        if (!n) throw TypeError("invalid suite type");
        var r = u(t, !1, n.key, n.iv);
        return f(e, r.key, r.iv)
    }, t.createDecipheriv = f
}