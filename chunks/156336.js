function(e, t, r) {
    "use strict";

    function n(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function u(e) {
        var t, r;
        return !1 !== n(e) && (void 0 === (t = e.constructor) || !1 !== n(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf") && !0)
    }
    r.r(t), r.d(t, {
        isPlainObject: function() {
            return u
        }
    })
}