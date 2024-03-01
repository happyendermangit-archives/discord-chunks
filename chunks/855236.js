function(t, e, s) {
    "use strict";
    var r = s("911718")("%TypeError%"),
        i = s("228140"),
        n = s("583608");
    t.exports = function(t, e) {
        if ("Object" !== n(t)) throw new r("Assertion failed: `O` must be an Object");
        if (!i(e)) throw new r("Assertion failed: `P` must be a Property Key");
        return e in t
    }
}