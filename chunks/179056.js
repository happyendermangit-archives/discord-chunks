function(t, e, s) {
    "use strict";
    var r, i, n, c, o = s("314970"),
        f = s("149384")();
    if (f) {
        r = o("Object.prototype.hasOwnProperty"), i = o("RegExp.prototype.exec"), n = {};
        var u = function() {
            throw n
        };
        c = {
            toString: u,
            valueOf: u
        }, "symbol" == typeof Symbol.toPrimitive && (c[Symbol.toPrimitive] = u)
    }
    var a = o("Object.prototype.toString"),
        d = Object.getOwnPropertyDescriptor;
    t.exports = f ? function(t) {
        if (!t || "object" != typeof t) return !1;
        var e = d(t, "lastIndex");
        if (!(e && r(e, "value"))) return !1;
        try {
            i(t, c)
        } catch (t) {
            return t === n
        }
    } : function(t) {
        return !!t && ("object" == typeof t || "function" == typeof t) && "[object RegExp]" === a(t)
    }
}