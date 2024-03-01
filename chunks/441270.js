function(t, e, s) {
    s("70102"), s("424973");
    var r = s("912065").Buffer,
        i = s("880669").Transform,
        n = s("394822").StringDecoder;

    function c(t) {
        i.call(this), this.hashMode = "string" == typeof t, this.hashMode ? this[t] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
    }
    s("599235")(c, i), c.prototype.update = function(t, e, s) {
        "string" == typeof t && (t = r.from(t, e));
        var i = this._update(t);
        return this.hashMode ? this : (s && (i = this._toString(i, s)), i)
    }, c.prototype.setAutoPadding = function() {}, c.prototype.getAuthTag = function() {
        throw Error("trying to get auth tag in unsupported state")
    }, c.prototype.setAuthTag = function() {
        throw Error("trying to set auth tag in unsupported state")
    }, c.prototype.setAAD = function() {
        throw Error("trying to set aad in unsupported state")
    }, c.prototype._transform = function(t, e, s) {
        var r;
        try {
            this.hashMode ? this._update(t) : this.push(this._update(t))
        } catch (t) {
            r = t
        } finally {
            s(r)
        }
    }, c.prototype._flush = function(t) {
        var e;
        try {
            this.push(this.__final())
        } catch (t) {
            e = t
        }
        t(e)
    }, c.prototype._finalOrDigest = function(t) {
        var e = this.__final() || r.alloc(0);
        return t && (e = this._toString(e, t, !0)), e
    }, c.prototype._toString = function(t, e, s) {
        if (!this._decoder && (this._decoder = new n(e), this._encoding = e), this._encoding !== e) throw Error("can't switch encodings");
        var r = this._decoder.write(t);
        return s && (r += this._decoder.end()), r
    }, t.exports = c
}