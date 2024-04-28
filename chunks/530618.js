function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("887024"),
        a = n("675654");
    t.default = function(e) {
        let {
            confettiTarget: t,
            confettiCanvas: n,
            confettiVelocityMultiplier: o,
            sprites: l,
            colors: u
        } = e, [d, _] = r.useState(null), c = (0, s.useConfettiCannon)(n, d), [E, I] = r.useState(!1);
        return r.useEffect(() => {
            let e = Array(10).fill(0);
            return null != t && c.isReady && !E && (e = e.map((n, i) => setTimeout(() => {
                var n, r;
                i === e.length - 1 && I(!0), c.createMultipleConfetti((n = t.getBoundingClientRect(), r = null != (r = o) ? r : 1, {
                    ...a.COMMON_CONFETTI_BASE_CONFIG,
                    position: {
                        type: "static-random",
                        minValue: {
                            x: n.x,
                            y: n.y
                        },
                        maxValue: {
                            x: n.x + n.width,
                            y: n.y + n.height / 2
                        }
                    },
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: -100 * r,
                            y: -50 * r
                        },
                        maxValue: {
                            x: 100 * r,
                            y: -300 * r
                        }
                    },
                    dragCoefficient: {
                        type: "static",
                        value: 1e-4
                    }
                }), 50)
            }, 100 * i))), () => {
                for (let t of e) clearTimeout(t)
            }
        }, [c, t, E, o]), (0, i.jsx)(s.SpriteCanvas, {
            ref: _,
            sprites: null != l ? l : a.COMMON_CONFETTI_SPRITES,
            colors: null != u ? u : a.COMMON_CONFETTI_COLORS,
            spriteWidth: a.COMMON_CONFETTI_MAX_SPRITE_SIZE,
            spriteHeight: a.COMMON_CONFETTI_MAX_SPRITE_SIZE
        })
    }
}