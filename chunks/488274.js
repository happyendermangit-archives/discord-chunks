function(e, t, n) {
    "use strict";
    var r = n("599235"),
        i = n("708893"),
        o = n("291954"),
        s = n("622107"),
        a = n("441270");

    function c(e) {
        a.call(this, "digest"), this._hash = e
    }
    r(c, a), c.prototype._update = function(e) {
        this._hash.update(e)
    }, c.prototype._final = function() {
        return this._hash.digest()
    }, e.exports = function(e) {
        return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new o : new c(s(e))
    }
}