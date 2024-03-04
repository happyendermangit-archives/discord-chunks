function(e, t, n) {
    "use strict";
    var r = Array.prototype.slice,
        i = n("142726"),
        o = Object.keys,
        s = o ? function(e) {
            return o(e)
        } : n("847480"),
        a = Object.keys;
    s.shim = function() {
        return Object.keys ? ! function() {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length
        }(1, 2) && (Object.keys = function(e) {
            return i(e) ? a(r.call(e)) : a(e)
        }) : Object.keys = s, Object.keys || s
    }, e.exports = s
}