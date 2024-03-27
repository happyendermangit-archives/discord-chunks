function(e, t, n) {
    var r = n("689118"),
        i = n("849490"),
        a = n("676972"),
        o = n("957578").Buffer,
        s = Array(64);

    function u() {
        this.init(), this._w = s, a.call(this, 64, 56)
    }
    r(u, i), u.prototype.init = function() {
        return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
    }, u.prototype._hash = function() {
        var e = o.allocUnsafe(28);
        return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e
    }, e.exports = u
}