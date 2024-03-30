function(e, t, n) {
    "use strict";
    var r = n("147018"),
        i = n("339718"),
        a = n("49693"),
        o = n("959318"),
        s = n("345374");
    r({
        target: "Array",
        proto: !0
    }, {
        at: function(e) {
            var t = i(this),
                n = a(t),
                r = o(e),
                s = r >= 0 ? r : n + r;
            return s < 0 || s >= n ? void 0 : t[s]
        }
    }), s("at")
}