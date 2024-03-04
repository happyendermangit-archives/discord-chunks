function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("993105"),
        r = n("492249"),
        a = n("782340");
    i = class {
        get displayMessage() {
            if (null == this.code) return a.default.Messages.NOTICE_DISPATCH_ERROR;
            let {
                path: e
            } = this.context;
            switch (this.code) {
                case r.DispatchErrorCodes.DISK_LOW:
                    let {
                        available: t, required: n
                    } = this.context, i = (0, s.formatSize)(t, {
                        useKibibytes: !0
                    }), o = (0, s.formatSize)(n, {
                        useKibibytes: !0
                    });
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_DISK_LOW.format({
                        required: o,
                        available: i
                    });
                case r.DispatchErrorCodes.POST_INSTALL_FAILED:
                    let {
                        name: l
                    } = this.context;
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_FAILED.format({
                        name: l
                    });
                case r.DispatchErrorCodes.FILE_NAME_TOO_LONG:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_FILE_NAME_TOO_LONG;
                case r.DispatchErrorCodes.POST_INSTALL_CANCELLED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_CANCELLED;
                case r.DispatchErrorCodes.IO_PERMISSION_DENIED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_IO_PERMISSION_DENIED;
                case r.DispatchErrorCodes.NO_MANIFESTS:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_NO_MANIFESTS;
                case r.DispatchErrorCodes.NOT_ENTITLED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_NOT_ENTITLED;
                case r.DispatchErrorCodes.NOT_DIRECTORY:
                case r.DispatchErrorCodes.DISK_PERMISSION_DENIED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_UNWRITABLE.format({
                        path: e
                    });
                case r.DispatchErrorCodes.INVALID_DRIVE:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_INVALID_DRIVE.format({
                        path: e
                    });
                case r.DispatchErrorCodes.APPLICATION_LOCK_FAILED:
                    return a.default.Messages.NOTICE_DISPATCH_APPLICATION_LOCK_FAILED;
                case r.DispatchErrorCodes.DISK_FULL:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_DISK_FULL;
                case r.DispatchErrorCodes.API_ERROR:
                case r.DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED:
                    return a.default.Messages.NOTICE_DISPATCH_API_ERROR;
                default:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_WITH_CODE.format({
                        code: "".concat(this.code)
                    })
            }
        }
        constructor(e) {
            this.raw = e, null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? this.context = e.context : this.context = {}
        }
    }
}