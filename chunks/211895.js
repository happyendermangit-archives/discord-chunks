function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("913144"),
        s = n("54239"),
        r = n("49111");

    function a() {
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
        }), (0, s.pushLayer)(r.Layers.USER_SETTINGS)
    }
}