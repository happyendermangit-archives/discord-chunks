function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MAX_THUMBNAIL_COUNT: function() {
            return s
        },
        getEmbedPreviewImageUrl: function() {
            return r
        },
        getThumbnailImage: function() {
            return a
        }
    });
    var i = n("651693");
    let s = 4;

    function r(e) {
        var t, n;
        if (null == e) return;
        let {
            thumbnail: i,
            image: s
        } = e;
        return null != i ? null !== (t = i.proxy_url) && void 0 !== t ? t : i.url : null != s ? null !== (n = s.proxy_url) && void 0 !== n ? n : s.url : void 0
    }

    function a(e) {
        if (null == e) return;
        let {
            url: t,
            proxy_url: n
        } = e;
        if (null != t && null != n) {
            let e = (0, i.isVideoUrl)(t);
            return e ? "".concat(n, "?format=jpeg") : n
        }
        return t
    }
}