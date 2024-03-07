function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        },
        CenterControlButton: function() {
            return h
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("461380"),
        o = n("587974"),
        u = n("550410"),
        d = n("641568"),
        c = n("782340"),
        f = n("4536");

    function m(e) {
        let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: d,
            className: c,
            wrapperClassName: m,
            iconClassName: p,
            iconComponent: h,
            themeable: E = !1,
            disabled: g = !1,
            isActive: S = !1,
            tooltipPosition: C = "top",
            shouldShowTooltip: T = !0,
            forceTooltipOpen: v = !1,
            buttonRef: I,
            grow: _,
            "aria-label": N
        } = e;
        return (0, l.jsx)(u.default, {
            children: (0, l.jsx)(s.Tooltip, {
                position: C,
                text: t,
                "aria-label": N,
                shouldShow: T,
                forceOpen: v,
                children: e => {
                    let {
                        onClick: t,
                        onContextMenu: u,
                        onMouseEnter: C,
                        onMouseLeave: T,
                        ...v
                    } = e;
                    return (0, l.jsx)(s.Button, {
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.NONE,
                        onKeyDown: e => {
                            null == i || i(e)
                        },
                        onClick: e => {
                            null == t || t(), null == n || n(e)
                        },
                        onMouseEnter: e => {
                            null == C || C(), null == r || r(e)
                        },
                        onMouseLeave: e => {
                            null == T || T(), null == o || o(e)
                        },
                        onContextMenu: e => {
                            null == u || u(), null == d || d(e)
                        },
                        onFocus: e => {
                            null == C || C(), null == r || r(e)
                        },
                        onBlur: e => {
                            null == T || T(), null == o || o(e)
                        },
                        disabled: g,
                        innerClassName: f.lineHeightReset,
                        className: a({
                            [f.active]: S
                        }, c),
                        wrapperClassName: m,
                        buttonRef: I,
                        grow: _,
                        "aria-label": N,
                        ...v,
                        children: (0, l.jsx)(h, {
                            className: a(f.controlIcon, p, {
                                [f.themeable]: E,
                                [f.active]: S
                            })
                        })
                    })
                }
            })
        })
    }
    let p = {
        red: f.red,
        white: f.white,
        green: f.green,
        yellow: f.yellow,
        primaryDark: f.primaryDark,
        primaryLight: f.primaryLight,
        activeLight: f.activeLight
    };

    function h(e) {
        let {
            color: t,
            isActive: n = !1,
            className: i,
            iconClassName: h,
            onPopoutClick: E,
            popoutOpen: g = !1,
            ...S
        } = e, C = (0, d.default)(t, n), T = (0, l.jsx)(m, {
            ...S,
            grow: !1,
            onContextMenu: E,
            iconClassName: a(h, f.centerIcon),
            className: a(null == E ? i : f.staticButton, f.centerButton, p[C])
        }), v = null;
        return null != E && (v = (0, l.jsxs)("div", {
            className: a(i, f.contextMenuContainer),
            children: [(0, l.jsx)(o.default, {
                mask: o.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                width: 56,
                height: 56,
                children: T
            }), (0, l.jsx)(u.default, {
                children: (0, l.jsx)(s.Clickable, {
                    "aria-label": c.default.Messages.MORE_OPTIONS,
                    onClick: E,
                    onContextMenu: E,
                    className: a(f.contextMenuNub, p[C], {
                        [f.active]: g
                    }),
                    children: (0, l.jsx)(r.default, {
                        className: a(f.contextMenuCaret, {
                            [f.open]: g
                        })
                    })
                })
            })]
        })), (0, l.jsxs)(l.Fragment, {
            children: [v, (0, l.jsx)("div", {
                className: a({
                    [f.unmasked]: null != E
                }, null != E ? i : null),
                children: T
            })]
        })
    }
}