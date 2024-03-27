function(e, t, n) {
    var r = n("957578").Buffer,
        i = n("108381"),
        a = n("477260"),
        o = n("689118"),
        s = n("510838"),
        u = n("517145"),
        c = n("873213");

    function l(e) {
        a.Writable.call(this);
        var t = c[e];
        if (!t) throw Error("Unknown message digest");
        this._hashType = t.hash, this._hash = i(t.hash), this._tag = t.id, this._signType = t.sign
    }

    function d(e) {
        a.Writable.call(this);
        var t = c[e];
        if (!t) throw Error("Unknown message digest");
        this._hash = i(t.hash), this._tag = t.id, this._signType = t.sign
    }

    function f(e) {
        return new l(e)
    }

    function p(e) {
        return new d(e)
    }
    Object.keys(c).forEach(function(e) {
        c[e].id = r.from(c[e].id, "hex"), c[e.toLowerCase()] = c[e]
    }), o(l, a.Writable), l.prototype._write = function(e, t, n) {
        this._hash.update(e), n()
    }, l.prototype.update = function(e, t) {
        return "string" == typeof e && (e = r.from(e, t)), this._hash.update(e), this
    }, l.prototype.sign = function(e, t) {
        this.end();
        var n = s(this._hash.digest(), e, this._hashType, this._signType, this._tag);
        return t ? n.toString(t) : n
    }, o(d, a.Writable), d.prototype._write = function(e, t, n) {
        this._hash.update(e), n()
    }, d.prototype.update = function(e, t) {
        return "string" == typeof e && (e = r.from(e, t)), this._hash.update(e), this
    }, d.prototype.verify = function(e, t, n) {
        return "string" == typeof t && (t = r.from(t, n)), this.end(), u(t, this._hash.digest(), e, this._signType, this._tag)
    }, e.exports = {
        Sign: f,
        Verify: p,
        createSign: f,
        createVerify: p
    }
}