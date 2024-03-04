function(e, t, n) {
    "use strict";
    n("70102");
    var r = n("170407"),
        i = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        s = function(e, t, n) {
            for (var r = 0, i = e.length; r < i; r++) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
        },
        a = function(e, t, n) {
            for (var r = 0, i = e.length; r < i; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e)
        },
        c = function(e, t, n) {
            for (var r in e) o.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
        };
    e.exports = function(e, t, n) {
        var o;
        if (!r(t)) throw TypeError("iterator must be a function");
        arguments.length >= 3 && (o = n), "[object Array]" === i.call(e) ? s(e, t, o) : "string" == typeof e ? a(e, t, o) : c(e, t, o)
    }
}