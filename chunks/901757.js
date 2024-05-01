function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a = n("544891"),
        s = n("689938");
    (i || (i = {})).ASSET_SIZE = "BINARY_TYPE_MAX_SIZE", (r || (r = {})).ASSET = "asset";
    class o extends a.V8APIError {
        constructor(e, t) {
            var n;
            super(e, t, s.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD);
            let i = this.getFieldErrors("asset");
            null != i && (null === (n = i[0]) || void 0 === n ? void 0 : n.code) === "BINARY_TYPE_MAX_SIZE" && (this.message = s.default.Messages.VIDEO_BACKGROUND_ERROR_UPLOAD_FILE_SIZE)
        }
    }
    t.default = o
}