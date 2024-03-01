function(t, e, s) {
    s("70102");
    var r = s("912065").Buffer,
        i = s("488274"),
        n = s("275682"),
        c = s("599235"),
        o = s("553999"),
        f = s("981491"),
        u = s("951350");

    function a(t) {
        n.Writable.call(this);
        var e = u[t];
        if (!e) throw Error("Unknown message digest");
        this._hashType = e.hash, this._hash = i(e.hash), this._tag = e.id, this._signType = e.sign
    }

    function d(t) {
        n.Writable.call(this);
        var e = u[t];
        if (!e) throw Error("Unknown message digest");
        this._hash = i(e.hash), this._tag = e.id, this._signType = e.sign
    }

    function p(t) {
        return new a(t)
    }

    function b(t) {
        return new d(t)
    }
    Object.keys(u).forEach(function(t) {
        u[t].id = r.from(u[t].id, "hex"), u[t.toLowerCase()] = u[t]
    }), c(a, n.Writable), a.prototype._write = function(t, e, s) {
        this._hash.update(t), s()
    }, a.prototype.update = function(t, e) {
        return "string" == typeof t && (t = r.from(t, e)), this._hash.update(t), this
    }, a.prototype.sign = function(t, e) {
        this.end();
        var s = o(this._hash.digest(), t, this._hashType, this._signType, this._tag);
        return e ? s.toString(e) : s
    }, c(d, n.Writable), d.prototype._write = function(t, e, s) {
        this._hash.update(t), s()
    }, d.prototype.update = function(t, e) {
        return "string" == typeof t && (t = r.from(t, e)), this._hash.update(t), this
    }, d.prototype.verify = function(t, e, s) {
        return "string" == typeof e && (e = r.from(e, s)), this.end(), f(e, this._hash.digest(), t, this._signType, this._tag)
    }, t.exports = {
        Sign: p,
        Verify: b,
        createSign: p,
        createVerify: b
    }
}