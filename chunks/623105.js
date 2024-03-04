function(e, t, n) {
    "use strict";
    var r = n("868822"),
        i = n("59393"),
        o = n("470984"),
        s = n("383252"),
        a = RegExp.prototype;
    e.exports = function(e) {
        var t = e.flags;
        return void 0 === t && !("flags" in a) && !i(e, "flags") && o(a, e) ? r(s, e) : t
    }
}