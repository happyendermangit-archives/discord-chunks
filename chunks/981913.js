function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        },
        CenterControlButton: function() {
            return E
        }
    });
    var l = n("37983");
    n("884691");
    var i = n("414456"),
        a = n.n(i),
        s = n("77078"),
        r = n("834897"),
        o = n("461380"),
        u = n("587974"),
        d = n("550410"),
        c = n("641568"),
        f = n("782340"),
        m = n("4536");

    function p(e) {
        let {
            label: t,
            onClick: n,
            onKeyDown: i,
            onMouseEnter: r,
            onMouseLeave: o,
            onContextMenu: u,
            className: c,
            wrapperClassName: f,
            iconClassName: p,
            iconComponent: h,
            themeable: E = !1,
            disabled: g = !1,
            isActive: C = !1,
            tooltipPosition: S = "top",
            shouldShowTooltip: T = !0,
            forceTooltipOpen: v = !1,
            buttonRef: I,
            grow: _,
            "aria-label": N
        } = e;
        return (0, l.jsx)(d.default, {
            children: (0, l.jsx)(s.Tooltip, {
                position: S,
                text: t,
                "aria-label": N,
                shouldShow: T,
                forceOpen: v,
                children: e => {
                    let {
                        onClick: t,
                        onContextMenu: d,
                        onMouseEnter: S,
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
                            null == S || S(), null == r || r(e)
                        },
                        onMouseLeave: e => {
                            null == T || T(), null == o || o(e)
                        },
                        onContextMenu: e => {
                            null == d || d(), null == u || u(e)
                        },
                        onFocus: e => {
                            null == S || S(), null == r || r(e)
                        },
                        onBlur: e => {
                            null == T || T(), null == o || o(e)
                        },
                        disabled: g,
                        innerClassName: m.lineHeightReset,
                        className: a({
                            [m.active]: C
                        }, c),
                        wrapperClassName: f,
                        buttonRef: I,
                        grow: _,
                        "aria-label": N,
                        ...v,
                        children: (0, l.jsx)(h, {
                            className: a(m.controlIcon, p, {
                                [m.themeable]: E,
                                [m.active]: C
                            }),
                            color: "currentColor"
                        })
                    })
                }
            })
        })
    }
    let h = {
        red: m.red,
        white: m.white,
        green: m.green,
        yellow: m.yellow,
        primaryDark: m.primaryDark,
        primaryLight: m.primaryLight,
        activeLight: m.activeLight
    };

    function E(e) {
        let {
            color: t,
            isActive: n = !1,
            className: i,
            iconClassName: E,
            onPopoutClick: g,
            popoutOpen: C = !1,
            ...S
        } = e, T = (0, c.default)(t, n), v = (0, r.default)("(max-width: 456px)"), I = (0, l.jsx)(p, {
            ...S,
            grow: !1,
            onContextMenu: g,
            iconClassName: a(E, m.centerIcon),
            className: a(v ? i : null, m.staticButton, m.centerButton, h[T])
        });
        return v ? I : (0, l.jsxs)("div", {
            className: a(i, m.contextMenuContainer),
            children: [(0, l.jsx)(u.default, {
                mask: null == g ? null : u.MaskIDs.CHANNEL_CALL_CONTROL_BUTTON,
                width: 56,
                height: 56,
                children: I
            }), null != g ? (0, l.jsx)(d.default, {
                children: (0, l.jsx)(s.Clickable, {
                    "aria-label": f.default.Messages.MORE_OPTIONS,
                    onClick: g,
                    onContextMenu: g,
                    className: a(m.contextMenuNub, h[T], {
                        [m.active]: C
                    }),
                    children: (0, l.jsx)(o.default, {
                        className: a(m.contextMenuCaret, {
                            [m.open]: C
                        })
                    })
                })
            }) : null]
        })
    }
}