function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackdropStyles: function() {
            return r
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("513715"),
        d = n("481060"),
        _ = n("110924"),
        c = n("190720");
    (i = r || (r = {})).SUBTLE = "SUBTLE", i.DARK = "DARK", i.BLUR = "BLUR";
    let E = a.forwardRef(function(e, t) {
        let {
            backdropStyle: n = "SUBTLE",
            backdropInstant: i = !1,
            zIndexBoost: r = 0,
            LayerComponent: a,
            isVisible: o,
            onClose: E
        } = e, I = function() {
            let e = (0, d.useToken)(d.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
                    opacity: .25
                }),
                t = (0, d.useToken)(d.tokens.colors.BG_BACKDROP).spring();
            return {
                SUBTLE: e,
                DARK: t,
                BLUR: t
            }
        }()[n], T = (0, d.useToken)(d.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
            opacity: 0
        }), f = {
            background: T,
            backdropFilter: "blur(0px)"
        }, S = (0, _.default)(i), h = (0, u.useTransition)(o, {
            keys: e => e ? "backdrop" : "empty",
            config: {
                duration: i || S ? 0 : 300
            },
            from: f,
            enter: {
                background: I,
                backdropFilter: "blur(".concat("BLUR" === n ? 8 : 0, "px)")
            },
            leave: f
        });
        if (null == a) {
            let e = {
                zIndex: 1e3 + r
            };
            return h((t, n) => n ? (0, s.jsx)(u.animated.div, {
                className: c.backdrop,
                style: {
                    ...t,
                    ...e
                },
                onClick: E
            }) : null)
        }
        return (0, s.jsx)(a, {
            children: h((e, t) => t ? (0, s.jsx)(u.animated.div, {
                className: l()(c.backdrop, c.withLayer),
                style: e,
                onClick: E
            }) : null)
        })
    });
    t.default = E
}