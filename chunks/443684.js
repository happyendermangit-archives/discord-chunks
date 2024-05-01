function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("570140"),
        r = n("37234"),
        a = n("981631");

    function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                openWithoutBackstack: !1
            };
        i.default.dispatch({
            type: "USER_SETTINGS_MODAL_OPEN",
            section: e,
            subsection: t,
            ...n
        }), (0, r.pushLayer)(a.Layers.USER_SETTINGS)
    }
}