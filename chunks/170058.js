function(e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    if (n("322499")()) {
        var i = Symbol.prototype.toString,
            a = /^Symbol\(.*\)$/;
        e.exports = function(e) {
            if ("symbol" == typeof e) return !0;
            if ("[object Symbol]" !== r.call(e)) return !1;
            try {
                var t;
                return t = e, "symbol" == typeof t.valueOf() && a.test(i.call(t))
            } catch (e) {
                return !1
            }
        }
    } else e.exports = function(e) {
        return !1
    }
}