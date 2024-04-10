function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isAnimatedImageUrl: function() {
            return l
        },
        isImageFile: function() {
            return a
        },
        isVideoFile: function() {
            return _
        },
        isVideoUrl: function() {
            return d
        }
    }), n("47120");
    var i = n("358085");
    let r = (e, t) => {
            if (null == e) return !1;
            let [n, i] = e.split(/\?/, 1);
            return t.test(n)
        },
        s = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
        a = e => null != e && s.test(e),
        o = /\.(webp|gif)$/i,
        l = e => r(e, o),
        u = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
        d = e => r(e, u),
        _ = e => null != e && u.test(e)
}