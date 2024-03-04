function(e, t, n) {
    "use strict";
    var r = n("911718")("%TypeError%"),
        i = n("228140"),
        o = n("583608");
    e.exports = function(e, t) {
        if ("Object" !== o(e)) throw new r("Assertion failed: `O` must be an Object");
        if (!i(t)) throw new r("Assertion failed: `P` must be a Property Key");
        return t in e
    }
}