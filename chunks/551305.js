function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        NotificationTypes: function() {
            return i
        },
        default: function() {
            return E
        }
    });
    var l, i, a = n("37983"),
        s = n("884691"),
        r = n("414456"),
        o = n.n(r),
        u = n("907002"),
        d = n("77078"),
        c = n("128295"),
        f = n("414868"),
        m = n("587974"),
        p = n("179859");
    (l = i || (i = {}))[l.UPDATE = 0] = "UPDATE", l[l.NEW = 1] = "NEW";
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
    var E = s.memo(function(e) {
        let {
            className: t,
            disabled: n = !1,
            innerClassName: l,
            childClassName: i,
            iconClassName: s,
            icon: r,
            children: E,
            onClick: g,
            isActive: C,
            onMouseEnter: S,
            onMouseLeave: T,
            onFocus: I,
            onBlur: v,
            pulse: _,
            sparkle: N,
            notification: A,
            "aria-label": x,
            "aria-expanded": y,
            "aria-haspopup": O,
            "aria-controls": R
        } = e, M = (0, u.useTransition)(null != E, {
            ...h,
            keys: e => e ? "children" : "icon"
        }), L = e => {
            let {
                component: t
            } = e;
            return null != A ? (0, a.jsxs)("div", {
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
            "aria-label": x,
            "aria-expanded": y,
            "aria-haspopup": O,
            "aria-controls": R,
            disabled: n,
            className: o(t, {
                [p.active]: C
            }),
            innerClassName: o(p.button, l, {
                [p.pulseButton]: _
            }),
            onClick: g,
            onMouseEnter: S,
            onMouseLeave: T,
            onFocus: I,
            onBlur: v,
            focusProps: {
                offset: {
                    top: 4,
                    bottom: 4
                }
            },
            children: [M((e, t, n) => {
                let {
                    key: l
                } = n;
                return t ? (0, a.jsx)(u.animated.div, {
                    style: e,
                    className: o(p.buttonWrapper, i),
                    children: L({
                        component: E
                    })
                }, l) : null != r ? (0, a.jsx)(u.animated.div, {
                    style: e,
                    className: o(p.buttonWrapper, i),
                    children: L({
                        component: (0, a.jsx)(r, {
                            className: o(p.icon, s, {
                                [p.pulseIcon]: _
                            })
                        })
                    })
                }, l) : void 0
            }), N && (0, a.jsxs)("div", {
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