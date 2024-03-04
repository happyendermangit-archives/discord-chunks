function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadTargets: function() {
            return s
        },
        getUploadTarget: function() {
            return c
        }
    });
    var i, s, r = n("572679"),
        a = n("42203"),
        o = n("254490"),
        l = n("980134"),
        u = n("49111");
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

    function c(e) {
        if (1 === e) return new r.default;
        return new d
    }(i = s || (s = {}))[i.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT", i[i.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT"
}