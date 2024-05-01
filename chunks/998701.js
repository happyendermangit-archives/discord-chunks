function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadErrorCodes: function() {
            return r
        }
    });
    var i, r, a = n("689938");
    (i = r || (r = {}))[i.GENERAL = 0] = "GENERAL", i[i.NO_FILE = 1] = "NO_FILE", i[i.PROGRESS = 2] = "PROGRESS", i[i.UPLOAD = 3] = "UPLOAD", i[i.READ = 4] = "READ";
    t.default = class e {
        get displayMessage() {
            switch (this.code) {
                case 1:
                    return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                case 2:
                    return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                case 3:
                    return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                case 4:
                    return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                default:
                    return a.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
            }
        }
        constructor(e) {
            var t, n, i;
            t = this, i = void 0, (n = "code") in t ? Object.defineProperty(t, n, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = i, this.code = e
        }
    }
}