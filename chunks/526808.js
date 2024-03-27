function(e, t, n) {
    var r;

    function i(e) {
        this.rand = e
    }
    if (e.exports = function(e) {
            return !r && (r = new i(null)), r.generate(e)
        }, e.exports.Rand = i, i.prototype.generate = function(e) {
            return this._rand(e)
        }, i.prototype._rand = function(e) {
            if (this.rand.getBytes) return this.rand.getBytes(e);
            for (var t = new Uint8Array(e), n = 0; n < t.length; n++) t[n] = this.rand.getByte();
            return t
        }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? i.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.crypto.getRandomValues(t), t
    } : self.msCrypto && self.msCrypto.getRandomValues ? i.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.msCrypto.getRandomValues(t), t
    } : "object" == typeof window && (i.prototype._rand = function() {
        throw Error("Not implemented yet")
    });
    else try {
        var a = n("908690");
        if ("function" != typeof a.randomBytes) throw Error("Not supported");
        i.prototype._rand = function(e) {
            return a.randomBytes(e)
        }
    } catch (e) {}
}