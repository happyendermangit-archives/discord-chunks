function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        SUPPORTS_COPY: function() {
            return a
        },
        copy: function() {
            return o
        }
    }), n("411104");
    var i = n("852229"),
        r = n("358085"),
        s = n("998502");
    let a = (() => {
        if (r.isPlatformEmbedded) return null != s.default.copy;
        try {
            return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
        } catch (e) {
            return !1
        }
    })();

    function o(e) {
        return !!a && (r.isPlatformEmbedded ? (s.default.copy(e), !0) : i.copy(e))
    }
}