function(e, t, n) {
    "use strict";
    var r = n("911718"),
        a = n("214401"),
        o = a(r("String.prototype.indexOf"));
    e.exports = function(e, t) {
        var n = r(e, !!t);
        return "function" == typeof n && o(e, ".prototype.") > -1 ? a(n) : n
    }
}