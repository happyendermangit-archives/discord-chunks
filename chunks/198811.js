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
        a = Object.prototype.toString,
        o = n("703825")();
    e.exports = function(e) {
        return "object" == typeof e && null !== e && (o ? i(e) : "[object Date]" === a.call(e))
    }
}