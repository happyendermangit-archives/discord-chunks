function(t, e, s) {
    "use strict";
    s("70102");
    var r = s("240973"),
        i = TypeError,
        n = s("326763");
    t.exports = function(t) {
        var e = r(t);
        if (!e) throw new i("non-iterable value provided");
        return arguments.length > 1 ? n(e, arguments[1]) : n(e)
    }
}