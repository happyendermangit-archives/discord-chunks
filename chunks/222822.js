function(e, t, n) {
    var r = n("458340"),
        i = n("957578").Buffer,
        a = n("764900");

    function o(e, t, n, o) {
        a.call(this), this._cipher = new r.AES(t), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = o, this._mode = e
    }
    n("689118")(o, a), o.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt)
    }, o.prototype._final = function() {
        this._cipher.scrub()
    }, e.exports = o
}