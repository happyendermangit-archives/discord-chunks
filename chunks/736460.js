function(t, e, s) {
    var r = s("599235"),
        i = s("950731"),
        n = s("515886"),
        c = s("912065").Buffer,
        o = Array(160);

    function f() {
        this.init(), this._w = o, n.call(this, 128, 112)
    }
    r(f, i), f.prototype.init = function() {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, f.prototype._hash = function() {
        var t = c.allocUnsafe(48);

        function e(e, s, r) {
            t.writeInt32BE(e, r), t.writeInt32BE(s, r + 4)
        }
        return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t
    }, t.exports = f
}