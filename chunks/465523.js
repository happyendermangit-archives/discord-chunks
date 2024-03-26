function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return u
        }
    });
    var n = r("37983");
    r("884691");
    var o = r("833395"),
        u = e => {
            let {
                profileEffectConfig: t,
                onReady: r
            } = e, {
                pendingRef: u,
                setPending: l
            } = (0, o.default)(t.effects, r);
            return (0, n.jsx)("div", {
                children: t.effects.map(e => (0, n.jsx)("img", {
                    src: e.src,
                    alt: "Preload Profile Effect Asset",
                    "aria-hidden": !0,
                    style: {
                        opacity: 0,
                        position: "absolute"
                    },
                    onLoad: () => {
                        l(u.current - 1), u.current = u.current - 1
                    }
                }, e.src))
            })
        }
}