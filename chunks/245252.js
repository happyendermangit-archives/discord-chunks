function(e, t, n) {
    "use strict";
    var r = n("81021"),
        i = n("444571"),
        a = r("%Promise.resolve%", !0),
        o = a && i(a);
    e.exports = function(e, t) {
        if (!o) throw SyntaxError("This environment does not support Promises.");
        return o(e, t)
    }
}