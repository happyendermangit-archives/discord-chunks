function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BackdropStyles: function() {
            return s
        },
        default: function() {
            return E
        }
    });
    var i, s, r = n("37983"),
        a = n("884691"),
        o = n("414456"),
        l = n.n(o),
        u = n("146606"),
        d = n("77078"),
        c = n("84339"),
        _ = n("816452");
    (i = s || (s = {})).SUBTLE = "SUBTLE", i.DARK = "DARK", i.BLUR = "BLUR";
    let f = a.forwardRef(function(e, t) {
        let {
            backdropStyle: n = "SUBTLE",
            backdropInstant: i = !1,
            zIndexBoost: s = 0,
            LayerComponent: a,
            isVisible: o,
            onClose: f
        } = e, E = function() {
            let e = (0, d.useToken)(d.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
                    opacity: .25
                }),
                t = (0, d.useToken)(d.tokens.colors.BG_BACKDROP).spring();
            return {
                SUBTLE: e,
                DARK: t,
                BLUR: t
            }
        }(), h = E[n], g = (0, d.useToken)(d.tokens.colors.BG_BACKDROP_NO_OPACITY).spring({
            opacity: 0
        }), m = {
            background: g,
            backdropFilter: "blur(0px)"
        }, p = (0, c.default)(i), S = (0, u.useTransition)(o, {
            keys: e => e ? "backdrop" : "empty",
            config: {
                duration: i || p ? 0 : 300
            },
            from: m,
            enter: {
                background: h,
                backdropFilter: "blur(".concat("BLUR" === n ? 8 : 0, "px)")
            },
            leave: m
        });
        if (null == a) {
            let e = {
                zIndex: 1e3 + s
            };
            return S((t, n) => n ? (0, r.jsx)(u.animated.div, {
                className: _.backdrop,
                style: {
                    ...t,
                    ...e
                },
                onClick: f
            }) : null)
        }
        return (0, r.jsx)(a, {
            children: S((e, t) => t ? (0, r.jsx)(u.animated.div, {
                className: l(_.backdrop, _.withLayer),
                style: e,
                onClick: f
            }) : null)
        })
    });
    var E = f
}