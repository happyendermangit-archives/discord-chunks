function(e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    if (n("923771")()) {
        var i = Symbol.prototype.toString,
            o = /^Symbol\(.*\)$/;
        e.exports = function(e) {
            if ("symbol" == typeof e) return !0;
            if ("[object Symbol]" !== r.call(e)) return !1;
            try {
                var t;
                return t = e, "symbol" == typeof t.valueOf() && o.test(i.call(t))
            } catch (e) {
                return !1
            }
        }
    } else e.exports = function(e) {
        return !1
    }
}