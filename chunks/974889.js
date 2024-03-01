function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return u
        }
    });
    var n = i("773336"),
        l = i("50885"),
        a = i("870346");

    function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = a.default.getWindow(e);
        null != i && !i.closed && (n.isPlatformEmbedded ? l.default.focus(e, t) : i.focus())
    }
}