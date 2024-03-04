function(e, t, n) {
    "use strict";
    var r = Object.prototype.toString;
    e.exports = function(e) {
        var t = r.call(e),
            n = "[object Arguments]" === t;
        return !n && (n = "[object Array]" !== t && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === r.call(e.callee)), n
    }
}