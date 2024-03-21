function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var i, s, r = n("872717"),
        a = n("782340");
    (i || (i = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (s || (s = {})).ASSET = "asset";
    class o extends r.V8APIError {
        constructor(e, t) {
            var n;
            super(e, t, a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
            let i = this.getFieldErrors("asset");
            null != i && (null === (n = i[0]) || void 0 === n ? void 0 : n.code) === "BINARY_TYPE_MAX_SIZE" && (this.message = a.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
        }
    }
    var l = o
}