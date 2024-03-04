function(e, t, n) {
    "use strict";
    n("70102");
    var r = n("240973"),
        i = TypeError,
        o = n("326763");
    e.exports = function(e) {
        var t = r(e);
        if (!t) throw new i("non-iterable value provided");
        return arguments.length > 1 ? o(t, arguments[1]) : o(t)
    }
}