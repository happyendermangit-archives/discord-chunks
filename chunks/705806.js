function(e, t, n) {
    "use strict";
    var r = n("4148"),
        i = n("665679"),
        a = i("%Function.prototype.apply%"),
        o = i("%Function.prototype.call%"),
        s = i("%Reflect.apply%", !0) || r.call(o, a),
        u = i("%Object.getOwnPropertyDescriptor%", !0),
        c = i("%Object.defineProperty%", !0),
        l = i("%Math.max%");
    if (c) try {
        c({}, "a", {
            value: 1
        })
    } catch (e) {
        c = null
    }
    e.exports = function(e) {
        var t = s(r, o, arguments);
        return u && c && u(t, "length").configurable && c(t, "length", {
            value: 1 + l(0, e.length - (arguments.length - 1))
        }), t
    };
    var d = function() {
        return s(r, a, arguments)
    };
    c ? c(e.exports, "apply", {
        value: d
    }) : e.exports.apply = d
}