function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t, r;
        if (t = n("873129"), r = n("840533"), "keypress" === e.type) {
            var i = String.fromCharCode(e.which);
            return !e.shiftKey && (i = i.toLowerCase()), i
        }
        return t[e.which] ? t[e.which] : r[e.which] ? r[e.which] : String.fromCharCode(e.which).toLowerCase()
    }
}