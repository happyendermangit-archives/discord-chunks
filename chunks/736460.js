function(e, t, n) {
    var r = n("599235"),
        i = n("950731"),
        o = n("515886"),
        s = n("912065").Buffer,
        a = Array(160);

    function c() {
        this.init(), this._w = a, o.call(this, 128, 112)
    }
    r(c, i), c.prototype.init = function() {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, c.prototype._hash = function() {
        var e = s.allocUnsafe(48);

        function t(t, n, r) {
            e.writeInt32BE(t, r), e.writeInt32BE(n, r + 4)
        }
        return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), e
    }, e.exports = c
}