function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("58406");
    class r extends i.NativePermissionBaseUtils {
        requestPermissionCore(e, t) {
            return Promise.resolve(!0)
        }
        hasPermissionCore(e, t) {
            return Promise.resolve(!0)
        }
        openSettings(e) {}
        didHavePermission(e) {
            return !0
        }
        openAlertModal(e) {}
    }
    t.default = new r
}