function(e, t, n) {
    "use strict";
    var r = n("21841"),
        i = n("689118"),
        a = {};

    function o(e) {
        r.equal(e.length, 8, "Invalid IV length"), this.iv = Array(8);
        for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
    }
    t.instantiate = function(e) {
        function t(t) {
            e.call(this, t), this._cbcInit()
        }
        i(t, e);
        for (var n = Object.keys(a), r = 0; r < n.length; r++) {
            var o = n[r];
            t.prototype[o] = a[o]
        }
        return t.create = function(e) {
            return new t(e)
        }, t
    }, a._cbcInit = function() {
        var e = new o(this.options.iv);
        this._cbcState = e
    }, a._update = function(e, t, n, r) {
        var i = this._cbcState,
            a = this.constructor.super_.prototype,
            o = i.iv;
        if ("encrypt" === this.type) {
            for (var s = 0; s < this.blockSize; s++) o[s] ^= e[t + s];
            a._update.call(this, o, 0, n, r);
            for (var s = 0; s < this.blockSize; s++) o[s] = n[r + s]
        } else {
            a._update.call(this, e, t, n, r);
            for (var s = 0; s < this.blockSize; s++) n[r + s] ^= o[s];
            for (var s = 0; s < this.blockSize; s++) o[s] = e[t + s]
        }
    }
}