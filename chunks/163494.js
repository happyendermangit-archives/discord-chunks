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
        a = Object.prototype.toString,
        o = n("703825")();
    e.exports = function(e) {
        return "string" == typeof e || "object" == typeof e && (o ? i(e) : "[object String]" === a.call(e))
    }
}