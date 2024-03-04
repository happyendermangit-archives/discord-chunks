function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadErrorCodes: function() {
            return s
        },
        default: function() {
            return a
        }
    });
    var i, s, r = n("782340");
    (i = s || (s = {}))[i.GENERAL = 0] = "GENERAL", i[i.NO_FILE = 1] = "NO_FILE", i[i.PROGRESS = 2] = "PROGRESS", i[i.UPLOAD = 3] = "UPLOAD", i[i.READ = 4] = "READ";
    var a = class e {
        get displayMessage() {
            switch (this.code) {
                case 1:
                    return r.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                case 2:
                    return r.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                case 3:
                    return r.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                case 4:
                    return r.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                default:
                    return r.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
            }
        }
        constructor(e) {
            this.code = e
        }
    }
}