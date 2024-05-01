function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("302463"),
        r = n("981631");
    class a {
        getCreateAttachmentURL(e) {
            return r.Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
        }
        getDeleteUploadURL(e) {
            return r.Endpoints.MESSAGE_DELETE_UPLOAD(e)
        }
        getMaxFileSize(e) {
            return i.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES
        }
        getMaxAttachmentsCount() {
            return i.MAX_ATTACHMENT_UPLOAD_COUNT
        }
        getMaxTotalAttachmentSize() {
            return i.MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES
        }
        get shouldReactNativeCompressUploads() {
            return !1
        }
    }
}