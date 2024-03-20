function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        },
        CenterControlButton: function() {
            return x
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("834897"),
        o = n("461380"),
        u = n("587974"),
        d = n("550410"),
        c = n("641568"),
        f = n("782340"),
        p = n("4536");

    function m(e) {
        let {
            label: t,
            onClick: n,
            onKeyDown: l,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: u,
            className: c,
            wrapperClassName: f,
            iconClassName: m,
            iconComponent: h,
            themeable: x = !1,
            disabled: E = !1,
            isActive: y = !1,
            tooltipPosition: g = "top",
            shouldShowTooltip: S = !0,
            forceTooltipOpen: C = !1,
            buttonRef: _,
            grow: T,
            "aria-label": I
        } = e;
        return (0, i.jsx)(d.default, {
            children: (0, i.jsx)(s.Tooltip, {
                position: g,
                text: t,
                "aria-label": I,
                shouldShow: S,
                forceOpen: C,
                children: e => {
                    let {
                        onClick: t,
                        onContextMenu: d,
                        onMouseEnter: g,
                        onMouseLeave: S,
                        ...C
                    } = e;
                    return (0, i.jsx)(s.Button, {
                        look: s.Button.Looks.BLANK,
                        size: s.Button.Sizes.NONE,
                        onKeyDown: e => {
                            null == l || l(e)
                        },
                        onClick: e => {
                            null == t || t(), null == n || n(e)
                        },
                        onMouseEnter: e => {
                            null == g || g(), null == r || r(e)
                        },
                        onMouseLeave: e => {
                            null == S || S(), null == o || o(e)
                        },
                        onContextMenu: e => {
                            null == d || d(), null == u || u(e)
                        },
                        onFocus: e => {
                            null == g || g(), null == r || r(e)
                        },
                        onBlur: e => {
                            null == S || S(), null == o || o(e)
                        },
                        disabled: E,
                        innerClassName: p.lineHeightReset,
                        className: a({
                            [p.active]: y
                        }, c),
                        wrapperClassName: f,
                        buttonRef: _,
                        grow: T,
                        "aria-label": I,
                        ...C,
                        children: (0, i.jsx)(h, {
                            className: a(p.controlIcon, m, {
                                [p.themeable]: x,
                                [p.active]: y
                            }),
                            color: "currentColor"
                        })
                    })
                }
            })
        })
    }
    let h = {
        red: p.red,
        white: p.white,
        green: p.green,
        yellow: p.yellow,
        primaryDark: p.primaryDark,
        primaryLight: p.primaryLight,
        activeLight: p.activeLight
    };

    function x(e) {
        let {
            color: t,
            isActive: n = !1,
            className: l,
            iconClassName: x,
            onPopoutClick: E,
            popoutOpen: y = !1,
            ...g
        } = e, S = (0, c.default)(t, n), C = (0, r.default)("(max-width: 456px)"), _ = (0, i.jsx)(m, {
            ...g,
            grow: !1,
            onContextMenu: E,
            iconClassName: a(x, p.centerIcon),
            className: a(C ? l : null, p.staticButton, p.centerButton, h[S])
        });
        return C ? _ : (0, i.jsxs)("div", {
            className: a(l, p.contextMenuContainer),
            children: [(0, i.jsx)(u.default, {
                mask: null == E ? null : u.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                width: 56,
                height: 56,
                children: _
            }), null != E ? (0, i.jsx)(d.default, {
                children: (0, i.jsx)(s.Clickable, {
                    "aria-label": f.default.Messages.MORE_OPTIONS,
                    onClick: E,
                    onContextMenu: E,
                    className: a(p.contextMenuNub, h[S], {
                        [p.active]: y
                    }),
                    children: (0, i.jsx)(o.default, {
                        className: a(p.contextMenuCaret, {
                            [p.open]: y
                        })
                    })
                })
            }) : null]
        })
    }
}