function(e, t, n) {
    "use strict";

    function i(e) {
        let {
            isInline: t,
            isVoid: n
        } = e;
        return e.isInline = e => "testInline" === e.type || "testInlineVoid" === e.type || t(e), e.isVoid = e => "testInlineVoid" === e.type || n(e), e
    }
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    })
}