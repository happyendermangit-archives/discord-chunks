function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.isInline,
            n = e.isVoid;
        return e.isInline = function(e) {
            return "testInline" === e.type || "testInlineVoid" === e.type || t(e)
        }, e.isVoid = function(e) {
            return "testInlineVoid" === e.type || n(e)
        }, e
    }
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    })
}