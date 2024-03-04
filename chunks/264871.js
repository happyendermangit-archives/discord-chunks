function(e, t, n) {
    "use strict";
    var r = String.prototype.valueOf,
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
        return "string" == typeof e || "object" == typeof e && (s ? i(e) : "[object String]" === o.call(e))
    }
}