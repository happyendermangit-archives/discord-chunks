function(e, t, n) {
    "use strict";
    var r = n("342646"),
        i = n("37549"),
        o = i("%Function.prototype.apply%"),
        s = i("%Function.prototype.call%"),
        a = i("%Reflect.apply%", !0) || r.call(s, o),
        c = i("%Object.getOwnPropertyDescriptor%", !0),
        u = i("%Object.defineProperty%", !0),
        d = i("%Math.max%");
    if (u) try {
        u({}, "a", {
            value: 1
        })
    } catch (e) {
        u = null
    }
    e.exports = function(e) {
        var t = a(r, s, arguments);
        return c && u && c(t, "length").configurable && u(t, "length", {
            value: 1 + d(0, e.length - (arguments.length - 1))
        }), t
    };
    var l = function() {
        return a(r, o, arguments)
    };
    u ? u(e.exports, "apply", {
        value: l
    }) : e.exports.apply = l
}