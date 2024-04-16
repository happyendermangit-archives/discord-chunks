function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ContentScanFlags: function() {
            return i
        },
        messageAttachmentToUnfurledMediaItem: function() {
            return l
        },
        toUnfurledMediaItem: function() {
            return o
        }
    }), n("789020");
    var i, r, s = n("630388"),
        a = n("981631");
    (r = i || (i = {}))[r.EXPLICIT = 1] = "EXPLICIT";

    function o(e) {
        var t;
        return {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: e.height,
            width: e.width,
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            contentType: e.content_type,
            contentScanMetadata: null != e.content_scan_metadata ? {
                version: (t = e.content_scan_metadata).version,
                contentScanFlags: t.content_scan_flags
            } : void 0
        }
    }

    function l(e) {
        var t, n, i, r;
        let o = 0;
        return (0, s.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, a.MessageAttachmentFlags.CONTAINS_EXPLICIT_MEDIA) && (o += 1), {
            url: e.url,
            proxyUrl: e.proxy_url,
            height: null !== (n = e.height) && void 0 !== n ? n : 0,
            width: null !== (i = e.width) && void 0 !== i ? i : 0,
            contentType: null !== (r = e.content_type) && void 0 !== r ? r : "unknown/unknown",
            placeholder: e.placeholder,
            placeholderVersion: e.placeholder_version,
            contentScanMetadata: null == e.content_scan_version ? void 0 : {
                version: e.content_scan_version,
                contentScanFlags: o
            }
        }
    }
}