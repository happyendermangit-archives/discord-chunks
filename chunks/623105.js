function(e, t, n) {
    "use strict";
    var r = n("868822"),
        a = n("59393"),
        i = n("470984"),
        o = n("383252"),
        s = RegExp.prototype;
    e.exports = function(e) {
        var t = e.flags;
        return void 0 === t && !("flags" in s) && !a(e, "flags") && i(s, e) ? r(o, e) : t
    }
}