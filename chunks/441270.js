function(e, t, n) {
    n("70102"), n("424973");
    var r = n("912065").Buffer,
        i = n("880669").Transform,
        o = n("394822").StringDecoder;

    function s(e) {
        i.call(this), this.hashMode = "string" == typeof e, this.hashMode ? this[e] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
    }
    n("599235")(s, i), s.prototype.update = function(e, t, n) {
        "string" == typeof e && (e = r.from(e, t));
        var i = this._update(e);
        return this.hashMode ? this : (n && (i = this._toString(i, n)), i)
    }, s.prototype.setAutoPadding = function() {}, s.prototype.getAuthTag = function() {
        throw Error("trying to get auth tag in unsupported state")
    }, s.prototype.setAuthTag = function() {
        throw Error("trying to set auth tag in unsupported state")
    }, s.prototype.setAAD = function() {
        throw Error("trying to set aad in unsupported state")
    }, s.prototype._transform = function(e, t, n) {
        var r;
        try {
            this.hashMode ? this._update(e) : this.push(this._update(e))
        } catch (e) {
            r = e
        } finally {
            n(r)
        }
    }, s.prototype._flush = function(e) {
        var t;
        try {
            this.push(this.__final())
        } catch (e) {
            t = e
        }
        e(t)
    }, s.prototype._finalOrDigest = function(e) {
        var t = this.__final() || r.alloc(0);
        return e && (t = this._toString(t, e, !0)), t
    }, s.prototype._toString = function(e, t, n) {
        if (!this._decoder && (this._decoder = new o(t), this._encoding = t), this._encoding !== t) throw Error("can't switch encodings");
        var r = this._decoder.write(e);
        return n && (r += this._decoder.end()), r
    }, e.exports = s
}