function(e, t, n) {
    "use strict";
    var r = n("887098")("%Reflect.construct%", !0),
        i = n("959920");
    try {
        i({}, "", {
            "[[Get]]": function() {}
        })
    } catch (e) {
        i = null
    }
    if (i && r) {
        var o = {},
            s = {};
        i(s, "length", {
            "[[Get]]": function() {
                throw o
            },
            "[[Enumerable]]": !0
        }), e.exports = function(e) {
            try {
                r(e, s)
            } catch (e) {
                return e === o
            }
        }
    } else e.exports = function(e) {
        return "function" == typeof e && !!e.prototype
    }
}