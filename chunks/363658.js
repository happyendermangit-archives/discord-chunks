function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("913144"),
        r = {
            clearVADWarning() {
                i.default.dispatch({
                    type: "PERMISSION_CLEAR_VAD_WARNING"
                })
            },
            clearSuppressWarning() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                i.default.dispatch({
                    type: "PERMISSION_CLEAR_SUPPRESS_WARNING",
                    forever: e
                })
            },
            clearPTTAdminWarning() {
                i.default.dispatch({
                    type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING"
                })
            },
            requestElevatedProcess(e) {
                i.default.dispatch({
                    type: "PERMISSION_REQUEST_ELEVATED_PROCESS",
                    pid: e
                })
            },
            clearElevatedProcess() {
                i.default.dispatch({
                    type: "PERMISSION_CLEAR_ELEVATED_PROCESS"
                })
            },
            continueNonelevatedProcess(e) {
                i.default.dispatch({
                    type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS",
                    pid: e
                })
            }
        }
}