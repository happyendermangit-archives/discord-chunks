function(e, t, n) {
    "use strict";
    var r = n("81021")("%TypeError%"),
        i = n("828148"),
        a = n("632384");
    e.exports = function(e, t) {
        if ("Object" !== a(e)) throw new r("Assertion failed: `O` must be an Object");
        if (!i(t)) throw new r("Assertion failed: `P` must be a Property Key");
        return t in e
    }
}