function(e, t, n) {
    function r(e) {
        this.rand = e
    }
    if (n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("854508"), n("70102"), e.exports = function(e) {
            return !i && (i = new r(null)), i.generate(e)
        }, e.exports.Rand = r, r.prototype.generate = function(e) {
            return this._rand(e)
        }, r.prototype._rand = function(e) {
            if (this.rand.getBytes) return this.rand.getBytes(e);
            for (var t = new Uint8Array(e), n = 0; n < t.length; n++) t[n] = this.rand.getByte();
            return t
        }, "object" == typeof self) self.crypto && self.crypto.getRandomValues ? r.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.crypto.getRandomValues(t), t
    } : self.msCrypto && self.msCrypto.getRandomValues ? r.prototype._rand = function(e) {
        var t = new Uint8Array(e);
        return self.msCrypto.getRandomValues(t), t
    } : "object" == typeof window && (r.prototype._rand = function() {
        throw Error("Not implemented yet")
    });
    else try {
        var i, o = n("778583");
        if ("function" != typeof o.randomBytes) throw Error("Not supported");
        r.prototype._rand = function(e) {
            return o.randomBytes(e)
        }
    } catch (e) {}
}