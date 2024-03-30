function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("53867"),
        o = n("794173");

    function i(e, t) {
        if ("undefined" == typeof Image) return;
        var n = (0, o.getDisplayProfile)(e.user.id, t);
        if (null != n) {
            var i = r.GifAutoPlay.getSetting(),
                a = n.getBannerURL({
                    canAnimate: i,
                    size: 480
                });
            null != a && (new Image().src = a)
        }
    }
}