function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("695346"),
        r = n("318661");

    function s(e, t) {
        if ("undefined" == typeof Image) return;
        let n = (0, r.getDisplayProfile)(e.user.id, t);
        if (null == n) return;
        let s = i.GifAutoPlay.getSetting(),
            a = n.getBannerURL({
                canAnimate: s,
                size: 480
            });
        if (null != a) new Image().src = a
    }
}