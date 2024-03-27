function(e, t, n) {
    "use strict";
    var r = n("390976"),
        i = n("690244"),
        a = n("781421"),
        o = n("815329"),
        s = i("%Function.prototype.apply%"),
        u = i("%Function.prototype.call%"),
        c = i("%Reflect.apply%", !0) || r.call(u, s),
        l = n("583584"),
        d = i("%Math.max%");
    e.exports = function(e) {
        if ("function" != typeof e) throw new o("a function is required");
        var t = c(r, u, arguments);
        return a(t, 1 + d(0, e.length - (arguments.length - 1)), !0)
    };
    var f = function() {
        return c(r, s, arguments)
    };
    l ? l(e.exports, "apply", {
        value: f
    }) : e.exports.apply = f
}