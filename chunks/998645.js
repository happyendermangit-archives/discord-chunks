function(e, t, n) {
    "use strict";
    var r = n("226966"),
        i = n("20042"),
        o = n("179056"),
        s = r("RegExp.prototype.exec"),
        a = i("%TypeError%");
    e.exports = function(e) {
        if (!o(e)) throw new a("`regex` must be a RegExp");
        return function(t) {
            return null !== s(e, t)
        }
    }
}