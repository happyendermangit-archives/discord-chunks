function(t, e, s) {
    "use strict";
    s("424973");
    var r = s("555671"),
        i = s("463483");

    function n(t, e, s) {
        if (!(this instanceof n)) return new n(t, e, s);
        this.Hash = t, this.blockSize = t.blockSize / 8, this.outSize = t.outSize / 8, this.inner = null, this.outer = null, this._init(r.toArray(e, s))
    }
    t.exports = n, n.prototype._init = function(t) {
        t.length > this.blockSize && (t = new this.Hash().update(t).digest()), i(t.length <= this.blockSize);
        for (var e = t.length; e < this.blockSize; e++) t.push(0);
        for (e = 0; e < t.length; e++) t[e] ^= 54;
        for (e = 0, this.inner = new this.Hash().update(t); e < t.length; e++) t[e] ^= 106;
        this.outer = new this.Hash().update(t)
    }, n.prototype.update = function(t, e) {
        return this.inner.update(t, e), this
    }, n.prototype.digest = function(t) {
        return this.outer.update(this.inner.digest()), this.outer.digest(t)
    }
}