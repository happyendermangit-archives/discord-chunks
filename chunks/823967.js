function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("570140");
    t.default = class e {
        static setPermission(e, t) {
            i.default.dispatch({
                type: "SET_NATIVE_PERMISSION",
                permissionType: e,
                state: t
            })
        }
    }
}