function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = r("%Array.prototype%"),
        a = r("%RangeError%"),
        o = r("%SyntaxError%"),
        s = r("%TypeError%"),
        u = n("73871"),
        c = 4294967295,
        l = n("79536")(),
        d = r("%Object.setPrototypeOf%", !0) || (l ? function(e, t) {
            return e.__proto__ = t, e
        } : null);
    e.exports = function(e) {
        if (!u(e) || e < 0) throw new s("Assertion failed: `length` must be an integer Number >= 0");
        if (e > c) throw new a("length is greater than (2**32 - 1)");
        var t = arguments.length > 1 ? arguments[1] : i,
            n = [];
        if (t !== i) {
            if (!d) throw new o("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
            d(n, t)
        }
        return 0 !== e && (n.length = e), n
    }
}