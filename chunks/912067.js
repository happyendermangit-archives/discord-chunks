function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("426685");
    class s extends i.NativePermissionBaseUtils {
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
    var r = new s
}