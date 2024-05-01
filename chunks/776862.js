function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("358085"),
        r = n("998502"),
        a = n("522474");

    function s(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = a.default.getWindow(e);
        null != n && !n.closed && (i.isPlatformEmbedded ? r.default.focus(e, t) : n.focus())
    }
}