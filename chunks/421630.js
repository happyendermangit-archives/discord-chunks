function(e, t, n) {
    var r = n("619127"),
        i = n("912065").Buffer,
        o = n("441270");

    function s(e, t, n, s) {
        o.call(this), this._cipher = new r.AES(t), this._prev = i.from(n), this._cache = i.allocUnsafe(0), this._secCache = i.allocUnsafe(0), this._decrypt = s, this._mode = e
    }
    n("599235")(s, o), s.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt)
    }, s.prototype._final = function() {
        this._cipher.scrub()
    }, e.exports = s
}