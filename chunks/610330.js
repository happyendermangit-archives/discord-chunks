function(e, t, n) {
    "use strict";
    var r = n("911718"),
        i = r("%Math.abs%"),
        o = r("%Math.floor%"),
        s = n("109033"),
        a = n("382216");
    e.exports = function(e) {
        if ("number" != typeof e || s(e) || !a(e)) return !1;
        var t = i(e);
        return o(t) === t
    }
}