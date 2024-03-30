function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("424218"),
        r = n("186901"),
        s = n("689938");

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    class o {
        get displayMessage() {
            if (null == this.code) return s.default.Messages.NOTICE_DISPATCH_ERROR;
            let {
                path: e
            } = this.context;
            switch (this.code) {
                case r.DispatchErrorCodes.DISK_LOW:
                    let {
                        available: t, required: n
                    } = this.context, a = (0, i.formatSize)(t, {
                        useKibibytes: !0
                    }), o = (0, i.formatSize)(n, {
                        useKibibytes: !0
                    });
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_DISK_LOW.format({
                        required: o,
                        available: a
                    });
                case r.DispatchErrorCodes.POST_INSTALL_FAILED:
                    let {
                        name: l
                    } = this.context;
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_FAILED.format({
                        name: l
                    });
                case r.DispatchErrorCodes.FILE_NAME_TOO_LONG:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_FILE_NAME_TOO_LONG;
                case r.DispatchErrorCodes.POST_INSTALL_CANCELLED:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_CANCELLED;
                case r.DispatchErrorCodes.IO_PERMISSION_DENIED:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_IO_PERMISSION_DENIED;
                case r.DispatchErrorCodes.NO_MANIFESTS:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_NO_MANIFESTS;
                case r.DispatchErrorCodes.NOT_ENTITLED:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_NOT_ENTITLED;
                case r.DispatchErrorCodes.NOT_DIRECTORY:
                case r.DispatchErrorCodes.DISK_PERMISSION_DENIED:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_UNWRITABLE.format({
                        path: e
                    });
                case r.DispatchErrorCodes.INVALID_DRIVE:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_INVALID_DRIVE.format({
                        path: e
                    });
                case r.DispatchErrorCodes.APPLICATION_LOCK_FAILED:
                    return s.default.Messages.NOTICE_DISPATCH_APPLICATION_LOCK_FAILED;
                case r.DispatchErrorCodes.DISK_FULL:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_DISK_FULL;
                case r.DispatchErrorCodes.API_ERROR:
                case r.DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED:
                    return s.default.Messages.NOTICE_DISPATCH_API_ERROR;
                default:
                    return s.default.Messages.NOTICE_DISPATCH_ERROR_WITH_CODE.format({
                        code: "".concat(this.code)
                    })
            }
        }
        constructor(e) {
            a(this, "raw", void 0), a(this, "context", void 0), a(this, "code", void 0), a(this, "uuid", void 0), a(this, "applicationId", void 0), a(this, "branchId", void 0), this.raw = e, null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? this.context = e.context : this.context = {}
        }
    }
}