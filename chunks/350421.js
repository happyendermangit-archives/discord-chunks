function(t, e, s) {
    "use strict";
    var r = s("887098")("%Reflect.construct%", !0),
        i = s("959920");
    try {
        i({}, "", {
            "[[Get]]": function() {}
        })
    } catch (t) {
        i = null
    }
    if (i && r) {
        var n = {},
            c = {};
        i(c, "length", {
            "[[Get]]": function() {
                throw n
            },
            "[[Enumerable]]": !0
        }), t.exports = function(t) {
            try {
                r(t, c)
            } catch (t) {
                return t === n
            }
        }
    } else t.exports = function(t) {
        return "function" == typeof t && !!t.prototype
    }
}