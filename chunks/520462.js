function(e, t, n) {
    "use strict";
    n("70102");
    var r = n("170407"),
        a = Object.prototype.toString,
        i = Object.prototype.hasOwnProperty,
        o = function(e, t, n) {
            for (var r = 0, a = e.length; r < a; r++) i.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
        },
        s = function(e, t, n) {
            for (var r = 0, a = e.length; r < a; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e)
        },
        c = function(e, t, n) {
            for (var r in e) i.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
        };
    e.exports = function(e, t, n) {
        var i;
        if (!r(t)) throw TypeError("iterator must be a function");
        arguments.length >= 3 && (i = n), "[object Array]" === a.call(e) ? o(e, t, i) : "string" == typeof e ? s(e, t, i) : c(e, t, i)
    }
}