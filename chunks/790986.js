function(e, t, n) {
    "use strict";
    n("424973");
    var r = n("599235"),
        i = n("912065").Buffer,
        o = n("441270"),
        s = i.alloc(128);

    function a(e, t) {
        o.call(this, "digest"), "string" == typeof t && (t = i.from(t)), this._alg = e, this._key = t, t.length > 64 ? t = e(t) : t.length < 64 && (t = i.concat([t, s], 64));
        for (var n = this._ipad = i.allocUnsafe(64), r = this._opad = i.allocUnsafe(64), a = 0; a < 64; a++) n[a] = 54 ^ t[a], r[a] = 92 ^ t[a];
        this._hash = [n]
    }
    r(a, o), a.prototype._update = function(e) {
        this._hash.push(e)
    }, a.prototype._final = function() {
        var e = this._alg(i.concat(this._hash));
        return this._alg(i.concat([this._opad, e]))
    }, e.exports = a
}