function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadTargets: function() {
            return r
        },
        getUploadTarget: function() {
            return _
        }
    });
    var i, r, s = n("277985"),
        a = n("592125"),
        o = n("403182"),
        l = n("861990"),
        u = n("981631");
    class d {
        getCreateAttachmentURL(e) {
            return u.Endpoints.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
        }
        getDeleteUploadURL(e) {
            return u.Endpoints.MESSAGE_DELETE_UPLOAD(e)
        }
        getMaxFileSize(e) {
            let t = a.default.getBasicChannel(e);
            return o.maxFileSize(null == t ? void 0 : t.guild_id)
        }
        getMaxAttachmentsCount() {
            return u.MAX_UPLOAD_COUNT
        }
        getMaxTotalAttachmentSize() {
            return l.MAX_TOTAL_ATTACHMENT_SIZE
        }
        get shouldReactNativeCompressUploads() {
            return !0
        }
    }

    function _(e) {
        if (1 === e) return new s.default;
        return new d
    }(i = r || (r = {}))[i.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT", i[i.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT"
}