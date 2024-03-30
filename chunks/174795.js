function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("989224");
    t.default = function(e) {
        var t = e.profileEffectConfig,
            n = e.onReady,
            i = (0, o.default)(t.effects, n),
            a = i.pendingRef,
            u = i.setPending;
        return r.createElement("div", null, t.effects.map(function(e) {
            return r.createElement("img", {
                key: e.src,
                src: e.src,
                alt: "Preload Profile Effect Asset",
                "aria-hidden": !0,
                style: {
                    opacity: 0,
                    position: "absolute"
                },
                onLoad: function() {
                    u(a.current - 1), a.current = a.current - 1
                }
            })
        }))
    }
}