function(t, e, r) {
    "use strict";
    var n = r("84297").IteratorPrototype,
        o = r("803938"),
        i = r("879"),
        c = r("865312"),
        s = r("874652"),
        u = function() {
            return this
        };
    t.exports = function(t, e, r, a) {
        var f = e + " Iterator";
        return t.prototype = o(n, {
            next: i(+!a, r)
        }), c(t, f, !1, !0), s[f] = u, t
    }
}