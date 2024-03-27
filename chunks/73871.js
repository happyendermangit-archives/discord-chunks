function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = r("%Math.abs%"),
        a = r("%Math.floor%"),
        o = n("45331"),
        s = n("238896");
    e.exports = function(e) {
        if ("number" != typeof e || o(e) || !s(e)) return !1;
        var t = i(e);
        return a(t) === t
    }
}