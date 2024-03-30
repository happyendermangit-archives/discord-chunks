function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("63063"),
        r = n("927923"),
        s = n("689938");

    function a(e, t, n) {
        let a = null;
        return "failed" === t ? a = function(e, t) {
            let {
                platform: n,
                name: i
            } = e;
            switch (t) {
                case r.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
                    return {
                        title: s.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED, body: s.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED_BODY.format({
                            deviceType: n
                        })
                    };
                case r.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_INVALID_POWER_MODE:
                    return {
                        title: s.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING.format({
                            deviceType: n
                        }), body: s.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING_BODY.format({
                            deviceName: i
                        })
                    };
                case r.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
                    return {
                        title: s.default.Messages.CONSOLE_DEVICE_IN_USE.format({
                            deviceType: n
                        }), body: s.default.Messages.CONSOLE_DEVICE_IN_USE_BODY.format({
                            deviceName: i
                        })
                    };
                case r.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
                    return {
                        title: s.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: s.default.Messages.CONSOLE_DEVICE_RECONNECT_ACCOUNT.format({
                            deviceType: n
                        }), isAccountLinkError: !0
                    };
                default:
                    return {
                        title: s.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: s.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
                            deviceName: i
                        })
                    }
            }
        }(e, n.code) : "n/a" === t && (a = function(e, t) {
            let {
                platform: n,
                name: i
            } = e;
            if (t === r.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) return {
                title: s.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE.format({
                    deviceType: n
                }),
                body: s.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE_BODY.format({
                    deviceName: i
                })
            };
            return null
        }(e, n.code)), null != a && (a.errorCodeMessage = s.default.Messages.CONSOLE_ERROR_CODE_SUPPORT.format({
            supportURL: i.default.getSubmitRequestURL(),
            errorCode: n.code
        })), a
    }
}