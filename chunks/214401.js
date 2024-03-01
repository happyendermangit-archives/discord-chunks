function(e, t, n) {
    "use strict";
    var r = n("459078"),
        a = n("911718"),
        o = n("589746"),
        i = a("%TypeError%"),
        s = a("%Function.prototype.apply%"),
        u = a("%Function.prototype.call%"),
        l = a("%Reflect.apply%", !0) || r.call(u, s),
        c = a("%Object.defineProperty%", !0),
        d = a("%Math.max%");
    if (c) try {
        c({}, "a", {
            value: 1
        })
    } catch (e) {
        c = null
    }
    e.exports = function(e) {
        if ("function" != typeof e) throw new i("a function is required");
        var t = l(r, u, arguments);
        return o(t, 1 + d(0, e.length - (arguments.length - 1)), !0)
    };
    var f = function() {
        return l(r, s, arguments)
    };
    c ? c(e.exports, "apply", {
        value: f
    }) : e.exports.apply = f
}