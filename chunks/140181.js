function(t, e, s) {
    "use strict";
    var r = Date.prototype.getDay,
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
        return "object" == typeof t && null !== t && (c ? i(t) : "[object Date]" === n.call(t))
    }
}