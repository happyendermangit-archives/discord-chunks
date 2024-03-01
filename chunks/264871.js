function(t, e, s) {
    "use strict";
    var r = String.prototype.valueOf,
        i = function(t) {
            try {
                return r.call(t), !0
            } catch (t) {
                return !1
            }
        },
        n = Object.prototype.toString,
        c = s("149384")();
    t.exports = function(t) {
        return "string" == typeof t || "object" == typeof t && (c ? i(t) : "[object String]" === n.call(t))
    }
}