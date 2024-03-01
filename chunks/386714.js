function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return l
        }
    });
    var n = i("845579"),
        r = i("217513");

    function l(e, t) {
        if ("undefined" == typeof Image) return;
        let i = (0, r.getDisplayProfile)(e.user.id, t);
        if (null == i) return;
        let l = n.GifAutoPlay.getSetting(),
            u = i.getBannerURL({
                canAnimate: l,
                size: 480
            });
        if (null == u) return;
        let o = new Image;
        o.src = u
    }
}