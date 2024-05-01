function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAnimatedImageUrl: function() {
            return d
        },
        isImageContentType: function() {
            return l
        },
        isImageFile: function() {
            return o
        },
        isVideoContentType: function() {
            return I
        },
        isVideoFile: function() {
            return E
        },
        isVideoUrl: function() {
            return c
        }
    }), n("47120");
    var i = n("358085");
    let r = (e, t) => {
            if (null == e) return !1;
            let [n, i] = e.split(/\?/, 1);
            return t.test(n)
        },
        a = (e, t) => {
            if (null == e) return !1;
            let [n, i] = e.split("/");
            return n === t
        },
        s = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
        o = e => null != e && s.test(e),
        l = e => a(e, "image"),
        u = /\.(webp|gif)$/i,
        d = e => r(e, u),
        _ = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
        c = e => r(e, _),
        E = e => null != e && _.test(e),
        I = e => a(e, "video")
}