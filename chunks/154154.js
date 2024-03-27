function(t, e, n) {
    "use strict";
    var r = n("251069"),
        i = n("905145"),
        a = n("187684"),
        o = Error.captureStackTrace;
    t.exports = function(t, e, n, s) {
        a && (o ? o(t, e) : r(t, "stack", i(n, s)))
    }
}