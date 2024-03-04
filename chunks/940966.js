function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = r("%Array.prototype%"),
        o = r("%RangeError%"),
        s = r("%SyntaxError%"),
        a = r("%TypeError%"),
        c = n("610330"),
        u = 4294967295,
        d = n("29364")(),
        l = r("%Object.setPrototypeOf%", !0) || (d ? function(e, t) {
            return e.__proto__ = t, e
        } : null);
    e.exports = function(e) {
        if (!c(e) || e < 0) throw new a("Assertion failed: `length` must be an integer Number >= 0");
        if (e > u) throw new o("length is greater than (2**32 - 1)");
        var t = arguments.length > 1 ? arguments[1] : i,
            n = [];
        if (t !== i) {
            if (!l) throw new s("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
            l(n, t)
        }
        return 0 !== e && (n.length = e), n
    }
}