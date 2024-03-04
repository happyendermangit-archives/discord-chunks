function(e, t, n) {
    n("70102");
    var r = n("912065").Buffer,
        i = n("488274"),
        o = n("275682"),
        s = n("599235"),
        a = n("553999"),
        c = n("981491"),
        u = n("951350");

    function d(e) {
        o.Writable.call(this);
        var t = u[e];
        if (!t) throw Error("Unknown message digest");
        this._hashType = t.hash, this._hash = i(t.hash), this._tag = t.id, this._signType = t.sign
    }

    function l(e) {
        o.Writable.call(this);
        var t = u[e];
        if (!t) throw Error("Unknown message digest");
        this._hash = i(t.hash), this._tag = t.id, this._signType = t.sign
    }

    function f(e) {
        return new d(e)
    }

    function p(e) {
        return new l(e)
    }
    Object.keys(u).forEach(function(e) {
        u[e].id = r.from(u[e].id, "hex"), u[e.toLowerCase()] = u[e]
    }), s(d, o.Writable), d.prototype._write = function(e, t, n) {
        this._hash.update(e), n()
    }, d.prototype.update = function(e, t) {
        return "string" == typeof e && (e = r.from(e, t)), this._hash.update(e), this
    }, d.prototype.sign = function(e, t) {
        this.end();
        var n = a(this._hash.digest(), e, this._hashType, this._signType, this._tag);
        return t ? n.toString(t) : n
    }, s(l, o.Writable), l.prototype._write = function(e, t, n) {
        this._hash.update(e), n()
    }, l.prototype.update = function(e, t) {
        return "string" == typeof e && (e = r.from(e, t)), this._hash.update(e), this
    }, l.prototype.verify = function(e, t, n) {
        return "string" == typeof t && (t = r.from(t, n)), this.end(), c(t, this._hash.digest(), e, this._signType, this._tag)
    }, e.exports = {
        Sign: f,
        Verify: p,
        createSign: f,
        createVerify: p
    }
}