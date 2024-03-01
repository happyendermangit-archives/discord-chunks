function(t, e, s) {
    "use strict";
    var r = s("463483"),
        i = s("599235"),
        n = s("249089"),
        c = s("487045");

    function o(t, e) {
        r.equal(e.length, 24, "Invalid key length");
        var s = e.slice(0, 8),
            i = e.slice(8, 16),
            n = e.slice(16, 24);
        "encrypt" === t ? this.ciphers = [c.create({
            type: "encrypt",
            key: s
        }), c.create({
            type: "decrypt",
            key: i
        }), c.create({
            type: "encrypt",
            key: n
        })] : this.ciphers = [c.create({
            type: "decrypt",
            key: n
        }), c.create({
            type: "encrypt",
            key: i
        }), c.create({
            type: "decrypt",
            key: s
        })]
    }

    function f(t) {
        n.call(this, t);
        var e = new o(this.type, this.options.key);
        this._edeState = e
    }
    i(f, n), t.exports = f, f.create = function(t) {
        return new f(t)
    }, f.prototype._update = function(t, e, s, r) {
        var i = this._edeState;
        i.ciphers[0]._update(t, e, s, r), i.ciphers[1]._update(s, r, s, r), i.ciphers[2]._update(s, r, s, r)
    }, f.prototype._pad = c.prototype._pad, f.prototype._unpad = c.prototype._unpad
}