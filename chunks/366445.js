function(e, t, n) {
    "use strict";
    let r = n("318655"),
        i = n("728734"),
        a = n("689118");

    function o(e, t) {
        this.name = e, this.body = t, this.decoders = {}, this.encoders = {}
    }
    t.define = function(e, t) {
        return new o(e, t)
    }, o.prototype._createNamed = function(e) {
        let t = this.name;

        function n(e) {
            this._initNamed(e, t)
        }
        return a(n, e), n.prototype._initNamed = function(t, n) {
            e.call(this, t, n)
        }, new n(this)
    }, o.prototype._getDecoder = function(e) {
        return e = e || "der", !this.decoders.hasOwnProperty(e) && (this.decoders[e] = this._createNamed(i[e])), this.decoders[e]
    }, o.prototype.decode = function(e, t, n) {
        return this._getDecoder(t).decode(e, n)
    }, o.prototype._getEncoder = function(e) {
        return e = e || "der", !this.encoders.hasOwnProperty(e) && (this.encoders[e] = this._createNamed(r[e])), this.encoders[e]
    }, o.prototype.encode = function(e, t, n) {
        return this._getEncoder(t).encode(e, n)
    }
}