function(e, t, n) {
    "use strict";
    var r = n("463483"),
        i = n("599235"),
        o = {};

    function s(e) {
        r.equal(e.length, 8, "Invalid IV length"), this.iv = Array(8);
        for (var t = 0; t < this.iv.length; t++) this.iv[t] = e[t]
    }
    t.instantiate = function(e) {
        function t(t) {
            e.call(this, t), this._cbcInit()
        }
        i(t, e);
        for (var n = Object.keys(o), r = 0; r < n.length; r++) {
            var s = n[r];
            t.prototype[s] = o[s]
        }
        return t.create = function(e) {
            return new t(e)
        }, t
    }, o._cbcInit = function() {
        var e = new s(this.options.iv);
        this._cbcState = e
    }, o._update = function(e, t, n, r) {
        var i = this._cbcState,
            o = this.constructor.super_.prototype,
            s = i.iv;
        if ("encrypt" === this.type) {
            for (var a = 0; a < this.blockSize; a++) s[a] ^= e[t + a];
            o._update.call(this, s, 0, n, r);
            for (var a = 0; a < this.blockSize; a++) s[a] = n[r + a]
        } else {
            o._update.call(this, e, t, n, r);
            for (var a = 0; a < this.blockSize; a++) n[r + a] ^= s[a];
            for (var a = 0; a < this.blockSize; a++) s[a] = e[t + a]
        }
    }
}