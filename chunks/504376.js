function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("304933"),
        o = n("902735"),
        i = n("941504");

    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = function() {
        var e, t, n;

        function s(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), u(this, "raw", void 0), u(this, "context", void 0), u(this, "code", void 0), u(this, "uuid", void 0), u(this, "applicationId", void 0), u(this, "branchId", void 0), this.raw = e, null != e.code && (this.code = e.code), null != e.uuid && (this.uuid = e.uuid), null != e.application_id && (this.applicationId = e.application_id), null != e.branch_id && (this.branchId = e.branch_id), null != e.context ? this.context = e.context : this.context = {}
        }
        return e = s, t = [{
            key: "displayMessage",
            get: function() {
                if (null == this.code) return i.default.Messages.NOTICE_DISPATCH_ERROR;
                var e = this.context.path;
                switch (this.code) {
                    case o.DispatchErrorCodes.DISK_LOW:
                        var t = this.context,
                            n = t.available,
                            a = t.required,
                            u = (0, r.formatSize)(n, {
                                useKibibytes: !0
                            }),
                            s = (0, r.formatSize)(a, {
                                useKibibytes: !0
                            });
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_DISK_LOW.format({
                            required: s,
                            available: u
                        });
                    case o.DispatchErrorCodes.POST_INSTALL_FAILED:
                        var l = this.context.name;
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_FAILED.format({
                            name: l
                        });
                    case o.DispatchErrorCodes.FILE_NAME_TOO_LONG:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_FILE_NAME_TOO_LONG;
                    case o.DispatchErrorCodes.POST_INSTALL_CANCELLED:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_POST_INSTALL_CANCELLED;
                    case o.DispatchErrorCodes.IO_PERMISSION_DENIED:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_IO_PERMISSION_DENIED;
                    case o.DispatchErrorCodes.NO_MANIFESTS:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_NO_MANIFESTS;
                    case o.DispatchErrorCodes.NOT_ENTITLED:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_NOT_ENTITLED;
                    case o.DispatchErrorCodes.NOT_DIRECTORY:
                    case o.DispatchErrorCodes.DISK_PERMISSION_DENIED:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_UNWRITABLE.format({
                            path: e
                        });
                    case o.DispatchErrorCodes.INVALID_DRIVE:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_INVALID_DRIVE.format({
                            path: e
                        });
                    case o.DispatchErrorCodes.APPLICATION_LOCK_FAILED:
                        return i.default.Messages.NOTICE_DISPATCH_APPLICATION_LOCK_FAILED;
                    case o.DispatchErrorCodes.DISK_FULL:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_DISK_FULL;
                    case o.DispatchErrorCodes.API_ERROR:
                    case o.DispatchErrorCodes.MAX_REQUEST_RETRIES_EXCEEDED:
                        return i.default.Messages.NOTICE_DISPATCH_API_ERROR;
                    default:
                        return i.default.Messages.NOTICE_DISPATCH_ERROR_WITH_CODE.format({
                            code: "".concat(this.code)
                        })
                }
            }
        }], a(e.prototype, t), n && a(e, n), s
    }()
}