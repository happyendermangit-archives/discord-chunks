function(e, t, n) {
    "use strict";
    var r = n("689118"),
        i = n("292735"),
        a = n("335613"),
        o = n("315893"),
        s = n("764900");

    function u(e) {
        s.call(this, "digest"), this._hash = e
    }
    r(u, s), u.prototype._update = function(e) {
        this._hash.update(e)
    }, u.prototype._final = function() {
        return this._hash.digest()
    }, e.exports = function(e) {
        return "md5" === (e = e.toLowerCase()) ? new i : "rmd160" === e || "ripemd160" === e ? new a : new u(o(e))
    }
}