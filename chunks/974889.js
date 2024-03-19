function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, {
        default: function() {
            return r
        }
    });
    var n = i("773336"),
        l = i("50885"),
        a = i("870346");

    function r(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = a.default.getWindow(t);
        null != i && !i.closed && (n.isPlatformEmbedded ? l.default.focus(t, e) : i.focus())
    }
}