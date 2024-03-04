function(e, t, n) {
    "use strict";
    var r = n("463483"),
        i = n("599235"),
        o = n("249089"),
        s = n("487045");

    function a(e, t) {
        r.equal(t.length, 24, "Invalid key length");
        var n = t.slice(0, 8),
            i = t.slice(8, 16),
            o = t.slice(16, 24);
        "encrypt" === e ? this.ciphers = [s.create({
            type: "encrypt",
            key: n
        }), s.create({
            type: "decrypt",
            key: i
        }), s.create({
            type: "encrypt",
            key: o
        })] : this.ciphers = [s.create({
            type: "decrypt",
            key: o
        }), s.create({
            type: "encrypt",
            key: i
        }), s.create({
            type: "decrypt",
            key: n
        })]
    }

    function c(e) {
        o.call(this, e);
        var t = new a(this.type, this.options.key);
        this._edeState = t
    }
    i(c, o), e.exports = c, c.create = function(e) {
        return new c(e)
    }, c.prototype._update = function(e, t, n, r) {
        var i = this._edeState;
        i.ciphers[0]._update(e, t, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r)
    }, c.prototype._pad = s.prototype._pad, c.prototype._unpad = s.prototype._unpad
}