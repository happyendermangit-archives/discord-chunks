function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        CommonConfettiCannonContextProvider: function() {
            return u
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("887024"),
        a = n("745510"),
        o = n("675654"),
        l = n("724734");

    function u(e) {
        let {
            children: t
        } = e, [n, u] = r.useState(null), [d, _] = r.useState(null), c = r.useRef(new Set), [E, I] = r.useState(!1), T = r.useCallback(e => {
            c.current.delete(e), I(c.current.size > 0)
        }, []), f = r.useCallback(e => (c.current.add(e), I(!0), () => T(e)), [T]), S = r.useCallback((e, t) => {
            for (let n of c.current) n(e, t)
        }, []);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(a.ConfettiCannonContextProvider, {
                confettiCanvas: d,
                spriteCanvas: n,
                baseConfig: o.COMMON_CONFETTI_BASE_CONFIG,
                addClickListener: f,
                removeClickListener: T,
                children: t
            }), (0, i.jsx)(s.ConfettiCanvas, {
                ref: _,
                className: l.canvas,
                environment: o.COMMON_CONFETTI_ENVIRONMENT,
                onClick: E ? S : void 0
            }), (0, i.jsx)(s.SpriteCanvas, {
                ref: u,
                colors: o.COMMON_CONFETTI_COLORS,
                sprites: o.COMMON_CONFETTI_SPRITES,
                spriteWidth: o.COMMON_CONFETTI_MAX_SPRITE_SIZE,
                spriteHeight: o.COMMON_CONFETTI_MAX_SPRITE_SIZE
            })]
        })
    }
}