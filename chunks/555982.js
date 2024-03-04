function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = n("314970"),
        o = r("%TypeError%"),
        s = n("477733"),
        a = r("%Reflect.apply%", !0) || i("Function.prototype.apply");
    e.exports = function(e, t) {
        var n = arguments.length > 2 ? arguments[2] : [];
        if (!s(n)) throw new o("Assertion failed: optional `argumentsList`, if provided, must be a List");
        return a(e, t, n)
    }
}