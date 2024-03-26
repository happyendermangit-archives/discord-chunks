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
        p = n("587974"),
        m = n("179859");
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
            onBlur: _,
            pulse: T,
            sparkle: I,
            notification: v,
            "aria-label": N,
            "aria-expanded": A,
            "aria-haspopup": O,
            "aria-controls": R
        } = e, M = (0, u.useTransition)(null != x, {
            ...h,
            keys: e => e ? "children" : "icon"
        }), k = e => {
            let {
                component: t
            } = e;
            return null != v ? (0, a.jsxs)("div", {
                className: m.buttonContent,
                children: [(0, a.jsx)(p.default, {
                    className: m.iconMask,
                    mask: p.MaskIDs.CHAT_INPUT_BUTTON_NOTIFICATION,
                    width: 24,
                    height: 24,
                    children: t
                }), (0, a.jsx)("span", {
                    className: m.notificationDot
                })]
            }) : t
        };
        return (0, a.jsxs)(d.Button, {
            look: d.Button.Looks.BLANK,
            size: d.Button.Sizes.NONE,
            "aria-label": N,
            "aria-expanded": A,
            "aria-haspopup": O,
            "aria-controls": R,
            disabled: n,
            className: o(t, {
                [m.active]: y
            }),
            innerClassName: o(m.button, i, {
                [m.pulseButton]: T
            }),
            onClick: E,
            onMouseEnter: g,
            onMouseLeave: S,
            onFocus: C,
            onBlur: _,
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
                    className: o(m.buttonWrapper, l),
                    children: k({
                        component: x
                    })
                }, i) : null != r ? (0, a.jsx)(u.animated.div, {
                    style: e,
                    className: o(m.buttonWrapper, l),
                    children: k({
                        component: (0, a.jsx)(r, {
                            className: o(m.icon, s, {
                                [m.pulseIcon]: T
                            })
                        })
                    })
                }, i) : void 0
            }), I && (0, a.jsxs)("div", {
                className: m.sparkleContainer,
                children: [(0, a.jsx)(f.default, {
                    className: m.sparkleStar
                }), (0, a.jsx)(c.default, {
                    className: m.sparklePlus
                })]
            })]
        })
    })
}