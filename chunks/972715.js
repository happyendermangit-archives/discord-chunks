function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("374550"),
        o = n("131900"),
        i = n("112982");

    function a(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = i.default.getWindow(e);
        null != n && !n.closed && (r.isPlatformEmbedded ? o.default.focus(e, t) : n.focus())
    }
}