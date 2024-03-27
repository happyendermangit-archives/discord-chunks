function(e, t, n) {
    "use strict";
    var r = n("21841"),
        i = n("689118"),
        a = n("449348"),
        o = n("922689");

    function s(e, t) {
        r.equal(t.length, 24, "Invalid key length");
        var n = t.slice(0, 8),
            i = t.slice(8, 16),
            a = t.slice(16, 24);
        "encrypt" === e ? this.ciphers = [o.create({
            type: "encrypt",
            key: n
        }), o.create({
            type: "decrypt",
            key: i
        }), o.create({
            type: "encrypt",
            key: a
        })] : this.ciphers = [o.create({
            type: "decrypt",
            key: a
        }), o.create({
            type: "encrypt",
            key: i
        }), o.create({
            type: "decrypt",
            key: n
        })]
    }

    function u(e) {
        a.call(this, e);
        var t = new s(this.type, this.options.key);
        this._edeState = t
    }
    i(u, a), e.exports = u, u.create = function(e) {
        return new u(e)
    }, u.prototype._update = function(e, t, n, r) {
        var i = this._edeState;
        i.ciphers[0]._update(e, t, n, r), i.ciphers[1]._update(n, r, n, r), i.ciphers[2]._update(n, r, n, r)
    }, u.prototype._pad = o.prototype._pad, u.prototype._unpad = o.prototype._unpad
}