function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = n("76542"),
        a = r("%TypeError%");
    e.exports = function(e) {
        if ("number" != typeof e && "bigint" != typeof e) throw new a("argument must be a Number or a BigInt");
        var t = e < 0 ? -i(-e) : i(e);
        return 0 === t ? 0 : t
    }
}