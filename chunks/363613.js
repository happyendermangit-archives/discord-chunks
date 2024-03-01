function(e, _, E) {
    "use strict";
    E.r(_), E.d(_, {
        openPomeloModal: function() {
            return n
        }
    });
    var t = E("77078"),
        o = E("363861");

    function n(e) {
        let _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            E = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return !(!E && (0, t.hasAnyModalOpen)()) && ((0, o.default)(e, _), !0)
    }
}