function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var i = n("358085"),
        r = n("998502"),
        s = n("522474");

    function a(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = s.default.getWindow(e);
        null != n && !n.closed && (i.isPlatformEmbedded ? r.default.focus(e, t) : n.focus())
    }
}