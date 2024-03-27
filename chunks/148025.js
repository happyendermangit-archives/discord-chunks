function(e, t, n) {
    "use strict";
    var r, i, a, o, s = n("192853"),
        u = n("703825")();
    if (u) {
        r = s("Object.prototype.hasOwnProperty"), i = s("RegExp.prototype.exec"), a = {};
        var c = function() {
            throw a
        };
        o = {
            toString: c,
            valueOf: c
        }, "symbol" == typeof Symbol.toPrimitive && (o[Symbol.toPrimitive] = c)
    }
    var l = s("Object.prototype.toString"),
        d = Object.getOwnPropertyDescriptor;
    e.exports = u ? function(e) {
        if (!e || "object" != typeof e) return !1;
        var t = d(e, "lastIndex");
        if (!(t && r(t, "value"))) return !1;
        try {
            i(e, o)
        } catch (e) {
            return e === a
        }
    } : function(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "[object RegExp]" === l(e)
    }
}