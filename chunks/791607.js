function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t, r;
        if (t = n("873129"), r = n("840533"), "keypress" === e.type) {
            var a = String.fromCharCode(e.which);
            return !e.shiftKey && (a = a.toLowerCase()), a
        }
        return t[e.which] ? t[e.which] : r[e.which] ? r[e.which] : String.fromCharCode(e.which).toLowerCase()
    }
}