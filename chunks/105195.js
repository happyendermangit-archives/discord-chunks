function(t, e, s) {
    "use strict";
    var r = Array.prototype.slice,
        i = s("142726"),
        n = Object.keys,
        c = n ? function(t) {
            return n(t)
        } : s("847480"),
        o = Object.keys;
    c.shim = function() {
        return Object.keys ? ! function() {
            var t = Object.keys(arguments);
            return t && t.length === arguments.length
        }(1, 2) && (Object.keys = function(t) {
            return i(t) ? o(r.call(t)) : o(t)
        }) : Object.keys = c, Object.keys || c
    }, t.exports = c
}