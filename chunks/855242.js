function(e, t, n) {
    "use strict";

    function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function i(e) {
        var t, n;
        return !1 !== r(e) && (void 0 === (t = e.constructor) || !1 !== r(n = t.prototype) && !1 !== n.hasOwnProperty("isPrototypeOf") && !0)
    }
    n.r(t), n.d(t, {
        isPlainObject: function() {
            return i
        }
    })
}