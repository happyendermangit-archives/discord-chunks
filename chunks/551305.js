function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NotificationTypes: function() {
            return l
        },
        default: function() {
            return x
        }
    });
    var i, l, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("146606"),
        d = n("77078"),
        c = n("128295"),
        f = n("414868"),
        m = n("587974"),
        p = n("179859");
    (i = l || (l = {}))[i.UPDATE = 0] = "UPDATE", i[i.NEW = 1] = "NEW";
    let h = {
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
    var x = s.memo(function(e) {
        let {
            className: t,
            disabled: n = !1,
            innerClassName: i,
            childClassName: l,
            iconClassName: s,
            icon: r,
            children: x,
            onClick: E,
            isActive: y,
            onMouseEnter: g,
            onMouseLeave: S,
            onFocus: C,
            onBlur: T,
            pulse: _,
            sparkle: I,
            notification: v,
            "aria-label": A,
            "aria-expanded": N,
            "aria-haspopup": R,
            "aria-controls": O
        } = e, M = (0, u.useTransition)(null != x, {
            ...h,
            keys: e => e ? "children" : "icon"
        }), k = e => {
            let {
                component: t
            } = e;
            return null != v ? (0, a.jsxs)("div", {
                className: p.buttonContent,
                children: [(0, a.jsx)(m.default, {
                    className: p.iconMask,
                    mask: m.MaskIDs.CHAT_INPUT_BUTTON_NOTIFICATION,
                    width: 24,
                    height: 24,
                    children: t
                }), (0, a.jsx)("span", {
                    className: p.notificationDot
                })]
            }) : t
        };
        return (0, a.jsxs)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            "aria-label": A,
            "aria-expanded": N,
            "aria-haspopup": R,
            "aria-controls": O,
            disabled: n,
            className: o(t, {
                [p.active]: y
            }),
            innerClassName: o(p.button, i, {
                [p.pulseButton]: _
            }),
            onClick: E,
            onMouseEnter: g,
            onMouseLeave: S,
            onFocus: C,
            onBlur: T,
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
                return t ? (0, a.jsx)(u.animated.div, {
                    style: e,
                    className: o(p.buttonWrapper, l),
                    children: k({
                        component: x
                    })
                }, i) : null != r ? (0, a.jsx)(u.animated.div, {
                    style: e,
                    className: o(p.buttonWrapper, l),
                    children: k({
                        component: (0, a.jsx)(r, {
                            className: o(p.icon, s, {
                                [p.pulseIcon]: _
                            })
                        })
                    })
                }, i) : void 0
            }), I && (0, a.jsxs)("div", {
                className: p.sparkleContainer,
                children: [(0, a.jsx)(f.default, {
                    className: p.sparkleStar
                }), (0, a.jsx)(c.default, {
                    className: p.sparklePlus
                })]
            })]
        })
    })
}