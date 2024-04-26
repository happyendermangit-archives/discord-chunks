function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NotificationTypes: function() {
            return r
        }
    });
    var i, r, s = n("735250"),
        a = n("470079"),
        o = n("120356"),
        l = n.n(o),
        u = n("718017"),
        d = n("481060"),
        _ = n("855981"),
        c = n("55543"),
        E = n("806519"),
        I = n("882134");
    (i = r || (r = {}))[i.UPDATE = 0] = "UPDATE", i[i.NEW = 1] = "NEW";
    let T = {
        config: {
            friction: 26,
            tension: 700,
            mass: 1
        },
        initial: {
            scale: 1,
            opacity: 1
        },
        from: {
            scale: .6,
            opacity: 0
        },
        enter: {
            scale: 1,
            opacity: 1
        },
        leave: {
            scale: .6,
            opacity: 0
        }
    };
    t.default = a.memo(function(e) {
        let {
            className: t,
            disabled: n = !1,
            innerClassName: i,
            childClassName: r,
            iconClassName: a,
            icon: o,
            children: f,
            onClick: S,
            isActive: h,
            onMouseEnter: A,
            onMouseLeave: m,
            onFocus: N,
            onBlur: p,
            pulse: O,
            sparkle: R,
            notification: C,
            "aria-label": g,
            "aria-expanded": L,
            "aria-haspopup": D,
            "aria-controls": v
        } = e, M = (0, u.useTransition)(null != f, {
            ...T,
            keys: e => e ? "children" : "icon"
        }), y = e => {
            let {
                component: t
            } = e;
            return null != C ? (0, s.jsxs)("div", {
                className: I.buttonContent,
                children: [(0, s.jsx)(E.default, {
                    className: I.iconMask,
                    mask: E.MaskIDs.CHAT_INPUT_BUTTON_NOTIFICATION,
                    width: 24,
                    height: 24,
                    children: t
                }), (0, s.jsx)("span", {
                    className: I.notificationDot
                })]
            }) : t
        };
        return (0, s.jsxs)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            "aria-label": g,
            "aria-expanded": L,
            "aria-haspopup": D,
            "aria-controls": v,
            disabled: n,
            className: l()(t, {
                [I.active]: h
            }),
            innerClassName: l()(I.button, i, {
                [I.pulseButton]: O
            }),
            onClick: S,
            onMouseEnter: A,
            onMouseLeave: m,
            onFocus: N,
            onBlur: p,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4
                }
            },
            children: [M((e, t, n) => {
                let {
                    key: i
                } = n;
                return t ? (0, s.jsx)(u.animated.div, {
                    style: e,
                    className: l()(I.buttonWrapper, r),
                    children: y({
                        component: f
                    })
                }, i) : null != o ? (0, s.jsx)(u.animated.div, {
                    style: e,
                    className: l()(I.buttonWrapper, r),
                    children: y({
                        component: (0, s.jsx)(o, {
                            className: l()(I.icon, a, {
                                [I.pulseIcon]: O
                            })
                        })
                    })
                }, i) : void 0
            }), R && (0, s.jsxs)("div", {
                className: I.sparkleContainer,
                children: [(0, s.jsx)(c.default, {
                    className: I.sparkleStar
                }), (0, s.jsx)(_.default, {
                    className: I.sparklePlus
                })]
            })]
        })
    })
}