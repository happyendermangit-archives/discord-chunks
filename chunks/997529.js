function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UploadTargets: function() {
            return o
        },
        getUploadTarget: function() {
            return d
        }
    });
    var r, o, i = n("574050"),
        a = n("935741"),
        u = n("49657"),
        s = n("83653"),
        l = n("281767");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var f = function() {
        var e, t, n;

        function r() {
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r)
        }
        return e = r, t = [{
            key: "getCreateAttachmentURL",
            value: function(e) {
                return l.Endpoints.MESSAGE_CREATE_ATTACHMENT_UPLOAD(e)
            }
        }, {
            key: "getDeleteUploadURL",
            value: function(e) {
                return l.Endpoints.MESSAGE_DELETE_UPLOAD(e)
            }
        }, {
            key: "getMaxFileSize",
            value: function(e) {
                var t = a.default.getBasicChannel(e);
                return u.maxFileSize(null == t ? void 0 : t.guild_id)
            }
        }, {
            key: "getMaxAttachmentsCount",
            value: function() {
                return l.MAX_UPLOAD_COUNT
            }
        }, {
            key: "getMaxTotalAttachmentSize",
            value: function() {
                return s.MAX_TOTAL_ATTACHMENT_SIZE
            }
        }, {
            key: "shouldReactNativeCompressUploads",
            get: function() {
                return !0
            }
        }], c(e.prototype, t), n && c(e, n), r
    }();

    function d(e) {
        if (1 === e) return new i.default;
        return new f
    }(r = o || (o = {}))[r.MESSAGE_ATTACHMENT = 0] = "MESSAGE_ATTACHMENT", r[r.GUILD_PRODUCT_ATTACHMENT = 1] = "GUILD_PRODUCT_ATTACHMENT"
}