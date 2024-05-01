function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        openPomeloModal: function() {
            return s
        }
    });
    var i = n("481060"),
        r = n("303172");

    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return !(!n && (0, i.hasAnyModalOpen)()) && ((0, r.default)(e, t), !0)
    }
}