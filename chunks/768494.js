function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ContentScanFlags: function() {
            return i
        },
        messageAttachmentToUnfurledMediaItem: function() {
            return l
        }
    }), n("789020");
    var i, r, s = n("118139"),
        a = n("630388"),
        o = n("981631");

    function l(e) {
        var t, n, i;
        let r = 0;
        (0, a.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, o.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) && (r += 1);
        let l = e.content_type;
        if (null == l) {
            let t = e.filename.split("."),
                n = t[t.length - 1];
            l = (0, s.isImageFile)(e.filename) ? "image/" + n : (0, s.isVideoFile)(e.filename) ? "video/" + n : "unknown/unknown"
        }
        return {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: null !== (n = e.height) && void 0 !== n ? n : 0,
            width: null !== (i = e.width) && void 0 !== i ? i : 0,
            contentType: l,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            contentScanMetadata: null == e.content_scan_version ? void 0 : {
                version: e.content_scan_version,
                contentScanFlags: r
            }
        }
    }(r = i || (i = {}))[r.EXPLICIT = 1] = "EXPLICIT"
}