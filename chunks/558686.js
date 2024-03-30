function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_THUMBNAIL_COUNT: function() {
            return o
        },
        getEmbedPreviewImageUrl: function() {
            return i
        },
        getThumbnailImage: function() {
            return a
        }
    });
    var r = n("601096"),
        o = 4;

    function i(e) {
        if (null != e) {
            var t, n, r = e.thumbnail,
                o = e.image;
            if (null != r) return null !== (t = r.proxy_url) && void 0 !== t ? t : r.url;
            if (null != o) return null !== (n = o.proxy_url) && void 0 !== n ? n : o.url
        }
    }

    function a(e) {
        if (null != e) {
            var t = e.url,
                n = e.proxy_url;
            return null != t && null != n ? (0, r.isVideoUrl)(t) ? "".concat(n, "?format=jpeg") : n : t
        }
    }
}