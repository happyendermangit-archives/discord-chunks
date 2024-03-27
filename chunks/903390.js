function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = n("444571"),
        a = i(r("String.prototype.indexOf"));
    e.exports = function(e, t) {
        var n = r(e, !!t);
        return "function" == typeof n && a(e, ".prototype.") > -1 ? i(n) : n
    }
}