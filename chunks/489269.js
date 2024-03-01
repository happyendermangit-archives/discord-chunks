function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("913144"),
        r = class e {
            static setPermission(e, t) {
                i.default.dispatch({
                    type: "SET_NATIVE_PERMISSION",
                    permissionType: e,
                    state: t
                })
            }
        }
}