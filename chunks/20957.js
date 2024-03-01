function(t, r, n) {
    "use strict";
    var e = n("868822"),
        o = n("125359"),
        i = n("472960"),
        u = TypeError;
    t.exports = function(t, r) {
        var n, c;
        if ("string" === r && o(n = t.toString) && !i(c = e(n, t)) || o(n = t.valueOf) && !i(c = e(n, t)) || "string" !== r && o(n = t.toString) && !i(c = e(n, t))) return c;
        throw u("Can't convert object to primitive value")
    }
}