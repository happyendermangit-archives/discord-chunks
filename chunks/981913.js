function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        },
        CenterControlButton: function() {
            return h
        }
    });
    var i = n("37983");
    n("884691");
    var l = n("414456"),
        a = n.n(l),
        s = n("77078"),
        r = n("461380"),
        o = n("587974"),
        u = n("550410"),
        d = n("641568"),
        c = n("782340"),
        f = n("4536");

    function p(e) {
        let {
            label: t,
            onClick: n,
            onKeyDown: l,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: d,
            className: c,
            wrapperClassName: p,
            iconClassName: m,
            iconComponent: h,
            themeable: x = !1,
            disabled: E = !1,
            isActive: y = !1,
            tooltipPosition: g = "top",
            shouldShowTooltip: S = !0,
            forceTooltipOpen: C = !1,
            buttonRef: I,
            grow: T,
            "aria-label": _
        } = e;
        return (0, i.jsx)(u.default, {
            children: (0, i.jsx)(s.Tooltip, {
                position: g,
                text: t,
                "aria-label": _,
                shouldShow: S,
                forceOpen: C,
                children: e => {
                    let {
                        onClick: t,
                        onContextMenu: u,
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
                            null == u || u(), null == d || d(e)
                        },
                        onFocus: e => {
                            null == g || g(), null == r || r(e)
                        },
                        onBlur: e => {
                            null == S || S(), null == o || o(e)
                        },
                        disabled: E,
                        innerClassName: f.lineHeightReset,
                        className: a({
                            [f.active]: y
                        }, c),
                        wrapperClassName: p,
                        buttonRef: I,
                        grow: T,
                        "aria-label": _,
                        ...C,
                        children: (0, i.jsx)(h, {
                            className: a(f.controlIcon, m, {
                                [f.themeable]: x,
                                [f.active]: y
                            })
                        })
                    })
                }
            })
        })
    }
    let m = {
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
            className: l,
            iconClassName: h,
            onPopoutClick: x,
            popoutOpen: E = !1,
            ...y
        } = e, g = (0, d.default)(t, n), S = (0, i.jsx)(p, {
            ...y,
            grow: !1,
            onContextMenu: x,
            iconClassName: a(h, f.centerIcon),
            className: a(null == x ? l : f.staticButton, f.centerButton, m[g])
        }), C = null;
        return null != x && (C = (0, i.jsxs)("div", {
            className: a(l, f.contextMenuContainer),
            children: [(0, i.jsx)(o.default, {
                mask: o.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                width: 56,
                height: 56,
                children: S
            }), (0, i.jsx)(u.default, {
                children: (0, i.jsx)(s.Clickable, {
                    "aria-label": c.default.Messages.MORE_OPTIONS,
                    onClick: x,
                    onContextMenu: x,
                    className: a(f.contextMenuNub, m[g], {
                        [f.active]: E
                    }),
                    children: (0, i.jsx)(r.default, {
                        className: a(f.contextMenuCaret, {
                            [f.open]: E
                        })
                    })
                })
            })]
        })), (0, i.jsxs)(i.Fragment, {
            children: [C, (0, i.jsx)("div", {
                className: a({
                    [f.unmasked]: null != x
                }, null != x ? l : null),
                children: S
            })]
        })
    }
}