function(e, t, n) {
    "use strict";
    let r = n("784014"),
        i = n("448450"),
        o = n("599235");

    function s(e, t) {
        this.name = e, this.body = t, this.decoders = {}, this.encoders = {}
    }
    t.define = function(e, t) {
        return new s(e, t)
    }, s.prototype._createNamed = function(e) {
        let t = this.name;

        function n(e) {
            this._initNamed(e, t)
        }
        return o(n, e), n.prototype._initNamed = function(t, n) {
            e.call(this, t, n)
        }, new n(this)
    }, s.prototype._getDecoder = function(e) {
        return e = e || "der", !this.decoders.hasOwnProperty(e) && (this.decoders[e] = this._createNamed(i[e])), this.decoders[e]
    }, s.prototype.decode = function(e, t, n) {
        return this._getDecoder(t).decode(e, n)
    }, s.prototype._getEncoder = function(e) {
        return e = e || "der", !this.encoders.hasOwnProperty(e) && (this.encoders[e] = this._createNamed(r[e])), this.encoders[e]
    }, s.prototype.encode = function(e, t, n) {
        return this._getEncoder(t).encode(e, n)
    }
}