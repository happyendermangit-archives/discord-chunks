function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("695346"),
        r = n("318661");

    function a(e, t) {
        if ("undefined" == typeof Image) return;
        let n = (0, r.getDisplayProfile)(e.user.id, t);
        if (null == n) return;
        let a = i.GifAutoPlay.getSetting(),
            s = n.getBannerURL({
                canAnimate: a,
                size: 480
            });
        if (null != s) new Image().src = s
    }
}