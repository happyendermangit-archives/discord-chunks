function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORTS_COPY: function() {
            return a
        },
        copy: function() {
            return u
        }
    });
    var r = n("574854"),
        o = n("374550"),
        i = n("131900"),
        a = function() {
            if (o.isPlatformEmbedded) return null != i.default.copy;
            try {
                return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
            } catch (e) {
                return !1
            }
        }();

    function u(e) {
        return !!a && (o.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
    }
}