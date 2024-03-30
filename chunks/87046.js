function(e, t, n) {
    "use strict";
    var r = n("926515"),
        i = n("740362"),
        a = n("838957"),
        o = n("572609"),
        s = RegExp.prototype;
    e.exports = function(e) {
        var t = e.flags;
        return void 0 === t && !("flags" in s) && !i(e, "flags") && a(s, e) ? r(o, e) : t
    }
}