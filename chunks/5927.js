function(t, e, s) {
    "use strict";
    var r = Object.prototype.toString;
    if (s("923771")()) {
        var i = Symbol.prototype.toString,
            n = /^Symbol\(.*\)$/;
        t.exports = function(t) {
            if ("symbol" == typeof t) return !0;
            if ("[object Symbol]" !== r.call(t)) return !1;
            try {
                var e;
                return e = t, "symbol" == typeof e.valueOf() && n.test(i.call(e))
            } catch (t) {
                return !1
            }
        }
    } else t.exports = function(t) {
        return !1
    }
}