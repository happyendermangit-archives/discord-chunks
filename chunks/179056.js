function(e, t, n) {
    "use strict";
    var r, i, o, s, a = n("226966"),
        c = n("149384")();
    if (c) {
        r = a("Object.prototype.hasOwnProperty"), i = a("RegExp.prototype.exec"), o = {};
        var u = function() {
            throw o
        };
        s = {
            toString: u,
            valueOf: u
        }, "symbol" == typeof Symbol.toPrimitive && (s[Symbol.toPrimitive] = u)
    }
    var d = a("Object.prototype.toString"),
        l = Object.getOwnPropertyDescriptor;
    e.exports = c ? function(e) {
        if (!e || "object" != typeof e) return !1;
        var t = l(e, "lastIndex");
        if (!(t && r(t, "value"))) return !1;
        try {
            i(e, s)
        } catch (e) {
            return e === o
        }
    } : function(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "[object RegExp]" === d(e)
    }
}