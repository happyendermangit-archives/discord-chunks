function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, r = n("993105"),
        s = n("492249"),
        a = n("782340");
    i = class {
        get displayMessage() {
            if (null == this.code) return a.default.Messages.NOTICE_DISPATCH_ERROR;
            let {
                path: e
            } = this.context;
            switch (this.code) {
                case s.DispatchErrorCodes.DISK_LOW:
                    let {
                        available: t, required: n
                    } = this.context, i = (0, r.formatSize)(t, {
                        useKibibytes: !0
                    }), o = (0, r.formatSize)(n, {
                        useKibibytes: !0
                    });
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_DISK_LOW.format({
                        required: o,
                        available: i
                    });
                case s.DispatchErrorCodes.POST_INSTALL_FAILED:
                    let {
                        name: l
                    } = this.context;
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_FAILED.format({
                        name: l
                    });
                case s.DispatchErrorCodes.FILE_NAME_TOO_LONG:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_FILE_NAME_TOO_LONG;
                case s.DispatchErrorCodes.POST_INSTALL_CANCELLED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_CANCELLED;
                case s.DispatchErrorCodes.IO_PERMISSION_DENIED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_IO_PERMISSION_DENIED;
                case s.DispatchErrorCodes.NO_MANIFESTS:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_NO_MANIFESTS;
                case s.DispatchErrorCodes.NOT_ENTITLED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_NOT_ENTITLED;
                case s.DispatchErrorCodes.NOT_DIRECTORY:
                case s.DispatchErrorCodes.DISK_PERMISSION_DENIED:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_UNWRITABLE.format({
                        path: e
                    });
                case s.DispatchErrorCodes.INVALID_DRIVE:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_INVALID_DRIVE.format({
                        path: e
                    });
                case s.DispatchErrorCodes.APPLICATION_LOCK_FAILED:
                    return a.default.Messages.NOTICE_DISPATCH_APPLICATION_LOCK_FAILED;
                case s.DispatchErrorCodes.DISK_FULL:
                    return a.default.Messages.NOTICE_DISPATCH_ERROR_DISK_FULL;
                case s.DispatchErrorCodes.API_ERROR:
                case s.DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED:
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