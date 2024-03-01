function(t, e, s) {
    "use strict";
    var r = s("599235"),
        i = s("708893"),
        n = s("291954"),
        c = s("622107"),
        o = s("441270");

    function f(t) {
        o.call(this, "digest"), this._hash = t
    }
    r(f, o), f.prototype._update = function(t) {
        this._hash.update(t)
    }, f.prototype._final = function() {
        return this._hash.digest()
    }, t.exports = function(t) {
        return "md5" === (t = t.toLowerCase()) ? new i : "rmd160" === t || "ripemd160" === t ? new n : new f(c(t))
    }
}