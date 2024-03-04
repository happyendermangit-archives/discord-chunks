function(e, t, n) {
    "use strict";
    var r = Date.prototype.getDay,
        i = function(e) {
            try {
                return r.call(e), !0
            } catch (e) {
                return !1
            }
        },
        o = Object.prototype.toString,
        s = n("149384")();
    e.exports = function(e) {
        return "object" == typeof e && null !== e && (s ? i(e) : "[object Date]" === o.call(e))
    }
}