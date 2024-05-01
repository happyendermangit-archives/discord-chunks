function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORTS_COPY: function() {
            return s
        },
        copy: function() {
            return o
        }
    }), n("411104");
    var i = n("852229"),
        r = n("358085"),
        a = n("998502");
    let s = (() => {
        if (r.isPlatformEmbedded) return null != a.default.copy;
        try {
            return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
        } catch (e) {
            return !1
        }
    })();

    function o(e) {
        return !!s && (r.isPlatformEmbedded ? (a.default.copy(e), !0) : i.copy(e))
    }
}