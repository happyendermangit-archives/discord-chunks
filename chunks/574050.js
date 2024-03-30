function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("385484"),
        o = n("281767");

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var a = function() {
        var e, t, n;

        function a() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, a)
        }
        return e = a, t = [{
            key: "getCreateAttachmentURL",
            value: function(e) {
                return o.Endpoints.GUILD_PRODUCT_CREATE_ATTACHMENT_UPLOAD(e)
            }
        }, {
            key: "getDeleteUploadURL",
            value: function(e) {
                return o.Endpoints.MESSAGE_DELETE_UPLOAD(e)
            }
        }, {
            key: "getMaxFileSize",
            value: function(e) {
                return r.MAX_ATTACHMENT_UPLOAD_FILESIZE_BYTES
            }
        }, {
            key: "getMaxAttachmentsCount",
            value: function() {
                return r.MAX_ATTACHMENT_UPLOAD_COUNT
            }
        }, {
            key: "getMaxTotalAttachmentSize",
            value: function() {
                return r.MAX_ATTACHMENT_UPLOAD_TOTAL_FILESIZE_BYTES
            }
        }, {
            key: "shouldReactNativeCompressUploads",
            get: function() {
                return !1
            }
        }], i(e.prototype, t), n && i(e, n), a
    }()
}