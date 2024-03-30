function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("481971"),
        o = n("698779"),
        i = n("941504");

    function a(e, t, n) {
        var a = null;
        return "failed" === t ? a = function(e, t) {
            var n = e.platform,
                r = e.name;
            switch (t) {
                case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED:
                    return {
                        title: i.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED, body: i.default.Messages.CONSOLE_DEVICE_COMMUNICATION_RESTRICTED_BODY.format({
                            deviceType: n
                        })
                    };
                case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_INVALID_POWER_MODE:
                    return {
                        title: i.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING.format({
                            deviceType: n
                        }), body: i.default.Messages.CONSOLE_DEVICE_NOT_RESPONDING_BODY.format({
                            deviceName: r
                        })
                    };
                case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_UNVAILABLE_FROM_OTHER_USERS:
                    return {
                        title: i.default.Messages.CONSOLE_DEVICE_IN_USE.format({
                            deviceType: n
                        }), body: i.default.Messages.CONSOLE_DEVICE_IN_USE_BODY.format({
                            deviceName: r
                        })
                    };
                case o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_ACCOUNT_LINK_ERROR:
                    return {
                        title: i.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: i.default.Messages.CONSOLE_DEVICE_RECONNECT_ACCOUNT.format({
                            deviceType: n
                        }), isAccountLinkError: !0
                    };
                default:
                    return {
                        title: i.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR, body: i.default.Messages.CONSOLE_DEVICE_UNKNOWN_ERROR_BODY.format({
                            deviceName: r
                        })
                    }
            }
        }(e, n.code) : "n/a" === t && (a = function(e, t) {
            var n = e.platform,
                r = e.name;
            if (t === o.GameConsoleCommandResultErrorCodes.CONSOLE_DEVICE_PASSCODE_UNLOCK_REQUIRED) return {
                title: i.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE.format({
                    deviceType: n
                }),
                body: i.default.Messages.CONSOLE_DEVICE_REQUIRES_PASSCODE_BODY.format({
                    deviceName: r
                })
            };
            return null
        }(e, n.code)), null != a && (a.errorCodeMessage = i.default.Messages.CONSOLE_ERROR_CODE_SUPPORT.format({
            supportURL: r.default.getSubmitRequestURL(),
            errorCode: n.code
        })), a
    }
}