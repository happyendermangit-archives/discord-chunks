function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("293335");
    t.default = e => {
        let {
            profileEffectConfig: t,
            onReady: n
        } = e, {
            pendingRef: a,
            setPending: s
        } = (0, r.default)(t.effects, n);
        return (0, i.jsx)("div", {
            children: t.effects.map(e => (0, i.jsx)("img", {
                src: e.src,
                alt: "Preload Profile Effect Asset",
                "aria-hidden": !0,
                style: {
                    opacity: 0,
                    position: "absolute"
                },
                onLoad: () => {
                    s(a.current - 1), a.current = a.current - 1
                }
            }, e.src))
        })
    }
}