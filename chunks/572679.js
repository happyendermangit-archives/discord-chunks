function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var i, s = n("307785"),
        r = n("49111");
    i = class {
        getCreateAttachmentURL(e) {
            return r.Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
        }
        getDeleteUploadURL(e) {
            return r.Endpoints.MESSAGE_DELETE_UPLOAD(e)
        }
        getMaxFileSize(e) {
            return s.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES
        }
        getMaxAttachmentsCount() {
            return s.MAX_ATTACHMENT_UPLOAD_COUNT
        }
        getMaxTotalAttachmentSize() {
            return s.MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES
        }
        get shouldReactNativeCompressUploads() {
            return !1
        }
    }
}