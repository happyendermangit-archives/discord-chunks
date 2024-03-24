function(e, t, n) {
    "use strict";
    var r = n("20042"),
        i = n("193289"),
        o = i(r("String.prototype.indexOf"));
    e.exports = function(e, t) {
        var n = r(e, !!t);
        return "function" == typeof n && o(e, ".prototype.") > -1 ? i(n) : n
    }
}