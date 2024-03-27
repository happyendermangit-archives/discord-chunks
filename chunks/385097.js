function(e, t, n) {
    "use strict";
    var r = n("192853"),
        i = n("690244"),
        a = n("148025"),
        o = r("RegExp.prototype.exec"),
        s = i("%TypeError%");
    e.exports = function(e) {
        if (!a(e)) throw new s("`regex` must be a RegExp");
        return function(t) {
            return null !== o(e, t)
        }
    }
}