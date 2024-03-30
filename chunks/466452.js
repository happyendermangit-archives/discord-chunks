function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = function() {
        var e, t, n;

        function i() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, i)
        }
        return e = i, t = null, n = [{
            key: "setPermission",
            value: function(e, t) {
                r.default.dispatch({
                    type: "SET_NATIVE_PERMISSION",
                    permissionType: e,
                    state: t
                })
            }
        }], t && o(e.prototype, t), n && o(e, n), i
    }();
    t.default = i
}