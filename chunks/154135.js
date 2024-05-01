function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_THUMBNAIL_COUNT: function() {
            return r
        },
        getEmbedPreviewImageUrl: function() {
            return s
        },
        getThumbnailImage: function() {
            return a
        }
    });
    var i = n("118139");
    let r = 4;

    function s(e) {
        var t, n;
        if (null == e) return;
        let {
            thumbnail: i,
            image: r
        } = e;
        return null != i ? null !== (t = i.proxy_url) && void 0 !== t ? t : i.url : null != r ? null !== (n = r.proxy_url) && void 0 !== n ? n : r.url : void 0
    }

    function a(e) {
        if (null == e) return;
        let {
            url: t,
            proxy_url: n
        } = e;
        return null != t && null != n ? (0, i.isVideoUrl)(t) ? "".concat(n, "?format=jpeg") : n : t
    }
}