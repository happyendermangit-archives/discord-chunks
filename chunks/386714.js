function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return n
        }
    });
    var l = i("845579"),
        r = i("217513");

    function n(e, t) {
        if ("undefined" == typeof Image) return;
        let i = (0, r.getDisplayProfile)(e.user.id, t);
        if (null == i) return;
        let n = l.GifAutoPlay.getSetting(),
            u = i.getBannerURL({
                canAnimate: n,
                size: 480
            });
        if (null == u) return;
        let o = new Image;
        o.src = u
    }
}