function(e, t, n) {
    "use strict";
    var r = n("459078"),
        i = n("20042"),
        o = n("89467"),
        s = n("103861"),
        a = i("%Function.prototype.apply%"),
        c = i("%Function.prototype.call%"),
        u = i("%Reflect.apply%", !0) || r.call(c, a),
        d = n("691849"),
        l = i("%Math.max%");
    e.exports = function(e) {
        if ("function" != typeof e) throw new s("a function is required");
        var t = u(r, c, arguments);
        return o(t, 1 + l(0, e.length - (arguments.length - 1)), !0)
    };
    var f = function() {
        return u(r, a, arguments)
    };
    d ? d(e.exports, "apply", {
        value: f
    }) : e.exports.apply = f
}