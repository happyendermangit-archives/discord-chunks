function(t, e, n) {
    "use strict";

    function r() {
        this._cache = []
    }
    n("424973"), r.prototype.add = function(t) {
        -1 === this._cache.indexOf(t) && this._cache.push(t)
    }, r.prototype.forEach = function(t) {
        this._cache.forEach(t)
    }, t.exports = r
}