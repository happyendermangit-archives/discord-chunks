function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("426685");
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
    var s = new r
}