function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        isImageFile: function() {
            return a
        },
        isAnimatedImageUrl: function() {
            return l
        },
        isVideoUrl: function() {
            return d
        },
        isVideoFile: function() {
            return c
        }
    }), n("222007");
    var i = n("773336");
    let s = (e, t) => {
            if (null == e) return !1;
            let [n, i] = e.split(/\?/, 1);
            return t.test(n)
        },
        r = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
        a = e => null != e && r.test(e),
        o = /\.(webp|gif)$/i,
        l = e => s(e, o),
        u = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
        d = e => s(e, u),
        c = e => null != e && u.test(e)
}