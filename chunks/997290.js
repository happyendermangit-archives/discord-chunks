function(e, t, n) {
    "use strict";
    var r = n("689118"),
        i = n("957578").Buffer,
        a = n("764900"),
        o = i.alloc(128);

    function s(e, t) {
        a.call(this, "digest"), "string" == typeof t && (t = i.from(t)), this._alg = e, this._key = t, t.length > 64 ? t = e(t) : t.length < 64 && (t = i.concat([t, o], 64));
        for (var n = this._ipad = i.allocUnsafe(64), r = this._opad = i.allocUnsafe(64), s = 0; s < 64; s++) n[s] = 54 ^ t[s], r[s] = 92 ^ t[s];
        this._hash = [n]
    }
    r(s, a), s.prototype._update = function(e) {
        this._hash.push(e)
    }, s.prototype._final = function() {
        var e = this._alg(i.concat(this._hash));
        return this._alg(i.concat([this._opad, e]))
    }, e.exports = s
}