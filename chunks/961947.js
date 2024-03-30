function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("629815");
    t.default = {
        clearVADWarning: function() {
            r.default.dispatch({
                type: "PERMISSION_CLEAR_VAD_WARNING"
            })
        },
        clearSuppressWarning: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            r.default.dispatch({
                type: "PERMISSION_CLEAR_SUPPRESS_WARNING",
                forever: e
            })
        },
        clearPTTAdminWarning: function() {
            r.default.dispatch({
                type: "PERMISSION_CLEAR_PTT_ADMIN_WARNING"
            })
        },
        requestElevatedProcess: function(e) {
            r.default.dispatch({
                type: "PERMISSION_REQUEST_ELEVATED_PROCESS",
                pid: e
            })
        },
        clearElevatedProcess: function() {
            r.default.dispatch({
                type: "PERMISSION_CLEAR_ELEVATED_PROCESS"
            })
        },
        continueNonelevatedProcess: function(e) {
            r.default.dispatch({
                type: "PERMISSION_CONTINUE_NONELEVATED_PROCESS",
                pid: e
            })
        }
    }
}