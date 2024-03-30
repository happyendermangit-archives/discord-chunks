function(t, r, n) {
    "use strict";
    var e = n("581031"),
        o = 0,
        i = Math.random(),
        u = e(1..toString);
    t.exports = function(t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + u(++o + i, 36)
    }
}