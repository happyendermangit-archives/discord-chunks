function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openPomeloModal: function() {
            return i
        }
    });
    var r = n("784184"),
        o = n("370621");

    function i(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return !(!n && (0, r.hasAnyModalOpen)()) && ((0, o.default)(e, t), !0)
    }
}